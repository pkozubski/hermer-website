import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SplitRevealTitle } from "./ui/SplitRevealTitle";
import { LineReveal } from "./ui/LineReveal";
import { client } from "@/sanity/lib/client";
import { BlogCard, Post } from "./cards/BlogCard";
import Link from "next/link";

export const Blog: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [posts, setPosts] = useState<Post[]>([]);

  // Fetch posts from Sanity
  useEffect(() => {
    const fetchPosts = async () => {
      const query = `*[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        category,
        mainImage,
        year
      }`;
      const data = await client.fetch(query);
      setPosts(data);
    };

    fetchPosts();
  }, []);

  // Calculate draggable constraints
  useEffect(() => {
    if (containerRef.current) {
      setWidth(
        containerRef.current.scrollWidth - containerRef.current.offsetWidth,
      );
    }
  }, [posts]); // Recalculate when posts are loaded

  return (
    <section
      id="blog"
      className="py-24 md:py-32 bg-transparent overflow-hidden relative"
    >
      {/* Background Elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

      <div className="container mx-auto px-4 md:px-8 relative z-10 mb-16">
        {/* HEADER - Split Style */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <SplitRevealTitle
            line1="Strefa"
            line2="Wiedzy"
            className="text-white text-5xl md:text-8xl"
          />
          <div className="flex flex-col gap-6 md:text-right max-w-sm">
            <LineReveal
              lines={[
                "Przesuń, aby odkryć więcej. Dzielimy się tym, co",
                "napędza cyfrowy świat.",
              ]}
              className="text-neutral-400 text-sm md:text-base leading-relaxed"
            />
            <button className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#916AFF] hover:text-[#7a57d6] transition-colors justify-end">
              Zobacz wszystkie
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* DRAGGABLE LIST */}
      <div className="pl-4 md:pl-8 overflow-visible" ref={containerRef}>
        <motion.div
          className="flex gap-4 md:gap-8 cursor-grab active:cursor-grabbing w-max pr-8 md:pr-16"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          whileTap={{ cursor: "grabbing" }}
        >
          {posts.map((post, index) => (
            <BlogCard key={post._id} post={post} index={index} />
          ))}

          {/* "More" Card at the end */}
          <div className="group relative w-[200px] md:w-[300px] shrink-0 aspect-3/4 bg-[#916AFF] flex flex-col items-center justify-center text-white cursor-pointer hover:bg-[#7a57d6] transition-colors rounded-3xl">
            <span className="text-6xl mb-4 font-display font-bold">+</span>
            <span className="font-bold uppercase tracking-widest text-sm">
              Pokaż Więcej
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
