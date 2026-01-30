"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Target, LayoutTemplate, Palette } from "lucide-react";
import { SplitRevealTitle } from "../ui/SplitRevealTitle";

const features = [
  {
    icon: Target,
    title: "Skupiamy się na skuteczności strony, a nie na samym wyglądzie",
    description:
      "Projektujemy stronę uwzględniając cel biznesowy i ścieżkę klienta, tak aby prowadzić go od momentu wejścia na witrynę do kontaktu lub zakupu. Dzięki dopracowanej strukturze ruch z SEO i kampanii reklamowych jest bardziej efektywny – użytkownik rozumie ofertę i wie, jaki kolejny krok wykonać.",
    color: "from-blue-500 to-cyan-400",
    visual: (
      <div className="relative w-full h-full bg-neutral-900 rounded-3xl border border-white/10 overflow-hidden flex flex-col p-6">
        {/* Abstract Funnel Visualization */}
        <div className="flex-1 flex flex-col items-center justify-center gap-4">
            <div className="w-full max-w-[200px] h-12 bg-white/10 rounded-lg flex items-center justify-between px-4">
                <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-white/30"></div>
                    <div className="w-2 h-2 rounded-full bg-white/30"></div>
                </div>
                <div className="text-[10px] text-white/30">Visitors</div>
            </div>
            <div className="w-2 bg-white/5 h-8"></div>
            <div className="w-full max-w-[160px] h-12 bg-white/10 rounded-lg flex items-center justify-between px-4">
                <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-400/50"></div>
                    <div className="w-2 h-2 rounded-full bg-blue-400/50"></div>
                </div>
                <div className="text-[10px] text-blue-400/50">Interest</div>
            </div>
            <div className="w-2 bg-white/5 h-8"></div>
            <div className="w-full max-w-[120px] h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-between px-4 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <div className="text-[10px] text-white font-bold">Conversion</div>
            </div>
        </div>
      </div>
    ),
  },
  {
    icon: LayoutTemplate,
    title: "Tworzymy makiety UX, które porządkują nawigację i treści",
    description:
      "Zanim powstanie projekt graficzny, tworzymy makiety UX, które porządkują strukturę strony i nawigację. Na tym etapie układamy treści oraz kluczowe elementy tak, aby poruszanie się po stronie było intuicyjne, a kontakt lub zakup łatwe do wykonania.",
    color: "from-purple-500 to-pink-500",
    visual: (
      <div className="relative w-full h-full bg-neutral-900 rounded-3xl border border-white/10 overflow-hidden p-6 flex flex-col">
        {/* Wireframe Mockup */}
        <div className="w-full h-8 border-b border-dashed border-white/20 mb-6 flex items-center gap-4">
            <div className="w-24 h-3 bg-white/10 rounded"></div>
            <div className="flex-1"></div>
            <div className="w-16 h-3 bg-white/10 rounded"></div>
        </div>
        <div className="flex gap-4 h-full">
            <div className="w-1/4 h-full bg-white/5 rounded border border-dashed border-white/10"></div>
            <div className="flex-1 flex flex-col gap-4">
                <div className="w-full h-32 bg-white/5 rounded border border-dashed border-white/10 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full border border-dashed border-white/20 flex items-center justify-center text-white/20">
                        Img
                    </div>
                </div>
                <div className="w-full h-4 bg-white/10 rounded"></div>
                <div className="w-2/3 h-4 bg-white/10 rounded"></div>
                <div className="mt-auto w-32 h-10 border border-dashed border-white/20 rounded flex items-center justify-center text-xs text-white/30">
                    CTA Button
                </div>
            </div>
        </div>
      </div>
    ),
  },
  {
    icon: Palette,
    title: "Dbamy o projekt graficzny, który wzmacnia wiarygodność",
    description:
      "Warstwę wizualną dopasowujemy do branży i wizerunku firmy, aby strona od pierwszych sekund była zachęcająca i wiarygodna. Czytelny układ i dopracowane detale wzmacniają przekaz oraz zachęcają do kontaktu.",
    color: "from-orange-500 to-red-500",
    visual: (
      <div className="relative w-full h-full bg-neutral-900 rounded-3xl border border-white/10 overflow-hidden">
        {/* Aesthetic Visual */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(249,115,22,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 p-6 flex flex-col justify-center items-center">
            <div className="relative w-48 h-48">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-red-500 rounded-2xl rotate-6 opacity-80 blur-sm"></div>
                <div className="absolute inset-0 bg-neutral-800 rounded-2xl border border-white/10 flex items-center justify-center z-10">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                            Brand
                        </div>
                        <div className="text-[10px] text-white/40 mt-2 uppercase tracking-widest">Premium Quality</div>
                    </div>
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-neutral-800 rounded-lg border border-white/10 z-20 flex items-center justify-center shadow-xl">
                    <div className="w-6 h-6 bg-white/10 rounded-full"></div>
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-10 bg-neutral-800 rounded-lg border border-white/10 z-20 flex items-center justify-center shadow-xl">
                    <div className="w-8 h-2 bg-green-500/50 rounded-full"></div>
                </div>
            </div>
        </div>
      </div>
    ),
  },
];

export const WhyHermerSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="py-24 bg-transparent relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <SplitRevealTitle
            line1="Dlaczego strony www"
            line2="Hermer są skuteczne?"
            className="text-white! text-4xl md:text-7xl mb-8"
          />
          <p className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Naszym celem jest tworzenie stron internetowych, które są czytelne,
            intuicyjne i przygotowane do działań promocyjnych, dzięki czemu
            łatwiej zamieniają ruch w zapytania oraz klientów.
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
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} p-0.5`}
                >
                  <div className="w-full h-full bg-neutral-900 rounded-[14px] flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
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
