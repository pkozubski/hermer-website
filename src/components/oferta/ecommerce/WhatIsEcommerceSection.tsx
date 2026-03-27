import React from "react";
import Image from "next/image";
import { ShoppingCart, CreditCard, LayoutTemplate, Truck } from "lucide-react";
import { SplitRevealTitle } from "@/components/ui/SplitRevealTitle";

export const WhatIsEcommerceSection = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
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
              Sklep internetowy to platforma umożliwiająca sprzedaż produktów
              lub usług online, w pełni zintegrowana z systemami płatności,
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
                <span className="text-lg font-medium">
                  Zarządzanie produktami
                </span>
              </div>
              <div className="flex items-center gap-4 text-white/90">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#916AFF] shrink-0">
                  <Truck size={24} />
                </div>
                <span className="text-lg font-medium">
                  Integracje logistyczne
                </span>
              </div>
            </div>
          </div>

          {/* Visual Content - Mobile & Desktop Placeholder */}
          <div className="w-full lg:w-1/2 relative mt-10 lg:mt-0 flex justify-center items-center">
            <Image
              src="/sklepy-internetowe.png"
              alt="Sklepy internetowe"
              width={800}
              height={800}
              className="w-full max-w-[600px] h-auto object-contain drop-shadow-2xl lg:hidden"
              priority
            />
          </div>
        </div>
      </div>

      {/* Visual Content - Desktop touching right edge */}
      <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 w-[55vw] max-w-[1200px] justify-end items-center z-0 pointer-events-none">
        <Image
          src="/sklepy-internetowe.png"
          alt="Sklepy internetowe"
          width={1200}
          height={1000}
          className="w-full h-auto max-h-[90vh] object-contain object-right drop-shadow-2xl"
          priority
        />
      </div>
    </section>
  );
};
