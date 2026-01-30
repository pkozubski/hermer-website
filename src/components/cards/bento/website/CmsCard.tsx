import React from "react";
import { LayoutDashboard } from "lucide-react";

export const CmsCard = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={`group relative w-full h-full min-h-[400px] rounded-[40px] overflow-hidden bg-neutral-900 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-700 block border border-white/5 ${className}`}
    >
      {/* --- VISUAL BACKDROP --- */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Background Subtle Grid */}
        <div
          className="absolute inset-0 z-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-colors duration-700" />

        {/* Dashboard Mockup */}
        <div className="absolute top-[10%] -right-[15%] md:-right-[10%] w-[90%] md:w-[70%] bg-neutral-800 rounded-tl-2xl rounded-bl-2xl shadow-2xl border border-white/10 overflow-hidden group-hover:-translate-x-2 transition-transform duration-500">
            {/* Header */}
            <div className="h-12 border-b border-white/5 bg-neutral-900/50 flex items-center px-4 justify-between">
                <div className="flex gap-2">
                    <div className="h-2 w-20 bg-neutral-600 rounded"></div>
                </div>
                <div className="h-8 w-8 rounded-full bg-purple-500/20"></div>
            </div>
            {/* Body */}
            <div className="p-4 grid grid-cols-4 gap-4">
                {/* Sidebar */}
                <div className="col-span-1 space-y-3">
                    <div className="h-2 w-full bg-purple-500/50 rounded"></div>
                    <div className="h-2 w-3/4 bg-neutral-700 rounded"></div>
                    <div className="h-2 w-5/6 bg-neutral-700 rounded"></div>
                    <div className="h-2 w-2/3 bg-neutral-700 rounded"></div>
                </div>
                {/* Main Content */}
                <div className="col-span-3 space-y-4">
                    <div className="h-32 bg-neutral-900/50 rounded-lg border border-white/5 p-3 relative">
                        {/* Editor visuals */}
                        <div className="h-2 w-1/3 bg-neutral-600 rounded mb-3"></div>
                        <div className="h-1.5 w-full bg-neutral-700 rounded mb-1.5"></div>
                        <div className="h-1.5 w-full bg-neutral-700 rounded mb-1.5"></div>
                        <div className="h-1.5 w-2/3 bg-neutral-700 rounded"></div>
                        
                        {/* Floating Action Button */}
                        <div className="absolute bottom-3 right-3 h-8 w-8 bg-purple-500 rounded-full shadow-lg flex items-center justify-center">
                            <div className="w-4 h-0.5 bg-white"></div>
                            <div className="w-0.5 h-4 bg-white absolute"></div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="h-20 bg-neutral-900/50 rounded-lg border border-white/5"></div>
                        <div className="h-20 bg-neutral-900/50 rounded-lg border border-white/5"></div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* --- CONTENT OVERLAY --- */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />

      {/* Text Content */}
      <div className="absolute left-0 bottom-0 w-full p-8 md:p-12 flex flex-col justify-end z-20 pointer-events-none">
        <div className="relative z-10 pointer-events-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest mb-4">
             <LayoutDashboard size={14} />
             CMS
          </div>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Intuicyjny Panel CMS
          </h3>
          <p className="text-neutral-400 text-sm md:text-base font-medium leading-relaxed max-w-lg">
            Chcesz zmienić tekst lub dodać zdjęcie? Nie potrzebujesz programisty. Wdrażamy systemy (WordPress / Custom), które są proste w obsłudze.
          </p>
        </div>
      </div>
    </div>
  );
};
