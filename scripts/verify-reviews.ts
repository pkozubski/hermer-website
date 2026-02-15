import { createClient } from "@sanity/client";
import { config } from "dotenv";

// Load environment variables from .env.local
config({ path: ".env.local" });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token =
  process.env.SANITY_API_READ_TOKEN || process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !dataset) {
  console.error("Missing Sanity configuration.");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  // token, // Commented out to test public access
  apiVersion: "2024-01-01",
  useCdn: false,
});

async function verifyReviews() {
  const query = `*[_type == "review"][0...5] {
    _id,
    author,
    rating,
    text,
    publishedAt
  }`;

  try {
    const reviews = await client.fetch(query);
    console.log(`Found ${reviews.length} reviews.`);
    if (reviews.length > 0) {
      console.log("Sample review:", reviews[0]);
    } else {
      console.log("No reviews found. Checking total count...");
      const count = await client.fetch(`count(*[_type == "review"])`);
      console.log(`Total reviews: ${count}`);
    }
  } catch (err) {
    console.error("Error fetching reviews:", err);
  }
}

verifyReviews();
