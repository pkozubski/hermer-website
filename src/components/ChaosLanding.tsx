import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// --- SVG Paths ---
const svgPaths = {
  phoneBody:
    "M19.8015 0H113.199C123.77 0 132.34 8.57069 132.34 19.1431V60.4563C132.724 60.5922 133 60.959 133 61.3901V88.7846C133 89.2157 132.724 89.5825 132.34 89.7184V256.782C132.34 267.355 123.77 275.925 113.199 275.925H19.8015C9.22998 275.925 0.66005 267.355 0.66005 256.782V94.0091C0.275507 93.8732 0 93.5064 0 93.0753V77.2327C0 76.8016 0.275507 76.4348 0.66005 76.2989V70.2452C0.275507 70.1093 0 69.7425 0 69.3114V53.4688C0 53.0377 0.275507 52.6709 0.66005 52.535V44.501C0.275507 44.3651 0 43.9983 0 43.5672V35.3158C0 34.8847 0.275507 34.5179 0.66005 34.382V19.1431C0.66005 8.57069 9.22998 0 19.8015 0ZM19.8015 3.96065C11.4172 3.96065 4.62035 10.7581 4.62035 19.1431V256.782C4.62035 265.167 11.4172 271.965 19.8015 271.965H113.199C121.583 271.965 128.38 265.167 128.38 256.782V19.1431C128.38 10.7581 121.583 3.96065 113.199 3.96065H103.27C102.133 4.36089 101.318 5.44477 101.318 6.71897C101.318 10.7553 98.0458 14.0273 94.0099 14.0273H38.66C34.6241 14.0273 31.3524 10.7553 31.3524 6.71897C31.3524 5.44477 30.5372 4.36089 29.3999 3.96065H19.8015Z",
  phoneScreen:
    "M15.1811 0C6.79681 0 0 6.79746 0 15.1825V252.822C0 261.207 6.79681 268.004 15.1811 268.004H108.578C116.962 268.004 123.759 261.207 123.759 252.822V15.1825C123.759 6.79746 116.962 0 108.578 0H98.6498C97.5125 0.400239 96.6973 1.48412 96.6973 2.75832C96.6973 6.79464 93.4255 10.0667 89.3896 10.0667H34.0397C30.0038 10.0667 26.732 6.79464 26.732 2.75832C26.732 1.48412 25.9168 0.400239 24.7795 0H15.1811Z",
};

// --- Components ---

