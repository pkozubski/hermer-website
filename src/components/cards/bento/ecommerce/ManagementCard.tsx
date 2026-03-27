import React from "react";
import { GlassBentoCard } from "../GlassBentoCard";
import Image from "next/image";

interface ManagementCardProps {
  className?: string;
  contentAlign?: "left" | "right";
}

export const ManagementCard = ({
  className = "",
  contentAlign = "left",
}: ManagementCardProps) => {
  return (
    <GlassBentoCard
      title="Analityka i Zamówienia"
      description="Pełna kontrola nad sklepem. Śledź sprzedaż, zarządzaj zamówieniami i magazynem w jednym intuicyjnym panelu."
      className={`[&>div.z-20>div]:max-w-[320px]! lg:[&>div.z-20>div]:max-w-[380px]! ${className}`}
      contentAlign={contentAlign}
      hideOverlay
    >
      <div className="absolute inset-x-0 bottom-0 w-full h-full z-0 pointer-events-none bg-[#1a1a1a]">
        <Image
          src="/assets/sklepy-internetowe/analityka-zamowienia.png"
          alt="Analityka i Zamówienia background"
          fill
          unoptimized
          className="object-cover object-left"
        />
      </div>
    </GlassBentoCard>
  );
};
