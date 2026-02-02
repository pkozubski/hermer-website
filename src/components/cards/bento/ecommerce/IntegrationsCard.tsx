import React from "react";
import { CreditCard } from "lucide-react";
import { GlassBentoCard } from "../GlassBentoCard";
import { DeepDarkWindow } from "../visuals/DeepDarkWindow";

export const IntegrationsCard = ({
  className = "",
}: {
  className?: string;
}) => {
  return (
    <GlassBentoCard
      title="Płatności i Kurierzy"
      description="Automatyczne etykiety i bezpieczne płatności. BLIK, Stripe, InPost – wszystko, czego potrzebuje nowoczesny e-commerce."
      icon={CreditCard}
      className={className}
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center pt-8">
        {/* Deep Dark Window Integrations Dashboard */}
        <DeepDarkWindow className="w-[90%] h-[300px] shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
          <div className="w-full h-full bg-neutral-900/50 flex flex-col p-6">
            {/* Header Mockup */}
            <div className="flex items-center gap-4 mb-6 border-b border-white/5 pb-4">
              <div className="text-xs font-medium text-neutral-400">
                Aktywne integracje
              </div>
              <div className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
            </div>

            {/* Integration Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Payment Gateways */}
              <div className="space-y-3">
                <div className="text-[10px] text-neutral-500 uppercase tracking-wider font-bold">
                  Płatności
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 group/item hover:border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center text-[8px] font-bold text-white border border-white/10">
                    BLIK
                  </div>
                  <div className="flex flex-col">
                    <div className="textxs font-medium text-neutral-200">
                      BLIK
                    </div>
                    <div className="text-[9px] text-green-500">Włączone</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 group/item hover:border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-[#635BFF] flex items-center justify-center text-[8px] font-bold text-white border border-white/10">
                    S
                  </div>
                  <div className="flex flex-col">
                    <div className="text-xs font-medium text-neutral-200">
                      Stripe
                    </div>
                    <div className="text-[9px] text-green-500">Włączone</div>
                  </div>
                </div>
              </div>

              {/* Shipping Providers */}
              <div className="space-y-3">
                <div className="text-[10px] text-neutral-500 uppercase tracking-wider font-bold">
                  Wysyłka
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 group/item hover:border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-[#FFCC00] flex items-center justify-center text-[8px] font-bold text-black border border-white/10">
                    In
                  </div>
                  <div className="flex flex-col">
                    <div className="text-xs font-medium text-neutral-200">
                      InPost
                    </div>
                    <div className="text-[9px] text-green-500">Włączone</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 group/item hover:border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-[#D40511] flex items-center justify-center text-[8px] font-bold text-white border border-white/10">
                    DHL
                  </div>
                  <div className="flex flex-col">
                    <div className="text-xs font-medium text-neutral-200">
                      DHL
                    </div>
                    <div className="text-[9px] text-neutral-500">
                      Skonfiguruj
                    </div>
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
