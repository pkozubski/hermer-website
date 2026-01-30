import React from "react";
import { Smartphone } from "lucide-react";

export const MobileCheckoutCard = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={`group relative w-full h-full min-h-[400px] rounded-[40px] overflow-hidden bg-neutral-900 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-700 block border border-white/5 ${className}`}
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

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-colors duration-700" />

        {/* Phone Mockup - Centered */}
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[200px] h-[380px] bg-neutral-800 rounded-[2rem] border-4 border-neutral-700 shadow-2xl group-hover:-translate-y-2 transition-transform duration-500">
            {/* Screen */}
            <div className="absolute inset-1 rounded-[1.7rem] bg-neutral-900 overflow-hidden flex flex-col p-4 relative">
                 {/* Header */}
                 <div className="flex justify-between items-center mb-4">
                     <div className="w-4 h-4 rounded-full bg-white/10"></div>
                     <div className="w-20 h-2 bg-white/10 rounded-full"></div>
                     <div className="w-4 h-4 rounded-full bg-white/10"></div>
                 </div>
                 {/* Product Image */}
                 <div className="w-full h-32 bg-white/5 rounded-xl mb-4 relative overflow-hidden">
                     <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/10"></div>
                 </div>
                 {/* Product Details */}
                 <div className="space-y-2 mb-6">
                     <div className="w-3/4 h-3 bg-white/10 rounded-full"></div>
                     <div className="w-1/2 h-3 bg-white/10 rounded-full"></div>
                 </div>
                 {/* Buy Button - Floating at bottom */}
                 <div className="mt-auto w-full h-12 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20">
                     <span className="text-white font-bold text-sm">Kup teraz</span>
                 </div>
            </div>
        </div>
      </div>

      {/* --- CONTENT OVERLAY --- */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent" />

      {/* Text Content */}
      <div className="absolute left-0 bottom-0 w-full p-8 flex flex-col justify-end z-20 pointer-events-none">
        <div className="relative z-10 pointer-events-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest mb-4">
             <Smartphone size={14} />
             Mobile First
          </div>
          <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
            Mobilny Koszyk
          </h3>
          <p className="text-neutral-400 text-sm font-medium leading-relaxed">
            Ponad 70% zakupów to mobile. Optymalizujemy check-out pod obsługę jednym kciukiem.
          </p>
        </div>
      </div>
    </div>
  );
};
