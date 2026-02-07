import React, { memo, useEffect, useRef, useState, useCallback } from 'react';
import {
  Code2,
  Palette,
  Search,
  BarChart3,
  Smartphone,
  Layout,
  ShoppingCart,
  MessageSquare,
  Star,
} from 'lucide-react';
import { CmsCard } from './cards/CmsCard';
import { SeoCard } from './cards/SeoCard';
import { ResponsivenessCard } from './cards/ResponsivenessCard';
import { CardWheelHorizontal } from './CardWheelHorizontal';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from 'framer-motion';
import { CardWheel } from './CardWheel';
import HeroSquiggle from './HeroSquiggle';
import { WebDevCard } from './cards/WebDevCard';
import { EcommerceCard } from './cards/EcommerceCard';
import { SocialMediaCard } from './cards/SocialMediaCard';
import { MarketingCard } from './cards/MarketingCard';
import { UiUxCard } from './cards/UiUxCard';
import { ReelCtaButton } from './ui/ReelCtaButton';

// Data for the cards to be rendered - Monochrome Themes
// Data for the cards to be rendered - Monochrome Themes
const CARDS_DATA = [
  {
    id: 'code',
    theme: 'blue',
    icon: Code2,
    title: 'Development',
    content: (
      <div className="w-full flex justify-center h-[260px] overflow-visible relative z-10">
        <div className="scale-[0.55] origin-top transform-gpu">
          <WebDevCard />
        </div>
      </div>
    ),
  },
  {
    id: 'design',
    theme: 'purple',
    icon: Palette,
    title: 'UI/UX Design',
    content: (
      <div className="w-full flex justify-center h-[260px] overflow-visible relative z-10">
        <div className="scale-[0.55] origin-top transform-gpu">
          <UiUxCard />
        </div>
      </div>
    ),
  },
  {
    id: 'mobile',
    theme: 'blue',
    icon: Smartphone,
    title: 'Responsywność',
    content: (
      <div className="w-full flex justify-center h-[260px] overflow-visible relative z-10">
        <div className="scale-[0.55] origin-top transform-gpu">
          <ResponsivenessCard />
        </div>
      </div>
    ),
  },
  {
    id: 'seo',
    theme: 'green',
    icon: Search,
    title: 'SEO & Pozycjonowanie',
    content: (
      <div className="w-full flex justify-center h-[260px] overflow-visible relative z-10">
        <div className="scale-[0.55] origin-top transform-gpu">
          <SeoCard />
        </div>
      </div>
    ),
  },
  {
    id: 'marketing',
    theme: 'orange',
    icon: BarChart3,
    title: 'Marketing',
    content: (
      <div className="w-full flex justify-center h-[260px] overflow-visible relative z-10">
        <div className="scale-[0.55] origin-top transform-gpu">
          <MarketingCard />
        </div>
      </div>
    ),
  },
  {
    id: 'cms',
    theme: 'purple',
    icon: Layout,
    title: 'System CMS',
    content: (
      <div className="w-full flex justify-center h-[260px] overflow-visible relative z-10">
        <div className="scale-[0.55] origin-top transform-gpu">
          <CmsCard />
        </div>
      </div>
    ),
  },
  {
    id: 'ecommerce',
    theme: 'pink',
    icon: ShoppingCart,
    title: 'E-commerce',
    content: (
      <div className="w-full flex justify-center h-[260px] overflow-visible relative z-10">
        <div className="scale-[0.55] origin-top transform-gpu">
          <EcommerceCard />
        </div>
      </div>
    ),
  },
  {
    id: 'social',
    theme: 'orange',
    icon: MessageSquare,
    title: 'Social Media',
    content: (
      <div className="w-full flex justify-center h-[260px] overflow-visible relative z-10">
        <div className="scale-[0.55] origin-top transform-gpu">
          <SocialMediaCard />
        </div>
      </div>
    ),
  },
];

const LEFT_COLUMN_CARDS = [
  CARDS_DATA[0],
  CARDS_DATA[2],
  CARDS_DATA[4],
  CARDS_DATA[6],
];
const RIGHT_COLUMN_CARDS = [
  CARDS_DATA[1],
  CARDS_DATA[3],
  CARDS_DATA[5],
  CARDS_DATA[7],
];

// CountUp Component - uses single rAF with ref to avoid re-renders during animation
const CountUp: React.FC<{
  end: number;
  duration?: number;
  delay?: number;
  suffix?: string;
}> = ({ end, duration = 2000, delay = 0, suffix = '' }) => {
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number | null = null;
    const el = spanRef.current;
    if (!el) return;

    const easeOutExpo = (x: number): number =>
      x === 1 ? 1 : 1 - Math.pow(2, -10 * x);

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const value = Math.floor(easeOutExpo(progress) * end);
      el.textContent = `${value}${suffix}`;
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    const timeoutId = window.setTimeout(() => {
      animationFrameId = requestAnimationFrame(animate);
    }, delay);

    return () => {
      window.clearTimeout(timeoutId);
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [end, duration, delay, suffix]);

  return <span ref={spanRef} className="tabular-nums">0{suffix}</span>;
};

