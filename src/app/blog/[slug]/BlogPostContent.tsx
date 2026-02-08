"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { ArrowLeft, Clock, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";

// Helper to estimate reading time
const estimateReadingTime = (body: any[]) => {
  if (!body) return 0;
  const words = body
    .filter((block: any) => block._type === 'block')
    .map((block: any) => block.children.map((child: any) => child.text).join(' '))
    .join(' ')
    .split(/\s+/).length;
  return Math.ceil(words / 200);
};

// PortableText components configuration
const ptComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) return null;
      return (
        <figure className="my-16 group">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl relative">
            <img
              alt={value.alt || " "}
              loading="lazy"
              className="w-full h-auto transition-transform duration-1000 group-hover:scale-105"
              src={urlFor(value).width(1200).fit("max").auto("format").url()}
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2rem] pointer-events-none" />
          </div>
          {value.caption && (
            <figcaption className="mt-6 text-center text-sm text-slate-400 font-medium tracking-wide">
              <span className="inline-block w-8 h-px bg-[#916AFF] align-middle mr-3" />
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-bold text-white selection:bg-[#916AFF]/30">
        {children}
      </strong>
    ),
    em: ({ children }: any) => (
      <em className="italic text-slate-200">
        {children}
      </em>
    ),
    link: ({ value, children }: any) => {
      const rel = !value.href.startsWith("/") ? "noreferrer noopener" : undefined;
      return (
        <a
          href={value.href}
          rel={rel}
          className="text-[#916AFF] font-medium underline underline-offset-4 decoration-2 decoration-[#916AFF]/30 hover:decoration-[#916AFF] transition-all duration-300"
        >
          {children}
        </a>
      );
    },
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl md:text-6xl font-display font-black mt-20 mb-10 text-white leading-[1.1] tracking-tight">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl md:text-5xl font-display font-black mt-20 mb-8 text-white leading-tight tracking-tight relative">
        <span className="absolute -left-8 top-1/2 -translate-y-1/2 w-4 h-1 bg-[#916AFF] rounded-full hidden md:block" />
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl md:text-3xl font-display font-bold mt-14 mb-6 text-white leading-tight tracking-tight">
        {children}
      </h3>
    ),
    blockquote: ({ children }: any) => (
      <div className="relative my-16 p-10 bg-white/5 rounded-3xl border border-white/5 overflow-hidden group">
        <div className="absolute top-0 left-0 w-1.5 h-full bg-linear-to-b from-[#916AFF] to-[#52D8EA]" />
        <span className="absolute top-4 right-8 text-8xl font-serif text-white/5 select-none transition-transform duration-700 group-hover:scale-110">
          &ldquo;
        </span>
        <blockquote className="relative z-10 text-xl md:text-2xl text-slate-100 font-medium leading-relaxed italic">
          {children}
        </blockquote>
      </div>
    ),
    normal: ({ children }: any) => (
      <p className="mb-8 text-lg md:text-xl text-slate-300/90 leading-relaxed font-light selection:bg-[#916AFF]/30">
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-none mb-10 space-y-5 my-8">
        {React.Children.map(children, (child: any) => (
          <li className="flex gap-5 text-lg md:text-xl text-slate-300/90 font-light leading-relaxed">
            <span className="mt-2.5 w-2 h-2 shrink-0 rounded-full bg-[#916AFF] shadow-[0_0_10px_rgba(145,106,255,0.5)]" />
            <div>{child.props.children}</div>
          </li>
        ))}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-none mb-10 space-y-5 my-8 counter-reset-blog">
        {React.Children.map(children, (child: any, index: number) => (
          <li className="flex gap-5 text-lg md:text-xl text-slate-300/90 font-light leading-relaxed">
            <span className="flex items-center justify-center w-7 h-7 shrink-0 rounded-full bg-white/5 border border-white/10 text-[10px] font-black text-[#916AFF] mt-1 shadow-sm">
              {index + 1}
            </span>
            <div>{child.props.children}</div>
          </li>
        ))}
      </ol>
    ),
  },
};

