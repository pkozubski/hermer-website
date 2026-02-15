import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SplitRevealTitle } from "./ui/SplitRevealTitle";
import { LineReveal } from "./ui/LineReveal";

gsap.registerPlugin(ScrollTrigger);

/* ═══════════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════════ */

interface HelpCard {
  id: string;
  num: string;
  title: string;
  description: string;
  points: string[];
  accent: string;
  image: string;
  glow: string;
}

const CARDS: HelpCard[] = [
  {
    id: "b2b",
    num: "01",
    title: "Firmy B2B i B2C",
    description:
      "Porządkujemy komunikację i budujemy ścieżkę, która prowadzi klienta od pierwszego wejścia do zapytania lub zakupu.",
    points: ["Strony korporacyjne", "Landing pages", "Lead generation"],
    accent: "#8b5cf6",
    image: "/images/who-we-help/b2b-b2c.png",
    glow: "from-violet-600/20 to-transparent",
  },
  {
    id: "startups",
    num: "02",
    title: "Startupy",
    description:
      "Pomagamy wystartować z jasnym przekazem i stroną, która rozbudowuje się razem z rozwojem biznesu.",
    points: ["MVP strony", "Pitch decks", "Skalowalne systemy"],
    accent: "#06b6d4",
    image: "/images/who-we-help/startups.png",
    glow: "from-cyan-600/20 to-transparent",
  },
  {
    id: "ecommerce",
    num: "03",
    title: "E-commerce",
    description:
      "Upraszczamy ścieżkę zakupu, dopracowujemy prezentację oferty i usuwamy przeszkody przed finalizacją.",
    points: ["Sklepy online", "Optymalizacja UX", "Integracje płatności"],
    accent: "#10b981",
    image: "/images/who-we-help/ecommerce.png",
    glow: "from-emerald-600/20 to-transparent",
  },
  {
    id: "personal",
    num: "04",
    title: "Marki osobiste",
    description:
      "Tworzymy spójną stronę pokazującą kompetencje, budujemy zaufanie i zachęcamy do kontaktu.",
    points: ["Portfolio", "Strony eksperckie", "Personal branding"],
    accent: "#f59e0b",
    image: "/images/who-we-help/personal-brands.png",
    glow: "from-amber-600/20 to-transparent",
  },
];

/* ═══════════════════════════════════════════════════════════════════
   COMPONENTS
   ═══════════════════════════════════════════════════════════════════ */

/* ═══════════════════════════════════════════════════════════════════
   COMPONENTS
   ═══════════════════════════════════════════════════════════════════ */

export const WhoWeHelp: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const handleRefresh = () => ScrollTrigger.refresh(true);
    const timer = setTimeout(handleRefresh, 100);
    window.addEventListener("resize", handleRefresh);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleRefresh);
    };
  }, []);

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>(".scroll-item");

      items.forEach((item, i) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top 60%",
          end: "bottom 40%",
          onEnter: () => setActiveIdx(i),
          onEnterBack: () => setActiveIdx(i),
          invalidateOnRefresh: true,
        });

        gsap.fromTo(
          item.querySelector(".content-reveal"),
          { opacity: 0, x: 20 },
          {
            opacity: 1,
            x: 0,
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              end: "top 50%",
              scrub: true,
            },
          },
        );
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="relative w-full py-28 md:py-40">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-32 gap-6 relative z-20">
          <SplitRevealTitle
            line1="Komu"
            line2="pomagamy?"
            className="text-5xl md:text-8xl text-white tracking-tighter"
          />
          <LineReveal
            lines={[
              "Projektujemy cyfrowe doświadczenia",
              "dla marek, które nie boją się",
              "wyróżniać na tle konkurencji.",
            ]}
            className="text-neutral-400 max-w-xs md:max-w-sm text-xs md:text-sm uppercase tracking-wide leading-relaxed"
          />
        </div>

        {/* Main Interaction Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start relative z-10">
          {/* Left: Sticky Portal Container */}
          <div className="sticky top-0 lg:top-[20vh] h-[50vh] lg:h-[60vh] flex items-center justify-center order-2 lg:order-1 py-10 lg:py-0 self-start">
            <div className="relative w-full max-w-[500px] aspect-square mx-auto flex items-center justify-center isolate">
              {/* Background Glows */}
              {CARDS.map((card, idx) => (
                <div
                  key={`glow-${card.id}`}
                  className={`absolute inset-0 bg-gradient-radial ${card.glow} transition-opacity duration-1000 blur-[100px] rounded-full pointer-events-none`}
                  style={{
                    opacity: activeIdx === idx ? 0.6 : 0,
                    transform: "scale(1.2)",
                    zIndex: -1,
                  }}
                />
              ))}

              {/* The Portal (Static) */}
              <div className="relative w-[85%] h-[85%] rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] overflow-hidden">
                {CARDS.map((card, idx) => (
                  <div
                    key={`img-${card.id}`}
                    className="absolute inset-0 p-10 transition-all duration-700 ease-in-out"
                    style={{
                      opacity: activeIdx === idx ? 1 : 0,
                      transform: activeIdx === idx ? "scale(1)" : "scale(1.1)",
                      filter: activeIdx === idx ? "blur(0px)" : "blur(20px)",
                    }}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        sizes="500px"
                        className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
                        priority={idx === 0}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Floating Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-700" />
            </div>
          </div>

          {/* Right: Scrolling Content */}
          <div className="space-y-[30vh] lg:space-y-[50vh] py-[10vh] lg:pb-[30vh] order-1 lg:order-2">
            {CARDS.map((card, idx) => (
              <div key={card.id} className="scroll-item group relative">
                <div className="content-reveal flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <span
                      className="font-mono text-lg transition-colors duration-500"
                      style={{
                        color: activeIdx === idx ? card.accent : "#333",
                      }}
                    >
                      {card.num}
                    </span>
                    <div
                      className="h-px flex-1 transition-all duration-500"
                      style={{
                        backgroundColor: card.accent,
                        opacity: activeIdx === idx ? 0.5 : 0.1,
                        transform: `scaleX(${activeIdx === idx ? 1 : 0.2})`,
                        transformOrigin: "left",
                      }}
                    />
                  </div>

                  <h3 className="text-4xl md:text-6xl text-white font-medium tracking-tight">
                    {card.title}
                  </h3>

                  <p className="text-neutral-400 text-lg md:text-xl max-w-md leading-relaxed">
                    {card.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mt-4">
                    {card.points.map((pt) => (
                      <div
                        key={pt}
                        className="px-4 py-2 rounded-full border border-white/5 bg-white/[0.02] text-xs text-neutral-500 uppercase tracking-widest transition-all duration-500 group-hover:border-white/10"
                        style={{
                          color: activeIdx === idx ? "#fff" : undefined,
                          borderColor:
                            activeIdx === idx ? card.accent + "40" : undefined,
                          backgroundColor:
                            activeIdx === idx ? card.accent + "10" : undefined,
                        }}
                      >
                        {pt}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
