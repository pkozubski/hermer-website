"use client";

import React, { useEffect, useState } from "react";
import { Terminal } from "lucide-react";
import { GlassBentoCard } from "../GlassBentoCard";
import { DeepDarkWindow } from "../visuals/DeepDarkWindow";
import { DeepDarkPhone } from "../visuals/DeepDarkPhone";

export const TechnicalAuditCard = ({
  className = "",
}: {
  className?: string;
}) => {
  const [score, setScore] = useState(0);
  const [isScanning, setIsScanning] = useState(true);

  useEffect(() => {
    let rafId: number | null = null;
    const duration = 2500;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setScore(Math.round(98 * eased));

      if (t < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        setScore(98);
        setIsScanning(false);
      }
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <GlassBentoCard
      title="Audit Techniczny"
      description="Kompleksowa analiza. Sprawdzamy responsywność, kod i wydajność Twojej strony."
      icon={Terminal}
      className={className}
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-green-500/10 blur-[100px] rounded-full"></div>

        {/* Scene Container */}
        <div className="relative w-full h-full max-w-[340px] flex items-center justify-center translate-y-2">
          {/* 1. LAPTOP - Realistic Style with DeepDarkWindow */}
          <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[300px] z-10 transition-transform duration-500 group-hover:scale-105">
            {/* Laptop Screen using DeepDarkWindow */}
            <DeepDarkWindow
              className="w-[140%] h-[320px] shadow-2xl z-20"
              headerClassName="bg-[#171717]"
            >
              {/* Dashboard Content (Google PageSpeed Style) */}
              <div className="relative w-full h-full bg-[#202124] flex flex-col overflow-hidden font-sans">
                {/* Search Bar / Header Mock */}
                <div className="flex items-center justify-center p-3 border-b border-[#3c4043]">
                  <div className="w-[80%] h-6 bg-[#303134] rounded-full flex items-center px-4 relative">
                    <div className="w-full h-2 bg-[#5f6368] rounded-full opacity-30"></div>
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 flex flex-col items-center justify-center relative p-2">
                  {/* Grid Background (Subtle) */}
                  <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage:
                        "radial-gradient(#fff 1px, transparent 1px)",
                      backgroundSize: "10px 10px",
                    }}
                  ></div>

                  {/* PSI Grid Layout */}
                  <div className="flex items-center gap-6 z-10">
                    {/* Main Big Score */}
                    <div className="relative w-28 h-28 flex items-center justify-center">
                      <svg className="absolute inset-0 w-full h-full -rotate-90">
                        <circle
                          cx="56"
                          cy="56"
                          r="48"
                          fill="transparent"
                          stroke="#3c4043"
                          strokeWidth="8"
                        />
                        <circle
                          cx="56"
                          cy="56"
                          r="48"
                          fill="transparent"
                          stroke="#0cce6b"
                          strokeWidth="8"
                          strokeLinecap="round"
                          className="audit-draw-main"
                          style={{
                            strokeDasharray: "301.6",
                            strokeDashoffset: "301.6",
                          }}
                        />
                      </svg>
                      <div className="flex flex-col items-center">
                        <span className="text-4xl font-bold text-[#e8eaed] tabular-nums">
                          {score}
                        </span>
                      </div>
                    </div>

                    {/* PSI 4 Categories */}
                    <div className="grid grid-cols-2 gap-3">
                      {["P", "A", "B", "S"].map((label, i) => (
                        <div
                          key={i}
                          className="flex flex-col items-center gap-1"
                        >
                          <div className="relative w-8 h-8 flex items-center justify-center">
                            <svg className="absolute inset-0 w-full h-full -rotate-90">
                              <circle
                                cx="16"
                                cy="16"
                                r="14"
                                fill="transparent"
                                stroke="#3c4043"
                                strokeWidth="3"
                              />
                              <circle
                                cx="16"
                                cy="16"
                                r="14"
                                fill="transparent"
                                stroke="#0cce6b"
                                strokeWidth="3"
                                strokeLinecap="round"
                                className="audit-draw-small"
                                style={{
                                  strokeDasharray: "88",
                                  strokeDashoffset: "88",
                                  animationDelay: `${1 + i * 0.2}s`,
                                }}
                              />
                            </svg>
                            <span className="text-[8px] font-bold text-[#e8eaed]">
                              {98 - i}
                            </span>
                          </div>
                          <div className="w-8 h-1 bg-[#5f6368] rounded-full opacity-50"></div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Scanning Laser Beam (Blue for Google Tech feel) */}
                  {isScanning && (
                    <div className="absolute w-full h-[60px] bg-gradient-to-b from-transparent via-[#8ab4f8]/20 to-transparent z-50 pointer-events-none audit-scan-laptop">
                      <div className="absolute bottom-0 w-full h-[1px] bg-[#8ab4f8] shadow-[0_0_10px_#4285F4]"></div>
                    </div>
                  )}
                </div>
              </div>
            </DeepDarkWindow>

            {/* Laptop Base */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[110%] h-3 bg-[#1a1a1a] rounded-b-xl border-t border-white/5 z-0 transform perspective-[500px] rotate-x-12 shadow-2xl"></div>
          </div>

          {/* 2. PHONE - Realistic Style with DeepDarkPhone */}
          <div className="absolute top-[25%] left-[-15px] w-[70px] -rotate-6 transition-transform duration-500 group-hover:-translate-x-2 group-hover:rotate-[-8deg] z-30">
            <DeepDarkPhone className="w-[180px] h-[280px] shadow-xl border-zinc-800">
              {/* Screen Content */}
              <div className="w-full h-full bg-[#202124] flex flex-col items-center pt-12 relative overflow-hidden font-sans">
                {/* Mobile Search Bar */}
                <div className="w-[80%] h-4 bg-[#303134] rounded-full mb-6"></div>

                {/* Mobile Score */}
                <div className="relative w-16 h-16 flex items-center justify-center mb-4">
                  <svg className="absolute inset-0 w-full h-full -rotate-90">
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      fill="transparent"
                      stroke="#3c4043"
                      strokeWidth="5"
                    />
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      fill="transparent"
                      stroke="#0cce6b"
                      strokeWidth="5"
                      strokeLinecap="round"
                      className="audit-draw-mobile"
                      style={{
                        strokeDasharray: "176",
                        strokeDashoffset: "176",
                      }}
                    />
                  </svg>
                  <span className="text-lg font-bold text-[#e8eaed]">98</span>
                </div>

                {/* Mobile Metrics */}
                <div className="w-full px-4 flex flex-col gap-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-full h-2 bg-[#303134] rounded-sm flex items-center overflow-hidden"
                    >
                      <div className="h-full bg-[#0cce6b] w-[90%]"></div>
                    </div>
                  ))}
                </div>

                {/* Mobile Scan Line */}
                <div className="absolute w-full h-[30px] bg-gradient-to-b from-transparent via-[#8ab4f8]/20 to-transparent z-20 pointer-events-none audit-scan-mobile">
                  <div className="absolute bottom-0 w-full h-[1px] bg-[#8ab4f8]"></div>
                </div>
              </div>
            </DeepDarkPhone>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes auditDrawMain {
          to {
            stroke-dashoffset: 6.03;
          }
        }

        @keyframes auditDrawSmall {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes auditDrawMobile {
          to {
            stroke-dashoffset: 3.52;
          }
        }

        @keyframes auditScanLaptop {
          0% {
            top: -10%;
          }
          80% {
            top: 110%;
          }
          100% {
            top: 110%;
          }
        }

        @keyframes auditScanMobile {
          0% {
            top: -20%;
          }
          100% {
            top: 120%;
          }
        }

        .audit-draw-main {
          animation: auditDrawMain 2.5s ease-out forwards;
        }

        .audit-draw-small {
          animation: auditDrawSmall 1s ease-out forwards;
        }

        .audit-draw-mobile {
          animation: auditDrawMobile 2.5s ease-out forwards;
        }

        .audit-scan-laptop {
          animation: auditScanLaptop 2s linear infinite;
        }

        .audit-scan-mobile {
          animation: auditScanMobile 1.5s linear infinite;
          animation-delay: 0.5s;
        }
      `}</style>
    </GlassBentoCard>
  );
};
