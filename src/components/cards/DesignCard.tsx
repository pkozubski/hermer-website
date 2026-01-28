import React from "react";
import { MousePointer2, Square, Type, Image as ImageIcon } from "lucide-react";
import { CardFrame } from "./ui/CardFrame";

export const DesignCard: React.FC = () => {
  return (
    <CardFrame title="Projekt.fig" type="window">
      <div className="w-full h-full bg-[radial-gradient(#333333_1px,transparent_1px)] [background-size:16px_16px] relative group bg-neutral-900">
        {/* Toolbar Overlay */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-neutral-800 border border-white/10 px-3 py-1.5 flex gap-4 text-neutral-400 shadow-sm rounded-full">
          <MousePointer2 size={12} className="text-[#916AFF]" />
          <Square
            size={12}
            className="hover:text-[#916AFF] transition-colors"
          />
          <Type size={12} className="hover:text-[#916AFF] transition-colors" />
          <ImageIcon
            size={12}
            className="hover:text-[#916AFF] transition-colors"
          />
        </div>

        {/* Canvas Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Design Element */}
          <div className="relative w-32 h-20 bg-neutral-800 border border-white/10 p-2 flex flex-col gap-1.5 transition-transform duration-500 group-hover:scale-105 group-hover:border-[#916AFF] group-hover:shadow-[0_0_20px_-5px_rgba(145,106,255,0.3)]">
            {/* Element Guides (Visible on Hover in Accent) */}
            <div className="absolute -top-4 left-0 text-[9px] text-[#916AFF] font-mono opacity-0 group-hover:opacity-100 transition-opacity bg-[#916AFF]/10 px-1 rounded">
              128px
            </div>

            {/* Content */}
            <div className="w-1/2 h-2 bg-neutral-700"></div>
            <div className="flex-1 bg-neutral-900/50 border border-dashed border-neutral-700 group-hover:border-[#916AFF]/30"></div>
            <div className="w-full h-5 bg-[#916AFF] rounded-full flex items-center justify-center text-[8px] text-white font-sans font-medium tracking-wide shadow-lg shadow-[#916AFF]/30">
              Przycisk
            </div>

            {/* Selection Border - Accent */}
            <div className="absolute inset-[-2px] border pb-0.5 border-[#916AFF] hidden group-hover:block pointer-events-none">
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-neutral-800 border border-[#916AFF]"></div>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-neutral-800 border border-[#916AFF]"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-neutral-800 border border-[#916AFF]"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-neutral-800 border border-[#916AFF]"></div>
            </div>
          </div>
        </div>

        {/* Cursor - Accent */}
        <div className="absolute top-1/2 left-1/2 transform translate-x-12 translate-y-12 transition-transform duration-700 ease-out group-hover:translate-x-6 group-hover:translate-y-4">
          <MousePointer2
            size={18}
            className="text-[#916AFF] fill-[#916AFF] stroke-white drop-shadow-md"
          />
        </div>
      </div>
    </CardFrame>
  );
};
