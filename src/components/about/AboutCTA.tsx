"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export const AboutCTA = () => {
  return (
    <section className="container mx-auto px-4 sm:px-8 lg:px-16 pb-32">
      <div className="bg-neutral-950 rounded-[3rem] p-12 md:p-24 relative overflow-hidden text-center isolate group cursor-default">
        {/* Backgrounds */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#916AFF] rounded-full blur-[250px] opacity-20 group-hover:opacity-30 transition-opacity duration-1000 pointer-events-none -z-10" />

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-5xl md:text-7xl lg:text-9xl font-medium font-display text-white tracking-tighter mb-8 leading-[0.9]">
            Gotowy na{" "}
            <span className="text-[#916AFF] group-hover:text-white transition-colors duration-500">
              sukces?
            </span>
          </h2>
          <p className="text-neutral-400 text-lg md:text-2xl mb-12 max-w-2xl font-light leading-relaxed">
            Dołącz do grona zadowolonych klientów i stwórz z nami projekt, który
            wyróżni Twoją firmę.
          </p>

          <button className="bg-white text-neutral-950 px-10 py-5 sm:px-14 sm:py-7 rounded-full font-bold text-xl hover:bg-white hover:scale-110 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-300 inline-flex items-center gap-3 group/btn">
            Rozpocznij współpracę
            <ArrowRight
              size={24}
              className="group-hover/btn:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </section>
  );
};
