/**
 * Migration script: Convert plain text fields to Portable Text (block arrays)
 * in seoLandingPage documents.
 *
 * Fields converted:
 *   - heroSubtitle (string → block[])
 *   - benefits[].description (string → block[])
 *   - detailedSections[].description (string → block[])
 *
 * Run:  node scripts/seed/migrate-seo-rich-text.mjs
 */

import { createClient } from "@sanity/client";
import { randomUUID } from "crypto";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

/** Convert a plain string into a single Portable Text block */
function textToBlock(text) {
  if (!text || typeof text !== "string") return [];
  // Split by newlines to create separate paragraphs
  const paragraphs = text.split(/\n\n|\n/).filter(Boolean);
  return paragraphs.map((paragraph) => ({
    _type: "block",
    _key: randomUUID().slice(0, 12),
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: randomUUID().slice(0, 12),
        text: paragraph.trim(),
        marks: [],
      },
    ],
  }));
}

/** Check if value is already a Portable Text array */
function isAlreadyBlock(value) {
  return Array.isArray(value) && value.length > 0 && value[0]?._type === "block";
}

async function migrate() {
  console.log("Fetching all seoLandingPage documents...");

  const docs = await client.fetch(
    `*[_type == "seoLandingPage"]{
      _id,
      _rev,
      heroSubtitle,
      benefits,
      detailedSections
    }`
  );

  console.log(`Found ${docs.length} documents to migrate.`);

  for (const doc of docs) {
    const patches = {};
    let needsPatch = false;

    // 1. heroSubtitle
    if (doc.heroSubtitle && !isAlreadyBlock(doc.heroSubtitle)) {
      patches.heroSubtitle = textToBlock(doc.heroSubtitle);
      needsPatch = true;
      console.log(`  [${doc._id}] Converting heroSubtitle`);
    }

    // 2. benefits[].description
    if (doc.benefits?.length) {
      const newBenefits = doc.benefits.map((b, i) => {
        if (b.description && !isAlreadyBlock(b.description)) {
          console.log(`  [${doc._id}] Converting benefits[${i}].description`);
          return { ...b, description: textToBlock(b.description) };
        }
        return b;
      });
      const changed = newBenefits.some((b, i) => b !== doc.benefits[i]);
      if (changed) {
        patches.benefits = newBenefits;
        needsPatch = true;
      }
    }

    // 3. detailedSections[].description
    if (doc.detailedSections?.length) {
      const newSections = doc.detailedSections.map((s, i) => {
        if (s.description && !isAlreadyBlock(s.description)) {
          console.log(`  [${doc._id}] Converting detailedSections[${i}].description`);
          return { ...s, description: textToBlock(s.description) };
        }
        return s;
      });
      const changed = newSections.some((s, i) => s !== doc.detailedSections[i]);
      if (changed) {
        patches.detailedSections = newSections;
        needsPatch = true;
      }
    }

    if (needsPatch) {
      await client
        .patch(doc._id)
        .ifRevisionId(doc._rev)
        .set(patches)
        .commit();
      console.log(`  ✅ Patched ${doc._id}`);
    } else {
      console.log(`  ⏭️  ${doc._id} already migrated, skipping.`);
    }
  }

  console.log("\n🎉 Migration complete!");
}

migrate().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
