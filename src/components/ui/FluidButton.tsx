"use client";
import React, { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FluidButtonProps {
  mode?: "inline";
  label?: string;
  className?: string;
  href?: string;
  icon?: React.ReactNode;
  scrollThreshold?: number;
}

const activeConfig = {
  pillUp: { start: 0.01, duration: 1.6, ease: "elastic.out(1.2,.4)" },
  tailUp: { start: 0.02, duration: 1.6, ease: "elastic.out(1.2,.4)" },
  pillExpand: { start: 0.38, duration: 1, ease: "back.out(1.5)" },
  pillSquish: { start: 0.29, duration: 0.4, ease: "power2.out" },
  pillUnsquish: { start: 0.69, duration: 0.98, ease: "back.out(1.5)" },
  tailScale: { start: 0.19, duration: 0.47, ease: "power2.out" },
  iconScale: { start: 0, duration: 1.01, ease: "back.out(2)" },
  iconMove: { start: 0.25, duration: 1, ease: "power2.out" },
  iconSquish: { start: 0.27, duration: 0.34, ease: "power2.inOut" },
  iconUnsquish: { start: 0.61, duration: 0.66, ease: "elastic.out(1,0.5)" },
  textFade: { start: 0.56, duration: 0.5, ease: "power2.out" }
};

const FluidButton: React.FC<FluidButtonProps> = ({
  label = "Dowiedz się więcej",
  className = "",
  href,
  icon,
  scrollThreshold,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const yWrapperRef = useRef<HTMLDivElement>(null);
  const tailWrapperRef = useRef<HTMLDivElement>(null);
  const tailRef = useRef<HTMLDivElement>(null);
  const dynamicPillRef = useRef<HTMLElement>(null);
  const iconCircleRef = useRef<HTMLDivElement>(null);
  const iconBgRef = useRef<HTMLDivElement>(null);
  const pillTextRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 2. Initial States
      gsap.set([yWrapperRef.current, tailWrapperRef.current], { y: 180, opacity: 1, scale: 1, transformOrigin: "center center" });
      gsap.set(pillTextRef.current, { opacity: 0, x: 15, display: "block" });
      gsap.set(iconCircleRef.current, { scale: 0.1, right: "50%", xPercent: 50, top: "50%", yPercent: -50 });
      gsap.set(dynamicPillRef.current, { width: 64, height: 56, borderRadius: 28, y: 0 });
      gsap.set(iconBgRef.current, { width: 44, right: 0, top: 0, height: 44, borderRadius: 22 });

      // --- TIMELINE ---
      const masterTl = gsap.timeline({ paused: true });

      // 1. Ruch w górę
      masterTl.to(yWrapperRef.current, {
        y: 0,
        duration: activeConfig.pillUp.duration,
        ease: activeConfig.pillUp.ease,
      }, activeConfig.pillUp.start)
      .to(tailWrapperRef.current, {
        y: 0,
        duration: activeConfig.tailUp.duration,
        ease: activeConfig.tailUp.ease,
      }, activeConfig.tailUp.start);

      // 2. Rozszerzanie (Expansion) & Squish
      masterTl.to(dynamicPillRef.current, {
        width: "auto",
        duration: activeConfig.pillExpand.duration,
        ease: activeConfig.pillExpand.ease,
      }, activeConfig.pillExpand.start)
      .to(dynamicPillRef.current, {
        height: 48, y: -4, borderRadius: 24,
        duration: activeConfig.pillSquish.duration,
        ease: activeConfig.pillSquish.ease,
      }, activeConfig.pillSquish.start)
      .to(dynamicPillRef.current, {
        height: 56, y: 0, borderRadius: 28,
        duration: activeConfig.pillUnsquish.duration,
        ease: activeConfig.pillUnsquish.ease,
      }, activeConfig.pillUnsquish.start)
      .to(tailWrapperRef.current, {
        scale: 0,
        duration: activeConfig.tailScale.duration,
        ease: activeConfig.tailScale.ease,
      }, activeConfig.tailScale.start);

      // Visual Polish Toolkit (Blur background)
      masterTl.to(dynamicPillRef.current, {
        backgroundColor: "#262626CC",
        backdropFilter: "blur(16px)",
        duration: 0.5,
      }, activeConfig.pillExpand.start + 0.5);

      // 3. Plus (Blue Circle)
      masterTl.to(iconCircleRef.current, {
        scale: 1,
        duration: activeConfig.iconScale.duration,
        ease: activeConfig.iconScale.ease,
      }, activeConfig.iconScale.start)
      .to(iconCircleRef.current, {
        right: "8px",
        xPercent: 0,
        top: "50%",
        yPercent: -50,
        duration: activeConfig.iconMove.duration,
        ease: activeConfig.iconMove.ease,
      }, activeConfig.iconMove.start)
      .to(iconBgRef.current, {
        width: 50, // Squish in X direction when moving
        duration: activeConfig.iconSquish.duration,
        ease: activeConfig.iconSquish.ease,
      }, activeConfig.iconSquish.start)
      .to(iconBgRef.current, {
        width: 44, // Restore width
        duration: activeConfig.iconUnsquish.duration,
        ease: activeConfig.iconUnsquish.ease,
      }, activeConfig.iconUnsquish.start);

      // 4. Tekst
      masterTl.to(pillTextRef.current, {
        opacity: 1,
        x: 0,
        duration: activeConfig.textFade.duration,
        ease: activeConfig.textFade.ease,
      }, activeConfig.textFade.start);

      // --- SCROLL TRIGGER ---
      const triggerEl = containerRef.current?.parentElement || document.body;
      const startValue = scrollThreshold
        ? `top ${Math.round((1 - scrollThreshold) * 100)}%`
        : "top 75%";

      ScrollTrigger.create({
        trigger: triggerEl,
        start: startValue,
        toggleActions: "play none none reverse",
        animation: masterTl,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [label, scrollThreshold]);

  const blobContent = (
    <>
      <span
        ref={pillTextRef}
        className="text-[17px] leading-none font-medium tracking-tight text-[#f5f5f7] whitespace-nowrap pointer-events-none pl-[24px] pr-[64px]"
      >
        {label}
      </span>
      
      <div 
        ref={iconCircleRef} 
        className="absolute z-10 w-[44px] h-[44px] shrink-0 flex items-center justify-center top-1/2"
        style={{ right: "50%" }} // Important to keep its natural un-animated state aligned
      >
        <div 
          ref={iconBgRef} 
          className="absolute right-0 top-0 h-[44px] w-[44px] rounded-[22px] bg-[#8b5cf6] shadow-[0_4px_12px_rgba(139,92,246,0.3)]" 
        />
        <div className="relative z-10 flex items-center justify-center">
          {icon || (
            <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] fill-white relative z-10">
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
            </svg>
          )}
        </div>
      </div>
    </>
  );

  const isExternalOrSpecial = href && (href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("http"));

  return (
    <div
      ref={containerRef}
      className={`sticky bottom-10 w-full h-[100px] pointer-events-none z-[999] flex justify-center items-end ${className}`}
    >
      <div className="absolute bottom-0 left-0 w-full h-full flex justify-center">
        {/* Tail Pill */}
        <div ref={tailWrapperRef} className="absolute bottom-0 flex justify-center pointer-events-auto cursor-pointer">
          <div ref={tailRef} className="w-[56px] h-[56px] rounded-full bg-[#262626]" />
        </div>
        
        {/* Main Pill Wrapper for Y animation */}
        <div ref={yWrapperRef} className="absolute bottom-0 flex justify-center pointer-events-auto cursor-pointer">
          {href ? (
            isExternalOrSpecial ? (
              <a
                href={href}
                ref={dynamicPillRef as React.Ref<HTMLAnchorElement>}
                className="bg-[#262626] relative flex items-center justify-start overflow-hidden no-underline border border-transparent"
              >
                {blobContent}
              </a>
            ) : (
              <Link
                href={href}
                ref={dynamicPillRef as React.Ref<HTMLAnchorElement>}
                className="bg-[#262626] relative flex items-center justify-start overflow-hidden no-underline border border-transparent"
              >
                {blobContent}
              </Link>
            )
          ) : (
            <div
              ref={dynamicPillRef as React.Ref<HTMLDivElement>}
              className="bg-[#262626] relative flex items-center justify-start overflow-hidden border border-transparent"
            >
              {blobContent}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { FluidButton };
export default FluidButton;

