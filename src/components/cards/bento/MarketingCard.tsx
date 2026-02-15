'use client';

import React from 'react';
import Image from 'next/image';

export const MarketingCard = ({ className = '' }: { className?: string }) => {
  return (
    <a
      href="/oferta/marketing"
      className={`group relative w-full rounded-[40px] overflow-hidden bg-neutral-900 hover:shadow-2xl hover:shadow-black/50 transition-shadow duration-700 block cursor-pointer border border-white/5 ${className}`}
    >
      {/* --- VISUAL BACKDROP --- */}
      <div className="absolute -bottom-10 -left-50 w-full h-[80%] opacity-80">
        <Image
          src="/assets/hero-cards/marketing.png"
          alt="Marketing Chart Visual"
          fill
          className="object-contain object-left"
          priority
        />
      </div>

      {/* --- CONTENT OVERLAY --- */}
      <div className="absolute inset-0 bg-linear-to-l from-neutral-900 via-neutral-900/80 to-transparent opacity-90" />

      {/* Text Content - RIGHT SIDE */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-full md:max-w-[500px] p-8 md:p-12 flex flex-col justify-start items-end z-20 pointer-events-none">
        <div className="pointer-events-auto">
          <div className="relative z-10 text-right">
            <div className="pb-6 mb-6">
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2">
                Marketing internetowy
              </h3>
            </div>

            <div>
              <p className="text-neutral-400 text-sm md:text-base font-medium leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-500 max-w-lg ml-auto">
                Zaczynamy od rozmowy i analizy, żeby dobrze zrozumieć Twoją
                branżę i cele biznesowe. Na tej podstawie proponujemy konkretne
                rozwiązania i przedstawiamy plan działania, a Ty masz jasność,
                co robimy, dlaczego oraz w jaki sposób zwiększymy liczbę zapytań
                i klientów.
              </p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};
