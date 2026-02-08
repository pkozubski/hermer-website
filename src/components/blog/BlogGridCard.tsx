'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { urlFor } from '@/sanity/lib/image';
import { Post } from '@/components/cards/BlogCard';

interface BlogGridCardProps {
  post: Post;
  index: number;
}

export const BlogGridCard: React.FC<BlogGridCardProps> = ({ post, index }) => {
  const destinationHref = post.slug?.current
    ? `/blog/${post.slug.current}`
    : '#';

  return (
    <div className="w-full">
      <Link href={destinationHref} className="group block">
        <motion.div initial="rest" whileHover="hover" animate="rest">
          {/* Image Container with entrance animation */}
          <motion.div
            className="relative aspect-4/3 rounded-3xl mb-6 overflow-hidden"
            initial={{
              scale: 0.9,
              opacity: 0.8,
              rotate: index % 2 === 0 ? -3 : 3,
            }}
            whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              rotate: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
            }}
          >
            {post.mainImage && (
              <img
                src={urlFor(post.mainImage).width(800).url()}
                alt={post.title}
                className="webgl-image absolute inset-0 w-full h-full object-cover rounded-3xl block"
                crossOrigin="anonymous"
                draggable={false}
              />
            )}

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="absolute top-4 left-4 pointer-events-none z-30">
              <span className="bg-black/50 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/10 shadow-sm">
                {typeof post.category === "string" ? post.category : 'General'}
              </span>
            </div>
          </motion.div>

          <div className="flex flex-col gap-2">
            {/* Meta Info - Static */}
            <div className="text-xs font-medium tracking-wide text-neutral-400 uppercase">
              5 min czytania • {post.year || '2024'}
            </div>

            {/* Title - Static with color hover */}
            <h3 className="text-2xl md:text-3xl font-medium text-white tracking-tight group-hover:text-[#916AFF] transition-colors duration-300">
              {post.title}
            </h3>

            <p className="text-neutral-400 text-sm line-clamp-2 mt-1 font-medium group-hover:text-neutral-300 transition-colors">
              Dowiedz się więcej o temacie czytając nasz artykuł.
            </p>
          </div>
        </motion.div>
      </Link>
    </div>
  );
};
