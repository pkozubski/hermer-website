import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { SplitRevealTitle } from "./ui/SplitRevealTitle";
import { LineReveal } from "./ui/LineReveal";
import AnimatedArc from "./AnimatedArc";
import FluidButton from "./ui/FluidButton";
import { ChaosLanding } from "./ChaosLanding";

// --- Components ---

const BentoCard = ({
  children,
  className = "",
  hoverEffect = true,
}: {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) => {
    if (!hoverEffect) return;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/5 rounded-3xl shadow-sm hover:shadow-2xl hover:border-white/10 transition-[border-color,box-shadow] duration-300 ${className}`}
    >
      {/* Hover Spotlight Effect */}
      {hoverEffect && (
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                650px circle at ${mouseX}px ${mouseY}px,
                rgba(145, 106, 255, 0.1),
                transparent 80%
              )
            `,
          }}
        />
      )}
      <div className="relative h-full">{children}</div>
    </div>
  );
};

export const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={containerRef}
      id="about"
      className=" py-32 relative text-white isolate"
      style={{ position: "relative" }}
    >
      {/* Background Ambience moved to MainContent wrapper */}

      {/* Scroll-Driven Decorative Arc (SVG) */}
      <AnimatedArc scrollYProgress={scrollYProgress} />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header - Lusion Style */}
        <div className="relative mb-32 pt-20">
          {/* Top Left Label */}

          {/* Top Right Menu/Button Placeholder (Optional, to match reference 'Let's Talk') */}
          <div className="absolute top-0 right-0 hidden md:flex gap-4">
            {/* Can be added later if needed */}
          </div>

          {/* Huge Title */}
          {/* Main Copy - Aligned with Projects Section Design */}
          <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-6 pointer-events-auto">
            <SplitRevealTitle
              line1="Nie jesteśmy"
              line2="kolejną agencją"
              className="text-5xl md:text-8xl text-white tracking-tighter"
            />
            <div className="flex flex-col gap-4 max-w-xs md:max-w-sm">
              <LineReveal
                lines={["Dlaczego warto skorzystać", "z naszego wsparcia?"]}
                className="text-white font-medium text-sm md:text-base mb-2"
              />
              <LineReveal
                lines={[
                  "Nie sprzedajemy ładnych projektów dla samego",
                  "efektu wizualnego. Chcemy, aby miały sens",
                  "biznesowy. Warstwa estetyczna strony czy",
                  "sklepu jest ważna, ale zawsze stoi za nią",
                  "przemyślana struktura, UX i SEO.",
                ]}
                className="text-neutral-400 text-xs md:text-sm uppercase tracking-wide leading-relaxed"
                delay={0.2}
              />
            </div>
          </div>
        </div>

        {/* Bento Grid Layout - Adjusted for Dark Mode & Removed Image Card */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)] mx-auto">
          {/* 1. Main Story Card - Spans 8 cols (CHAOS -> ORDER - DO NOT TOUCH) */}
          <ChaosLanding className="md:col-span-6 lg:col-span-8" />

          {/* 2. Stat Card: Experience - Spans 4 cols */}
          <div className="md:col-span-6 lg:col-span-4 relative group/image-card min-h-[400px] w-full h-full bg-white/5 backdrop-blur-xl rounded-[32px] border border-white/5 overflow-hidden shadow-2xl transition-all duration-500 hover:border-white/10 group">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent opacity-20 pointer-events-none" />
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#8B5CF6] rounded-full blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity duration-500" />

            {/* Floating Image */}
            <div className="absolute bottom-0 right-[-40px] w-[320px] h-[130%] z-10 pointer-events-none hidden md:block">
              <img
                src="/images/img-onas-jacek.png"
                alt="Jacek"
                className="w-full h-full object-contain object-bottom drop-shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
              />
            </div>

            {/* Card Content */}
            <div className="relative z-20 h-full flex flex-col justify-between p-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 mb-6">
                  <div className="w-1.5 h-1.5 bg-[#8B5CF6] rounded-full animate-pulse" />
                  <span className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">
                    Doświadczenie
                  </span>
                </div>
                <h2 className="text-8xl font-bold text-transparent bg-clip-text bg-linear-to-b from-white via-white to-white/10 tracking-tighter">
                  14<span className="text-4xl align-top text-[#8B5CF6]">+</span>
                </h2>
              </div>
              <div className="relative z-20 max-w-[60%]">
                <h3 className="text-xl text-white font-medium mb-2">
                  lat doświadczenia
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Mamy wiele lat doświadczenia w projektowaniu profesjonalnych
                  stron i sklepów, dzięki czemu sprawnie przechodzimy od pomysłu
                  do gotowego rozwiązania.
                </p>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-[#8B5CF6] to-transparent opacity-50" />
          </div>

          {/* 3. Feature Card: Security (was Satisfaction) */}
          <BentoCard className="md:col-span-3 lg:col-span-4 relative border border-[#333] overflow-hidden group/shield md:col-start-1 rounded-[32px]">
            {/* Background Mesh Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-50" />
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#916AFF]/10 blur-[80px] rounded-full pointer-events-none group-hover/shield:bg-[#916AFF]/20 transition-all duration-700" />

            <div className="relative p-8 flex flex-col h-full justify-between z-10">
              {/* Top: Shield Icon */}
              <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.5)] bg-linear-to-b from-neutral-800 to-neutral-900 border border-white/10 group-hover/shield:scale-110 transition-transform duration-500 ease-out">
                <div className="absolute inset-0 rounded-2xl bg-linear-to-b from-white/10 to-transparent opacity-50 pointer-events-none" />
                <ShieldCheck
                  size={32}
                  className="text-[#916AFF] drop-shadow-[0_0_15px_rgba(145,106,255,0.5)]"
                  strokeWidth={2}
                />
              </div>

              {/* Bottom: Typography */}
              <div className="mt-8">
                <h4 className="text-white font-bold text-xl leading-tight mb-3 flex items-center gap-2">
                  Bezpieczeństwo współpracy
                </h4>
                <p className="text-neutral-400 text-sm font-medium leading-relaxed">
                  Ustalamy jasny zakres i etapy prac, żebyś od początku
                  wiedział, co obejmuje projekt i z jakich etapów będzie składał
                  się cały proces od projektu po wdrożenie.
                </p>
              </div>
            </div>

            {/* Hover Shine Effect */}
            <div className="absolute -inset-full bg-linear-to-r from-transparent via-white/5 to-transparent rotate-45 translate-x-[-100%] group-hover/shield:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />
          </BentoCard>

          {/* 4. Feature Card: Experts (was Team) */}
          <BentoCard
            className="md:col-span-3 lg:col-span-4 p-0 border border-[#333] overflow-hidden group/team md:col-start-1 rounded-[32px]"
            hoverEffect={false}
          >
            {/* Background Mesh Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,_var(--tw-gradient-stops))] from-[#916AFF]/10 via-transparent to-transparent opacity-50" />

            <div className="relative p-8 flex flex-col h-full justify-between z-10">
              {/* Avatar Stack - Keep as it fits "Experts" */}
              <div className="flex -space-x-4 hover:-space-x-2 transition-all duration-500 ease-out py-2 pl-2">
                {[
                  { label: "Dev", grad: "from-blue-500 to-cyan-400" },
                  { label: "Des", grad: "from-purple-500 to-pink-400" },
                  { label: "Art", grad: "from-amber-500 to-orange-400" },
                  { label: "Mkt", grad: "from-emerald-500 to-green-400" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="relative w-12 h-12 rounded-full border-2 border-[#1e1e1e] shadow-lg flex items-center justify-center transition-transform duration-300 group-hover/team:scale-110 group-hover/team:translate-y-[-4px]"
                    style={{ zIndex: 10 - i, transitionDelay: `${i * 50}ms` }}
                  >
                    <div
                      className={`absolute inset-0 rounded-full bg-linear-to-br ${item.grad} opacity-20`}
                    />
                    <div
                      className={`absolute inset-0 rounded-full bg-linear-to-br ${item.grad} opacity-80 mix-blend-overlay`}
                    />
                    {/* Shine */}
                    <div className="absolute top-0 left-0 w-full h-[50%] bg-linear-to-b from-white/20 to-transparent rounded-t-full pointer-events-none" />

                    <span className="relative text-[10px] font-bold text-white tracking-tight drop-shadow-md">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Typography */}
              <div className="mt-6">
                <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2 group-hover/team:text-[#916AFF] transition-colors duration-300">
                  Wsparcie ekspertów
                </h4>
                <div className="h-0.5 w-8 bg-neutral-700 rounded-full mb-3 group-hover/team:w-full group-hover/team:bg-[#916AFF]/50 transition-all duration-700 ease-in-out" />
                <p className="text-neutral-400 text-sm font-medium leading-relaxed">
                  Otrzymujesz dostęp do zespołu, który łączy kompetencje
                  projektowe, techniczne i marketingowe, więc dostęp do
                  kompleksowej wiedzy masz w jednym miejscu.
                </p>
              </div>
            </div>
          </BentoCard>

          {/* 5. Stat Card: 700+ Projects (was CTA) */}
          <BentoCard className="md:col-span-6 lg:col-span-4 border border-[#333] overflow-hidden group/projects rounded-[32px]">
            <div className="absolute inset-0 bg-linear-to-br from-white/5 via-transparent to-transparent opacity-50" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#8B5CF6] rounded-full blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity duration-500" />

            <div className="relative z-10 h-full flex flex-col justify-between p-8">
              <div>
                <h2 className="text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-linear-to-br from-white to-white/50 tracking-tighter mb-4">
                  700
                  <span className="text-[#916AFF] text-5xl align-top">+</span>
                </h2>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  zrealizowanych projektów
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed max-w-[95%]">
                  Zrealizowaliśmy setki projektów, dlatego wiemy, jak budować
                  strony i sklepy, które są czytelne, intuicyjne i wspierają
                  decyzję o kontakcie lub zakupie.
                </p>
              </div>
            </div>
          </BentoCard>
        </div>
      </div>

      {/* Sticky Fluid Button - outside container for proper sticky behavior */}
      <FluidButton label="Poznaj nas bliżej" />
    </section>
  );
};
