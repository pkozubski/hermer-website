"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import {
  ArrowUpRight,
  ArrowDown,
  LayoutTemplate,
  Smartphone,
  Zap,
  MousePointerClick,
  ShoppingBag,
  Repeat,
  Gauge,
  CreditCard,
  Search,
  TrendingUp,
  Globe,
  BarChart3,
  Target,
} from "lucide-react";
import {
  WebDesignVisual,
  EcommerceVisualNew,
  MarketingVisualNew,
  SeoVisualNew,
} from "./OfferVisuals";

// --- Configuration ---
const CARDS = [
  {
    id: "web",
    title: "Web\nDesign",
    description:
      "Cyfrowa architektura, która sprzedaje. Tworzymy strony łączące sztukę designu z psychologią sprzedaży.",
    sub: "Nagradzane Strony WWW",
    Visual: WebDesignVisual,
    bg: "bg-white",
    text: "text-slate-900",
    accent: "text-purple-600",
    shadow: "shadow-purple-900/5",
    features: [
      { icon: LayoutTemplate, label: "Unikalny UI Design" },
      { icon: Smartphone, label: "RWD & Mobile First" },
      { icon: Zap, label: "Ultra Wydajność" },
      { icon: MousePointerClick, label: "Wysoka Konwersja" },
    ],
  },
  {
    id: "shop",
    title: "E-Com\nmerce",
    description:
      "Sklepy, które nie tylko wyglądają, ale przede wszystkim sprzedają. Budujemy skalowalne systemy e-commerce z naciskiem na User Experience i konwersję.",
    sub: "Sklepy, które konwertują",
    Visual: EcommerceVisualNew,
    bg: "bg-[#FAFAFA]",
    text: "text-slate-900",
    accent: "text-amber-600",
    shadow: "shadow-amber-900/5",
    features: [
      { icon: ShoppingBag, label: "Design Sprzedażowy" },
      { icon: CreditCard, label: "Bezpieczne Płatności" },
      { icon: Gauge, label: "Optymalizacja Szybkości" },
      { icon: Repeat, label: "Retention System" },
    ],
  },
  {
    id: "seo",
    title: "Growth\n& SEO",
    description:
      "Pozycjonowanie to inżynieria, nie magia. Dostarczamy precyzyjne strategie, które windują Twój biznes na szczyt wyników wyszukiwania.",
    sub: "Dominacja w Wynikach",
    Visual: SeoVisualNew,
    bg: "bg-slate-950",
    text: "text-white",
    accent: "text-emerald-400",
    shadow: "shadow-emerald-900/20",
    features: [
      { icon: Search, label: "Techniczny Audyt" },
      { icon: TrendingUp, label: "Strategia Contentu" },
      { icon: Globe, label: "Link Building" },
      { icon: BarChart3, label: "Analityka Danych" },
    ],
  },
  {
    id: "ads",
    title: "Digital\nAds",
    description:
      "Nie przepalamy budżetów. Tworzymy precyzyjne lejki sprzedażowe, które dostarczają kaloryczne leady i realny zwrot z inwestycji (ROAS).",
    sub: "Skalowanie & Analityka",
    Visual: MarketingVisualNew,
    bg: "bg-[#FAFAFA]",
    text: "text-slate-900",
    accent: "text-blue-600",
    shadow: "shadow-blue-900/5",
    features: [
      { icon: Target, label: "Facebook & Instagram Ads" },
      { icon: Search, label: "Google Ads & PPC" },
      { icon: Zap, label: "Marketing Automation" },
      { icon: BarChart3, label: "Raportowanie ROI" },
    ],
  },
];

