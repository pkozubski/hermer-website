"use client";

import React from "react";
import Image from "next/image";

export const OutsourceMarketingEffects: React.FC = () => {
  return (
    <section className="w-full py-24 relative overflow-hidden bg-[#0e0c13] border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-8 max-w-[1280px] relative z-10">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
            Efekty dla naszych klientów
          </h2>
        </div>

        {/* Content Columns */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Column: Image */}
          <div className="w-full lg:w-[50%] flex justify-center lg:justify-start">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(145,106,255,0.05)] border border-white/5">
              <Image 
                src="/images/oferta/zewnetrzny-dzial-marketingu/marketing-effect-img.png"
                alt="Wykresy efektów kampanii marketingowej"
                width={800}
                height={800}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="w-full lg:w-[50%] flex flex-col justify-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 leading-tight">
              Producent przyczep — ilość osób zainteresowanych ofertą wzrosła o ponad 2300%
            </h3>
            
            <p className="text-[#a39ea8] text-base sm:text-lg leading-relaxed font-light mb-6">
              Naszą strategię marketingową zastosowaliśmy w ramach współpracy z firmą produkującą przyczepy na terenie Polski oraz Niemiec. Cele, jakie udało nam się osiągnąć, obrazują wykresy:
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-[#916AFF] mt-2.5 shrink-0" />
                <p className="text-[#a39ea8] text-base sm:text-lg leading-relaxed font-light">
                  pierwszy pokazuje wzrost liczby wejść na stronę www wynoszący do kilku tysięcy osób dziennie,
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-[#916AFF] mt-2.5 shrink-0" />
                <p className="text-[#a39ea8] text-base sm:text-lg leading-relaxed font-light">
                  drugi wykres ilustruje, jak rośnie liczba fraz, które osiągnęły pozycje 1-3, 4-10 i 11-20 na liście Google.
                </p>
              </li>
            </ul>

            <p className="text-[#a39ea8] text-base sm:text-lg leading-relaxed font-light">
              Dynamicznie zwiększamy liczbę klientów dla firmy dzięki temu, że coraz więcej osób widzi stronę w wyszukiwarce Google. Popularne frazy, wyszukiwane nawet przez 4000 osób w ciągu miesiąca, znajdują się w pierwszej trójce wyników wyszukiwania.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
