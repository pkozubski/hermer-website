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
  throw new Error(
    "Missing SANITY environment variables. Make sure NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, and SANITY_API_WRITE_TOKEN are set.",
  );
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

async function run() {
  const csvPath = resolve(process.cwd(), "seo_data/meta_description_all.csv");
  const content = readFileSync(csvPath, "utf8");

  const lines = content.split(/\r?\n/).filter((line) => line.trim().length > 0);
  // remove headers
  const dataLines = lines.slice(1);

  let successCount = 0;
  let missingCount = 0;

  for (const line of dataLines) {
    // The format is "Col1","Col2","Col3",...
    const rawInner =
      line.startsWith('"') && line.endsWith('"') ? line.slice(1, -1) : line;
    const cols = rawInner.split('","');

    if (cols.length < 3) continue;

    const address = cols[0];
    const description = cols[2];

    let slug = address.replace("https://e-hermer.pl/", "");
    if (slug.endsWith("/")) {
      slug = slug.slice(0, -1);
    }

    if (slug === "") {
      slug = "home";
    }

    // Query sanity for a document with this slug
    const query = `*[_type in ["page", "post", "service", "caseStudy", "project"] && slug.current == $slug][0]{ _id, _type }`;
    const doc = await client.fetch(query, { slug });

    if (doc) {
      console.log(
        `Found doc for ${address} (slug: ${slug}). Updating description...`,
      );
      try {
        await client
          .patch(doc._id)
          .setIfMissing({
            seo: {
              _type: "seoMetaFields",
            },
          })
          .setIfMissing({
            "seo.openGraph": { _type: "openGraph" },
          })
          .set({
            "seo.metaDescription": description,
            "seo.openGraph.description": description,
          })
          .commit();

        console.log(
          ` -> Updated ${doc._id} with description: "${description}"`,
        );
        successCount++;

        // Wait 200ms to avoid rate limits / hangs
        await new Promise((resolve) => setTimeout(resolve, 200));
      } catch (err) {
        console.error(` -> Failed to update ${doc._id}: ${err.message}`);
      }
    } else {
      console.warn(
        `WARNING: Doc not found for slug: ${slug} (from ${address})`,
      );
      missingCount++;
    }
  }

  console.log(
    `\nFinished! Successfully updated ${successCount} descriptions. Could not find ${missingCount} documents.`,
  );
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
