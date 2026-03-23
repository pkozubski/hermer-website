"use client";

import React from "react";
import Image from "next/image";
import { ReelCtaButton } from "@/components/ui/ReelCtaButton";

export const OutsourceMarketingBenefits: React.FC = () => {
  const benefits = [
    {
      iconSrc: "/images/oferta/zewnetrzny-dzial-marketingu/round-table_10203617 1.svg",
      title: "Profesjonalny zespół specjalistów",
      description:
        "Otrzymasz dostęp do zespołu ekspertów, z których każdy posiada ponad 10-letnie doświadczenie w marketingu.",
    },
    {
      iconSrc: "/images/oferta/zewnetrzny-dzial-marketingu/elastyczny model.svg",
      title: "Elastyczny model współpracy",
      description:
        "Dopasowujemy liczbę godzin i zakres zadań do Twoich bieżących potrzeb. W każdej chwili możemy zwiększyć lub zmniejszyć liczbę godzin, aby idealnie dopasować naszą pracę do aktualnej sytuacji w Twojej firmie.",
    },
    {
      iconSrc: "/images/oferta/zewnetrzny-dzial-marketingu/timer.svg",
      title: "Szybkie efekty przy minimalnych kosztach",
      description:
        "Wspierając firmy od ponad 10 lat nauczyliśmy się, co naprawdę działa, a co przepala budżet. Dzięki temu możemy wprowadzać działania, które szybko przyniosą Ci widoczne rezultaty. Już od samego początku współpracy zobaczysz, że nasza współpraca ma sens.",
    },
  ];

  return (
    <section id="benefits" className="w-full py-24 relative overflow-hidden bg-[#181818]">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 max-w-[1400px] relative z-10">
        
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight">
            Co zyskujesz?
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-24">
          
          {/* Left Column: Image */}
          <div className="w-full lg:w-[45%] relative flex items-center justify-center">
             
             {/* Main Image Container */}
             <div className="relative w-full aspect-square flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/oferta/zewnetrzny-dzial-marketingu/marketing-what-you-gain.png"
                    alt="Korzyści z zewnętrznego działu marketingu"
                    fill
                    priority
                    className="object-contain"
                    unoptimized
                  />
                </div>
             </div>
          </div>

          {/* Right Column: Benefits List */}
          <div className="w-full lg:w-[55%] flex flex-col pt-4 lg:pt-8">
            {benefits.map((item, index) => (
              <div 
                key={index} 
                className={`flex flex-col sm:flex-row gap-6 sm:gap-8 pb-10 ${
                  index !== benefits.length - 1 ? "border-b border-white/10 mb-10" : ""
                }`}
              >
                {/* Icon Circle */}
                <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#916AFF]/10 border border-[#916AFF]/20 flex items-center justify-center shadow-[0_0_15px_rgba(145,106,255,0.1)]">
                  <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                    <Image
                      src={item.iconSrc}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                
                {/* Text Content */}
                <div className="flex flex-col">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-[#a39ea8] text-base leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Centered CTA Button */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <ReelCtaButton text="Skontaktuj się" href="/kontakt" size="large" />
        </div>
      </div>
    </section>
  );
};
