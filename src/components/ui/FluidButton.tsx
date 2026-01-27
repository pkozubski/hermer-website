import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

interface FluidButtonProps {
  mode?: "inline";
  label?: string;
  className?: string;
  href?: string;
}

const FluidButton: React.FC<FluidButtonProps> = ({
  label = "Dowiedz się więcej",
  className = "",
  href,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainBlobRef = useRef<HTMLDivElement>(null);
  const trailBlobRef = useRef<HTMLDivElement>(null);
  const blueCircleRef = useRef<HTMLDivElement>(null);
  const blueTrailRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // --- SETUP ---
      const startY = 180;

      // 1. Measure natural width (Dynamic Size Calculation)
      // Set to auto state momentarily to measure
      gsap.set(mainBlobRef.current, { width: "auto" });
      gsap.set(textRef.current, {
        width: "auto",
        opacity: 1,
        x: 0,
        display: "block",
      });

      // Calculate final width (padding is included in offsetWidth)
      // We force a layout calc here
      const naturalWidth = mainBlobRef.current?.offsetWidth || 220;
      const finalWidth = Math.max(naturalWidth + 64, 56); // Ensure it doesn't shrink below initial size

      // 2. Initial States (Reset to collapsed)
      gsap.set([mainBlobRef.current, trailBlobRef.current], { y: startY });
      gsap.set(mainBlobRef.current, { width: 64 });
      gsap.set(trailBlobRef.current, { scale: 1 });

      gsap.set(blueCircleRef.current, {
        scale: 0.1,
        right: "50%",
        xPercent: 50,
      });

      gsap.set(blueTrailRef.current, {
        scale: 0.1,
        right: "50%",
        xPercent: 50,
      });

      gsap.set(textRef.current, { width: 0, opacity: 0, x: 15 });

      // --- TIMELINE ---
      const tl = gsap.timeline({ paused: true });

      // 1. Ruch w górę
      tl.to(mainBlobRef.current, {
        y: 0,
        duration: 1.2,
        ease: "elastic.out(2,.8)",
      })
        // Ogon - leci wolniej
        .to(
          trailBlobRef.current,
          {
            y: 0,
            duration: 1.5,
            ease: "elastic.out(2,.8)",
          },
          0,
        )

        // 2. Rozszerzanie (Expansion)
        .addLabel("expand", "-=1.5")
        .to(
          mainBlobRef.current,
          {
            width: finalWidth,
            duration: 1,
            ease: "back.inOut(2)",
          },
          "expand",
        )
        .to(
          trailBlobRef.current,
          {
            scale: 0,
            duration: 0.3,
          },
          0.15,
        )

        // 3. Plus (Blue Circle) powiększa się i przesuwa
        .to(
          blueCircleRef.current,
          {
            scale: 1,
            duration: 1,
            ease: "power2.out",
            right: "8px",
            xPercent: 0, // Reset translateX
          },
          "expand",
        )
        // Blue Trail
        .to(
          blueTrailRef.current,
          {
            ease: "power2.out",
            duration: 1,
            scale: 1,
          },
          "expand",
        )
        .to(
          blueTrailRef.current,
          {
            ease: "elastic.out(3,2)",
            duration: 0.7,
            right: "8px",
            xPercent: 0,
          },
          0.4,
        )

        // 4. Tekst
        .to(
          textRef.current,
          {
            width: "auto",
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "expand+=.5",
        )

        // Visual Polish (Blur background)
        .to(mainBlobRef.current, {
          backgroundColor: "#262626CC", // neutral-800 with 0.8 opacity
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        });

      // --- SCROLL TRIGGER ---
      // Use parent or container as trigger
      const triggerEl = containerRef.current?.parentElement || document.body;

      ScrollTrigger.create({
        trigger: triggerEl,
        start: "top 0", // Default to triggering when element enters viewport logic
        toggleActions: "play none none reverse",
        animation: tl,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [label]); // Re-calculate if label changes

  const Content = (
    <div className="flex items-center w-full h-full">
      {/* Text */}
      <span
        ref={textRef}
        className="whitespace-nowrap text-[17px] font-medium tracking-tight text-[#f5f5f7] opacity-0 translate-x-[15px] w-0 mx-2 block"
      >
        {label}
      </span>

      {/* Blue Trail */}
      <div
        ref={blueTrailRef}
        className="w-10 h-10 bg-[#8b5cf6] rounded-full absolute -z-10"
        style={{ right: "50%" }}
      />

      {/* Blue Circle (Icon) */}
      <div
        ref={blueCircleRef}
        className="w-10 h-10 bg-[#8b5cf6] rounded-full flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(139,92,246,0.3)] absolute"
        style={{ right: "50%" }}
      >
        <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] fill-white">
          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
        </svg>
      </div>
    </div>
  );

  return (
    // Sticky Wrapper
    <div
      ref={containerRef}
      className={`sticky bottom-10 w-full h-[100px] pointer-events-none z-[999] flex justify-center items-end ${className}`}
    >
      {/* Liquid Layer */}
      <div className="absolute bottom-0 w-[300px] h-full flex justify-center items-end opacity-100">
        {/* Blob Trail (Ogon) */}
        <div
          ref={trailBlobRef}
          className="bg-[#262626] w-12 h-12 rounded-full absolute bottom-0 z-10 translate-y-[180px]"
        />

        {/* Main Blob (Lider) - Pigułka */}
        <div
          ref={mainBlobRef}
          className="bg-[#262626] translate-y-[180px] w-[64px] h-[56px] p-2  rounded-[500px] absolute bottom-0 z-20 overflow-hidden flex items-center justify-center pointer-events-auto cursor-pointer border border-transparent"
        >
          {/* Content Wrapper */}
          {href ? (
            <Link href={href} className="w-full h-full block">
              {Content}
            </Link>
          ) : (
            Content
          )}
        </div>
      </div>
    </div>
  );
};

export default FluidButton;
