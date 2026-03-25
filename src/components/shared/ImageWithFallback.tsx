import React from "react";
import Image from "next/image";

export const ImageWithFallback = ({
  src,
  alt,
  className,
  width,
  height,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement> & {
  width?: number;
  height?: number;
}) => {
  if (!src) return null;

  // For external URLs or data URIs, use next/image with fill if no dimensions
  if (width && height) {
    return (
      <Image
        src={src as string}
        alt={alt || ""}
        width={width}
        height={height}
        className={className}
        loading="lazy"
      />
    );
  }

  // Fallback: use img for cases where dimensions are unknown
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} className={className} {...props} />;
};
