import { MainContent } from "@/components/MainContent";

import { client } from "@/sanity/lib/client";
import { PAGE_FAQS_QUERY } from "@/sanity/lib/queries";
import { Review } from "@/components/Testimonials";

export default async function Home() {
  const data = await client.fetch(PAGE_FAQS_QUERY, { slug: "home" });

  const reviewsQuery = `*[_type == "review" && rating == 5] | order(publishedAt desc) [0...27] {
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

  const faqItems = data?.faqs?.map((item: any, index: number) => ({
    id: index + 1,
    question: item.question,
    answer: item.answer,
  }));

  return <MainContent faqItems={faqItems} reviews={reviews} />;
}
