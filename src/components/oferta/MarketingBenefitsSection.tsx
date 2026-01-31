"use client";

import React, { useRef } from "react";
import { Eye, Users, TrendingUp } from "lucide-react";
import { SplitRevealTitle } from "../ui/SplitRevealTitle";

const features = [
  {
    icon: Eye,
    title: "Zwiększ widoczność w sieci",
    description:
      "Sprawiamy, że Twoja marka jest widoczna tam, gdzie szukają jej klienci. Dzięki pozycjonowaniu i reklamom docieramy do osób aktywnie zainteresowanych Twoją ofertą.",
    color: "from-blue-500 to-cyan-400",
    visual: (
      <div className="relative w-full h-full bg-neutral-900 rounded-3xl border border-white/10 overflow-hidden flex flex-col p-6 items-center justify-center">
         {/* Visibility Graph */}
         <div className="w-full max-w-xs relative h-40">
             <div className="absolute bottom-0 left-0 w-full h-px bg-white/10"></div>
             <div className="absolute left-0 top-0 h-full w-px bg-white/10"></div>
             {/* Curve */}
             <svg className="absolute inset-0 w-full h-full overflow-visible">
                 <path 
                    d="M0 160 C 50 160, 100 100, 150 80 S 250 20, 320 0" 
                    fill="none" 
                    stroke="url(#blueGradient)" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                 />
                 <defs>
                     <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                         <stop offset="0%" stopColor="#3B82F6" />
                         <stop offset="100%" stopColor="#06B6D4" />
                     </linearGradient>
                 </defs>
             </svg>
             {/* Floating dots */}
             <div className="absolute top-0 right-0 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.8)]"></div>
         </div>
      </div>
    ),
  },
  {
    icon: Users,
    title: "Pozyskuj nowych klientów",
    description:
      "Ruch to nie wszystko. Nasze kampanie są nastawione na konwersję – zamianę odwiedzających w płacących klientów. Precyzyjne targetowanie minimalizuje przepalanie budżetu.",
    color: "from-purple-500 to-pink-500",
    visual: (
      <div className="relative w-full h-full bg-neutral-900 rounded-3xl border border-white/10 overflow-hidden p-6 flex items-center justify-center">
        {/* User Acquisition Visual */}
        <div className="relative grid grid-cols-2 gap-4">
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center border border-white/5">
                <Users className="text-white/20" size={24} />
            </div>
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center border border-white/5">
                <Users className="text-white/20" size={24} />
            </div>
            <div className="col-span-2 flex justify-center">
                 <div className="w-20 h-20 bg-[#916AFF]/20 rounded-full flex items-center justify-center border border-[#916AFF]/50 shadow-[0_0_30px_rgba(145,106,255,0.2)]">
                    <Users className="text-[#916AFF]" size={32} />
                    <div className="absolute -top-2 -right-2 bg-green-500 text-black text-[10px] font-bold px-2 py-0.5 rounded-full">+140%</div>
                 </div>
            </div>
        </div>
      </div>
    ),
  },
  {
    icon: TrendingUp,
    title: "Mierz efekty i ROI",
    description:
      "W marketingu internetowym wszystko jest mierzalne. Dostarczamy szczegółowe raporty, dzięki którym wiesz, ile kosztuje pozyskanie klienta i jaki zwrot generuje każda wydana złotówka.",
    color: "from-orange-500 to-red-500",
    visual: (
      <div className="relative w-full h-full bg-neutral-900 rounded-3xl border border-white/10 overflow-hidden p-6 flex items-center justify-center">
         {/* ROI Chart */}
         <div className="flex gap-4 items-end h-32">
             <div className="w-12 bg-white/5 rounded-t-lg h-[40%] relative group">
                 <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-white/30">Cost</div>
             </div>
             <div className="w-12 bg-gradient-to-t from-orange-500 to-red-500 rounded-t-lg h-[90%] relative shadow-[0_0_20px_rgba(249,115,22,0.3)]">
                 <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm font-bold text-white">ROI</div>
             </div>
         </div>
      </div>
    ),
  },
];

export const MarketingBenefitsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="py-24 bg-transparent relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <SplitRevealTitle
            line1="Dlaczego warto"
            line2="inwestować online?"
            className="text-white! text-4xl md:text-7xl mb-8"
          />
          <p className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Internet to najskuteczniejsze miejsce do skalowania biznesu. 
            Odpowiednia strategia pozwala precyzyjnie docierać do klientów i budować przewagę konkurencyjną.
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
