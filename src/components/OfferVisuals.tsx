"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  MousePointer2,
  ShoppingBag,
  Search,
  Target,
  Mail,
  MessageCircle,
  Smartphone,
  Zap,
  BarChart3,
  TrendingUp,
} from "lucide-react";

/**
 * Visual 1: Web Design - "The Browser Layers"
 * High-fidelity representation of the design process: Code (VS Code) -> Layout (Figma) -> Final Product (Glassmorph).
 */
export const WebDesignVisual = () => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0); // 0.5 = center
  const mouseX = useSpring(x, { stiffness: 200, damping: 25 });
  const mouseY = useSpring(y, { stiffness: 200, damping: 25 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["25deg", "-25deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-25deg", "25deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left - rect.width / 2) / rect.width);
    y.set((e.clientY - rect.top - rect.height / 2) / rect.height);
  };

  return (
    <div
      ref={ref}
      className="w-full h-full bg-[#FAFAFA] flex items-center justify-center perspective-[1200px] overflow-visible"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {/* Container for the 3D stack - Reduced Size */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-[80%] max-w-md aspect-[4/3] md:w-[420px] md:h-[300px]"
      >
        {/* Layer 1: The Code (Back) */}
        <motion.div
          style={{ translateZ: "-60px", x: "-25%", y: "-15%" }}
          className="absolute inset-0 bg-[#1e1e1e] rounded-xl shadow-2xl p-5 flex flex-col font-mono"
        >
          <div className="flex gap-2 mb-3 opacity-50">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-500" />
          </div>
          <div className="space-y-2.5 opacity-80 text-xs">
            <div className="flex gap-3">
              <div className="w-6 h-1.5 bg-pink-500 rounded-sm" />
              <div className="w-20 h-1.5 bg-blue-400 rounded-sm" />
            </div>
            <div className="flex gap-3 ml-5">
              <div className="w-10 h-1.5 bg-yellow-400 rounded-sm" />
              <div className="w-24 h-1.5 bg-white/20 rounded-sm" />
            </div>
            <div className="flex gap-3 ml-5">
              <div className="w-16 h-1.5 bg-blue-400 rounded-sm" />
            </div>
            <div className="flex gap-3">
              <div className="w-6 h-1.5 bg-pink-500 rounded-sm" />
            </div>
          </div>
        </motion.div>

        {/* Layer 2: The Wireframe (Middle) */}
        <motion.div
          style={{ translateZ: "-20px", x: "-5%", y: "-5%" }}
          className="absolute inset-0 bg-white border border-slate-200 rounded-xl shadow-xl p-5 flex flex-col"
        >
          <div className="absolute -top-3 -left-3 px-2 py-1 bg-blue-500 text-[8px] text-white font-bold rounded shadow-md z-10">
            Main_Frame
          </div>
          <div className="border border-dashed border-blue-400 rounded-lg p-2 flex-1 flex flex-col gap-2 relative">
            {/* Selection Handles */}
            <div className="absolute -top-1 -left-1 w-2 h-2 bg-white border border-blue-500" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-white border border-blue-500" />
            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border border-blue-500" />
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border border-blue-500" />

            <div className="w-full h-10 bg-slate-50 rounded border border-slate-100" />
            <div className="flex-1 bg-slate-50 rounded border border-slate-100" />
          </div>
        </motion.div>

        {/* Layer 3: The Final Design (Front) - Swiss Editorial Style */}
        <motion.div
          style={{ translateZ: "40px", x: "15%", y: "15%" }}
          className="absolute inset-0 rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.15)] overflow-hidden border border-slate-200 bg-[#F5F5F0]"
        >
          {/* Minimal Browser Header */}
          <div className="h-8 border-b border-black/5 flex items-center px-4 justify-between bg-[#F5F5F0] z-20 relative">
            <div className="flex gap-1.5 opacity-30">
              <div className="w-2 h-2 rounded-full bg-black" />
              <div className="w-2 h-2 rounded-full bg-black" />
              <div className="w-2 h-2 rounded-full bg-black" />
            </div>
            <div className="text-[9px] font-mono tracking-widest uppercase opacity-40">
              Portfolio.24
            </div>
          </div>

          {/* Editorial Layout Mockup */}
          <div className="relative w-full h-full p-6 flex flex-col justify-between overflow-hidden">
            {/* Decorative Abstract Shape */}
            <motion.div
              className="absolute top-1/4 -right-12 w-48 h-48 bg-orange-500 rounded-full mix-blend-multiply blur-3xl opacity-20"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
            />
            <div className="absolute top-1/3 left-12 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply blur-3xl opacity-10" />

            {/* Header Nav */}
            <div className="flex justify-between items-start relative z-10 border-b border-black/10 pb-4">
              <div className="w-8 h-8 bg-black rounded-sm" />
              <div className="text-[10px] font-bold tracking-widest uppercase flex gap-4">
                <span>Work</span>
                <span className="opacity-50">About</span>
                <span className="opacity-50">Contact</span>
              </div>
            </div>

            {/* Main Typography content */}
            <div className="relative z-10 flex-1 flex flex-col justify-center gap-1 mt-2">
              <div className="text-4xl font-black tracking-tighter leading-[0.85] text-slate-900">
                DIGITAL
              </div>
              <div className="text-4xl font-serif italic leading-[0.85] text-slate-800 translate-x-4">
                Canvas
              </div>
              <div className="text-4xl font-black tracking-tighter leading-[0.85] text-slate-900 text-right pr-4">
                REALITY
              </div>
            </div>

            {/* Footer / Image strip */}
            <div className="relative z-10 grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-black/10">
              <div className="aspect-square bg-slate-200 grayscale relative overflow-hidden group">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors" />
              </div>
              <div className="aspect-square bg-slate-300 grayscale relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/10" />
              </div>
              <div className="aspect-square bg-black flex items-center justify-center text-white">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

/**
 * Visual 2: E-Commerce - "The Shop Interface"
 * A minimalist, swiss-style store mockup focusing on UX and Conversion.
 * Matches the aesthetic consistency of the Web Design card.
 */
/**
 * Visual 2: E-Commerce - "The Conversion Engine"
 * A schematic, blueprint-style visualization of a "Sales Machine".
 * Abstract gears, piping, and data flow representing the backend efficiency.
 */
/**
 * Visual 2: E-Commerce - "The Automated Interaction"
 * A simulated user flow showing a cursor clicking "Add to Cart" and the product flying into the basket.
 * Demonstrates UX, ease of purchase, and conversion.
 */
/**
 * Visual 2: E-Commerce - "The Fast Checkout Stack"
 * A rhythmic, high-energy visualization of "Swiping to Buy".
 * Products are rapidly swiped right into a cart, showing volume and ease.
 */
/**
/**
 * Visual 2: E-Commerce - "The Fast Checkout Stack" (Refined V3)
 * A rhythmic, high-energy visualization of "Swiping to Buy".
 * Uses deterministic index-based animations for perfect fluidity.
 */
function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const motionValue = useMotionValue(value);
  const springValue = useSpring(motionValue, { stiffness: 40, damping: 20 });

  useEffect(() => {
    // Small random increments for realism
    motionValue.set(value);
  }, [value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = "$" + Math.round(latest).toLocaleString();
      }
    });
  }, [springValue]);

  return (
    <div
      ref={ref}
      className="text-[80px] md:text-[100px] font-black text-emerald-950/20 tracking-tighter select-none whitespace-nowrap"
    />
  );
}

