"use client";

import React, { useEffect, useRef, useState } from "react";
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
  const cardRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsInView(true);
        observer.disconnect();
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="group relative w-[300px] md:w-[400px] shrink-0 cursor-pointer"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "scale(1)" : "scale(0.9)",
        filter: isInView ? "blur(0px)" : "blur(10px)",
        transitionProperty: "opacity, transform, filter",
        transitionDuration: "0.7s",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${index * 0.1}s`,
      }}
    >
      <Link href={`/blog/${post.slug?.current || ""}`}>
        <div className="relative aspect-3/4 overflow-hidden bg-slate-200 rounded-3xl">
          <img
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
            <div className="overflow-hidden flex items-center justify-center text-white w-0 opacity-0 -translate-x-2 mr-0 group-hover:w-6 group-hover:opacity-100 group-hover:translate-x-0 group-hover:mr-1 transition-all duration-300">
              <ArrowRight size={24} strokeWidth={2.5} />
            </div>

            <h3 className="text-2xl font-display font-bold text-white leading-tight group-hover:text-[#916AFF] transition-colors duration-300 flex flex-wrap">
              {post.title.split(" ").map((word, i) => (
                <span key={i} className="overflow-hidden mr-[0.3em]">
                  <span
                    className="inline-block"
                    style={{
                      transform: isInView
                        ? "translateY(0%)"
                        : "translateY(100%)",
                      transitionProperty: "transform",
                      transitionDuration: "0.5s",
                      transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                      transitionDelay: `${i * 0.08}s`,
                    }}
                  >
                    {word}
                  </span>
                </span>
              ))}
            </h3>
          </div>
        </div>
      </Link>
    </div>
  );
};
