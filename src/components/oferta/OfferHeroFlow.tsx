"use client";
import React, { useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { WebDesignCard } from "../cards/bento/WebDesignCard";
import { EcommerceCard } from "../cards/bento/EcommerceCard";
import { SeoCard } from "../cards/bento/SeoCard";
import { MarketingCard } from "../cards/bento/MarketingCard";

gsap.registerPlugin(ScrollTrigger);

export const OfferHeroFlow = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  // Refs for items
  const webDesignRef = useRef<HTMLDivElement>(null);
  const ecommerceRef = useRef<HTMLDivElement>(null);
  const seoRef = useRef<HTMLDivElement>(null);
  const marketingRef = useRef<HTMLDivElement>(null);

  const headerRef = useRef<HTMLDivElement>(null);
  const subheaderRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const gridTitleRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        // Main Timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=150%", // Shortened from 250% to make it faster/snappier
            scrub: 0.5, // Reduced lag
            pin: true,
          },
        });

        const cards = [
          webDesignRef.current,
          ecommerceRef.current,
          seoRef.current,
          marketingRef.current,
        ];

        // 0. Initial States (Set via CSS ideally, but enforcing here)
        // Stacked on the right
        // We'll trust the CSS initial layout for start position

        // 0. Initial States
        // Cards are in the Right Column Stack.
        // We want to animate them to fill the screen in a grid.

        // Target Layout (Grid):
        // Container Padding: 5vw
        // Gap: 2vw
        // Top Margin: 15vh (below header if we keep it, but we are moving header out)

        // Let's assume we want a 2x2 grid centered on screen.
        // Card Width: ~43vw ( to fit 2 with gap)
        // Card Height: ~40vh (to fit 2 vertically)

        // Animation Steps:
        // 1. Header fades out.
        // 2. Cards move from stack to their grid positions.

        // 1. Text Animation (Simulated Scroll)
        // We use ease: "none" to simulate a direct 1:1 scroll feeling.
        // Both elements travel exactly 1 viewport height (100vh).

        // Hero Header: Moves UP and OUT (0 -> -100vh)
        tl.to(
          [headerRef.current, subheaderRef.current, buttonsRef.current],
          {
            y: -window.innerHeight, // Move up exactly 1 viewport
            opacity: 1,
            duration: 5.6, // Matches total timeline duration (Cards 5s + 0.6s stagger)
            ease: "none",
          },
          0,
        );

        // Grid Title: Moves UP and IN (100vh -> 0)
        if (gridTitleRef.current) {
          // Ensure initial state is set
          gsap.set(gridTitleRef.current, { y: window.innerHeight, opacity: 1 });

          tl.to(
            gridTitleRef.current,
            {
              y: 0,
              duration: 5.6, // Matches total timeline duration
              ease: "none",
            },
            0,
          );
        }

        // 2. Cards Animation (Float to Grid)
        // They move independently of the text 'scroll'.

        // Adjusted Grid Layout (Container Consistent):
        // Card Width: 48%
        // Card Height: 55vh
        // Left Col: 0
        // Right Col: 52%
        // Top Row: 30vh
        // Bottom Row: 90vh

        // Card 1: WebDesign (Wide - 63%)
        tl.to(
          webDesignRef.current,
          {
            left: "0%",
            top: "30vh",
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            width: "63%",
            height: "55vh",
            opacity: 1,
            zIndex: 50,
            duration: 5,
            ease: "power2.inOut",
          },
          0,
        );

        // Card 2: Ecommerce (Narrow - 35%)
        tl.to(
          ecommerceRef.current,
          {
            left: "65%",
            top: "30vh",
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            width: "35%",
            height: "55vh",
            zIndex: 50,
            duration: 5,
            ease: "power2.inOut",
          },
          0.2,
        );

        // Card 3: SEO (Narrow - 35%)
        tl.to(
          seoRef.current,
          {
            left: "0%",
            top: "90vh",
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            width: "35%",
            height: "55vh",
            zIndex: 50,
            opacity: 1,
            duration: 5,
            ease: "power2.inOut",
          },
          0.4,
        );

        // Card 4: Marketing (Wide - 63%)
        tl.to(
          marketingRef.current,
          {
            left: "37%",
            top: "90vh",
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            width: "63%",
            height: "55vh",
            zIndex: 50,
            opacity: 1,
            duration: 5,
            ease: "power2.inOut",
          },
          0.6,
        );
      });

      return () => {
        // cleanup
      };
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-transparent text-white pb-10 lg:pb-[45vh]"
    >
      {/* 
        This wrapper is huge to allow scrolling while pinned. 
        Actually ScrollTrigger 'pin' handles the spacing if we don't set height manually,
        but typically we want a track.
      */}

      <div className="h-screen w-full relative">
        <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative h-full flex flex-col lg:flex-row items-center justify-center">
          {/* LEFT COLUMN: Header */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-start z-0 h-full">
            <div ref={headerRef} className="will-change-transform">
              <h1 className="text-4xl sm:text-6xl lg:text-5xl xl:text-7xl 2xl:text-[5.5rem] leading-[1.05] tracking-tight font-display font-medium mb-6 text-white">
                Tworzymy strony,
              </h1>
              <h1 className="text-4xl sm:text-6xl lg:text-5xl xl:text-7xl 2xl:text-[5.5rem] leading-[1.05] tracking-tight font-display font-medium text-white mb-6">
                które sprzedają.
              </h1>
            </div>
            <p
              ref={subheaderRef}
              className="text-neutral-400 text-base sm:text-lg lg:text-xl max-w-lg mb-8 lg:mb-10 font-light leading-relaxed tracking-wide will-change-transform"
            >
              Strony, sklepy, SEO i marketing jako spójny system — design, UX i
              wynik.
            </p>
            <div ref={buttonsRef} className="flex gap-4 will-change-transform">
              <Link
                href="/kontakt"
                className="group relative px-6 py-3 sm:px-10 sm:py-5 bg-[#916AFF] text-white rounded-full font-bold text-sm sm:text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(145,106,255,0.5)] hover:scale-105 active:scale-95 flex items-center gap-3 overflow-hidden"
              >
                <span className="relative z-10">Darmowa wycena</span>
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#916AFF] transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN SPACER */}
          <div className="hidden lg:block w-1/2 h-full pointer-events-none" />

          {/* 
              CARDS - Relative to the container now.
          */}

          {/* Card 4: Marketing */}
          <div
            ref={marketingRef}
            className="hidden lg:block absolute w-[350px] lg:w-[450px] h-auto top-1/2 left-[75%] -translate-x-1/2 -translate-y-1/2 rotate-6 z-10 origin-center will-change-transform"
            style={{ aspectRatio: "3/4" }}
          >
            <MarketingCard className="shadow-2xl opacity-60 lg:opacity-100 h-full" />
          </div>

          {/* Card 3: SEO */}
          <div
            ref={seoRef}
            className="hidden lg:block absolute w-[350px] lg:w-[450px] h-auto top-1/2 left-[75%] -translate-x-1/2 -translate-y-1/2 rotate-3 z-20 origin-center will-change-transform"
            style={{ aspectRatio: "3/4" }}
          >
            <SeoCard className="shadow-2xl opacity-80 lg:opacity-100 h-full" />
          </div>

          {/* Card 2: Ecommerce */}
          <div
            ref={ecommerceRef}
            className="hidden lg:block absolute w-[350px] lg:w-[450px] h-auto top-1/2 left-[75%] -translate-x-1/2 -translate-y-1/2 -rotate-2 z-30 origin-center will-change-transform"
            style={{ aspectRatio: "3/4" }}
          >
            <EcommerceCard className="shadow-2xl h-full" />
          </div>

          {/* Card 1: Web Design */}
          <div
            ref={webDesignRef}
            className="hidden lg:block absolute w-[350px] lg:w-[450px] h-auto top-1/2 left-[75%] -translate-x-1/2 -translate-y-1/2 -rotate-6 z-40 origin-center will-change-transform"
            style={{ aspectRatio: "3/4" }}
          >
            <WebDesignCard className="shadow-2xl h-full" />
          </div>

          {/* GRID TITLE (Inside the container for alignment) */}
          <div
            ref={gridTitleRef} // Animate this wrapper (y: 100vh -> 0)
            className="hidden lg:flex absolute top-0 left-0 w-full h-screen items-start justify-between z-0 pt-24 pointer-events-none translate-y-[100vh]"
          >
            {/* Left Column: Title (aligns with left card column) */}
            <div className="text-left">
              <h2 className="flex flex-col text-5xl lg:text-8xl font-medium tracking-tighter text-white leading-[0.9]">
                <span>Kompleksowa</span>
                <span>Oferta</span>
              </h2>
            </div>

            {/* Right Column: Description (aligns with right card column) */}
            <div className="max-w-sm text-right pt-12 md:pt-16 lg:pt-20">
              <p className="text-neutral-400 text-xs md:text-sm uppercase tracking-widest leading-relaxed font-medium">
                Cztery filary twojego wzrostu.
                <br />
                Kompleksowe podejście zapewnia spójność i wynik.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 
         Extra space for scrolling? 
         If pin is active/true, scrolltrigger adds padding. 
         But we set end to +=250%, so it creates a scrollable area.
      */}

      {/* 
         MOBILE LAYOUT (Fallback)
         The above logic relies on matchMedia. 
         On mobile, we need a standard grid flow.
         We can use CSS to override the absolute positioning, 
         OR we conditionally render different layouts.
         CSS override is cleaner for SSR.
      */}
      <style jsx global>{`
        @media (max-width: 1023px) {
          .perspective-1000 {
            display: none; /* Hide stack on mobile */
          }
        }
        @media (min-width: 1024px) {
          .mobile-grid {
            display: none;
          }
        }
      `}</style>

      {/* Mobile Grid Only */}
      {/* Mobile Grid Only */}
      <div className="mobile-grid lg:hidden flex flex-col gap-8 px-4 pb-20 mt-[-20vh] relative z-20">
        <div className="mb-4">
          <h2 className="text-4xl xs:text-5xl font-medium tracking-tighter text-white leading-[0.9] mb-6">
            Kompleksowa
            <br />
            Oferta
          </h2>
          <p className="text-neutral-400 text-xs uppercase tracking-widest leading-relaxed font-medium">
            Cztery filary twojego wzrostu.
            <br />
            Kompleksowe podejście zapewnia spójność i wynik.
          </p>
        </div>
        <WebDesignCard className="h-[500px]" />
        <EcommerceCard className="h-[500px]" />
        <SeoCard className="h-[500px]" />
        <MarketingCard className="h-[500px]" />
      </div>
    </div>
  );
};
