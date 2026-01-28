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
import { LiquidCard } from "./cards/LiquidCard";
import { DevelopmentCard } from "./cards/DevelopmentCard";
import { DesignCard } from "./cards/DesignCard";
import { ResponsivenessCard } from "./cards/ResponsivenessCard";
import { SeoCard } from "./cards/SeoCard";
import { MarketingCard } from "./cards/MarketingCard";
import { CmsCard } from "./cards/CmsCard";
import { EcommerceCard } from "./cards/EcommerceCard";
import { SocialCard } from "./cards/SocialCard";
import { motion } from "framer-motion";
import { CardWheel } from "./CardWheel";

// Data for the cards to be rendered - Monochrome Themes
const CARDS_DATA = [
  {
    id: "code",
    theme: "blue",
    icon: Code2,
    title: "Development",
    content: <DevelopmentCard />,
  },
  {
    id: "design",
    theme: "purple",
    icon: Palette,
    title: "UI/UX Design",
    content: <DesignCard />,
  },
  {
    id: "mobile",
    theme: "blue",
    icon: Smartphone,
    title: "Responsywność",
    content: <ResponsivenessCard />,
  },
  {
    id: "seo",
    theme: "green",
    icon: Search,
    title: "SEO & Pozycjonowanie",
    content: <SeoCard />,
  },
  {
    id: "marketing",
    theme: "orange",
    icon: BarChart3,
    title: "Marketing",
    content: <MarketingCard />,
  },
  {
    id: "cms", // Changed id from "security" to "cms"
    theme: "purple", // Changed theme from "green" to "purple"
    icon: Layout, // Changed icon from ShieldCheck to Layout
    title: "System CMS", // Changed title from "Bezpieczeństwo" to "System CMS"
    content: <CmsCard />, // Changed content from <SecurityCard /> to <CmsCard />
  },
  {
    id: "ecommerce",
    theme: "pink",
    icon: ShoppingCart,
    title: "E-commerce",
    content: <EcommerceCard />,
  },
  {
    id: "social",
    theme: "orange",
    icon: MessageSquare,
    title: "Social Media",
    content: <SocialCard />,
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

const MaskedRevealText = ({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) => {
  return (
    <span className="inline-block">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            delay: delay + i * 0.03,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
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

  /* Removed scroll effects for classic landing behavior */

  const column1 = [CARDS_DATA[0], CARDS_DATA[2], CARDS_DATA[4], CARDS_DATA[6]];
  const column2 = [CARDS_DATA[1], CARDS_DATA[3], CARDS_DATA[5], CARDS_DATA[7]];

  return (
    <motion.section
      ref={containerRef}
      className="w-full px-4 sm:px-8 lg:px-8 overflow-hidden bg-transparent isolate flex items-center relative h-auto min-h-screen py-20 lg:py-0 z-0 text-center lg:text-left"
    >
      {/* Aesthetic Grid Background - Dark Mode */}

      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center relative w-full z-0 perspective-[2000px]">
        {/* Left Column */}
        <div
          className="hidden lg:block col-span-3 w-[320px] xl:w-full lg:-mr-20 xl:mr-0 justify-self-end h-[650px] relative overflow-hidden select-none opacity-0 animate-[fade-in_1s_ease-out_1.5s_forwards]"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
            transform: "perspective(1500px) rotateY(12deg) translateZ(-20px)",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="absolute inset-x-0 w-full h-full">
            <CardWheel cards={column1} direction="up" />
          </div>
        </div>

        {/* Center Column: Text Content */}
        <div className="col-span-1 lg:col-span-6 flex flex-col items-center text-center z-20 relative pb-0 px-4 pt-12 lg:pt-32">
          <h1 className="text-4xl sm:text-6xl lg:text-5xl xl:text-7xl 2xl:text-[7rem] leading-[1.05] text-white mb-6 sm:mb-8 tracking-tight pb-4">
            <div className="block overflow-hidden pb-1 px-1 font-display font-medium tracking-tighter">
              <MaskedRevealText text="Profesjonalne" delay={0.1} />
            </div>
            <div className="block overflow-hidden pb-1 px-1 font-display font-medium tracking-tighter">
              <MaskedRevealText text="strony" delay={0.3} />
            </div>
            <div className="block overflow-hidden pb-1 px-1 font-display font-medium tracking-tighter">
              <MaskedRevealText text="internetowe" delay={0.5} />
            </div>
          </h1>

          <p className="text-neutral-400 text-base sm:text-lg lg:text-xl max-w-lg mb-8 lg:mb-10 font-light leading-relaxed animate-[text-reveal_0.8s_cubic-bezier(0.16,1,0.3,1)_0.8s_backwards] tracking-wide">
            Zajmiemy się Twoim projektem kompleksowo.{" "}
            <br className="hidden sm:block" />
            Od projektu zaprojektowania Twojej strony po wdrożenie
          </p>

          <button className="group relative px-6 py-3 sm:px-10 sm:py-5 bg-[#916AFF] text-white rounded-full font-bold text-sm sm:text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(145,106,255,0.5)] hover:scale-105 active:scale-95 flex items-center gap-3 overflow-hidden animate-[text-reveal_0.8s_cubic-bezier(0.16,1,0.3,1)_1s_backwards]">
            <span className="relative z-10">Rozpocznij projekt</span>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#916AFF] transition-all duration-300">
              <ChevronRight size={18} />
            </div>
          </button>

          <div className="w-full max-w-xs h-px bg-white/10 mt-10 lg:mt-16 mb-8 lg:mb-10 animate-[text-reveal_0.8s_cubic-bezier(0.16,1,0.3,1)_1.2s_backwards]"></div>

          <div className="flex flex-nowrap justify-center gap-2 sm:gap-8 lg:gap-16 w-full animate-[text-reveal_0.8s_cubic-bezier(0.16,1,0.3,1)_1.4s_backwards]">
            <div className="flex flex-col items-center group cursor-default">
              <span className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-white flex items-center tracking-tight mb-2">
                <CountUp end={700} delay={2200} />
                <span className="text-[#916AFF] text-lg sm:text-2xl lg:text-3xl align-top ml-1">
                  +
                </span>
              </span>
              <span
                className="font-serif italic text-neutral-500 text-[10px] sm:text-base lg:text-xl relative z-10"
                style={{ fontFamily: "var(--font-instrument)" }}
              >
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
              <span
                className="font-serif italic text-neutral-500 text-[10px] sm:text-base lg:text-xl"
                style={{ fontFamily: "var(--font-instrument)" }}
              >
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
                <div className="w-6 h-6 rounded-full bg-[#1A1A1A] border-2 border-neutral-900 text-white text-[8px] flex items-center justify-center font-bold">
                  Expert
                </div>
              </div>
              <span
                className="font-serif italic text-neutral-500 text-[10px] sm:text-base lg:text-xl"
                style={{ fontFamily: "var(--font-instrument)" }}
              >
                ekspertów w zespole
              </span>
            </div>
          </div>

          {/* Mobile Only Cards Marquee */}
          <div
            className="lg:hidden w-[calc(100%+2rem)] sm:w-[calc(100%+4rem)] -mx-4 sm:-mx-8 mt-8 lg:mt-12 overflow-hidden relative animate-[text-reveal_0.8s_cubic-bezier(0.16,1,0.3,1)_1.6s_backwards]"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            <div className="flex w-max animate-scroll-left hover:[animation-play-state:paused]">
              {CARDS_DATA.map((card) => (
                <div
                  key={`m-${card.id}`}
                  className="w-[85vw] sm:w-[350px] shrink-0"
                >
                  <LiquidCard {...card} />
                </div>
              ))}
              {CARDS_DATA.map((card) => (
                <div
                  key={`m-dup-${card.id}`}
                  className="w-[85vw] sm:w-[350px] shrink-0"
                >
                  <LiquidCard {...card} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div
          className="hidden lg:block col-span-3 w-[320px] xl:w-full lg:-ml-20 xl:ml-0 justify-self-start h-[650px] relative overflow-hidden select-none opacity-0 animate-[fade-in_1s_ease-out_1.5s_forwards]"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
            transform: "perspective(1500px) rotateY(-12deg) translateZ(-20px)",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="absolute inset-x-0 w-full h-full">
            <CardWheel cards={column2} direction="down" />
          </div>
        </div>
      </div>
    </motion.section>
  );
};
