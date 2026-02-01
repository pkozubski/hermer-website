import { groq } from "next-sanity";

export const PAGE_FAQS_QUERY = groq`*[_type == "page" && slug.current == $slug][0] {
  "faqs": faqs[] {
    "question": question,
    "answer": answer
  }
}`;
