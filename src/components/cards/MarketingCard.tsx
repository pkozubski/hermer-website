import React from "react";
import { CardFrame } from "./ui/CardFrame";

export const MarketingCard: React.FC = () => {
  // Data for bar chart (Campaigns)
  const data = [40, 75, 55, 90, 65, 85, 45];

  return (
    <CardFrame title="Analytics" type="window">
      <div className="flex flex-col h-full bg-neutral-900 relative p-6">
        {/* Header Stats */}
        <div className="flex justify-between items-end mb-8 relative z-10">
          <div>
            <div className="text-[9px] text-neutral-400 font-sans font-medium uppercase tracking-widest mb-1">
              Wizyty
            </div>
            <div className="text-3xl font-display font-bold text-white leading-none tracking-tight">
              24.5k
            </div>
          </div>
          <div className="text-right">
            <div className="text-[9px] text-neutral-400 font-sans font-medium uppercase tracking-widest mb-1">
              Wzrost
            </div>
            <div className="text-xl font-display font-bold text-emerald-400 leading-none">
              +12%
            </div>
          </div>
        </div>

        {/* Bar Chart Container */}
        <div className="flex-1 flex items-end justify-between gap-3 px-2 pb-2">
          {data.map((height, index) => (
            <div
              key={index}
              className="relative w-full flex flex-col justify-end group cursor-pointer"
              style={{ height: "100%" }}
            >
              {/* Bar Value Tooltip on Hover */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-neutral-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mb-2 z-20 whitespace-nowrap">
                {height}%
              </div>

              {/* Bar Fill */}
              <div
                className="relative w-2 mx-auto bg-neutral-800 group-hover:bg-[#916AFF] rounded-full transition-all duration-300 group-hover:scale-y-105 origin-bottom"
                style={{ height: `${height}%` }}
              ></div>
            </div>
          ))}
        </div>

        {/* X Axis Labels */}
        <div className="flex justify-between px-2 mt-4 border-t border-white/5 pt-2">
          {["Pn", "Wt", "Śr", "Cz", "Pt", "Sb", "Nd"].map((day, i) => (
            <div
              key={i}
              className="text-[9px] text-neutral-500 font-medium w-full text-center group-hover:text-neutral-300 transition-colors"
            >
              {day}
            </div>
          ))}
        </div>
      </div>
    </CardFrame>
  );
};
