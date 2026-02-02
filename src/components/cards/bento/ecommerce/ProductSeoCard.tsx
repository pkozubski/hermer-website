import React from "react";
import { Search, Star } from "lucide-react";
import { GlassBentoCard } from "../GlassBentoCard";
import { DeepDarkWindow } from "../visuals/DeepDarkWindow";

export const ProductSeoCard = ({ className = "" }: { className?: string }) => {
  return (
    <GlassBentoCard
      title="SEO Produktowe"
      description="Rich snippets, schema.org i widoczność w Google Shopping. Twoje produkty rzucają się w oczy."
      icon={Search}
      className={className}
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center pt-10">
        {/* Deep Dark Window SERP Dashboard */}
        <DeepDarkWindow className="w-[90%] h-[280px] shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
          <div className="w-full h-full bg-neutral-900/50 flex flex-col p-6 font-sans">
            {/* Search Bar Mockup */}
            <div className="flex items-center gap-3 mb-6 p-2 rounded-full bg-white/5 border border-white/5 w-3/4 mx-auto opacity-50">
              <Search size={12} className="text-neutral-500 ml-2" />
              <div className="h-2 w-32 bg-white/10 rounded-full"></div>
            </div>

            {/* Search Result */}
            <div className="flex flex-col gap-1 px-2">
              {/* URL */}
              <div className="flex items-center gap-2 mb-1">
                <div className="w-5 h-5 rounded-full bg-[#202124] flex items-center justify-center text-[8px] text-white border border-white/10">
                  H
                </div>
                <div className="flex flex-col">
                  <div className="text-[9px] text-neutral-400">
                    hermer-shop.pl
                  </div>
                  <div className="text-[8px] text-neutral-500">
                    https://hermer-shop.pl › buty
                  </div>
                </div>
              </div>

              {/* Title */}
              <div className="text-sm text-[#8ab4f8] font-medium group-hover:underline cursor-pointer">
                Nike Air Max 270 - Oficjalny Sklep
              </div>

              {/* Reviews / Rich Snippets */}
              <div className="flex items-center gap-2 text-[10px] mt-0.5">
                <div className="flex text-[#FBC02D]">
                  <Star size={10} fill="#FBC02D" strokeWidth={0} />
                  <Star size={10} fill="#FBC02D" strokeWidth={0} />
                  <Star size={10} fill="#FBC02D" strokeWidth={0} />
                  <Star size={10} fill="#FBC02D" strokeWidth={0} />
                  <Star size={10} fill="#FBC02D" strokeWidth={0} />
                </div>
                <span className="text-neutral-400">4.9</span>
                <span className="text-neutral-500">(128 opinii)</span>
              </div>

              {/* Price & Stock */}
              <div className="flex items-center gap-2 text-[10px] mt-0.5">
                <span className="font-bold text-white">499,00 zł</span>
                <span className="text-sm text-green-500">•</span>
                <span className="text-green-500 font-medium">W magazynie</span>
              </div>

              {/* Description */}
              <div className="text-[10px] text-neutral-400 leading-relaxed mt-1 line-clamp-2">
                Legendarny komfort i nowoczesny styl. Odkryj kolekcję Air Max w
                najlepszych cenach. Darmowa dostawa od 200 zł.
              </div>
            </div>
          </div>
        </DeepDarkWindow>
      </div>
    </GlassBentoCard>
  );
};
