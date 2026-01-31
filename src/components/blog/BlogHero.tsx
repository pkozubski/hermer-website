import React from "react";
import { motion } from "framer-motion";
import { SplitRevealTitle } from "../ui/SplitRevealTitle";
import { LineReveal } from "../ui/LineReveal";

export const BlogHero: React.FC = () => {
  return (
    <section className="container mx-auto px-4 md:px-8 mb-20 relative pt-32 md:pt-48">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#916AFF]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
        <div>
          <SplitRevealTitle
            line1="Nasze"
            line2="Wpisy."
            className="text-white! text-7xl md:text-8xl mb-8 leading-[0.9] tracking-tighter"
          />
          <LineReveal
            lines={[
              "Dzielimy się wiedzą o designie, technologii i",
              "strategiach, które napędzają nowoczesny biznes.",
            ]}
            className="text-slate-400 text-xl max-w-lg font-medium leading-relaxed"
          />
        </div>

        <div className="flex lg:justify-end space-x-8 text-sm md:text-base mb-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="border-l border-white/20 pl-6"
          >
            <span className="block text-3xl font-black text-white">
              120+
            </span>
            <span className="text-slate-400 font-medium">Artykułów</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="border-l border-white/20 pl-6"
          >
            <span className="block text-3xl font-black text-white">
              5 min
            </span>
            <span className="text-slate-400 font-medium">
              Średni czas czytania
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
