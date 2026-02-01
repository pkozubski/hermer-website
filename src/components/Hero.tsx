import React, { useEffect, useRef, useState } from "react";
import {
  ChevronRight,
  Code2,
  Palette,
  Search,
  BarChart3,
  Smartphone,
  Layout,
  ShoppingCart,
  MessageSquare,
  Star,
} from "lucide-react";
import { CmsCard } from "./cards/CmsCard";
import { SeoCard } from "./cards/SeoCard";
import { ResponsivenessCard } from "./cards/ResponsivenessCard";
import { CardWheelHorizontal } from "./CardWheelHorizontal";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { CardWheel } from "./CardWheel";
import HeroSquiggle from "./HeroSquiggle";
import { WebDevCard } from "./cards/WebDevCard";
import { EcommerceCard } from "./cards/EcommerceCard";
import { SocialMediaCard } from "./cards/SocialMediaCard";
import { MarketingCard } from "./cards/MarketingCard";
import { UiUxCard } from "./cards/UiUxCard";
import { ReelCtaButton } from "./ui/ReelCtaButton";

// Data for the cards to be rendered - Monochrome Themes
// Data for the cards to be rendered - Monochrome Themes
const CARDS_DATA = [
  {
    id: "code",
    theme: "blue",
    icon: Code2,
    title: "Development",
    content: (
      <div className="w-full flex justify-center h-[260px] overflow-visible relative z-10">
        <div className="scale-[0.55] origin-top transform-gpu">
          <WebDevCard />
        </div>
      </div>
    ),
  },
  {
    id: "design",
    theme: "purple",
    icon: Palette,
    title: "UI/UX Design",
    content: (
      <div className="w-full flex justify-center h-[260px] overflow-visible relative z-10">
        <div className="scale-[0.55] origin-top transform-gpu">
          <UiUxCard />
        </div>
      </div>
    ),
  },
  {
    id: "mobile",
    theme: "blue",
    icon: Smartphone,
    title: "Responsywność",
    content: (
      <div className="w-full flex justify-center h-[260px] overflow-visible relative z-10">
        <div className="scale-[0.55] origin-top transform-gpu">
          <ResponsivenessCard />
        </div>
      </div>
    ),
  },
  {
    id: "seo",
    theme: "green",
    icon: Search,
    title: "SEO & Pozycjonowanie",
    content: (
      <div className="w-full flex justify-center h-[260px] overflow-visible relative z-10">
        <div className="scale-[0.55] origin-top transform-gpu">
          <SeoCard />
        </div>
      </div>
    ),
  },
  {
    id: "marketing",
    theme: "orange",
    icon: BarChart3,
    title: "Marketing",
    content: (
      <div className="w-full flex justify-center h-[260px] overflow-visible relative z-10">
        <div className="scale-[0.55] origin-top transform-gpu">
          <MarketingCard />
        </div>
      </div>
    ),
  },
  {
    id: "cms",
    theme: "purple",
    icon: Layout,
    title: "System CMS",
    content: (
      <div className="w-full flex justify-center h-[260px] overflow-visible relative z-10">
        <div className="scale-[0.55] origin-top transform-gpu">
          <CmsCard />
        </div>
      </div>
    ),
  },
  {
    id: "ecommerce",
    theme: "pink",
    icon: ShoppingCart,
    title: "E-commerce",
    content: (
      <div className="w-full flex justify-center h-[260px] overflow-visible relative z-10">
        <div className="scale-[0.55] origin-top transform-gpu">
          <EcommerceCard />
        </div>
      </div>
    ),
  },
  {
    id: "social",
    theme: "orange",
    icon: MessageSquare,
    title: "Social Media",
    content: (
      <div className="w-full flex justify-center h-[260px] overflow-visible relative z-10">
        <div className="scale-[0.55] origin-top transform-gpu">
          <SocialMediaCard />
        </div>
      </div>
    ),
  },
];