export default function BlogPostContent({ initialPost }: { initialPost: any }) {
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    async function fetchRelated() {
      try {
        const query = `*[_type == "post" && _id != $id] | order(publishedAt desc) [0...2] {
          title,
          slug,
          mainImage,
          "category": category->title
        }`;
        const data = await client.fetch(query, { id: initialPost._id });
        setRelatedPosts(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchRelated();
  }, [initialPost._id]);

  const readingTime = estimateReadingTime(initialPost.body);

  return (
    <div className="relative min-h-screen bg-neutral-900 font-sans text-white selection:bg-[#916AFF] selection:text-white">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#916AFF] origin-left z-[100]"
        style={{ scaleX }}
      />

      <Header allowVisibility={true} />

      <main className="relative">
        {/* HERO SECTION */}
        <div className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden">
          {initialPost.mainImage && (
            <motion.div 
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <img
                src={urlFor(initialPost.mainImage).width(1920).height(1080).url()}
                alt={initialPost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-b from-neutral-900/40 via-neutral-900/60 to-neutral-900" />
            </motion.div>
          )}

          <div className="absolute inset-0 flex flex-col justify-end">
            <div className="container mx-auto px-4 md:px-8 mb-16 md:mb-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-4xl"
              >
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 group"
                >
                  <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                  <span className="text-xs font-bold uppercase tracking-widest">Wróć do bazy wiedzy</span>
                </Link>

                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <span className="px-4 py-1.5 bg-[#916AFF] text-white text-xs font-black uppercase tracking-widest rounded-full">
                    {initialPost.category}
                  </span>
                  <div className="flex items-center gap-2 text-white/60 text-sm font-medium">
                    <Clock size={16} />
                    <span>{readingTime} min czytania</span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8">
                  {initialPost.title}
                </h1>

                <div className="flex items-center gap-4 text-white/40 font-mono text-sm">
                  <span>Autor: Hermer Team</span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span>
                    {new Date(initialPost.publishedAt).toLocaleDateString("pl-PL", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16">
            <aside className="lg:w-16 shrink-0 lg:sticky lg:top-32 h-fit">
              <div className="flex lg:flex-col items-center gap-6">
                <div className="text-white/20 uppercase text-[10px] font-black tracking-[0.2em] [writing-mode:vertical-lr] hidden lg:block mb-4">
                  Share it
                </div>
                {[Facebook, Twitter, Linkedin, Share2].map((Icon, i) => (
                  <button key={i} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#916AFF] hover:border-[#916AFF] transition-all duration-300 group">
                    <Icon size={20} className="text-white/60 group-hover:text-white" />
                  </button>
                ))}
              </div>
            </aside>

            <article className="flex-1 max-w-3xl mx-auto lg:mx-0">
              <div className="prose prose-invert prose-lg md:prose-xl max-w-none">
                <PortableText value={initialPost.body} components={ptComponents} />
              </div>

              <div className="mt-20 pt-10 border-t border-white/10 flex flex-wrap gap-4">
                <span className="text-white/40 text-sm font-bold uppercase tracking-widest mr-4">Tags:</span>
                {["Digital", initialPost.category, "Marketing", "Strategy"].map(tag => (
                  <span key={tag} className="text-[#916AFF] text-sm font-bold hover:underline cursor-pointer">#{tag}</span>
                ))}
              </div>
            </article>

            <aside className="lg:w-80 shrink-0 hidden xl:block sticky top-32 h-fit">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white/40 mb-8">Polecane artykuły</h4>
              <div className="space-y-12">
                {relatedPosts.map((rp) => (
                  <Link key={rp.slug.current} href={`/blog/${rp.slug.current}`} className="group block">
                    <div className="aspect-video rounded-xl overflow-hidden mb-4 border border-white/10">
                      <img 
                        src={urlFor(rp.mainImage).width(400).height(225).url()} 
                        alt={rp.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <h5 className="text-white font-bold leading-tight group-hover:text-[#916AFF] transition-colors line-clamp-2">
                      {rp.title}
                    </h5>
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </div>

        {/* RELATED POSTS MOBILE/TABLET */}
        {relatedPosts.length > 0 && (
          <section className="xl:hidden container mx-auto px-4 md:px-8 mt-24 pt-24 border-t border-white/5">
            <h4 className="text-3xl font-display font-bold mb-12">Czytaj dalej</h4>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((rp) => (
                <Link key={rp.slug.current} href={`/blog/${rp.slug.current}`} className="group relative rounded-3xl overflow-hidden aspect-video border border-white/10">
                  <img src={urlFor(rp.mainImage).width(800).url()} alt={rp.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                    <h5 className="text-xl font-bold text-white group-hover:text-[#916AFF] transition-colors">{rp.title}</h5>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
}
