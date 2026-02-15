import React, { useRef, useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { SplitRevealTitle } from "./ui/SplitRevealTitle";
import { LineReveal } from "./ui/LineReveal";
import { BlogCard, Post } from "./cards/BlogCard";

export const Blog: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragStateRef = useRef({
    active: false,
    startX: 0,
    startTranslate: 0,
    currentTranslate: 0,
  });
  const [width, setWidth] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch posts from Sanity
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch("/api/blog-posts", { cache: "no-store" });
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        const data = await response.json();
        setPosts(data || []);
      } catch (err) {
        console.error("Failed to fetch blog posts:", err);
        setError("Nie udało się załadować postów");
        setPosts([]); // Set empty array to prevent further errors
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Calculate draggable constraints
  useEffect(() => {
    const recalcWidth = () => {
      if (!containerRef.current) return;
      setWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
    };

    recalcWidth();
    window.addEventListener("resize", recalcWidth);
    return () => window.removeEventListener("resize", recalcWidth);
  }, [posts]); // Recalculate when posts are loaded

  useEffect(() => {
    const minX = -Math.max(width, 0);
    const clamped = Math.min(0, Math.max(dragStateRef.current.currentTranslate, minX));
    dragStateRef.current.currentTranslate = clamped;
    setTranslateX(clamped);
  }, [width]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (width <= 0) return;
    dragStateRef.current.active = true;
    dragStateRef.current.startX = e.clientX;
    dragStateRef.current.startTranslate = dragStateRef.current.currentTranslate;
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragStateRef.current.active) return;
    const deltaX = e.clientX - dragStateRef.current.startX;
    const minX = -Math.max(width, 0);
    const nextX = Math.min(
      0,
      Math.max(dragStateRef.current.startTranslate + deltaX, minX),
    );
    dragStateRef.current.currentTranslate = nextX;
    setTranslateX(nextX);
  };

  const handlePointerEnd = () => {
    if (!dragStateRef.current.active) return;
    dragStateRef.current.active = false;
    setIsDragging(false);
  };

  return (
    <section
      id="blog"
      className="py-24 md:py-32 bg-transparent overflow-x-clip relative"
    >
      <div className="container mx-auto px-4 md:px-8 relative z-10 mb-16">
        {/* HEADER - Split Style */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <SplitRevealTitle
            line1="Strefa"
            line2="Wiedzy"
            className="text-white text-5xl md:text-8xl tracking-tighter"
          />
          <div className="flex flex-col gap-6 md:text-right max-w-sm">
            <LineReveal
              lines={[
                "Dzielimy się wiedzą, która napędza",
                "cyfrowy świat. Przesuń listę,",
                "aby odkryć najnowsze wpisy.",
              ]}
              className="text-neutral-400 text-xs md:text-sm uppercase tracking-wide leading-relaxed"
            />
            <button className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#916AFF] hover:text-[#7a57d6] transition-colors justify-end">
              Zobacz wszystkie
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* DRAGGABLE LIST */}
      <div className="pl-4 md:pl-8 overflow-visible" ref={containerRef}>
        {isLoading ? (
          // Loading State
          <div className="flex gap-4 md:gap-8 pr-8 md:pr-16">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-[280px] md:w-[380px] shrink-0 aspect-3/4 bg-neutral-800/50 rounded-3xl animate-pulse"
              />
            ))}
          </div>
        ) : error ? (
          // Error State
          <div className="flex items-center justify-center py-16 text-neutral-400">
            <p>{error}</p>
          </div>
        ) : (
          // Posts List
          <div
            ref={trackRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerEnd}
            onPointerCancel={handlePointerEnd}
            onLostPointerCapture={handlePointerEnd}
            className={`flex gap-4 md:gap-8 w-max pr-8 md:pr-16 ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
            style={{
              transform: `translate3d(${translateX}px, 0, 0)`,
              touchAction: "pan-y",
            }}
          >
            {posts.map((post, index) => (
              <BlogCard key={post._id} post={post} index={index} />
            ))}

            {/* "More" Card at the end */}
            <div className="group relative w-[200px] md:w-[300px] shrink-0 aspect-3/4 bg-[#916AFF] flex flex-col items-center justify-center text-white cursor-pointer hover:bg-[#7a57d6] transition-colors rounded-3xl">
              <span className="text-6xl mb-4 font-display font-bold">+</span>
              <span className="font-bold uppercase tracking-widest text-sm">
                Pokaż Więcej
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
