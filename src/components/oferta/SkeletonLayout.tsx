import React from "react";

export function SkeletonLayout() {
  return (
    <div className="relative w-full max-w-[1150px] aspect-video group mx-auto">
      {/* Background Blobs - Positioned behind the container (z-[-1]) - Animated pulse for subtle movement */}
      <div className="absolute -top-[150px] left-[10%] w-[500px] h-[500px] bg-[#9b87f5]/20 rounded-full blur-[100px] animate-pulse pointer-events-none z-[-1]" />
      <div className="absolute -top-[150px] right-[10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse delay-1000 pointer-events-none z-[-1]" />

      {/* Animated Border Beam - Rotating conic gradient that creates a moving border effect - Visible in the gap between the inner content and outer bounds */}
      {/* Animated Border Beam and Glow */}
      <div className="absolute inset-[-5px] rounded-[65px] pointer-events-none z-0 hidden md:block">
        {/* Glow Layer */}
        <div className="absolute inset-0 rounded-[65px] overflow-hidden blur-xl opacity-70">
          <div className="absolute top-[50%] left-[50%] w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,transparent_0_340deg,#9b87f5_360deg)] animate-[spin_4s_linear_infinite]" />
        </div>
        {/* Sharp Beam Layer */}
        <div className="absolute inset-0 rounded-[65px] overflow-hidden">
          <div className="absolute top-[50%] left-[50%] w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,transparent_0_340deg,#9b87f5_360deg)] animate-[spin_4s_linear_infinite] opacity-60" />
        </div>
      </div>

      {/* Outer Border & Shadow Layer - Keeps the static definition and shadow */}
      <div
        aria-hidden="true"
        className="absolute inset-[-5px] border-[5px] border-solid border-white/5 rounded-[65px] pointer-events-none z-0 hidden md:block"
        style={{
          boxShadow:
            "0px 0px 48px 10px rgba(0,0,0,0.5), 0px 4px 16px 8px rgba(0,0,0,0.2)",
        }}
      />

      {/* Main Content Container */}
      <div className="relative h-full w-full bg-[#262626] rounded-[30px] md:rounded-[60px] overflow-hidden flex flex-col pt-[20px] px-[20px] md:pt-[42px] md:px-[42px] box-border z-10 border border-white/5 md:border-none">
        {/* Glossy Border Effect (Inner) */}
        <div className="absolute inset-0 rounded-[30px] md:rounded-[60px] border border-white/5 pointer-events-none" />

        {/* Top Header Section */}
        <div className="flex justify-between items-start mb-4 shrink-0">
          <div className="flex flex-col gap-6">
            {/* Window Controls */}
            <div className="flex gap-3">
              <div className="w-[14px] h-[14px] rounded-full bg-[#8E8E8E] opacity-25" />
              <div className="w-[14px] h-[14px] rounded-full bg-[#8E8E8E] opacity-25" />
              <div className="w-[14px] h-[14px] rounded-full bg-[#8E8E8E] opacity-25" />
            </div>

            {/* Title Bar */}
            <div className="w-[150px] md:w-[246px] h-[42px] rounded-[12px] relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-r from-[#555555] to-transparent opacity-100" />
            </div>
          </div>

          {/* Right Actions Group */}
          <div className="flex gap-3 self-end">
            {/* Square Placeholder */}
            <div className="w-[42px] h-[42px] rounded-[12px] relative shrink-0 hidden sm:block">
              <div className="absolute inset-0 rounded-[12px] bg-linear-to-b from-[#555555] to-transparent" />
            </div>
            {/* Avatar */}
            <div className="w-[42px] h-[42px] rounded-full relative shrink-0">
              <div className="absolute inset-0 rounded-full bg-linear-to-b from-[#555555] to-transparent" />
            </div>
          </div>
        </div>

        {/* Middle Section: Centered Content */}
        <div className="flex-1 flex items-center justify-center w-full mb-6">
          <div className="flex flex-col md:flex-row gap-[30px] md:gap-[50px] items-center md:items-start">
            {/* Left: Large Image Placeholder */}
            <div className="w-[200px] h-[200px] md:w-[280px] md:h-[285px] rounded-[16px] relative overflow-hidden shrink-0">
              <div className="absolute inset-0 bg-linear-to-b from-[#555555] to-transparent" />
            </div>

            {/* Right: Text & Button */}
            <div className="flex flex-col w-[370px]">
              {/* Text Line 1 */}
              <div className="w-full h-[32px] rounded-full relative overflow-hidden mb-2">
                <div className="absolute inset-0 bg-linear-to-r from-[#555555] to-transparent" />
              </div>

              {/* Text Line 2 */}
              <div className="w-[120px] h-[20px] rounded-full relative overflow-hidden mb-6">
                <div className="absolute inset-0 bg-linear-to-r from-[#9b87f5]/50 to-transparent" />
              </div>

              {/* Large Text Block */}
              <div className="w-full h-[80px] md:h-[100px] rounded-[16px] relative overflow-hidden mb-8">
                <div className="absolute inset-0 bg-linear-to-br from-[#555555] to-transparent" />
              </div>

              {/* Purple Button */}
              <div
                className="w-[128px] h-[50px] rounded-[16px] relative group"
                style={{
                  boxShadow:
                    "0px 4px 7px 0px rgba(0,0,0,0.1), 0px 0px 16px 4px rgba(0,0,0,0.1)",
                }}
              >
                <div className="absolute inset-0 rounded-[16px] bg-linear-to-r from-[#9b87f5] to-[#433d5c]" />
                {/* Inner shadow overlay */}
                <div className="absolute inset-0 rounded-[16px] shadow-[inset_0px_-5px_6.4px_1px_rgba(0,0,0,0.25)]" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Cards Row */}
        <div className="flex gap-[12px] shrink-0 h-[80px] md:h-[120px] w-full translate-y-4 md:translate-y-10">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex-1 rounded-[12px] relative overflow-hidden shadow-2xl"
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(141.88deg, rgb(85, 85, 85) 0%, rgba(85, 85, 85, 0) 105.02%)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
