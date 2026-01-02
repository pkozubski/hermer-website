import React from "react";
import { LucideIcon } from "lucide-react";

interface LiquidCardProps {
  theme?: string;
  title: string;
  icon: LucideIcon;
  content: React.ReactNode;
}

export const LiquidCard: React.FC<LiquidCardProps> = ({
  title,
  icon: Icon,
  content,
}) => {
  return (
    <div className="w-full mb-8 px-4 perspective-1000">
      <div className="group relative transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/40">
        {/* Main Container - Border slate-50 instead of strict borders, removed ring */}
        <div className="relative bg-white border border-slate-50 overflow-hidden rounded-2xl">
          {/* Background Effects - Softer Accent */}
          <div className="absolute inset-0 z-0">
            {/* Very Subtle Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#916AFF]/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Lighter Dot Pattern */}
            <div className="absolute inset-0 opacity-[0.2] bg-[radial-gradient(#916AFF_0.5px,transparent_0.5px)] [background-size:16px_16px] [mask-image:linear-gradient(to_bottom,transparent_0%,white_100%)]"></div>
          </div>

          {/* Hover Border Gradient - Thinner */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#916AFF] to-transparent transform scale-x-0 group-hover:scale-x-75 transition-transform duration-700 origin-center z-20 opacity-80"></div>

          <div className="relative p-6 z-10">
            {/* Header - Cleaner, Elegant Design */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-50 group-hover:border-[#916AFF]/10 transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-50 rounded-full group-hover:bg-[#916AFF]/10 transition-colors duration-300 text-slate-400 group-hover:text-[#916AFF]">
                  <Icon size={16} strokeWidth={2} />
                </div>
                <span className="text-sm font-sans font-medium text-slate-600 group-hover:text-[#1A1A1A] transition-colors tracking-wide">
                  {title}
                </span>
              </div>
            </div>

            {/* Content Container */}
            <div className="relative w-full transition-all duration-300">
              {content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
