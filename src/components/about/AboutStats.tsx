"use client";

import React from "react";
import { motion } from "framer-motion";

const StatItem = ({
  value,
  label,
  sublabel,
  delay,
}: {
  value: string;
  label: string;
  sublabel: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="flex flex-col"
  >
    <div className="text-6xl lg:text-8xl font-medium font-display tracking-tighter text-white mb-4">
      {value}
    </div>
    <div className="text-lg font-bold text-white mb-2 tracking-wide">
      {label}
    </div>
    <div className="text-sm font-medium text-slate-400 max-w-[200px] leading-snug">
      {sublabel}
    </div>
  </motion.div>
);

export const AboutStats = () => {
  return (
    <section className="bg-transparent py-32 text-white relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#916AFF] rounded-full blur-[150px] opacity-[0.07] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#38bdf8] rounded-full blur-[150px] opacity-[0.05] pointer-events-none" />

      {/* Grain */}
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <div className="text-left mb-20 flex items-center gap-4">
          <div className="w-12 h-px bg-slate-700"></div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            Dlaczego warto nam zaufać?
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-t border-slate-800/50 pt-16">
          <StatItem
            value="14"
            label="Lat na rynku"
            sublabel="Jesteśmy z wami od 2010 roku"
            delay={0}
          />
          <StatItem
            value="9"
            label="Lat doświadczenia"
            sublabel="Średni staż eksperta w naszym zespole"
            delay={0.1}
          />
          <StatItem
            value="700+"
            label="Projekty"
            sublabel="Zrealizowanych sukcesów"
            delay={0.2}
          />
          <StatItem
            value="140+"
            label="Opinii"
            sublabel="Zadowolonych firm i klientów"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};
