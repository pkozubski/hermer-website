import React from "react";
import { CreditCard } from "lucide-react";

export const IntegrationsCard = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={`group relative w-full h-full min-h-[400px] rounded-[40px] overflow-hidden bg-neutral-900 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-700 block border border-white/5 ${className}`}
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors duration-700" />
        
        {/* Logos Grid */}
        <div className="absolute inset-0 flex items-center justify-center p-8 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
             <div className="grid grid-cols-2 gap-4 w-full max-w-[200px]">
                 <div className="aspect-square bg-white/5 rounded-xl border border-white/10 flex items-center justify-center text-xs text-white/50 font-bold">BLIK</div>
                 <div className="aspect-square bg-white/5 rounded-xl border border-white/10 flex items-center justify-center text-xs text-white/50 font-bold">InPost</div>
                 <div className="aspect-square bg-white/5 rounded-xl border border-white/10 flex items-center justify-center text-xs text-white/50 font-bold">PayU</div>
                 <div className="aspect-square bg-white/5 rounded-xl border border-white/10 flex items-center justify-center text-xs text-white/50 font-bold">Stripe</div>
             </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent" />

      <div className="absolute left-0 bottom-0 w-full p-8 flex flex-col justify-end z-20 pointer-events-none">
        <div className="relative z-10 pointer-events-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
             <CreditCard size={14} />
             Integracje
          </div>
          <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
            Płatności i Kurierzy
          </h3>
          <p className="text-neutral-400 text-sm font-medium leading-relaxed">
            Automatyczne etykiety i bezpieczne płatności. Wszystko, czego potrzebuje nowoczesny e-commerce.
          </p>
        </div>
      </div>
    </div>
  );
};
