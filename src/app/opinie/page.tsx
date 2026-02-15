import {
  buildMetadataFromSanityWithFallbackMetadata,
  type SanitySeo,
} from "@/sanity/lib/seo";
import { PAGE_SEO_QUERY } from "@/sanity/lib/queries";
import type { Metadata } from "next";
import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SplitRevealTitle } from "@/components/ui/SplitRevealTitle";
import { client } from "@/sanity/lib/client";
import { Review } from "@/components/Testimonials";
import { ReviewsGrid } from "@/components/ReviewsGrid";

const SEO_SLUG = "opinie";

const metadataFallback: Metadata = {
  title: "Opinie Klientów | Hermer",
  description:
    "Zobacz, co mówią o nas klienci, którym pomogliśmy osiągnąć sukces w świecie cyfrowym. Przeczytaj autentyczne opinie o współpracy z Hermer.",
};

export async function generateMetadata(): Promise<Metadata> {
  const page = await client.fetch<{ seo?: SanitySeo } | null>(PAGE_SEO_QUERY, {
    slug: SEO_SLUG,
  });

  return buildMetadataFromSanityWithFallbackMetadata(page?.seo ?? null, metadataFallback);
}

export default async function OpiniePage() {
  const reviewsQuery = `*[_type == "review" && rating == 5] | order(publishedAt desc) {
    _id,
    author,
    rating,
    text,
    publishedAt,
    avatarUrl,
    platform,
    reviewLink
  }`;

  const reviews = await client.fetch<Review[]>(
    reviewsQuery,
    {},
    { next: { revalidate: 3600 } },
  );

  return (
    <div className="min-h-screen bg-neutral-900 text-white overflow-x-clip">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[1000px] h-[1000px] bg-[#916AFF]/10 rounded-full blur-[150px] mix-blend-screen animate-pulse-slow" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-[#52D8EA]/5 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <Header allowVisibility={true} />

      <main className="relative z-10 pt-40 md:pt-48 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          {/* Header Section */}
          <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-6">
            <SplitRevealTitle
              line1="Zaufali nam"
              line2="Liderzy Branży"
              className="text-5xl md:text-8xl text-white"
            />
            <div className="max-w-xs md:max-w-sm">
              <p className="text-neutral-400 text-xs md:text-sm uppercase tracking-wide leading-relaxed">
                Zobacz, co mówią o nas klienci, którym pomogliśmy osiągnąć
                sukces w świecie cyfrowym.
              </p>
            </div>
          </div>

          {/* Grid */}
          <ReviewsGrid reviews={reviews} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
