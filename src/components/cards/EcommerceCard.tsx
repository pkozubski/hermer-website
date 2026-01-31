import React from "react";
import { ShoppingCart, Search, Menu, Star, Heart } from "lucide-react";
import svgPaths from "../../imports/svg-jsem1yknox";

// --- Internal Mock UI Components ---

function WindowControls() {
  return (
    <div className="absolute h-[14px] left-[27px] top-[26px] w-[56px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 56 14"
      >
        <g id="Group 5">
          <circle
            cx="7"
            cy="7"
            fill="var(--fill-0, #8E8E8E)"
            fillOpacity="0.23"
            id="Ellipse 4"
            r="7"
          />
          <circle
            cx="28"
            cy="7"
            fill="var(--fill-0, #8E8E8E)"
            fillOpacity="0.23"
            id="Ellipse 5"
            r="7"
          />
          <circle
            cx="49"
            cy="7"
            fill="var(--fill-0, #8E8E8E)"
            fillOpacity="0.23"
            id="Ellipse 6"
            r="7"
          />
        </g>
      </svg>
    </div>
  );
}

function StoreSidebar() {
  return (
    <div className="absolute left-0 top-[55px] bottom-0 w-[120px] border-r border-white/5 bg-[#1a1a1a] flex flex-col gap-4 p-4 pt-6">
      <div className="h-2 w-16 bg-linear-to-r from-[#9b87f5] to-transparent rounded-full" />
      <div className="h-2 w-12 bg-linear-to-r from-[#9b87f5] to-transparent rounded-full" />
      <div className="h-2 w-20 bg-linear-to-r from-[#ffbd2e] to-transparent rounded-full mt-4" />
      <div className="h-2 w-16 bg-linear-to-r from-[#ffbd2e] to-transparent rounded-full" />
      <div className="h-2 w-14 bg-linear-to-r from-[#ffbd2e] to-transparent rounded-full" />

      <div className="h-2 w-14 bg-linear-to-r from-[#ce9178] to-transparent rounded-full mt-4" />
      <div className="h-2 w-10 bg-linear-to-r from-[#ce9178] to-transparent rounded-full" />
    </div>
  );
}

function ProductCard({ i }: { i: number }) {
  return (
    <div className="bg-[#262626] rounded-xl p-3 flex flex-col gap-2 border border-white/5">
      <div className="aspect-4/3 bg-white/5 rounded-lg w-full relative overflow-hidden">
        {/* Mock Product Image Gradient */}
        <div
          className={`absolute inset-0 opacity-20 bg-linear-to-tr ${i % 2 === 0 ? "from-pink-500 to-violet-500" : "from-blue-500 to-cyan-500"}`}
        />
        <div className="absolute top-1 right-1">
          <Heart size={10} className="text-white/20" />
        </div>
      </div>
      <div className="h-2 w-3/4 bg-linear-to-r from-[#0a75c2] to-transparent rounded-full" />
      <div className="flex justify-between items-center mt-1">
        <div className="h-2 w-1/3 bg-linear-to-r from-[#4ec9b0] to-transparent rounded-full" />
        <div className="flex gap-0.5">
          <Star size={8} className="fill-[#ffbd2e] text-[#ffbd2e]" />
          <Star size={8} className="fill-[#ffbd2e] text-[#ffbd2e]" />
          <Star size={8} className="fill-[#ffbd2e] text-[#ffbd2e]" />
        </div>
      </div>
    </div>
  );
}

function StoreContent() {
  return (
    <div className="absolute left-[120px] top-[55px] bottom-0 right-0 p-5 overflow-hidden bg-[#1f1f1f]">
      {/* Banner */}
      <div className="w-full h-24 bg-linear-to-r from-[#9b87f5]/20 to-[#4ec9b0]/20 rounded-xl mb-5 border border-white/5 flex items-center px-4 relative overflow-hidden">
        <div className="space-y-2 relative z-10">
          <div className="h-2 w-32 bg-linear-to-r from-white/30 to-transparent rounded-full" />
          <div className="h-2 w-20 bg-linear-to-r from-white/20 to-transparent rounded-full" />
        </div>
        <div className="absolute right-0 bottom-0 opacity-20 transform translate-x-4 translate-y-4">
          <ShoppingCart size={80} className="text-white" />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-3">
        {[1, 2, 3, 4].map((i) => (
          <ProductCard key={i} i={i} />
        ))}
      </div>
    </div>
  );
}

