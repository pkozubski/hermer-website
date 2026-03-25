"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  mainImage: { [key: string]: unknown } | null;
  year: string;
  publishedAt?: string;
}

interface BlogCardProps {
  post: Post;
  index?: number;
}

export const BlogCard = ({ post, index = 0 }: BlogCardProps) => {
  return (
    <div
      className="group relative w-[300px] md:w-[400px] shrink-0 cursor-pointer"
    >
      <Link href={`/blog/${post.slug?.current || ""}`}>
        <div className="relative aspect-3/4 overflow-hidden bg-slate-200 rounded-3xl">
          <img
            src={post.mainImage ? urlFor(post.mainImage).width(800).url() : ""}
            alt={post.title}
            draggable={false}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 select-none"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

          {/* Floating Category Badge */}
          <div className="absolute top-6 left-6 z-30">
            <span className="px-3 py-1.5 bg-neutral-900/80 backdrop-blur-md text-xs font-bold uppercase tracking-widest text-white rounded-full shadow-sm border border-white/10 group-hover:bg-neutral-900 transition-all duration-300">
              {typeof post.category === "string" ? post.category : "Blog"}
            </span>
          </div>
        </div>

        <div className="mt-6 pr-4">
          <div className="flex items-baseline justify-between mb-2">
            <span className="text-xs font-mono text-neutral-400">
              0{index + 1} — {post.year}
            </span>
          </div>

          {/* Title & Arrow - like Projects */}
          <div className="relative">
            {/* Animated Arrow - absolutely positioned so it doesn't affect title layout */}
            <div className="absolute -left-7 top-1 text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
              <ArrowRight size={24} strokeWidth={2.5} />
            </div>

            <h3 className="text-2xl font-display font-bold text-white leading-tight group-hover:text-[#916AFF] transition-colors duration-300">
              {post.title}
            </h3>
          </div>
        </div>
      </Link>
    </div>
  );
};
