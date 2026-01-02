import React from "react";
import { ShoppingBag } from "lucide-react";
import { CardFrame } from "./ui/CardFrame";

export const EcommerceCard: React.FC = () => {
  return (
    <CardFrame title="Sklep" type="window">
      <div className="flex flex-col h-full bg-white p-5">
        <div className="flex gap-5 h-full">
          {/* Product Image - Soft & Clean */}
          <div className="w-1/2 bg-slate-50/50 rounded-2xl flex items-center justify-center group/image overflow-hidden relative">
            <div className="absolute inset-0 bg-[#916AFF]/5 opacity-0 group-hover/image:opacity-100 transition-opacity duration-500"></div>
            <img
              src="/smartwatch.png"
              alt="Smartwatch visual"
              className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover/image:scale-110 transition-transform duration-700"
            />
          </div>

          {/* Details - Minimalist */}
          <div className="w-1/2 flex flex-col justify-center">
            <h4 className="font-sans font-medium text-sm text-[#1A1A1A] mb-1">
              Smartwatch X
            </h4>

            <div className="text-xl font-display font-bold text-[#916AFF] mb-6">
              1200 pln
            </div>

            <button className="group w-full bg-[#1A1A1A] text-white text-[10px] font-sans font-medium py-2.5 rounded-full hover:bg-black hover:scale-105 hover:shadow-lg hover:shadow-[#916AFF]/30 transition-all duration-300 active:scale-95 flex items-center justify-between px-3">
              <span className="relative z-10">Do koszyka</span>
              <div className="bg-white/10 p-0.5 rounded-full group-hover:bg-[#916AFF] transition-colors duration-300">
                <div className="w-3 h-3 flex items-center justify-center">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </CardFrame>
  );
};
