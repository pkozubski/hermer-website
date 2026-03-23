import React from "react";

export const ImageWithFallback = ({
  src,
  alt,
  className,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return <img src={src} alt={alt} className={className} {...props} />;
};
