"use client";

import React from "react";
import Image from "next/image";
import { ReelCtaButton } from "@/components/ui/ReelCtaButton";

export const OutsourceMarketingPricing: React.FC = () => {
  return (
    <section className="w-full py-24 relative overflow-hidden bg-[#181818]">
      <div className="container mx-auto px-4 sm:px-8 max-w-[1280px] relative z-10">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-8">
            Zamów bezpłatną, wstępną analizę
          </h2>
          <p className="text-[#a39ea8] text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-light">
            Nasz specjalista poświęci około 3 godziny na dokładne zapoznanie się z Twoim biznesem i branżą, aby wskazać realne szanse rozwoju sprzedaży. Ta analiza nic Cię nie kosztuje i do niczego nie zobowiązuje. Sprawdź, jaki jest potencjał wzrostu Twoich celów sprzedażowych i przekonaj się, co możemy Ci zaoferować.
          </p>
        </div>

        {/* Content Columns */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12 xl:gap-20">
          
          {/* Left Column: List and CTA */}
          <div className="w-full lg:w-[55%] flex flex-col">
            
            {/* Item 1 */}
            <div className="flex flex-col sm:flex-row gap-6 mb-10 pb-10 border-b border-white/10">
              <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-full bg-[#916AFF]/10 border border-[#916AFF]/20 flex items-center justify-center shadow-[0_0_15px_rgba(145,106,255,0.1)]">
                <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                  <Image 
                    src="/images/oferta/zewnetrzny-dzial-marketingu/growth_1899394.svg" 
                    alt="Rozwój - 7 godzin miesięcznie" 
                    fill 
                    className="object-contain" 
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                  Zewnętrzny dział marketingu na godziny – już od 7 godzin miesięcznie
                </h3>
                <p className="text-[#a39ea8] text-base leading-relaxed font-light">
                  Koszt pracy naszych specjalistów to 120 zł netto/h (standardowo jest to wyższa stawka). Minimalne zaangażowanie zespołu to 7 godzin miesięcznie.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-full bg-[#916AFF]/10 border border-[#916AFF]/20 flex items-center justify-center shadow-[0_0_15px_rgba(145,106,255,0.1)]">
                <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                  <Image 
                    src="/images/oferta/zewnetrzny-dzial-marketingu/code_7109740 1.svg" 
                    alt="Dodatkowe godziny gratis" 
                    fill 
                    className="object-contain" 
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                  Dodatkowe godziny gratis – skuteczny start współpracy
                </h3>
                <p className="text-[#a39ea8] text-base leading-relaxed font-light">
                  Na początek otrzymasz od nas co najmniej 5 godzin pracy zespołu gratis przez pierwsze 2 miesiące. Rozumiemy jak ważne jest osiągnięcie celów sprzedażowych byś chciał zostać z nami na stałe.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-2 sm:mt-4">
              <ReelCtaButton text="Skontaktuj się" href="/kontakt" size="large" />
            </div>

          </div>

          {/* Right Column: Image with Offset Background */}
          <div className="w-full lg:w-[45%] flex justify-center lg:justify-end pr-4 pb-4 lg:pr-6 lg:pb-6">
            <div className="relative w-full max-w-md xl:max-w-lg aspect-square">
              {/* Decorative offset box */}
              <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 w-[80%] h-[80%] bg-[#916AFF] rounded-3xl -z-10" />
              
              {/* Image Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-white/5">
                <Image 
                  src="/images/oferta/zewnetrzny-dzial-marketingu/marketing-earn-free-analyse.png"
                  alt="Bezpłatna analiza"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
