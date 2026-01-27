import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { client } from "@/sanity/lib/client";
import { Post } from "@/components/cards/BlogCard";
import { BlogContent } from "@/components/blog/BlogContent";

// Revalidate every 60 seconds
export const revalidate = 60;

async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    category,
    mainImage,
    year,
    publishedAt
  }`;
  return await client.fetch(query);
}

export default async function BlogPage() {
  const posts: Post[] = await getPosts();

  return (
    <div className="bg-slate-50 min-h-screen">
      <SmoothScroll />
      <Header allowVisibility={true} />

      <BlogContent posts={posts} />

      <Footer />
    </div>
  );
}
