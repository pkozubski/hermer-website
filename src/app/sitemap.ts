import { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

const BASE_URL = "https://hermer.pl";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Statyczne podstrony
  const staticRoutes = [
    // Strona główna
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },

    // Główne sekcje
    { path: "/oferta", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/realizacje", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/kontakt", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/o-firmie", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/opinie", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/dla-kogo", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/obszar-dzialania", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/najlepszy-pakiet", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/rodo", priority: 0.3, changeFrequency: "yearly" as const },

    // Oferta – podstrony
    { path: "/oferta/strony-www", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/oferta/sklepy-internetowe", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/oferta/pozycjonowanie", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/oferta/marketing", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/oferta/wordpress-shield", priority: 0.8, changeFrequency: "monthly" as const },

    // Strony lokalne – miasta
    { path: "/strony-internetowe-chojnice", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/strony-internetowe-gniezno", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/strony-internetowe-grudziadz", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/strony-internetowe-koszalin", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/strony-internetowe-miastko", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/strony-internetowe-trzcianka", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/strony-internetowe-zielona-gora", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/strony-www-choszczno", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/tworzenie-stron-www-bydgoszcz", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/tworzenie-stron-www-konin", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/tworzenie-stron-www-pila", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/tworzenie-stron-www-stargard", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/tworzenie-stron-www-szczecinek", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/tworzenie-stron-www-walcz", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/tworzenie-stron-www-wrzesnia", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/tworzenie-stron-www-zlotow", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/projektowanie-stron-gorzow", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/projektowanie-stron-torun", priority: 0.6, changeFrequency: "monthly" as const },

    // Strony branżowe
    { path: "/strony-internetowe-dla-developerow", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/strony-internetowe-dla-firm", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/strony-internetowe-dla-fotografa", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/strony-internetowe-dla-prawnikow", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/strony-internetowe-dla-restauracji", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/sklep-internetowy-woocommerce", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/sklepy-prestashop", priority: 0.6, changeFrequency: "monthly" as const },
  ];

  const staticPages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // 2. Dynamiczne posty blogowe z Sanity
  const posts = await client.fetch<{ slug: string; _updatedAt: string }[]>(
    groq`*[_type == "post" && defined(slug.current)] | order(_updatedAt desc) {
      "slug": slug.current,
      _updatedAt
    }`,
    {},
    { next: { revalidate: 3600 } }
  );

  const postPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/${post.slug}`,
    lastModified: new Date(post._updatedAt),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // 3. Dynamiczne realizacje z Sanity
  const projects = await client.fetch<{ slug: string; _updatedAt: string }[]>(
    groq`*[_type == "project" && defined(slug.current)] | order(_updatedAt desc) {
      "slug": slug.current,
      _updatedAt
    }`,
    {},
    { next: { revalidate: 3600 } }
  );

  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${BASE_URL}/realizacje/${project.slug}`,
    lastModified: new Date(project._updatedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...postPages, ...projectPages];
}
