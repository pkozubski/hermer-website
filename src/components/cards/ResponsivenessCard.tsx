import React from "react";
import { Smartphone, Monitor, Tablet } from "lucide-react";
import { CardFrame } from "./ui/CardFrame";

export const ResponsivenessCard: React.FC = () => {
  return (
    <CardFrame title="Responsywność" type="window">
      <div className="relative w-full h-full flex flex-col items-center justify-center p-4 bg-white overflow-hidden">
        {/* Background Grid Accent */}
        <div
          className="absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage:
              "radial-gradient(#916AFF 0.5px, transparent 0.5px)",
            backgroundSize: "12px 12px",
          }}
        ></div>

        {/* Icons Header */}
        <div className="flex gap-4 mb-6 text-slate-300">
          <Monitor size={16} strokeWidth={1} className="text-[#916AFF]" />
          <Tablet size={16} strokeWidth={1} />
          <Smartphone size={16} strokeWidth={1} />
        </div>

        {/* Resizing Window Animation */}
        <div className="h-24 bg-white border border-slate-200 shadow-md relative overflow-hidden flex flex-col items-center justify-center animate-[resize-width_4s_ease-in-out_infinite] ring-1 ring-[#916AFF]/10">
          <div className="absolute top-0 h-4 w-full border-b border-slate-50 bg-slate-50 flex items-center px-1 gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#916AFF]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
          </div>

          {/* Content Skeleton */}
          <div className="w-full px-4 space-y-2 opacity-80 mt-2">
            <div className="h-1 w-1/2 bg-[#916AFF]/20 rounded-full mx-auto mb-2"></div>
            <div className="flex gap-1 justify-center">
              <div className="h-6 w-8 bg-slate-50 rounded border border-slate-100"></div>
              <div className="h-6 w-8 bg-slate-50 rounded border border-slate-100"></div>
              <div className="h-6 w-8 bg-[#916AFF] rounded border border-[#916AFF] opacity-80"></div>
            </div>
          </div>

          {/* Resize Handle - Accent */}
          <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#916AFF] flex items-center justify-center shadow-lg shadow-[#916AFF]/50">
            <div className="w-0.5 h-3 bg-white rounded-full opacity-50"></div>
          </div>
        </div>

        <style>{`
                    @keyframes resize-width {
                        0%, 100% { width: 140px; }
                        50% { width: 90px; }
                    }
                 `}</style>
      </div>
    </CardFrame>
  );
};
