import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { ArrowRight, ArrowUpRight, ShieldCheck, Star } from "lucide-react";
import { SplitRevealTitle } from "./ui/SplitRevealTitle";
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
      className={`group relative overflow-hidden bg-neutral-800/50 backdrop-blur-sm border border-white/5 rounded-3xl shadow-sm hover:shadow-2xl hover:border-white/10 transition-[border-color,box-shadow] duration-300 ${className}`}
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
      className="bg-transparent py-32 relative text-white"
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
          <div className="flex flex-col items-center md:items-start text-center md:text-left mt-16 md:mt-24 pointer-events-none">
            {/* Replacing placeholder text with actual Polish text requested */}
            {/* Replacing placeholder text with actual Polish text requested */}
            {/* Replacing placeholder text with actual Polish text requested */}
            <SplitRevealTitle
              line1="Nie jesteśmy"
              line2="kolejną agencją"
              className="text-6xl md:text-9xl tracking-tighter w-full text-white"
            />
          </div>
        </div>

        {/* Bento Grid Layout - Adjusted for Dark Mode & Removed Image Card */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)] mx-auto">
          {/* 1. Main Story Card - Spans 8 cols */}
          <ChaosLanding className="md:col-span-6 lg:col-span-8" />

          {/* 2. Stat Card: Experience - Spans 4 cols with True Pop-out Image (Upgraded Design) */}
          <div className="md:col-span-6 lg:col-span-4 relative group/image-card min-h-[400px] w-full h-full bg-[#1e1e1e] rounded-[32px] border border-[#333] overflow-hidden shadow-2xl transition-all duration-500 hover:border-[#444] group">
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

            {/* 2. Floating Image (Middle Layer - Popping out) */}
            <div className="absolute bottom-0 right-[-40px] w-[320px] h-[130%] z-10 pointer-events-none hidden md:block">
              <img
                src="/images/img-onas-jacek.png"
                alt="Jacek"
                className="w-full h-full object-contain object-bottom drop-shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
              />
            </div>

            {/* 3. Card Content (Top Layer) */}
            <div className="relative z-20 h-full flex flex-col justify-between p-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 mb-6">
                  <div className="w-1.5 h-1.5 bg-[#8B5CF6] rounded-full animate-pulse" />
                  <span className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">
                    Seniority
                  </span>
                </div>
                <h2 className="text-8xl font-bold text-transparent bg-clip-text bg-linear-to-b from-white via-white to-white/10 tracking-tighter">
                  14<span className="text-4xl align-top text-[#8B5CF6]">+</span>
                </h2>
              </div>
              <div className="relative z-20 max-w-[60%]">
                <h3 className="text-xl text-white font-medium mb-2">
                  Lat doświadczenia
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Tworzenie skalowalnych systemów, zaawansowanych animacji i
                  intuicyjnych interfejsów użytkownika.
                </p>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-[#8B5CF6] to-transparent opacity-50" />
          </div>

          {/* 3. Feature Card: Satisfaction - Premium Shield Design */}
          <BentoCard className="md:col-span-3 lg:col-span-4 relative bg-[#1e1e1e] border border-[#333] overflow-hidden group/shield md:col-start-1 rounded-[32px]">
            {/* Background Mesh Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-50" />
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#916AFF]/10 blur-[80px] rounded-full pointer-events-none group-hover/shield:bg-[#916AFF]/20 transition-all duration-700" />

            <div className="relative p-8 flex flex-col h-full justify-between z-10">
              {/* Top: 3D Shield Icon Container */}
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
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-5xl font-bold text-transparent bg-clip-text bg-linear-to-b from-white to-neutral-400 tracking-tighter">
                    100%
                  </h3>
                  <div className="h-px flex-1 bg-linear-to-r from-white/20 to-transparent" />
                </div>

                <h4 className="text-white font-medium text-lg leading-tight mb-2 flex items-center gap-2">
                  Gwarancja Satysfakcji
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)] animate-pulse" />
                </h4>

                <p className="text-neutral-400 text-xs font-medium leading-relaxed max-w-[90%]">
                  Nie płacisz za obietnice, ale za efekt. Bezpieczeństwo wpisane
                  w nasze DNA.
                </p>
              </div>
            </div>

            {/* Hover Shine Effect */}
            <div className="absolute -inset-[100%] bg-linear-to-r from-transparent via-white/5 to-transparent rotate-45 translate-x-[-100%] group-hover/shield:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />
          </BentoCard>

          {/* 4. Feature Card: Team - Premium Stack Design */}
          <BentoCard
            className="md:col-span-3 lg:col-span-4 p-0 bg-[#1e1e1e] border border-[#333] overflow-hidden group/team md:col-start-1 rounded-[32px]"
            hoverEffect={false}
          >
            {/* Background Mesh Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,_var(--tw-gradient-stops))] from-[#916AFF]/10 via-transparent to-transparent opacity-50" />

            <div className="relative p-8 flex flex-col h-full justify-between z-10">
              {/* Avatar Stack */}
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
                <div className="relative w-12 h-12 rounded-full border-2 border-[#1e1e1e] bg-neutral-800 flex items-center justify-center z-0 shadow-lg group-hover/team:translate-x-2 transition-transform duration-500">
                  <span className="text-xs font-bold text-neutral-400">+5</span>
                </div>
              </div>

              {/* Typography */}
              <div className="mt-6">
                <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2 group-hover/team:text-[#916AFF] transition-colors duration-300">
                  Nasi Eksperci
                </h4>
                <div className="h-0.5 w-8 bg-neutral-700 rounded-full mb-3 group-hover/team:w-full group-hover/team:bg-[#916AFF]/50 transition-all duration-700 ease-in-out" />
                <p className="text-neutral-400 text-xs font-medium leading-relaxed">
                  Multidyscyplinarny zespół seniorów. Developerzy, Designerzy i
                  Strategowie pod jednym dachem.
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-linear-to-tl from-white/5 to-transparent skew-x-12 opacity-50 pointer-events-none" />
          </BentoCard>

          {/* 5. CTA Card - Premium Purple Design */}
          <BentoCard
            className="md:col-span-6 lg:col-span-4 p-0 group/cta cursor-pointer bg-neutral-900 border-none text-white overflow-hidden shadow-2xl relative"
            hoverEffect={false}
          >
            {/* Animated Rich Gradient Background */}
            <div className="absolute inset-0 w-full h-full bg-linear-to-br from-[#7c3aed] via-[#916AFF] to-[#5b21b6] animate-gradient-xy opacity-100" />

            {/* Radial Overlay for depth */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_50%)] mix-blend-overlay" />

            {/* Noise Texture */}
            <div className="absolute inset-0 w-full h-full bg-[url('/images/noise.png')] opacity-20 mix-blend-overlay pointer-events-none" />

            {/* Decorative Geometric Objects */}
            <div className="absolute top-[-20%] right-[-10%] w-[300px] h-[300px] bg-white/10 blur-[60px] rounded-full mix-blend-overlay group-hover/cta:scale-110 transition-transform duration-700" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[250px] h-[250px] bg-[#4c1d95]/50 blur-[50px] rounded-full mix-blend-multiply" />

            <div className="relative h-full flex flex-col justify-between p-8 z-10">
              <div className="flex flex-col gap-4">
                {/* Status Badge */}
                <div className="flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-sm transition-transform group-hover/cta:translate-y-[-2px]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/90">
                    Available Now
                  </span>
                </div>

                {/* Heading */}
                <h3 className="text-4xl md:text-5xl font-display font-bold text-white leading-[0.9] tracking-tight drop-shadow-lg">
                  <span className="block group-hover/cta:translate-x-2 transition-transform duration-500">
                    Zacznijmy
                  </span>
                  <span className="block text-white/80 group-hover/cta:translate-x-4 transition-transform duration-500 delay-75">
                    projekt.
                  </span>
                </h3>
              </div>

              {/* Action Area */}
              <div className="mt-8 flex items-end justify-between">
                <p className="text-white/70 text-sm max-w-[60%] font-medium leading-relaxed opacity-0 group-hover/cta:opacity-100 translate-y-4 group-hover/cta:translate-y-0 transition-all duration-500">
                  Skontaktuj się z nami i omówmy szczegóły.
                </p>

                <div
                  className="w-16 h-16 rounded-[20px] flex items-center justify-center transition-all duration-500 group-hover/cta:scale-110 group-hover/cta:rotate-[-5deg] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] relative overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, #ffffff 0%, #e8e8e8 50%, #d4d4d4 100%)",
                    border: "1px solid rgba(255,255,255,0.8)",
                    boxShadow:
                      "0 10px 40px -10px rgba(0,0,0,0.5), inset 0 2px 0 rgba(255,255,255,1), inset 0 -2px 0 rgba(0,0,0,0.1)",
                  }}
                >
                  <ArrowUpRight
                    size={32}
                    strokeWidth={2.5}
                    className="text-[#7c3aed] drop-shadow-sm group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform"
                  />
                  {/* Sheen effect */}
                  <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/40 to-transparent opacity-0 group-hover/cta:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
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
