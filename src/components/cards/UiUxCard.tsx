import React from 'react';
import { Palette } from 'lucide-react';
import Image from 'next/image';

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
            'linear-gradient(135deg, #575757 0%, #1a1a1a 50%, #2d2d2d 100%)',
          border: '1px solid rgba(255,255,255,0.15)',
          boxShadow:
            '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.3)',
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <PaletteIconVector />
      </div>
    </div>
  );
}

export const UiUxCard = React.memo(function UiUxCard() {
  return (
    <div className="bg-[rgba(26,26,26,0.4)] backdrop-blur-[7px] content-stretch flex flex-col gap-[10px] items-center justify-end overflow-clip px-[51px] py-[41px] relative rounded-[50px] w-[620px] h-[520px] shadow-2xl shrink-0">
      {/* Visual Image */}
      <div className="absolute top-0 -right-20 w-full h-full opacity-80 z-0">
        <Image
          src="/assets/hero-cards/design.png"
          alt="Design Visual"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Progressive Blur and Gradient Overlay */}
      <div className="absolute h-[340px] left-0 bottom-0 w-full pointer-events-none z-0">
        <div
          className="absolute inset-0 backdrop-blur-xs"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 30%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, transparent 0%, black 30%)',
          }}
        />
        <div
          className="absolute inset-0 backdrop-blur-sm"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent 30%, black 60%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, transparent 30%, black 60%)',
          }}
        />
        <div
          className="absolute inset-0 backdrop-blur-md"
          style={{
            maskImage:
              'linear-gradient(to bottom, transparent 60%, black 100%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, transparent 60%, black 100%)',
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
});