function StoreHeader() {
  return (
    <div className="absolute h-[55px] left-0 top-0 right-0 border-b border-white/5 bg-[#262626] flex items-center justify-between px-4 pt-[20px]">
      {/* Left place holder to push content past window controls */}
      <div className="w-[80px]"></div>

      {/* Address Bar / Search */}
      <div className="flex items-center gap-4 flex-1">
        <div className="h-7 w-full max-w-[240px] bg-[#1a1a1a] rounded-full border border-white/5 flex items-center px-3 mx-auto">
          <Search size={12} className="text-white/20 mr-2" />
          <div className="h-1.5 w-24 bg-linear-to-r from-white/10 to-transparent rounded-full" />
        </div>
      </div>

      <div className="flex items-center gap-3 w-[80px] justify-end">
        <div className="size-6 rounded-full bg-white/5 flex items-center justify-center">
          <ShoppingCart size={12} className="text-white/40" />
        </div>
      </div>
    </div>
  );
}

function StoreWindow() {
  return (
    <div className="absolute h-[450px] left-0 top-0 w-[529px]">
      {/* Content Wrapper - Enforces Clipping & Background */}
      <div className="absolute inset-0 rounded-[32px] overflow-hidden bg-[#1f1f1f]">
        <StoreHeader />
        <StoreSidebar />
        <StoreContent />
      </div>

      {/* Window Controls Overlay */}
      <WindowControls />

      {/* Window Stroke (Outer Border) */}
      <div
        aria-hidden="true"
        className="absolute border-5 border-[rgba(255,255,255,0.03)] border-solid inset-[-5px] pointer-events-none rounded-[37px] shadow-[0px_0px_48px_10px_rgba(0,0,0,0.2),0px_4px_16px_8px_rgba(0,0,0,0.1)]"
      />
    </div>
  );
}

function StoreFrame() {
  return (
    <div className="absolute h-[450px] -left-[20%] top-0 w-[529px]">
      <StoreWindow />
    </div>
  );
}

function StoreContainer() {
  return (
    <div className="absolute h-[403px] left-[83px] top-[60px] w-[534px]">
      <div className="absolute h-[450px] w-[529px] left-0 top-0 scale-[0.95] origin-top-left">
        <StoreFrame />
      </div>
    </div>
  );
}

function CartIconVector() {
  return (
    <div className="text-white">
      <ShoppingCart size={44} strokeWidth={1.5} />
    </div>
  );
}

function FloatingIcon() {
  return (
    <div className="relative size-[88px]">
      <div
        className="absolute left-0 top-0 size-[88px] rounded-[24px]"
        style={{
          background:
            "linear-gradient(135deg, #575757 0%, #1a1a1a 50%, #2d2d2d 100%)",
          border: "1px solid rgba(255,255,255,0.15)",
          boxShadow:
            "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.3)",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <CartIconVector />
      </div>
    </div>
  );
}

export function EcommerceCard() {
  return (
    <div className="bg-[rgba(26,26,26,0.4)] content-stretch flex flex-col gap-[10px] items-center justify-end overflow-clip px-[51px] py-[41px] relative rounded-[50px] w-[620px] h-[520px] shadow-2xl shrink-0">
      {/* Store Interface Mockup */}
      <StoreContainer />

      {/* Progressive Blur and Gradient Overlay */}
      <div className="absolute h-[340px] left-0 bottom-0 w-full pointer-events-none z-0">
        <div
          className="absolute inset-0 backdrop-blur-xs"
          style={{
            maskImage: "linear-gradient(to bottom, transparent 0%, black 30%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 30%)",
          }}
        />
        <div
          className="absolute inset-0 backdrop-blur-sm"
          style={{
            maskImage: "linear-gradient(to bottom, transparent 30%, black 60%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 30%, black 60%)",
          }}
        />
        <div
          className="absolute inset-0 backdrop-blur-md"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent 60%, black 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 60%, black 100%)",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-[rgba(26,26,26,0.8)] to-[#1a1a1a]" />
      </div>

      {/* Bottom Content Group */}
      <div className="relative z-10 flex flex-col items-end gap-6 w-full mt-auto">
        <div className="rotate-5 flex-none origin-bottom-right -mr-2">
          <FloatingIcon />
        </div>
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[32px] text-white">
          E-commerce
        </p>
      </div>
    </div>
  );
}
