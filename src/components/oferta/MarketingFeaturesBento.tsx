import React from "react";
import { SplitRevealTitle } from "../ui/SplitRevealTitle";
import { LineReveal } from "../ui/LineReveal";
import { DashedCardWrapper } from "../cards/bento/DashedCardWrapper";
// Using existing cards and assuming their paths are correct based on earlier 'ls'
// If they are not exported correctly, I might need to adjust.
// The user provided ls for src/components/cards/marketing-service
import { OrganicTrafficCard } from "../cards/bento/marketing/OrganicTrafficCard";
import { ContentCalendarCard } from "../cards/bento/marketing/ContentCalendarCard";
import { AdCampaignsCard } from "../cards/bento/marketing/AdCampaignsCard";
import { GrowthFunnelCard } from "../cards/bento/marketing/GrowthFunnelCard";

export const MarketingFeaturesBento: React.FC = () => {
  return (
    <section className="py-24 bg-transparent relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <SplitRevealTitle
            line1="Zakres"
            line2="Usług"
            className="text-white! text-5xl md:text-8xl"
          />
          <LineReveal
            lines={[
              "Kompleksowe podejście do marketingu.",
              "Wybierz narzędzia, które zbudują Twój wzrost.",
            ]}
            className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-md text-left md:text-right"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {/* SEO / Traffic - Large */}
          <div className="lg:col-span-2 min-h-[400px]">
            <OrganicTrafficCard className="h-full" />
          </div>

          {/* Content Marketing - Small */}
          <div className="min-h-[400px]">
            <ContentCalendarCard className="h-full" />
          </div>

          {/* Ads - Small */}
          <div className="min-h-[400px]">
            <AdCampaignsCard className="h-full" />
          </div>

          {/* Strategy / Funnel - Large */}
          <div className="lg:col-span-2 min-h-[400px]">
            <GrowthFunnelCard className="h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};
