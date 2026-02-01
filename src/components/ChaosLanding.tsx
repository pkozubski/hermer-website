"use client";

import React, { useId, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(Flip, ScrollTrigger);
}

// --- Internal Components (Bez zmian) ---

const ChaosLogo = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`relative w-[80px] h-[32px] md:w-[98px] md:h-[40px] ${className}`}
    {...props}
  >
    <div className="absolute bg-linear-to-r from-[#555] h-[22px] md:h-[27px] left-[38px] md:left-[45.5px] rounded-[8px] md:rounded-[10px] to-[rgba(155,155,155,0)] top-[10px] md:top-[13px] w-[40px] md:w-[52px]" />
    <div className="absolute bg-[#555] left-0 rounded-[6px] md:rounded-[8px] w-[32px] h-[32px] md:w-[40px] md:h-[40px] top-0" />
  </div>
));
ChaosLogo.displayName = "ChaosLogo";

const ChaosMenu = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-8 h-8 md:w-10 md:h-10 bg-[#555] rounded-lg flex items-center justify-center p-2 md:p-2.5 shadow-lg ${className}`}
    {...props}
  >
    <div className="flex flex-col justify-between w-[20px] h-[12px] md:w-[27px] md:h-[16px]">
      <div className="h-[2px] w-full bg-linear-to-r from-[#333] via-[#464646] to-[#545454] rounded-full" />
      <div className="h-[2px] w-full bg-linear-to-r from-[#333] via-[#464646] to-[#545454] rounded-full" />
      <div className="h-[2px] w-full bg-linear-to-r from-[#333] via-[#464646] to-[#545454] rounded-full" />
    </div>
  </div>
));
ChaosMenu.displayName = "ChaosMenu";

const ChaosInput = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`relative ${className}`} {...props}>
    <div className="absolute -top-[14px] md:-top-[18px] right-0 text-[8px] md:text-[10px] font-extralight text-white font-sans tracking-wider">
      H1
    </div>
    <div className="relative w-full h-[28px] md:h-[35px] flex items-center p-[2px]">
      <div className="absolute inset-0 border border-[#9885F0]/30 rounded-[2px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[3px] h-[3px] border-t border-l border-[#9885F0]" />
      <div className="absolute top-0 right-0 w-[3px] h-[3px] border-t border-r border-[#9885F0]" />
      <div className="absolute bottom-0 left-0 w-[3px] h-[3px] border-b border-l border-[#9885F0]" />
      <div className="absolute bottom-0 right-0 w-[3px] h-[3px] border-b border-r border-[#9885F0]" />
      <div className="h-[16px] md:h-[20px] w-full rounded-full bg-linear-to-r from-[#555] to-transparent" />
    </div>
  </div>
));
ChaosInput.displayName = "ChaosInput";

const ChaosSkeletonList = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`flex flex-col gap-2 md:gap-3 w-full px-2 ${className}`}
    {...props}
  >
    <div className="h-[16px] md:h-[20px] w-[62%] rounded-full bg-linear-to-r from-[#555] to-transparent" />
    <div className="h-[16px] md:h-[20px] w-[52%] rounded-full bg-linear-to-r from-[#555] to-transparent" />
    <div className="h-[16px] md:h-[20px] w-[39%] rounded-full bg-linear-to-r from-[#555] to-transparent" />
  </div>
));
ChaosSkeletonList.displayName = "ChaosSkeletonList";

const ChaosFeatureCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    // ZMIANA: Gradient przeniesiony ze 'style' do 'className' (bg-[...])
    // Dzięki temu 'clearProps: "all"' z GSAP nie usunie tła.
    className={`h-[140px] md:h-[180px] rounded-[16px] md:rounded-[20px] bg-[linear-gradient(108deg,#555555_0%,rgba(38,38,38,0)_100%)] ${className}`}
    {...props}
  />
));
ChaosFeatureCard.displayName = "ChaosFeatureCard";

const ChaosButton = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`${className}`} {...props}>
    <button className="w-[120px] h-[32px] md:w-[150px] md:h-[40px] rounded-[6px] relative group overflow-hidden transition-all hover:scale-105 active:scale-95 cursor-pointer">
      <div className="absolute inset-0 bg-linear-to-r from-[#9b87f5] to-[#6f6699]" />
      <div className="absolute inset-0 shadow-[inset_0px_-1px_1px_0px_rgba(0,0,0,0.25)] rounded-[6px]" />
      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
    </button>
  </div>
));
ChaosButton.displayName = "ChaosButton";

// --- Component Config ---

type ChaosItemConfig = {
  id: string;
  top: string;
  left: string;
  rotate: number;
  scale: number;
};

