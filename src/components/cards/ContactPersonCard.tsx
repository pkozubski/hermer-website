import React from "react";
import Image, { StaticImageData } from "next/image";
import { Mail, Phone } from "lucide-react";

interface ContactPersonCardProps {
  name: string;
  role: string;
  description: string;
  phone: string;
  email: string;
  image?: StaticImageData;
  initials?: string;
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
  const phoneHref = phone.replace(/\s/g, "");

  return (
    <div className="group relative flex flex-col items-start h-full">
      {/* Header: Image & Name */}
      <div className="flex flex-col gap-6 mb-8 relative z-10 w-full">
        <div className="relative w-full h-[450px] sm:h-[550px] lg:h-[600px] 2xl:h-[700px] rounded-[32px] overflow-hidden shrink-0 bg-[#0f0f0f] flex items-center justify-center group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)] transition-shadow duration-500">
          {image ? (
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover object-top transition-all duration-1000 group-hover:scale-105"
            />
          ) : (
            <span className="text-4xl font-display font-bold text-neutral-600 transition-colors uppercase">
              {initials}
            </span>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />

          <div className="absolute bottom-6 left-6 right-6 flex flex-col items-start text-left">
            <h4 className="text-2xl sm:text-3xl font-bold font-display text-white transition-colors duration-300">
              {name}
            </h4>
            <p className="text-[#916AFF] font-bold tracking-widest text-xs uppercase mt-2">
              {role}
            </p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mb-8 grow text-left w-full">
        <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
          {description}
        </p>
      </div>

      {/* Contact Links */}
      <div className="flex flex-col gap-4 mt-auto relative z-10 w-full">
        <a
          href={`tel:${phoneHref}`}
          className="flex items-center gap-4 text-neutral-400 hover:text-white transition-colors group/link w-fit"
        >
          <Phone
            size={18}
            className="text-neutral-500 group-hover/link:text-white transition-colors duration-300"
          />
          <span className="font-display font-medium tracking-wider text-base sm:text-lg">
            {phone}
          </span>
        </a>
        <a
          href={`mailto:${email}`}
          className="flex items-center gap-4 text-neutral-400 hover:text-white transition-colors group/link w-fit"
        >
          <Mail
            size={18}
            className="text-neutral-500 group-hover/link:text-white transition-colors duration-300"
          />
          <span className="font-display font-medium tracking-wider text-base sm:text-lg">
            {email}
          </span>
        </a>
      </div>
    </div>
  );
}
