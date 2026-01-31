"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { SplitRevealTitle } from "@/components/ui/SplitRevealTitle";
import { LineReveal } from "@/components/ui/LineReveal";

export const AboutHero = () => {
  return (
    <section className="relative min-h-[80vh] w-full flex flex-col justify-center bg-transparent overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32 isolate">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <div className="max-w-5xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-[#916AFF]"></span>O nas
          </div>

          {/* Title */}
          <SplitRevealTitle
            line1="Tworzymy"
            line2="Profesjonalne strony"
            className="text-6xl md:text-8xl lg:text-[7rem] font-medium tracking-tighter text-white leading-[0.9] mb-12"
          />

          {/* Subtext and icon */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-t border-white/10 pt-8 gap-8">
            <LineReveal
              lines={[
                "Tworzymy strony, które pracują na Twój zysk.",
                "Od 14 lat łączymy design ze skuteczną sprzedażą.",
              ]}
              className="text-lg md:text-2xl max-w-2xl text-slate-400 font-light leading-relaxed"
            />

            <Link
              href="/kontakt"
              className="group relative px-6 py-3 bg-[#916AFF] text-white rounded-full font-bold text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(145,106,255,0.5)] hover:scale-105 active:scale-95 flex items-center gap-3 overflow-hidden"
            >
              <span className="relative z-10">Skontaktuj się</span>
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#916AFF] transition-all duration-300">
                <ChevronRight size={14} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
