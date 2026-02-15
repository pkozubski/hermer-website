"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  LayoutTemplate,
  ShoppingBag,
  Search,
  Megaphone,
  ArrowRight,
} from "lucide-react";

export const OFFER_ITEMS = [
  {
    title: "Strony www",
    description: "Profesjonalne witryny, które sprzedają i budują wizerunek.",
    icon: LayoutTemplate,
    href: "/oferta/strony-www/",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
  },
  {
    title: "Sklepy online",
    description: "Funkcjonalne platformy e-commerce nastawione na konwersję.",
    icon: ShoppingBag,
    href: "/oferta/sklepy-internetowe/",
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
  },
  {
    title: "Marketing",
    description: "Skuteczne kampanie Google Ads i Facebook Ads, SEO i więcej.",
    icon: Megaphone,
    href: "/oferta/marketing/",
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
  },
  {
    title: "Pozycjonowanie SEO",
    description: "Bądź widoczny na szczycie wyników wyszukiwania Google.",
    icon: Search,
    href: "/oferta/pozycjonowanie",
    color: "text-green-400",
    bgColor: "bg-green-400/10",
  },
];

export const OfferDropdown = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[900px] bg-[#171717] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-[60]"
    >
      <div className="grid grid-cols-4 gap-2 p-4">
        {OFFER_ITEMS.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="group flex flex-col items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/5"
          >
            {/* Styled Icon Container */}
            <div className="relative w-12 h-12 shrink-0 group-hover:scale-105 transition-transform duration-300">
              <div
                className="absolute inset-0 rounded-[14px]"
                style={{
                  background:
                    "linear-gradient(135deg, #3A3A3A 0%, #111111 50%, #222222 100%)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow:
                    "0 4px 16px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.3)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <item.icon size={22} className="text-white" strokeWidth={1.5} />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <h3 className="text-white font-semibold text-sm group-hover:text-[#916AFF] transition-colors">
                  {item.title}
                </h3>
              </div>
              <p className="text-neutral-400 text-xs leading-relaxed group-hover:text-neutral-300 transition-colors">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer/CTA Area */}
      <div className="py-3 px-6 bg-white/5 border-t border-white/5 flex items-center justify-between">
        <div className="text-xs text-neutral-400">Nie wiesz co wybrać?</div>
        <Link
          href="/kontakt"
          className="text-xs font-semibold text-[#916AFF] hover:text-white transition-colors flex items-center gap-1"
        >
          Umów bezpłatną konsultację <ArrowRight size={12} />
        </Link>
      </div>
    </motion.div>
  );
};
