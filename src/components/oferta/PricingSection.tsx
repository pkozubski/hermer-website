"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, XCircle } from "lucide-react";

import { SplitRevealTitle } from "../ui/SplitRevealTitle";
import { LineReveal } from "../ui/LineReveal";

export const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-transparent relative">
      {/* Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#916AFF]/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <SplitRevealTitle
            line1="Inwestycja"
            line2="w Rozwój"
            className="text-white! text-5xl md:text-8xl"
          />
          <LineReveal
            lines={[
              "Przejrzyste pakiety bez ukrytych kosztów.",
              "Wybierz rozwiązanie dopasowane do Twoich potrzeb.",
            ]}
            className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-md text-left md:text-right"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* START */}
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 shadow-lg shadow-black/20 hover:-translate-y-1 transition-transform duration-300">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-2">
                Pakiet Start
              </h3>
              <p className="text-neutral-400 text-sm h-10">
                Idealny dla freelancerów i małych firm potrzebujących wizytówki.
              </p>
            </div>
            <div className="mb-8 flex items-baseline gap-1">
              <span className="text-4xl font-bold text-white tracking-tight">
                2 500
              </span>
              <span className="text-neutral-400 font-medium">PLN</span>
              <span className="text-xs text-neutral-500 ml-2">netto</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-sm text-neutral-300">
                <CheckCircle2 className="text-[#916AFF] w-5 h-5" />
                One Page / Landing Page
              </li>
              <li className="flex items-center gap-3 text-sm text-neutral-300">
                <CheckCircle2 className="text-[#916AFF] w-5 h-5" />
                Indywidualny projekt graficzny
              </li>
              <li className="flex items-center gap-3 text-sm text-neutral-300">
                <CheckCircle2 className="text-[#916AFF] w-5 h-5" />
                Responsywność (RWD)
              </li>
              <li className="flex items-center gap-3 text-sm text-neutral-300">
                <CheckCircle2 className="text-[#916AFF] w-5 h-5" />
                Podstawowa optymalizacja SEO
              </li>
              <li className="flex items-center gap-3 text-sm text-neutral-600 line-through decoration-neutral-600">
                <XCircle className="text-neutral-600 w-5 h-5" />
                System CMS
              </li>
            </ul>
            <Link
              href="/kontakt"
              className="block w-full py-4 rounded-xl border border-white/10 text-center font-semibold text-white hover:border-[#916AFF] hover:text-[#916AFF] transition-all"
            >
              Wybieram Start
            </Link>
          </div>

          {/* BUSINESS (Featured) */}
          <div className="bg-neutral-800 p-8 lg:p-10 rounded-3xl border border-neutral-700 shadow-2xl relative scale-105 z-10 text-white">
            <div className="absolute top-0 right-0 bg-[#916AFF] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-bl-xl rounded-tr-2xl">
              Polecany
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-2">
                Pakiet Business
              </h3>
              <p className="text-neutral-400 text-sm h-10">
                Rozbudowana strona firmowa z możliwością edycji treści.
              </p>
            </div>
            <div className="mb-8 flex items-baseline gap-1">
              <span className="text-5xl font-bold text-white tracking-tight">
                4 500
              </span>
              <span className="text-neutral-400 font-medium">PLN</span>
              <span className="text-xs text-neutral-500 ml-2">netto</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-sm text-neutral-300">
                <CheckCircle2 className="text-[#916AFF] w-5 h-5" />
                Do 5 podstron
              </li>
              <li className="flex items-center gap-3 text-sm text-neutral-300">
                <CheckCircle2 className="text-[#916AFF] w-5 h-5" />
                System CMS (WordPress)
              </li>
              <li className="flex items-center gap-3 text-sm text-neutral-300">
                <CheckCircle2 className="text-[#916AFF] w-5 h-5" />
                Zaawansowane SEO
              </li>
              <li className="flex items-center gap-3 text-sm text-neutral-300">
                <CheckCircle2 className="text-[#916AFF] w-5 h-5" />
                Szybkość ładowania &lt; 1s
              </li>
              <li className="flex items-center gap-3 text-sm text-neutral-300">
                <CheckCircle2 className="text-[#916AFF] w-5 h-5" />
                Integracja z Google Analytics
              </li>
            </ul>
            <Link
              href="/kontakt"
              className="block w-full py-4 rounded-xl bg-[#916AFF] text-center font-semibold text-white hover:bg-[#7b54e0] transition-all shadow-[0_0_20px_rgba(145,106,255,0.3)]"
            >
              Wybieram Business
            </Link>
          </div>

          {/* CUSTOM */}
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 shadow-lg shadow-black/20 hover:-translate-y-1 transition-transform duration-300">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-2">
                Pakiet Custom
              </h3>
              <p className="text-neutral-400 text-sm h-10">
                Dedykowane aplikacje webowe, sklepy e-commerce i portale.
              </p>
            </div>
            <div className="mb-8 flex items-baseline gap-1">
              <span className="text-3xl font-bold text-white tracking-tight">
                Wycena
              </span>
              <span className="text-neutral-400 font-medium">indywidualna</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-sm text-neutral-300">
                <CheckCircle2 className="text-[#916AFF] w-5 h-5" />
                Dedykowane funkcjonalności
              </li>
              <li className="flex items-center gap-3 text-sm text-neutral-300">
                <CheckCircle2 className="text-[#916AFF] w-5 h-5" />
                Sklep online (WooCommerce/Custom)
              </li>
              <li className="flex items-center gap-3 text-sm text-neutral-300">
                <CheckCircle2 className="text-[#916AFF] w-5 h-5" />
                Integracje API
              </li>
              <li className="flex items-center gap-3 text-sm text-neutral-300">
                <CheckCircle2 className="text-[#916AFF] w-5 h-5" />
                Wsparcie techniczne premium
              </li>
              <li className="flex items-center gap-3 text-sm text-neutral-300">
                <CheckCircle2 className="text-[#916AFF] w-5 h-5" />
                Wersje językowe
              </li>
            </ul>
            <Link
              href="/kontakt"
              className="block w-full py-4 rounded-xl border border-white/10 text-center font-semibold text-white hover:border-[#916AFF] hover:text-[#916AFF] transition-all"
            >
              Zapytaj o wycenę
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
