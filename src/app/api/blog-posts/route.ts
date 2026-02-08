import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

const POSTS_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  "category": category->title,
  mainImage,
  year
}`;

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get("limit") || "9");
    const lastPublishedAt = searchParams.get("lastPublishedAt");
    const category = searchParams.get("category");

    let query = `*[_type == "post" && defined(slug.current)`;
    
    if (lastPublishedAt) {
      query += ` && publishedAt < $lastPublishedAt`;
    }
    
    if (category && category !== "Wszystkie") {
      query += ` && category->title == $category`;
    }

    query += `] | order(publishedAt desc) [0...$limit] {
      _id,
      title,
      slug,
      "category": category->title,
      mainImage,
      year,
      publishedAt
    }`;

    const posts = await client.fetch(query, { 
      limit, 
      lastPublishedAt,
      category 
    });
    
    return NextResponse.json(posts ?? []);
  } catch (error) {
    console.error("Failed to fetch blog posts in API route:", error);
    return NextResponse.json([], { status: 200 });
  }
}
