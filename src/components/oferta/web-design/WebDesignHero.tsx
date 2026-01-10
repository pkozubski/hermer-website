"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SplitRevealTitle } from "@/components/ui/SplitRevealTitle";
import { ArrowDownRight, Palette, LayoutTemplate } from "lucide-react";

export const WebDesignHero = () => {
  return (
    <section className="relative min-h-[92vh] w-full flex flex-col justify-between overflow-hidden bg-[#FAFAFA] pt-32">
      {/* --- BACKGROUND --- */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* --- CONTENT --- */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center flex-grow">
        {/* 1. Typography (Centered & Clean) */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="mb-8">
            <SplitRevealTitle
              line1="Strony WWW"
              line2="Klasy Premium"
              className="text-6xl sm:text-7xl md:text-9xl font-medium tracking-tighter text-slate-900 leading-[0.9]"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-slate-500 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-10"
          >
            Łączymy analitykę z artystycznym designem. Budujemy wizerunek, który
            budzi zaufanie i sprzedaje Twoją ofertę 24/7.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/kontakt"
              className="group relative flex items-center gap-3 px-8 py-4 bg-[#1a1a1a] text-white rounded-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-slate-300 hover:-translate-y-1"
            >
              <span className="font-bold tracking-wide">
                Rozpocznij Projekt
              </span>
              <ArrowDownRight className="w-4 h-4 group-hover:rotate-[-45deg] transition-transform duration-300" />
            </Link>
            <Link
              href="#realizacje"
              className="px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-full font-medium hover:bg-slate-50 transition-colors"
            >
              Zobacz Realizacje
            </Link>
          </motion.div>
        </div>

        {/* 2. Composition (Anchored Bottom Visual - Single Element) */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-6xl mx-auto mt-auto relative"
        >
          {/* Browser Window Chrome */}
          <div className="bg-white rounded-t-2xl shadow-2xl shadow-slate-200/50 border border-slate-200 overflow-hidden relative z-10">
            {/* Toolbar */}
            <div className="h-12 border-b border-slate-100 bg-[#FCFCFC] flex items-center px-6 gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-200/80" />
                <div className="w-3 h-3 rounded-full bg-slate-200/80" />
                <div className="w-3 h-3 rounded-full bg-slate-200/80" />
              </div>
              {/* Fake URL Bar */}
              <div className="mx-auto w-[40%] h-7 bg-white border border-slate-100 rounded-md shadow-sm flex items-center justify-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 opacity-50" />
                <div className="w-24 h-2 bg-slate-100 rounded-full" />
              </div>
            </div>

            {/* Viewport Content (Skeleton UI) */}
            <div className="relative bg-white min-h-[400px] md:min-h-[500px] p-8 md:p-16 flex flex-col items-center">
              {/* Hero Skeleton inside Browser */}
              <div className="w-full max-w-3xl flex flex-col items-center text-center space-y-6">
                <div className="space-y-3 w-full flex flex-col items-center">
                  <div className="h-4 md:h-6 w-32 bg-[#916AFF]/10 rounded-full text-center mb-4" />
                  <div className="h-12 md:h-20 w-[80%] bg-gradient-to-r from-slate-100 via-slate-50 to-slate-100 rounded-xl" />
                  <div className="h-12 md:h-20 w-[60%] bg-gradient-to-r from-slate-100 via-slate-50 to-slate-100 rounded-xl" />
                </div>

                <div className="flex gap-4 pt-4">
                  <div className="w-32 h-10 bg-slate-900 rounded-lg shadow-lg shadow-slate-200" />
                  <div className="w-32 h-10 bg-white border border-slate-100 rounded-lg" />
                </div>

                {/* Feature Grid Skeleton */}
                <div className="grid grid-cols-3 gap-6 w-full pt-16 opacity-50">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-2xl bg-slate-50 border border-slate-100 p-6 flex flex-col justify-between"
                    >
                      <div className="w-10 h-10 rounded-lg bg-white shadow-sm border border-slate-100" />
                      <div className="space-y-2">
                        <div className="w-2/3 h-3 bg-slate-200 rounded" />
                        <div className="w-full h-2 bg-slate-100 rounded" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Badges (Subtle & Integrated) */}
              <div className="absolute top-[20%] right-[10%] bg-white p-3 rounded-xl shadow-xl border border-slate-100 animate-pulse hidden md:block">
                <Palette className="w-6 h-6 text-[#916AFF]" />
              </div>
              <div
                className="absolute top-[30%] left-[8%] bg-white p-3 rounded-xl shadow-xl border border-slate-100 animate-pulse hidden md:block"
                style={{ animationDelay: "1s" }}
              >
                <LayoutTemplate className="w-6 h-6 text-slate-400" />
              </div>
            </div>
          </div>

          {/* Glow behind browser */}
          <div className="absolute top-10 left-10 right-10 bottom-0 bg-blue-400/5 blur-[100px] -z-10 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};
