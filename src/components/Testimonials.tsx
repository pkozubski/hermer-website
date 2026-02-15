"use client";
import React, { useRef, useState, useEffect } from "react";
import { Quote } from "lucide-react";
import { CustomStar } from "./ui/CustomStar";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import { SplitRevealTitle } from "./ui/SplitRevealTitle";
import { LineReveal } from "./ui/LineReveal";
import FluidButton from "./ui/FluidButton";

// --- DANE ---

export interface Review {
  _id: string;
  author: string;
  rating: number;
  text: string;
  publishedAt: string;
  avatarUrl?: string; // Optional, mapping from avatar_link
  platform?: string;
  reviewLink?: string;
}

// Karta w stylu "Glass Tile" - czysta, bez zbędnych zdjęć, skupiona na treści
const GlassCard = ({ review, index }: { review: Review; index: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
    whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
    viewport={{ once: true }}
    transition={{
      duration: 0.8,
      delay: (index % 3) * 0.1,
      ease: [0.16, 1, 0.3, 1],
    }}
    className="group relative flex flex-col justify-between p-6 md:p-8 bg-white/[0.03] backdrop-blur-md border border-white/[0.08] rounded-2xl overflow-hidden hover:bg-white/[0.06] transition-colors duration-500"
  >
    {/* Subtelny gradientowy blik na hover */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

    <div className="relative z-10 flex flex-col h-full">
      {/* Nagłówek: autor + ikona cytatu */}
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
            <div className="text-white font-medium text-sm leading-tight">{review.author}</div>
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

      {/* Treść */}
      <p className="text-zinc-300 text-[15px] leading-relaxed font-light mb-5 line-clamp-6 flex-1">
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Stopka: gwiazdki */}
      <div className="flex items-center gap-1 pt-4 border-t border-white/5">
        {[...Array(review.rating || 5)].map((_, i) => (
          <CustomStar key={i} size={14} fill="#916AFF" />
        ))}
        <span className="text-[11px] text-zinc-500 ml-2">{review.rating || 5}.0</span>
      </div>
    </div>
  </motion.div>
);

// Kolumna z efektem Parallax
const ReviewColumn = ({
  reviews,
  y, // Przesunięcie w pionie sterowane scrollem
  className = "",
}: {
  reviews: Review[];
  y: MotionValue<number>;
  className?: string;
}) => (
  <motion.div
    style={{ y }}
    className={`flex flex-col gap-6 will-change-transform ${className}`}
  >
    {reviews.map((review, i) => (
      <GlassCard key={review._id} review={review} index={i} />
    ))}
  </motion.div>
);

export const Testimonials = ({ reviews = [] }: { reviews?: Review[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Pobieramy pozycję scrolla względem tego kontenera
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Definiujemy ruch kolumn.
  // Środkowa kolumna (y2) przesuwa się SZYBCIEJ w górę (-150px) niż boczne (-50px).
  // To tworzy efekt głębi (środek wydaje się być bliżej/dalej).
  // Apple-style "Super Smooth" spring configuration
  const appleSpring = { damping: 25, stiffness: 80, mass: 0.8 };

  // Parallax z efektem "wyplucia" (staggered elastic movement)
  // Kolumny startują nisko i "wyskakują" w górę przy scrollu.
  // Mapujemy wartości tak, by po osiągnięciu środka animacja kontynuowała ruch w górę, a nie wracała.
  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.45, 1], [200, 0, -150]),
    appleSpring,
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 0.45, 1], [400, 0, -300]),
    appleSpring,
  );
  const y3 = useSpring(
    useTransform(scrollYProgress, [0, 0.45, 1], [300, 0, -200]),
    appleSpring,
  );

  // Kontener z efektem "puchnięcia" (scale up)
  // Zmieniamy zakres, aby skala nie malała przy opuszczaniu sekcji (zostaje na 1).
  const containerScale = useSpring(
    useTransform(scrollYProgress, [0, 0.4, 0.6], [0.85, 1.02, 1]),
    appleSpring,
  );

  const separatorHeight = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["0%", "100%"],
  );

  return (
    // Sekcja jest przezroczysta (bg-transparent). Nałoży się na tło Twojej strony.
    <section
      ref={containerRef}
      id="testimonials"
      className="relative py-24 w-full bg-transparent"
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* --- HEADER --- */}
        {/* Design inspirowany Twoim screenem "Wybrane Realizacje" - duża typografia */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <SplitRevealTitle
              line1="Zaufali nam"
              line2="Liderzy Branży."
              className="text-5xl md:text-8xl text-white tracking-tighter"
            />
          </div>

          {/* Social Proof Stats */}
          <div className="flex items-center gap-6 pb-2">
            <div className="flex flex-col items-start md:items-end">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-white"
              >
                4.7/5
              </motion.span>
              <div className="overflow-hidden">
                <LineReveal
                  lines={["Średnia ocen"]}
                  className="text-xs text-zinc-500 uppercase tracking-widest"
                />
              </div>
            </div>
            <div className="w-px h-10 bg-white/10 relative overflow-hidden">
              <motion.div
                style={{ height: separatorHeight }}
                className="absolute top-0 left-0 w-full bg-[#916AFF]"
              />
            </div>
            <div className="flex flex-col items-start md:items-end">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl font-bold text-white"
              >
                700+
              </motion.span>
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

        {/* --- GRID (WALL OF REVIEWS) --- */}
        {/* Ustalamy wysokość okna (np. 800px) i ukrywamy to co wyjeżdża (overflow-hidden) */}
        <motion.div
          style={{ scale: containerScale }}
          className="relative h-[600px] md:h-[800px] overflow-hidden rounded-3xl bg-white/[0.01] border border-white/5"
        >
          {/* Maska gradientowa na dole - sugeruje, że jest więcej treści */}
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-neutral-900 to-transparent z-20 pointer-events-none" />
          {/* Opcjonalnie: Maska na górze */}
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-neutral-900 to-transparent z-20 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 md:p-8">
            {/* Calculate dynamic splits */}
            {(() => {
              const third = Math.ceil(reviews.length / 3);
              const col1 = reviews.slice(0, third);
              const col2 = reviews.slice(third, third * 2);
              const col3 = reviews.slice(third * 2);

              return (
                <>
                  {/* Kolumna 1 */}
                  <ReviewColumn reviews={col1} y={y1} />

                  {/* Kolumna 2 - Z efektem Parallax (zaczyna niżej, kończy wyżej) */}
                  <ReviewColumn
                    reviews={col2}
                    y={y2}
                    className="hidden md:flex pt-12"
                  />

                  {/* Kolumna 3 */}
                  <ReviewColumn
                    reviews={col3}
                    y={y3}
                    className="hidden lg:flex"
                  />
                </>
              );
            })()}
          </div>

          {/* CTA Button na dole, nad maską - Apple Smooth Expansion */}
        </motion.div>
      </div>

      {/* Sticky Fluid Button */}
      <FluidButton label="Zobacz więcej opinii" href="/opinie" />
    </section>
  );
};

export default Testimonials;
