"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";
import { Post } from "@/components/cards/BlogCard";

interface BlogFeaturedPostProps {
  post: Post;
}

export const BlogFeaturedPost: React.FC<BlogFeaturedPostProps> = ({ post }) => {
  if (!post) return null;

  return (
    <section className="container mx-auto px-4 md:px-8 mb-20">
      <Link href={`/blog/${post.slug?.current || ""}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group cursor-pointer overflow-hidden rounded-2xl bg-white/5 border border-white/10 h-[500px] md:h-[650px] flex flex-col justify-end p-8 md:p-16 shadow-lg hover:shadow-xl hover:shadow-white/5 transition-all duration-500"
        >
          {post.mainImage && (
            <motion.img
              src={urlFor(post.mainImage).url()}
              alt={post.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          )}
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

          <div className="relative z-10 max-w-3xl text-white">
            <div className="flex items-center space-x-4 mb-6">
              <span className="bg-[#916AFF] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                {typeof post.category === "string" ? post.category : "Featured"}
              </span>
              <span className="text-white/80 text-sm font-medium">
                {post.year}
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight group-hover:text-[#916AFF] transition-colors">
              {post.title}
            </h2>

            <p className="text-lg text-white/80 mb-8 line-clamp-2 max-w-2xl font-medium">
              {/* Description would ideally come from the post object, using title as placeholder if needed */}
              Dowiedz się więcej o temacie czytając nasz najnowszy artykuł.
            </p>

            <div className="flex items-center group/btn font-bold">
              <span className="bg-white/20 backdrop-blur-sm p-4 rounded-full mr-4 group-hover/btn:bg-[#916AFF] transition-all duration-300">
                <ArrowRight size={20} className="text-white" />
              </span>
              Czytaj więcej
            </div>
          </div>
        </motion.div>
      </Link>
    </section>
  );
};