const chaosConfig: ChaosItemConfig[] = [
  { id: "logo", top: "15%", left: "60%", rotate: -15, scale: 0.9 },
  { id: "menu", top: "12%", left: "90%", rotate: 20, scale: 1.0 },
  { id: "selection-input", top: "35%", left: "70%", rotate: 5, scale: 0.8 },
  { id: "skeleton-list", top: "55%", left: "80%", rotate: -8, scale: 0.9 },
  { id: "feature-card", top: "75%", left: "60%", rotate: 10, scale: 0.45 },
  { id: "action-button", top: "85%", left: "85%", rotate: -12, scale: 1.0 },
];

export const ChaosLanding = ({ className = "" }: { className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const visualPhoneRef = useRef<HTMLDivElement>(null);
  const invisiblePhoneRef = useRef<HTMLDivElement>(null);
  const activeElementsRef = useRef<HTMLDivElement>(null);

  const elementRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const targetRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const isHovered = useRef(false);

  const animateIn = (isMobile: boolean) => {
    const activeElements = Object.values(elementRefs.current).filter(
      Boolean,
    ) as Element[];

    gsap.killTweensOf(activeElements);
    if (visualPhoneRef.current) gsap.killTweensOf(visualPhoneRef.current);

    const state = Flip.getState(activeElements);

    if (visualPhoneRef.current) {
      gsap.to(visualPhoneRef.current, {
        x: isMobile ? "0%" : "0%",
        y: isMobile ? "0%" : "0%",
        duration: 0.8,
        ease: "power3.out",
        overwrite: true,
      });
    }

    chaosConfig.forEach((item) => {
      const el = elementRefs.current[item.id];
      const target = targetRefs.current[item.id];

      if (el && target) {
        Flip.fit(el, target, {
          scale: true,
          absolute: true,
          props: "rotation",
        });
      }
    });

    Flip.from(state, {
      duration: 0.8,
      ease: "power4.out",
      stagger: 0.05,
      absolute: true,
      scale: true,
    });
  };

  const animateOut = (isMobile: boolean) => {
    const activeElements = Object.values(elementRefs.current).filter(
      Boolean,
    ) as Element[];

    gsap.killTweensOf(activeElements);
    if (visualPhoneRef.current) gsap.killTweensOf(visualPhoneRef.current);

    if (visualPhoneRef.current) {
      gsap.to(visualPhoneRef.current, {
        x: isMobile ? "0%" : "200%",
        y: isMobile ? "100%" : "0%",
        duration: 0.6,
        ease: "power3.in",
        overwrite: true,
      });
    }

    const state = Flip.getState(activeElements);

    chaosConfig.forEach((item) => {
      const el = elementRefs.current[item.id];
      if (!el) return;

      gsap.set(el, {
        clearProps: "all",
      });

      gsap.set(el, {
        position: "absolute",
        top: item.top,
        left: item.left,
        rotation: item.rotate,
        scale: item.scale,
        xPercent: -50,
        yPercent: -50,
      });
    });

    Flip.from(state, {
      duration: 1,
      ease: "elastic.out(1, 0.75)",
      stagger: 0.03,
      absolute: true,
      scale: true,
    });
  };

  useLayoutEffect(() => {
    if (
      !containerRef.current ||
      !activeElementsRef.current ||
      !visualPhoneRef.current
    )
      return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      const setChaosPositions = () => {
        chaosConfig.forEach((item) => {
          const el = elementRefs.current[item.id];
          if (!el) return;

          gsap.set(el, {
            clearProps: "all",
          });

          gsap.set(el, {
            position: "absolute",
            top: item.top,
            left: item.left,
            rotation: item.rotate,
            scale: item.scale,
            xPercent: -50,
            yPercent: -50,
          });
        });
      };

      setChaosPositions();

      // Desktop
      mm.add("(min-width: 768px)", () => {
        gsap.set(visualPhoneRef.current, { x: "200%", y: "0%" });
      });

      // Mobile
      mm.add("(max-width: 767px)", () => {
        gsap.set(visualPhoneRef.current, { x: "0%", y: "100%" });

        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top 60%",
          onEnter: () => animateIn(true),
          onLeaveBack: () => animateOut(true),
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = () => {
    if (window.innerWidth < 768) return;
    if (isHovered.current || !containerRef.current) return;
    isHovered.current = true;

    animateIn(false);
  };

  const handleMouseLeave = () => {
    if (window.innerWidth < 768) return;
    if (!isHovered.current || !containerRef.current) return;
    isHovered.current = false;

    animateOut(false);
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-[600px] md:h-full bg-white/5 rounded-[40px] border border-[#333] overflow-hidden shadow-2xl group cursor-default flex items-center justify-center ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Debug/Info Text */}
      <div className="absolute top-8 left-8 md:top-16 md:left-16 z-10 max-w-md pointer-events-none select-none">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          <span className="text-transparent bg-clip-text bg-linear-to-b from-white via-white to-white/10 tracking-tighter">
            Zamieniamy chaos <br />
          </span>
          <span className="text-transparent bg-clip-text bg-linear-to-b from-white via-white to-white/10 tracking-tighter">
            w cyfrowy porządek
          </span>
        </h2>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          Hermer powstał z buntu przeciwko przeciętności. Widzieliśmy zbyt wiele
          pięknych stron, które nie sprzedawały, i systemy, których nikt nie
          umiał obsługiwać. Połączyliśmy inżynierską precyzję z artystyczną
          duszą.
        </p>
      </div>

      {/* 1. INVISIBLE PHONE (TARGET LAYOUT) */}
      <div
        ref={invisiblePhoneRef}
        className="absolute left-1/2 -translate-x-1/2 bottom-[-20px] origin-bottom md:origin-right md:left-auto md:translate-x-0 md:bottom-auto md:right-[15%] md:top-1/2 md:-translate-y-1/2 w-[300px] md:w-[375px] h-[650px] md:h-[812px] opacity-0 pointer-events-none z-0 scale-[0.6] md:scale-[0.45]"
      >
        <div className="relative w-full h-full flex flex-col px-6 pt-24 pb-8">
          <div className="flex items-center justify-between w-full mb-8">
            <div
              ref={(el) => {
                targetRefs.current["logo"] = el;
              }}
              className="relative w-[98px] h-[40px]"
            />
            <div
              ref={(el) => {
                targetRefs.current["menu"] = el;
              }}
              className="w-10 h-10 bg-[#555] rounded-lg"
            />
          </div>
          <div className="mt-8">
            <div
              ref={(el) => {
                targetRefs.current["selection-input"] = el;
              }}
              className="relative w-full h-[35px]"
            />
          </div>
          <div className="mt-8">
            <div
              ref={(el) => {
                targetRefs.current["skeleton-list"] = el;
              }}
              className="flex flex-col gap-3 w-full px-2"
            >
              <div className="h-[20px] w-full" />
              <div className="h-[20px] w-full" />
              <div className="h-[20px] w-full" />
            </div>
          </div>
          <div className="mt-8">
            <div
              ref={(el) => {
                targetRefs.current["feature-card"] = el;
              }}
              className="w-full h-[180px] rounded-[20px]"
            />
          </div>
          <div className="mt-auto pt-8 pb-4">
            <div
              ref={(el) => {
                targetRefs.current["action-button"] = el;
              }}
              className="w-[150px] h-[40px] rounded-[6px]"
            />
          </div>
        </div>
      </div>

      {/* 2. VISUAL PHONE SHELL */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[-20px] origin-bottom md:origin-right md:left-auto md:translate-x-0 md:bottom-auto md:right-[15%] md:top-1/2 md:-translate-y-1/2 w-[300px] md:w-[375px] h-[650px] md:h-[812px] z-10 pointer-events-none scale-[0.6] md:scale-[0.45]">
        {/* Usunięto translate-x-[200%] z klasy CSS na rzecz GSAP.set */}
        <div ref={visualPhoneRef} className="w-full h-full">
          <div className="relative w-full h-full bg-[#262626] rounded-[60px] shadow-[0px_0px_48px_10px_rgba(0,0,0,0.2),0px_4px_16px_8px_rgba(0,0,0,0.1)] flex flex-col">
            <div className="absolute inset-[-5px] border-[5px] border-[rgba(255,255,255,0.03)] rounded-[65px] pointer-events-none z-50" />
            <div className="absolute top-[21px] left-1/2 -translate-x-1/2 w-[120px] h-[40px] bg-black rounded-[100px] z-50" />
            <div className="flex-1 overflow-hidden rounded-[60px] bg-[#171717]" />
          </div>
        </div>
      </div>

      {/* 3. CHAOS ELEMENTS */}
      <div
        ref={activeElementsRef}
        className="absolute inset-0 pointer-events-none z-30 overflow-hidden"
      >
        <ChaosLogo
          ref={(el) => {
            elementRefs.current["logo"] = el;
          }}
          data-flip-id="logo"
          className="absolute will-change-transform"
        />
        <ChaosMenu
          ref={(el) => {
            elementRefs.current["menu"] = el;
          }}
          data-flip-id="menu"
          className="absolute will-change-transform"
        />
        <ChaosInput
          ref={(el) => {
            elementRefs.current["selection-input"] = el;
          }}
          data-flip-id="selection-input"
          className="absolute w-[240px] md:w-[327px] will-change-transform"
        />
        <ChaosSkeletonList
          ref={(el) => {
            elementRefs.current["skeleton-list"] = el;
          }}
          data-flip-id="skeleton-list"
          className="absolute w-[240px] md:w-[327px] will-change-transform"
        />
        <ChaosFeatureCard
          ref={(el) => {
            elementRefs.current["feature-card"] = el;
          }}
          data-flip-id="feature-card"
          className="absolute w-[240px] md:w-[327px] will-change-transform"
        />
        <ChaosButton
          ref={(el) => {
            elementRefs.current["action-button"] = el;
          }}
          data-flip-id="action-button"
          className="absolute will-change-transform"
        />
      </div>
    </div>
  );
};
