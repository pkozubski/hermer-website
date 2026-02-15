import { NextResponse } from "next/server";
import { createClient } from "@sanity/client";

// Initialize Sanity client with write token
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_WRITE_TOKEN,
  apiVersion: "2024-01-01",
  useCdn: false,
});

const GOOGLE_PLACES_API_URL =
  "https://maps.googleapis.com/maps/api/place/details/json";
const PLACE_ID = "ChIJX9DgUnRdAUcRwA8xIRfGi5Q"; // Hermer - Tworzenie stron www

export async function GET(request: Request) {
  // Optional: Verify secret if you set up CRON_SECRET in Vercel
  // const authHeader = request.headers.get('authorization');
  // if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
  //   return new Response('Unauthorized', { status: 401 });
  // }

  const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Missing GOOGLE_MAPS_API_KEY" },
      { status: 500 },
    );
  }

  try {
    // 1. Fetch reviews from Google
    const googleResponse = await fetch(
      `${GOOGLE_PLACES_API_URL}?place_id=${PLACE_ID}&fields=reviews&key=${apiKey}&language=pl`,
    );
    const googleData = await googleResponse.json();

    if (!googleData.result || !googleData.result.reviews) {
      console.error("Google API Error or No Reviews:", googleData);
      return NextResponse.json(
        { error: "Failed to fetch reviews from Google", details: googleData },
        { status: 500 },
      );
    }

    const simpleReviews = googleData.result.reviews;
    const stats = {
      fetched: simpleReviews.length,
      added: 0,
      skipped: 0,
      errors: 0,
    };

    // 2. Process each review
    for (const review of simpleReviews) {
      // Use a deterministic ID based on the author_url or create a unique composite key if needed.
      // Google reviews don't always expose a stable public ID in the standard feed,
      // but often we can use Author URL + Time or similar.
      // However, the import script used a hash of text+author+date.
      // Better yet, if we can store the 'time' as unique identifier component.
      // Let's rely on checking if a review with this text and author exists.

      // Actually, the new schema has `googleReviewId`. We should try to use a unique property from Google if available.
      // The basic 'reviews' field from Details API doesn't always give a unique ID per review object in the documentation,
      // but typically the response object might have something.
      // If not, we fall back to a hash or composite key.
      // Let's assume for now we use a composite of author_name + time.

      const googleReviewId = `${review.author_name}_${review.time}`;

      // Check if exists
      const existing = await client.fetch(
        `*[_type == "review" && googleReviewId == $id][0]._id`,
        { id: googleReviewId },
      );

      if (existing) {
        stats.skipped++;
        continue;
      }

      // Create new review
      try {
        await client.create({
          _type: "review",
          author: review.author_name,
          rating: review.rating,
          text: review.text,
          publishedAt: new Date(review.time * 1000).toISOString(),
          avatarUrl: review.profile_photo_url,
          platform: "Google",
          reviewLink: review.author_url, // Or a link to the specific review if possible
          googleReviewId: googleReviewId,
        });
        stats.added++;
      } catch (err) {
        console.error("Error creating review:", err);
        stats.errors++;
      }
    }

    return NextResponse.json({
      success: true,
      message: `Sync complete. Fetched: ${stats.fetched}, Added: ${stats.added}, Skipped: ${stats.skipped}, Errors: ${stats.errors}`,
    });
  } catch (error: any) {
    console.error("Sync Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 },
    );
  }
}
