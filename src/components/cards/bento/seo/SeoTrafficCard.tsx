import React from "react";
import { BarChart2, MousePointerClick, Eye } from "lucide-react";
import { GlassBentoCard } from "../GlassBentoCard";
import { DeepDarkWindow } from "../visuals/DeepDarkWindow";

export const SeoTrafficCard = ({ className = "" }: { className?: string }) => {
  return (
    <GlassBentoCard
      title="Analiza Ruchu"
      description="Dane, nie domysły. Śledzimy każde kliknięcie i optymalizujemy konwersję."
      icon={BarChart2}
      className={className}
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center pt-8">
        {/* Deep Dark Window Traffic Dashboard */}
        <DeepDarkWindow className="w-[90%] h-[350px] shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
          <div className="w-full h-full bg-neutral-900/50 flex flex-col p-6 font-sans">
            {/* Header */}
            <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
              <div className="flex items-center gap-2">
                <div className="text-xs font-medium text-neutral-400">
                  Efektywność
                </div>
              </div>
              <div className="px-2 py-1 rounded bg-white/5 border border-white/5 text-[9px] text-neutral-400">
                Ostatnie 30 dni
              </div>
            </div>

            {/* Main Metric */}
            <div className="flex flex-col mb-6">
              <span className="text-[10px] text-neutral-500 mb-1">
                Wyświetlenia (Impressions)
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-white">128.4k</span>
                <span className="text-xs text-green-500 font-bold">+16%</span>
              </div>
            </div>

            {/* Chart Area */}
            <div className="flex items-end gap-1 flex-1 pb-2 border-b border-white/5">
              {[30, 45, 35, 50, 60, 55, 70, 65, 80, 75, 90, 85, 100].map(
                (h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h}%` }}
                    className={`flex-1 rounded-t-sm ${i > 8 ? "bg-blue-500" : "bg-blue-500/20"} hover:bg-blue-400 transition-colors cursor-pointer relative group/bar`}
                  >
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-neutral-800 text-white text-[8px] px-1.5 py-0.5 rounded opacity-0 group-hover/bar:opacity-100 whitespace-nowrap z-10">
                      {22 + i} Lis
                    </div>
                  </div>
                ),
              )}
            </div>

            {/* Footer Logic */}
            <div className="flex justify-between mt-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-purple-500/10 flex items-center justify-center text-purple-500">
                  <MousePointerClick size={12} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[8px] text-neutral-500">
                    Kliknięcia
                  </span>
                  <span className="text-xs font-bold text-white">4.2k</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-orange-500/10 flex items-center justify-center text-orange-500">
                  <Eye size={12} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[8px] text-neutral-500">CTR</span>
                  <span className="text-xs font-bold text-white">3.2%</span>
                </div>
              </div>
            </div>
          </div>
        </DeepDarkWindow>
      </div>
    </GlassBentoCard>
  );
};
