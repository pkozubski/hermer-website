import { groq } from "next-sanity";

export const PAGE_FAQS_QUERY = groq`*[_type == "page" && slug.current == $slug][0] {
  "faqs": faqs[] {
    "question": question,
    "answer": answer
  }
}`;

export const PAGE_SEO_QUERY = groq`*[_type == "page" && slug.current == $slug][0] {
  title,
  slug,
  seo {
    metaTitle,
    metaDescription,
    nofollowAttributes,
    seoKeywords,
    metaImage,
    openGraph {
      url,
      image,
      title,
      description,
      siteName
    },
    twitter {
      cardType,
      creator,
      site,
      handle
    }
  }
}`;
