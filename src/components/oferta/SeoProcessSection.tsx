"use client";

import React from "react";
import { Search, Settings, Link as LinkIcon, BarChart } from "lucide-react";

import { SplitRevealTitle } from "../ui/SplitRevealTitle";
import { LineReveal } from "../ui/LineReveal";

export const SeoProcessSection: React.FC = () => {
  const steps = [
    {
      icon: Search,
      title: "Audyt i słowa kluczowe",
      description:
        "Analizujemy obecny stan Twojej strony i dobieramy frazy, które realnie przyciągną klientów, a nie tylko ruch.",
    },
    {
      icon: Settings,
      title: "Optymalizacja techniczna",
      description:
        "Poprawiamy błędy w kodzie, szybkość ładowania i strukturę treści, aby strona była przyjazna dla robotów Google.",
    },
    {
      icon: LinkIcon,
      title: "Budowa autorytetu",
      description:
        "Pozyskujemy wartościowe linki z zaufanych serwisów, budując pozycję eksperta w Twojej branży.",
    },
    {
        icon: BarChart,
        title: "Monitoring i raporty",
        description:
          "Nieustannie śledzimy pozycje i ruch, reagując na zmiany algorytmów. Co miesiąc otrzymujesz jasny raport z efektów.",
      },
  ];

  return (
    <section id="process" className="py-24 bg-transparent border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <SplitRevealTitle
            line1="Proces"
            line2="Pozycjonowania"
            className="text-white! text-5xl md:text-8xl"
          />
          <LineReveal
             lines={[
                "Długofalowa strategia.",
                "Trwałe efekty w 4 krokach."
              ]}
            className="text-neutral-400 text-sm md:text-xl leading-relaxed max-w-md text-left md:text-right font-medium"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:bg-[#916AFF] group-hover:text-white group-hover:border-[#916AFF] transition-all duration-300">
                <step.icon className="w-5 h-5" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                {step.title}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {step.description}
              </p>
              
              {/* Connector Line (except for last item) */}
              {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-[60px] w-[calc(100%-40px)] h-px bg-white/5" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
