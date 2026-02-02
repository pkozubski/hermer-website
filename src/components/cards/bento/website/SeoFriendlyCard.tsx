import React from "react";
import { BarChartBig, Search } from "lucide-react";
import { GlassBentoCard } from "../GlassBentoCard";
import { DeepDarkWindow } from "../visuals/DeepDarkWindow";

export const SeoFriendlyCard = ({ className = "" }: { className?: string }) => {
  return (
    <GlassBentoCard
      title="SEO Friendly"
      description="Prawidłowa struktura, meta tagi i schema.org. Dajemy Ci solidny start w wynikach wyszukiwania."
      icon={BarChartBig}
      className={className}
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center pt-8">
        {/* Deep Dark Window Browser */}
        <DeepDarkWindow className="w-[500px] left-10 h-[350px] shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
          <div className="flex flex-col h-full bg-neutral-900/50">
            {/* Google SERP Header */}
            <div className="h-16 border-b border-white/5 flex flex-col justify-center px-6 bg-neutral-900/80 backdrop-blur-sm gap-2 rounded-t-[20px]">
              {/* Google Logo Placeholder */}

              {/* Search Bar */}
              <div className="w-full h-8 bg-neutral-800 rounded-full border border-white/5 flex items-center px-4 gap-2">
                <Search size={12} className="text-neutral-500" />
                <div className="h-1.5 w-24 bg-neutral-700/50 rounded-full"></div>
              </div>
            </div>

            {/* SERP Results */}
            <div className="p-6 space-y-6 flex-1 overflow-hidden">
              {/* Result 1 (Hermer Organic) */}
              <div className="w-full flex flex-col gap-1 group/result">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-white/20 rounded-full"></div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-neutral-400 leading-none">
                      hermer.pl
                    </span>
                    <span className="text-[8px] text-neutral-600 leading-none">
                      https://hermer.pl {">"} oferta
                    </span>
                  </div>
                </div>

                {/* Title */}
                <div className="text-sm font-medium text-blue-400 group-hover/result:underline decoration-blue-400/50 underline-offset-2">
                  Strony WWW Premium - Nowoczesny Design
                </div>

                {/* Description */}
                <div className="space-y-1 mt-1">
                  <div className="h-2 w-full bg-linear-to-r from-neutral-600/50 to-transparent rounded-full"></div>
                  <div className="h-2 w-5/6 bg-linear-to-r from-neutral-600/50 to-transparent rounded-full"></div>
                </div>

                {/* Sitelinks (Optional visual detail) */}
                <div className="flex gap-2 mt-2">
                  <div className="h-4 px-2 rounded-full bg-neutral-800 border border-white/5 flex items-center">
                    <div className="h-1.5 w-10 bg-neutral-600/50 rounded-full"></div>
                  </div>
                  <div className="h-4 px-2 rounded-full bg-neutral-800 border border-white/5 flex items-center">
                    <div className="h-1.5 w-12 bg-neutral-600/50 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DeepDarkWindow>
      </div>
    </GlassBentoCard>
  );
};
