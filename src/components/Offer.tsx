"use client";

import React, { useRef, useState, useEffect, memo } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { SplitRevealTitle } from "./ui/SplitRevealTitle";
import { LineReveal } from "./ui/LineReveal";
import { OfferCard, OfferItem } from "./cards/offer/OfferCard";
import { WebDesignCard } from "./cards/bento/WebDesignCard";
import { EcommerceCard } from "./cards/bento/EcommerceCard";
import { SeoCard } from "./cards/bento/SeoCard";
import { MarketingCard } from "./cards/bento/MarketingCard";
import { DashedCardWrapper } from "./cards/bento/DashedCardWrapper";

import { Phone } from "lucide-react";
import FluidButton from "./ui/FluidButton";

const OFFER_ITEMS: OfferItem[] = [];
const OFFER_SUBTITLE_LINES = [
  "Czasem krótka rozmowa pozwala zamienić",
  "mglisty pomysł w konkretny cel biznesowy.",
  "Sprawdź zakres naszych usług i powiedz nam,",
  "czego potrzebuje Twoja marka.",
];

// Memoize the content to prevent unnecessary re-renders of the heavy cards
const OfferContent = memo(({ isMobile }: { isMobile: boolean }) => {
  return (
    <>
      {/* Spacer for Desktop */}
      {!isMobile && <div className="w-[90vw] lg:w-[35vw] shrink-0"></div>}

      {/* Web Design Card - Double Width */}
      <div
        className={`shrink-0 ${isMobile ? "mb-8 w-full" : "w-[85vw] lg:w-[900px]"}`}
      >
        <DashedCardWrapper forceVisible={isMobile}>
          <WebDesignCard className="h-[500px] md:h-[600px]" />
        </DashedCardWrapper>
      </div>

      {/* Ecommerce Card - Single Width */}
      <div
        className={`shrink-0 ${isMobile ? "mb-8 w-full" : "w-[85vw] lg:w-[600px]"}`}
      >
        <DashedCardWrapper delay={0.1} forceVisible={isMobile}>
          <EcommerceCard className="h-[500px] md:h-[600px]" />
        </DashedCardWrapper>
      </div>

      {/* SEO Card - Single Width */}
      <div
        className={`shrink-0 ${isMobile ? "mb-8 w-full" : "w-[85vw] lg:w-[450px]"}`}
      >
        <DashedCardWrapper delay={0.2} forceVisible={isMobile}>
          <SeoCard className="h-[500px] md:h-[600px]" />
        </DashedCardWrapper>
      </div>

      {/* Marketing Card - Double Width */}
      <div
        className={`shrink-0 ${isMobile ? "mb-8 w-full" : "w-[85vw] lg:w-[900px]"}`}
      >
        <DashedCardWrapper delay={0.3} forceVisible={isMobile}>
          <MarketingCard className="h-[500px] md:h-[600px]" />
        </DashedCardWrapper>
      </div>

      {OFFER_ITEMS.map((item, index) => (
        <OfferCard
          key={item.id}
          item={item}
          index={index + 1}
          isMobile={isMobile}
        />
      ))}

      {/* Spacer for Desktop */}
      {!isMobile && <div className="w-[12vw] shrink-0"></div>}
    </>
  );
});

OfferContent.displayName = "OfferContent";

export const Offer: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [trackWidth, setTrackWidth] = useState(0);

  // Handle Resize and Mobile Detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (trackRef.current) {
        setTrackWidth(trackRef.current.scrollWidth);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);
    
    // Recalculate after a short delay to ensure children are rendered
    const timer = setTimeout(handleResize, 500);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
      clearTimeout(timer);
    };
  }, []);

  // Framer Motion Scroll Logic
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Calculate horizontal translation
  // We want to translate from 0 to -(trackWidth - viewportWidth)
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -Math.max(trackWidth - (typeof window !== "undefined" ? window.innerWidth : 0), 0)]
  );

  // Smooth out the horizontal scroll
  const springX = useSpring(x, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Fade out title based on progress
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="offer"
      className="relative z-20 h-auto lg:h-[400vh]"
    >
      <div className="relative lg:sticky lg:top-0 h-auto lg:h-screen lg:overflow-hidden flex flex-col pt-24 lg:pt-0">
        {/* Title Section */}
        <motion.div
          className="relative lg:absolute lg:top-16 lg:left-16 z-20 max-w-4xl px-6 lg:px-0 mb-12 lg:mb-0 pointer-events-none"
          style={{ opacity: isMobile ? 1 : titleOpacity }}
        >
          <SplitRevealTitle
            line1="Powiedz, czego"
            line2="potrzebujesz"
            className="text-white text-5xl md:text-8xl tracking-tighter"
          />
          <LineReveal
            lines={OFFER_SUBTITLE_LINES}
            className="text-neutral-400 max-w-xs md:max-w-sm text-xs md:text-sm uppercase tracking-wide leading-relaxed mt-8"
            once
          />
        </motion.div>

        {/* Scroll Track */}
        <div className="h-full flex items-center overflow-hidden lg:overflow-visible">
          <motion.div
            ref={trackRef}
            style={{ x: isMobile ? 0 : springX }}
            className={`flex ${
              isMobile
                ? "flex-col px-4 pb-20 w-full"
                : "items-center h-full px-[6vw] lg:px-[10vw] gap-[2vw] w-max will-change-transform"
            }`}
          >
            <OfferContent isMobile={isMobile} />
          </motion.div>
        </div>

        {/* Sticky Fluid Button */}
        <FluidButton
          label="Zadzwoń teraz"
          icon={<Phone size={20} className="text-white" strokeWidth={2} />}
          href="tel:+48123456789"
        />
      </div>
    </section>
  );
};