const HERO_TEXTS = [
  'Strona www i marketing, które pracują na Twoją markę',
  'Zamieniamy chaos w cyfrowy porządek',
  'Buduj z nami lepszą widoczność firmy w Internecie',
];

const HERO_SPACER_TEXT = HERO_TEXTS.reduce((longest, current) =>
  current.length > longest.length ? current : longest
);

const MaskedRevealText = memo(function MaskedRevealText({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) {
  const words = text.split(' ');

  return (
    <span className="inline-block">
      {words.map((word, wordIndex) => (
        <span
          key={wordIndex}
          className="inline-block whitespace-nowrap mr-[0.25em] overflow-hidden align-bottom pb-1"
        >
          <motion.span
            className="inline-block"
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              delay: delay + wordIndex * 0.08,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
});

const RotatingHeroHeadline = memo(function RotatingHeroHeadline() {
  const [textIndex, setTextIndex] = useState(0);
  const headingClassName =
    'w-full mx-auto text-center text-4xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-[5.25rem] leading-[1.05] text-white tracking-tight font-display font-medium [text-wrap:balance]';

  useEffect(() => {
    let intervalId: number | null = null;
    const timeoutId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        setTextIndex((prev) => (prev + 1) % HERO_TEXTS.length);
      }, 5000);
    }, 3000);

    return () => {
      window.clearTimeout(timeoutId);
      if (intervalId) {
        window.clearInterval(intervalId);
      }
    };
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div className="relative w-[min(92vw,1000px)] mx-auto">
        <h1 className={`${headingClassName} invisible`} aria-hidden="true">
          {HERO_SPACER_TEXT}
        </h1>
        <AnimatePresence mode="wait">
          <motion.h1
            key={textIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`${headingClassName} absolute inset-0`}
          >
            <MaskedRevealText text={HERO_TEXTS[textIndex]} delay={0.1} />
          </motion.h1>
        </AnimatePresence>
      </div>
    </div>
  );
});

export const Hero: React.FC<{ onAnimationComplete?: () => void }> = ({
  onAnimationComplete,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onAnimationComplete) {
        onAnimationComplete();
      }
    }, 2200);

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  const { scrollY } = useScroll();
  const leftColumnY = useTransform(scrollY, [0, 1000], [0, -100]);
  const rightColumnY = useTransform(scrollY, [0, 1000], [0, 100]);

  /* Removed scroll effects for classic landing behavior */

  return (
    <motion.section
      className="w-full px-4 sm:px-8 lg:px-8 overflow-visible bg-transparent isolate flex items-center relative h-auto min-h-screen py-20 lg:py-0 z-0 text-center"
      style={{ contain: 'layout style' }}
    >
      {/* Animated Squiggles */}
      <HeroSquiggle />
      {/* Gradient blobs - CSS-only animation for GPU compositing */}
      <div
        className="pointer-events-none absolute -top-24 -right-20 sm:-top-28 sm:-right-24 lg:-top-32 lg:-right-28 h-[300px] w-[300px] sm:h-[420px] sm:w-[420px] lg:h-[520px] lg:w-[520px] rounded-full blur-[160px] z-0 opacity-40 animate-[hero-blob-1_9s_ease-in-out_infinite] transform-gpu will-change-transform"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, rgba(145,106,255,0.42) 0%, rgba(82,216,234,0.24) 45%, rgba(23,23,23,0) 75%)',
        }}
      />
      <div
        className="pointer-events-none absolute top-6 right-8 sm:top-4 sm:right-10 lg:top-8 lg:right-16 h-[90px] w-[90px] sm:h-[120px] sm:w-[120px] rounded-full blur-[90px] z-0 opacity-[0.22] animate-[hero-blob-2_6s_ease-in-out_infinite] transform-gpu will-change-transform"
        style={{
          background:
            'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(145,106,255,0.05) 70%, rgba(23,23,23,0) 100%)',
        }}
      />

      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center relative w-full z-10 perspective-[2000px]">
        {/* Left Column */}
        <motion.div
          className="hidden lg:block col-span-3 w-[320px] xl:w-full lg:-mr-20 xl:mr-0 justify-self-end h-[650px] relative overflow-hidden select-none opacity-0 animate-[fade-in_1s_ease-out_1.5s_forwards]"
          style={{
            maskImage:
              'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
            transform: 'perspective(1500px) rotateY(12deg) translateZ(-20px)',
            transformStyle: 'preserve-3d',
            willChange: 'transform',
            y: leftColumnY,
          }}
        >
          <div className="absolute inset-0 rounded-[40px] bg-neutral-900/30 pointer-events-none z-0" />
          <div className="absolute inset-x-0 w-full h-full z-10">
            <CardWheel cards={LEFT_COLUMN_CARDS} direction="up" />
          </div>
        </motion.div>

        {/* Center Column: Text Content */}
        <div className="col-span-1 lg:col-span-6 flex flex-col items-center text-center z-20 relative pb-0 px-4 pt-12 lg:pt-32">
          <div className="mb-6 sm:mb-8 pb-4 w-full flex justify-center">
            <RotatingHeroHeadline />
          </div>

          <p className="text-neutral-400 text-base sm:text-lg lg:text-xl max-w-lg mb-8 lg:mb-10 font-light leading-relaxed animate-[text-reveal_0.8s_cubic-bezier(0.16,1,0.3,1)_0.8s_backwards] tracking-wide">
            Zajmiemy się Twoją stroną kompleksowo —{' '}
            <br className="hidden sm:block" />
            od przygotowania koncepcji po wdrożenie gotowego projektu.
          </p>

          <div className="animate-[text-reveal_0.8s_cubic-bezier(0.16,1,0.3,1)_1s_backwards]">
            <ReelCtaButton
              text="Rozpocznij projekt"
              href="/kontakt"
              className=""
              size="large"
            />
          </div>

          <div className="w-full max-w-xs h-px bg-white/10 mt-10 lg:mt-16 mb-8 lg:mb-10 animate-[text-reveal_0.8s_cubic-bezier(0.16,1,0.3,1)_1.2s_backwards]"></div>

          <div className="flex flex-nowrap justify-center gap-2 sm:gap-8 lg:gap-16 w-full animate-[text-reveal_0.8s_cubic-bezier(0.16,1,0.3,1)_1.4s_backwards]">
            <div className="flex flex-col items-center group cursor-default">
              <span className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-white flex items-center tracking-tight mb-2">
                <CountUp end={700} delay={2200} />
                <span className="text-[#916AFF] text-lg sm:text-2xl lg:text-3xl align-top ml-1">
                  +
                </span>
              </span>
              <span className="text-neutral-500 text-[8px] sm:text-xs lg:text-base relative z-10">
                zrealizowanych projektów
              </span>
            </div>

            <div className="flex flex-col items-center group cursor-default">
              <span className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-white flex items-center tracking-tight mb-2">
                <CountUp end={98} delay={2400} />
                <span className="text-[#916AFF] text-lg sm:text-2xl lg:text-3xl align-top ml-1">
                  %
                </span>
              </span>
              <div className="flex gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    size={12}
                    fill="#916AFF"
                    className="text-[#916AFF]"
                  />
                ))}
              </div>
              <span className="text-neutral-500 text-[8px] sm:text-xs lg:text-base">
                zadowolonych klientów
              </span>
            </div>

            <div className="flex flex-col items-center group cursor-default">
              <span className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-white flex items-center tracking-tight mb-2">
                <CountUp end={15} delay={2600} />
                <span className="text-[#916AFF] text-lg sm:text-2xl lg:text-3xl align-top ml-1">
                  +
                </span>
              </span>
              {/* Avatar Stack */}
              <div className="flex -space-x-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-neutral-800 border-2 border-neutral-900"></div>
                <div className="w-6 h-6 rounded-full bg-neutral-700 border-2 border-neutral-900"></div>
                <div className="w-6 h-6 rounded-full bg-neutral-600 border-2 border-neutral-900"></div>
                <div className="w-6 h-6 rounded-full bg-[#1A1A1A] border-2 border-neutral-900"></div>
              </div>
              <span className="text-neutral-500 text-[8px] sm:text-xs lg:text-base">
                ekspertów w zespole
              </span>
            </div>
          </div>

          <div
            className="lg:hidden w-[calc(100%+2rem)] sm:w-[calc(100%+4rem)] -mx-4 sm:-mx-8 mt-8 lg:mt-12 overflow-hidden relative animate-[text-reveal_0.8s_cubic-bezier(0.16,1,0.3,1)_1.6s_backwards] h-[400px]"
            style={{
              maskImage:
                'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              WebkitMaskImage:
                'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            }}
          >
            <CardWheelHorizontal cards={CARDS_DATA} direction="left" />
          </div>
        </div>

        {/* Right Column */}
        <motion.div
          className="hidden lg:block col-span-3 w-[320px] xl:w-full lg:-ml-20 xl:ml-0 justify-self-start h-[650px] relative overflow-hidden select-none opacity-0 animate-[fade-in_1s_ease-out_1.5s_forwards]"
          style={{
            maskImage:
              'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
            transform: 'perspective(1500px) rotateY(-12deg) translateZ(-20px)',
            transformStyle: 'preserve-3d',
            willChange: 'transform',
            y: rightColumnY,
          }}
        >
          <div className="absolute inset-0 rounded-[40px] bg-neutral-900/30 pointer-events-none z-0" />
          <div className="absolute inset-x-0 w-full h-full z-10">
            <CardWheel cards={RIGHT_COLUMN_CARDS} direction="down" />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
