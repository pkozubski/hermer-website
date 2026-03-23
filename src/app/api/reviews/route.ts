import { NextResponse } from "next/server";

export async function GET() {
  const API_KEY = process.env.GOOGLE_MAPS_API_KEY;

  if (!API_KEY) {
    return NextResponse.json(
      { error: "Missing GOOGLE_MAPS_API_KEY" },
      { status: 500 },
    );
  }
  const PLACE_ID = "ChIJX9DgUnRdAUcRwA8xIRfGi5Q"; // Hermer - Tworzenie stron www, Wałcz
  const URL = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,reviews,user_ratings_total&key=${API_KEY}&language=pl`;

  try {
    const res = await fetch(URL, { next: { revalidate: 3600 } }); // Cache for 1 hour
    const data = await res.json();

    if (data.status !== "OK") {
      console.error(
        "Google Places API Error:",
        data.status,
        data.error_message,
      );
      return NextResponse.json({ error: data.status }, { status: 400 });
    }

    return NextResponse.json(data.result);
  } catch (error) {
    console.error("Failed to fetch reviews:", error);
    return NextResponse.json(
      { error: "Failed to fetch reviews" },
      { status: 500 },
    );
  }
}
