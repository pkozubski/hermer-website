"use client";
import React, { useRef, useState, useEffect } from "react";
import { Quote } from "lucide-react";
import { CustomStar } from "../ui/CustomStar";
import { SplitRevealTitle } from "../ui/SplitRevealTitle";
import { LineReveal } from "../ui/LineReveal";
import { JsonLdScript } from "@/lib/jsonLd";
import FluidButton from "../ui/FluidButton";
import { COMPANY_STATS } from "@/constants/stats";

export interface Review {
  _id: string;
  author: string;
  rating: number;
  text: string;
  publishedAt: string;
  avatarUrl?: string;
  platform?: string;
  reviewLink?: string;
}

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const mapRange = (
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number,
) => {
  if (inMax - inMin === 0) return outMin;
  const t = clamp((value - inMin) / (inMax - inMin), 0, 1);
  return outMin + (outMax - outMin) * t;
};

const piecewise = (
  value: number,
  p1: number,
  p2: number,
  v0: number,
  v1: number,
  v2: number,
) => {
  if (value <= p1) return mapRange(value, 0, p1, v0, v1);
  return mapRange(value, p1, p2, v1, v2);
};

const GlassCard = ({ review, index }: { review: Review; index: number }) => {
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
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="group relative flex flex-col justify-between p-6 md:p-8 bg-white/[0.03] backdrop-blur-md border border-white/[0.08] rounded-2xl overflow-hidden hover:bg-white/[0.06] transition-colors duration-500"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "scale(1)" : "scale(0.9)",
        filter: isInView ? "blur(0px)" : "blur(10px)",
        transitionProperty: "opacity, transform, filter",
        transitionDuration: "0.8s",
        transitionDelay: `${(index % 3) * 0.1}s`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            {review.avatarUrl ? (
              <div className="w-9 h-9 rounded-full overflow-hidden shrink-0 border border-white/10">
                <img
                  src={review.avatarUrl}
                  alt={review.author}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="w-9 h-9 rounded-full bg-white/[0.08] flex items-center justify-center text-white/60 text-sm font-medium uppercase shrink-0">
                {review.author?.charAt(0)}
              </div>
            )}
            <div>
              <div className="text-white font-medium text-sm leading-tight">
                {review.author}
              </div>
              <div className="text-[11px] text-zinc-500 mt-0.5">
                {new Date(review.publishedAt).toLocaleDateString("pl-PL")}
              </div>
            </div>
          </div>
          {review.reviewLink ? (
            <a href={review.reviewLink} target="_blank" rel="noopener noreferrer">
              <Quote className="text-white/10 w-6 h-6 group-hover:text-white/20 transition-colors cursor-pointer" />
            </a>
          ) : (
            <Quote className="text-white/10 w-6 h-6 group-hover:text-white/20 transition-colors" />
          )}
        </div>

        <p className="text-zinc-300 text-[15px] leading-relaxed font-light mb-5 line-clamp-6 flex-1">
          &ldquo;{review.text}&rdquo;
        </p>

        <div className="flex items-center gap-1 pt-4 border-t border-white/5">
          {[...Array(review.rating || 5)].map((_, i) => (
            <CustomStar key={i} size={14} fill="#916AFF" />
          ))}
          <span className="text-[11px] text-zinc-500 ml-2">
            {review.rating || 5}.0
          </span>
        </div>
      </div>
    </div>
  );
};

import { useLenis } from "lenis/react";

const ReviewColumn = ({
  reviews,
  className = "",
  columnRef,
}: {
  reviews: Review[];
  className?: string;
  columnRef: React.RefObject<HTMLDivElement | null>;
}) => (
  <div
    ref={columnRef}
    className={`flex flex-col gap-6 will-change-transform ${className}`}
  >
    {reviews.map((review, i) => (
      <GlassCard key={review._id} review={review} index={i} />
    ))}
  </div>
);

