"use client";

import React from "react";
import { motion } from "framer-motion";
import { SplitRevealTitle } from "@/components/ui/SplitRevealTitle";

const features = [
  {
    title: "100/100 Speed",
    subtitle: "Google Core Vitals",
    description:
      "Optymalizacja. Każdy milisekundowy opóźnienie to stracony klient. My o to dbamy.",
    className: "col-span-1 md:col-span-2 bg-[#111] text-white",
    dark: true,
  },
  {
    title: "Mobile Native",
    subtitle: "Responsive Design",
    description:
      "Projektujemy najpierw pod kciuk użytkownika. Smartfon to główne okno na Twój biznes.",
    className: "col-span-1 bg-white border border-slate-200",
    dark: false,
  },
  {
    title: "SEO Structure",
    subtitle: "Semantic HTML",
    description:
      "Architektura informacji, którą kochają roboty Google. Fundament pod widoczność.",
    className: "col-span-1 bg-white border border-slate-200",
    dark: false,
  },
  {
    title: "Conversion",
    subtitle: "UX/UI Strategy",
    description:
      "Psychologia sprzedaży zaszyta w interfejsie. Prowadzimy użytkownika prosto do celu.",
    className: "col-span-1 md:col-span-2 bg-slate-50 border border-slate-200",
    dark: false,
  },
];

export const WebDesignFeatures = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="mb-24">
          <SplitRevealTitle
            line1="Fundamenty"
            line2="Cyfrowej Jakości"
            className="text-5xl md:text-8xl font-medium tracking-tighter text-slate-900 leading-[0.95]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({
  title,
  subtitle,
  description,
  className,
  dark,
  index,
}: {
  title: string;
  subtitle: string;
  description: string;
  className: string;
  dark: boolean;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    className={`p-10 md:p-14 rounded-[2rem] flex flex-col justify-between min-h-[400px] hover:scale-[1.01] transition-transform duration-500 ${className}`}
  >
    <div>
      <span
        className={`text-xs font-bold uppercase tracking-widest mb-4 block ${
          dark ? "text-slate-400" : "text-slate-500"
        }`}
      >
        {subtitle}
      </span>
      <h3
        className={`text-4xl md:text-5xl font-medium tracking-tight mb-6 ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h3>
    </div>
    <p
      className={`text-lg md:text-xl font-light leading-relaxed max-w-md ${
        dark ? "text-slate-300" : "text-slate-600"
      }`}
    >
      {description}
    </p>
  </motion.div>
);
