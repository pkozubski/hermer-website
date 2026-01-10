"use client";

import React from "react";
import { motion } from "framer-motion";
import { SplitRevealTitle } from "@/components/ui/SplitRevealTitle";

const steps = [
  {
    kicker: "01",
    title: "Discovery",
    description:
      "Głęboka analiza Twojego biznesu, konkurencji i celów. Nie zgadujemy. Opieramy się na danych.",
  },
  {
    kicker: "02",
    title: "UX Strategy",
    description:
      "Projektowanie ścieżek użytkownika i architektury informacji. Budujemy mapę do konwersji.",
  },
  {
    kicker: "03",
    title: "Visual Design",
    description:
      "Tworzenie unikalnego języka wizualnego, który wyróżni Cię z tłumu podobnych firm.",
  },
  {
    kicker: "04",
    title: "Development",
    description:
      "Czysty, skalowalny kod. Next.js, Headless CMS. Szybkość i bezpieczeństwo w standardzie.",
  },
];

export const WebDesignProcess = () => {
  return (
    <section className="py-32 bg-[#FAFAFA] border-t border-slate-100">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32 items-end">
          <SplitRevealTitle
            line1="Proces,"
            line2="który dowozi."
            className="text-6xl md:text-9xl font-medium tracking-tighter text-slate-900 leading-[0.9]"
          />
          <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed max-w-md mb-4">
            Przejrzystość na każdym etapie.
            <br />
            Od pierwszego spotkania po wdrożenie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <ProcessStep key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessStep = ({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
    className="group relative flex flex-col justify-between h-full min-h-[300px] border-t border-slate-200 pt-8 hover:border-slate-900 transition-colors duration-500"
  >
    <span className="text-xs font-bold text-slate-400 mb-12 block group-hover:text-slate-900 transition-colors duration-500">
      {step.kicker}
    </span>
    <div>
      <h3 className="text-3xl font-medium text-slate-900 mb-6">{step.title}</h3>
      <p className="text-slate-600 text-lg font-light leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity duration-500">
        {step.description}
      </p>
    </div>
  </motion.div>
);
