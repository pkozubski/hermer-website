"use client";

import React from "react";
import { Search, BarChartBig, Rocket, PieChart } from "lucide-react";

import { SplitRevealTitle } from "../ui/SplitRevealTitle";
import { LineReveal } from "../ui/LineReveal";

export const MarketingProcessSection: React.FC = () => {
  const steps = [
    {
      icon: Search,
      title: "Analiza firmy i konkurencji",
      description:
        "Rozpoczynamy od głębokiego zrozumienia Twojego biznesu, audytu obecnych działań i analizy konkurencji, aby znaleźć luki i szanse.",
    },
    {
      icon: PieChart,
      title: "Strategia działań",
      description:
        "Opracowujemy kompleksowy plan marketingowy, dobierając odpowiednie kanały (SEO, Ads, Social Media) do Twoich celów budżetowych.",
    },
    {
      icon: Rocket,
      title: "Realizacja kampanii",
      description:
        "Wdrażamy zaplanowane działania, tworzymy treści, konfigurujemy reklamy i optymalizujemy konwersję na stronie.",
    },
    {
        icon: BarChartBig,
        title: "Raportowanie i rozwój",
        description:
          "Regularnie monitorujemy wyniki, dostarczamy przejrzyste raporty i stale udoskonalamy strategię, by maksymalizować ROI.",
      },
  ];

  return (
    <section id="process" className="py-24 bg-transparent border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <SplitRevealTitle
            line1="Proces"
            line2="Współpracy"
            className="text-white! text-5xl md:text-8xl"
          />
          <LineReveal
             lines={[
                "Od analizy do wyników.",
                "Twój sukces w 4 krokach."
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
