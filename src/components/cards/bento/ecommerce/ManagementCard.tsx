import React from "react";
import { LayoutDashboard, TrendingUp, Users, Package } from "lucide-react";
import { GlassBentoCard } from "../GlassBentoCard";
import { DeepDarkWindow } from "../visuals/DeepDarkWindow";

interface ManagementCardProps {
  className?: string;
  contentAlign?: "left" | "right";
}

export const ManagementCard = ({
  className = "",
  contentAlign = "left",
}: ManagementCardProps) => {
  return (
    <GlassBentoCard
      title="Analityka i Zamówienia"
      description="Pełna kontrola nad sklepem. Śledź sprzedaż, zarządzaj zamówieniami i magazynem w jednym intuicyjnym panelu."
      icon={LayoutDashboard}
      className={className}
      contentAlign={contentAlign}
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center pt-8">
        {/* Deep Dark Window Dashboard */}
        <DeepDarkWindow className="w-[90%] h-[350px] shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
          <div className="w-full h-full bg-neutral-900/50 flex flex-col p-6 font-sans">
            {/* Dashboard Header */}
            <div className="flex justify-between items-center mb-6">
              <div className="text-xs text-neutral-400 font-medium">
                Panel Sprzedawcy
              </div>
              <div className="flex gap-2">
                <div className="w-6 h-6 rounded-full bg-white/5 border border-white/5"></div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="p-3 bg-white/5 border border-white/5 rounded-xl">
                <div className="text-[9px] text-neutral-500 mb-1 flex items-center gap-1">
                  <TrendingUp size={8} /> Przychód
                </div>
                <div className="text-lg font-bold text-white">12.4k</div>
                <div className="text-[8px] text-green-500">+12%</div>
              </div>
              <div className="p-3 bg-white/5 border border-white/5 rounded-xl">
                <div className="text-[9px] text-neutral-500 mb-1 flex items-center gap-1">
                  <Package size={8} /> Zamówienia
                </div>
                <div className="text-lg font-bold text-white">156</div>
                <div className="text-[8px] text-green-500">+5%</div>
              </div>
              <div className="p-3 bg-white/5 border border-white/5 rounded-xl hidden sm:block">
                <div className="text-[9px] text-neutral-500 mb-1 flex items-center gap-1">
                  <Users size={8} /> Klienci
                </div>
                <div className="text-lg font-bold text-white">2.1k</div>
                <div className="text-[8px] text-neutral-400">0%</div>
              </div>
            </div>

            {/* Chart Area */}
            <div className="flex-1 bg-white/5 border border-white/5 rounded-xl p-3 relative overflow-hidden flex flex-col justify-end gap-1">
              <div className="absolute top-3 left-3 text-[9px] text-neutral-500">
                Sprzedaż (Ostatnie 30 dni)
              </div>
              {/* Fake Chart Bars */}
              <div className="flex items-end justify-between h-20 gap-1 mt-4">
                {[
                  30, 45, 35, 60, 50, 75, 65, 90, 80, 55, 70, 40, 60, 85, 95,
                ].map((h, i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-sm transition-all duration-500 group-hover:bg-purple-500/60 ${i > 10 ? "bg-purple-500/40" : "bg-white/10"}`}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              {/* Gradient Overlay */}
              <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-neutral-900/40 to-transparent"></div>
            </div>
          </div>
        </DeepDarkWindow>
      </div>
    </GlassBentoCard>
  );
};
