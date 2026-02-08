import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import BlogPostContent from "./BlogPostContent";
import { notFound } from "next/navigation";

interface PostProps {
  slug: string;
}

async function getPost(slug: string) {
  const query = `
    *[_type == "post" && slug.current == $slug][0] {
      title,
      "category": category->title,
      mainImage,
      publishedAt,
      body,
      seo
    }
  `;
  const post = await client.fetch(query, { slug });
  return post;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PostProps>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Post nie znaleziony",
    };
  }

  const { seo, title, mainImage } = post;
  const ogImageUrl = seo?.ogImage
    ? urlFor(seo.ogImage).width(1200).height(630).url()
    : mainImage
      ? urlFor(mainImage).width(1200).height(630).url()
      : null;

  return {
    title: seo?.title || title,
    description: seo?.description,
    openGraph: {
      title: seo?.title || title,
      description: seo?.description,
      images: ogImageUrl ? [{ url: ogImageUrl }] : [],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<PostProps>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return <BlogPostContent initialPost={post} />;
}
