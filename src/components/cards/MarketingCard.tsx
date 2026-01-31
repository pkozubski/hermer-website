import React from "react";
import { BarChart3, TrendingUp } from "lucide-react";
import { CardFrame } from "./ui/CardFrame";

export const MarketingCard: React.FC = () => {
  return (
    <CardFrame title="Statystyki" type="window">
      <div className="flex flex-col h-full bg-neutral-900 p-4 relative group">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />

        {/* Header - Total Reach */}
        <div className="flex items-center justify-between mb-4 relative z-10">
          <div>
            <div className="text-[10px] text-neutral-400 font-medium uppercase tracking-wider mb-0.5">
              Zasięg całkowity
            </div>
            <div className="text-2xl font-bold text-white flex items-center gap-2">
              124.5K
              <span className="text-[10px] bg-[#916AFF]/20 text-[#916AFF] px-1.5 py-0.5 rounded-full flex items-center gap-0.5 font-bold">
                <TrendingUp size={8} /> +12%
              </span>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-neutral-800 border border-white/5 flex items-center justify-center text-[#916AFF] shadow-sm">
            <BarChart3 size={16} />
          </div>
        </div>

        {/* Chart Visualization */}
        <div className="flex-1 relative flex items-end gap-1.5 pb-2 z-10 px-1">
          {[35, 55, 45, 60, 50, 75, 65, 85, 70, 90, 80, 100].map(
            (height, i) => (
              <div
                key={i}
                className={`flex-1 rounded-t-sm relative transition-all duration-300 ${
                  i === 11
                    ? "bg-[#916AFF] shadow-[0_0_15px_rgba(145,106,255,0.4)]"
                    : "bg-neutral-800 group-hover:bg-neutral-700"
                }`}
                style={{ height: `${height}%` }}
              >
                {/* Highlight Effect on Hover */}
                <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity" />
              </div>
            )
          )}
        </div>

        {/* Decorative Lines */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 pointer-events-none" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-white/5 pointer-events-none" />
      </div>
    </CardFrame>
  );
};
