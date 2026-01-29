"use client";

import React from "react";
import { ArrowUpRight, Search } from "lucide-react";

export const SeoCard = () => {
  const [typedText, setTypedText] = React.useState("");
  const [showResults, setShowResults] = React.useState(false);
  const [cycle, setCycle] = React.useState(0);
  const searchPhrase = "agencja marketingowa";

  React.useEffect(() => {
    let charIndex = 0;
    setTypedText("");
    setShowResults(false);

    const typeInterval = setInterval(() => {
      if (charIndex < searchPhrase.length) {
        setTypedText(searchPhrase.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => setShowResults(true), 400);
        setTimeout(() => {
          setCycle((c) => c + 1);
        }, 4000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [cycle]);

  return (
    <a
      href="/oferta/pozycjonowanie"
      className="group relative h-[500px] rounded-[40px] overflow-hidden bg-neutral-900 hover:shadow-2xl hover:shadow-black/50 transition-all duration-700 flex flex-col justify-between border border-white/5"
    >
      {/* 1. TOP: Text Content */}
      <div className="relative z-20 p-8 md:p-10 flex flex-col items-start w-full">
        <div className="absolute top-8 right-8 md:top-10 md:right-10 w-10 h-10 rounded-full border border-white/10 text-neutral-400 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-neutral-800">
          <ArrowUpRight size={20} />
        </div>

        <div className="space-y-2 mb-4">
          <h3 className="text-3xl font-bold tracking-tight text-white leading-tight">
            SEO & Growth
          </h3>
          <p className="text-neutral-500 font-bold tracking-widest uppercase text-[10px]">
            Pozycjonowanie
          </p>
        </div>

        <p className="text-neutral-400 text-base font-medium leading-relaxed max-w-[90%] opacity-80">
          Wyprowadzimy Cię na szczyt wyników wyszukiwania.
        </p>
      </div>

      {/* 2. BOTTOM: Visual Container - Search Animation */}
      <div className="relative w-full flex-1 overflow-hidden rounded-b-[40px] flex items-center justify-center p-6 pb-8">
        <div className="w-full max-w-[280px] relative">
          {/* Search Bar */}
          <div className="bg-neutral-800 rounded-full shadow-lg border border-white/10 px-4 py-3 flex items-center gap-3 mb-4">
            <Search size={18} className="text-neutral-500 shrink-0" />
            <div className="flex-1 relative">
              <span className="text-white text-sm font-medium">
                {typedText}
              </span>
              <span className="inline-block w-0.5 h-4 bg-white animate-pulse ml-0.5 align-middle" />
            </div>
          </div>

          {/* Search Results */}
          <div
            className={`space-y-2 transition-all duration-500 ${showResults ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
          >
            {/* Result 1 - Your Brand (Highlighted) */}
            <div className="bg-neutral-800 rounded-xl p-3 shadow-md border border-white/10 transform scale-[1.02]">
              <div className="flex items-center gap-2 mb-1">
                <div
                  className="w-5 h-5 rounded flex items-center justify-center text-[9px] font-bold text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, #575757 0%, #1a1a1a 50%, #2d2d2d 100%)",
                  }}
                >
                  1
                </div>
                <div className="w-20 h-2.5 bg-[#916AFF] rounded" />
              </div>
              <div className="space-y-1 pl-7">
                <div className="w-full h-1.5 bg-neutral-600 rounded" />
                <div className="w-3/4 h-1.5 bg-neutral-700 rounded" />
              </div>
            </div>

            {/* Result 2 */}
            <div className="bg-neutral-800/60 rounded-xl p-3 border border-white/5 opacity-50">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-5 h-5 rounded bg-neutral-700 flex items-center justify-center text-[9px] font-bold text-neutral-400">
                  2
                </div>
                <div className="w-16 h-2.5 bg-neutral-700 rounded" />
              </div>
              <div className="space-y-1 pl-7">
                <div className="w-full h-1.5 bg-neutral-700 rounded" />
                <div className="w-2/3 h-1.5 bg-neutral-800 rounded" />
              </div>
            </div>

            {/* Result 3 */}
            <div className="bg-neutral-800/40 rounded-xl p-3 border border-white/5 opacity-30">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-5 h-5 rounded bg-neutral-700 flex items-center justify-center text-[9px] font-bold text-neutral-400">
                  3
                </div>
                <div className="w-14 h-2.5 bg-neutral-700 rounded" />
              </div>
              <div className="space-y-1 pl-7">
                <div className="w-full h-1.5 bg-neutral-700 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};
