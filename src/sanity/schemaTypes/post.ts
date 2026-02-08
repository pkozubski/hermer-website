import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Tytuł",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "category",
      title: "Kategoria",
      type: "reference",
      to: [{ type: "category" }],
    }),
    defineField({
      name: "mainImage",
      title: "Zdjęcie główne",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "publishedAt",
      title: "Data publikacji",
      type: "datetime",
    }),
    defineField({
      name: "year",
      title: "Rok",
      type: "string",
      initialValue: new Date().getFullYear().toString(),
    }),
    defineField({
      name: "body",
      title: "Treść",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Meta Tytuł",
          type: "string",
          description: "Tytuł wyświetlany w wyszukiwarce (zalecane ok. 60 znaków)",
        },
        {
          name: "description",
          title: "Meta Opis",
          type: "text",
          description: "Opis wyświetlany w wyszukiwarce (zalecane ok. 160 znaków)",
        },
        {
          name: "ogImage",
          title: "Zdjęcie Open Graph",
          type: "image",
          description: "Zdjęcie wyświetlane przy udostępnianiu w mediach społecznościowych",
        },
      ],
    }),
  ],
});
