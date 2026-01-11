"use client";

import React from "react";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

import { SplitRevealTitle } from "../ui/SplitRevealTitle";
import { LineReveal } from "../ui/LineReveal";

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      icon: Search,
      title: "1. Analiza i Strategia",
      description:
        "Poznajemy Twój biznes, konkurencję i cele. Tworzymy makietę funkcjonalną (UX) i dobieramy technologię.",
    },
    {
      icon: PenTool,
      title: "2. UI Design",
      description:
        "Projektujemy unikalny wygląd strony. Dbamy o detale, typografię i spójność z Twoją marką.",
    },
    {
      icon: Code2,
      title: "3. Development",
      description:
        "Programujemy stronę zgodnie ze standardami. Czysty kod, szybkość ładowania i optymalizacja pod Google.",
    },
    {
      icon: Rocket,
      title: "4. Wdrożenie i Start",
      description:
        "Testujemy, instalujemy na serwerze i szkolimy Cię z obsługi panelu. Twoja strona jest gotowa na podbój rynku.",
    },
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <SplitRevealTitle
            line1="Jak"
            line2="Pracujemy?"
            className="text-slate-900! text-5xl md:text-8xl"
          />
          <LineReveal
            lines={[
              "Przejrzysty proces to klucz do sukcesu. Od koncepcji do",
              "wdrożenia – prowadzimy Cię za rękę na każdym etapie.",
            ]}
            className="text-slate-500 text-sm md:text-base leading-relaxed max-w-md text-left md:text-right"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group">
              <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-900 mb-6 group-hover:bg-[#916AFF] group-hover:text-white group-hover:border-[#916AFF] transition-all duration-300">
                <step.icon className="w-5 h-5" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                {step.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
