import React from "react";
import { Palette, MousePointer2, Type } from "lucide-react";

function ColorSwatch({ color, label }: { color: string; label?: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="size-12 rounded-full shadow-lg border border-white/10"
        style={{ background: color }}
      />
      {label && (
        <span className="text-[10px] text-white/40 font-mono">{label}</span>
      )}
    </div>
  );
}

function FloatingCard() {
  return (
    <div className="absolute h-[380px] w-[500px] left-1/2 -translate-x-1/2 top-[40px] overflow-visible">
      {/* Frame Border & Shadow (Copied from WebDevCard) */}
      <div className="absolute contents left-0 top-0">
        <div className="absolute bg-[#262626] h-full w-full left-0 rounded-[32px] top-0">
          <div
            aria-hidden="true"
            className="absolute border-5 border-[rgba(255,255,255,0.03)] border-solid inset-[-5px] pointer-events-none rounded-[37px] shadow-[0px_0px_48px_10px_rgba(0,0,0,0.2),0px_4px_16px_8px_rgba(0,0,0,0.1)]"
          />
        </div>
      </div>

      {/* Header / Traffic Lights */}
      <div className="absolute h-[14px] left-[27px] top-[26px] w-[56px] z-50">
        <svg className="block size-full" fill="none" viewBox="0 0 56 14">
          <g id="Group 5">
            <circle cx="7" cy="7" r="7" fill="#8E8E8E" fillOpacity="0.23" />
            <circle cx="28" cy="7" r="7" fill="#8E8E8E" fillOpacity="0.23" />
            <circle cx="49" cy="7" r="7" fill="#8E8E8E" fillOpacity="0.23" />
          </g>
        </svg>
      </div>

      {/* App Interface Container */}
      <div className="absolute inset-0 pt-16 pb-4 px-4 flex gap-4">
        {/* Center Canvas (Full Width) */}
        <div className="flex-1 bg-[#1a1a1a] rounded-xl border border-white/5 relative overflow-hidden flex items-center justify-center">
          {/* Dot Grid Background */}
          <div className="absolute inset-0 bg-[radial-gradient(#333333_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />
          {/* Design Element (Button) */}
          <div className="relative group p-6 border border-[#916AFF] rounded-lg bg-[#252525] shadow-2xl scale-125">
            {/* Selection Label Placeholder */}
            <div className="absolute -top-3 left-0 bg-[#916AFF] px-1.5 py-0.5 rounded-sm flex items-center h-[17px]">
              <div className="w-16 h-1.5 bg-white/50 rounded-full" />
            </div>

            {/* Selection Corners */}
            <div className="absolute -top-1 -left-1 size-2 bg-white border border-[#916AFF]" />
            <div className="absolute -top-1 -right-1 size-2 bg-white border border-[#916AFF]" />
            <div className="absolute -bottom-1 -left-1 size-2 bg-white border border-[#916AFF]" />
            <div className="absolute -bottom-1 -right-1 size-2 bg-white border border-[#916AFF]" />

            {/* Component Content */}
            <div className="bg-[#916AFF] text-white w-32 h-10 px-6 py-2 rounded-md font-medium text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_-5px_rgba(145,106,255,0.5)]">
              {/* Text Placeholder */}
              <div className="w-16 h-2 bg-white/40 rounded-full" />
              <MousePointer2 size={12} className="rotate-[-15deg] fill-white" />
            </div>
          </div>

          {/* Floating Cursor (User) */}
          <div className="absolute bottom-12 right-12 drop-shadow-xl z-20">
            <MousePointer2 className="fill-[#F59E0B] text-black size-6" />
            <div className="absolute left-4 top-4 bg-[#F59E0B] px-2 py-1 rounded-full flex items-center justify-center">
              <div className="w-8 h-1.5 bg-black/20 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Inner Border Stroke */}
    </div>
  );
}

function PaletteIconVector() {
  return (
    <div className="text-white">
      <Palette size={44} strokeWidth={1.5} />
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
        <PaletteIconVector />
      </div>
    </div>
  );
}

export function UiUxCard() {
  return (
    <div className="bg-[rgba(26,26,26,0.4)] content-stretch flex flex-col gap-[10px] items-center justify-end overflow-clip px-[51px] py-[41px] relative rounded-[50px] w-[620px] h-[520px] shadow-2xl shrink-0">
      {/* Floating Design Tool Interface */}
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
        <div className="rotate-7 flex-none origin-bottom-left -ml-2">
          <FloatingIcon />
        </div>
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[32px] text-white">
          UI/UX Design
        </p>
      </div>
    </div>
  );
}
