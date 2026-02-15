"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SplitRevealTitle } from "@/components/ui/SplitRevealTitle";
import targetImg from "@/assets/target.png";

gsap.registerPlugin(ScrollTrigger);

export const AboutVision = () => {
  const imageBlockRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!imageBlockRef.current) return;

      gsap.fromTo(
        imageBlockRef.current,
        { autoAlpha: 0, x: -50 },
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageBlockRef.current,
            start: "top 88%",
            once: true,
          },
        },
      );
    },
    { scope: imageBlockRef },
  );

  return (
    <section className="py-24 md:py-32 bg-transparent container mx-auto px-4 sm:px-8 lg:px-16">
      <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        {/* Image Side */}
        <div
          ref={imageBlockRef}
          className="lg:col-span-5 relative rounded-[2rem] aspect-4/5 group"
        >
          {/* Placeholder for real image */}
          <img
            src={targetImg.src}
            alt="Target"
            className="absolute inset-0 w-full h-full object-contain transition-transform duration-700"
          />

          {/* Floating badge */}
          <div className="absolute bottom-6 right-6 bg-neutral-900/90 backdrop-blur-md p-6 rounded-2xl shadow-xl flex flex-col items-center z-10 border border-white/10">
            <span className="text-4xl font-medium text-[#916AFF] mb-1 font-display tracking-tighter">
              100%
            </span>
            <span className="text-[10px] uppercase font-bold text-neutral-400 text-center leading-tight tracking-widest">
              Zaangażowania
              <br />w Twój projekt
            </span>
          </div>
        </div>

        {/* Content Side */}
        <div className="lg:col-span-7 relative">
          {/* Background decorative text */}
          <span className="absolute -top-20 -left-20 text-[12rem] font-display font-bold text-white/5 z-0 pointer-events-none select-none opacity-60 hidden xl:block">
            PASJA
          </span>

          <div className="relative z-10">
            <SplitRevealTitle
              line1="Pasja, która"
              line2="Napędza działanie"
              className="text-5xl md:text-8xl font-medium tracking-tighter text-white mb-12"
            />
            <div className="space-y-8 text-xl md:text-2xl text-neutral-400 leading-relaxed font-light max-w-2xl">
              <p>
                Tworzenie stron internetowych to dla nas coś więcej niż praca —
                to pasja. Nie interesuje nas przeciętność, sztampowe szablony
                czy rozwiązania &quot;na chwilę&quot;.
              </p>
              <p>
                Każdy projekt strony, sklepu wykonujemy we ścisłej współpracy
                (grafika, efektywność IT, pozycjonowanie) ze{" "}
                <span className="font-medium text-white">
                  zwrotem z inwestycji
                </span>
                .
              </p>
            </div>

            <div className="mt-16 border-l-2 border-[#916AFF] pl-8 py-2">
              <p className="font-medium text-white text-lg md:text-2xl italic leading-relaxed">
                &quot;To nie liczby nas definiują — to nasza dbałość o każdy detal i
                nieustanna chęć tworzenia stron, które działają i zachwycają.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
