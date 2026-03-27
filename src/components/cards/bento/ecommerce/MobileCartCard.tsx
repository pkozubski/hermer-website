import React from "react";
import { GlassBentoCard } from "../GlassBentoCard";
import Image from "next/image";

export const MobileCartCard = ({ className = "" }: { className?: string }) => {
  return (
    <GlassBentoCard
      title="Mobilny Koszyk"
      description="Ponad 70% zakupów to mobile. Optymalizujemy check-out pod obsługę jednym kciukiem."
      contentPosition="top"
      hideOverlay
      className={className}
    >
      <div className="absolute inset-x-0 bottom-0 w-full h-full z-0 pointer-events-none">
        <Image
          src="/assets/sklepy-internetowe/mobilny-koszyk.png"
          alt="Mobilny Koszyk background"
          fill
          unoptimized
          className="object-cover object-bottom"
        />
      </div>
    </GlassBentoCard>
  );
};
