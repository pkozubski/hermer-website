import { createClient } from "@sanity/client";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

function loadEnvFile(filePath) {
  try {
    const content = readFileSync(filePath, "utf8");
    const lines = content.split("
");
    for (let line of lines) {
      line = line.trim();
      if (!line || line.startsWith("#") || !line.includes("=")) continue;
      const eqIndex = line.indexOf("=");
      const key = line.slice(0, eqIndex).trim();
      const value = line.slice(eqIndex + 1).trim();
      if (!process.env[key]) process.env[key] = value;
    }
  } catch (e) {
    console.warn(`Could not load ${filePath}`);
  }
}

loadEnvFile(resolve(process.cwd(), ".env.local"));

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01",
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

const slug = "strony-internetowe-dla-developerow";
const title = "Strony internetowe dla deweloperów - WWW dla Dewelopera";
const description = "Strony internetowe dla Deweloperów to jedna z naszych specjalizacji. Przygotujemy stronę www idealnie dopasowaną do Twojej branży. Sprawdź!";

async function run() {
  const docId = `page-${slug}`;
  console.log(`Updating SEO description for ${docId}...`);
  
  await client.patch(docId).set({
    "seo.metaDescription": description,
    "seo.openGraph.description": description
  }).commit();
  
  console.log("Success!");
}

run().catch(console.error);
