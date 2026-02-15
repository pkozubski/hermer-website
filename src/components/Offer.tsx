import React, { useRef, useState, useEffect, memo } from 'react';
import { SplitRevealTitle } from './ui/SplitRevealTitle';
import { LineReveal } from './ui/LineReveal';
import { WebDesignCard } from './cards/bento/WebDesignCard';
import { EcommerceCard } from './cards/bento/EcommerceCard';
import { SeoCard } from './cards/bento/SeoCard';
import { MarketingCard } from './cards/bento/MarketingCard';
import { DashedCardWrapper } from './cards/bento/DashedCardWrapper';

import { Phone } from 'lucide-react';
import FluidButton from './ui/FluidButton';

const OFFER_SUBTITLE_LINES = [
  'Czasem krótka rozmowa pozwala zamienić',
  'mglisty pomysł w konkretny cel biznesowy.',
  'Sprawdź zakres naszych usług i powiedz nam,',
  'czego potrzebuje Twoja marka.',
];

const OfferTitle = memo(({ isMobile }: { isMobile: boolean }) => (
  <div
    className={`shrink-0 flex flex-col justify-center select-none ${
      isMobile ? 'mb-16 w-full px-6' : 'w-[80vw] lg:w-[40vw] h-full mr-[4vw]'
    }`}
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
  </div>
));

OfferTitle.displayName = 'OfferTitle';

// Memoize the content to prevent unnecessary re-renders of the heavy cards
const OfferContent = memo(({ isMobile }: { isMobile: boolean }) => {
  return (
    <>
      {/* Web Design Card - Double Width */}
      <div
        className={`shrink-0 ${isMobile ? 'mb-8 w-full' : 'w-[85vw] lg:w-[900px] mr-[4vw]'}`}
      >
        <DashedCardWrapper forceVisible={isMobile}>
          <WebDesignCard className="h-[500px] md:h-[600px]" />
        </DashedCardWrapper>
      </div>

      {/* Ecommerce Card - Single Width */}
      <div
        className={`shrink-0 ${isMobile ? 'mb-8 w-full' : 'w-[85vw] lg:w-[600px] mr-[4vw]'}`}
      >
        <DashedCardWrapper delay={0.1} forceVisible={isMobile}>
          <EcommerceCard className="h-[500px] md:h-[600px]" />
        </DashedCardWrapper>
      </div>

      {/* SEO Card - Single Width */}
      <div
        className={`shrink-0 ${isMobile ? 'mb-8 w-full' : 'w-[85vw] lg:w-[450px] mr-[4vw]'}`}
      >
        <DashedCardWrapper delay={0.2} forceVisible={isMobile}>
          <SeoCard className="h-[500px] md:h-[600px]" />
        </DashedCardWrapper>
      </div>

      {/* Marketing Card - Double Width */}
      <div
        className={`shrink-0 ${isMobile ? 'mb-8 w-full' : 'w-[85vw] lg:w-[900px] mr-[4vw]'}`}
      >
        <DashedCardWrapper delay={0.3} forceVisible={isMobile}>
          <MarketingCard className="h-[500px] md:h-[600px]" />
        </DashedCardWrapper>
      </div>

      {/* Spacer for Desktop */}
      {!isMobile && <div className="w-[12vw] shrink-0"></div>}
    </>
  );
});

OfferContent.displayName = 'OfferContent';

export const Offer: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [trackWidth, setTrackWidth] = useState(0);
  const [trackX, setTrackX] = useState(0);

  // Debounced mobile check + ResizeObserver for track width
  useEffect(() => {
    let rafId: number | null = null;

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    const handleResize = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        checkMobile();
      });
    };

    checkMobile();
    window.addEventListener('resize', handleResize, { passive: true });

    // Use ResizeObserver for accurate track width measurement
    let ro: ResizeObserver | null = null;
    if (trackRef.current) {
      ro = new ResizeObserver(() => {
        if (trackRef.current) {
          setTrackWidth(trackRef.current.scrollWidth);
        }
      });
      ro.observe(trackRef.current);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (rafId !== null) cancelAnimationFrame(rafId);
      ro?.disconnect();
    };
  }, []);

  // Desktop horizontal translation based on section scroll progress
  useEffect(() => {
    if (isMobile) return;

    let rafId: number | null = null;

    const update = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const totalScrollable = Math.max(
        sectionRef.current.offsetHeight - viewportHeight,
        0,
      );
      const scrolled = Math.min(Math.max(-rect.top, 0), totalScrollable);
      const progress = totalScrollable > 0 ? scrolled / totalScrollable : 0;
      const maxShift = Math.max(trackWidth - window.innerWidth, 0);
      setTrackX(-maxShift * progress);
    };

    const onScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        update();
      });
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [isMobile, trackWidth]);

  return (
    <section
      ref={sectionRef}
      id="offer"
      className="relative z-20 h-auto lg:h-[400vh]"
    >
      <div className="relative lg:sticky lg:top-0 h-auto lg:h-screen lg:overflow-hidden flex flex-col pt-24 lg:pt-20">
        {/* Scroll Track */}
        <div className="h-full flex items-center overflow-hidden lg:overflow-visible">
          <div
            ref={trackRef}
            style={
              isMobile
                ? undefined
                : { transform: `translate3d(${trackX}px, 0, 0)` }
            }
            className={`flex ${
              isMobile
                ? 'flex-col pb-16 w-full'
                : 'items-center h-full px-[6vw] lg:px-[6vw] w-max will-change-transform'
            }`}
          >
            <OfferTitle isMobile={isMobile} />
            <OfferContent isMobile={isMobile} />
          </div>
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
