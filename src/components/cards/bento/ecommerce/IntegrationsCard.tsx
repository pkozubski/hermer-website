import React from "react";
import { GlassBentoCard } from "../GlassBentoCard";
import Image from "next/image";

export const IntegrationsCard = ({
  className = "",
}: {
  className?: string;
}) => {
  return (
    <GlassBentoCard
      title="Płatności i Kurierzy"
      description="Automatyczne etykiety i bezpieczne płatności. BLIK, Stripe, InPost – wszystko, czego potrzebuje nowoczesny e-commerce."
      hideOverlay
      className={className}
    >
      <div className="absolute inset-x-0 bottom-0 w-full h-full z-0 pointer-events-none">
        <Image
          src="/assets/sklepy-internetowe/platnosci-kurierzy.png"
          alt="Płatności i Kurierzy background"
          fill
          unoptimized
          className="object-cover object-bottom"
        />
      </div>
    </GlassBentoCard>
  );
};
