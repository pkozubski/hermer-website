"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const BlogCTA: React.FC = () => {
  return (
    <section className="container mx-auto px-4 md:px-8 mt-32 mb-20">
      <div className="relative rounded-3xl overflow-hidden shadow-2xl group min-h-[500px] flex items-center justify-center">
        {/* 1. Generated Background Image */}
        <div
          className="absolute inset-0 z-0 transition-transform duration-1000 group-hover:scale-105"
          style={{
            backgroundImage: "url('/images/blog-cta-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* 2. Gradient Overlay / Mask */}
        <div className="absolute inset-0 z-10 bg-linear-to-r from-black/80 via-black/50 to-purple-900/30 mix-blend-multiply" />
        <div className="absolute inset-0 z-10 bg-linear-to-t from-black via-transparent to-black/40" />

        {/* 3. Noise Texture */}
        <div
          className="absolute inset-0 z-20 opacity-[0.07] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}
        />

        {/* Content */}
        <div className="relative z-30 max-w-3xl mx-auto text-center px-6 py-12 md:py-20">
          <span className="inline-block py-2 px-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-purple-300 font-mono text-xs font-bold uppercase tracking-[0.2em] mb-8">
            Współpraca
          </span>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-none text-white tracking-tighter drop-shadow-xl">
            Masz projekt w głowie? <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-purple-100 to-purple-400">
              Zrealizujmy go.
            </span>
          </h2>

          <p className="text-slate-300 text-lg md:text-xl mb-12 font-medium leading-relaxed max-w-xl mx-auto mix-blend-plus-lighter">
            Jesteśmy gotowi, by przenieść Twój biznes na wyższy poziom dzięki
            unikalnemu designowi i inżynierskiej precyzji.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/kontakt"
              className="group relative bg-[#916AFF] text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-[0_0_40px_rgba(145,106,255,0.6)] hover:bg-[#7e4fe3] transition-all duration-300 w-full sm:w-auto overflow-hidden ring-1 ring-white/10"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                Porozmawiajmy
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
            </Link>

            <Link
              href="/realizacje"
              className="group bg-white/5 backdrop-blur-sm text-white border border-white/10 px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 hover:border-white/30 transition-all duration-300 w-full sm:w-auto"
            >
              Nasze realizacje
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
