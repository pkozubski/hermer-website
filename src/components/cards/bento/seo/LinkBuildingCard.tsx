import React from "react";
import { Link2, Globe, ShieldCheck, ExternalLink } from "lucide-react";
import { GlassBentoCard } from "../GlassBentoCard";
import { DeepDarkWindow } from "../visuals/DeepDarkWindow";

export const LinkBuildingCard = ({
  className = "",
}: {
  className?: string;
}) => {
  return (
    <GlassBentoCard
      title="Link Building"
      description="Budujemy autorytet domeny. Pozyskujemy wartościowe linki z zaufanych źródeł."
      icon={Link2}
      contentAlign="right"
      className={className}
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center pt-8">
        {/* Deep Dark Window Backlink Manager */}
        <DeepDarkWindow className="w-[90%] h-[350px] shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
          <div className="w-full h-full bg-neutral-900/50 flex flex-col p-6 font-sans">
            {/* Header */}
            <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
              <div className="flex items-center gap-2">
                <div className="text-xs font-medium text-neutral-400">
                  Profil Linków
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex flex-col items-end">
                  <span className="text-[8px] text-neutral-500 uppercase">
                    Domain Rating
                  </span>
                  <span className="text-xs font-bold text-white">DR 54</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center">
                  <Globe size={14} className="text-blue-500" />
                </div>
              </div>
            </div>

            {/* Link List */}
            <div className="flex flex-col gap-3">
              {/* Item 1 */}
              <div className="flex items-center p-3 rounded-xl bg-white/5 border border-white/5 group/item hover:bg-white/10 transition-colors">
                <div className="w-8 h-8 rounded bg-orange-500/10 flex items-center justify-center text-orange-500 border border-orange-500/20 text-xs font-bold">
                  F
                </div>
                <div className="flex-1 ml-3 flex flex-col">
                  <span className="text-xs font-bold text-white flex items-center gap-1">
                    forbes.pl{" "}
                    <ShieldCheck size={10} className="text-green-500" />
                  </span>
                  <span className="text-[9px] text-neutral-500">
                    Artykuł ekspercki • DR 78
                  </span>
                </div>
                <div className="text-[9px] text-green-500 font-bold bg-green-500/10 px-1.5 py-0.5 rounded">
                  FOLLOW
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-center p-3 rounded-xl bg-white/5 border border-white/5 group/item hover:bg-white/10 transition-colors">
                <div className="w-8 h-8 rounded bg-blue-500/10 flex items-center justify-center text-blue-500 border border-blue-500/20 text-xs font-bold">
                  B
                </div>
                <div className="flex-1 ml-3 flex flex-col">
                  <span className="text-xs font-bold text-white flex items-center gap-1">
                    businessinsider.com
                  </span>
                  <span className="text-[9px] text-neutral-500">
                    Wzmianka marki • DR 85
                  </span>
                </div>
                <div className="text-[9px] text-green-500 font-bold bg-green-500/10 px-1.5 py-0.5 rounded">
                  FOLLOW
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-center p-3 rounded-xl bg-white/5 border border-white/5 group/item hover:bg-white/10 transition-colors opacity-70">
                <div className="w-8 h-8 rounded bg-purple-500/10 flex items-center justify-center text-purple-500 border border-purple-500/20 text-xs font-bold">
                  M
                </div>
                <div className="flex-1 ml-3 flex flex-col">
                  <span className="text-xs font-bold text-white flex items-center gap-1">
                    marketingowy.pl
                  </span>
                  <span className="text-[9px] text-neutral-500">
                    Gościnny wpis • DR 45
                  </span>
                </div>
                <div className="text-[9px] text-neutral-500 font-bold bg-white/5 px-1.5 py-0.5 rounded">
                  PENDING
                </div>
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="mt-auto pt-4 flex gap-4 border-t border-white/5">
              <div className="flex flex-col">
                <span className="text-[9px] text-neutral-500">
                  Nowe linki (30 dni)
                </span>
                <span className="text-sm font-bold text-green-500">+12</span>
              </div>
              <div className="flex flex-col pl-4 border-l border-white/5">
                <span className="text-[9px] text-neutral-500">
                  Odsyłające domeny
                </span>
                <span className="text-sm font-bold text-white">143</span>
              </div>
            </div>
          </div>
        </DeepDarkWindow>
      </div>
    </GlassBentoCard>
  );
};
