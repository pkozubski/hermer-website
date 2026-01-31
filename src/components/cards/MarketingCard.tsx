import React from "react";
import Image from "next/image";
import { BarChart3 } from "lucide-react";
import chartImage from "../../assets/realizations/chart.png";

function GridLines() {
  return (
    <div className="absolute inset-x-0 bottom-0 top-[20%] h-[60%] flex flex-col justify-between pointer-events-none px-8">
      <div className="w-full h-px bg-white/5" />
      <div className="w-full h-px bg-white/5" />
      <div className="w-full h-px bg-white/5" />
    </div>
  );
}

function FloatingCard() {
  return (
    <div className="absolute h-[380px] w-[500px] left-1/2 -translate-x-1/2 top-[40px] rounded-[40px] bg-[#1f1f1f] shadow-2xl border border-white/5">
      {/* Background Grid */}
      <GridLines />

      {/* Chart Image */}
      <div className="absolute -left-[20%] -right-[%] top-[0] w-[135%] z-20 flex items-center justify-center">
        <Image
          src={chartImage}
          alt="Marketing Chart"
          className="w-full h-full object-cover drop-shadow-[0_4px_10px_rgba(145,106,255,0.3)]"
        />
      </div>

      {/* Inner Border Stroke */}
      <div className="absolute inset-0 rounded-[40px] border border-white/5 pointer-events-none" />
    </div>
  );
}

function ChartIconVector() {
  return (
    <div className="text-white">
      <BarChart3 size={44} strokeWidth={1.5} />
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
        <ChartIconVector />
      </div>
    </div>
  );
}

export function MarketingCard() {
  return (
    <div className="bg-[rgba(26,26,26,0.4)] content-stretch flex flex-col gap-[10px] items-center justify-end overflow-clip px-[51px] py-[41px] relative rounded-[50px] w-[620px] h-[520px] shadow-2xl shrink-0">
      {/* Main Chart Card */}
      <div className="absolute top-0 w-full h-[500px]">
        <FloatingCard />
      </div>

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

      {/* Bottom Content Group (Left Aligned) */}
      <div className="relative z-10 flex flex-col items-start gap-6 w-full mt-auto">
        <div className="-rotate-12 flex-none origin-bottom-left -ml-2">
          <FloatingIcon />
        </div>
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[32px] text-white">
          Marketing
        </p>
      </div>
    </div>
  );
}
