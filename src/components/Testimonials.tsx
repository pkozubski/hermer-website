"use client";
import React, { useRef, useState, useEffect } from "react";
import { Quote } from "lucide-react";
import { CustomStar } from "./ui/CustomStar";
import { SplitRevealTitle } from "./ui/SplitRevealTitle";
import { LineReveal } from "./ui/LineReveal";
import FluidButton from "./ui/FluidButton";

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

const ReviewColumn = ({
  reviews,
  y,
  className = "",
}: {
  reviews: Review[];
  y: number;
  className?: string;
}) => (
  <div
    style={{ transform: `translate3d(0, ${y}px, 0)` }}
    className={`flex flex-col gap-6 will-change-transform ${className}`}
  >
    {reviews.map((review, i) => (
      <GlassCard key={review._id} review={review} index={i} />
    ))}
  </div>
);

export const Testimonials = ({ reviews = [] }: { reviews?: Review[] }) => {
  const containerRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let rafId: number | null = null;

    const updateProgress = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const raw = (vh - rect.top) / (vh + rect.height);
      const clamped = clamp(raw, 0, 1);
      setProgress(clamped);
      if (clamped > 0.05) setHeaderVisible(true);
    };

    const onScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        updateProgress();
      });
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const y1 = piecewise(progress, 0.45, 1, 200, 0, -150);
  const y2 = piecewise(progress, 0.45, 1, 400, 0, -300);
  const y3 = piecewise(progress, 0.45, 1, 300, 0, -200);
  const containerScale = piecewise(progress, 0.4, 0.6, 0.85, 1.02, 1);
  const separatorHeight = mapRange(progress, 0, 0.3, 0, 100);

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
                style={{ height: `${separatorHeight}%` }}
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
                700+
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
          style={{ transform: `scale(${containerScale})` }}
          className="relative h-[600px] md:h-[800px] overflow-hidden rounded-3xl bg-white/[0.01] border border-white/5"
        >
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-neutral-900 to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-neutral-900 to-transparent z-20 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 md:p-8">
            <ReviewColumn reviews={col1} y={y1} />
            <ReviewColumn reviews={col2} y={y2} className="hidden md:flex pt-12" />
            <ReviewColumn reviews={col3} y={y3} className="hidden lg:flex" />
          </div>
        </div>
      </div>

      <FluidButton label="Zobacz więcej opinii" href="/opinie" />
    </section>
  );
};

export default Testimonials;
