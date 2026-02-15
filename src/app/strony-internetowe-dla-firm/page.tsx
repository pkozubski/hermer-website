import { client } from "@/sanity/lib/client";
import { Review } from "@/components/Testimonials";
import { BusinessClient } from "./BusinessClient";

export default async function BusinessPage() {
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

  const reviews = await client.fetch<Review[]>(
    reviewsQuery,
    {},
    { next: { revalidate: 3600 } },
  );

  return <BusinessClient reviews={reviews} />;
}
