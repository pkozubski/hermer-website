"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { SplitRevealTitle } from "@/components/ui/SplitRevealTitle";
import { LineReveal } from "@/components/ui/LineReveal";
import { ReelCtaButton } from "../ui/ReelCtaButton";

export const AboutHero = () => {
  return (
    <section className="relative min-h-[80vh] w-full flex flex-col justify-center bg-transparent overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32 isolate">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <div className="max-w-5xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-400 text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in-up">
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
                "Od 16 lat łączymy design ze skuteczną sprzedażą.",
              ]}
              className="text-lg md:text-2xl max-w-2xl text-neutral-400 font-light leading-relaxed"
            />

            <ReelCtaButton text="Skontaktuj się" href="/kontakt" size="large" />
          </div>
        </div>
      </div>
    </section>
  );
};
