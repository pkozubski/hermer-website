import React from "react";
import { Smartphone } from "lucide-react";

export const MobileFirstCard = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={`group relative w-full h-full min-h-[400px] rounded-[40px] overflow-hidden bg-neutral-900 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-700 block border border-white/5 ${className}`}
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

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors duration-700" />

        {/* Phone Mockup - Centered */}
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[180px] h-[350px] bg-neutral-800 rounded-[2rem] border-4 border-neutral-700 shadow-2xl group-hover:-translate-y-2 transition-transform duration-500">
            {/* Screen */}
            <div className="absolute inset-1 rounded-[1.7rem] bg-neutral-900 overflow-hidden flex flex-col">
                <div className="h-6 w-full bg-neutral-800 flex justify-center items-center">
                    <div className="w-16 h-3 bg-black rounded-full mb-1"></div>
                </div>
                <div className="p-4 space-y-3">
                    <div className="w-1/2 h-4 bg-blue-500/50 rounded animate-pulse"></div>
                    <div className="w-full h-24 bg-white/5 rounded-lg border border-white/5"></div>
                    <div className="space-y-2">
                        <div className="w-full h-2 bg-neutral-700 rounded"></div>
                        <div className="w-5/6 h-2 bg-neutral-700 rounded"></div>
                        <div className="w-4/6 h-2 bg-neutral-700 rounded"></div>
                    </div>
                    <div className="flex gap-2">
                         <div className="w-1/2 h-20 bg-white/5 rounded-lg border border-white/5"></div>
                         <div className="w-1/2 h-20 bg-white/5 rounded-lg border border-white/5"></div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* --- CONTENT OVERLAY --- */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent" />

      {/* Text Content */}
      <div className="absolute left-0 bottom-0 w-full p-8 flex flex-col justify-end z-20 pointer-events-none">
        <div className="relative z-10 pointer-events-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
             <Smartphone size={14} />
             RWD
          </div>
          <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
            Mobile First
          </h3>
          <p className="text-neutral-400 text-sm font-medium leading-relaxed">
            Projektujemy z myślą o urządzeniach mobilnych. Twoja strona będzie wyglądać idealnie na każdym ekranie.
          </p>
        </div>
      </div>
    </div>
  );
};
