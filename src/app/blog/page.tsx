import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { client } from "@/sanity/lib/client";
import { Post } from "@/components/cards/BlogCard";
import { BlogContent } from "@/components/blog/BlogContent";

// Revalidate every 60 seconds
export const revalidate = 60;

async function getPosts() {
  const query = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) [0...9] {
    _id,
    title,
    slug,
    "category": category->title,
    mainImage,
    year,
    publishedAt
  }`;
  return await client.fetch(query);
}

async function getCategories() {
  const query = `*[_type == "category" && count(*[_type == "post" && references(^._id)]) > 0] {
    title
  } | order(title asc)`;
  const cats = await client.fetch(query);
  return cats.map((c: any) => c.title);
}

async function getBlogStats() {
  const query = `*[_type == "post" && defined(slug.current)] {
    "wordCount": length(pt::text(body))
  }`;
  const results = await client.fetch(query);
  const total = results.length;
  const avgWords = total > 0 
    ? results.reduce((acc: number, curr: any) => acc + (curr.wordCount || 0), 0) / total 
    : 0;
  const avgReadingTime = Math.ceil(avgWords / 200); // 200 words per minute

  return {
    totalPosts: total,
    avgReadingTime: avgReadingTime || 5
  };
}

export default async function BlogPage() {
  const [posts, categories, stats] = await Promise.all([
    getPosts(),
    getCategories(),
    getBlogStats()
  ]);

  return (
    <div className="relative min-h-screen bg-neutral-900 font-sans text-white overflow-x-clip selection:bg-[#916AFF] selection:text-white">
      {/* Global Dark Background Layer */}
      <div className="fixed inset-0 w-full h-full bg-neutral-900 z-0 pointer-events-none" />

      {/* Global Gradients / Blobs */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10vh] right-[-10vw] w-[80vw] h-[80vw] md:w-[800px] md:h-[800px] bg-[#916AFF]/20 rounded-full blur-[100px] mix-blend-screen opacity-80 animate-pulse-slow" />
        <div className="absolute top-[80vh] left-[-20vw] w-[90vw] h-[90vw] md:w-[1000px] md:h-[1000px] bg-[#52D8EA]/10 rounded-full blur-[120px] mix-blend-screen opacity-60" />
      </div>

      <Header allowVisibility={true} />

      <div className="relative z-10">
        <BlogContent posts={posts} categories={categories} stats={stats} />
      </div>

      <Footer />
    </div>
  );
}
