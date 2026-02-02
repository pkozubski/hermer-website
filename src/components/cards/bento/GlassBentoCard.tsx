import React from "react";
import { LucideIcon } from "lucide-react";

interface GlassBentoCardProps {
  title: string;
  description?: string;
  icon: LucideIcon;
  children: React.ReactNode; // The visual content
  className?: string;
  contentAlign?: "left" | "right";
  onClick?: () => void;
}

export const GlassBentoCard: React.FC<GlassBentoCardProps> = ({
  title,
  description,
  icon: Icon,
  children,
  className = "",
  contentAlign = "left",
  onClick,
}) => {
  const isRight = contentAlign === "right";

  return (
    <div
      onClick={onClick}
      className={`group relative w-full h-full bg-[rgba(26,26,26,0.4)] backdrop-blur-[7px] flex flex-col items-center justify-end overflow-hidden rounded-[40px] shadow-xl border border-white/5 transition-transform duration-500 hover:scale-[1.01] ${className}`}
    >
      {/* Visual Content Area (Top/Center) */}
      <div className="absolute inset-x-0 top-0 bottom-0 overflow-hidden">
        {children}
      </div>

      {/* Progressive Blur and Gradient Overlay */}
      <div className="absolute h-[340px] left-0 bottom-0 w-full pointer-events-none z-10">
        <div
          className="absolute inset-0 backdrop-blur-[2px]"
          style={{
            maskImage: "linear-gradient(to bottom, transparent 0%, black 30%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 30%)",
          }}
        />
        <div
          className="absolute inset-0 backdrop-blur-xs"
          style={{
            maskImage: "linear-gradient(to bottom, transparent 30%, black 60%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 30%, black 60%)",
          }}
        />
        <div
          className="absolute inset-0 backdrop-blur-sm"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent 60%, black 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 60%, black 100%)",
          }}
        />
        {/* Color Gradient - Darkening towards bottom */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-[rgba(26,26,26,0.6)] to-[#1a1a1a]" />
      </div>

      {/* Content Group (Bottom) */}
      <div
        className={`relative z-20 flex flex-col gap-4 p-8 w-full mt-auto ${
          isRight ? "items-end text-right" : "items-start text-left"
        }`}
      >
        {/* Floating Icon */}
        <div
          className={`rotate-[-10deg] hover:rotate-0 transition-transform duration-500 origin-bottom-left mb-2 ${
            isRight ? "-mr-2 origin-bottom-right" : "-ml-2 origin-bottom-left"
          }`}
        >
          <div className="relative size-[72px]">
            <div
              className="absolute left-0 top-0 size-[72px] rounded-[20px]"
              style={{
                background:
                  "linear-gradient(135deg, #575757 0%, #1a1a1a 50%, #2d2d2d 100%)",
                border: "1px solid rgba(255,255,255,0.15)",
                boxShadow:
                  "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.3)",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <Icon size={36} strokeWidth={1.5} />
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-['Inter:Medium',sans-serif] font-medium leading-tight text-2xl md:text-3xl text-white mb-3">
            {title}
          </h3>
          {description && (
            <p className="text-neutral-400 text-sm md:text-base font-light leading-relaxed max-w-md">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
