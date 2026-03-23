import { createClient } from "@sanity/client";
import { readFileSync } from "fs";
import { resolve } from "path";

// Load environment variables locally
function loadEnvFile(filePath) {
  try {
    const content = readFileSync(filePath, "utf8");
    for (const line of content.split(/\r?\n/)) {
      if (!line || line.startsWith("#") || !line.includes("=")) continue;
      const eqIndex = line.indexOf("=");
      const key = line.slice(0, eqIndex).trim();
      const value = line.slice(eqIndex + 1).trim();
      if (!process.env[key]) {
        process.env[key] = value;
      }
    }
  } catch (err) {
    console.warn("Could not find/load .env.local file");
  }
}

loadEnvFile(resolve(process.cwd(), ".env.local"));

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !dataset || !token) {
  throw new Error("Missing SANITY environment variables.");
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

const pagesToCreate = [
  { slug: "obszar-dzialania", title: "Obszar Działania" },
  { slug: "oferta/marketing", title: "Marketing" },
  {
    slug: "oferta/zewnetrzny-dzial-marketingu",
    title: "Zewnętrzny dział marketingu",
  },
  { slug: "blog", title: "Blog" },
  { slug: "realizacje", title: "Realizacje" },
  { slug: "oferta/strony-www", title: "Strony WWW" },
  { slug: "dla-kogo", title: "Dla kogo" },
  { slug: "najlepszy-pakiet", title: "Najlepszy pakiet" },
  { slug: "kontakt", title: "Kontakt" },
  { slug: "o-firmie", title: "O firmie" },
  { slug: "oferta/sklepy-internetowe", title: "Sklepy Internetowe" },
  { slug: "oferta/pozycjonowanie", title: "Pozycjonowanie" },
];

async function run() {
  console.log("Seeding missing pages to allow SEO editing...");

  for (const page of pagesToCreate) {
    const docId = `page-${page.slug.replace(/\//g, "-")}`;

    // Check if it exists
    const query = `*[_type == "page" && slug.current == $slug][0]{ _id }`;
    const doc = await client.fetch(query, { slug: page.slug });

    if (!doc) {
      console.log(`Creating page for ${page.slug}...`);
      await client.create({
        _id: docId,
        _type: "page",
        title: page.title,
        slug: { _type: "slug", current: page.slug },
      });
      console.log(` -> Created ${docId}`);
      await new Promise((resolve) => setTimeout(resolve, 200));
    } else {
      console.log(`Page already exists for ${page.slug} (${doc._id})`);
    }
  }
  console.log(
    "Seeding done! Next, run standard import-seo scripts to populate them.",
  );
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
