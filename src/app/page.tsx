import { MainContent } from "@/components/homepage/MainContent";

import { sanityFetch } from "@/sanity/lib/live";
import { PAGE_FAQS_QUERY, REVIEWS_QUERY } from "@/sanity/lib/queries";
import { Review } from "@/components/shared/Testimonials";
import { client } from "@/sanity/lib/client";

const token = process.env.SANITY_API_READ_TOKEN;

export default async function Home() {
  const { data: faqData } = await sanityFetch({ 
    query: PAGE_FAQS_QUERY, 
    params: { slug: "home" } 
  });

  // Use authenticated client — without token, Sanity returns only 5 public reviews
  const reviews = await client
    .withConfig({ useCdn: false, token })
    .fetch<Review[]>(REVIEWS_QUERY, {}, { next: { revalidate: 3600 } });

  const faqItems = faqData?.faqs?.map((item: any, index: number) => ({
    id: index + 1,
    question: item.question,
    answer: item.answer,
  }));

  // Resize Google avatar URLs from s1920 to s96 (44px displayed × 2x DPR)
  // This reduces ~850KB per avatar to ~5KB — total savings ~11MB
  const optimizedReviews = reviews.map((r) => ({
    ...r,
    avatarUrl: r.avatarUrl
      ? r.avatarUrl.replace(/=s\d+$/, "=s96")
      : r.avatarUrl,
  }));

  return <MainContent faqItems={faqItems} reviews={optimizedReviews} />;
}