// --- Card Component ---
const Card = ({
  i,
  card,
  progress,
  range,
  targetScale,
}: {
  i: number;
  card: (typeof CARDS)[0];
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      className="h-screen flex items-center justify-center sticky top-0 perspective-[1000px]"
      style={{ zIndex: i + 1 }}
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5% + ${i * 25}px)`,
        }}
        className={`relative flex flex-col w-[95vw] h-[85vh] rounded-[48px] overflow-hidden shadow-2xl origin-top border border-slate-200 ${card.bg} will-change-transform transform-gpu backface-hidden`}
      >
        {/* Special Decor for Web Design Card */}
        {card.id === "web" && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]" />
            <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-purple-100 rounded-full mix-blend-multiply blur-[120px] opacity-40 animate-pulse" />
            <div className="absolute right-1/2 top-0 w-[400px] h-[400px] bg-blue-100 rounded-full mix-blend-multiply blur-[100px] opacity-40" />
          </div>
        )}

        {/* Special Decor for E-Commerce Card */}
        {card.id === "shop" && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Plus Pattern */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "radial-gradient(#d97706 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            {/* Warm Glows */}
            <div className="absolute -right-20 -top-20 w-[500px] h-[500px] bg-amber-200/40 rounded-full mix-blend-multiply blur-[120px]" />
            <div className="absolute -left-20 bottom-0 w-[400px] h-[400px] bg-orange-100/50 rounded-full mix-blend-multiply blur-[100px]" />
          </div>
        )}

        {/* Special Decor for SEO Card (Dark Metallic) */}
        {card.id === "seo" && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Metallic Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[40px_40px]" />
            {/* Sheen */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 via-transparent to-slate-900/50" />
            {/* Emerald Glow - Subtle */}
            <div className="absolute left-1/4 top-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full mix-blend-screen blur-[120px]" />
          </div>
        )}

        <div className="flex h-full flex-col md:flex-row relative z-10">
          {/* Left: Typography */}
          <div className="flex-1 p-8 md:p-16 flex flex-col justify-between relative">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-12 h-[2px] bg-current opacity-20 ${card.text}`}
                />
                <span
                  className={`uppercase tracking-[0.3em] text-xs font-bold ${card.accent}`}
                >
                  {card.sub}
                </span>
              </div>
              <h2
                className={`text-[12vw] md:text-[8vw] leading-[0.85] font-serif font-medium tracking-tight whitespace-pre-line ${card.text}`}
              >
                {card.id === "web" ? (
                  <span>
                    <span className="italic font-light">Web</span>
                    <br />
                    Design
                  </span>
                ) : (
                  card.title
                )}
              </h2>
            </div>

            <div className="flex-1 flex flex-col justify-end gap-8">
              <div>
                <p
                  className={`text-xl md:text-2xl max-w-sm leading-relaxed mb-6 ${card.id === "seo" ? "text-slate-400" : "text-slate-500"}`}
                >
                  {card.description}
                </p>

                {/* Feature Badges for Web Design */}
                {card.features && (
                  <div className="flex flex-wrap gap-3 mb-2">
                    {card.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-full backdrop-blur-sm shadow-sm transition-transform hover:scale-105 cursor-default border ${
                          card.id === "seo"
                            ? "bg-white/5 border-white/10 text-slate-200"
                            : "bg-white/60 border-slate-200 text-slate-700"
                        }`}
                      >
                        <feature.icon size={16} className={`${card.accent}`} />
                        <span className="text-sm font-semibold">
                          {feature.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex justify-between items-end">
                <span className="hidden md:block text-slate-400 text-sm font-medium tracking-wide">
                  SCROLL TO EXPLORE
                </span>
                <button className="w-20 h-20 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-black transition-colors duration-500 group shadow-lg">
                  <ArrowUpRight
                    className="group-hover:rotate-45 transition-transform duration-300"
                    size={32}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Visual Area */}
          <div className="md:w-[50%] h-[40vh] md:h-full relative p-6 md:p-12 flex items-center justify-center">
            {/* Decorative Blob Background */}
            <div
              className={`absolute inset-0 opacity-30 blur-[100px] pointer-events-none ${
                i === 0
                  ? "bg-purple-200"
                  : i === 1
                    ? "bg-amber-100"
                    : i === 2
                      ? "bg-emerald-100"
                      : "bg-blue-100"
              }`}
            />

            <div className="relative w-full h-full rounded-[40px] overflow-hidden shadow-sm ring-1 ring-black/5 bg-white/50 backdrop-blur-sm transform transition-transform hover:scale-[1.02] duration-700">
              <card.Visual />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const OfferHero: React.FC = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="bg-[#FAFAFA] relative">
      {/* --- Opening Manifesto --- */}
      <section className="h-[80vh] flex flex-col items-center justify-center sticky top-0 z-0">
        <motion.div
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]),
            scale: useTransform(scrollYProgress, [0, 0.2], [1, 0.9]),
          }}
          className="text-center px-4"
        >
          <h1 className="text-6xl md:text-9xl font-serif text-slate-900 tracking-tighter mb-6 relative">
            <span className="relative z-10">Wyobraźnia</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              Bez Granic.
            </span>

            {/* Decorative Swash */}
            <svg
              className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full opacity-10"
              viewBox="0 0 200 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#9333EA"
                d="M45.7,-76.3C58.9,-69.3,69.1,-58.3,77.3,-46.3C85.5,-34.3,91.7,-21.3,90.4,-8.9C89.1,3.5,80.3,15.3,71.2,26.2C62.1,37.1,52.7,47.1,41.9,55.3C31.1,63.5,18.9,69.9,6.3,71.7C-6.3,73.5,-19.3,70.7,-31.2,64.2C-43.1,57.7,-53.9,47.5,-63.3,35.6C-72.7,23.7,-80.7,10.1,-81.1,-3.8C-81.5,-17.7,-74.3,-31.9,-64.1,-43.3C-53.9,-54.7,-40.7,-63.3,-27.2,-70.1C-13.7,-76.9,0.1,-81.9,13.8,-80.2C27.5,-78.5,41.1,-70.1,45.7,-76.3Z"
                transform="translate(100 50)"
              />
            </svg>
          </h1>
          <p className="text-slate-500 max-w-xl mx-auto text-lg leading-relaxed font-medium">
            Nie tworzymy tylko stron. Projektujemy cyfrowe doświadczenia, które
            hipnotyzują i sprzedają.
          </p>
          <div className="mt-12 flex justify-center animate-bounce">
            <ArrowDown className="text-slate-400" />
          </div>
        </motion.div>
      </section>

      {/* --- The Deck Stack --- */}
      <div className="relative z-10 pb-[20vh] pt-[10vh]">
        {CARDS.map((card, i) => {
          const range = [i * 0.25, 1];
          const targetScale = 1 - (CARDS.length - i) * 0.05;

          return (
            <Card
              key={card.id}
              i={i}
              card={card}
              progress={scrollYProgress}
              range={range}
              targetScale={targetScale}
            />
          );
        })}
      </div>

      {/* --- Outro / CTA --- */}
      <section className="h-[60vh] flex items-center justify-center bg-white relative z-20 border-t border-slate-100">
        <div className="text-center group cursor-pointer">
          <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 transition-colors group-hover:text-purple-600">
            Gotowy na zmianę?
          </h2>
          <a
            href="#contact"
            className="inline-block px-12 py-5 bg-slate-900 text-white text-xl font-bold rounded-full hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300"
          >
            Rozpocznij Projekt
          </a>
        </div>
      </section>
    </div>
  );
};
