import React from "react";
import { TrendingUp, Users, ArrowUpRight } from "lucide-react";
import { GlassBentoCard } from "../GlassBentoCard";
import { DeepDarkWindow } from "../visuals/DeepDarkWindow";

export const OrganicTrafficCard = ({
  className = "",
}: {
  className?: string;
}) => {
  return (
    <GlassBentoCard
      title="Ruch Organiczny"
      description="Stabilny wzrost widoczności. Pozycjonujemy Twoją markę tam, gdzie szukają jej klienci."
      icon={TrendingUp}
      className={className}
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center pt-8">
        {/* Deep Dark Window Analytics Dashboard */}
        <DeepDarkWindow className="w-[90%] h-[350px] shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
          <div className="w-full h-full bg-neutral-900/50 flex flex-col p-6 font-sans">
            {/* Header Mockup */}
            <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
              <div className="flex items-center gap-2">
                <div className="text-xs font-medium text-neutral-400">
                  Analityka Wyszukiwania
                </div>
              </div>
              <div className="px-2 py-1 rounded bg-white/5 border border-white/5 text-[9px] text-neutral-400">
                Ostatnie 30 dni
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex flex-col">
                <span className="text-[10px] text-neutral-500 mb-1">
                  Całkowity Ruch
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-white">42.5k</span>
                  <span className="text-[10px] text-green-500 flex items-center bg-green-500/10 px-1 rounded">
                    <ArrowUpRight size={8} className="mr-0.5" /> 24%
                  </span>
                </div>
              </div>
              <div className="flex flex-col pl-4 border-l border-white/5">
                <span className="text-[10px] text-neutral-500 mb-1">
                  Nowi Użytkownicy
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-white">18.2k</span>
                  <span className="text-[10px] text-green-500 flex items-center bg-green-500/10 px-1 rounded">
                    <ArrowUpRight size={8} className="mr-0.5" /> 16%
                  </span>
                </div>
              </div>
            </div>

            {/* Graph Area */}
            <div className="flex-1 relative w-full">
              {/* Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                <div className="w-full h-[1px] bg-white/5 border-t border-dashed border-white/10"></div>
                <div className="w-full h-[1px] bg-white/5 border-t border-dashed border-white/10"></div>
                <div className="w-full h-[1px] bg-white/5 border-t border-dashed border-white/10"></div>
                <div className="w-full h-[1px] bg-white/5 border-t border-dashed border-white/10"></div>
              </div>

              {/* Chart SVG */}
              <svg
                className="absolute inset-0 w-full h-full overflow-visible"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="gradientArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Area Path */}
                <path
                  d="M0,100 C20,90 40,95 60,80 C80,65 100,70 120,50 C140,40 160,45 180,30 C200,20 220,10 240,15 C260,20 280,15 300,5 L300,120 L0,120 Z"
                  fill="url(#gradientArea)"
                  className="text-blue-500"
                />
                {/* Line Path */}
                <path
                  d="M0,100 C20,90 40,95 60,80 C80,65 100,70 120,50 C140,40 160,45 180,30 C200,20 220,10 240,15 C260,20 280,15 300,5"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                />
                {/* Data Points */}
                <circle
                  cx="60"
                  cy="80"
                  r="2"
                  fill="#fff"
                  className="animate-pulse"
                />
                <circle
                  cx="120"
                  cy="50"
                  r="2"
                  fill="#fff"
                  className="animate-pulse delay-75"
                />
                <circle
                  cx="180"
                  cy="30"
                  r="2"
                  fill="#fff"
                  className="animate-pulse delay-150"
                />
                <circle
                  cx="300"
                  cy="5"
                  r="3"
                  fill="#fff"
                  className="animate-pulse delay-300 shadow-[0_0_10px_#fff]"
                />
              </svg>

              {/* Tooltip Mockup */}
              <div className="absolute top-0 right-10 bg-neutral-800 border border-white/10 p-2 rounded-lg shadow-xl translate-y-[-50%]">
                <div className="text-[9px] text-neutral-400 mb-0.5">
                  Śr, 12 Lis
                </div>
                <div className="text-xs font-bold text-white">2,453 wizyt</div>
              </div>
            </div>
          </div>
        </DeepDarkWindow>
      </div>
    </GlassBentoCard>
  );
};
