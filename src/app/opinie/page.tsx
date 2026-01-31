"use client";

import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SplitRevealTitle } from "@/components/ui/SplitRevealTitle";

import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

// --- DANE (Copied from Testimonials.tsx) ---
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
    className="group relative p-6 md:p-8 bg-white/[0.03] backdrop-blur-md border border-white/[0.08] rounded-2xl overflow-hidden hover:bg-white/[0.06] transition-colors duration-500 h-full flex flex-col justify-between"
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
    </div>

    <div className="relative z-10">
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

export default function OpiniePage() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white overflow-x-clip">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[1000px] h-[1000px] bg-[#916AFF]/10 rounded-full blur-[150px] mix-blend-screen animate-pulse-slow" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-[#52D8EA]/5 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <Header allowVisibility={true} />

      <main className="relative z-10 pt-40 md:pt-48 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          {/* Header Section */}
          <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-6">
            <SplitRevealTitle
              line1="Zaufali nam"
              line2="Liderzy Branży"
              className="text-5xl md:text-8xl text-white"
            />
            <div className="max-w-xs md:max-w-sm">
              <p className="text-neutral-400 text-xs md:text-sm uppercase tracking-wide leading-relaxed">
                Zobacz, co mówią o nas klienci, którym pomogliśmy osiągnąć
                sukces w świecie cyfrowym.
              </p>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((review, index) => (
              <GlassCard key={review.id} review={review} index={index} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
