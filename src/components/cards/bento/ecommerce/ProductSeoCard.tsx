import React from "react";
import { Search } from "lucide-react";

export const ProductSeoCard = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={`group relative w-full h-full min-h-[400px] rounded-[40px] overflow-hidden bg-neutral-900 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-700 block border border-white/5 ${className}`}
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-green-500/10 rounded-full blur-3xl group-hover:bg-green-500/20 transition-colors duration-700" />
        
        {/* Search Result Mockup */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80%] bg-neutral-800 rounded-xl p-4 border border-white/5 shadow-xl group-hover:scale-105 transition-transform duration-500">
             <div className="flex gap-3 mb-2">
                 <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">G</div>
                 <div className="flex flex-col gap-1">
                     <div className="w-24 h-2 bg-white/20 rounded-full"></div>
                     <div className="w-32 h-2 bg-white/10 rounded-full"></div>
                 </div>
             </div>
             <div className="w-full h-3 bg-blue-400/30 rounded-full mb-2"></div>
             <div className="space-y-1">
                 <div className="w-full h-2 bg-white/10 rounded-full"></div>
                 <div className="w-5/6 h-2 bg-white/10 rounded-full"></div>
             </div>
             {/* Rich Snippet Stars */}
             <div className="flex gap-1 mt-3">
                 {[1,2,3,4,5].map(i => <div key={i} className="w-3 h-3 bg-yellow-500 rounded-full"></div>)}
             </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent" />

      <div className="absolute left-0 bottom-0 w-full p-8 flex flex-col justify-end z-20 pointer-events-none">
        <div className="relative z-10 pointer-events-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-widest mb-4">
             <Search size={14} />
             Widoczność
          </div>
          <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
            SEO Produktowe
          </h3>
          <p className="text-neutral-400 text-sm font-medium leading-relaxed">
            Rich snippets i schema.org. Twoje produkty będą widoczne i atrakcyjne w wynikach wyszukiwania.
          </p>
        </div>
      </div>
    </div>
  );
};
