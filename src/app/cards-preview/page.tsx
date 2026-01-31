"use client";

import React from "react";
import {
  Code2,
  Palette,
  Search,
  BarChart3,
  Smartphone,
  Layout,
  ShoppingCart,
  MessageSquare,
} from "lucide-react";
import { WebDevCard } from "@/components/cards/WebDevCard";
import { EcommerceCard } from "@/components/cards/EcommerceCard";
import { SocialMediaCard } from "@/components/cards/SocialMediaCard";
import { MarketingCard } from "@/components/cards/MarketingCard";
import { UiUxCard } from "@/components/cards/UiUxCard";
import { CmsCard } from "@/components/cards/CmsCard";
import { SeoCard } from "@/components/cards/SeoCard";
import { ResponsivenessCard } from "@/components/cards/ResponsivenessCard";

const CARDS_DATA = [
  {
    id: "code",
    theme: "blue",
    icon: Code2,
    title: "Development",
    content: (
      <div className="w-full flex justify-center h-[260px] overflow-visible relative z-10 scale-[0.8] origin-top">
        <WebDevCard />
      </div>
    ),
  },
  {
    id: "design",
    theme: "purple",
    icon: Palette,
    title: "UI/UX Design",
    content: (
      <div className="w-full flex justify-center h-[260px] overflow-visible relative z-10 scale-[0.8] origin-top">
        <UiUxCard />
      </div>
    ),
  },
  {
    id: "mobile",
    theme: "blue",
    icon: Smartphone,
    title: "Responsywność",
    content: (
      <div className="w-full flex justify-center h-[260px] overflow-visible relative z-10 scale-[0.8] origin-top">
        <ResponsivenessCard />
      </div>
    ),
  },
  {
    id: "seo",
    theme: "green",
    icon: Search,
    title: "SEO & Pozycjonowanie",
    content: (
      <div className="w-full flex justify-center h-[260px] overflow-visible relative z-10 scale-[0.8] origin-top">
        <SeoCard />
      </div>
    ),
  },
  {
    id: "marketing",
    theme: "orange",
    icon: BarChart3,
    title: "Marketing",
    content: (
      <div className="w-full flex justify-center h-[260px] overflow-visible relative z-10 scale-[0.8] origin-top">
        <MarketingCard />
      </div>
    ),
  },
  {
    id: "cms",
    theme: "purple",
    icon: Layout,
    title: "System CMS",
    content: (
      <div className="w-full flex justify-center h-[260px] overflow-visible relative z-10 scale-[0.8] origin-top">
        <CmsCard />
      </div>
    ),
  },
  {
    id: "ecommerce",
    theme: "pink",
    icon: ShoppingCart,
    title: "E-commerce",
    content: (
      <div className="w-full flex justify-center h-[260px] overflow-visible relative z-10 scale-[0.8] origin-top">
        <EcommerceCard />
      </div>
    ),
  },
  {
    id: "social",
    theme: "orange",
    icon: MessageSquare,
    title: "Social Media",
    content: (
      <div className="w-full flex justify-center h-[260px] overflow-visible relative z-10 scale-[0.8] origin-top">
        <SocialMediaCard />
      </div>
    ),
  },
];

export default function CardsPreviewPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] p-10 font-sans">
      <h1 className="text-4xl text-white mb-10 font-display">
        Hero Cards Preview
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {CARDS_DATA.map((card) => (
          <div
            key={card.id}
            className="border border-white/10 rounded-2xl p-4 bg-white/5 relative overflow-hidden"
          >
            <div className="mb-4 text-white text-sm opacity-50 uppercase tracking-widest">
              {card.title}
            </div>
            <div className="relative">{card.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
