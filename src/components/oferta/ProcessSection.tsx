"use client";

import React from "react";
import { Search, BarChartBig, Rocket } from "lucide-react";

import { SplitRevealTitle } from "../ui/SplitRevealTitle";
import { LineReveal } from "../ui/LineReveal";

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      icon: Search,
      title: "Poznajemy Twoje potrzeby biznesowe",
      description:
        "Podczas warsztatów biznesowo-projektowych, czyli wstępnych konsultacji, razem określimy cele Twojego biznesu.",
    },
    {
      icon: BarChartBig,
      title: "Przeprowadzamy audyt marketingowy",
      description:
        "Specjalista z 14-letnim doświadczeniem dopracuje strategię marketingową strony, uwzględniając ustalone cele.",
    },
    {
      icon: Rocket,
      title: "Projektujemy i wdrażamy stronę",
      description:
        "Sprawimy, że Twoja strona będzie skutecznie przekształcać odwiedzających w klientów.",
    },
  ];

  return (
    <section className="py-24 bg-transparent border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <SplitRevealTitle
            line1="Jak tworzymy"
            line2="Strony WWW?"
            className="text-white! text-5xl md:text-8xl"
          />
          <LineReveal
            lines={[
              "3 podstawowe kroki",
            ]}
            className="text-neutral-400 text-sm md:text-xl leading-relaxed max-w-md text-left md:text-right font-medium"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:bg-[#916AFF] group-hover:text-white group-hover:border-[#916AFF] transition-all duration-300">
                <step.icon className="w-5 h-5" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                {step.title}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
