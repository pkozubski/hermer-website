"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export const AboutHero = () => {
  return (
    <section className="relative min-h-[85vh] w-full flex flex-col justify-center bg-white overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32 isolate">
      {/* Premium Background Grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <div className="max-w-5xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-100 rounded-full text-xs font-bold uppercase tracking-widest text-[#916AFF] mb-8 border border-slate-200/60"
          >
            <span className="w-2 h-2 rounded-full bg-[#916AFF] animate-pulse"></span>
            O nas
          </motion.div>

          {/* Title */}
          <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-display font-medium tracking-tighter text-slate-900 leading-[0.9] mb-12">
            Tworzymy <br />
            <span className="text-[#916AFF]">profesjonalne</span> <br />
            strony oraz sklepy
          </h1>

          {/* Subtext and icon */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-t border-slate-200 pt-8 gap-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg md:text-2xl max-w-2xl text-slate-600 font-light leading-relaxed"
            >
              Tworzymy strony, które pracują na Twój zysk. Od 14 lat łączymy
              design ze skuteczną sprzedażą.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-16 h-16 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 bg-white shadow-sm"
            >
              <ArrowDown size={24} className="animate-bounce" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
