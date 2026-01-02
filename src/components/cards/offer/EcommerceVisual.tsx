import React from "react";
import { Search } from "lucide-react";

export const EcommerceVisual = () => (
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-gradient-to-br from-[#fff7ed] via-white to-[#fdf2f8]" />
    <div className="absolute -top-10 right-0 h-52 w-52 rounded-full bg-amber-200/50 blur-[100px] animate-float-slow" />
    <div className="absolute -bottom-12 left-0 h-52 w-52 rounded-full bg-rose-200/40 blur-[100px] animate-float-reverse" />

    <div className="relative h-full p-5 lg:p-6 flex flex-col gap-5">
      <div className="flex items-center justify-between bg-white/90 border border-amber-100 rounded-2xl px-4 py-3 shadow-sm">
        <div className="text-[10px] font-bold uppercase tracking-widest text-amber-600">
          Sklep online
        </div>
        <div className="flex items-center gap-2 text-[10px] text-slate-500">
          <Search size={12} className="text-amber-500" />
          smartwatch
        </div>
        <div className="text-[10px] bg-slate-900 text-white px-3 py-1 rounded-full">
          Koszyk 2
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 flex-1 min-h-0">
        <div className="rounded-2xl bg-white shadow-xl border border-slate-100 overflow-hidden flex flex-col">
          <div className="h-32 bg-gradient-to-br from-amber-200 to-rose-200" />
          <div className="p-3 flex-1 flex flex-col">
            <div className="h-3 w-24 rounded bg-slate-200" />
            <div className="mt-auto flex items-center justify-between">
              <span className="text-sm font-bold text-slate-900">489 zł</span>
              <span className="text-[10px] bg-amber-100 text-amber-700 px-2 py-1 rounded-full">
                Bestseller
              </span>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-white shadow-xl border border-slate-100 overflow-hidden flex flex-col">
          <div className="h-32 bg-gradient-to-br from-slate-200 to-slate-100" />
          <div className="p-3 flex-1 flex flex-col">
            <div className="h-3 w-20 rounded bg-slate-200" />
            <div className="mt-auto flex items-center justify-between">
              <span className="text-sm font-bold text-slate-900">329 zł</span>
              <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-1 rounded-full">
                24h
              </span>
            </div>
          </div>
        </div>
        <div className="col-span-2 rounded-2xl bg-white shadow-xl border border-slate-100 p-4 flex items-center justify-between">
          <div>
            <div className="text-xs text-slate-500 uppercase tracking-widest">
              Personalizacja
            </div>
            <div className="text-lg font-bold text-slate-900">
              +12% konwersji
            </div>
          </div>
          <div className="h-10 w-32 rounded-full bg-slate-900 text-white text-[10px] flex items-center justify-center">
            Dodaj do koszyka
          </div>
        </div>
      </div>

      <div className="absolute right-6 bottom-6 w-52 bg-slate-900 text-white rounded-2xl p-4 shadow-2xl border border-white/10">
        <div className="text-[10px] uppercase tracking-widest text-white/60">
          Zamówienie
        </div>
        <div className="mt-2 flex items-center justify-between text-sm font-semibold">
          <span>Razem</span>
          <span>1290 zł</span>
        </div>
        <button className="mt-3 w-full text-[10px] uppercase tracking-widest bg-white text-slate-900 py-2 rounded-full font-bold">
          Płatność
        </button>
      </div>
    </div>
  </div>
);
