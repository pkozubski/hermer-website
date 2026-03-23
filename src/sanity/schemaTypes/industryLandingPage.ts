import { defineArrayMember, defineField, defineType } from "sanity";

export const industryLandingPage = defineType({
  name: "industryLandingPage",
  title: "Strony dla Branży (Industry SEO)",
  type: "document",
  groups: [
    { name: "content", title: "Treść" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    // --- SEO Group ---
    defineField({
      name: "seo",
      title: "Ustawienia SEO",
      type: "seoMetaFields",
      group: "seo",
      description: "Meta Tytuł, Meta Opis i obrazek Open Graph. Służą tylko do tagów meta HTML.",
    }),
    
    // --- Content Group ---
    defineField({
      name: "slug",
      title: "Adres URL (Slug)",
      type: "slug",
      group: "content",
      options: {
        source: "seo.metaTitle",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      description: "Np. 'strony-internetowe-dla-restauracji' lub 'strony-internetowe-dla-prawnikow'.",
    }),

    // --- Hero Section ---
    defineField({
      name: "heroTitleTop",
      title: "Tytuł Hero (Górna część)",
      type: "string",
      group: "content",
      validation: (Rule) => Rule.required(),
      description: "Np. 'Skuteczne strony internetowe'",
    }),
    defineField({
      name: "heroTitleHighlight",
      title: "Tytuł Hero (Wyróżnienie)",
      type: "string",
      group: "content",
      validation: (Rule) => Rule.required(),
      description: "Np. 'dla prawników'",
    }),
    defineField({
      name: "heroSubtitle",
      title: "Podtytuł Hero",
      type: "string",
      group: "content",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroImage",
      title: "Tło Hero (Obraz)",
      type: "image",
      group: "content",
      options: { hotspot: true },
    }),

    // --- Introduction ---
    defineField({
      name: "introTitle",
      title: "Tytuł sekcji wprowadzającej",
      type: "string",
      group: "content",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "introText",
      title: "Treść sekcji wprowadzającej",
      type: "array",
      of: [{ type: "block" }],
      group: "content",
      validation: (Rule) => Rule.required(),
    }),

    // --- Features (Wyróżniki) ---
    defineField({
      name: "featuresTitle",
      title: "Tytuł dla 'Wyróżniki'",
      type: "string",
      group: "content",
      initialValue: "Wyróżniki",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "features",
      title: "Wyróżniki (3 karty ze zdjęciami)",
      type: "array",
      group: "content",
      of: [
        defineArrayMember({
          type: "object",
          name: "featureItem",
          fields: [
            defineField({ name: "title", title: "Tytuł", type: "string", validation: (Rule) => Rule.required() }),
            defineField({ name: "description", title: "Opis", type: "text", rows: 3, validation: (Rule) => Rule.required() }),
            defineField({ name: "image", title: "Tło graficzne", type: "image", options: { hotspot: true } }),
          ],
        }),
      ],
      validation: (Rule) => Rule.min(1).max(3),
    }),

    // --- Included Items (Co powinna zawierać...) ---
    defineField({
      name: "includedTitle",
      title: "Tytuł sekcji 'Co zawiera...'",
      type: "string",
      group: "content",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "includedItems",
      title: "Elementy strony (ikony + tekst)",
      type: "array",
      group: "content",
      of: [
        defineArrayMember({
          type: "object",
          name: "includedItem",
          fields: [
            defineField({ name: "title", title: "Tytuł", type: "string", validation: (Rule) => Rule.required() }),
            defineField({ name: "text", title: "Treść", type: "text", rows: 3, validation: (Rule) => Rule.required() }),
            defineField({ 
              name: "iconSvg", 
              title: "Ikona SVG", 
              type: "string", 
              description: "Wybierz ikonę z rozwijanej listy.",
              options: {
                list: [
                  { title: "Akcja / Kursor", value: "/assets/seo/industry-icons/action.svg" },
                  { title: "Kalendarz", value: "/assets/seo/industry-icons/calendar.svg" },
                  { title: "Karty UI / Rozmieszczenie", value: "/assets/seo/industry-icons/cards-ui.svg" },
                  { title: "Koszyk 360", value: "/assets/seo/industry-icons/cart-360.svg" },
                  { title: "Koszyk na zakupy", value: "/assets/seo/industry-icons/cart.svg" },
                  { title: "Eran komputera (Desktop)", value: "/assets/seo/industry-icons/desktop.svg" },
                  { title: "Rozwijane Menu (Dropdown)", value: "/assets/seo/industry-icons/dropdown-menu.svg" },
                  { title: "Edukacja / Czapka Specjalisty", value: "/assets/seo/industry-icons/education.svg" },
                  { title: "Informacje (Info)", value: "/assets/seo/industry-icons/info.svg" },
                  { title: "Logo firmy / Znak", value: "/assets/seo/industry-icons/logo.svg" },
                  { title: "Koperta / Mail", value: "/assets/seo/industry-icons/mail.svg" },
                  { title: "Klasyczne Menu", value: "/assets/seo/industry-icons/menu.svg" },
                  { title: "Ludzie / Zespół", value: "/assets/seo/industry-icons/people.svg" },
                  { title: "Profil Firmowy / Karta", value: "/assets/seo/industry-icons/profile-card.svg" },
                  { title: "Iskra / Gwiazdka Wyróżnika", value: "/assets/seo/industry-icons/spark.svg" },
                  { title: "WWW / Przeglądarka internetowa", value: "/assets/seo/industry-icons/www.svg" },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
      validation: (Rule) => Rule.min(1),
    }),



    // --- Reviews ---
    defineField({
      name: "showReviews",
      title: "Pokaż globalne opinie z Sanity?",
      type: "boolean",
      group: "content",
      initialValue: true,
    }),

    // --- FAQ References ---
    defineField({
      name: "faqs",
      title: "Pytania i odpowiedzi (FAQ)",
      type: "array",
      group: "content",
      of: [{ type: "faqItem" }],
    }),

    // --- CTA ---
    defineField({
      name: "ctaTitle",
      title: "Tytuł CTA",
      type: "string",
      group: "content",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "ctaSubtitleLines",
      title: "Linie podtytułu CTA",
      type: "array",
      group: "content",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.min(1).max(3),
    }),
  ],
  preview: {
    select: {
      title: "heroTitleHighlight",
      subtitle: "heroTitleTop",
      media: "heroImage",
    },
    prepare({ title, subtitle, media }) {
      return {
        title: `Strona dla: ${title}`,
        subtitle: subtitle,
        media,
      };
    },
  },
});
