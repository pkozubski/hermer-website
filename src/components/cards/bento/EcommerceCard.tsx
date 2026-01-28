"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Package,
  ShoppingBag,
  CreditCard,
  ArrowUpRight,
  Check,
  ChevronRight,
} from "lucide-react";

export const EcommerceCard = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    { icon: Package, label: "Produkt" },
    { icon: ShoppingBag, label: "Koszyk" },
    { icon: CreditCard, label: "Płatność" },
  ];

  return (
    <motion.a
      href="/oferta/sklepy-internetowe"
      className="group relative h-[500px] rounded-[40px] overflow-hidden bg-[#F5F5F5] hover:shadow-2xl hover:shadow-slate-200 transition-all duration-700 flex flex-col justify-between"
    >
      {/* 1. TOP: Text Content */}
      <div className="relative z-20 p-8 md:p-10 flex flex-col items-start w-full">
        <div className="absolute top-8 right-8 md:top-10 md:right-10 w-10 h-10 rounded-full border border-slate-200 text-slate-400 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-white">
          <ArrowUpRight size={20} />
        </div>

        <div className="space-y-2 mb-4">
          <h3 className="text-3xl font-bold tracking-tight text-slate-900 leading-tight">
            E-Commerce
          </h3>
          <p className="text-slate-400 font-bold tracking-widest uppercase text-[10px]">
            Sklepy Online
          </p>
        </div>

        <p className="text-slate-500 text-base font-medium leading-relaxed max-w-[90%] opacity-80">
          Skalowalne platformy sprzedażowe pod maksymalną wartość koszyka.
        </p>
      </div>

      {/* 2. BOTTOM: Visual Container - Checkout Flow */}
      <div className="relative w-full flex-1 overflow-hidden rounded-b-[40px] flex items-center justify-center p-6 pb-8">
        <div className="w-full max-w-[280px] relative">
          {/* Checkout Flow Steps */}
          <div className="flex items-center justify-between gap-2">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === activeStep;
              const isCompleted = index < activeStep;

              return (
                <React.Fragment key={index}>
                  {/* Step Circle */}
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                        isActive
                          ? "scale-110 shadow-xl"
                          : isCompleted
                            ? "scale-100"
                            : "scale-90 opacity-40"
                      }`}
                      style={{
                        background:
                          isActive || isCompleted
                            ? "linear-gradient(135deg, #575757 0%, #1a1a1a 50%, #2d2d2d 100%)"
                            : "#e2e8f0",
                        border:
                          isActive || isCompleted
                            ? "1px solid rgba(255,255,255,0.15)"
                            : "1px solid #cbd5e1",
                        boxShadow: isActive
                          ? "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)"
                          : "none",
                      }}
                    >
                      {isCompleted ? (
                        <Check
                          size={20}
                          className="text-white"
                          strokeWidth={3}
                        />
                      ) : (
                        <Icon
                          size={20}
                          className={isActive ? "text-white" : "text-slate-400"}
                          strokeWidth={2}
                        />
                      )}
                    </div>
                    <span
                      className={`text-[10px] font-bold tracking-wide transition-all duration-300 ${
                        isActive ? "text-slate-900" : "text-slate-400"
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>

                  {/* Connector Arrow */}
                  {index < steps.length - 1 && (
                    <div
                      className={`flex-1 flex items-center justify-center -mt-6 transition-opacity duration-300 ${
                        index < activeStep ? "opacity-100" : "opacity-30"
                      }`}
                    >
                      <ChevronRight size={16} className="text-slate-300" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Progress Bar */}
          <div className="mt-6 h-1.5 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-slate-900 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${((activeStep + 1) / 3) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </motion.a>
  );
};
