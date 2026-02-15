import { CmsCard } from '@/components/cards/CmsCard';
import { EcommerceCard } from '@/components/cards/EcommerceCard';
import { MarketingCard } from '@/components/cards/MarketingCard';
import { ResponsivenessCard } from '@/components/cards/ResponsivenessCard';
import { SeoCard } from '@/components/cards/SeoCard';
import { SocialMediaCard } from '@/components/cards/SocialMediaCard';
import { UiUxCard } from '@/components/cards/UiUxCard';
import { WebDevCard } from '@/components/cards/WebDevCard';

export default function HeroCardsPage() {
  return (
    <>
      <WebDevCard />
      <UiUxCard />
      <SocialMediaCard />
      <MarketingCard />
      <ResponsivenessCard />
      <EcommerceCard />
      <SeoCard />
      <CmsCard />
    </>
  );
}
