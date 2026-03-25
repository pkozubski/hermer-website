import {
  buildMetadataFromSanityWithFallbackMetadata,
  type SanitySeo,
} from "@/sanity/lib/seo";
import { PAGE_SEO_QUERY } from "@/sanity/lib/queries";
import type { Metadata } from "next";
import React from "react";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { SplitRevealTitle } from "@/components/ui/SplitRevealTitle";
import { client } from "@/sanity/lib/client";

import { Review } from "@/components/shared/Testimonials";
import { ReviewsGrid } from "@/components/shared/ReviewsGrid";

const SEO_SLUG = "opinie";

const metadataFallback: Metadata = {
  title: "Strony internetowe Opinie - Opinie Hermer",
  description:
    "Sprawdź opinie o tworzonych przez nasz sklepach i stronach www. Zaufaj profesjonalistom.",
};

export async function generateMetadata(): Promise<Metadata> {
  const page = await client.fetch<{ seo?: SanitySeo } | null>(PAGE_SEO_QUERY, {
    slug: SEO_SLUG,
  });

  return buildMetadataFromSanityWithFallbackMetadata(
    page?.seo ?? null,
    metadataFallback,
  );
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

  // Use authenticated client — without token, Sanity returns only 5 public reviews
  const token = process.env.SANITY_API_READ_TOKEN;
  const reviews = await client
    .withConfig({ useCdn: false, token })
    .fetch<Review[]>(reviewsQuery, {}, { next: { revalidate: 3600 } });

  return (
    <div className="min-h-screen bg-neutral-900 text-white overflow-x-clip">

      <Header allowVisibility={true} />

      <main className="relative z-10 pt-40 md:pt-48 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          {/* Header Section */}
          <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-6">
            <SplitRevealTitle
              line1="Opinie Naszych"
              line2="Klientów"
              as="h1"
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
          <ReviewsGrid reviews={reviews.map((r) => ({
            ...r,
            avatarUrl: r.avatarUrl ? r.avatarUrl.replace(/=s\d+$/, "=s96") : r.avatarUrl,
          }))} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
