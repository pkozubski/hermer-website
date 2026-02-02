import React from "react";
import { Smartphone } from "lucide-react";
import { GlassBentoCard } from "../GlassBentoCard";
import { DeepDarkPhone } from "../visuals/DeepDarkPhone";

export const MobileFirstCard = ({ className = "" }: { className?: string }) => {
  return (
    <GlassBentoCard
      title="Mobile First"
      description="Projektujemy z myślą o urządzeniach mobilnych. Twoja strona będzie wyglądać idealnie na każdym ekranie."
      icon={Smartphone}
      className={className}
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center pt-8">
        {/* Deep Dark Phone Frame */}
        <DeepDarkPhone className="w-[180px] h-[350px] shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
          <div className="p-4 space-y-3 pt-12">
            <div className="w-1/2 h-3 bg-linear-to-r from-blue-500/50 to-transparent rounded-full animate-pulse mb-4"></div>
            <div className="w-full h-24 bg-white/5 rounded-lg border border-white/5 relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent"></div>
            </div>
            <div className="space-y-2">
              <div className="h-2 w-full bg-linear-to-r from-white/20 to-transparent rounded-full"></div>
              <div className="h-2 w-5/6 bg-linear-to-r from-white/20 to-transparent rounded-full"></div>
              <div className="h-2 w-4/6 bg-linear-to-r from-white/20 to-transparent rounded-full"></div>
            </div>
            <div className="flex gap-2 pt-2">
              <div className="w-1/2 h-20 bg-white/5 rounded-lg border border-white/5"></div>
              <div className="w-1/2 h-20 bg-white/5 rounded-lg border border-white/5"></div>
            </div>
          </div>
        </DeepDarkPhone>
      </div>
    </GlassBentoCard>
  );
};
