import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ArrowRight, Code2, Star } from "lucide-react";
import { RevealText } from "./ui/RevealText";
import { SplitRevealTitle } from "./ui/SplitRevealTitle";
import AnimatedArc from "./AnimatedArc";
import { LineReveal } from "./ui/LineReveal";
import { MaskedReveal } from "./ui/MaskedReveal";
import FluidButton from "./ui/FluidButton";

// --- Components ---

const BentoCard = ({
  children,
  className = "",
  delay = 0,
  hoverEffect = true,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
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
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
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
    </motion.div>
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
          <BentoCard className="md:col-span-6 lg:col-span-8 p-10 flex flex-col justify-between min-h-[400px] bg-linear-to-br from-neutral-800/80 to-neutral-900/80">
            <div>
              <Code2
                className="text-[#916AFF] mb-8"
                size={48}
                strokeWidth={1.5}
              />
              <h3 className="text-3xl font-display font-medium mb-6 leading-relaxed text-white">
                <MaskedReveal text="Zamieniamy chaos w " />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#52D8EA] to-[#916AFF] font-bold inline-block">
                  <MaskedReveal text="cyfrowy porządek." />
                </span>
              </h3>
            </div>
            <LineReveal
              lines={[
                "Hermer powstał z buntu przeciwko przeciętności.",
                "Widzieliśmy zbyt wiele pięknych stron, które nie",
                "sprzedawały, i zbyt wiele systemów, których nikt",
                "nie umiał obsługiwać. Połączyliśmy inżynierską",
                "precyzję z artystyczną duszą.",
              ]}
              className="text-neutral-400 text-lg leading-relaxed max-w-2xl"
            />
          </BentoCard>

          {/* 2. Stat Card: Experience - Spans 4 cols with True Pop-out Image */}
          <BentoCard
            className="md:col-span-6 lg:col-span-4 relative group/image-card min-h-[400px] p-0"
            delay={0.1}
          >
            {/* 1. Card Background (Base Layer) */}
            <div className="absolute inset-0 bg-neutral-800/50 backdrop-blur-sm border border-white/5 rounded-3xl shadow-sm overflow-hidden z-0">
              {/* Radial Gradient for depth */}
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(145,106,255,0.15),transparent_60%)]" />
            </div>

            {/* 2. Floating Image (Middle Layer - Popping out) */}
            <div className="absolute bottom-0 right-[-40px] w-[320px] h-[130%] z-10 pointer-events-none hidden md:block">
              <img
                src="/images/img-onas-jacek.png"
                alt="Jacek"
                className="w-full h-full object-contain object-bottom drop-shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
              />
            </div>

            {/* 3. Card Content (Top Layer) */}
            <div className="relative z-20 h-full flex flex-col justify-start p-8">
              <div className="flex justify-between items-start mb-2">
                <div className="flex flex-col">
                  <div className="text-7xl font-display font-bold text-white tracking-tighter leading-none -ml-1 drop-shadow-lg flex items-center">
                    <MaskedReveal text="14" delay={0.2} />
                    <span className="text-[#916AFF] overflow-hidden inline-block">
                      <MaskedReveal text="+" delay={0.3} />
                    </span>
                  </div>
                  <div className="text-neutral-400 font-medium text-lg mt-1 drop-shadow-md">
                    <MaskedReveal text="Lat doświadczenia" delay={0.4} />
                  </div>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* 3. Feature Card: Satisfaction - Premium Badge Style */}
          <BentoCard
            className="md:col-span-3 lg:col-span-4 relative bg-white/5 backdrop-blur-md border md:col-start-1"
            delay={0.2}
          >
            {/* Radial Gradient Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent opacity-60" />

            <div className="relative p-8 flex flex-col h-full z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#916AFF] text-white flex items-center justify-center shadow-lg shadow-purple-500/30 mb-auto transform transition-transform group-hover:rotate-12 group-hover:scale-110 duration-500 border border-white/20">
                <Star fill="currentColor" size={24} />
              </div>

              <div className="mt-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-white overflow-hidden inline-block">
                    <MaskedReveal text="100%" delay={0.3} />
                  </span>
                  <span className="text-xs font-bold text-[#916AFF] uppercase tracking-wider bg-[#916AFF]/10 px-2 py-1 rounded-md border border-[#916AFF]/20 overflow-hidden inline-block">
                    <MaskedReveal text="Gwarancja" delay={0.4} />
                  </span>
                </div>
                <div className="text-neutral-400 text-sm font-medium leading-relaxed">
                  <LineReveal
                    lines={[
                      "Bezpieczeństwo współpracy.",
                      "Satysfakcja wpisana w umowę.",
                    ]}
                    delay={0.5}
                  />
                </div>
              </div>
            </div>
          </BentoCard>

          {/* 4. Feature Card: Team - Dynamic Stack */}
          <BentoCard
            className="md:col-span-3 lg:col-span-4 p-8 flex flex-col justify-between bg-neutral-800/50 overflow-visible"
            delay={0.3}
            hoverEffect={false}
          >
            <div className="relative h-12 mb-4">
              {[
                {
                  bg: "bg-blue-500/20",
                  border: "border-blue-500/30",
                  color: "text-blue-400",
                  label: "Dev",
                },
                {
                  bg: "bg-purple-500/20",
                  border: "border-purple-500/30",
                  color: "text-purple-400",
                  label: "Des",
                },
                {
                  bg: "bg-pink-500/20",
                  border: "border-pink-500/30",
                  color: "text-pink-400",
                  label: "Art",
                },
                {
                  bg: "bg-amber-500/20",
                  border: "border-amber-500/30",
                  color: "text-amber-400",
                  label: "Mkt",
                },
              ].map((role, i) => (
                <div
                  key={i}
                  className={`absolute w-12 h-12 rounded-full border-2 border-neutral-900 flex items-center justify-center text-[10px] font-bold shadow-lg transition-all duration-300 hover:scale-110 hover:z-20 backdrop-blur-md ${role.bg} ${role.border} ${role.color}`}
                  style={{ left: `${i * 32}px`, zIndex: 10 - i }}
                >
                  {role.label}
                </div>
              ))}
              <div
                className="absolute w-12 h-12 rounded-full border-2 border-neutral-900 bg-neutral-700 flex items-center justify-center text-xs font-bold text-white shadow-lg z-0"
                style={{ left: `${4 * 32}px` }}
              >
                +5
              </div>
            </div>

            <div className="relative z-10">
              <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <MaskedReveal text="Eksperci" delay={0.4} />
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
              </h4>
              <div className="text-neutral-500 text-sm">
                <LineReveal
                  lines={[
                    "Multidyscyplinarny zespół",
                    "gotowy na każde wyzwanie.",
                  ]}
                  delay={0.5}
                />
              </div>
            </div>
          </BentoCard>

          {/* 5. CTA Card - Magnetic Dark Expanded */}
          <BentoCard
            className="md:col-span-6 lg:col-span-4 p-0 group/cta cursor-pointer bg-[#916AFF] border-none text-white overflow-hidden shadow-2xl shadow-purple-900/20"
            delay={0.4}
            hoverEffect={false}
          >
            <div className="absolute inset-0 w-full h-full bg-[url('/images/noise.png')] opacity-20 mix-blend-overlay pointer-events-none" />
            <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-white/20 blur-3xl rounded-full pointer-events-none group-hover/cta:scale-150 transition-transform duration-700" />

            <div className="relative h-full flex flex-col justify-between p-8 z-10">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-white/80 text-xs font-bold uppercase tracking-widest overflow-hidden">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  <MaskedReveal text="Available Now" delay={0.5} />
                </div>
                <h3 className="text-3xl font-display font-bold text-white leading-tight">
                  <div className="overflow-hidden">
                    <MaskedReveal text="Zacznijmy" delay={0.6} />
                  </div>
                  <div className="overflow-hidden">
                    <MaskedReveal text="projekt." delay={0.7} />
                  </div>
                </h3>
              </div>

              <div className="mt-8 flex justify-end">
                <div className="w-16 h-16 rounded-full bg-white text-[#916AFF] flex items-center justify-center transition-all duration-500 group-hover/cta:scale-110 group-hover/cta:rotate-[-45deg] shadow-xl">
                  <ArrowRight size={24} strokeWidth={2.5} />
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
