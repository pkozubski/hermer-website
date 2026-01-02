import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SplitRevealTitle } from "./ui/SplitRevealTitle";
import { LineReveal } from "./ui/LineReveal";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  mainImage: any;
  year: string;
}

const BlogCard = ({ post, index = 0 }: { post: Post; index?: number }) => {
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
      <Link href={`/blog/${post.slug.current}`}>
        <div className="relative aspect-3/4 overflow-hidden bg-slate-200 rounded-3xl">
          <motion.img
            src={post.mainImage ? urlFor(post.mainImage).width(800).url() : ""}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

          {/* Floating Category Badge */}
          <div className="absolute top-6 left-6 z-10">
            <span className="px-3 py-1.5 bg-white/90 backdrop-blur-md text-xs font-bold uppercase tracking-widest text-slate-900 rounded-full shadow-sm group-hover:bg-white transition-all duration-300">
              {post.category}
            </span>
          </div>
        </div>

        <div className="mt-6 pr-4">
          <div className="flex items-baseline justify-between mb-2">
            <span className="text-xs font-mono text-slate-400">
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
              className="overflow-hidden flex items-center justify-center text-slate-900"
            >
              <ArrowRight size={24} strokeWidth={2.5} />
            </motion.div>

            <h3 className="text-2xl font-display font-bold text-slate-900 leading-tight group-hover:text-[#916AFF] transition-colors duration-300 flex flex-wrap">
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
        containerRef.current.scrollWidth - containerRef.current.offsetWidth
      );
    }
  }, [posts]); // Recalculate when posts are loaded

  return (
    <section
      id="blog"
      className="py-24 md:py-32 bg-slate-50 overflow-hidden relative"
    >
      {/* Background Elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-slate-200 rounded-full blur-[100px] opacity-40 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10 mb-16">
        {/* HEADER - Split Style */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <SplitRevealTitle
            line1="Strefa"
            line2="Wiedzy"
            className="text-slate-900! text-5xl md:text-8xl"
          />
          <div className="flex flex-col gap-6 md:text-right max-w-sm">
            <LineReveal
              lines={[
                "Przesuń, aby odkryć więcej. Dzielimy się tym, co",
                "napędza cyfrowy świat.",
              ]}
              className="text-slate-500 text-sm md:text-base leading-relaxed"
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
