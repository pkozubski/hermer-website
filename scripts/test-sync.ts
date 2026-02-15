import { createClient } from "@sanity/client";
import { config } from "dotenv";

// Load environment variables from .env.local
config({ path: ".env.local" });

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_WRITE_TOKEN,
  apiVersion: "2024-01-01",
  useCdn: false,
});

const GOOGLE_PLACES_API_URL =
  "https://maps.googleapis.com/maps/api/place/details/json";
const PLACE_ID = "ChIJX9DgUnRdAUcRwA8xIRfGi5Q"; // Hermer - Tworzenie stron www

async function runTestSync() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    console.error("Missing GOOGLE_MAPS_API_KEY in .env.local");
    return;
  }

  console.log("Starting sync test...");
  console.log("API Key found (length):", apiKey.length);

  try {
    // 1. Fetch reviews from Google
    console.log(`Fetching reviews for Place ID: ${PLACE_ID}...`);
    const googleResponse = await fetch(
      `${GOOGLE_PLACES_API_URL}?place_id=${PLACE_ID}&fields=reviews&key=${apiKey}&language=pl`,
    );
    const googleData = await googleResponse.json();

    if (!googleData.result || !googleData.result.reviews) {
      console.error(
        "Google API Error or No Reviews:",
        JSON.stringify(googleData, null, 2),
      );
      return;
    }

    const simpleReviews = googleData.result.reviews;
    const stats = {
      fetched: simpleReviews.length,
      added: 0,
      skipped: 0,
      errors: 0,
    };

    console.log(`Fetched ${stats.fetched} reviews from Google.`);

    // 2. Process each review
    for (const review of simpleReviews) {
      // Use a deterministic ID based on the author_url or create a unique composite key if needed.
      // Google reviews don't always expose a stable public ID in the standard feed,
      // but often we can use Author URL + Time or similar.

      // Construct ID exactly as in the API route logic
      const googleReviewId = `${review.author_name}_${review.time}`;

      // Check if exists
      const existing = await sanityClient.fetch(
        `*[_type == "review" && googleReviewId == $id][0]._id`,
        { id: googleReviewId },
      );

      if (existing) {
        console.log(`- Review skipped (already exists): ${review.author_name}`);
        stats.skipped++;
        continue;
      }

      console.log(`+ Adding new review: ${review.author_name}`);

      // Create new review
      try {
        await sanityClient.create({
          _type: "review",
          author: review.author_name,
          rating: review.rating,
          text: review.text,
          publishedAt: new Date(review.time * 1000).toISOString(),
          avatarUrl: review.profile_photo_url,
          platform: "Google",
          reviewLink: review.author_url,
          googleReviewId: googleReviewId,
        });
        stats.added++;
      } catch (err: any) {
        console.error(
          `Error creating review for ${review.author_name}:`,
          err.message,
        );
        stats.errors++;
      }
    }

    console.log("\nSync Test Complete.");
    console.log(`Fetched: ${stats.fetched}`);
    console.log(`Added: ${stats.added}`);
    console.log(`Skipped: ${stats.skipped}`);
    console.log(`Errors: ${stats.errors}`);
  } catch (error: any) {
    console.error("Sync Test Script Error:", error);
  }
}

runTestSync();
