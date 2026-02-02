import React from "react";
import { Smartphone, ShoppingCart, CreditCard } from "lucide-react";
import { GlassBentoCard } from "../GlassBentoCard";
import { DeepDarkPhone } from "../visuals/DeepDarkPhone";

export const MobileCartCard = ({ className = "" }: { className?: string }) => {
  return (
    <GlassBentoCard
      title="Mobilny Koszyk"
      description="Ponad 70% zakupów to mobile. Optymalizujemy check-out pod obsługę jednym kciukiem."
      icon={Smartphone}
      className={className}
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center pt-8">
        {/* Deep Dark Phone with Checkout UI */}
        <DeepDarkPhone className="w-[180px] h-[360px] md:w-[200px] md:h-[400px] shadow-2xl transition-transform duration-500 group-hover:-translate-y-4">
          <div className="flex flex-col h-full bg-neutral-900 text-white p-4 relative">
            {/* Header */}
            <div className="flex items-center justify-between mb-4 mt-8 border-b border-white/5 pb-2">
              <div className="text-[10px] text-neutral-400">Koszyk (2)</div>
              <ShoppingCart size={12} className="text-white" />
            </div>

            {/* Cart Items */}
            <div className="space-y-3">
              {/* Item 1 */}
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-neutral-800 border border-white/5 shrink-0" />
                <div className="flex flex-col gap-1 w-full">
                  <div className="h-2 w-16 rounded-full bg-linear-to-r from-neutral-700 to-neutral-800" />
                  <div className="h-1.5 w-8 rounded-full bg-neutral-800" />
                </div>
              </div>
              {/* Item 2 */}
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-neutral-800 border border-white/5 shrink-0" />
                <div className="flex flex-col gap-1 w-full">
                  <div className="h-2 w-12 rounded-full bg-linear-to-r from-neutral-700 to-neutral-800" />
                  <div className="h-1.5 w-10 rounded-full bg-neutral-800" />
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="mt-4 pt-4 border-t border-white/5 space-y-2">
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-neutral-500">Suma</span>
                <span className="font-bold">249,00 zł</span>
              </div>
            </div>

            {/* Sticky Bottom Button (Thumb Zone) */}
            <div className="mt-auto">
              <div className="w-full h-10 rounded-xl bg-blue-600 shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 group/btn">
                <span className="text-[10px] font-bold">Zamawiam i płacę</span>
                <CreditCard size={10} />
              </div>
            </div>
          </div>
        </DeepDarkPhone>
      </div>
    </GlassBentoCard>
  );
};
