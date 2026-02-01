import { MainContent } from "@/components/MainContent";

import { client } from "@/sanity/lib/client";
import { PAGE_FAQS_QUERY } from "@/sanity/lib/queries";

export default async function Home() {
  const data = await client.fetch(PAGE_FAQS_QUERY, { slug: "home" });
  const faqItems = data?.faqs?.map((item: any, index: number) => ({
    id: index + 1,
    question: item.question,
    answer: item.answer,
  }));

  return <MainContent faqItems={faqItems} />;
}
