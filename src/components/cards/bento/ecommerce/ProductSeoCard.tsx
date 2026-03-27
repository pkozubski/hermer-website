import React from "react";
import { GlassBentoCard } from "../GlassBentoCard";
import Image from "next/image";

export const ProductSeoCard = ({ className = "" }: { className?: string }) => {
  return (
    <GlassBentoCard
      title="SEO Produktowe"
      description="Rich snippets, schema.org i widoczność w Google Shopping. Twoje produkty rzucają się w oczy."
      className={className}
      contentPosition="top"
      hideOverlay
    >
      <div className="absolute inset-x-0 bottom-0 w-full h-full z-0 pointer-events-none bg-[#1a1a1a]">
        <Image
          src="/assets/sklepy-internetowe/seo-produktowe.png"
          alt="SEO Produktowe background"
          fill
          unoptimized
          className="object-cover object-bottom"
        />
      </div>
    </GlassBentoCard>
  );
};
