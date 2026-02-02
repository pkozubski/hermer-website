import React from "react";

interface DeepDarkPhoneProps {
  children: React.ReactNode;
  className?: string;
}

export const DeepDarkPhone: React.FC<DeepDarkPhoneProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`relative ${className}`}>
      {/* Outer Frame with Ring */}
      <div className="absolute inset-0 bg-[#262626] rounded-[32px]">
        {/* Border Ring matching DeepDarkWindow */}
        <div
          aria-hidden="true"
          className="absolute inset-[-4px] border-4 border-[rgba(255,255,255,0.03)] border-solid rounded-[36px] pointer-events-none shadow-[0px_0px_48px_10px_rgba(0,0,0,0.2),0px_4px_16px_8px_rgba(0,0,0,0.1)]"
        />
      </div>

      {/* Dynamic Island Notch */}
      <div className="absolute top-[11px] left-1/2 -translate-x-1/2 h-[25px] w-[80px] group-hover:w-[100px] group-hover:scale-[1.02] bg-black rounded-full z-50 transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] pointer-events-none" />

      {/* Content Area */}
      <div className="relative h-full w-full overflow-hidden rounded-[32px] bg-[#262626] p-1">
        {/* Screen */}
        <div className="w-full h-full bg-neutral-900 overflow-hidden relative rounded-[30px]">
          {children}
        </div>
      </div>
    </div>
  );
};
