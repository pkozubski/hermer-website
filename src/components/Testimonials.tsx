"use client";
import React, { useRef } from "react";
import { Star, Quote } from "lucide-react";
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
const REVIEWS = [
  {
    id: 1,
    name: "Anna Nowak",
    role: "Marketing Dir. @ EcoLife",
    text: "Wyniki SEO przerosły oczekiwania. Ruch organiczny wzrósł o 300% w kwartał.",
  },
  {
    id: 2,
    name: "Piotr Wiśniewski",
    role: "Founder @ CoffeeLover",
    text: "Sklep e-commerce stał się maszyną do sprzedaży. Konwersja skoczyła dwukrotnie.",
  },
  {
    id: 3,
    name: "Monika Zając",
    role: "Owner @ BeautySpace",
    text: "Projekt oddany przed czasem, bez kompromisów jakościowych. Rzadkość.",
  },
  {
    id: 4,
    name: "Robert Mazur",
    role: "Logistics Mgr. @ TransPol",
    text: "Dashboard zautomatyzował 40% pracy biurowej. Najlepsza inwestycja roku.",
  },
  {
    id: 5,
    name: "Katarzyna Wójcik",
    role: "Creative Lead @ ArtStudio",
    text: "Zrozumieli wizję szybciej niż my sami. Strona działa błyskawicznie.",
  },
  {
    id: 6,
    name: "Marek Kowalski",
    role: "CEO @ TechStart",
    text: "Świetna architektura kodu. Jakość techniczna na poziomie światowym.",
  },
  {
    id: 7,
    name: "Ewa Domagała",
    role: "CMO @ GreenEnergy",
    text: "Kampanie reklamowe zoptymalizowane perfekcyjnie. ROI skoczyło o 50%.",
  },
  {
    id: 8,
    name: "Janusz Kowalczyk",
    role: "Dyrektor @ Budmix",
    text: "Nowa strona to wizytówka, której brakowało. Klienci chwalą nowoczesny wygląd.",
  },
  {
    id: 9,
    name: "Aleksandra Wilk",
    role: "Owner @ YogaFlow",
    text: "System rezerwacji działa bez zarzutu. Oszczędzamy godziny na administracji.",
  },
];

// Karta w stylu "Glass Tile" - czysta, bez zbędnych zdjęć, skupiona na treści
const GlassCard = ({
  review,
  index,
}: {
  review: (typeof REVIEWS)[0];
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
    whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
    viewport={{ once: true }}
    transition={{
      duration: 0.8,
      delay: (index % 3) * 0.1,
      ease: [0.16, 1, 0.3, 1],
    }}
    className="group relative p-6 md:p-8 bg-white/[0.03] backdrop-blur-md border border-white/[0.08] rounded-2xl overflow-hidden hover:bg-white/[0.06] transition-colors duration-500"
  >
    {/* Subtelny gradientowy blik na hover */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

    <div className="relative z-10">
      {/* Gwiazdki */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={12} className="fill-[#FBBC05] text-[#FBBC05]" />
        ))}
      </div>

      {/* Treść */}
      <p className="text-zinc-200 text-lg leading-relaxed font-light mb-6">
        "{review.text}"
      </p>

      {/* Stopka karty */}
      <div className="flex items-center justify-between pt-6 border-t border-white/5">
        <div>
          <div className="text-white font-medium text-sm">{review.name}</div>
          <div className="text-xs text-zinc-500 mt-0.5">{review.role}</div>
        </div>
        <Quote className="text-white/10 w-8 h-8 group-hover:text-white/20 transition-colors" />
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
  reviews: typeof REVIEWS;
  y: MotionValue<number>;
  className?: string;
}) => (
  <motion.div
    style={{ y }}
    className={`flex flex-col gap-6 will-change-transform ${className}`}
  >
    {reviews.map((review, i) => (
      <GlassCard key={review.id} review={review} index={i} />
    ))}
  </motion.div>
);

export const Testimonials = () => {
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
    appleSpring
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 0.45, 1], [400, 0, -300]),
    appleSpring
  );
  const y3 = useSpring(
    useTransform(scrollYProgress, [0, 0.45, 1], [300, 0, -200]),
    appleSpring
  );

  // Kontener z efektem "puchnięcia" (scale up)
  // Zmieniamy zakres, aby skala nie malała przy opuszczaniu sekcji (zostaje na 1).
  const containerScale = useSpring(
    useTransform(scrollYProgress, [0, 0.4, 0.6], [0.85, 1.02, 1]),
    appleSpring
  );

  const separatorHeight = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["0%", "100%"]
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
              className="text-5xl md:text-7xl text-white"
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
                4.9/5
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
                100+
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
            {/* Kolumna 1 */}
            <ReviewColumn reviews={REVIEWS.slice(0, 3)} y={y1} />

            {/* Kolumna 2 - Z efektem Parallax (zaczyna niżej, kończy wyżej) */}
            <ReviewColumn
              reviews={REVIEWS.slice(3, 6)}
              y={y2}
              className="hidden md:flex pt-12"
            />

            {/* Kolumna 3 */}
            <ReviewColumn
              reviews={REVIEWS.slice(6, 9)}
              y={y3}
              className="hidden lg:flex"
            />
          </div>

          {/* CTA Button na dole, nad maską - Apple Smooth Expansion */}
        </motion.div>
      </div>

      {/* Sticky Fluid Button */}
      <FluidButton label="Zobacz więcej opinii" />
    </section>
  );
};

export default Testimonials;
