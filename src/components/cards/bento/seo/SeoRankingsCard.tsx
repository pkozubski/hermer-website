import React from "react";
import { Search, Plus } from "lucide-react";
import { GlassBentoCard } from "../GlassBentoCard";
import { DeepDarkWindow } from "../visuals/DeepDarkWindow";

export const SeoRankingsCard = ({ className = "" }: { className?: string }) => {
  return (
    <GlassBentoCard
      title="Pozycje i Słowa Kluczowe"
      description="Ty wybierasz cel, my dostarczamy wyniki. Prosty panel do zarządzania Twoimi frazami."
      icon={Search}
      contentAlign="left"
      className={className}
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Slanted Window Container - Right Aligned */}
        <div className="absolute top-1/2 -translate-y-1/3 right-[-10%] w-full h-[300px] flex items-center justify-end">
          <DeepDarkWindow className="absolute top-1 -rotate-4 -right-[40%] w-[60%] h-[120%] shadow-xl opacity-40 scale-95 blur-[1px] transition-all duration-500 group-hover:opacity-80 group-hover:blur-0">
            <div className="w-full h-full bg-[#202124] p-5 flex flex-col font-sans">
              {/* Google Logo Mock */}
              <div className="flex text-2xl font-bold tracking-tight mb-6 select-none">
                <span className="text-neutral-600 transition-colors duration-500 group-hover:text-[#4285F4]">
                  G
                </span>
                <span className="text-neutral-600 transition-colors duration-500 group-hover:text-[#EA4335]">
                  o
                </span>
                <span className="text-neutral-600 transition-colors duration-500 group-hover:text-[#FBBC05]">
                  o
                </span>
                <span className="text-neutral-600 transition-colors duration-500 group-hover:text-[#4285F4]">
                  g
                </span>
                <span className="text-neutral-600 transition-colors duration-500 group-hover:text-[#34A853]">
                  l
                </span>
                <span className="text-neutral-600 transition-colors duration-500 group-hover:text-[#EA4335]">
                  e
                </span>
              </div>

              {/* Search Bar Mock */}
              <div className="w-[80%] h-8 bg-[#303134] rounded-full flex items-center px-4 mb-6 border border-[#5f6368]/30">
                <Search size={12} className="text-[#9aa0a6]" />
              </div>

              {/* SERP Results - Left Side Content */}
              <div className="flex flex-col gap-6 w-[80%]">
                {/* Result 1 */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-4 h-4 rounded-full bg-[#303134]"></div>
                    <div className="flex flex-col gap-1">
                      <div className="w-16 h-1 bg-[#bdc1c6] rounded-full opacity-50"></div>
                    </div>
                  </div>
                  <div className="w-full h-3 bg-[#8ab4f8] rounded-sm opacity-60"></div>
                  <div className="w-[90%] h-1.5 bg-[#bdc1c6] rounded-full opacity-30"></div>
                  <div className="w-[70%] h-1.5 bg-[#bdc1c6] rounded-full opacity-30"></div>
                </div>

                {/* Result 2 */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-4 h-4 rounded-full bg-[#303134]"></div>
                    <div className="flex flex-col gap-1">
                      <div className="w-20 h-1 bg-[#bdc1c6] rounded-full opacity-50"></div>
                    </div>
                  </div>
                  <div className="w-[90%] h-3 bg-[#8ab4f8] rounded-sm opacity-60"></div>
                  <div className="w-full h-1.5 bg-[#bdc1c6] rounded-full opacity-30"></div>
                </div>
              </div>
            </div>
          </DeepDarkWindow>

          {/* Deep Dark Window - 60% Width, Rotated */}
          <DeepDarkWindow className="relative w-[60%] h-[120%] shadow-2xl transition-transform duration-500 group-hover:scale-105 z-10">
            <div className="w-full h-full bg-[#1e1e1e] flex flex-col p-4 font-sans relative overflow-hidden">
              {/* GSC-style Input Bar */}
              <div className="w-[60%] mx-auto bg-[#303134] rounded-lg p-3 flex items-center gap-3 shadow-md mb-6 border border-white/5 relative z-10">
                <Search size={16} className="text-[#9aa0a6]" />
                <div className="flex-1 flex items-center relative overflow-hidden">
                  <span className="text-[#e8eaed] text-sm font-medium">
                    sklep internetowy
                  </span>
                  <div className="w-0.5 h-4 bg-[#8ab4f8] ml-0.5 animate-pulse"></div>
                </div>
                {/* Close/Clear Icon */}
                <div className="w-4 h-4 rounded-full border border-[#5f6368] flex items-center justify-center">
                  <span className="text-[8px] text-[#5f6368] font-bold">✕</span>
                </div>
              </div>

              {/* GSC-style Content/Graph Placeholder */}
              <div className="flex-1 mx-auto flex flex-col gap-3 opacity-50 blur-[0.5px]">
                {/* Tabs */}
                <div className="flex gap-4 border-b border-[#3c4043] pb-2">
                  <div className="w-16 h-2 bg-[#8ab4f8] rounded-full"></div>
                  <div className="w-16 h-2 bg-[#3c4043] rounded-full"></div>
                  <div className="w-16 h-2 bg-[#3c4043] rounded-full"></div>
                </div>
                {/* Big Stats */}
                <div className="flex gap-8 mt-2">
                  <div className="flex flex-col gap-1">
                    <div className="w-8 h-2 bg-[#3c4043] rounded-full"></div>
                    <div className="w-16 h-6 bg-[#3c4043] rounded"></div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="w-8 h-2 bg-[#3c4043] rounded-full"></div>
                    <div className="w-16 h-6 bg-[#3c4043] rounded"></div>
                  </div>
                </div>
                {/* Graph Area */}
                <div className="flex-1 bg-linear-to-b from-[#8ab4f8]/10 to-transparent border-t border-[#8ab4f8]/30 mt-2 rounded relative">
                  <div className="absolute bottom-0 left-0 right-0 h-[100px] w-full">
                    <svg
                      className="w-full h-full text-[#8ab4f8]"
                      viewBox="0 0 100 50"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0,50 L5,45 L10,48 L15,35 L20,38 L25,20 L30,25 L35,15 L40,18 L45,10 L50,12 L55,5 L60,8 L65,3 L100,20 L100,50 Z"
                        fill="currentColor"
                        fillOpacity="0.2"
                      />
                      <path
                        d="M0,50 L5,45 L10,48 L15,35 L20,38 L25,20 L30,25 L35,15 L40,18 L45,10 L50,12 L55,5 L60,8 L65,3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        vectorEffect="non-scaling-stroke"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </DeepDarkWindow>
        </div>
      </div>
    </GlassBentoCard>
  );
};
