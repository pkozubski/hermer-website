"use client";

import React from "react";
import { motion } from "framer-motion";

interface BlogFiltersProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const BlogFilters: React.FC<BlogFiltersProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  const allCategories = ["Wszystkie", ...categories];

  return (
    <section className="container mx-auto px-4 md:px-8 mb-12">
      <div className="flex flex-wrap gap-3">
        {allCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`px-8 py-3 rounded-full text-sm font-bold transition-colors duration-300 ${
              activeCategory === cat
                ? "bg-[#916AFF] text-white shadow-lg shadow-purple-900/20"
                : "bg-white/5 text-slate-400 border border-white/10 hover:border-[#916AFF] hover:text-[#916AFF]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </section>
  );
};
