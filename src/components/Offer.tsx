import React, { useEffect, useRef, useState } from "react";
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
  "Czasem wystarczy krótka rozmowa, żeby myśl",
  "„potrzebuję strony” przekuć w konkretny cel.",
  "Jak ma wyglądać profesjonalna strona internetowa?",
  "Do kogo ma trafiać i jaki ma dawać efekt?",
  "Chętnie uzgodnimy z Tobą wszystkie szczegóły.",
  "Sprawdź zakres naszej oferty i powiedz nam,",
  "czego oczekujesz.",
];

export const Offer: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  /* Title Opacity State */
  const [titleOpacity, setTitleOpacity] = useState(1);
  const trackRef = useRef<HTMLDivElement>(null);
  const [transformX, setTransformX] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Logic only for larger screens
      if (window.innerWidth < 1024) return;

      if (!sectionRef.current || !trackRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const sectionHeight = sectionRef.current.offsetHeight;

      const scrollDistance = -rect.top;
      const maxVerticalScroll = Math.max(sectionHeight - viewportHeight, 1);
      const progress = Math.min(
        Math.max(scrollDistance / maxVerticalScroll, 0),
        1,
      );

      const trackWidth = trackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      const maxHorizontalScroll = Math.max(trackWidth - viewportWidth, 0);

      setTransformX(maxHorizontalScroll * progress);

      // Fade out title based on progress
      // Fade out quicker so it's gone before cards overlap significantly
      const newOpacity = Math.max(0, 1 - progress * 5);
      setTitleOpacity(newOpacity);
    };

    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (mobile) {
        setTransformX(0);
        setTitleOpacity(1);
      } else {
        handleScroll();
      }
    };

    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="offer"
      className="relative z-20 h-auto lg:h-[420vh]"
    >
      <div className="relative lg:sticky lg:top-0 h-auto lg:h-screen lg:overflow-hidden flex flex-col pt-24 lg:pt-0">
        {/* Title Section - Sticky/Fixed logic varies */}
        <div
          className="relative lg:absolute lg:top-16 lg:left-16 z-20 max-w-4xl px-6 lg:px-0 mb-12 lg:mb-0 pointer-events-none transition-opacity duration-100"
          style={{ opacity: isMobile ? 1 : titleOpacity }}
        >
          <SplitRevealTitle
            line1="Powiedz, czego"
            line2="potrzebujesz"
            className="text-white! text-5xl sm:text-6xl lg:text-8xl tracking-tighter mb-4 lg:mb-8"
          />
          <LineReveal
            lines={OFFER_SUBTITLE_LINES}
            className="text-neutral-400 text-base lg:text-lg max-w-md leading-relaxed"
            once
          />
        </div>

        {/* Scroll Track */}
        <div
          ref={trackRef}
          className={`flex ${
            isMobile
              ? "flex-col px-4 pb-20 w-full"
              : "items-center h-full px-[6vw] lg:px-[10vw] gap-[2vw] w-max will-change-transform"
          }`}
          style={!isMobile ? { transform: `translateX(-${transformX}px)` } : {}}
        >
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
        </div>

        {/* Sticky Fluid Button - inside sticky container for proper behavior */}
        <FluidButton
          label="Zadzwoń teraz"
          icon={<Phone size={20} className="text-white" strokeWidth={2} />}
          href="tel:+48123456789"
        />
      </div>
    </section>
  );
};
