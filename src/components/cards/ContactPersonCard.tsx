import React from "react";
import Image, { StaticImageData } from "next/image";
import { Mail, Phone, ArrowUpRight } from "lucide-react";

interface ContactPersonCardProps {
  name: string;
  role: string;
  description: string;
  phone: string;
  email: string;
  image?: StaticImageData; // Optional image
  initials?: string; // Optional fallback
}

export function ContactPersonCard({
  name,
  role,
  description,
  phone,
  email,
  image,
  initials,
}: ContactPersonCardProps) {
  // Helper to format phone for href (remove spaces)
  const phoneHref = phone.replace(/\s/g, "");

  return (
    <div className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-colors duration-500 flex flex-col h-full">
      {/* Header: Image & Name */}
      <div className="flex items-center gap-5 mb-6">
        <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-white/10 bg-neutral-800 flex items-center justify-center">
          {image ? (
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
            />
          ) : (
            <span className="text-2xl font-display font-bold text-neutral-600 group-hover:text-neutral-500 transition-colors">
              {initials}
            </span>
          )}
        </div>
        <div>
          <h4 className="text-xl font-bold font-display text-white group-hover:text-[#916AFF] transition-colors duration-300">
            {name}
          </h4>
          <p className="text-[#916AFF] font-medium text-sm tracking-wide group-hover:text-white transition-colors duration-300">
            {role}
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="mb-6 grow">
        <p className="text-neutral-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {/* Contact Links */}
      <div className="flex flex-col gap-3 mt-auto pt-6 border-t border-white/5">
        <a
          href={`tel:${phoneHref}`}
          className="flex items-center gap-3 text-white hover:text-[#916AFF] transition-colors group/link w-fit"
        >
          <div className="bg-white/5 p-2 rounded-lg group-hover/link:bg-[#916AFF]/20 transition-colors">
            <Phone size={16} />
          </div>
          <span className="font-medium tracking-wide text-sm">{phone}</span>
        </a>
        <a
          href={`mailto:${email}`}
          className="flex items-center gap-3 text-white hover:text-[#916AFF] transition-colors group/link w-fit"
        >
          <div className="bg-white/5 p-2 rounded-lg group-hover/link:bg-[#916AFF]/20 transition-colors">
            <Mail size={16} />
          </div>
          <span className="font-medium tracking-wide text-sm">{email}</span>
        </a>
      </div>
    </div>
  );
}
