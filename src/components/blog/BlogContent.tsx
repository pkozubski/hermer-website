"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { BlogHero } from "./BlogHero";
import { BlogFeaturedPost } from "./BlogFeaturedPost";
import { BlogFilters } from "./BlogFilters";
import { BlogGridCard } from "./BlogGridCard";
import { BlogNewsletterCard } from "./BlogNewsletterCard";
import { Post } from "@/components/cards/BlogCard";
import { CTASection } from "@/components/CTASection";
import { ProjectCardScrollShaderOverlay } from "../ProjectCardScrollShader";

interface BlogContentProps {
  posts: Post[];
  categories: string[];
  stats: {
    totalPosts: number;
    avgReadingTime: number;
  };
}

export const BlogContent: React.FC<BlogContentProps> = ({ 
  posts: initialPosts,
  categories,
  stats 
}) => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [activeCategory, setActiveCategory] = useState("Wszystkie");
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(initialPosts.length >= 9);
  
  const lastActiveCategory = useRef("Wszystkie");
  const observerTarget = useRef<HTMLDivElement>(null);

  const fetchPosts = useCallback(async (category: string, lastPublishedAt?: string) => {
    setIsLoading(true);
    try {
      const url = new URL("/api/blog-posts", window.location.origin);
      url.searchParams.set("limit", "9");
      if (category !== "Wszystkie") url.searchParams.set("category", category);
      if (lastPublishedAt) url.searchParams.set("lastPublishedAt", lastPublishedAt);

      const response = await fetch(url.toString());
      const newPosts = await response.json();

      if (lastPublishedAt) {
        setPosts((prev) => [...prev, ...newPosts]);
      } else {
        setPosts(newPosts);
      }

      setHasMore(newPosts.length === 9);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Handle category change
  useEffect(() => {
    // Skip if it's the initial render and category is "Wszystkie"
    if (activeCategory === "Wszystkie" && lastActiveCategory.current === "Wszystkie") return;
    
    // Skip if category hasn't changed
    if (activeCategory === lastActiveCategory.current) return;

    lastActiveCategory.current = activeCategory;
    setPosts([]); // Clear immediately to trigger shader cleanup
    fetchPosts(activeCategory);
  }, [activeCategory, fetchPosts]);

  // Infinite Scroll Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          const lastPost = posts[posts.length - 1];
          if (lastPost?.publishedAt) {
            fetchPosts(activeCategory, lastPost.publishedAt);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [posts, hasMore, isLoading, activeCategory, fetchPosts]);

  // Featured Post is the first one in "Wszystkie"
  const featuredPost = activeCategory === "Wszystkie" ? posts[0] : null;
  const gridPosts = activeCategory === "Wszystkie" ? posts.slice(1) : posts;

  return (
    <div className="min-h-screen bg-transparent">
      <ProjectCardScrollShaderOverlay scopeSelector="[data-blog-grid-zoom-target]" />
      <main className="pb-20">
        <BlogHero stats={stats} />

        {featuredPost && (
          <BlogFeaturedPost post={featuredPost} />
        )}

        <BlogFilters
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={(cat) => {
            setActiveCategory(cat);
          }}
        />

        <section className="container mx-auto px-4 md:px-8">
          <div
            data-blog-grid-zoom-target
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 md:gap-y-24"
          >
            {gridPosts.map((post, index) => (
              <React.Fragment key={post._id}>
                <BlogGridCard post={post} index={index} />
                {/* Insert Newsletter after specific position if needed */}
                {index === 5 && <BlogNewsletterCard />}
              </React.Fragment>
            ))}

            {gridPosts.length <= 5 && !isLoading && (
              <BlogNewsletterCard />
            )}
          </div>

          {/* Observer Target */}
          <div ref={observerTarget} className="h-20 w-full flex items-center justify-center mt-12">
            {isLoading && (
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-[#916AFF] rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-[#916AFF] rounded-full animate-bounce [animation-delay:0.2s]" />
                <div className="w-2 h-2 bg-[#916AFF] rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            )}
            {!hasMore && posts.length > 0 && (
              <p className="text-neutral-500 text-sm font-medium uppercase tracking-widest">
                To już wszystkie wpisy
              </p>
            )}
          </div>
        </section>

        <CTASection />
      </main>
    </div>
  );
};
