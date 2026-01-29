"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import { SplitRevealTitle } from "./ui/SplitRevealTitle";
import { LineReveal } from "./ui/LineReveal";

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

interface HelpCategory {
  id: string;
  title: string;
  description: string;
  image: string;
}

const CATEGORIES: HelpCategory[] = [
  {
    id: "b2b-b2c",
    title: "Firmy B2B i B2C",
    description:
      "Porządkujemy komunikację i budujemy ścieżkę, która prowadzi klienta od pierwszego wejścia do zapytania lub zakupu.",
    image: "/images/who-we-help/b2b-b2c.png",
  },
  {
    id: "startups",
    title: "Startups",
    description:
      "Pomagamy wystartować z jasnym przekazem i stroną, która rozbudowuje się wraz z rozwojem biznesu.",
    image: "/images/who-we-help/startups.png",
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    description:
      "Upraszczamy ścieżkę zakupu, dopracowujemy prezentację oferty i usuwamy przeszkody, które zatrzymują klientów przed finalizacją.",
    image: "/images/who-we-help/ecommerce.png",
  },
  {
    id: "personal",
    title: "Marki osobiste",
    description:
      "Tworzymy spójną stronę pokazującą kompetencje firmy, budujemy zaufanie i zakres oferty, aby zachęcić klientów do kontaktu.",
    image: "/images/who-we-help/personal-brands.png",
  },
];

export const WhoWeHelp: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(CATEGORIES[0].id);

  return (
    <section className="relative w-full bg-neutral-900 py-24 overflow-hidden">
      <div className="container mx-auto px-4 mb-16 md:mb-24">
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <SplitRevealTitle
            line1="Komu"
            line2="pomagamy?"
            className="text-5xl md:text-8xl text-white tracking-tighter"
          />
          <LineReveal
            lines={[
              "Współpracujemy z firmami na różnych",
              "etapach rozwoju, które chcą skutecznie",
              "docierać do klientów w internecie.",
            ]}
            className="text-neutral-400 max-w-xs md:max-w-sm text-xs md:text-sm uppercase tracking-wide leading-relaxed"
          />
        </div>
      </div>

      <div className="w-full flex justify-center px-4 md:px-0">
        <div className="flex flex-col md:flex-row w-full max-w-[1400px] h-auto md:h-[600px] md:pl-8">
          {CATEGORIES.map((category) => (
            <Card
              key={category.id}
              category={category}
              isActive={activeId === category.id}
              onClick={() => setActiveId(category.id)}
              onHover={() => setActiveId(category.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface CardProps {
  category: HelpCategory;
  isActive: boolean;
  onClick: () => void;
  onHover: () => void;
}

const Card: React.FC<CardProps> = ({
  category,
  isActive,
  onClick,
  onHover,
}) => {
  return (
    <motion.div
      layout
      onClick={onClick}
      onMouseEnter={onHover}
      className={cn(
        "relative h-[240px] md:h-full cursor-pointer overflow-hidden rounded-2xl md:rounded-xl transition-all duration-500 ease-in-out border border-white/10 mb-4 md:mb-0",
        "md:-skew-x-12 md:-ml-4 first:ml-0 md:transform-gpu",
        isActive ? "flex-[4]" : "flex-[1]",
      )}
    >
      {/* Unskew content wrapper - Image & Overlay */}
      <div className="absolute inset-0 w-[140%] h-full -left-[20%] bg-neutral-800 md:skew-x-12 md:scale-110 origin-center">
        <Image
          src={category.image}
          alt={category.title}
          fill
          className={cn(
            "object-cover transition-opacity duration-500",
            isActive ? "opacity-60" : "opacity-30 grayscale",
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8 md:skew-x-12">
        <div className="flex items-center md:block">
          <h3
            className={cn(
              "text-2xl font-bold text-white mb-2 whitespace-nowrap transition-all duration-300 md:hidden",
              !isActive && "opacity-80",
            )}
          >
            {category.title}
          </h3>
          <h3
            className={cn(
              "hidden md:block text-2xl font-bold text-white mb-2 whitespace-nowrap transition-all duration-300",
              !isActive &&
                "md:-rotate-90 md:origin-bottom-left md:translate-x-8 md:mb-12 md:opacity-70",
            )}
          >
            {category.title}
          </h3>
        </div>

        <AnimatePresence mode="popLayout">
          {isActive && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
            >
              <p className="text-neutral-300 text-sm md:text-base leading-relaxed max-w-lg">
                {category.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
