import { createClient } from "@sanity/client";
import { execSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

function loadEnvFile(filePath) {
  const content = readFileSync(filePath, "utf8");

  for (const line of content.split(/\r?\n/)) {
    if (!line || line.startsWith("#") || !line.includes("=")) {
      continue;
    }

    const eqIndex = line.indexOf("=");
    const key = line.slice(0, eqIndex).trim();
    const value = line.slice(eqIndex + 1).trim();

    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
}

function extractObjectLiteral(source, declarationPrefix) {
  const declarationIndex = source.indexOf(declarationPrefix);
  if (declarationIndex === -1) {
    return null;
  }

  const objectStart = source.indexOf("{", declarationIndex);
  if (objectStart === -1) {
    return null;
  }

  let depth = 0;
  let inString = false;
  let stringQuote = "";
  let escaped = false;

  for (let i = objectStart; i < source.length; i++) {
    const ch = source[i];

    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (ch === "\\") {
        escaped = true;
      } else if (ch === stringQuote) {
        inString = false;
        stringQuote = "";
      }
      continue;
    }

    if (ch === '"' || ch === "'" || ch === "`") {
      inString = true;
      stringQuote = ch;
      continue;
    }

    if (ch === "{") {
      depth++;
    } else if (ch === "}") {
      depth--;
      if (depth === 0) {
        return source.slice(objectStart, i + 1);
      }
    }
  }

  return null;
}

function safeFirstImage(imageValue) {
  if (!imageValue) {
    return undefined;
  }

  if (Array.isArray(imageValue)) {
    return imageValue[0];
  }

  return imageValue;
}

function imageUrlFromMetadataImage(imageValue) {
  if (!imageValue) {
    return undefined;
  }

  if (typeof imageValue === "string") {
    return imageValue;
  }

  if (imageValue instanceof URL) {
    return imageValue.toString();
  }

  if (typeof imageValue === "object" && typeof imageValue.url === "string") {
    return imageValue.url;
  }

  if (typeof imageValue === "object" && imageValue.url instanceof URL) {
    return imageValue.url.toString();
  }

  return undefined;
}

function toArrayKeywords(value) {
  if (!value) {
    return [];
  }

  if (typeof value === "string") {
    return [value];
  }

  if (Array.isArray(value)) {
    return value.filter((item) => typeof item === "string");
  }

  return [];
}

loadEnvFile(resolve(process.cwd(), ".env.local"));

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !dataset || !token) {
  throw new Error(
    "Brakuje zmiennych SANITY. Upewnij sie, ze NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET i SANITY_API_WRITE_TOKEN sa ustawione."
  );
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

const files = execSync(
  'rg -l "const metadataFallback: Metadata =" src/app | sort',
  { encoding: "utf8" }
)
  .trim()
  .split("\n")
  .filter(Boolean);

const uploadedImageRefByUrl = new Map();

async function ensureImageRef(imageUrl) {
  if (!imageUrl) {
    return undefined;
  }

  if (uploadedImageRefByUrl.has(imageUrl)) {
    return uploadedImageRefByUrl.get(imageUrl);
  }

  const response = await fetch(imageUrl);
  if (!response.ok) {
    throw new Error(`Nie udalo sie pobrac obrazu OG (${response.status})`);
  }

  const contentType = response.headers.get("content-type") || "image/webp";
  const bytes = await response.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const uploaded = await client.assets.upload("image", buffer, {
    filename: imageUrl.split("/").pop() || "seo-image.webp",
    contentType,
  });

  uploadedImageRefByUrl.set(imageUrl, uploaded._id);
  return uploaded._id;
}

function makeDocId(slug) {
  const normalized = slug
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return `page-${normalized || "home"}`;
}

async function upsertSeoFromFile(filePath) {
  const source = readFileSync(filePath, "utf8");
  const slugMatch = source.match(/const SEO_SLUG = "([^"]+)";/);
  if (!slugMatch) {
    console.log(`Pominieto (brak SEO_SLUG): ${filePath}`);
    return;
  }

  const slug = slugMatch[1];
  const metadataLiteral = extractObjectLiteral(
    source,
    "const metadataFallback: Metadata ="
  );
  if (!metadataLiteral) {
    console.log(`Pominieto (brak metadataFallback): ${filePath}`);
    return;
  }

  const metadata = Function(`"use strict"; return (${metadataLiteral});`)();
  const title =
    typeof metadata.title === "string"
      ? metadata.title
      : typeof metadata.title?.default === "string"
        ? metadata.title.default
        : slug;
  const description =
    typeof metadata.description === "string" ? metadata.description : "";
  const canonical =
    (typeof metadata.alternates?.canonical === "string"
      ? metadata.alternates.canonical
      : undefined) ||
    (typeof metadata.openGraph?.url === "string"
      ? metadata.openGraph.url
      : undefined);
  const ogImage = safeFirstImage(metadata.openGraph?.images);
  const imageUrl = imageUrlFromMetadataImage(ogImage);
  const keywords = toArrayKeywords(metadata.keywords);
  const siteName =
    typeof metadata.openGraph?.siteName === "string"
      ? metadata.openGraph.siteName
      : "Hermer";
  const cardType =
    typeof metadata.twitter?.card === "string"
      ? metadata.twitter.card
      : "summary_large_image";

  const existingBySlug = await client.fetch(
    `*[_type == "page" && slug.current == $slug][0]{
      _id,
      seo {
        metaImage { asset->{_id} },
        openGraph { image { asset->{_id} } }
      }
    }`,
    { slug }
  );

  const docId = existingBySlug?._id || makeDocId(slug);
  let imageRef =
    existingBySlug?.seo?.openGraph?.image?.asset?._id ||
    existingBySlug?.seo?.metaImage?.asset?._id;

  if (!imageRef && imageUrl) {
    imageRef = await ensureImageRef(imageUrl);
  }

  const imageField = imageRef
    ? {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: imageRef,
        },
      }
    : undefined;

  await client.createIfNotExists({
    _id: docId,
    _type: "page",
    title,
    slug: {
      _type: "slug",
      current: slug,
    },
  });

  const seoPayload = {
    _type: "seoMetaFields",
    nofollowAttributes: false,
    metaTitle: title,
    metaDescription: description,
    ...(keywords.length ? { seoKeywords: keywords } : {}),
    ...(imageField ? { metaImage: imageField } : {}),
    openGraph: {
      _type: "openGraph",
      ...(canonical ? { url: canonical } : {}),
      title,
      description,
      siteName,
      ...(imageField ? { image: imageField } : {}),
    },
    twitter: {
      _type: "twitter",
      cardType,
    },
  };

  await client
    .patch(docId)
    .setIfMissing({
      title,
      slug: {
        _type: "slug",
        current: slug,
      },
    })
    .set({
      seo: seoPayload,
    })
    .commit();

  console.log(`OK: ${slug} -> ${docId}`);
}

async function run() {
  for (const file of files) {
    await upsertSeoFromFile(file);
  }

  console.log(`Zakonczono. Zasilono SEO dla ${files.length} plikow.`);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
