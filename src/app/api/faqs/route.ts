import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

type SanityFaqResponse = {
  faqs?: Array<{
    _key?: string;
    question?: string;
    answer?: unknown;
  }>;
} | null;

function normalizeAnswer(answer: unknown) {
  if (typeof answer === "string") {
    return answer;
  }

  if (Array.isArray(answer)) {
    return answer;
  }

  return null;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slugParam = searchParams.get("slug");
  const slug = (slugParam || "").replace(/^\/|\/$/g, "") || "home";

  if (!slug) {
    return NextResponse.json({ items: [] }, { status: 400 });
  }

  try {
    const data = await client.fetch<SanityFaqResponse>(
      `*[_type == "page" && (slug.current == $slug || slug.current == $slashSlug)][0] {
        faqs[] {
          _key,
          question,
          answer
        }
      }`,
      { slug, slashSlug: `/${slug}` }
    );
    const items = (data?.faqs || [])
      .filter(
        (item) => typeof item.question === "string" && normalizeAnswer(item.answer)
      )
      .map((item, index) => ({
        id: item._key || index + 1,
        question: item.question as string,
        answer: normalizeAnswer(item.answer),
      }));

    return NextResponse.json(
      { items },
      {
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  } catch (error) {
    console.error("FAQ API error:", error);
    return NextResponse.json({ items: [] }, { status: 500 });
  }
}
