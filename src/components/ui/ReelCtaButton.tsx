"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react"; // Using standard arrow, or SVG from example

interface ReelCtaButtonProps {
  text?: string;
  href?: string;
  className?: string;
  baseColor?: string;
  textColor?: string;
  hoverColor?: string;
  hoverTextColor?: string;
  size?: "default" | "large" | "small";
}

export function ReelCtaButton({
  text = "About us",
  href = "/about",
  className = "",
  baseColor = "#916AFF",
  textColor = "#ffffff",
  hoverColor = "#ffffff",
  hoverTextColor = "#000000",
  size = "default",
}: ReelCtaButtonProps) {
  const [scale, setScale] = React.useState(1);
  const buttonRef = React.useRef<HTMLDivElement>(null);

  const isLarge = size === "large";
  const isSmall = size === "small";

  // Size-dependent styles
  const heightClass = isLarge ? "h-[64px]" : isSmall ? "h-[40px]" : "h-[48px]";
  const paddingClass = isLarge
    ? "pl-[64px] pr-[32px]"
    : isSmall
      ? "pl-[42px] pr-[20px]"
      : "pl-[48px] pr-[24px]";
  const textSizeClass = isLarge
    ? "text-[20px]"
    : isSmall
      ? "text-[14px]"
      : "text-[16px]";
  const dotPositionClass = isLarge
    ? "left-[24px]"
    : isSmall
      ? "left-[16px]"
      : "left-[18px]";
  const arrowPositionClass = isLarge
    ? "right-[24px]"
    : isSmall
      ? "right-[16px]"
      : "right-[18px]";
  const dotSizeClass = isLarge
    ? "w-[14px] h-[14px]"
    : isSmall
      ? "w-[8px] h-[8px]"
      : "w-[10px] h-[10px]";

  // Adjust dot centering offset if needed, but centering transform handles it.
  // Dot center X calculation for scale:
  // default: left 18 + width 10 / 2 = 23px
  // large: left 24 + width 14 / 2 = 31px
  // small: left 16 + width 8 / 2 = 20px
  const dotCenterX = isLarge ? 31 : isSmall ? 20 : 23;
  const halfHeight = isLarge ? 32 : isSmall ? 20 : 24;

  React.useEffect(() => {
    if (buttonRef.current) {
      const width = buttonRef.current.offsetWidth;
      const maxDist = Math.sqrt(
        Math.pow(width - dotCenterX, 2) + Math.pow(halfHeight, 2),
      );
      const newScale = Math.ceil(maxDist / 4) * 2.2; // Adjusted divisor for smaller dots
      setScale(newScale);
    }
  }, [text, size, dotCenterX, halfHeight]);

  return (
    <Link href={href} className={`inline-block ${className}`}>
      <motion.div
        ref={buttonRef}
        className={`group relative inline-flex items-center ${heightClass} ${paddingClass} rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden cursor-pointer select-none no-underline transition-shadow duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.15)]`}
        style={{
          backgroundColor: baseColor,
          color: textColor,
        }}
        initial="initial"
        whileHover="hover"
        animate="initial"
      >
        {/* 1. DOT (Background expander) */}
        <motion.span
          className={`absolute ${dotPositionClass} top-1/2 -translate-y-1/2 ${dotSizeClass} rounded-full z-0 pointer-events-none origin-center`}
          variants={{
            initial: {
              scale: 1,
              backgroundColor: hoverColor,
              transition: { duration: 0.5, ease: [0.35, 0, 0, 1] },
            },
            hover: {
              scale: scale,
              backgroundColor: hoverColor,
              transition: { duration: 0.8, ease: [0.35, 0, 0, 1] },
            },
          }}
        />

        {/* 2. TEXT */}
        <motion.span
          className={`relative z-10 font-medium uppercase ${textSizeClass} leading-none whitespace-nowrap`}
          variants={{
            initial: {
              x: 0,
              color: textColor,
              transition: { duration: 0.5, ease: [0.35, 0, 0, 1] },
            },
            hover: {
              x: isLarge ? -30 : isSmall ? -20 : -25, // Slide adjustment for different sizes
              color: hoverTextColor,
              transition: { duration: 0.8, ease: [0.35, 0, 0, 1] },
            },
          }}
        >
          {text}
        </motion.span>

        {/* 3. ARROW */}
        <motion.span
          className={`absolute ${arrowPositionClass} z-10 flex items-center justify-center`}
          variants={{
            initial: {
              x: 15,
              opacity: 0,
              color: hoverTextColor,
              transition: { duration: 0.5, ease: [0.35, 0, 0, 1] },
            },
            hover: {
              x: 0,
              opacity: 1,
              color: hoverTextColor,
              transition: {
                duration: 0.8,
                ease: [0.35, 0, 0, 1],
                delay: 0.05,
              },
            },
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={isLarge ? "20" : isSmall ? "14" : "16"}
            height={isLarge ? "20" : isSmall ? "14" : "16"}
            fill="none"
            viewBox="0 0 16 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M2.343 8h11.314m0 0L8.673 3.016M13.657 8l-4.984 4.984"
            />
          </svg>
        </motion.span>
      </motion.div>
    </Link>
  );
}
