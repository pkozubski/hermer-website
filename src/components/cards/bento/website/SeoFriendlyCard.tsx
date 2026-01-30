import React from "react";
import { BarChartBig, Search } from "lucide-react";

export const SeoFriendlyCard = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={`group relative w-full h-full min-h-[400px] rounded-[40px] overflow-hidden bg-neutral-900 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-700 block border border-white/5 ${className}`}
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

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-green-500/10 rounded-full blur-3xl group-hover:bg-green-500/20 transition-colors duration-700" />

        {/* Search Results UI */}
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[240px] flex flex-col gap-3 group-hover:-translate-y-2 transition-transform duration-500">
             {/* Fake Search Bar */}
             <div className="w-full h-10 bg-neutral-800 rounded-full border border-white/10 flex items-center px-4 gap-2 mb-2 shadow-lg">
                <Search size={14} className="text-neutral-500" />
                <div className="h-2 w-24 bg-neutral-700 rounded-full"></div>
             </div>

             {/* Result 1 (Highlighted) */}
             <div className="w-full bg-neutral-800/80 backdrop-blur rounded-xl p-4 border border-green-500/30 shadow-lg relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500"></div>
                <div className="h-3 w-32 bg-green-500/50 rounded mb-2"></div>
                <div className="h-2 w-full bg-neutral-700 rounded mb-1"></div>
                <div className="h-2 w-4/5 bg-neutral-700 rounded"></div>
             </div>

             {/* Result 2 */}
             <div className="w-full bg-neutral-800/50 rounded-xl p-4 border border-white/5 opacity-50">
                <div className="h-3 w-20 bg-neutral-600 rounded mb-2"></div>
                <div className="h-2 w-full bg-neutral-700 rounded mb-1"></div>
                <div className="h-2 w-4/5 bg-neutral-700 rounded"></div>
             </div>
        </div>
      </div>

      {/* --- CONTENT OVERLAY --- */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent" />

      {/* Text Content */}
      <div className="absolute left-0 bottom-0 w-full p-8 flex flex-col justify-end z-20 pointer-events-none">
        <div className="relative z-10 pointer-events-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-widest mb-4">
             <BarChartBig size={14} />
             SEO
          </div>
          <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
            SEO Friendly
          </h3>
          <p className="text-neutral-400 text-sm font-medium leading-relaxed">
            Prawidłowa struktura, meta tagi i schema.org. Dajemy Ci solidny start w wynikach wyszukiwania.
          </p>
        </div>
      </div>
    </div>
  );
};
