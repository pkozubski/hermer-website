import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// components
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Revalidate every 60 seconds (ISR)
export const revalidate = 60;

interface PostProps {
  slug: string;
}

// Fetch fetch post data
async function getPost(slug: string) {
  const query = `
    *[_type == "post" && slug.current == $slug][0] {
      title,
      category,
      mainImage,
      publishedAt,
      body
    }
  `;
  const post = await client.fetch(query, { slug });
  return post;
}

// PortableText components configuration
const ptComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <img
          alt={value.alt || " "}
          loading="lazy"
          className="w-full h-auto my-8 rounded-2xl"
          src={urlFor(value).width(800).fit("max").auto("format").url()}
        />
      );
    },
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl md:text-5xl font-display font-bold my-8 text-neutral-900 leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl md:text-4xl font-display font-bold mt-12 mb-6 text-neutral-900 leading-tight">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl md:text-3xl font-display font-bold mt-8 mb-4 text-neutral-900 leading-tight">
        {children}
      </h3>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-[#916AFF] pl-4 italic my-8 text-xl text-neutral-600 bg-neutral-50 py-4 pr-4 rounded-r-lg">
        {children}
      </blockquote>
    ),
    normal: ({ children }: any) => (
      <p className="mb-6 text-lg text-neutral-700 leading-relaxed font-light">
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc pl-5 mb-8 text-lg text-neutral-700 space-y-2">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal pl-5 mb-8 text-lg text-neutral-700 space-y-2">
        {children}
      </ol>
    ),
  },
};

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

  return (
    <>
      <Header />
      <main className="bg-white min-h-screen pt-32 pb-24">
        {/* Article Header */}
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 text-neutral-500 hover:text-[#916AFF] transition-colors mb-8 group"
          >
            <ArrowLeft
              size={20}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span className="text-sm font-medium uppercase tracking-wider">
              Powrót do bloga
            </span>
          </Link>

          <div className="space-y-6 mb-12">
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 bg-[#916AFF]/10 text-[#916AFF] text-xs font-bold uppercase tracking-widest rounded-full">
                {post.category}
              </span>
              <span className="text-neutral-400 text-sm font-mono">
                {new Date(post.publishedAt).toLocaleDateString("pl-PL", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-display font-bold text-neutral-900 leading-[1.1]">
              {post.title}
            </h1>
          </div>
        </div>

        {/* Hero Image */}
        {post.mainImage && (
          <div className="container mx-auto px-4 md:px-8 max-w-5xl mb-16">
            <div className="aspect-video relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={urlFor(post.mainImage).width(1200).height(675).url()}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        {/* Article Content */}
        <article className="container mx-auto px-4 md:px-8 max-w-3xl">
          <div className="prose prose-lg prose-neutral md:prose-xl max-w-none">
            <PortableText value={post.body} components={ptComponents} />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
