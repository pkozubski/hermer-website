"use client";

import React from "react";
import { motion } from "framer-motion";

export const AboutStats = () => {
  return (
    <section className="bg-transparent py-24 relative z-10">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 pt-10 border-t border-white/10"
        >
          {[
            { value: "14 lat", label: "Rozwijamy sprzedaż naszych klientów" },
            {
              value: "9 lat",
              label: "Tyle wynosi średnie doświadczenie w naszym zespole",
            },
            { value: "700 +", label: "Zrealizowanych projektów" },
            {
              value: "140 +",
              label:
                "firm zdecydowało się wyrazić opinie na temat naszej współpracy",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center md:text-left flex flex-col items-center md:items-start group"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-3 tracking-tighter group-hover:text-[#916AFF] transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-neutral-400 font-semibold uppercase tracking-widest leading-relaxed max-w-[200px]">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
