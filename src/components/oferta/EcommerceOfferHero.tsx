"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { ReelCtaButton } from "../ui/ReelCtaButton";
import { SkeletonLayout } from "./SkeletonLayout";
import gsap from "gsap";

export const EcommerceOfferHero: React.FC = () => {
  useEffect(() => {
    // GSAP Hero Animations
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    const heroElements = document.querySelectorAll(".gsap-hero");
    if (heroElements.length > 0) {
      tl.fromTo(
        heroElements,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.8 },
        "-=1",
      );
    }
  }, []);

  return (
    <section className="w-full px-4 sm:px-8 lg:px-8 pt-40 pb-20 overflow-hidden bg-transparent isolate relative min-h-[85vh] flex items-center">
      <div className="container mx-auto max-w-[1200px] text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-[#916AFF]"></span>
          E-commerce Solutions
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-5xl xl:text-7xl 2xl:text-[5.5rem] leading-[1.05] text-white tracking-tight font-display font-medium mb-8">
          Sprzedawaj online <br className="hidden md:block" />
          bez granic.
        </h1>

        <p className="text-neutral-400 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed tracking-wide">
          Tworzymy sklepy internetowe, które zamieniają odwiedzających w
          lojalnych klientów. Wydajność, automatyzacja i design skrojony pod
          sprzedaż.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <ReelCtaButton text="Wyceń sklep" href="#pricing" size="large" />
          <Link
            href="#projects"
            className="px-8 py-4 sm:py-5 bg-transparent border border-white/20 text-white rounded-full font-semibold text-base transition-all duration-300 hover:border-white hover:bg-white/5 flex items-center gap-3"
          >
            Case studies
          </Link>
        </div>

        {/* Professional UI Visualization */}
        <div className="mt-20 relative mx-auto w-full perspective-1000 hidden">
          <SkeletonLayout />
        </div>
      </div>
    </section>
  );
};
