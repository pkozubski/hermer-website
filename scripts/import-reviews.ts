import { createClient } from "@sanity/client";
import { readFileSync } from "fs";
import { join } from "path";
import { config } from "dotenv";

// Load environment variables from .env.local
config({ path: ".env.local" });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_API_WRITE_TOKEN; // Needed for write access

if (!projectId || !dataset || !token) {
  console.error(
    "Missing Sanity configuration. Please set NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, and SANITY_API_WRITE_TOKEN in .env.local",
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2024-01-01",
  useCdn: false,
});

async function importReviews() {
  const csvPath = join(process.cwd(), "place-link-detailed-reviews.csv");
  const fileContent = readFileSync(csvPath, "utf-8");

  // Simple CSV parser for quoted multiline strings matching the specific format
  // We'll split by newlines but handle quotes roughly or better yet, use a regex tailored for this file if we don't want a heavy lib.
  // Actually, given the complexity (multiline strings), a regex approach is better.

  // Regex to match CSV rows handling quoted fields
  // This regex assumes standard CSV quoting: "field" or field
  const rows: string[][] = [];
  let currentRow: string[] = [];
  let currentField = "";
  let insideQuotes = false;

  for (let i = 0; i < fileContent.length; i++) {
    const char = fileContent[i];
    const nextChar = fileContent[i + 1];

    if (char === '"') {
      if (insideQuotes && nextChar === '"') {
        currentField += '"';
        i++; // Skip next quote
      } else {
        insideQuotes = !insideQuotes;
      }
    } else if (char === "," && !insideQuotes) {
      currentRow.push(currentField);
      currentField = "";
    } else if ((char === "\r" || char === "\n") && !insideQuotes) {
      if (char === "\r" && nextChar === "\n") i++; // Handle CRLF
      currentRow.push(currentField);
      if (currentRow.length > 1) rows.push(currentRow); // Skip empty lines
      currentRow = [];
      currentField = "";
    } else {
      currentField += char;
    }
  }
  if (currentField || currentRow.length > 0) {
    currentRow.push(currentField);
    rows.push(currentRow);
  }

  // Remove header
  const header = rows.shift();
  if (!header) {
    console.error("Empty CSV file");
    return;
  }

  // Map header names to indices
  const headerMap = new Map<string, number>();
  header.forEach((h, i) => headerMap.set(h.trim(), i));

  const getField = (row: string[], name: string) => {
    const index = headerMap.get(name);
    return index !== undefined ? row[index] : undefined;
  };

  console.log(`Found ${rows.length} reviews to process...`);

  for (const row of rows) {
    const name = getField(row, "name");
    const reviewText = getField(row, "review_text");
    const ratingStr = getField(row, "rating");
    const publishedAtStr = getField(row, "published_at_date");
    const avatarLink = getField(row, "avatar_link");
    const reviewLink = getField(row, "review_link");
    const reviewId = getField(row, "review_id");

    if (!name || !reviewText || !ratingStr) {
      console.warn("Skipping incomplete row", row);
      continue;
    }

    const rating = parseInt(ratingStr, 10);
    // Convert publishedAt to ISO if needed, but CSV seems to have ISO-like "2024-02-12T12:01:01"

    const doc = {
      _type: "review",
      // Use review_id as deterministic ID to avoid duplicates
      _id: `review.${reviewId}`,
      author: name,
      rating: rating,
      text: reviewText,
      publishedAt: publishedAtStr,
      avatarUrl: avatarLink,
      platform: "Google",
      reviewLink: reviewLink,
    };

    try {
      await client.createOrReplace(doc);
      console.log(`Imported review by ${name}`);
    } catch (err) {
      console.error(`Failed to import review by ${name}:`, err);
    }
  }

  console.log("Import complete!");
}

importReviews().catch(console.error);
