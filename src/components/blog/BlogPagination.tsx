"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const BlogPagination: React.FC<BlogPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className="mt-20 flex justify-center items-center space-x-3">
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:border-[#916AFF] hover:text-[#916AFF] text-white transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft size={20} />
      </button>

      {Array.from({ length: Math.min(totalPages, 5) }).map((_, i) => {
        const page = i + 1;
        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-12 h-12 flex items-center justify-center rounded-full border transition-colors shadow-sm font-bold ${
              currentPage === page
                ? "bg-[#916AFF] text-white border-[#916AFF]"
                : "border-white/10 bg-white/5 text-white hover:border-[#916AFF] hover:text-[#916AFF]"
            }`}
          >
            {page}
          </button>
        );
      })}

      {totalPages > 5 && (
        <span className="px-2 text-slate-400 font-bold">...</span>
      )}

      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:border-[#916AFF] hover:text-[#916AFF] text-white transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};
