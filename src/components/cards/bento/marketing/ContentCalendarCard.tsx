import React from "react";
import { Calendar, MoreHorizontal, Clock, CheckCircle2 } from "lucide-react";
import { GlassBentoCard } from "../GlassBentoCard";
import { DeepDarkWindow } from "../visuals/DeepDarkWindow";

export const ContentCalendarCard = ({
  className = "",
}: {
  className?: string;
}) => {
  return (
    <GlassBentoCard
      title="Planer Treści"
      description="Regularność to klucz. Planujemy komunikację, która buduje zaangażowanie i autorytet."
      icon={Calendar}
      className={className}
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center pt-8">
        {/* Deep Dark Window Calendar Dashboard */}
        <DeepDarkWindow className="w-[90%] h-[350px] shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
          <div className="w-full h-full bg-neutral-900/50 flex flex-col p-6 font-sans">
            {/* Header */}
            <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
              <div className="flex items-center gap-2">
                <div className="text-xs font-medium text-neutral-400">
                  Harmonogram: Maj 2024
                </div>
              </div>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
              </div>
            </div>

            {/* Calendar List */}
            <div className="space-y-3">
              {/* Item 1 - Published */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 group/item hover:bg-white/10 transition-colors">
                <div className="flex flex-col items-center justify-center w-10 h-10 rounded-lg bg-[#0077B5]/20 text-[#0077B5] border border-[#0077B5]/20 font-bold text-[10px]">
                  <span>12</span>
                  <span className="text-[8px] opacity-70">MAJ</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#0077B5]/20 text-[#0077B5] font-bold">
                      LINKEDIN
                    </span>
                    <span className="text-[9px] text-green-500 flex items-center gap-0.5">
                      <CheckCircle2 size={8} /> Opublikowane
                    </span>
                  </div>
                  <div className="text-xs text-neutral-200 font-medium">
                    B2B Marketing Trends 2024
                  </div>
                </div>
                <MoreHorizontal size={14} className="text-neutral-600" />
              </div>

              {/* Item 2 - Scheduled */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 group/item hover:bg-white/10 transition-colors">
                <div className="flex flex-col items-center justify-center w-10 h-10 rounded-lg bg-[#E1306C]/20 text-[#E1306C] border border-[#E1306C]/20 font-bold text-[10px]">
                  <span>14</span>
                  <span className="text-[8px] opacity-70">MAJ</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#E1306C]/20 text-[#E1306C] font-bold">
                      INSTAGRAM
                    </span>
                    <span className="text-[9px] text-yellow-500 flex items-center gap-0.5">
                      <Clock size={8} /> Zaplanowane 18:00
                    </span>
                  </div>
                  <div className="text-xs text-neutral-200 font-medium">
                    Reels: Backstage sesji
                  </div>
                </div>
                <MoreHorizontal size={14} className="text-neutral-600" />
              </div>

              {/* Item 3 - Draft */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 group/item hover:bg-white/10 transition-colors opacity-60 hover:opacity-100">
                <div className="flex flex-col items-center justify-center w-10 h-10 rounded-lg bg-neutral-700/50 text-neutral-400 border border-neutral-600/20 font-bold text-[10px]">
                  <span>16</span>
                  <span className="text-[8px] opacity-70">MAJ</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-neutral-700 text-neutral-400 font-bold">
                      BLOG
                    </span>
                    <span className="text-[9px] text-neutral-500 flex items-center gap-0.5">
                      Szkic
                    </span>
                  </div>
                  <div className="text-xs text-neutral-300 font-medium">
                    Case Study: Wdrożenie
                  </div>
                </div>
                <MoreHorizontal size={14} className="text-neutral-600" />
              </div>
            </div>
          </div>
        </DeepDarkWindow>
      </div>
    </GlassBentoCard>
  );
};
