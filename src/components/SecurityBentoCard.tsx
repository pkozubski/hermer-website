"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Floating contract card with animated signature & seal              */
/* ------------------------------------------------------------------ */
const ContractVisual: React.FC = () => (
  <div className="relative w-full h-[160px] sm:h-[180px] md:h-[200px] flex items-end justify-start mt-4">
    {/* Background filler card */}
    <div className="absolute bottom-[10px] left-[14px] w-[88%] h-[88%] rounded-2xl bg-[#242424] border border-white/[0.05] rotate-[4deg] opacity-70 shadow-[0px_10px_28px_rgba(0,0,0,0.3)]" />

    {/* Shadow beneath */}
    <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-[84%] h-7 bg-black/40 blur-[20px] rounded-full" />

    {/* Contract card – tilted */}
    <motion.div
      className="relative z-10 w-[88%] h-full rounded-2xl bg-[#262626] border-[5px] border-white/5 p-5 sm:p-6 flex flex-col justify-between overflow-hidden shadow-[0px_0px_48px_10px_rgba(0,0,0,0.2),0px_4px_16px_8px_rgba(0,0,0,0.1)]"
      initial={{ rotate: 0 }}
      whileHover={{ rotate: 0, scale: 1.03 }}
      style={{ rotate: -3 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Fake document lines */}
      <div className="flex flex-col gap-2">
        <div className="h-[6px] w-[60%] rounded-full bg-white/[0.07]" />
        <div className="h-[6px] w-[85%] rounded-full bg-white/[0.05]" />
        <div className="h-[6px] w-[45%] rounded-full bg-white/[0.04]" />
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-white/[0.06] my-2" />

      {/* Bottom row: signature + seal */}
      <div className="flex items-end justify-between">
        {/* Purple seal */}
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0">
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-dashed border-[#9b87f5]/40"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-1.5 rounded-full bg-[#9b87f5]/10 flex items-center justify-center">
            <ShieldCheck
              size={18}
              className="text-[#9b87f5]"
              strokeWidth={1.5}
            />
          </div>
        </div>

        {/* Animated signature line */}
        <div className="w-[60%] ml-4 text-right">
          <div className="text-[8px] text-gray-600 uppercase tracking-widest mb-1.5 font-normal">
            Podpis
          </div>
          <svg
            viewBox="0 0 120 24"
            className="w-full h-6 overflow-visible"
            fill="none"
          >
            <motion.path
              d="M4 18 C12 4, 20 20, 32 12 S52 2, 60 14 S76 22, 88 8 S100 16, 116 6"
              stroke="#9b87f5"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{
                pathLength: {
                  duration: 1.2,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.3,
                },
                opacity: { duration: 0.2, delay: 0.3 },
              }}
            />
          </svg>
        </div>
      </div>
    </motion.div>
  </div>
);

/* ------------------------------------------------------------------ */
/*  Main exported card                                                 */
/* ------------------------------------------------------------------ */
export const SecurityBentoCard: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <div
      className={`md:col-span-3 lg:col-span-4 md:col-start-1 relative z-0 overflow-hidden border border-[#333] rounded-[32px] bg-[#232323] text-white font-sans group/shield ${className}`}
    >
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-linear-to-r from-transparent via-white/55 to-transparent opacity-80 transition-[width,opacity] duration-500 group-hover/shield:w-64 group-hover/shield:opacity-100" />
      <div className="pointer-events-none absolute -top-5 left-1/2 -translate-x-1/2 w-36 h-12 bg-[#916AFF]/25 blur-2xl opacity-70 transition-[width,height,opacity] duration-500 group-hover/shield:w-56 group-hover/shield:h-16 group-hover/shield:opacity-95" />
      {/* Background Mesh Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,_var(--tw-gradient-stops))] from-[#916AFF]/10 via-transparent to-transparent opacity-50" />

      <div className="relative p-8 flex flex-col h-full z-10">
        {/* Typography */}
        <div>
          <h4 className="text-3xl font-normal text-white mb-2 flex items-center gap-2 group-hover/shield:text-[#916AFF] transition-colors duration-300">
            Bezpieczeństwo współpracy
          </h4>
          <div className="h-0.5 w-8 bg-neutral-700 rounded-full mb-3 group-hover/shield:w-full group-hover/shield:bg-[#916AFF]/50 transition-[width,background-color] duration-700 ease-in-out" />
          <p className="text-neutral-400 text-sm font-normal leading-relaxed">
            Ustalamy jasny zakres i&nbsp;etapy prac, żebyś od początku wiedział,
            co obejmuje projekt i&nbsp;z&nbsp;jakich etapów będzie składał się
            cały proces od projektu po wdrożenie.
          </p>
        </div>

        {/* Floating contract visual */}
        <div className="mt-8 flex-1 flex items-end w-full">
          <ContractVisual />
        </div>
      </div>
    </div>
  );
};