export const EcommerceVisualNew = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [revenue, setRevenue] = useState(12450);

  const products = [
    { color: "bg-purple-500", title: "Neon Kicks", price: "$189" },
    { color: "bg-amber-500", title: "Amber Watch", price: "$299" },
    { color: "bg-emerald-500", title: "Eco Bottle", price: "$89" },
    { color: "bg-rose-500", title: "Rose Shades", price: "$149" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => current + 1);
      setRevenue((r) => r + Math.floor(Math.random() * 80) + 40);
    }, 1600); // 1.6s cadence for readability
    return () => clearInterval(interval);
  }, []);

  const visibleIndices = [activeIndex, activeIndex + 1, activeIndex + 2];

  return (
    <div className="w-full h-full bg-[#FAFAFA] flex items-center justify-center perspective-[1200px] overflow-hidden relative">
      {/* Background Bar Chart Layer - "Unmistakable Sales Growth" */}
      <div className="absolute inset-x-8 bottom-0 h-[60%] flex gap-1 items-end justify-between z-0 opacity-40 pointer-events-none pb-8">
        {/* Soft Glow behind chart */}
        <div className="absolute inset-0 bg-emerald-500/10 blur-3xl rounded-full translate-y-12 scale-x-125" />

        {[15, 30, 25, 45, 40, 60, 55, 75, 70, 90, 85, 100].map((height, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${height}%` }}
            transition={{ duration: 1, delay: i * 0.05, type: "spring" }}
            className="flex-1 bg-gradient-to-t from-emerald-500/20 to-emerald-500/5 rounded-t-sm relative group border-t border-emerald-500/20"
          >
            {/* Tooltip-like dot on top */}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-emerald-400 rounded-full opacity-60 shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
          </motion.div>
        ))}

        {/* Trend Line (SVG Overlay) */}
        <svg
          className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 100 L 9 85 L 18 75 L 27 55 L 36 60 L 45 40 L 54 45 L 63 25 L 72 30 L 81 10 L 90 15 L 100 0"
            vectorEffect="non-scaling-stroke"
            fill="none"
            stroke="#10B981"
            strokeWidth="2"
            strokeOpacity="0.3"
            className="vector-effect-non-scaling-stroke drop-shadow-sm"
            style={{ transform: "scaleY(-1) translateY(-100%)" }}
          />
          <defs>
            <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 100 L 9 85 L 18 75 L 27 55 L 36 60 L 45 40 L 54 45 L 63 25 L 72 30 L 81 10 L 90 15 L 100 0 V 100 H 0 Z"
            fill="url(#chartFill)"
            fillOpacity="0.2"
            vectorEffect="non-scaling-stroke"
            style={{ transform: "scaleY(-1) translateY(-100%)" }}
          />
        </svg>
      </div>

      {/* Grid Pattern & Particles */}
      <div
        className="absolute inset-0 z-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Live Activity Header */}
      <div className="absolute top-6 inset-x-6 flex justify-between items-center z-0 opacity-40">
        <div className="flex gap-2 items-center">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-900">
            Live Activity
          </span>
        </div>
        <span className="text-[10px] font-mono text-emerald-900/60">
          Server: US-East-1
        </span>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-emerald-600/40 font-bold select-none shadow-sm"
            initial={{ y: 300, x: (i * 50) % 200, opacity: 0, scale: 0.5 }}
            animate={{
              y: -50,
              opacity: [0, 1, 0],
              x: (i * 30 + 50) % 250,
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: i * 1.5,
              ease: "linear",
            }}
            style={{ left: `${10 + ((i * 19) % 80)}%` }}
          >
            {i % 2 === 0 ? "+" : "$"}
          </motion.div>
        ))}
      </div>

      {/* Background Ticker - Positioned to blend */}
      <div className="absolute bottom-12 left-8 z-0">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">
            Total Revenue
          </span>
          <AnimatedNumber value={revenue} />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[280px] h-[360px] flex items-center justify-center">
        <AnimatePresence initial={false} mode="popLayout">
          {visibleIndices.map((absIndex, i) => {
            const stackPos = absIndex - activeIndex;
            const product = products[absIndex % products.length];
            const isFront = stackPos === 0;

            return (
              <motion.div
                key={absIndex} // Unique key for every single card in infinite sequence
                initial={{
                  scale: 0.9,
                  y: 40,
                  opacity: 0,
                  zIndex: 0,
                }}
                animate={{
                  scale: 1 - stackPos * 0.05, // 1, 0.95, 0.9
                  y: stackPos * -15, // 0, -15, -30
                  opacity: 1 - stackPos * 0.15,
                  zIndex: 3 - stackPos, // Front on top
                  x: 0,
                  rotate: 0,
                }}
                exit={{
                  x: 250,
                  opacity: 0,
                  rotate: 20,
                  scale: 1.05,
                  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }, // Apple-like ease
                }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 24,
                  mass: 1,
                }}
                className="absolute w-full h-full bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 flex flex-col items-center justify-between origin-bottom"
                style={{
                  boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)",
                }}
              >
                {/* Product Image */}
                <div
                  className={`w-full aspect-square rounded-xl ${product.color} flex items-center justify-center relative overflow-hidden group`}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent" />
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-lg" />
                  {isFront && (
                    <motion.div
                      className="absolute bottom-3 right-3 bg-white text-black text-[10px] font-bold px-2 py-1 rounded-full shadow-sm"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      NEW
                    </motion.div>
                  )}
                </div>

                {/* Info */}
                <div className="w-full">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-slate-900">
                      {product.title}
                    </span>
                    <span className="text-sm font-bold text-slate-900">
                      {product.price}
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
                    <div className="w-2/3 h-full bg-slate-900 rounded-full" />
                  </div>
                </div>

                {/* Action */}
                <motion.div
                  className="w-full h-10 bg-black text-white rounded-xl flex items-center justify-center gap-2 mt-2"
                  animate={{ opacity: isFront ? 1 : 0.4 }} // Fade out distinctively
                >
                  <ShoppingBag size={14} />
                  <span className="text-xs font-bold uppercase">Buy Now</span>
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Cart Zone Target */}
      <motion.div
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/60 backdrop-blur-md rounded-full flex items-center justify-center border border-slate-200 shadow-sm"
        animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 0.4, delay: 0.1 }}
        key={activeIndex} // Trigger animation on every index change
      >
        <ShoppingBag className="text-slate-500" size={16} />
      </motion.div>
    </div>
  );
};

/**
 * Visual 3: SEO - "The Flashlight"
 * Interactive spotlight effect revealing the 'truth' behind the noise.
 */
export const SeoVisualNew = () => {
  const ref = useRef<HTMLDivElement>(null);
  // Smooth mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const mx = useSpring(mouseX, springConfig);
  const my = useSpring(mouseY, springConfig);

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className="w-full h-full bg-slate-950 relative overflow-hidden flex items-center justify-center cursor-none"
    >
      {/* Background Grid (Hidden state context) */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Obscured/Hidden Layer */}
      <div className="relative z-10 font-black text-6xl text-slate-800 tracking-tighter text-center select-none leading-[0.85] opacity-50 blur-[2px]">
        HIDDEN
        <br />
        POTENTIAL
        <br />
        LOCKED
      </div>

      {/* Spotlight Glow (The light beam content) */}
      <motion.div
        className="absolute inset-0 z-20 pointer-events-none mix-blend-color-dodge"
        style={{
          background: useTransform(
            [mx, my],
            ([x, y]) =>
              `radial-gradient(circle 180px at ${x}px ${y}px, rgba(16, 185, 129, 0.4), transparent 80%)`
          ),
        }}
      />

      {/* Revealed Layer (Masked) */}
      <motion.div
        className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none"
        style={{
          maskImage: useTransform(
            [mx, my],
            ([x, y]) =>
              `radial-gradient(circle 120px at ${x}px ${y}px, black 30%, transparent 100%)`
          ),
          WebkitMaskImage: useTransform(
            [mx, my],
            ([x, y]) =>
              `radial-gradient(circle 120px at ${x}px ${y}px, black 30%, transparent 100%)`
          ),
        }}
      >
        <div className="relative font-black text-6xl text-emerald-400 tracking-tighter text-center leading-[0.85] drop-shadow-[0_0_15px_rgba(52,211,153,0.8)]">
          RANK #1
          <br />
          GROWTH
          <br />
          UNLOCKED
          {/* Tech details decoration inside the beam */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono text-emerald-200/80 whitespace-nowrap tracking-widest">
            SEO_OPTIMIZED :: INDEXING
          </div>
        </div>
      </motion.div>

      {/* Custom Cursor/Lens */}
      <motion.div
        className="absolute w-8 h-8 rounded-full border-2 border-emerald-400/50 z-50 pointer-events-none backdrop-blur-[1px]"
        style={{ left: mx, top: my, x: "-50%", y: "-50%" }}
      />
    </div>
  );
};

const MarketingVisualDeprecated = () => {
  return (
    <div className="w-full h-full bg-[#FAFAFA] relative overflow-hidden flex items-center justify-center">
      {/* Background Grid - Subtle */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.4]" />
      </div>

      {/* Abstract Live Graph - fluid movement */}
      <div className="absolute inset-x-0 bottom-0 h-[60%] z-0 pointer-events-none opacity-60">
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <motion.path
            d="M0,80 C20,70 30,90 50,60 C70,30 80,40 100,20 L100,100 L0,100 Z"
            fill="url(#gradient)"
            stroke="none"
            initial={{
              d: "M0,100 C20,90 30,100 50,90 C70,80 80,90 100,80 L100,100 L0,100 Z",
            }}
            animate={{
              d: [
                "M0,80 C20,60 40,90 50,60 C70,30 90,40 100,20 L100,100 L0,100 Z",
                "M0,70 C30,80 40,50 60,60 C80,20 90,50 100,30 L100,100 L0,100 Z",
                "M0,80 C20,60 40,90 50,60 C70,30 90,40 100,20 L100,100 L0,100 Z",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating Glass UI Card 1 - Campaigns */}
      <motion.div
        className="absolute top-[25%] left-[15%] w-48 bg-white/80 backdrop-blur-md rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-white p-4 z-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
            <Target size={14} className="text-blue-600" />
          </div>
          <div>
            <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
              Active
            </div>
            <div className="text-sm font-bold text-slate-800">Campaigns</div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-2xl font-black text-slate-900">12</div>
          <div className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded-full">
            +24%
          </div>
        </div>
        {/* Mini progress bars */}
        <div className="mt-3 space-y-1.5">
          <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-blue-500"
              initial={{ width: "0%" }}
              animate={{ width: "70%" }}
              transition={{ duration: 1.5 }}
            />
          </div>
          <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-purple-500"
              initial={{ width: "0%" }}
              animate={{ width: "45%" }}
              transition={{ duration: 1.5, delay: 0.2 }}
            />
          </div>
        </div>
      </motion.div>

      {/* Floating Glass UI Card 2 - Revenue ROI */}
      <motion.div
        className="absolute bottom-[25%] right-[15%] w-40 bg-white/90 backdrop-blur-xl rounded-2xl shadow-[0_8px_32px_rgb(59,130,246,0.15)] border border-blue-50 p-4 z-20"
        animate={{ y: [0, 15, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">
          Total ROAS
        </div>
        <div className="flex items-end gap-1">
          <span className="text-4xl font-black text-blue-600 tracking-tight">
            8.4
          </span>
          <span className="text-lg font-bold text-blue-400 mb-1">x</span>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <TrendingUp size={14} className="text-emerald-500" />
          <span className="text-xs font-medium text-slate-500">
            Record High
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export const MarketingVisualNew = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [containerRect, setContainerRect] = useState<DOMRect | null>(null);

  // Grid configuration
  const rows = 6;
  const cols = 8;

  // Cache container rect on mount/resize to avoid layout thrashing on mouse move
  useEffect(() => {
    const updateRect = () => {
      if (containerRef.current) {
        // Use requestAnimationFrame to avoid ResizeObserver loop limit if driven by resize
        requestAnimationFrame(() => {
          if (containerRef.current) {
            setContainerRect(containerRef.current.getBoundingClientRect());
          }
        });
      }
    };

    // Delay initial check to ensure layout is settled
    const timer = setTimeout(updateRect, 100);
    window.addEventListener("resize", updateRect);
    return () => {
      window.removeEventListener("resize", updateRect);
      clearTimeout(timer);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    // If we don't have rect yet, don't update state to avoid jitter or heavy calcs
    if (!containerRect) return;

    setMousePosition({
      x: e.clientX - containerRect.left,
      y: e.clientY - containerRect.top,
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="w-full h-full bg-[#FAFAFA] relative overflow-hidden flex items-center justify-center cursor-crosshair"
    >
      <div className="absolute inset-0 z-0 opacity-30 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="grid grid-cols-8 gap-8 z-10 p-8">
        {Array.from({ length: rows * cols }).map((_, i) => (
          <MagneticPole
            key={i}
            mouseX={mousePosition.x}
            mouseY={mousePosition.y}
          />
        ))}
      </div>

      {/* Overlay Text */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="text-[120px] font-black text-slate-900/5 tracking-tighter leading-none select-none">
          ATTENTION
        </div>
      </div>
    </div>
  );
};

const MagneticPole = ({
  mouseX,
  mouseY,
}: {
  mouseX: number;
  mouseY: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);
  const [isActive, setIsActive] = useState(false);

  // Cache position to avoid reading DOM on every frame
  const positionRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (ref.current) {
      // Calculate center relative to the grid item
      // Actually, we need center relative to the CONTAINER, matching mouseX/Y
      // Since mouseX/Y are relative to Container, we need Element position relative to Container.
      // offsetLeft/Top are relative to the grid container (offsetParent).
      // So this logic is correct assuming offsetParent is the main container.
      positionRef.current = {
        x: ref.current.offsetLeft + ref.current.offsetWidth / 2,
        y: ref.current.offsetTop + ref.current.offsetHeight / 2,
      };
    }
  }, []);

  useEffect(() => {
    if (!positionRef.current) return;

    const elementX = positionRef.current.x;
    const elementY = positionRef.current.y;

    const deltaX = mouseX - elementX;
    const deltaY = mouseY - elementY;
    const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

    setRotation(angle);

    // Distance check for "Active" color
    const dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    setIsActive(dist < 300);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={ref}
      className="w-4 h-4 md:w-8 md:h-8 flex items-center justify-center"
      animate={{ rotate: rotation }}
      transition={{ type: "spring", stiffness: 150, damping: 20 }}
    >
      {/* The Needle/Arrow */}
      <div
        className={`relative w-full h-[2px] rounded-full transition-colors duration-300 ${isActive ? "bg-blue-600 h-[3px]" : "bg-slate-300"}`}
      >
        {/* Arrow Head */}
        <div
          className={`absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 rotate-45 transition-colors duration-300 ${isActive ? "border-blue-600" : "border-slate-300"}`}
        />
      </div>
    </motion.div>
  );
};
