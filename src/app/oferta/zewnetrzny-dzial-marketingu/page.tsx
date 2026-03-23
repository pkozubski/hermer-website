import React from "react";
import { PageLayout } from "@/components/shared/PageLayout";
import { OutsourceMarketingHero } from "@/components/oferta/outsource-marketing/OutsourceMarketingHero";
import { OutsourceMarketingBenefits } from "@/components/oferta/outsource-marketing/OutsourceMarketingBenefits";
import { OutsourceMarketingBanner } from "@/components/oferta/outsource-marketing/OutsourceMarketingBanner";
import { OutsourceMarketingTeam } from "@/components/oferta/outsource-marketing/OutsourceMarketingTeam";
import { OutsourceMarketingEffects } from "@/components/oferta/outsource-marketing/OutsourceMarketingEffects";
import { OutsourceMarketingPricing } from "@/components/oferta/outsource-marketing/OutsourceMarketingPricing";
import { OutsourceMarketingTrust } from "@/components/oferta/outsource-marketing/OutsourceMarketingTrust";
import { Contact } from "@/components/homepage/Contact";
import { CTASection } from "@/components/shared/CTASection";

export default function ZewnetrznyDzialMarketinguPage() {
  return (
    <PageLayout>
      <OutsourceMarketingHero />
      <OutsourceMarketingBenefits />
      <OutsourceMarketingBanner />
      <OutsourceMarketingTeam />
      <OutsourceMarketingPricing />
      <OutsourceMarketingEffects />
      <OutsourceMarketingTrust />
      <Contact />
      <CTASection />
    </PageLayout>
  );
}
