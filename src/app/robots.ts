import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/studio/", "/api/", "/debug-images/", "/hero-cards/"],
    },
    sitemap: "https://e-hermer.pl/sitemap.xml",
  };
}
