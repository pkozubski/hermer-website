import React from "react";
import { Search, Trophy } from "lucide-react";
import { CardFrame } from "./ui/CardFrame";

export const SeoCard: React.FC = () => {
  return (
    <CardFrame title="Wyszukiwarka Google" type="browser">
      <div className="flex flex-col h-full bg-neutral-900">
        {/* Search Bar */}
        <div className="p-3 border-b border-white/5">
          <div className="bg-neutral-800 border border-white/5 rounded-full px-3 py-1.5 flex items-center gap-2 shadow-inner group transition-colors focus-within:bg-neutral-700 focus-within:ring-1 focus-within:ring-[#916AFF]">
            <Search
              size={10}
              className="text-neutral-500 group-focus-within:text-[#916AFF]"
            />
            <div className="text-[9px] text-neutral-400 font-medium">
              pozycjonowanie stron
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="flex-1 p-3 space-y-2 relative">
          {/* #1 Result - Accent Highlight */}
          <div className="bg-neutral-800/80 border border-[#916AFF]/20 flex gap-3 p-2 shadow-lg shadow-[#916AFF]/5 rounded-lg relative overflow-hidden group hover:border-[#916AFF]/50 transition-colors">
            {/* Highlight Bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#916AFF]"></div>

            <div className="mt-0.5 shrink-0 pl-1">
              <div className="w-5 h-5 bg-[#916AFF] text-white rounded-full flex items-center justify-center text-[9px] font-bold shadow-md shadow-[#916AFF]/30">
                1
              </div>
            </div>
            <div className="flex-1">
              <div className="h-2 w-32 bg-[#916AFF]/10 rounded mb-1.5"></div>
              <div className="h-1.5 w-full bg-neutral-700 rounded mb-1"></div>
              <div className="h-1.5 w-2/3 bg-neutral-700 rounded"></div>
            </div>
            <div className="absolute right-2 top-2 text-[#916AFF] opacity-0 group-hover:opacity-100 transition-opacity">
              <Trophy size={14} className="fill-[#916AFF]/20" />
            </div>
          </div>

          {/* #2 Result - Faded */}
          <div className="bg-neutral-800/30 border border-white/5 rounded-lg flex gap-3 p-2 opacity-50 grayscale">
            <div className="mt-0.5 shrink-0">
              <div className="w-5 h-5 bg-neutral-700 text-neutral-500 rounded-full flex items-center justify-center text-[9px] font-bold">
                2
              </div>
            </div>
            <div className="flex-1">
              <div className="h-2 w-24 bg-neutral-700 rounded mb-1.5"></div>
              <div className="h-1.5 w-full bg-neutral-800 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </CardFrame>
  );
};
