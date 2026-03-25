"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { CustomStar } from "@/components/ui/CustomStar";
import { JsonLdScript } from "@/lib/jsonLd";
import { Review } from "./Testimonials";

export const ReviewCard = ({
  review,
  index,
}: {
  review: Review;
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="group relative flex flex-col break-inside-avoid mb-6 p-8 md:p-10 bg-white/[0.03] border border-white/8 rounded-[2.5rem] hover:bg-white/[0.06] hover:border-white/20 transition-[background-color,border-color] duration-500"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? undefined : "translateY(30px) scale(0.97)",
        transitionProperty: "opacity, transform, background-color, border-color",
        transitionDuration: "0.7s",
        transitionDelay: `${(index % 3) * 0.08}s`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* Glow Effect */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#916AFF]/5 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Quote Icon */}
      <div className="mb-6">
        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#916AFF]/30 transition-colors duration-500">
          <Quote size={18} className="text-[#916AFF]" />
        </div>
      </div>

      <p className="text-zinc-200 text-[15px] md:text-base leading-relaxed font-normal tracking-tight">
        &quot;{review.text}&quot;
      </p>

      <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-4">
        {review.avatarUrl ? (
          <div className="relative">
            <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-white/5 group-hover:ring-[#916AFF]/40 transition-all duration-500">
              <Image src={review.avatarUrl} alt={review.author} fill sizes="44px" className="object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center">
              <CustomStar size={12} fill="#916AFF" />
            </div>
          </div>
        ) : (
          <div className="w-11 h-11 rounded-full bg-[#916AFF]/10 border border-[#916AFF]/20 flex items-center justify-center text-[#916AFF] text-sm font-medium uppercase">
            {review.author.charAt(0)}
          </div>
        )}
        <div className="flex flex-col">
          <span className="text-white font-semibold text-sm tracking-tight">{review.author}</span>
          <span className="text-[11px] text-zinc-500 uppercase tracking-widest mt-0.5">
            {review.platform || "Klient"} • {new Date(review.publishedAt).toLocaleDateString('pl-PL', { year: 'numeric' })}
          </span>
        </div>
      </div>
    </div>
  );
};

interface ReviewsGridProps {
  reviews: Review[];
}

export const ReviewsGrid: React.FC<ReviewsGridProps> = ({ reviews }) => {
  return (
    <>
      <JsonLdScript
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://hermer.pl/#person",
          review: reviews.map((r) => ({
            "@type": "Review",
            author: {
              "@type": "Person",
              name: r.author,
            },
            datePublished: r.publishedAt,
            reviewBody: r.text,
            reviewRating: {
              "@type": "Rating",
              ratingValue: r.rating || 5,
              bestRating: "5",
            },
          })),
        }}
      />
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
        {reviews.map((review, index) => (
          <ReviewCard key={review._id} review={review} index={index} />
        ))}
      </div>
    </>
  );
};
