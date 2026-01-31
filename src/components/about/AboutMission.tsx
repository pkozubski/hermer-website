"use client";

import React from "react";
import { CheckCircle2, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

import { SplitRevealTitle } from "@/components/ui/SplitRevealTitle";

export const AboutMission = () => {
  return (
    <section className="py-32 bg-transparent relative">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col items-start gap-24">
          <div className="w-full max-w-5xl">
            <SplitRevealTitle
              line1="Nasza"
              line2="Misja"
              className="text-6xl md:text-8xl font-display font-medium tracking-tighter text-white"
            />
          </div>

          <div className="grid lg:grid-cols-12 gap-16 w-full">
            {/* Highlight Block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-white/5 rounded-[3rem] p-10 md:p-16 relative overflow-hidden group hover:shadow-2xl hover:shadow-white/5 transition-all duration-500 border border-white/5"
            >
              {/* Decorative Circle */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#efeaff] rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10">
                <p className="text-3xl md:text-5xl font-light text-white leading-[1.15]">
                  Od <span className="font-medium text-[#916AFF]">14 lat</span>{" "}
                  pomagamy przedsiębiorcom zwiększać zyski dzięki skutecznym
                  stronom internetowym, które{" "}
                  <span className="underline decoration-[#916AFF]/30 underline-offset-8">
                    sprzedają
                  </span>
                  .
                </p>
              </div>
            </motion.div>

            {/* Points */}
            <div className="lg:col-span-5 flex flex-col justify-center gap-12 pl-4">
              <div className="group cursor-default">
                <div className="flex items-center gap-4 text-[#916AFF] font-bold uppercase tracking-widest text-xs mb-4 group-hover:translate-x-2 transition-transform duration-300">
                  <div className="w-10 h-10 rounded-full bg-[#916AFF]/20 flex items-center justify-center">
                    <CheckCircle2 size={18} />
                  </div>
                  Wiedza to priorytet
                </div>
                <p className="text-slate-400 leading-relaxed text-xl font-light border-l-2 border-white/10 pl-6 group-hover:border-[#916AFF] transition-colors duration-300">
                  Tworzymy rozwiązania na lata. Wierzymy, że dobra strona to
                  inwestycja, a nie koszt.
                </p>
              </div>

              <div className="group cursor-default">
                <div className="flex items-center gap-4 text-sky-500 font-bold uppercase tracking-widest text-xs mb-4 group-hover:translate-x-2 transition-transform duration-300">
                  <div className="w-10 h-10 rounded-full bg-sky-500/20 flex items-center justify-center">
                    <TrendingUp size={18} />
                  </div>
                  Realne cele na wyniki
                </div>
                <p className="text-slate-400 leading-relaxed text-xl font-light border-l-2 border-white/10 pl-6 group-hover:border-sky-500 transition-colors duration-300">
                  Nie „robimy stron”. Budujemy skuteczne narzędzia marketingowe,
                  które generują zyski.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
