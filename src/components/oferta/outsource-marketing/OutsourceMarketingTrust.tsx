"use client";

import React from "react";
import { COMPANY_STATS } from "@/constants/stats";

export const OutsourceMarketingTrust: React.FC = () => {
  return (
    <section className="w-full py-24 bg-[#181818] border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-8 max-w-[1280px] relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
            Dlaczego warto nam zaufać?
          </h2>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPANY_STATS.map((stat, idx) => (
            <div 
              key={idx}
              className="bg-[#916AFF] rounded-md sm:rounded-lg p-8 sm:p-10 flex flex-col justify-center min-h-[220px] transition-transform duration-300 hover:-translate-y-2 shadow-xl shadow-[#916AFF]/10 border border-white/10"
            >
              <h3 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                {stat.value}
              </h3>
              <p className="text-white/90 text-[11px] sm:text-xs font-bold leading-relaxed tracking-wider uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
