import { createClient } from "@sanity/client";
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

const pageSeoConfig = {
  id: "page-tworzenie-stron-www-konin",
  slug: "tworzenie-stron-www-konin",
  title: "Strony internetowe Konin",
  metaTitle: "Strony internetowe Konin - Tworzenie stron Konin - Hermer",
  metaDescription:
    "Strony internetowe Konin to oferta skierowana do mieszkańców Konina. Sprawdź naszą ofertę i Zadzwoń!",
  canonicalUrl: "https://e-hermer.pl/tworzenie-stron-www-konin/",
  imageUrl:
    "https://e-hermer.pl/wp-content/uploads/2024/05/klinika-na-nowo-website-1024x980.webp",
  imageFileName: "tworzenie-stron-www-konin-og.webp",
  keywords: ["strony internetowe konin"],
  siteName: "Hermer",
};

async function uploadImageFromUrl(url, filename) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Nie udalo sie pobrac obrazu OG (${response.status})`);
  }

  const contentType = response.headers.get("content-type") || "image/webp";
  const bytes = await response.arrayBuffer();
  const buffer = Buffer.from(bytes);

  return client.assets.upload("image", buffer, {
    filename,
    contentType,
  });
}

async function run() {
  const existingDoc = await client.getDocument(pageSeoConfig.id);
  let imageRef =
    existingDoc?.seo?.openGraph?.image?.asset?._ref ||
    existingDoc?.seo?.metaImage?.asset?._ref;

  if (!imageRef) {
    const uploadedAsset = await uploadImageFromUrl(
      pageSeoConfig.imageUrl,
      pageSeoConfig.imageFileName
    );
    imageRef = uploadedAsset._id;
  }

  const imageField = {
    _type: "image",
    asset: {
      _type: "reference",
      _ref: imageRef,
    },
  };

  await client.createIfNotExists({
    _id: pageSeoConfig.id,
    _type: "page",
    title: pageSeoConfig.title,
    slug: {
      _type: "slug",
      current: pageSeoConfig.slug,
    },
  });

  await client
    .patch(pageSeoConfig.id)
    .set({
      title: pageSeoConfig.title,
      slug: {
        _type: "slug",
        current: pageSeoConfig.slug,
      },
      seo: {
        _type: "seoMetaFields",
        nofollowAttributes: false,
        metaTitle: pageSeoConfig.metaTitle,
        metaDescription: pageSeoConfig.metaDescription,
        metaImage: imageField,
        seoKeywords: pageSeoConfig.keywords,
        openGraph: {
          _type: "openGraph",
          url: pageSeoConfig.canonicalUrl,
          title: pageSeoConfig.metaTitle,
          description: pageSeoConfig.metaDescription,
          siteName: pageSeoConfig.siteName,
          image: imageField,
        },
        twitter: {
          _type: "twitter",
          cardType: "summary_large_image",
        },
      },
    })
    .commit();

  console.log(
    `SEO strony ${pageSeoConfig.slug} zostalo zasilone w Sanity (id: ${pageSeoConfig.id}).`
  );
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
