import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Realizacja (Projekt)",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Tytuł Klienta/Projektu",
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
      title: "Kategoria (główna)",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Krótki opis",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "mainImage",
      title: "Zdjęcie główne",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "link",
      title: "Link do strony",
      type: "url",
    }),
    defineField({
      name: "tags",
      title: "Tagi",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});
