"use client";

import React from "react";
import { LayoutTemplate } from "lucide-react";

export const WebDesignCard = ({ className = "" }: { className?: string }) => {
  return (
    <a
      href="/oferta/strony-www"
      className={`@container group relative w-full rounded-[40px] overflow-hidden bg-neutral-900 hover:shadow-2xl hover:shadow-black/50 transition-all duration-700 block cursor-pointer border border-white/5 ${className}`}
    >
      {/* --- VISUAL BACKDROP --- */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Background Subtle Grid */}
        <div
          className="absolute inset-0 z-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Browser Window Composition (New Design) */}
        <div className="absolute -right-[40%] -bottom-[20%] w-[180%] scale-[0.5] origin-bottom-right sm:scale-[0.5] sm:-right-[20%] @lg:scale-[0.7] @lg:-bottom-[20%] @lg:-right-[65%] z-10 pointer-events-none select-none transition-transform duration-700 group-hover:-translate-y-4 group-hover:-translate-x-2">
          <div className="relative w-[1225px] h-[678px]">
            {/* Group 2 - Background */}
            <div className="absolute left-[54px] top-0">
              <div className="bg-[#262626] h-[678px] rounded-[60px] w-[1171px] relative">
                <div
                  aria-hidden="true"
                  className="absolute border-[5px] border-[rgba(255,255,255,0.03)] border-solid inset-[-5px] pointer-events-none rounded-[65px] shadow-[0px_0px_48px_10px_rgba(0,0,0,0.2),0px_4px_16px_8px_rgba(0,0,0,0.1)]"
                />
              </div>
            </div>

            {/* Group 3 - Traffic Lights */}
            <div className="absolute h-[20px] left-[115px] top-[45px] w-[92px]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 92 20"
              >
                <g id="Group 5">
                  <circle
                    cx="10"
                    cy="10"
                    fill="#8E8E8E"
                    fillOpacity="0.23"
                    id="Ellipse 4"
                    r="10"
                  />
                  <circle
                    cx="46"
                    cy="10"
                    fill="#8E8E8E"
                    fillOpacity="0.23"
                    id="Ellipse 5"
                    r="10"
                  />
                  <circle
                    cx="82"
                    cy="10"
                    fill="#8E8E8E"
                    fillOpacity="0.23"
                    id="Ellipse 6"
                    r="10"
                  />
                </g>
              </svg>
            </div>

            {/* Group 4 - Content */}
            <div className="absolute left-[151px] top-[105px]">
              {/* Bars */}
              <div className="absolute bg-gradient-to-r from-[#555] h-[28px] left-[0px] rounded-[100px] to-[rgba(155,155,155,0)] top-[0px] w-[663px]" />
              <div className="absolute bg-gradient-to-r from-[#555] h-[28px] left-[0px] rounded-[100px] to-[rgba(155,155,155,0)] top-[162px] w-[303px]" />

              {/* Cards */}
              <div className="absolute bg-[#262626] h-[63px] left-[3px] rounded-[12px] shadow-[0px_0px_16px_4px_rgba(0,0,0,0.1)] top-[237px] w-[264px]">
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-1px_-1px_9.8px_0px_rgba(255,255,255,0.04)]" />
              </div>
              <div className="absolute border border-[rgba(255,255,255,0.27)] border-solid h-[63px] left-[303px] opacity-50 rounded-[12px] shadow-[0px_0px_16px_4px_rgba(0,0,0,0.05)] top-[237px] w-[264px]">
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-1px_-1px_9.8px_0px_rgba(255,255,255,0.04)]" />
              </div>

              {/* Frame */}
              <div className="absolute content-stretch flex flex-col items-start left-[0px] top-[63px]">
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] opacity-80 relative shrink-0">
                  {/* Frame 1 */}
                  <div className="col-1 content-stretch flex items-center justify-center ml-[3px] mt-[2px] p-[2px] relative row-1">
                    <div
                      aria-hidden="true"
                      className="absolute border border-[#0c8ce9] border-solid inset-0 pointer-events-none"
                    />
                    <p className="font-sans font-medium leading-[normal] not-italic relative shrink-0 text-[48px] text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">
                      Moja profesjonalna strona
                    </p>
                  </div>
                  {/* Group 1 - Wireframe Lines */}
                  <div className="col-1 h-[66px] ml-0 mt-0 relative row-1 w-[605px] pointer-events-none">
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 605 66"
                    >
                      <rect x="0" y="0" width="605" height="66" fill="none" />
                      <rect
                        x="0"
                        y="0"
                        width="5"
                        height="5"
                        fill="white"
                        fillOpacity="0.5"
                      />
                      <rect
                        x="600"
                        y="0"
                        width="5"
                        height="5"
                        fill="white"
                        fillOpacity="0.5"
                      />
                      <rect
                        x="0"
                        y="61"
                        width="5"
                        height="5"
                        fill="white"
                        fillOpacity="0.5"
                      />
                      <rect
                        x="600"
                        y="61"
                        width="5"
                        height="5"
                        fill="white"
                        fillOpacity="0.5"
                      />
                      <path
                        d="M5 0H0V5"
                        stroke="#0A75C2"
                        strokeWidth="2"
                        fill="none"
                      />
                      <path
                        d="M600 0H605V5"
                        stroke="#0A75C2"
                        strokeWidth="2"
                        fill="none"
                      />
                      <path
                        d="M5 66H0V61"
                        stroke="#0A75C2"
                        strokeWidth="2"
                        fill="none"
                      />
                      <path
                        d="M600 66H605V61"
                        stroke="#0A75C2"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                  </div>
                </div>
                <p className="absolute font-sans font-extralight leading-[normal] not-italic right-[16px] text-[14px] text-white top-[-16px] translate-x-full">
                  H1
                </p>
              </div>
            </div>

            {/* Floating Pen Tool Frame */}
            <div
              className="absolute flex items-center justify-center left-0 size-[107.778px] top-[63px]"
              style={{ transform: "rotate(-15deg)" }}
            >
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
                ></div>
                {/* Pen Tool Icon */}
                <div className="absolute h-[53px] left-[18px] top-[17px] w-[52px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <path
                      d="M4 4L33 11L36 26L26 36L11 33L4 4ZM4 4L19.172 19.172M24 38L38 24L44 30L30 44L24 38ZM26 22C26 24.2091 24.2091 26 22 26C19.7909 26 18 24.2091 18 22C18 19.7909 19.7909 18 22 18C24.2091 18 26 19.7909 26 22Z"
                      stroke="#fff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- CONTENT OVERLAY --- */}
      <div className="absolute inset-0 bg-linear-to-r from-neutral-900 via-neutral-900/90 to-transparent opacity-100" />

      {/* Text Content */}
      <div className="absolute left-0 top-0 bottom-0 w-full p-8 @lg:p-12 flex flex-col z-20 pointer-events-none">
        {/* Spacer Top - grows on Desktop to push content down */}
        <div className="flex-grow-0 @lg:flex-grow transition-[flex-grow] duration-700 ease-in-out min-h-0" />

        <div className="relative z-10 pointer-events-auto w-[320px] max-w-full">
          <div className="pb-4 mb-4 border-b border-white/10">
            <h3 className="text-3xl lg:text-4xl font-bold tracking-tight text-white mb-2">
              Tworzenie stron internetowych
            </h3>
          </div>

          <div className="flex justify-between items-start">
            <p className="text-neutral-400 text-sm lg:text-base font-medium leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-500">
              Tworzymy strony, które dobrze wyglądają i prowadzą użytkownika do
              kontaktu, zapytania lub zakupu. Na starcie wspólnie ustalamy, do
              kogo ma trafić strona i jaki ma spełniać cel, a potem przekładamy
              to na przejrzystą strukturę, treści i projekt, które ułatwiają
              decyzję o kontakcie.
            </p>
          </div>
        </div>

        {/* Spacer Bottom - grows on Mobile to push content up */}
        <div className="flex-grow @lg:flex-grow-0 transition-[flex-grow] duration-700 ease-in-out min-h-0" />
      </div>
    </a>
  );
};
