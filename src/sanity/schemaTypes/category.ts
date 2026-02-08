import { defineField, defineType } from "sanity";

export const category = defineType({
  name: "category",
  title: "Kategoria",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Nazwa",
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
      name: "description",
      title: "Opis",
      type: "text",
    }),
  ],
});
