import React from "react";
import { SplitRevealTitle } from "../ui/SplitRevealTitle";
import { LineReveal } from "../ui/LineReveal";
import { MobileCartCard } from "../cards/bento/ecommerce/MobileCartCard";
import { IntegrationsCard } from "../cards/bento/ecommerce/IntegrationsCard";
import { ProductSeoCard } from "../cards/bento/ecommerce/ProductSeoCard";
import { ManagementCard } from "../cards/bento/ecommerce/ManagementCard";
import { DashedCardWrapper } from "../cards/bento/DashedCardWrapper"; // Temporary wrapper if needed or use straight grid

export const StoreFeaturesBento: React.FC = () => {
  return (
    <section className="py-24 bg-transparent relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <SplitRevealTitle
            line1="Silnik"
            line2="Sprzedaży"
            className="text-white! text-5xl md:text-8xl"
          />
          <LineReveal
            lines={[
              "Kompleksowe rozwiązania dla Twojego e-commerce.",
              "Technologia, która pracuje na Twój zysk.",
            ]}
            className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-md text-left md:text-right"
          />
        </div>

        {/* Using the same grid layout as WebsiteFeaturesBento */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {/* Mobile Cart - Large (First one asked for) - Let's make it Large like SpeedCard?
                         User said "first do mobile cart card".
                         In WebsiteBento, SpeedCard is Large.
                         Let's put MobileCartCard in the first Large slot.
                     */}
          <div className="lg:col-span-1 min-h-[400px]">
            <MobileCartCard className="h-full" />
          </div>

          {/* Handlers for missing cards - placeholders using existing GlassBentoCard styled wrappers or just placeholders */}
          <div className="lg:col-span-2 min-h-[400px]">
            <ManagementCard className="h-full" contentAlign="right" />
          </div>

          <div className="lg:col-span-2 min-h-[400px]">
            <IntegrationsCard className="h-full" />
          </div>

          <div className="lg:col-span-1 min-h-[400px]">
            <ProductSeoCard className="h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};
