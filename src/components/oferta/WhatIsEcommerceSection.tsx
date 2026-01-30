import React from "react";
import { ShoppingCart, CreditCard, LayoutTemplate, Truck } from "lucide-react";
import { SplitRevealTitle } from "@/components/ui/SplitRevealTitle";

export const WhatIsEcommerceSection = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-neutral-900 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-16 lg:gap-24">
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
             <SplitRevealTitle
                line1="Czym jest sklep"
                line2="internetowy?"
                className="text-white! text-4xl sm:text-5xl lg:text-7xl xl:text-8xl tracking-tighter mb-8 lg:mb-12 leading-[1.1]"
              />
            
            <p className="text-neutral-400 text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl">
              Sklep internetowy to platforma umożliwiająca sprzedaż produktów lub
              usług online, w pełni zintegrowana z systemami płatności,
              magazynowymi i logistycznymi.
            </p>
            <p className="text-neutral-400 text-lg lg:text-xl leading-relaxed max-w-2xl">
              Obejmuje projekt UX, wdrożenie techniczne i wsparcie marketingowe.
              To nie tylko "strona z koszykiem", ale kompleksowe narzędzie
              biznesowe, które działa na Twoją korzyść 24/7.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mt-12">
              <div className="flex items-center gap-4 text-white/90">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#916AFF] shrink-0">
                  <CreditCard size={24} />
                </div>
                <span className="text-lg font-medium">Płatności online</span>
              </div>
              <div className="flex items-center gap-4 text-white/90">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#916AFF] shrink-0">
                  <LayoutTemplate size={24} />
                </div>
                <span className="text-lg font-medium">Projekt UX/UI</span>
              </div>
              <div className="flex items-center gap-4 text-white/90">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#916AFF] shrink-0">
                  <ShoppingCart size={24} />
                </div>
                <span className="text-lg font-medium">Zarządzanie produktami</span>
              </div>
              <div className="flex items-center gap-4 text-white/90">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#916AFF] shrink-0">
                  <Truck size={24} />
                </div>
                <span className="text-lg font-medium">Integracje logistyczne</span>
              </div>
            </div>
          </div>

          {/* Visual Content */}
          <div className="w-full lg:w-1/2 relative mt-10 lg:mt-0">
            <div className="relative z-10 bg-gradient-to-br from-white/10 to-transparent p-1 rounded-3xl border border-white/10 backdrop-blur-sm shadow-2xl">
              <div className="bg-neutral-900/90 rounded-[22px] p-8 lg:p-12 border border-white/5 relative overflow-hidden group">
                 {/* Decorative background glow */}
                 <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#916AFF]/10 rounded-full blur-[100px] -z-10 mix-blend-screen pointer-events-none group-hover:bg-[#916AFF]/20 transition-all duration-700"></div>

                 <div className="space-y-8">
                    <div className="flex items-center justify-between border-b border-white/10 pb-8">
                        <div className="flex items-center gap-5">
                            <div className="w-14 h-14 bg-[#916AFF] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#916AFF]/20">
                                <ShoppingCart size={28} />
                            </div>
                            <div>
                                <h3 className="text-white text-2xl font-display font-medium tracking-tight">Twój Sklep</h3>
                                <p className="text-sm text-neutral-400 font-medium tracking-wide">Panel zarządzania</p>
                            </div>
                        </div>
                        <div className="px-4 py-1.5 bg-green-500/10 text-green-400 text-xs font-bold rounded-full border border-green-500/20 tracking-wider">
                            ONLINE
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-white/5 p-6 rounded-xl border border-white/5">
                            <p className="text-neutral-400 text-xs mb-3 uppercase tracking-widest font-medium">Sprzedaż dzisiaj</p>
                            <p className="text-white text-3xl lg:text-4xl font-display font-semibold tracking-tight">2 450 PLN</p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-xl border border-white/5">
                            <p className="text-neutral-400 text-xs mb-3 uppercase tracking-widest font-medium">Zamówienia</p>
                            <p className="text-white text-3xl lg:text-4xl font-display font-semibold tracking-tight">12</p>
                        </div>
                    </div>
                    
                    <div className="w-full h-40 bg-white/5 rounded-xl border border-white/5 flex items-end justify-between px-3 pb-3 gap-3">
                        {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                            <div key={i} className="w-full bg-[#916AFF]/50 rounded-md hover:bg-[#916AFF] transition-colors duration-300 relative group/bar" style={{ height: `${h}%` }}>
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black font-mono text-xs font-medium px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap">
                                    {h * 10} PLN
                                </div>
                            </div>
                        ))}
                    </div>
                 </div>
              </div>
            </div>
            
            {/* Abstract elements behind */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl animate-pulse-slow"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#916AFF]/20 rounded-full blur-3xl animate-pulse-slow delay-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
