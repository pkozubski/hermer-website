"use client";

import React, { useRef } from "react";
import { TrendingUp, Search, MousePointerClick } from "lucide-react";
import { SplitRevealTitle } from "../ui/SplitRevealTitle";

const features = [
  {
    icon: TrendingUp,
    title: "Zwiększ ruch organiczny",
    description:
      "SEO to inwestycja, która pracuje dla Ciebie 24/7. Wysokie pozycje w Google oznaczają stały dopływ nowych użytkowników bez konieczności płacenia za każde kliknięcie.",
    color: "from-blue-500 to-cyan-400",
    visual: (
      <div className="relative w-full h-full bg-neutral-900 rounded-3xl border border-white/10 overflow-hidden flex flex-col p-6 items-center justify-center">
         {/* Organic Traffic Graph */}
         <div className="w-full max-w-xs relative h-40">
             <div className="absolute bottom-0 left-0 w-full h-px bg-white/10"></div>
             <div className="absolute left-0 top-0 h-full w-px bg-white/10"></div>
             {/* Exponential Curve */}
             <svg className="absolute inset-0 w-full h-full overflow-visible">
                 <path 
                    d="M0 150 Q 150 150, 300 10" 
                    fill="none" 
                    stroke="url(#greenGradient)" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                 />
                 <defs>
                     <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                         <stop offset="0%" stopColor="#10B981" />
                         <stop offset="100%" stopColor="#34D399" />
                     </linearGradient>
                 </defs>
             </svg>
             <div className="absolute top-0 right-0 px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full border border-green-500/20">
                 + Organic
             </div>
         </div>
      </div>
    ),
  },
  {
    icon: Search,
    title: "Popraw widoczność",
    description:
      "Klienci ufają markom, które widzą na pierwszej stronie wyników wyszukiwania. Bycie liderem w Google buduje prestiż i zaufanie do Twojej firmy.",
    color: "from-purple-500 to-pink-500",
    visual: (
      <div className="relative w-full h-full bg-neutral-900 rounded-3xl border border-white/10 overflow-hidden p-6 flex items-center justify-center">
        {/* Search Result Visual */}
        <div className="w-full max-w-xs space-y-4">
             <div className="bg-white/10 rounded-lg p-4 border border-white/5 opacity-50 scale-95">
                 <div className="h-2 w-1/3 bg-white/10 rounded mb-2"></div>
                 <div className="h-2 w-2/3 bg-white/10 rounded"></div>
             </div>
             {/* The Winner */}
             <div className="bg-white/10 rounded-lg p-4 border border-[#916AFF]/50 shadow-[0_0_20px_rgba(145,106,255,0.2)] relative z-10 scale-105">
                 <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#916AFF] rounded-r"></div>
                 <div className="h-3 w-1/2 bg-[#916AFF] rounded mb-2"></div>
                 <div className="h-2 w-full bg-white/20 rounded mb-1"></div>
                 <div className="h-2 w-3/4 bg-white/20 rounded"></div>
             </div>
             <div className="bg-white/10 rounded-lg p-4 border border-white/5 opacity-30 scale-90">
                 <div className="h-2 w-1/3 bg-white/10 rounded mb-2"></div>
                 <div className="h-2 w-2/3 bg-white/10 rounded"></div>
             </div>
        </div>
      </div>
    ),
  },
  {
    icon: MousePointerClick,
    title: "Generuj wartościowe leady",
    description:
      "Ruch z SEO charakteryzuje się wysoką intencją zakupową. Trafiasz do ludzi, którzy już szukają Twojego produktu lub usługi, co zwiększa szansę na sprzedaż.",
    color: "from-orange-500 to-red-500",
    visual: (
      <div className="relative w-full h-full bg-neutral-900 rounded-3xl border border-white/10 overflow-hidden p-6 flex items-center justify-center">
         {/* Magnet Effect */}
         <div className="relative w-32 h-32 flex items-center justify-center">
             <div className="absolute inset-0 border-4 border-white/20 rounded-full animate-[ping_3s_infinite]"></div>
             <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.3)] z-10 relative">
                 <div className="text-2xl">🧲</div>
             </div>
             {/* Particles flying in */}
             <div className="absolute top-0 left-0 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
             <div className="absolute bottom-4 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse delay-75"></div>
             <div className="absolute top-1/2 right-0 w-2 h-2 bg-yellow-500 rounded-full animate-pulse delay-150"></div>
         </div>
      </div>
    ),
  },
];

export const SeoBenefitsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="py-24 bg-transparent relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <SplitRevealTitle
            line1="Dlaczego warto"
            line2="zainwestować w SEO?"
            className="text-white! text-4xl md:text-7xl mb-8"
          />
          <p className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Pozycjonowanie to maraton, nie sprint, ale nagroda na mecie jest warta wysiłku. 
            Buduj stabilny biznes oparty na ruchu organicznym.
          </p>
        </div>

        <div className="space-y-32">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Text Content */}
              <div className="flex-1 space-y-6">
                <div className="relative w-[88px] h-[88px] shrink-0">
                  <div
                    className="absolute inset-0 rounded-[24px]"
                    style={{
                      background:
                        'linear-gradient(135deg, #575757 0%, #1a1a1a 50%, #2d2d2d 100%)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      boxShadow:
                        '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.3)',
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <feature.icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  {feature.title}
                </h3>
                <p className="text-neutral-400 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Visual Content */}
              <div className="flex-1 w-full aspect-square md:aspect-[4/3]">
                {feature.visual}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
