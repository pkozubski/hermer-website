import React from "react";
import { BarChart4, ArrowUpRight, Target, Coins } from "lucide-react";
import { GlassBentoCard } from "../GlassBentoCard";
import { DeepDarkWindow } from "../visuals/DeepDarkWindow";

export const GrowthFunnelCard = ({
  className = "",
}: {
  className?: string;
}) => {
  return (
    <GlassBentoCard
      title="Lejek Sprzedażowy"
      description="Budujemy kompletny ekosystem. Od pierwszego kliknięcia do lojalnego klienta."
      icon={BarChart4}
      contentAlign="right"
      className={className}
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center pt-8">
        {/* Deep Dark Window Funnel Dashboard */}
        <DeepDarkWindow className="w-[90%] h-[350px] shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
          <div className="w-full h-full bg-neutral-900/50 flex flex-col p-6 font-sans">
            {/* Header */}
            <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
              <div className="flex items-center gap-2">
                <div className="text-xs font-medium text-neutral-400">
                  Efektywność (ROAS)
                </div>
              </div>
              <div className="px-2 py-1 rounded bg-white/5 border border-white/5 text-[9px] text-neutral-400">
                YTD
              </div>
            </div>

            {/* Funnel Visual */}
            <div className="flex flex-col gap-4 flex-1 justify-center max-w-[80%] mx-auto w-full">
              {/* Step 1: Spend */}
              <div className="flex items-center gap-4">
                <div className="w-20 text-[10px] text-neutral-500 text-right">
                  Wydatki
                </div>
                <div className="flex-1 h-8 bg-neutral-800 rounded-lg relative overflow-hidden">
                  <div className="absolute top-0 left-0 bottom-0 bg-neutral-700 w-[35%] rounded-lg"></div>
                </div>
                <div className="w-12 text-xs font-bold text-neutral-400">
                  12k
                </div>
              </div>

              {/* Funnel Connector */}
              <div className="flex pl-[100px] h-8 relative">
                <div className="w-0.5 h-full bg-neutral-800 ml-4"></div>
                <div className="absolute top-1/2 left-[50px] -translate-y-1/2 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.4)]">
                  x4.2
                </div>
              </div>

              {/* Step 2: Revenue */}
              <div className="flex items-center gap-4">
                <div className="w-20 text-[10px] text-white font-bold text-right">
                  Przychód
                </div>
                <div className="flex-1 h-8 bg-neutral-800 rounded-lg relative overflow-hidden">
                  <div className="absolute top-0 left-0 bottom-0 bg-green-500 w-[85%] rounded-lg shadow-[0_0_20px_rgba(34,197,94,0.3)]"></div>
                </div>
                <div className="w-12 text-xs font-bold text-green-500">
                  50.4k
                </div>
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/5">
              <div className="flex flex-col items-center">
                <div className="text-[9px] text-neutral-500 uppercase mb-1">
                  Conv. Rate
                </div>
                <div className="text-sm font-bold text-white">2.8%</div>
              </div>
              <div className="flex flex-col items-center border-l border-white/5">
                <div className="text-[9px] text-neutral-500 uppercase mb-1">
                  CPC
                </div>
                <div className="text-sm font-bold text-white">1.20 zł</div>
              </div>
              <div className="flex flex-col items-center border-l border-white/5">
                <div className="text-[9px] text-neutral-500 uppercase mb-1">
                  ROI
                </div>
                <div className="text-sm font-bold text-green-500">320%</div>
              </div>
            </div>
          </div>
        </DeepDarkWindow>
      </div>
    </GlassBentoCard>
  );
};
