"use client";

import React from "react";
import { Percent } from "lucide-react";

export const OutsourceMarketingBanner: React.FC = () => {
  return (
    <section className="w-full bg-linear-to-r from-[#1b152e] to-[#251a3d] border-y border-[#3d276b]/30 py-8 sm:py-10 overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 relative z-10">
        
        {/* Decorative Concentric Rings with Percent Icon */}
        <div className="relative w-12 h-12 shrink-0 flex items-center justify-center rounded-full border border-[#916AFF]/50">
          <div className="absolute inset-[-5px] rounded-full border border-dashed border-[#916AFF]/40 animate-[spin_15s_linear_infinite]" />
          <div className="absolute inset-[-10px] rounded-full border border-[#916AFF]/20" />
          <Percent className="w-5 h-5 text-[#916AFF]" strokeWidth={2.5} />
        </div>

        {/* Text */}
        <h2 className="text-white text-center sm:text-left text-sm sm:text-base md:text-lg lg:text-xl font-light tracking-widest sm:tracking-[0.15em] lg:tracking-[0.2em] uppercase max-w-[90%] sm:max-w-none">
          Zyskaj profesjonalny dział marketingu bez zbędnych kosztów!
        </h2>

      </div>
    </section>
  );
};
