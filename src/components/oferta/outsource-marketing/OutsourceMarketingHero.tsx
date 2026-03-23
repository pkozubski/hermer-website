"use client";

import React from "react";
import Image from "next/image";
import { ReelCtaButton } from "@/components/ui/ReelCtaButton";

export const OutsourceMarketingHero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#181818] border-b border-white/5 pt-32 pb-16">
      {/* Background gradients mirroring the screenshot's dark purple/navy vibe */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_0%_30%,rgba(65,35,120,0.15)_0%,transparent_50%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_100%_100%_at_100%_0%,rgba(65,35,120,0.1)_0%,transparent_40%)]" />
      <div className="absolute bottom-0 left-0 w-full h-[30%] bg-linear-to-t from-[#181818] to-transparent -z-10" />

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Column: Text Content */}
          <div className="w-full lg:w-[50%] flex flex-col items-start animate-[ofmHeroFadeIn_0.8s_ease-out_both] z-20">
            <div className="inline-flex items-center gap-2 text-[#916AFF] text-[11px] font-bold tracking-[0.2em] uppercase mb-8">
              BOOST BIZNES +
            </div>

            <h1 className="text-[2.5rem] sm:text-[3.5rem] lg:text-[4.2rem] xl:text-[4.8rem] leading-[1.1] text-white tracking-tight font-medium mb-6">
              Zewnętrzny dział marketingu – <span className="text-[#a58bfc]">Twoja przewaga</span> w biznesie
            </h1>

            <p className="text-[#a39ea8] text-base sm:text-lg max-w-[90%] mb-12 font-light leading-relaxed">
              Zamień chaos w strategię – skorzystaj z usług zewnętrznego działu marketingu, który uporządkuje i zrewolucjonizuje Twój marketing oraz sprzedaż.
            </p>

            <ReelCtaButton text="Poznaj szczegóły" href="#benefits" size="large" />
          </div>

          {/* Right Column: Image and Decorative Elements */}
          <div className="w-full lg:w-[50%] relative animate-[ofmHeroFadeIn_0.8s_ease-out_0.2s_both] flex items-center justify-end">
            
            {/* Main Image Container (No borders) */}
            <div className="relative w-full aspect-square sm:max-w-xl lg:max-w-none flex items-center justify-center scale-100 lg:scale-110 origin-center lg:origin-right">
              <div className="relative w-full h-full">
                <Image
                  src="/images/oferta/zewnetrzny-dzial-marketingu/marketing-hero-image.png"
                  alt="Wzrost biznesu - zewnętrzny dział marketingu"
                  fill
                  className="object-contain"
                  priority
                  unoptimized
                />
              </div>
            </div>

            {/* Vertical Scroll Text */}
            <div className="absolute -right-8 lg:-right-16 top-1/2 -translate-y-1/2 max-sm:hidden flex flex-col items-center gap-4">
              <div className="w-px h-16 bg-linear-to-b from-transparent to-white/20" />
              <span className="text-[10px] font-bold tracking-[0.3em] text-white/40 [writing-mode:vertical-rl] rotate-180 uppercase cursor-default">
                Przewiń w dół
              </span>
            </div>
            
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ofmHeroFadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};