// CountUp Component for animated stats
const CountUp: React.FC<{
  end: number;
  duration?: number;
  delay?: number;
  suffix?: string;
}> = ({ end, duration = 2000, delay = 0, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;
    let timeoutId: ReturnType<typeof setTimeout>;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOutExpo = (x: number): number => {
        return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
      };
      setCount(Math.floor(easeOutExpo(progress) * end));
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    timeoutId = setTimeout(() => {
      animationFrameId = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(animationFrameId);
    };
  }, [end, duration, delay]);

  return (
    <span className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
};

const HERO_TEXTS = [
  "Strona www i marketing, które pracują na Twoją markę",
  "Zamieniamy chaos w cyfrowy porządek",
  "Buduj z nami lepszą widoczność firmy w Internecie",
];

const LONGEST_TEXT = "Strona www i marketing, które pracują na Twoją markę";

const MaskedRevealText = ({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) => {
  return (
    <span className="inline-block">
      {text.split(" ").map((word, wordIndex) => (
        <span
          key={wordIndex}
          className="inline-block whitespace-nowrap mr-[0.25em] overflow-hidden align-bottom pb-1"
        >
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              className="inline-block"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: delay + wordIndex * 0.1 + charIndex * 0.02,
              }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  );
};

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

  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    // Start cycling after the initial animation completes (approx 3s)
    const startDelay = setTimeout(() => {
      const interval = setInterval(() => {
        setTextIndex((prev) => (prev + 1) % HERO_TEXTS.length);
      }, 5000); // Change every 5 seconds

      return () => clearInterval(interval);
    }, 3000);

    return () => clearTimeout(startDelay);
  }, []);

  const { scrollY } = useScroll();
  const leftColumnY = useTransform(scrollY, [0, 1000], [0, -100]);
  const rightColumnY = useTransform(scrollY, [0, 1000], [0, 100]);

  /* Removed scroll effects for classic landing behavior */

  const column1 = [CARDS_DATA[0], CARDS_DATA[2], CARDS_DATA[4], CARDS_DATA[6]];
  const column2 = [CARDS_DATA[1], CARDS_DATA[3], CARDS_DATA[5], CARDS_DATA[7]];

  return (
    <motion.section
      ref={containerRef}
      className="w-full px-4 sm:px-8 lg:px-8 overflow-hidden bg-transparent isolate flex items-center relative h-auto min-h-screen py-20 lg:py-0 z-0 text-center lg:text-left"
    >
      {/* Animated Squiggles */}
      <HeroSquiggle />

      {/* Aesthetic Grid Background - Dark Mode */}

      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center relative w-full z-0 perspective-[2000px]">
        {/* Left Column */}
        <motion.div
          className="hidden lg:block col-span-3 w-[320px] xl:w-full lg:-mr-20 xl:mr-0 justify-self-end h-[650px] relative overflow-hidden select-none opacity-0 animate-[fade-in_1s_ease-out_1.5s_forwards]"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
            transform: "perspective(1500px) rotateY(12deg) translateZ(-20px)",
            transformStyle: "preserve-3d",
            y: leftColumnY,
          }}
        >
          <div className="absolute inset-x-0 w-full h-full">
            <CardWheel cards={column1} direction="up" />
          </div>
        </motion.div>

        {/* Center Column: Text Content */}
        <div className="col-span-1 lg:col-span-6 flex flex-col items-center text-center z-20 relative pb-0 px-4 pt-12 lg:pt-32">
          {/* Text Container with Invisible Spacer to prevent layout shift */}
          <div className="relative mb-6 sm:mb-8 pb-4">
            {/* Invisible Spacer */}
            <h1
              className="invisible text-4xl sm:text-6xl lg:text-5xl xl:text-7xl 2xl:text-[5.5rem] leading-[1.05] tracking-tight font-display font-medium pointer-events-none select-none"
              aria-hidden="true"
            >
              {LONGEST_TEXT}
            </h1>

            {/* A second spacer for the potentially taller 3-line text if needed, or just relying on the longest text string. 
                Actually, let's just ensure we reserve space for 3 lines roughly. 
                The text "Strona www i marketing..." is long enough to force 3 lines on most breakpoints where it matters.
            */}

            {/* Active Text */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center lg:items-start justify-center lg:justify-start">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={textIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl sm:text-6xl lg:text-5xl xl:text-7xl 2xl:text-[5.5rem] leading-[1.05] text-white tracking-tight font-display font-medium"
                >
                  <MaskedRevealText text={HERO_TEXTS[textIndex]} delay={0.1} />
                </motion.h1>
              </AnimatePresence>
            </div>
          </div>

          <p className="text-neutral-400 text-base sm:text-lg lg:text-xl max-w-lg mb-8 lg:mb-10 font-light leading-relaxed animate-[text-reveal_0.8s_cubic-bezier(0.16,1,0.3,1)_0.8s_backwards] tracking-wide">
            Zajmiemy się Twoją stroną kompleksowo —{" "}
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
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
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
              "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
            transform: "perspective(1500px) rotateY(-12deg) translateZ(-20px)",
            transformStyle: "preserve-3d",
            y: rightColumnY,
          }}
        >
          <div className="absolute inset-x-0 w-full h-full">
            <CardWheel cards={column2} direction="down" />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
