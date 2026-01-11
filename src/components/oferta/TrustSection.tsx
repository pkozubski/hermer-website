"use client";
import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

const LogoMarquee = () => {
  const brandNames = [
    "Solaris", "Vortex", "Luna", "Nova", "Aura", "Zenith",
    "Pulse", "Echo", "Atlas", "Onyx", "Swift", "Peak"
  ];

  return (
    <div className="w-full overflow-hidden flex py-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700 relative z-10">
      <motion.div
        className="flex gap-20 items-center whitespace-nowrap"
        animate={{ x: [0, -1500] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {[...brandNames, ...brandNames, ...brandNames].map((name, i) => (
          <div
            key={i}
            className="text-xl md:text-2xl font-display font-medium text-slate-400 tracking-tight hover:text-[#916AFF] transition-colors duration-300 pointer-events-none select-none uppercase"
          >
            {name}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const TrustFeature = ({ title, desc, delay }: { title: string; desc: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    transition={{ delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    className="group bg-slate-50 border border-slate-200 p-8 rounded-3xl hover:border-[#916AFF]/30 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300"
  >
    <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-3 group-hover:text-[#916AFF] transition-colors">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed font-light">
      {desc}
    </p>
  </motion.div>
);

export const TrustSection = () => {
  return (
    <section className="bg-white py-32 relative overflow-hidden border-t border-slate-50">
      {/* Background Subtle Elements */}
      <div className="absolute top-0 left-1/4 w-[1000px] h-[1000px] bg-purple-50/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-16 relative z-10 text-center">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <span className="text-[#916AFF] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Zaufanie & Wyniki</span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium tracking-tighter text-slate-900 leading-[1.1]">
            Współpraca, która <br className="hidden md:block" />
            przynosi realną wartość.
          </h2>
        </motion.div>

        {/* Improved Marquee */}
        <div className="mb-32 relative">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />
          <LogoMarquee />
        </div>

        {/* High-End Testimonial Layout */}
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center border-t border-slate-100 pt-20">
          <div className="lg:col-span-7 text-left">
            <div className="mb-6 flex gap-1 text-[#916AFF]">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={16} className="fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium font-display text-slate-900 leading-[1.2] mb-10 tracking-tight">
              "Hermer nie jest typową agencją. To zespół, który faktycznie rozumie proces sprzedaży i potrafi go przełożyć na język kodu i designu. Nasz wzrost po wdrożeniu nowej strategii to ponad 400%."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200 overflow-hidden">
                <div className="font-bold text-slate-600">MS</div>
              </div>
              <div>
                <div className="font-bold text-slate-900 text-lg">Marek Sadowski</div>
                <div className="text-slate-400 text-xs font-semibold uppercase tracking-widest mt-0.5">CEO, Founders Group</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 text-left">
            <TrustFeature
              title="Partnerstwo Strategiczne"
              desc="Nie ograniczamy się do realizacji briefu. Kwestionujemy, optymalizujemy i wspólnie szukamy najlepszej drogi do celu."
              delay={0.2}
            />
            <TrustFeature
              title="Transparentny Proces"
              desc="Od pierwszego warsztatu po start kampanii. Masz pełny wgląd w postępy i jasną komunikację na każdym etapie."
              delay={0.3}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
