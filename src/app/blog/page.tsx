import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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
        <BlogContent posts={posts} />
      </div>

      <Footer />
    </div>
  );
}
