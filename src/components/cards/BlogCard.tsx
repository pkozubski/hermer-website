"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  mainImage: any;
  year: string;
  publishedAt?: string;
}

interface BlogCardProps {
  post: Post;
  index?: number;
}

export const BlogCard = ({ post, index = 0 }: BlogCardProps) => {
  return (
    <motion.div
      className="group relative w-[300px] md:w-[400px] shrink-0 cursor-pointer"
      whileHover="hover"
      initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.1,
      }}
    >
      <Link href={`/blog/${post.slug?.current || ""}`}>
        <div className="relative aspect-3/4 overflow-hidden bg-slate-200 rounded-3xl">
          <motion.img
            src={post.mainImage ? urlFor(post.mainImage).width(800).url() : ""}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
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
          <div className="flex items-center justify-start gap-1">
            {/* Animated Arrow - Slides in from left */}
            <motion.div
              initial="rest"
              variants={{
                rest: { width: 0, opacity: 0, x: -10, marginRight: 0 },
                hover: {
                  width: "auto",
                  opacity: 1,
                  x: 0,
                  marginRight: 4,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    mass: 0.5,
                  },
                },
              }}
              className="overflow-hidden flex items-center justify-center text-white"
            >
              <ArrowRight size={24} strokeWidth={2.5} />
            </motion.div>

            <h3 className="text-2xl font-display font-bold text-white leading-tight group-hover:text-[#916AFF] transition-colors duration-300 flex flex-wrap">
              {post.title.split(" ").map((word, i) => (
                <span key={i} className="overflow-hidden mr-[0.3em]">
                  <motion.span
                    className="inline-block"
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                      delay: i * 0.08,
                    }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h3>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
