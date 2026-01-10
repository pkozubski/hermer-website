"use client";

import React from "react";
import { motion } from "framer-motion";
import { SplitRevealTitle } from "@/components/ui/SplitRevealTitle";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

const results = [
  {
    value: "2300%",
    label: "Wzrost ilości zapytań",
    sub: "Producent Przyczep",
    description: "Kompleksowa transformacja cyfrowa i nowa strategia.",
  },
  {
    value: "670%",
    label: "Wzrost Konwersji",
    sub: "Branża E-commerce",
    description: "Optymalizacja ścieżki zakupowej i redesign UX/UI.",
  },
  {
    value: "1574%",
    label: "Wzrost Ruchu",
    sub: "Ułańska Zagroda",
    description: "Efekt synergii SEO i nowej, szybkiej strony www.",
  },
];

export const WebDesignResults = () => {
  return (
    <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-8 relative z-10">
        <div className="mb-24">
          <SplitRevealTitle
            line1="Wyniki,"
            line2="które mówią same."
            className="text-6xl md:text-9xl font-medium tracking-tighter text-white leading-[0.9]"
            classNameLine1="text-white"
            classNameLine2="text-slate-400"
          />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 border-b border-white/10 pb-20">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="text-[12px] font-bold tracking-widest uppercase text-[#916AFF] mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#916AFF]" />
                {result.sub}
              </div>
              <div className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white to-white/60">
                {result.value}
              </div>
              <h3 className="text-xl font-medium text-white mb-2">
                {result.label}
              </h3>
              <p className="text-slate-400 font-light leading-relaxed max-w-xs">
                {result.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Guarantee Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16 bg-white/5 rounded-[3rem] p-10 md:p-16 border border-white/10">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 text-green-400 flex items-center justify-center">
                <ShieldCheck size={28} />
              </div>
              <span className="text-green-400 font-bold tracking-widest uppercase text-sm">
                Gwarancja Satysfakcji
              </span>
            </div>
            <h3 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
              Bezpieczny start współpracy.
            </h3>
            <p className="text-lg text-slate-400 font-light leading-relaxed mb-8">
              Rozumiemy obawy przed nowym partnerem. Dlatego pierwszy etap
              (strategia i makiety) objęty jest gwarancją zwrotu pieniędzy.
              Jeśli efekt Cię nie zadowoli - oddajemy wpłaconą zaliczkę.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-200 transition-colors"
            >
              Sprawdź Możliwości
              <ArrowUpRight size={20} />
            </Link>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="aspect-square md:aspect-video rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/5 p-8 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(145,106,255,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="text-center relative z-10">
                <div className="text-6xl font-bold text-white mb-2">100%</div>
                <div className="text-slate-400 tracking-widest uppercase text-sm">
                  Zwrotu Środków
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
