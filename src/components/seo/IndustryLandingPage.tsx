import React from "react";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { PageLayout } from "@/components/shared/PageLayout";
import { Faq } from "@/components/shared/Faq";
import { CTASection } from "@/components/shared/CTASection";
import { ReelCtaButton } from "@/components/ui/ReelCtaButton";
import { client } from "@/sanity/lib/client";
import { Review } from "@/components/shared/Testimonials";
import { ReviewsGrid } from "@/components/shared/ReviewsGrid";
import { mapFaqs } from "@/sanity/lib/seoLandingPageHelpers";
import type { SanityIndustryLandingPage } from "@/sanity/types/industryLandingPage";
import { StaticSuccessStories } from "@/components/shared/StaticSuccessStories";

interface Props {
  data: SanityIndustryLandingPage;
}

export async function IndustryLandingPage({ data }: Props) {
  // Option to fetch reviews if needed
  let reviews: Review[] = [];
  if (data.showReviews) {
    const reviewsQuery = `*[_type == "review" && rating == 5] | order(publishedAt desc) [0...3] {
      _id,
      author,
      rating,
      text,
      publishedAt,
      avatarUrl,
      platform,
      reviewLink
    }`;
    reviews = await client.fetch<Review[]>(reviewsQuery, {}, { next: { revalidate: 3600 } });
  }

  const faqItems = data.faqs?.length ? mapFaqs(data.faqs as any) : [];

  return (
    <PageLayout showGradientBlobs={false}>
        {/* --- HERO SECTION --- */}
        <section className="relative w-full py-24 lg:py-32 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 w-full h-full opacity-40 select-none pointer-events-none">
            {data.heroImage && (
              <Image
                src={data.heroImage}
                alt={data.heroTitleHighlight || "Hero Background"}
                fill
                className="object-cover"
                priority
              />
            )}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-neutral-900 to-transparent" />
          </div>

          <div className="relative z-20 container mx-auto px-4 md:px-8 text-center mt-20">
            <h1 className="text-4xl md:text-7xl font-display font-medium tracking-tighter mb-6">
              {data.heroTitleTop} <br />{" "}
              <span className="text-[#916AFF]">{data.heroTitleHighlight}</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 max-w-2xl mx-auto mb-4">
              {data.heroSubtitle}
            </p>
            <div className="h-1 w-24 bg-[#916AFF] mx-auto mb-12" />
            <div className="flex justify-center">
              <ReelCtaButton
                text="ZAPYTAJ O SZCZEGÓŁY"
                href="#kontakt"
                size="large"
                noShadow={true}
              />
            </div>
          </div>
        </section>

        {/* --- INTRODUCTION SECTION --- */}
        <section className="py-24 bg-neutral-800/20">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tighter text-center mb-12">
              {data.introTitle}
            </h2>
            <div className="space-y-8 text-neutral-300 text-lg md:text-xl leading-relaxed text-center prose-p:text-neutral-300 prose-p:my-4 mx-auto prose-invert max-w-none">
              <PortableText value={data.introText} />
            </div>
          </div>
        </section>

        {/* --- DISTINGUISHING FEATURES (Wyróżniki) --- */}
        {data.features && data.features.length > 0 && (
          <section className="py-24 container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tighter mb-4">
                {data.featuresTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.features.map((feature, index) => {
                const fallbackImage = [
                  "/assets/seo/woocommerce/hero-bg.webp",
                  "/assets/seo/woocommerce/specjializacja.webp",
                  "/assets/seo/woocommerce/przygotowania.webp",
                ][index] || "/assets/seo/woocommerce/hero-bg.webp";

                return (
                <div
                  key={index}
                  className="group relative flex flex-col h-full bg-neutral-800/20 border border-white/5 rounded-[40px] overflow-hidden transition-all duration-500 hover:border-white/10 hover:bg-neutral-800/30"
                >
                  <div className="relative h-[280px] w-full bg-white flex items-center justify-center p-12 overflow-hidden border-b border-white/5">
                    <div className="relative w-full h-full">
                      {(feature.image || fallbackImage) && (
                        <Image
                          src={feature.image || fallbackImage}
                          alt={feature.title}
                          fill
                          className="object-contain transition-transform duration-700 group-hover:scale-110"
                        />
                      )}
                    </div>
                  </div>
                  <div className="p-10 flex flex-col flex-1">
                    <h3 className="text-2xl font-bold mb-4 font-display">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              )})}
            </div>
          </section>
        )}

        {/* --- WHAT'S INCLUDED SECTION --- */}
        {data.includedItems && data.includedItems.length > 0 && (
          <section className="py-24 bg-neutral-800/20 border-y border-white/5">
            <div className="container mx-auto px-4 md:px-8">
              <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tighter text-center mb-16">
                {data.includedTitle}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.includedItems.map((item, index) => (
                  <div
                    key={index}
                    className="p-8 rounded-3xl bg-neutral-900/50 border border-white/5 hover:border-[#916AFF]/50 transition-colors group"
                  >
                    <div className="w-16 h-16 relative mb-6 transition-transform duration-300 group-hover:scale-110">
                      {item.iconSvg && (
                        <Image
                          src={item.iconSvg}
                          alt={item.title}
                          fill
                          className="object-contain"
                        />
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-4 font-display">
                      {item.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* --- CLIENT SUCCESS STORIES (Full-Width Slider) --- */}
        <StaticSuccessStories />

        {/* --- REVIEWS SECTION --- */}
        {data.showReviews && reviews.length > 0 && (
          <section className="py-24 container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tighter mb-4">
                Opinie naszych klientów
              </h2>
              <p className="text-neutral-400 text-lg">
                Dowiedz się, jak firmy oceniają współpracę z Hermer.
              </p>
            </div>

            <ReviewsGrid reviews={reviews} />
          </section>
        )}

        {/* --- FAQ SECTION --- */}
        {faqItems.length > 0 && (
          <Faq
            items={faqItems as any}
            skipClientFetch={true}
          />
        )}

        {/* --- CTA SECTION --- */}
        <CTASection
          titleLine1={data.ctaTitle?.split(" ").slice(0, Math.ceil((data.ctaTitle?.split(" ").length || 0) / 2)).join(" ")}
          titleLine2={data.ctaTitle?.split(" ").slice(Math.ceil((data.ctaTitle?.split(" ").length || 0) / 2)).join(" ")}
          subtitleLines={data.ctaSubtitleLines}
        />
    </PageLayout>
  );
}
