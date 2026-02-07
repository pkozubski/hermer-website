import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

const POSTS_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  category,
  mainImage,
  year
}`;

export async function GET() {
  try {
    const posts = await client.fetch(POSTS_QUERY);
    return NextResponse.json(posts ?? []);
  } catch (error) {
    console.error("Failed to fetch blog posts in API route:", error);
    return NextResponse.json([], { status: 200 });
  }
}
