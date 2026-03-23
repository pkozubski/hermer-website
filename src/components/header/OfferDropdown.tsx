"use client";

import React, { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  LayoutTemplate,
  ShoppingBag,
  Search,
  Megaphone,
  ArrowRight,
  Sparkles,
  PhoneCall,
} from "lucide-react";

export const OFFER_ITEMS = [
  {
    title: "Strony www",
    description: "Profesjonalne witryny, które budują wizerunek i sprzedają.",
    icon: LayoutTemplate,
    href: "/oferta/strony-www",
  },
  {
    title: "Sklepy online",
    description: "Funkcjonalne platformy e-commerce nastawione na konwersję.",
    icon: ShoppingBag,
    href: "/oferta/sklepy-internetowe",
  },
  {
    title: "Marketing",
    description: "Skuteczne kampanie Meta i Google Ads, które generują leady.",
    icon: Megaphone,
    href: "/oferta/marketing",
  },
  {
    title: "Pozycjonowanie SEO",
    description: "Bądź widoczny na szczycie wyników wyszukiwania w Google.",
    icon: Search,
    href: "/oferta/pozycjonowanie",
  },
];

export const OfferDropdown = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLAnchorElement[]>([]);

  useGSAP(
    () => {
      if (!dropdownRef.current) return;

      const tl = gsap.timeline();

      tl.fromTo(
        dropdownRef.current,
        { autoAlpha: 0, y: 15, rotateX: -4, transformOrigin: "top center" },
        {
          autoAlpha: 1,
          y: 0,
          rotateX: 0,
          duration: 0.4,
          ease: "power3.out",
        },
      );

      if (itemsRef.current.length > 0) {
        tl.fromTo(
          itemsRef.current,
          { autoAlpha: 0, x: -10 },
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.3,
            stagger: 0.05,
            ease: "power2.out",
          },
          "-=0.2",
        );
      }
    },
    { scope: dropdownRef },
  );

  return (
    <div
      ref={dropdownRef}
      className="absolute top-[calc(100%+0.5rem)] left-1/2 -translate-x-1/2 w-[840px] p-2 bg-neutral-900/95 backdrop-blur-2xl border border-white/5 rounded-[32px] shadow-2xl shadow-black/60 overflow-hidden z-60 flex"
    >
      {/* Main Links */}
      <div className="w-[60%] grid grid-cols-2 gap-1.5 p-3 relative z-10">
        {OFFER_ITEMS.map((item, i) => (
          <Link
            key={item.title}
            href={item.href}
            ref={(el) => {
              if (el) itemsRef.current[i] = el;
            }}
            className="group relative flex flex-col items-start gap-4 p-5 rounded-2xl border border-transparent hover:border-white/5 hover:bg-white/[0.03] transition-colors duration-300 overflow-hidden"
          >
            {/* Subtle light follow effect -> pure CSS hover gradient */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_100%)] pointer-events-none" />

            <div className="relative w-11 h-11 shrink-0 group-hover:scale-110 transition-transform duration-500 ease-out flex items-center justify-center">
              <div
                className="absolute inset-0 rounded-[14px] opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, #383838 0%, #1a1a1a 50%, #2d2d2d 100%)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow:
                    "0 4px 12px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.3)",
                }}
              />
              <item.icon
                size={20}
                className="text-white relative z-10"
                strokeWidth={1.5}
              />
            </div>

            <div className="flex flex-col gap-2 relative z-10 mt-1">
              <h3 className="text-white font-medium pl-0.5 text-[15px] group-hover:text-[#916AFF] transition-colors flex items-center gap-2">
                {item.title}
                <ArrowRight
                  size={14}
                  className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#916AFF]"
                />
              </h3>
              <p className="text-neutral-400 pl-0.5 text-[13px] leading-relaxed group-hover:text-neutral-300 transition-colors">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Right Column: Featured CTA */}
      <div className="w-[40%] p-2">
        <div className="w-full h-full rounded-[24px] relative overflow-hidden flex flex-col justify-end p-6 border border-white/5 group bg-[#151515]">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white opacity-[0.03] blur-[60px] rounded-full group-hover:opacity-5 transition-opacity duration-700 pointer-events-none" />

          <div className="relative z-10 flex flex-col gap-4">
            <div className="relative w-10 h-10 shrink-0 group-hover:scale-110 transition-transform duration-500 ease-out flex items-center justify-center mb-2">
              <div
                className="absolute inset-0 rounded-[12px] opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, #383838 0%, #1a1a1a 50%, #2d2d2d 100%)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow:
                    "0 4px 12px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.3)",
                }}
              />
              <Sparkles size={18} className="text-white relative z-10" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-lg mb-2">
                Rozpocznijmy współpracę
              </h4>
              <p className="text-sm font-medium text-neutral-400 text-pretty leading-relaxed">
                Opowiedz nam o swoim projekcie podczas bezpłatnej, 15-minutowej
                konsultacji z ekspertem.
              </p>
            </div>
            <Link
              href="/kontakt"
              className="mt-2 w-full py-3 bg-white text-black text-sm font-medium rounded-xl flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors duration-300"
            >
              <PhoneCall size={16} />
              Umów darmową wycenę
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
