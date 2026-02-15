import { defineField, defineType } from "sanity";

export const review = defineType({
  name: "review",
  title: "Review",
  type: "document",
  fields: [
    defineField({
      name: "author",
      title: "Author",
      type: "string",
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (Rule) => Rule.min(1).max(5),
    }),
    defineField({
      name: "text",
      title: "Review Text",
      type: "text",
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    }),
    defineField({
      name: "avatarUrl",
      title: "Avatar URL",
      type: "url",
    }),
    defineField({
      name: "platform",
      title: "Platform",
      type: "string",
      options: {
        list: ["Google", "Facebook", "Other"],
      },
      initialValue: "Google",
    }),
    defineField({
      name: "reviewLink",
      title: "Review Link",
      type: "url",
    }),
    defineField({
      name: "googleReviewId",
      title: "Google Review ID",
      type: "string",
      description: "Unique ID from Google to prevent duplicates",
    }),
  ],
  preview: {
    select: {
      title: "author",
      subtitle: "text",
    },
  },
});
