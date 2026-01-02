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
      type: "string",
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
  ],
});
