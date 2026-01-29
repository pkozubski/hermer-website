"use client";

import React from "react";
import { LayoutTemplate } from "lucide-react";

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
        <div className="absolute -bottom-[15%] -right-[10%] w-[110%] scale-70 origin-bottom-right md:scale-100 md:origin-center md:-bottom-10 md:-right-16 md:w-[60%] bg-neutral-800/80 backdrop-blur-sm rounded-xl shadow-2xl border border-white/10 block z-10 transition-transform duration-700 group-hover:-translate-y-2 md:group-hover:-translate-x-2 md:group-hover:-translate-y-2">
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
                {/* CTA Button */}
                <div className="flex gap-2.5 pt-3">
                  <div className="w-24 h-8 bg-[#916AFF] rounded shadow-md shadow-black/50 flex items-center justify-center">
                    <div className="w-12 h-1.5 bg-white/30 rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Additional content grid */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              <div className="aspect-video bg-white/5 rounded border border-white/10"></div>
              <div className="aspect-video bg-white/5 rounded border border-white/10"></div>
              <div className="aspect-video bg-white/5 rounded border border-white/10"></div>
            </div>

            {/* Floating Element: Structure Toast */}
            <div className="absolute top-12 left-[55%] bg-neutral-800 rounded-xl shadow-2xl border border-white/10 p-2 pr-4 flex items-center gap-3 z-20 -rotate-3 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105">
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
                <LayoutTemplate
                  size={16}
                  strokeWidth={2}
                  className="text-white drop-shadow-sm"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white">Struktura</span>
              </div>
            </div>

            {/* Floating Cursor */}
            <div className="absolute top-[60%] left-[50%] z-50 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:top-[62%] group-hover:left-[15%] pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="23"
                viewBox="0 0 21 23"
                fill="none"
              >
                <g filter="url(#web_design_cursor_filter)">
                  <path
                    d="M5.82927 17.9094L2.698 1.95028L17.0751 9.82757L9.99315 11.8821L5.82927 17.9094Z"
                    fill="black"
                  />
                  <path
                    d="M5.82927 17.9094L2.698 1.95028L17.0751 9.82757L9.99315 11.8821L5.82927 17.9094Z"
                    stroke="white"
                  />
                </g>
                <defs>
                  <filter
                    id="web_design_cursor_filter"
                    x="0"
                    y="0"
                    width="20.3719"
                    height="22.1734"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1_10"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_10"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* --- CONTENT OVERLAY --- */}
      <div className="absolute inset-0 bg-linear-to-r from-neutral-900 via-neutral-900/90 to-transparent opacity-100" />

      {/* Text Content */}
      <div className="absolute left-0 top-0 bottom-0 w-full md:w-[48%] p-8 md:p-12 flex flex-col justify-start md:justify-end z-20 pointer-events-none">
        <div className="relative z-10 mt-0 md:mt-auto pointer-events-auto">
          <div className="pb-4 mb-4 border-b border-white/10">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">
              Tworzenie stron internetowych
            </h3>
          </div>

          <div className="flex justify-between items-start">
            <p className="text-neutral-400 text-sm md:text-base font-medium leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-500 max-w-lg">
              Tworzymy strony, które dobrze wyglądają i prowadzą użytkownika do
              kontaktu, zapytania lub zakupu. Na starcie wspólnie ustalamy, do
              kogo ma trafić strona i jaki ma spełniać cel, a potem przekładamy
              to na przejrzystą strukturę, treści i projekt, które ułatwiają
              decyzję o kontakcie.
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};
