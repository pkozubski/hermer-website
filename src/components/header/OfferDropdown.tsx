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

const OFFER_ITEMS = [
  {
    title: "Strony WWW",
    description: "Profesjonalne witryny, które sprzedają i budują wizerunek.",
    icon: LayoutTemplate,
    href: "/oferta/strony-www",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
  },
  {
    title: "Sklepy Internetowe",
    description: "Funkcjonalne platformy e-commerce nastawione na konwersję.",
    icon: ShoppingBag,
    href: "/oferta/sklepy-internetowe",
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
  },
  {
    title: "Pozycjonowanie / SEO",
    description: "Wyższa widoczność w Google i wartościowy ruch na stronie.",
    icon: Search,
    href: "/oferta/pozycjonowanie",
    color: "text-green-400",
    bgColor: "bg-green-400/10",
  },
  {
    title: "Kampanie Reklamowe",
    description: "Skuteczne kampanie Google Ads i Facebook Ads.",
    icon: Megaphone,
    href: "/oferta/kampanie-reklamowe",
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
  },
];

export const OfferDropdown = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] p-2 bg-[#171717]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-[60]"
    >
      <div className="grid grid-cols-2 gap-2 p-2">
        {OFFER_ITEMS.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="group block p-4 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/5"
          >
            <div className="flex items-start gap-4">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${item.bgColor} group-hover:scale-110 transition-transform duration-300`}
              >
                <item.icon size={24} className={item.color} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-white font-semibold text-lg group-hover:text-[#916AFF] transition-colors">
                    {item.title}
                  </h3>
                  <ArrowRight
                    size={14}
                    className="text-white/30 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed group-hover:text-neutral-300 transition-colors">
                  {item.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer/CTA Area */}
      <div className="p-4 bg-white/5 border-t border-white/5 flex items-center justify-between">
        <div className="text-sm text-neutral-400">Nie wiesz co wybrać?</div>
        <Link
          href="/#contact"
          className="text-sm font-semibold text-[#916AFF] hover:text-white transition-colors flex items-center gap-1"
        >
          Umów bezpłatną konsultację <ArrowRight size={14} />
        </Link>
      </div>
    </motion.div>
  );
};
