import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {

    return [
      {
        source: "/oferta/zewnetrzny-dzial-marketingu",
        destination: "/oferta/marketing/",
      },
      {
        source: "/oferta/wordpress-shield",
        destination: "/oferta/marketing/",
      },
      {
        source: "/sample-page",
        destination: "/",
      },
    ];
  },
  trailingSlash: true,
  compiler: {
    styledComponents: true,
  },
  turbopack: {
    root: process.cwd(),
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;
