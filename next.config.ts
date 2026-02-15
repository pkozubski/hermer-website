import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    const seoWebTabs = [
      "/obszar-dzialania",
      "/projektowanie-stron-gorzow",
      "/projektowanie-stron-torun",
      "/strony-internetowe-chojnice",
      "/strony-internetowe-dla-developerow",
      "/strony-internetowe-dla-firm",
      "/strony-internetowe-dla-fotografa",
      "/strony-internetowe-dla-prawnikow",
      "/strony-internetowe-dla-restauracji",
      "/strony-internetowe-gniezno",
      "/strony-internetowe-grudziadz",
      "/strony-internetowe-koszalin",
      "/strony-internetowe-miastko",
      "/strony-internetowe-trzcianka",
      "/strony-internetowe-zielona-gora",
      "/strony-www-choszczno",
      "/tworzenie-stron-wordpress",
      "/tworzenie-stron-www-bydgoszcz",
      "/tworzenie-stron-www-konin",
      "/tworzenie-stron-www-pila",
      "/tworzenie-stron-www-stargard",
      "/tworzenie-stron-www-szczecinek",
      "/tworzenie-stron-www-walcz",
      "/tworzenie-stron-www-wrzesnia",
      "/tworzenie-stron-www-zlotow",
    ];

    const seoShopTabs = [
      "/sklep-internetowy-woocommerce",
      "/sklepy-prestashop",
    ];

    return [
      ...seoWebTabs.map((source) => ({
        source,
        destination: "/oferta/strony-www/",
      })),
      ...seoShopTabs.map((source) => ({
        source,
        destination: "/oferta/sklepy-internetowe/",
      })),
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
    ],
  },
};

export default nextConfig;
