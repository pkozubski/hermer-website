"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const AboutStats = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!gridRef.current) return;

      gsap.fromTo(
        gridRef.current,
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 88%",
            once: true,
          },
        },
      );
    },
    { scope: gridRef },
  );

  return (
    <section className="bg-transparent py-24 relative z-10">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <div
          ref={gridRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 pt-10 border-t border-white/10"
        >
          {[
            { value: "16 lat", label: "Rozwijamy sprzedaż naszych klientów" },
            {
              value: "9 lat",
              label: "Tyle wynosi średnie doświadczenie w naszym zespole",
            },
            { value: "700 +", label: "Zrealizowanych projektów" },
            {
              value: "140 +",
              label:
                "firm zdecydowało się wyrazić opinie na temat naszej współpracy",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center md:text-left flex flex-col items-center md:items-start group"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-3 tracking-tighter group-hover:text-[#916AFF] transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-neutral-400 font-semibold uppercase tracking-widest leading-relaxed max-w-[200px]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
