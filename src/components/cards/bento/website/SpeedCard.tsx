import React from "react";
import { Zap } from "lucide-react";

export const SpeedCard = ({ className = "" }: { className?: string }) => {
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

        {/* Abstract Speed Visual */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-colors duration-700" />
        
        {/* Speedometer / Score UI */}
        <div className="absolute top-10 right-10 md:top-12 md:right-12 z-10">
             <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center bg-neutral-800/80 backdrop-blur-md rounded-full border border-white/10 shadow-xl group-hover:scale-110 transition-transform duration-500">
                <div className="absolute inset-2 rounded-full border-[3px] border-neutral-700" />
                <div className="absolute inset-2 rounded-full border-[3px] border-green-500 border-t-transparent border-l-transparent -rotate-45" />
                <div className="flex flex-col items-center">
                    <span className="text-4xl md:text-5xl font-black text-white">99</span>
                    <span className="text-[10px] md:text-xs uppercase tracking-widest text-neutral-400">Score</span>
                </div>
             </div>
        </div>

        {/* Graph Lines */}
        <div className="absolute bottom-0 left-0 right-0 h-40 flex items-end justify-around px-10 pb-10 opacity-30 group-hover:opacity-50 transition-opacity duration-500">
            <div className="w-4 h-16 bg-green-500 rounded-t-sm" />
            <div className="w-4 h-24 bg-green-500 rounded-t-sm" />
            <div className="w-4 h-20 bg-green-500 rounded-t-sm" />
            <div className="w-4 h-32 bg-green-500 rounded-t-sm" />
            <div className="w-4 h-28 bg-green-500 rounded-t-sm" />
            <div className="w-4 h-12 bg-green-500 rounded-t-sm" />
        </div>
      </div>

      {/* --- CONTENT OVERLAY --- */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />

      {/* Text Content */}
      <div className="absolute left-0 bottom-0 w-full p-8 md:p-12 flex flex-col justify-end z-20 pointer-events-none">
        <div className="relative z-10 pointer-events-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest mb-4">
             <Zap size={14} />
             Performance
          </div>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Bezkompromisowa szybkość
          </h3>
          <p className="text-neutral-400 text-sm md:text-base font-medium leading-relaxed max-w-lg">
            Optymalizujemy każdy kilobajt. Nasze strony osiągają wyniki 90+ w
            Google PageSpeed Insights, co przekłada się na lepsze SEO i niższy
            współczynnik odrzuceń.
          </p>
        </div>
      </div>
    </div>
  );
};
