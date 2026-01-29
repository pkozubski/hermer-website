"use client";

import React from "react";
import { TrendingUp, BarChart3 } from "lucide-react";

export const MarketingCard = () => {
  return (
    <a
      href="/oferta/marketing"
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

        {/* Chart Visualization */}
        <div className="absolute bottom-4 left-0 right-0 mx-auto w-[85%] md:w-auto md:inset-auto md:-bottom-12 md:-left-12 md:right-[40%] md:top-[20%] z-10 flex flex-col justify-end md:block pointer-events-none">
          {/* Header Label */}
          <div className="mb-3 flex items-center justify-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center shadow-lg"
              style={{
                background:
                  "linear-gradient(135deg, #575757 0%, #1a1a1a 50%, #2d2d2d 100%)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <TrendingUp size={16} className="text-white" />
            </div>
            <div>
              <span className="text-sm font-bold text-white">
                Wyniki kampanii
              </span>
              <span className="text-[10px] text-neutral-400 ml-2">
                Ostatnie 30 dni
              </span>
            </div>
          </div>

          {/* Chart Container */}
          <div className="relative w-full h-[calc(100%-44px)] bg-neutral-800/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/10 p-6 overflow-hidden">
            {/* SVG Chart */}
            <div className="relative h-full w-full">
              {/* Chart Line & Area SVG - stretched */}
              <svg
                viewBox="0 0 400 150"
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="none"
              >
                {/* Gradient Definition */}
                <defs>
                  <linearGradient
                    id="chartGradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#916AFF" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#916AFF" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="lineGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#916AFF" />
                    <stop offset="100%" stopColor="#6B4FD8" />
                  </linearGradient>
                </defs>

                {/* Grid Lines */}
                {[0, 1, 2, 3].map((i) => (
                  <line
                    key={i}
                    x1="0"
                    y1={37.5 * i + 20}
                    x2="400"
                    y2={37.5 * i + 20}
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                ))}

                {/* Area Fill */}
                <path
                  d="M 0 130 Q 50 120 80 110 T 140 90 T 200 70 T 260 40 T 320 25 T 400 10 L 400 150 L 0 150 Z"
                  fill="url(#chartGradient)"
                  className="transition-all duration-1000"
                />

                {/* Main Line */}
                <path
                  d="M 0 130 Q 50 120 80 110 T 140 90 T 200 70 T 260 40 T 320 25 T 400 10"
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="transition-all duration-1000"
                  style={{
                    strokeDasharray: 600,
                    strokeDashoffset: 0,
                    animation: "drawLine 2s ease-out forwards",
                  }}
                />
              </svg>

              {/* Data Points - separate layer with perfect circles */}
              <div className="absolute inset-0 w-full h-full">
                {[
                  { x: 0, y: 86.7 },
                  { x: 20, y: 73.3 },
                  { x: 35, y: 60 },
                  { x: 50, y: 46.7 },
                  { x: 65, y: 26.7 },
                  { x: 80, y: 16.7 },
                  { x: 100, y: 6.7 },
                ].map((point, i) => (
                  <div
                    key={i}
                    className="absolute w-4 h-4 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `${point.x}%`,
                      top: `${point.y}%`,
                    }}
                  >
                    <div className="w-full h-full rounded-full bg-neutral-900 border-2 border-[#916AFF] flex items-center justify-center shadow-sm">
                      <div className="w-2 h-2 rounded-full bg-[#916AFF]" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Y-Axis Labels */}
              <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[9px] text-neutral-500 font-medium py-2">
                <span>10K</span>
                <span>7.5K</span>
                <span>5K</span>
                <span>2.5K</span>
                <span>0</span>
              </div>
            </div>
          </div>

          {/* Floating Icon */}
          <div
            className="absolute bottom-24 right-4 w-12 h-12 rounded-xl flex items-center justify-center z-20 rotate-6 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105 shadow-2xl"
            style={{
              background:
                "linear-gradient(135deg, #575757 0%, #1a1a1a 50%, #2d2d2d 100%)",
              border: "1px solid rgba(255,255,255,0.15)",
              boxShadow:
                "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.3)",
            }}
          >
            <BarChart3
              size={22}
              strokeWidth={2}
              className="text-white drop-shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* --- CONTENT OVERLAY --- */}
      <div className="absolute inset-0 bg-linear-to-l from-neutral-900 via-neutral-900/80 to-transparent opacity-90" />

      {/* Text Content - RIGHT SIDE */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-[50%] p-8 md:p-12 flex flex-col justify-start items-end z-20 pointer-events-none">
        <div className="pointer-events-auto">
          <div className="relative z-10 text-right">
            <div className="pb-6 mb-6">
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2">
                Marketing internetowy
              </h3>
            </div>

            <div>
              <p className="text-neutral-400 text-sm md:text-base font-medium leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-500 max-w-lg ml-auto">
                Zaczynamy od rozmowy i analizy, żeby dobrze zrozumieć Twoją
                branżę i cele biznesowe. Na tej podstawie proponujemy konkretne
                rozwiązania i przedstawiamy plan działania, a Ty masz jasność,
                co robimy, dlaczego oraz w jaki sposób zwiększymy liczbę zapytań
                i klientów.
              </p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};