const ToggleSwitch = ({ checked }: { checked: boolean }) => {
  return (
    <div className="bg-[#292929] flex h-[48px] items-center p-1 relative rounded-[50px] w-fit border border-[rgba(255,255,255,0.1)] pointer-events-none shadow-lg">
      <div className="relative flex items-center h-full">
        {/* Background pill/slider */}
        <motion.div
          animate={{ x: checked ? "100%" : "0%" }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="absolute h-full w-[50%] z-0"
        >
          {/* Main Pill Body */}
          <div className="w-full h-full bg-[#3d3d3d] rounded-[50px] relative overflow-hidden">
            {/* Strong inset shadow from Figma */}
            <div className="absolute inset-0 rounded-[inherit] shadow-[inset_-12px_0px_15.3px_0px_rgba(255,255,255,0.57)]" />

            {/* Blur effect simulation */}
            <div className="absolute -left-2 -top-2 w-10 h-10 bg-[#3d3d3d] blur rounded-full opacity-50" />
          </div>

          {/* Border Overlay (Frame's outer border) */}
          <div className="absolute inset-0 border border-[rgba(255,255,255,0.2)] rounded-[50px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.5)] pointer-events-none" />
        </motion.div>

        {/* Text Labels */}
        <div
          className={`relative z-10 px-6 py-2 ${!checked ? "text-white" : "text-[#8e8e8e]"} transition-colors duration-300`}
        >
          <p className="text-sm uppercase font-['Inter'] leading-normal font-medium tracking-wide">
            Przed
          </p>
        </div>
        <div
          className={`relative z-10 px-8 py-2 ${checked ? "text-white" : "text-[#8e8e8e]"} transition-colors duration-300`}
        >
          <p className="text-sm uppercase font-['Inter'] leading-normal font-medium tracking-wide">
            Po
          </p>
        </div>
      </div>
    </div>
  );
};

// Reusable parts
const LoremTag = () => (
  <div className="relative border border-[#8B5CF6] px-4 py-2 bg-[#1e1e1e]/20 backdrop-blur-sm">
    <p className="font-['Inter'] text-3xl text-gray-200 whitespace-nowrap">
      Lorem ipsum
    </p>

    {/* Corner Handles */}
    <div className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-[#d9d9d9] border border-[#8B5CF6]" />
    <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-[#d9d9d9] border border-[#8B5CF6]" />
    <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-[#d9d9d9] border border-[#8B5CF6]" />
    <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-[#d9d9d9] border border-[#8B5CF6]" />

    {/* H1 Label */}
    <div className="absolute -top-5 right-0 text-[#8B5CF6] text-xs font-medium">
      H1
    </div>
  </div>
);

const BlueButton = () => (
  <div className="bg-[#8B5CF6] flex items-center justify-center px-[14px] py-[4px] relative rounded-[24px] shadow-lg w-[60px]">
    <p className="font-['Inter'] font-medium text-[8px] text-white">Przycisk</p>
    <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-0.1px_-0.1px_3px_0px_rgba(255,255,255,0.5)]" />
  </div>
);

const WireframeBox = ({ size = 20 }: { size?: number }) => (
  <div
    className={`bg-white/5 border border-[#8B5CF6]/50 relative`}
    style={{ width: size, height: size }}
  >
    <div className="absolute inset-0 pointer-events-none shadow-[inset_-0.3px_-0.3px_0.3px_0px_rgba(0,0,0,0.25)]" />
  </div>
);

const ImageCard = () => (
  <div className="w-[100px] h-[60px] bg-[#2a2a2a] rounded-md overflow-hidden relative border border-white/10">
    <ImageWithFallback
      src="https://images.unsplash.com/photo-1640346876473-f76a73c71539?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG1pbmltYWwlMjBnZW9tZXRyaWMlMjBkYXJrfGVufDF8fHx8MTc2OTUxNjk4N3ww&ixlib=rb-4.1.0&q=80&w=200"
      className="w-full h-full object-cover opacity-80"
      alt="Abstract"
    />
    <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
  </div>
);

const TextLines = () => (
  <div className="flex flex-col gap-1.5 w-[80px]">
    <div className="h-2 bg-white/20 rounded-sm w-full" />
    <div className="h-2 bg-white/10 rounded-sm w-[70%]" />
    <div className="h-2 bg-white/10 rounded-sm w-[40%]" />
  </div>
);

const MenuIcon = () => (
  <div className="flex flex-col gap-0.5 p-1 bg-white/5 rounded border border-white/10">
    <div className="w-3 h-0.5 bg-white/80 rounded-full" />
    <div className="w-3 h-0.5 bg-white/80 rounded-full" />
    <div className="w-3 h-0.5 bg-white/80 rounded-full" />
  </div>
);

// --- Layout Data ---

// Coordinates are percentages relative to container [x%, y%]
const generateRandomChaos = (id: number) => {
  // Deterministic pseudo-random based on ID to keep SSR consistent if needed,
  // but here we just hardcode or use simple math
  const r = (n: number) => ((id * n * 9301 + 49297) % 233280) / 233280;
  const x = 50 + (r(1) - 0.5) * 80; // Spread horizontally
  const y = 50 + (r(2) - 0.5) * 80; // Spread vertically
  const rot = (r(3) - 0.5) * 90;
  const scale = 0.8 + r(4) * 0.4;
  return { left: `${x}%`, top: `${y}%`, rotate: rot, scale, opacity: 0.6 };
};

// Hardcoded positions for "Order" state inside the phone
// The phone screen area is roughly defined. We'll position relative to a container that matches the phone screen.
// Since we are moving from "Chaos" (global container) to "Order" (phone container),
// we'll need to calculate the "Order" positions in the global space OR use layoutId.
// However, layoutId works best when the DOM structure changes.
// Let's try absolute positioning in the global container for both, but for "Order" we align them with the phone image.

// Phone is positioned at right side: approx left: 65%, top: 10%, width: ~25%, height: ~80%
const PHONE_RECT = {
  left: 71,
  top: 7,
  width: 22, // %
  height: 84, // %
};

// Helper to map 0-100% inside phone to global %
const toPhone = (px: number, py: number) => ({
  left: `${PHONE_RECT.left + (px / 100) * PHONE_RECT.width}%`,
  top: `${PHONE_RECT.top + (py / 100) * PHONE_RECT.height}%`,
  rotate: 0,
  scale: 1,
  opacity: 1,
});

const elements = [
  {
    id: 1,
    component: <LoremTag />,
    chaos: { left: "60%", top: "20%", rotate: -15, scale: 0.9, opacity: 0.7 },
    order: { ...toPhone(50, 40), scale: 0.5 },
  },
  {
    id: 2,
    component: <BlueButton />,
    chaos: { left: "85%", top: "70%", rotate: 10, scale: 1.1, opacity: 0.8 },
    order: toPhone(50, 75),
  },
  {
    id: 3,
    component: <ImageCard />,
    chaos: { left: "75%", top: "35%", rotate: 25, scale: 1.2, opacity: 0.5 },
    order: toPhone(50, 25),
  },
  {
    id: 4,
    component: <TextLines />,
    chaos: { left: "65%", top: "55%", rotate: -5, scale: 0.8, opacity: 0.6 },
    order: toPhone(50, 55),
  },
  {
    id: 5,
    component: <MenuIcon />,
    chaos: { left: "90%", top: "15%", rotate: 45, scale: 1.5, opacity: 0.4 },
    order: toPhone(85, 8),
  },
  {
    id: 6,
    component: <WireframeBox size={20} />,
    chaos: { left: "55%", top: "80%", rotate: -30, scale: 1, opacity: 0.3 },
    order: toPhone(15, 85),
  },
  {
    id: 7,
    component: <WireframeBox size={15} />,
    chaos: { left: "80%", top: "85%", rotate: 60, scale: 0.8, opacity: 0.3 },
    order: toPhone(85, 85),
  },
];

export const ChaosLanding = ({ className }: { className?: string }) => {
  const [isOrdered, setIsOrdered] = useState(false);

  return (
    <div
      className={`flex items-center justify-center w-full min-h-[400px] ${className || ""}`}
    >
      {/* Main Card Container */}
      <div
        className="relative w-full h-[400px] bg-[#1e1e1e]/80 backdrop-blur-md rounded-[32px] border border-[#333] overflow-hidden shadow-2xl transition-colors duration-500 hover:border-[#444]"
        onMouseEnter={() => setIsOrdered(true)}
        onMouseLeave={() => setIsOrdered(false)}
      >
        {/* --- Background Effects --- */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Left Blur */}
          <div className="absolute -left-[10%] top-[20%] w-[50%] h-[60%] bg-[#1e1e1e] blur-[50px] mix-blend-color-dodge opacity-50" />
          {/* Gradient Overlay similar to Figma */}
          <div className="absolute top-[-50%] left-[-20%] w-[150%] h-[200%] bg-linear-to-br from-white/5 to-transparent pointer-events-none opacity-20" />
        </div>

        {/* --- Content Grid --- */}
        <div className="relative z-10 flex flex-col h-full p-8 md:p-12 pointer-events-none">
          {/* Header Section */}
          <div className="flex flex-col items-start gap-4 max-w-[50%] pointer-events-auto">
            <motion.h1
              layout
              className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-gray-400 via-white to-gray-400 drop-shadow-sm"
            >
              Chaos → Porządek
            </motion.h1>
            <motion.p
              layout
              className="text-gray-400 text-sm md:text-base leading-relaxed"
            >
              Optymalizacja cyfrowych procesów i systemów. Uporządkowanie i
              automatyzacja.
            </motion.p>
          </div>

          <div className="mt-auto pointer-events-auto">
            <ToggleSwitch checked={isOrdered} />
          </div>
        </div>

        {/* --- Phone Frame (Only visible/active on right) --- */}
        <motion.div
          className="absolute right-[5%] top-[5%] bottom-[5%] w-[30%] max-w-[250px] z-0 pointer-events-none"
          initial={{ opacity: 0, x: "100%" }}
          animate={{
            opacity: isOrdered ? 1 : 0,
            x: isOrdered ? "0%" : "100%",
            filter: isOrdered ? "blur(0px)" : "blur(4px)",
          }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 14,
            mass: 1,
          }}
        >
          {/* Phone Body SVG */}
          <svg viewBox="0 0 133 276" className="w-full h-full text-[#333]">
            <path d={svgPaths.phoneBody} fill="currentColor" />
            <path
              d={svgPaths.phoneScreen}
              fill="#111"
              className="translate-x-[4.6px] translate-y-[4px]"
            />
          </svg>

          {/* Phone Screen Gradient/Reflection removed */}
        </motion.div>

        {/* --- Floating Elements --- */}
        {elements.map((el) => {
          const current = isOrdered ? el.order : el.chaos;
          return (
            <motion.div
              key={el.id}
              className="absolute z-20 flex items-center justify-center origin-center pointer-events-none"
              initial={el.chaos}
              animate={{
                left: current.left,
                top: current.top,
                rotate: current.rotate,
                scale: current.scale,
                opacity: current.opacity,
                x: "-50%", // Center the element on its coordinate
                y: "-50%",
              }}
              transition={{
                type: "spring",
                stiffness: 90,
                damping: 12,
                mass: 1.2,
                restDelta: 0.001,
                delay: el.id * 0.04, // Stagger effect
              }}
            >
              {el.component}
            </motion.div>
          );
        })}

        {/* --- Extra decorative particles --- */}
        <Particles isOrdered={isOrdered} />
      </div>
    </div>
  );
};

const Particles = ({ isOrdered }: { isOrdered: boolean }) => {
  const [dots, setDots] = useState<
    Array<{ id: number; size: number; x: number; y: number }>
  >([]);

  React.useEffect(() => {
    // Generate random dots only on client side to avoid hydration mismatch
    const newDots = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setDots(newDots);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute bg-[#8B5CF6] rounded-full opacity-30"
          style={{ width: dot.size, height: dot.size }}
          animate={{
            x: isOrdered
              ? [0, Math.random() * 800 - 400]
              : [0, Math.random() * 20 - 10],
            y: isOrdered
              ? [0, Math.random() * 400 - 200]
              : [0, Math.random() * 20 - 10],
            opacity: isOrdered ? 0 : 0.3,
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
          initial={{ left: `${dot.x}%`, top: `${dot.y}%` }}
        />
      ))}
    </div>
  );
};
