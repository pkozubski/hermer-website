"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { PortableText, type PortableTextBlock } from "@portabletext/react";
import { customPortableTextComponents } from "@/components/ui/CustomPortableText";

interface DetailedSectionProps {
  number: number;
  title: string;
  barColor?: "purple" | "cyan" | "white";
  description?: string;
  descriptionRichText?: PortableTextBlock[];
  className?: string;
  children?: React.ReactNode;
}

/**
 * A reusable component for individual detailed sections on SEO city pages.
 * Supports numbered titles, colored bars, and a description paragraph.
 * Additional content can be passed as children.
 */
export const DetailedSection = ({
  number,
  title,
  barColor = "purple",
  description,
  descriptionRichText,
  className,
  children,
}: DetailedSectionProps) => {
  const barColors = {
    purple: "bg-[#916AFF]",
    cyan: "bg-[#52D8EA]",
    white: "bg-white/20",
  };

  return (
    <div className={cn("text-center", className)}>
      <h4 className="text-3xl md:text-5xl font-display font-medium tracking-tighter mb-8">
        {number}. {title}
      </h4>
      <div className={cn("h-1 w-24 mx-auto mb-8", barColors[barColor])} />
      {descriptionRichText ? (
        <div className="text-left text-neutral-300 text-lg md:text-xl leading-relaxed">
          <PortableText value={descriptionRichText} components={customPortableTextComponents} />
        </div>
      ) : description ? (
        <p className="text-left text-neutral-300 text-lg md:text-xl leading-relaxed">
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
};

interface DetailedSectionCardProps {
  number: number;
  title: string;
  description: string;
  icon?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
}

/**
 * A styled card variant for detailed sections (e.g., the "Gratis" card).
 */
export const DetailedSectionCard = ({
  number,
  title,
  description,
  icon: Icon,
  className,
  children,
}: DetailedSectionCardProps) => {
  return (
    <div
      className={cn(
        "p-12 rounded-[40px] bg-linear-to-br from-[#916AFF]/20 to-[#52D8EA]/20 border border-white/10 text-center relative overflow-hidden group",
        className,
      )}
    >
      {Icon && (
        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
          <Icon size={120} className="text-[#916AFF]" />
        </div>
      )}
      <h4 className="text-3xl md:text-5xl font-display font-medium tracking-tighter mb-8">
        {number}. {title}
      </h4>
      <div className="h-1 w-24 bg-white/20 mx-auto mb-8" />
      <p className="text-neutral-200 text-xl leading-relaxed mb-10">
        {description}
      </p>
      {children}
    </div>
  );
};

interface DetailedSectionsWrapperProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * A container for multiple DetailedSection components.
 * Handles background, padding, and spacing between sections.
 */
export const DetailedSectionsWrapper = ({
  children,
  className,
}: DetailedSectionsWrapperProps) => {
  return (
    <section
      className={cn(
        "py-24 bg-neutral-800/20 border-y border-white/5",
        className,
      )}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-5xl space-y-24">
        {children}
      </div>
    </section>
  );
};
