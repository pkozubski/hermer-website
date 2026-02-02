import React from "react";

interface DeepDarkWindowProps {
  children: React.ReactNode;
  className?: string;
  headerClassName?: string;
}

export const DeepDarkWindow: React.FC<DeepDarkWindowProps> = ({
  children,
  className = "",
  headerClassName = "bg-neutral-900",
}) => {
  return (
    <div className={`relative ${className}`}>
      {/* Outer Frame with Ring */}
      <div className="absolute inset-0 bg-[#262626] rounded-[24px]">
        {/* Border Ring matching WebDevCard */}
        <div className="absolute inset-[-4px] border-4 border-[rgba(255,255,255,0.03)] rounded-[28px] pointer-events-none shadow-[0px_0px_48px_10px_rgba(0,0,0,0.2),0px_4px_16px_8px_rgba(0,0,0,0.1)]" />
      </div>

      {/* Traffic Lights */}
      <div className="absolute top-[18px] left-[20px] h-[12px] w-[50px] z-50 pointer-events-none">
        <svg className="block w-full h-full" fill="none" viewBox="0 0 56 14">
          <circle
            cx="7"
            cy="7"
            r="7"
            className="fill-[#8E8E8E] opacity-25 transition-all duration-300 group-hover:fill-[#FF5F56] group-hover:opacity-100"
          />
          <circle
            cx="28"
            cy="7"
            r="7"
            className="fill-[#8E8E8E] opacity-25 transition-all duration-300 group-hover:fill-[#FFBD2E] group-hover:opacity-100"
          />
          <circle
            cx="49"
            cy="7"
            r="7"
            className="fill-[#8E8E8E] opacity-25 transition-all duration-300 group-hover:fill-[#27C93F] group-hover:opacity-100"
          />
        </svg>
      </div>

      {/* Content Area */}
      <div className="relative h-full w-full pt-[48px] px-1 pb-1 overflow-hidden rounded-[24px]">
        <div
          className={`w-full h-full overflow-hidden rounded-[20px] ${headerClassName}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
