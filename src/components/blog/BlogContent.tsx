"use client";

import React, { useState, useMemo } from "react";
import { BlogHero } from "./BlogHero";
import { BlogFeaturedPost } from "./BlogFeaturedPost";
import { BlogFilters } from "./BlogFilters";
import { BlogGridCard } from "./BlogGridCard";
import { BlogNewsletterCard } from "./BlogNewsletterCard";
import { BlogPagination } from "./BlogPagination";
import { Post } from "@/components/cards/BlogCard";
import { CTASection } from "@/components/CTASection";

interface BlogContentProps {
  posts: Post[];
}

export const BlogContent: React.FC<BlogContentProps> = ({ posts }) => {
  const [activeCategory, setActiveCategory] = useState("Wszystkie");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8; // Adjust as needed

  // Extract categories
  const categories = useMemo(() => {
    const cats = new Set(posts.map((p) => p.category).filter(Boolean));
    return Array.from(cats);
  }, [posts]);

  // Filter posts
  const filteredPosts = useMemo(() => {
    if (activeCategory === "Wszystkie") {
      // Exclude the first post as it is featured, unless we have very few posts
      return posts.length > 0 ? posts.slice(1) : [];
    }
    return posts.filter((p) => p.category === activeCategory);
  }, [posts, activeCategory]);

  // Pagination Logic
  const totalPages = Math.ceil((filteredPosts.length + 1) / postsPerPage); // +1 for newsletter? logic can vary
  // Let's simplify: Pagination applies to the list *before* newsletter insertion, or after?
  // Easier: Paginate the filteredPosts, then try to insert Newsletter in the visible chunk.

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Featured Post is always the first one (index 0) of the original list
  const featuredPost = posts[0];

  return (
    <div className="min-h-screen bg-transparent">
      <main className="pb-20">
        <BlogHero />

        {featuredPost && activeCategory === "Wszystkie" && (
          <BlogFeaturedPost post={featuredPost} />
        )}

        <BlogFilters
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={(cat) => {
            setActiveCategory(cat);
            setCurrentPage(1);
          }}
        />

        <section className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {currentPosts.map((post, index) => (
              <React.Fragment key={post._id}>
                {/* Insert Newsletter after 5th item (index 4) so it appears as 6th item */}
                {index === 5 && <BlogNewsletterCard />}
                <BlogGridCard post={post} index={index} />
              </React.Fragment>
            ))}

            {/* If we have fewer than 5 posts, appending newsletter might be good too. 
                    Or just ensure it shows up somewhere. 
                    For now, specific insertion at index 5 is what sketch implies. 
                    If list is short, maybe append it at the end? 
                */}
            {(currentPosts.length < 5 || currentPosts.length === 5) && (
              <BlogNewsletterCard />
            )}
          </div>
        </section>

        <BlogPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />

        <CTASection />
      </main>
    </div>
  );
};
