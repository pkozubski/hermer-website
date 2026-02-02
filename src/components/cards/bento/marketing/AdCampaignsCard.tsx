import React from "react";
import {
  Megaphone,
  TrendingUp,
  MousePointerClick,
  BarChart3,
} from "lucide-react";
import { GlassBentoCard } from "../GlassBentoCard";
import { DeepDarkWindow } from "../visuals/DeepDarkWindow";

export const AdCampaignsCard = ({ className = "" }: { className?: string }) => {
  return (
    <GlassBentoCard
      title="Kampanie Ads"
      description="Skalujemy sprzedaż. Precyzyjne targetowanie i kreacje, które konwertują."
      icon={Megaphone}
      className={className}
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center pt-8">
        {/* Deep Dark Window Ad Manager */}
        <DeepDarkWindow className="w-[90%] h-[350px] shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
          <div className="w-full h-full bg-neutral-900/50 flex flex-col p-5 font-sans">
            {/* Header */}
            <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-3">
              <div className="flex items-center gap-2">
                <div className="text-xs font-medium text-neutral-400">
                  Menedżer Reklam
                </div>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20">
                <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[8px] font-bold text-green-500">
                  AKTYWNE
                </span>
              </div>
            </div>

            {/* Campaign Preview & Stats */}
            <div className="flex gap-4 h-full">
              {/* Left: Ad Preview (Mobile format) */}
              <div className="w-1/2 bg-neutral-950 rounded-xl border border-white/5 overflow-hidden flex flex-col relative group/preview">
                {/* Mock Social Post */}
                <div className="p-2 flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-orange-400 to-pink-600"></div>
                  <div className="flex flex-col">
                    <div className="text-[8px] font-bold text-white">
                      Twoja Marka
                    </div>
                    <div className="text-[6px] text-neutral-500">
                      Sponsorowane
                    </div>
                  </div>
                </div>
                {/* Ad Media */}
                <div className="flex-1 bg-neutral-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20"></div>
                  {/* Play Button Mock */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/20">
                      <div className="w-0 h-0 border-t-[3px] border-t-transparent border-l-[6px] border-l-white border-b-[3px] border-b-transparent ml-0.5"></div>
                    </div>
                  </div>
                </div>
                {/* Ad CTA */}
                <div className="p-2 bg-neutral-900 border-t border-white/5 flex justify-between items-center">
                  <span className="text-[7px] text-white font-medium">
                    Kup teraz
                  </span>
                  <span className="text-[6px] text-neutral-500">hermer.pl</span>
                </div>

                {/* Hover Overlay with Stats */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] opacity-0 group-hover/preview:opacity-100 transition-opacity flex flex-col justify-center items-center gap-2">
                  <div className="text-[10px] font-bold text-white">
                    Wynik Jakości
                  </div>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="w-1 h-3 bg-green-500 rounded-full"
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Performance Metrics */}
              <div className="w-1/2 flex flex-col gap-3">
                {/* Metric 1 */}
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-[8px] text-neutral-500">ROAS</span>
                    <BarChart3 size={10} className="text-purple-500" />
                  </div>
                  <div className="text-xl font-bold text-white">4.8x</div>
                  <div className="text-[8px] text-green-500">
                    +0.5 vs ost. mies.
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-[8px] text-neutral-500">
                      Konwersje
                    </span>
                    <TrendingUp size={10} className="text-blue-500" />
                  </div>
                  <div className="text-xl font-bold text-white">342</div>
                  <div className="text-[8px] text-green-500">+12% wzrostu</div>
                </div>

                {/* Metric 3 */}
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-[8px] text-neutral-500">CTR</span>
                    <MousePointerClick size={10} className="text-orange-500" />
                  </div>
                  <div className="text-xl font-bold text-white">3.2%</div>
                  <div className="text-[8px] text-neutral-400">
                    Powyżej średniej
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
