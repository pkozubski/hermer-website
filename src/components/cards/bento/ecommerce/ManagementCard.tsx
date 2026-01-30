import React from "react";
import { LayoutDashboard } from "lucide-react";

export const ManagementCard = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={`group relative w-full h-full min-h-[400px] rounded-[40px] overflow-hidden bg-neutral-900 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-700 block border border-white/5 ${className}`}
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-colors duration-700" />
        
        {/* Dashboard Mockup */}
        <div className="absolute top-[10%] left-[10%] right-[10%] bottom-[40%] bg-neutral-800 rounded-t-xl border border-white/5 shadow-2xl overflow-hidden p-4 group-hover:-translate-y-2 transition-transform duration-500">
             <div className="flex gap-4 mb-4">
                 <div className="w-1/3 h-20 bg-white/5 rounded-lg border border-white/5 p-2">
                     <div className="w-6 h-6 bg-purple-500/20 rounded mb-2"></div>
                     <div className="w-12 h-2 bg-white/10 rounded"></div>
                 </div>
                 <div className="w-1/3 h-20 bg-white/5 rounded-lg border border-white/5 p-2">
                     <div className="w-6 h-6 bg-green-500/20 rounded mb-2"></div>
                     <div className="w-12 h-2 bg-white/10 rounded"></div>
                 </div>
                 <div className="w-1/3 h-20 bg-white/5 rounded-lg border border-white/5 p-2">
                     <div className="w-6 h-6 bg-blue-500/20 rounded mb-2"></div>
                     <div className="w-12 h-2 bg-white/10 rounded"></div>
                 </div>
             </div>
             <div className="w-full h-32 bg-white/5 rounded-lg border border-white/5 relative overflow-hidden">
                 {/* Chart lines */}
                 <div className="absolute bottom-0 left-0 right-0 h-20 flex items-end justify-between px-2 pb-2 gap-1">
                     {[30, 50, 40, 70, 50, 80, 60, 90, 70, 40].map((h, i) => (
                         <div key={i} className="w-full bg-purple-500/30 rounded-sm" style={{height: `${h}%`}}></div>
                     ))}
                 </div>
             </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />

      <div className="absolute left-0 bottom-0 w-full p-8 md:p-12 flex flex-col justify-end z-20 pointer-events-none">
        <div className="relative z-10 pointer-events-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest mb-4">
             <LayoutDashboard size={14} />
             Dashboard
          </div>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Łatwe Zarządzanie
          </h3>
          <p className="text-neutral-400 text-sm md:text-base font-medium leading-relaxed max-w-lg">
            Intuicyjny panel CMS. Zarządzaj zamówieniami, produktami i klientami bez wiedzy technicznej. Pełna kontrola nad Twoim biznesem 24/7.
          </p>
        </div>
      </div>
    </div>
  );
};