export const Testimonials = ({ reviews = [] }: { reviews?: Review[] }) => {
  const containerRef = useRef<HTMLElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);
  const col3Ref = useRef<HTMLDivElement>(null);
  const separatorRef = useRef<HTMLDivElement>(null);
  const containerScaleRef = useRef<HTMLDivElement>(null);

  const [headerVisible, setHeaderVisible] = useState(false);
  const headerVisibleRef = useRef(false);

  const cachedRectParams = useRef({ docTop: 0, height: 0, vh: 0 });

  const updateCache = () => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    cachedRectParams.current = {
      docTop: rect.top + window.scrollY,
      height: rect.height,
      vh: window.innerHeight,
    };
  };

  useEffect(() => {
    updateCache();
    window.addEventListener("resize", updateCache);
    const ob = new ResizeObserver(updateCache);
    if (containerRef.current) ob.observe(containerRef.current);
    
    // Fallback: update cache after fonts/images load
    const timeout = setTimeout(updateCache, 1000);
    return () => {
      window.removeEventListener("resize", updateCache);
      ob.disconnect();
      clearTimeout(timeout);
    };
  }, []);

  useLenis(({ scroll }) => {
    const { docTop, height, vh } = cachedRectParams.current;
    if (height === 0 || vh === 0) return;
    
    // Calculate viewport-relative top using cached absolute top minus current scroll
    const top = docTop - scroll;
    const raw = (vh - top) / (vh + height);
    const clamped = clamp(raw, 0, 1);

    const y1 = piecewise(clamped, 0.45, 1, 200, 0, -150);
    const y2 = piecewise(clamped, 0.45, 1, 400, 0, -300);
    const y3 = piecewise(clamped, 0.45, 1, 300, 0, -200);
    const containerScale = piecewise(clamped, 0.4, 0.6, 0.85, 1.02, 1);
    const separatorHeight = mapRange(clamped, 0, 0.3, 0, 100);

    if (col1Ref.current) col1Ref.current.style.transform = `translate3d(0, ${y1}px, 0)`;
    if (col2Ref.current) col2Ref.current.style.transform = `translate3d(0, ${y2}px, 0)`;
    if (col3Ref.current) col3Ref.current.style.transform = `translate3d(0, ${y3}px, 0)`;
    if (separatorRef.current) separatorRef.current.style.height = `${separatorHeight}%`;
    if (containerScaleRef.current) containerScaleRef.current.style.transform = `scale(${containerScale})`;

    if (clamped > 0.05 && !headerVisibleRef.current) {
      headerVisibleRef.current = true;
      setHeaderVisible(true);
    }
  });

  const third = Math.ceil(reviews.length / 3);
  const col1 = reviews.slice(0, third);
  const col2 = reviews.slice(third, third * 2);
  const col3 = reviews.slice(third * 2);

  return (
    <section
      ref={containerRef}
      id="testimonials"
      className="relative py-24 w-full bg-transparent"
    >
      <JsonLdScript
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://hermer.pl/#person",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.7",
            reviewCount: 154,
          },
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
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <SplitRevealTitle
              line1="Zaufali nam"
              line2="Liderzy Branży."
              className="text-5xl md:text-8xl text-white tracking-tighter"
            />
          </div>

          <div className="flex items-center gap-6 pb-2">
            <div className="flex flex-col items-start md:items-end">
              <span
                className="text-3xl font-bold text-white"
                style={{
                  opacity: headerVisible ? 1 : 0,
                  transform: headerVisible ? "translateY(0)" : "translateY(10px)",
                  transition: "opacity 0.35s ease, transform 0.35s ease",
                }}
              >
                4.7/5
              </span>
              <div className="overflow-hidden">
                <LineReveal
                  lines={["Średnia ocen"]}
                  className="text-xs text-zinc-500 uppercase tracking-widest"
                />
              </div>
            </div>
            <div className="w-px h-10 bg-white/10 relative overflow-hidden">
              <div
                ref={separatorRef}
                style={{ height: "0%" }}
                className="absolute top-0 left-0 w-full bg-[#916AFF]"
              />
            </div>
            <div className="flex flex-col items-start md:items-end">
              <span
                className="text-3xl font-bold text-white"
                style={{
                  opacity: headerVisible ? 1 : 0,
                  transform: headerVisible ? "translateY(0)" : "translateY(10px)",
                  transition:
                    "opacity 0.35s ease 0.1s, transform 0.35s ease 0.1s",
                }}
              >
                {COMPANY_STATS.find((s) => s.label.toLowerCase().includes("projekt"))?.value.replace(" ", "") || "700+"}
              </span>
              <div className="overflow-hidden">
                <LineReveal
                  lines={["Projektów"]}
                  className="text-xs text-zinc-500 uppercase tracking-widest"
                  delay={0.1}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          ref={containerScaleRef}
          className="relative h-[600px] md:h-[800px] overflow-hidden rounded-3xl bg-white/[0.01] border border-white/5"
        >
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-neutral-900 to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-neutral-900 to-transparent z-20 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 md:p-8">
            <ReviewColumn reviews={col1} columnRef={col1Ref} />
            <ReviewColumn reviews={col2} columnRef={col2Ref} className="hidden md:flex pt-12" />
            <ReviewColumn reviews={col3} columnRef={col3Ref} className="hidden lg:flex" />
          </div>
        </div>
      </div>

      <FluidButton label="Zobacz więcej opinii" href="/opinie" />
    </section>
  );
};

export default Testimonials;
