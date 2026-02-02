import React from "react";
import { LayoutDashboard } from "lucide-react";
import { GlassBentoCard } from "../GlassBentoCard";
import { DeepDarkWindow } from "../visuals/DeepDarkWindow";

export const CmsCard = ({ className = "" }: { className?: string }) => {
  return (
    <GlassBentoCard
      title="Intuicyjny Panel CMS"
      description="Chcesz zmienić tekst lub dodać zdjęcie? Nie potrzebujesz programisty. Wdrażamy systemy (WordPress / Custom), które są proste w obsłudze."
      icon={LayoutDashboard}
      className={className}
      contentAlign="right"
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center pt-8">
        {/* Deep Dark Window CMS Dashboard */}
        <DeepDarkWindow className="absolute top-[50px] -left-[50px] w-[800px] h-[350px] shadow-2xl transition-transform duration-500 group-hover:translate-x-4">
          <div className="flex h-full bg-neutral-900/50">
            {/* WP Admin Sidebar */}
            <div className="w-16 h-full bg-[#1e1e1e] flex flex-col items-center py-4 border-r border-white/5">
              {/* W Logo */}
              <div className="w-8 h-8 flex items-center justify-center bg-blue-600 rounded-full mb-6">
                <span className="text-white font-bold text-lg font-serif">
                  W
                </span>
              </div>
              {/* Nav Icons */}
              <div className="flex flex-col gap-4 w-full px-4">
                <div className="h-2 w-full bg-white/20 rounded-full"></div>
                <div className="h-2 w-full bg-blue-500 rounded-full"></div>
                <div className="h-2 w-full bg-white/10 rounded-full"></div>
                <div className="h-2 w-full bg-white/10 rounded-full"></div>
                <div className="h-2 w-full bg-white/10 rounded-full"></div>
              </div>
            </div>

            {/* Main Editor Area */}
            <div className="flex-1 flex flex-col bg-[#121212] relative">
              {/* Top Toolbar */}
              <div className="h-12 border-b border-white/5 flex items-center justify-between px-4 bg-[#1e1e1e]">
                <div className="text-[10px] text-neutral-400 font-medium">
                  Edytuj wpis
                </div>
                <div className="px-3 py-1 my-1 bg-blue-600 rounded-md text-[10px] font-bold text-white shadow-lg shadow-blue-600/20">
                  Aktualizuj
                </div>
              </div>

              {/* Gutenberg Editor Content */}
              <div className="p-8 space-y-6">
                {/* Title Block */}
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-neutral-500 font-serif opacity-50">
                    Dodaj tytuł
                  </div>
                </div>

                {/* Content Blocks */}
                <div className="space-y-3">
                  <div className="h-2 w-full bg-linear-to-r from-neutral-700/50 to-transparent rounded-full"></div>
                  <div className="h-2 w-5/6 bg-linear-to-r from-neutral-700/50 to-transparent rounded-full"></div>
                  <div className="h-2 w-4/6 bg-linear-to-r from-neutral-700/50 to-transparent rounded-full"></div>
                </div>

                {/* Image Block Placeholder */}
                <div className="w-full h-32 bg-neutral-800/50 rounded-lg border border-white/5 flex items-center justify-center border-dashed">
                  <div className="text-neutral-600 text-[10px]">
                    Image Block
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DeepDarkWindow>
      </div>
    </GlassBentoCard>
  );
};
