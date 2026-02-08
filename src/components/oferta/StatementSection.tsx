"use client";
import React from "react";
import { SplitRevealTitle } from "@/components/ui/SplitRevealTitle";
import { LineReveal } from "@/components/ui/LineReveal";
import { MaskedReveal } from "@/components/ui/MaskedReveal";

const StatCounter = ({
  value,
  label,
  delay = 0,
}: {
  value: string;
  label: string;
  delay?: number;
}) => {
  return (
    <div className="flex flex-col">
      <span className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 mb-2 overflow-hidden flex">
        <MaskedReveal text={value} delay={delay} />
      </span>
      <span className="text-xs font-bold uppercase tracking-widest text-[#916AFF] opacity-80 overflow-hidden flex">
        <MaskedReveal text={label} delay={delay + 0.1} />
      </span>
    </div>
  );
};

export const StatementSection = () => {
  return (
    <section className="bg-white py-32 px-4 md:px-8 border-t border-slate-100 relative overflow-hidden">
      {/* Subtle Background Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 flex flex-col md:flex-row gap-16 md:gap-32 items-start relative z-10">
        {/* Left: Stats */}
        <div className="flex flex-col gap-16 select-none min-w-[300px]">
          <div className="space-y-12 border-l-2 border-slate-100 pl-8">
            <StatCounter
              value="700+"
              label="Zrealizowanych Projektów"
              delay={0}
            />
            <StatCounter
              value="16 Lat"
              label="Doświadczenia w Branży"
              delay={0.2}
            />
            <StatCounter
              value="98%"
              label="Zadowolonych Klientów"
              delay={0.4}
            />
          </div>
        </div>

        {/* Right: Narrative */}
        <div className="flex-1 pt-4">
          <SplitRevealTitle
            line1="Większość stron to koszt."
            line2="My budujemy inwestycje."
            className="text-6xl md:text-8xl font-medium leading-[1.0] text-slate-900 mb-10 -tracking-[0.02em]"
          />
          <div className="space-y-8 text-xl text-slate-600 leading-relaxed font-light max-w-2xl">
            <LineReveal
              lines={[
                'W Hermer nie wierzymy w "ładne strony", które nic nie robią.',
                "Wierzymy w cyfrowe ekosystemy, które pracują na Twój sukces 24",
                "godziny na dobę.",
              ]}
              delay={0.3}
            />
            <LineReveal
              lines={[
                "Łączymy analityczną precyzję z nowoczesnym designem. Każdy piksel",
                "ma swój cel, a każda linijka kodu służy konwersji. Twoja",
                "konkurencja robi strony. My budujemy przewagę.",
              ]}
              delay={0.5}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
