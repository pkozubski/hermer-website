"use client";

import React, { useRef } from "react";
import { Quote } from "lucide-react";
import { CustomStar } from "@/components/ui/CustomStar";
import { motion, useSpring, useTransform } from "framer-motion";
import { Review } from "@/components/Testimonials";

export const ReviewCard = ({
  review,
  index,
}: {
  review: Review;
  index: number;
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const MAX_LENGTH = 200;

  const shouldTruncate = review.text.length > MAX_LENGTH;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ y: -10, transition: { duration: 0.3, ease: "easeOut", delay: 0 } }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: (index % 3) * 0.1,
        ease: [0.23, 1, 0.32, 1],
      }}
      className="group relative flex flex-col h-full p-8 md:p-10 bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-[2.5rem] hover:bg-white/[0.05] hover:border-white/20 transition-colors duration-500"
    >
      {/* Glow Effect */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#916AFF]/5 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Quote Icon */}
      <div className="mb-8">
        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#916AFF]/30 transition-colors duration-500">
          <Quote size={20} className="text-[#916AFF]" />
        </div>
      </div>

      <div className="flex-grow">
        <p className={`text-zinc-200 text-lg leading-relaxed font-normal tracking-tight ${!isExpanded && shouldTruncate ? "line-clamp-4" : ""}`}>
          "{review.text}"
        </p>
        {shouldTruncate && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 text-xs font-semibold text-[#916AFF] hover:text-white transition-colors uppercase tracking-[0.2em] focus:outline-none"
          >
            {isExpanded ? "Zwiń" : "Czytaj więcej"}
          </button>
        )}
      </div>

      <div className="mt-10 pt-8 border-t border-white/5 flex items-center gap-4">
        {review.avatarUrl ? (
          <div className="relative">
            <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/5 group-hover:ring-[#916AFF]/40 transition-all duration-500">
              <img src={review.avatarUrl} alt={review.author} className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center">
              <CustomStar size={12} fill="#916AFF" />
            </div>
          </div>
        ) : (
          <div className="w-12 h-12 rounded-full bg-[#916AFF]/10 border border-[#916AFF]/20 flex items-center justify-center text-[#916AFF] font-medium uppercase">
            {review.author.charAt(0)}
          </div>
        )}
        <div className="flex flex-col">
          <span className="text-white font-semibold tracking-tight">{review.author}</span>
          <span className="text-xs text-zinc-500 uppercase tracking-widest mt-0.5">
            {review.platform || "Klient"} • {new Date(review.publishedAt).toLocaleDateString('pl-PL', { year: 'numeric' })}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

interface ReviewsGridProps {
  reviews: Review[];
}

export const ReviewsGrid: React.FC<ReviewsGridProps> = ({ reviews }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {reviews.map((review, index) => (
        <ReviewCard key={review._id} review={review} index={index} />
      ))}
    </div>
  );
};
