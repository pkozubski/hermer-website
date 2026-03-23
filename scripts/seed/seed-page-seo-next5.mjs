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

const sharedImageUrl =
  "https://e-hermer.pl/wp-content/uploads/2024/05/klinika-na-nowo-website-1024x980.webp";

const pages = [
  {
    id: "page-strony-internetowe-gniezno",
    slug: "strony-internetowe-gniezno",
    title: "Strony internetowe Gniezno",
    metaTitle: "Strony internetowe Gniezno - Tworzenie stron Gniezno",
    metaDescription:
      "Strony internetowe Gniezno to jedna z naszych usług stworzonych z myślą o mieszkańcach Gniezna. Stworzymy stronę dopasowaną do Twoich potrzeb",
    canonicalUrl: "https://e-hermer.pl/strony-internetowe-gniezno/",
    imageAlt: "strony internetowe gniezno",
    keywords: ["strony internetowe gniezno"],
  },
  {
    id: "page-tworzenie-stron-www-pila",
    slug: "tworzenie-stron-www-pila",
    title: "Strony internetowe Piła",
    metaTitle: "Strony internetowe Piła - Tworzenie stron www Piła",
    metaDescription:
      "Strony Internetowe Piła to usługa skierowana specjalnie do mieszkańców Piły. Przygotujemy stronę idealnie dopasowaną do Twoich potrzeb.",
    canonicalUrl: "https://e-hermer.pl/tworzenie-stron-www-pila/",
    imageAlt: "strony internetowe piła",
    keywords: ["strony internetowe piła"],
  },
  {
    id: "page-tworzenie-stron-www-stargard",
    slug: "tworzenie-stron-www-stargard",
    title: "Strony internetowe Stargard",
    metaTitle: "Strony internetowe Stargard - Strony www Stargard - Hermer",
    metaDescription:
      "Strony internetowe Stargard to usługa skierowana do mieszkańców Stargardu. Sprawdź nasza ofertę i Zadzwoń!",
    canonicalUrl: "https://e-hermer.pl/tworzenie-stron-www-stargard/",
    imageAlt: "strony internetowe stargard",
    keywords: ["strony internetowe stargard"],
  },
  {
    id: "page-tworzenie-stron-www-walcz",
    slug: "tworzenie-stron-www-walcz",
    title: "Tworzenie stron internetowych Wałcz",
    metaTitle: "Tworzenie stron internetowych Wałcz - Strony www Wałcz",
    metaDescription:
      "Tworzenie stron internetowych Wałcz to usługa skierowana specjalnie do mieszkańców Piły. Przygotujemy stronę idealnie dopasowaną do Twoich potrzeb.",
    canonicalUrl: "https://e-hermer.pl/tworzenie-stron-www-walcz/",
    imageAlt: "tworzenie stron internetowych wałcz",
    keywords: ["tworzenie stron internetowych wałcz"],
  },
  {
    id: "page-tworzenie-stron-www-zlotow",
    slug: "tworzenie-stron-www-zlotow",
    title: "Tworzenie stron www Złotów",
    metaTitle: "Tworzenie stron www Złotów - Strony www Złotów",
    metaDescription:
      "Strony internetowe Złotów to usługa skierowana specjalnie do mieszkańców Piły. Przygotujemy stronę idealnie dopasowaną do Twoich potrzeb.",
    canonicalUrl: "https://e-hermer.pl/tworzenie-stron-www-zlotow/",
    imageAlt: "tworzenie stron www złotów",
    keywords: ["tworzenie stron www złotów"],
  },
];

let cachedImageRef;

async function uploadSharedImage() {
  if (cachedImageRef) {
    return cachedImageRef;
  }

  const response = await fetch(sharedImageUrl);
  if (!response.ok) {
    throw new Error(
      `Nie udalo sie pobrac obrazu OG (${response.status}) dla batch seed`
    );
  }

  const contentType = response.headers.get("content-type") || "image/webp";
  const bytes = await response.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const uploadedAsset = await client.assets.upload("image", buffer, {
    filename: "city-pages-og.webp",
    contentType,
  });

  cachedImageRef = uploadedAsset._id;
  return cachedImageRef;
}

function toImageField(imageRef) {
  return {
    _type: "image",
    asset: {
      _type: "reference",
      _ref: imageRef,
    },
  };
}

async function upsertPageSeo(page) {
  const existingBySlug = await client.fetch(
    `*[_type == "page" && slug.current == $slug][0]{
      _id,
      seo {
        metaImage { asset->{_id} },
        openGraph { image { asset->{_id} } }
      }
    }`,
    { slug: page.slug }
  );

  const docId = existingBySlug?._id || page.id;
  let imageRef =
    existingBySlug?.seo?.openGraph?.image?.asset?._id ||
    existingBySlug?.seo?.metaImage?.asset?._id;

  if (!imageRef) {
    imageRef = await uploadSharedImage();
  }

  const imageField = toImageField(imageRef);

  await client.createIfNotExists({
    _id: docId,
    _type: "page",
    title: page.title,
    slug: {
      _type: "slug",
      current: page.slug,
    },
  });

  await client
    .patch(docId)
    .set({
      title: page.title,
      slug: {
        _type: "slug",
        current: page.slug,
      },
      seo: {
        _type: "seoMetaFields",
        nofollowAttributes: false,
        metaTitle: page.metaTitle,
        metaDescription: page.metaDescription,
        metaImage: imageField,
        seoKeywords: page.keywords,
        openGraph: {
          _type: "openGraph",
          url: page.canonicalUrl,
          title: page.metaTitle,
          description: page.metaDescription,
          siteName: "Hermer",
          image: imageField,
        },
        twitter: {
          _type: "twitter",
          cardType: "summary_large_image",
        },
      },
    })
    .commit();

  console.log(`OK: ${page.slug} -> ${docId}`);
}

async function run() {
  for (const page of pages) {
    await upsertPageSeo(page);
  }

  console.log(`Zakonczono. Zasilono ${pages.length} stron.`);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
