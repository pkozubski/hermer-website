"use client";

import React from "react";
import { Layers, Palette } from "lucide-react";

export const WebDesignCard = () => {
  return (
    <a
      href="/oferta/strony-www"
      className="group relative h-[500px] rounded-[40px] overflow-hidden bg-neutral-900 hover:shadow-2xl hover:shadow-black/50 transition-all duration-700 block cursor-pointer border border-white/5"
    >
      {/* --- VISUAL BACKDROP --- */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Background Subtle Grid */}
        <div
          className="absolute inset-0 z-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Browser Window Composition */}
        <div className="absolute -bottom-10 -right-5 w-[60%] bg-neutral-800/80 backdrop-blur-sm rounded-xl shadow-2xl border border-white/10 block z-10">
          {/* Browser Chrome */}
          <div className="h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-neutral-800 rounded-tl-xl">
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
          </div>

          {/* Internal Content Skeleton */}
          <div className="p-8 relative h-full">
            <div className="flex flex-col gap-5">
              {/* Mini Navbar */}
              <div className="flex items-center justify-between w-full">
                <div className="w-16 h-4 bg-[#916AFF] rounded mx-0" />
                <div className="flex gap-2">
                  <div className="w-12 h-4 bg-white/10 rounded-full" />
                  <div className="w-12 h-4 bg-white/10 rounded-full" />
                </div>
              </div>

              {/* Mini Hero Content */}
              <div className="mt-4 space-y-3">
                <div className="space-y-1.5">
                  <div className="w-[75%] h-6 bg-[#916AFF] rounded" />
                  <div className="w-[55%] h-6 bg-[#916AFF] rounded" />
                </div>
                <div className="space-y-1 pt-1">
                  <div className="w-[80%] h-2.5 bg-neutral-700 rounded-full" />
                  <div className="w-[70%] h-2.5 bg-neutral-700 rounded-full" />
                </div>
                <div className="flex gap-2.5 pt-3">
                  <div className="w-20 h-7 bg-[#916AFF] rounded shadow-md shadow-black/50" />
                  <div className="w-20 h-7 bg-transparent border border-white/20 rounded" />
                </div>
              </div>
            </div>

            {/* Additional content grid */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              <div className="aspect-video bg-white/5 rounded border border-white/10"></div>
              <div className="aspect-video bg-white/5 rounded border border-white/10"></div>
              <div className="aspect-video bg-white/5 rounded border border-white/10"></div>
            </div>

            {/* Floating Element: Toast */}
            <div className="absolute top-12 right-[5%] bg-neutral-800 rounded-xl shadow-2xl border border-white/10 p-2 pr-4 flex items-center gap-3 z-20 -rotate-3 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 shadow-lg"
                style={{
                  background:
                    "linear-gradient(135deg, #575757 0%, #1a1a1a 50%, #2d2d2d 100%)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  boxShadow:
                    "0 4px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.3)",
                }}
              >
                <Layers
                  size={16}
                  strokeWidth={2}
                  className="text-white drop-shadow-sm"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white">
                  Responsywność
                </span>
              </div>
            </div>

            {/* Floating Element: Palette */}
            <div
              className="absolute bottom-[40%] -left-4 transform rotate-6 w-12 h-12 rounded-xl flex items-center justify-center z-30 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2 shadow-2xl"
              style={{
                background:
                  "linear-gradient(135deg, #575757 0%, #1a1a1a 50%, #2d2d2d 100%)",
                border: "1px solid rgba(255,255,255,0.15)",
                boxShadow:
                  "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.3)",
              }}
            >
              <Palette
                size={22}
                strokeWidth={2}
                className="text-white drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* --- CONTENT OVERLAY --- */}
      <div className="absolute inset-0 bg-linear-to-r from-neutral-900 via-neutral-900/80 to-transparent opacity-90" />

      {/* Text Content */}
      <div className="absolute left-0 top-0 bottom-0 w-[50%] p-8 md:p-12 flex flex-col justify-end z-20">
        <div className="relative z-10 mt-auto">
          <div className="pb-6 mb-6">
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2">
              Web Design
            </h3>
            <p className="text-neutral-500 font-bold tracking-widest uppercase text-xs">
              Strony WWW & Landing Pages
            </p>
          </div>

          <div className="flex justify-between items-start">
            <p className="text-neutral-400 text-lg font-medium leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity duration-500">
              Tworzymy serwisy, które hipnotyzują designem i konwertują lepiej
              niż Twój najlepszy handlowiec.
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};
