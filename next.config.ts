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
    ],
  },
};

export default nextConfig;
