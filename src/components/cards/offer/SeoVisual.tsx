import React from "react";
import { Search, TrendingUp } from "lucide-react";

export const SeoVisual = () => (
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-sky-50" />
    <div className="absolute -top-10 left-6 h-52 w-52 rounded-full bg-emerald-200/40 blur-[110px] animate-float-slow" />
    <div className="absolute -bottom-16 right-6 h-52 w-52 rounded-full bg-sky-200/40 blur-[120px] animate-float-reverse" />

    <div className="relative h-full p-5 lg:p-6 grid grid-cols-1 lg:grid-cols-[0.6fr_0.4fr] gap-4">
      <div className="rounded-2xl bg-white border border-emerald-100 shadow-lg overflow-hidden flex flex-col">
        <div className="p-4 border-b border-emerald-100 flex items-center gap-2">
          <Search size={14} className="text-emerald-500" />
          <span className="text-[10px] uppercase tracking-widest font-bold text-emerald-600">
            pozycjonowanie stron
          </span>
        </div>
        <div className="p-4 space-y-3">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] text-emerald-600 font-bold uppercase">
                #1 wynik
              </span>
              <span className="text-[10px] text-emerald-600 font-semibold">
                +62%
              </span>
            </div>
            <div className="h-2.5 w-4/5 rounded bg-emerald-200" />
            <div className="h-2 w-2/3 rounded bg-emerald-100 mt-2" />
          </div>
          <div className="rounded-xl border border-slate-100 bg-white p-3 opacity-60">
            <div className="h-2.5 w-2/3 rounded bg-slate-200 mb-2" />
            <div className="h-2 w-full rounded bg-slate-100" />
          </div>
          <div className="rounded-xl border border-slate-100 bg-white p-3 opacity-50">
            <div className="h-2.5 w-1/2 rounded bg-slate-200 mb-2" />
            <div className="h-2 w-2/3 rounded bg-slate-100" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 min-h-[240px]">
        <div className="rounded-2xl bg-slate-900 text-white p-4 shadow-xl">
          <div className="text-[10px] uppercase tracking-widest text-white/60">
            Widoczność
          </div>
          <div className="text-3xl font-bold mt-2">+182%</div>
          <div className="mt-4 h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full w-[82%] bg-emerald-400 rounded-full" />
          </div>
          <div className="mt-2 text-[10px] text-emerald-300">
            Top 3 frazy w 3 mies.
          </div>
        </div>
        <div className="rounded-2xl bg-white border border-slate-100 p-4 shadow-sm">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-slate-500">
            <span>Ruch organiczny</span>
            <span className="text-emerald-600 font-bold flex items-center gap-1">
              <TrendingUp size={12} />
              3.4x
            </span>
          </div>
          <svg
            viewBox="0 0 200 80"
            className="w-full h-16 mt-2"
            preserveAspectRatio="none"
          >
            <path
              d="M0 60 C 30 20, 60 70, 90 40 C 120 10, 150 60, 200 20"
              fill="none"
              stroke="#22c55e"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M0 60 C 30 20, 60 70, 90 40 C 120 10, 150 60, 200 20 L200 80 L0 80 Z"
              fill="url(#seoGrad)"
              opacity="0.4"
            />
            <defs>
              <linearGradient id="seoGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22c55e" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  </div>
);
