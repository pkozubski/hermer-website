"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STEPS = [
  {
    id: 1,
    title: "Odkrycie",
    subtitle: "Discovery",
    desc: "Analizujemy Twój biznes, konkurencję i grupę docelową. Definiujemy cele i KPI. To fundament, bez którego nie ruszamy.",
    detail: "Workshop & Audyt",
  },
  {
    id: 2,
    title: "Strategia",
    subtitle: "UX & Design",
    desc: "Tworzymy makiety i architekturę informacji. Projektujemy unikalny język wizualny, który przemawia do emocji Twoich klientów.",
    detail: "Prototypy & UI",
  },
  {
    id: 3,
    title: "Realizacja",
    subtitle: "Development",
    desc: "Kodujemy. Czysty, wydajny i bezpieczny kod. Integrujemy systemy i testujemy każde kliknięcie.",
    detail: "Next.js & Performance",
  },
  {
    id: 4,
    title: "Wzrost",
    subtitle: "Launch & Scale",
    desc: "Wdrożenie to dopiero początek. Optymalizujemy konwersję, uruchamiamy kampanie i skalujemy wyniki.",
    detail: "Analytics & Ads",
  },
];

export const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <div className="mb-20">
          <span className="text-slate-900 font-bold tracking-widest uppercase text-xs mb-4 block">
            Workflow
          </span>
          <h2 className="text-6xl md:text-[8rem] leading-[0.9] font-medium text-slate-900">
            Od Chaosu do <span className="">Wyniku.</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Steps List */}
          <div className="lg:w-1/3 flex flex-col gap-4">
            {STEPS.map((step, idx) => (
              <div
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer p-6 rounded-2xl transition-all duration-300 border ${activeStep === idx ? "bg-slate-900 border-slate-900 shadow-xl scale-105" : "bg-transparent border-transparent hover:bg-slate-50"}`}
              >
                <div
                  className={`text-xs font-bold uppercase tracking-widest mb-2 ${activeStep === idx ? "text-slate-400" : "text-slate-400"}`}
                >
                  Etap 0{step.id}
                </div>
                <div
                  className={`text-2xl font-bold ${activeStep === idx ? "text-white" : "text-slate-900"}`}
                >
                  {step.title}
                </div>
              </div>
            ))}
          </div>

          {/* Content Display */}
          <div className="lg:w-2/3 relative min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-[#FAFAFA] rounded-[40px] p-8 md:p-16 h-full flex flex-col justify-center border border-slate-100"
              >
                <div className="text-[#916AFF] font-mono mb-6 text-sm">
                  // {STEPS[activeStep].subtitle}
                </div>
                <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 max-w-xl">
                  {STEPS[activeStep].desc}
                </h3>
                <div className="mt-auto pt-8 border-t border-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="font-bold text-slate-900 uppercase tracking-widest text-xs">
                      Deliverable: {STEPS[activeStep].detail}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
