"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";
import { Post } from "@/components/cards/BlogCard";

interface BlogGridCardProps {
  post: Post;
  index: number;
}

export const BlogGridCard: React.FC<BlogGridCardProps> = ({ post, index }) => {
  return (
    <Link
      href={`/blog/${post.slug.current}`}
      className="group flex flex-col h-full"
    >
      <div className="relative aspect-4/3 rounded-2xl overflow-hidden mb-6 border border-slate-200 bg-slate-100 shadow-sm">
        {post.mainImage && (
          <motion.img
            src={urlFor(post.mainImage).width(800).url()}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        )}
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
            {post.category || "General"}
          </span>
        </div>
      </div>

      <div className="flex items-center space-x-3 mb-4 text-xs text-slate-500 font-bold uppercase tracking-tight">
        <span>5 min czytania</span>
        <span className="w-1.5 h-1.5 bg-[#916AFF] rounded-full"></span>
        <span>{post.year || "2024"}</span>
      </div>

      <h3 className="text-2xl font-black mb-4 group-hover:text-[#916AFF] transition-colors text-slate-900 leading-tight">
        {post.title}
      </h3>

      <p className="text-slate-600 line-clamp-2 mb-6 font-medium grow">
        Dowiedz się więcej o temacie czytając nasz artykuł.{" "}
        {/* Placeholder description */}
      </p>

      <div className="mt-auto flex items-center text-sm font-extrabold text-[#916AFF] group-hover:underline underline-offset-4">
        Czytaj dalej <ArrowUpRight size={16} className="ml-2" />
      </div>
    </Link>
  );
};
