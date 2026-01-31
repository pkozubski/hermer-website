"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export const AboutHero = () => {
  return (
    <section className="relative min-h-[85vh] w-full flex flex-col justify-center bg-transparent overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32 isolate">
      {/* Premium Background Grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <div className="max-w-5xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 rounded-full text-xs font-bold uppercase tracking-widest text-[#916AFF] mb-8 border border-white/10"
          >
            <span className="w-2 h-2 rounded-full bg-[#916AFF] animate-pulse"></span>
            O nas
          </motion.div>

          {/* Title */}
          <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-display font-medium tracking-tighter text-white leading-[0.9] mb-12">
            Tworzymy <br />
            <span className="text-[#916AFF]">profesjonalne</span> <br />
            strony oraz sklepy
          </h1>

          {/* Subtext and icon */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-t border-white/10 pt-8 gap-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg md:text-2xl max-w-2xl text-slate-400 font-light leading-relaxed"
            >
              Tworzymy strony, które pracują na Twój zysk. Od 14 lat łączymy
              design ze skuteczną sprzedażą.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white bg-white/5 shadow-sm"
            >
              <ArrowDown size={24} className="animate-bounce" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
