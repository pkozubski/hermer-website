"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { StatsGrid } from "@/components/shared/StatsGrid";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const PillImage = ({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) => (
  <span
    className={`inline-flex items-center align-middle mx-1.5 md:mx-2 ${className}`}
  >
    <span className="relative h-[1.1em] w-[2.2em] md:h-[1.1em] md:w-[2.4em] rounded-full overflow-hidden border border-white/20 shadow-sm inline-block transform translate-y-[0.15em]">
      <Image src={src} alt={alt} fill className="object-cover" sizes="100px" />
    </span>
  </span>
);

export const PillStatementSection = () => {
  const titleRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power4.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 88%",
              once: true,
            },
          },
        );
      }
    },
    { dependencies: [] },
  );

  return (
    <section className="bg-transparent py-24 md:py-32 px-4 md:px-8 relative">
      {/* Subtle Background Elements - Adjusted for Dark Mode */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#916AFF]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-30 pointer-events-none" />

      <div className="container mx-auto max-w-[1600px] relative z-10 px-4">
        <div
          ref={titleRef}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-display font-medium leading-[1.4] tracking-tight text-white max-w-5xl mx-auto">
            Tworzymy cyfrowe doświadczenia
            <PillImage src="/pill-experience.webp" alt="Digital Experience" />
            które zamieniają zwykłych użytkowników w lojalnych klientów. W
            Hermer łączymy bezkompromisową jakość kodu
            <PillImage
              src="/pill-code.webp"
              alt="Quality Code"
              className="ml-2"
            />
            z designem, który wyznacza standardy w Twojej branży
            <PillImage src="/pill-design.webp" alt="Leading Design" />.
          </h2>
        </div>

        <StatsGrid className="mt-20 md:mt-32" />
      </div>
    </section>
  );
};
