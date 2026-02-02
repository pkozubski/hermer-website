import React from "react";
import { Zap } from "lucide-react";
import { GlassBentoCard } from "../GlassBentoCard";
import { DeepDarkWindow } from "../visuals/DeepDarkWindow";

export const SpeedCard = ({ className = "" }: { className?: string }) => {
  return (
    <GlassBentoCard
      title="Bezkompromisowa szybkość"
      description="Optymalizujemy każdy kilobajt. Nasze strony osiągają wyniki 90+ w Google PageSpeed Insights, co przekłada się na lepsze SEO i niższy współczynnik odrzuceń."
      icon={Zap}
      className={className}
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center pt-8">
        {/* Deep Dark Window Performance Dashboard */}
        <DeepDarkWindow className="left-30 w-[85%] h-[320px] shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
          <div className="w-full h-full bg-neutral-900/50 flex flex-col p-6 items-center justify-between">
            {/* PSI Score Circle */}
            <div className="relative w-32 h-32 flex items-center justify-center">
              {/* Background Ring */}
              <svg className="w-full h-full transform -rotate-90 overflow-visible">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  className="text-neutral-800"
                />
                {/* Progress Ring (Green) */}
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="#22c55e"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray="351.86"
                  strokeDashoffset="10"
                  strokeLinecap="round"
                  className="text-green-500 drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold text-white">99</span>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="w-full grid grid-cols-3 gap-2 mt-4">
              {/* LCP */}
              <div className="flex flex-col items-center gap-1">
                <div className="w-8 h-1 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                <span className="text-[10px] text-neutral-400 font-medium tracking-wide">
                  LCP
                </span>
                <span className="text-xs text-white font-bold">0.8s</span>
              </div>
              {/* INP */}
              <div className="flex flex-col items-center gap-1">
                <div className="w-8 h-1 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                <span className="text-[10px] text-neutral-400 font-medium tracking-wide">
                  INP
                </span>
                <span className="text-xs text-white font-bold">40ms</span>
              </div>
              {/* CLS */}
              <div className="flex flex-col items-center gap-1">
                <div className="w-8 h-1 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                <span className="text-[10px] text-neutral-400 font-medium tracking-wide">
                  CLS
                </span>
                <span className="text-xs text-white font-bold">0.01</span>
              </div>
            </div>

            {/* Desktop/Mobile Tabs Indicator */}
            <div className="flex gap-2 mt-2 bg-neutral-800/50 p-1 rounded-lg border border-white/5">
              <div className="px-3 py-1 rounded-md bg-neutral-700/50 border border-white/5">
                <div className="w-4 h-3 border-2 border-neutral-400 rounded-sm"></div>
              </div>
              <div className="px-3 py-1 rounded-md">
                <div className="w-2 h-3 border-2 border-neutral-600 rounded-sm"></div>
              </div>
            </div>
          </div>
        </DeepDarkWindow>
      </div>
    </GlassBentoCard>
  );
};
