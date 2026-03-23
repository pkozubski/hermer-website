import { defineArrayMember, defineField, defineType } from "sanity";

// ─── Reusable object: Benefit Card ──────────────────────────────────

const benefitItem = defineField({
  name: "benefits",
  title: "Korzyści",
  type: "array",
  description: "Karty korzyści wyświetlane pod hero (zazwyczaj 3)",
  of: [
    defineArrayMember({
      type: "object",
      name: "benefitCard",
      title: "Karta korzyści",
      fields: [
        defineField({
          name: "icon",
          title: "Ikona",
          type: "string",
          options: {
            list: [
              { title: "Paleta", value: "palette" },
              { title: "Użytkownicy", value: "users" },
              { title: "Trending Up", value: "trending-up" },
              { title: "Ustawienia", value: "settings" },
              { title: "Monitor", value: "monitor" },
              { title: "User Check", value: "user-check" },
              { title: "Mouse Pointer", value: "mouse-pointer-2" },
              { title: "Wyszukiwanie", value: "search" },
              { title: "Kod", value: "code2" },
            ],
          },
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "iconColor",
          title: "Kolor ikony",
          type: "string",
          options: {
            list: [
              { title: "Fioletowy", value: "purple" },
              { title: "Cyan", value: "cyan" },
            ],
          },
          initialValue: "purple",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "title",
          title: "Tytuł",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "description",
          title: "Opis",
          type: "array",
          of: [
            defineArrayMember({
              type: "block",
              styles: [{ title: "Normal", value: "normal" }],
              lists: [],
              marks: {
                decorators: [
                  { title: "Bold", value: "strong" },
                  { title: "Italic", value: "em" },
                ],
                annotations: [
                  {
                    name: "link",
                    type: "object",
                    title: "Link",
                    fields: [
                      defineField({
                        name: "href",
                        type: "url",
                        title: "URL",
                        validation: (Rule) =>
                          Rule.uri({ allowRelative: true, scheme: ["http", "https", "mailto", "tel"] }),
                      }),
                    ],
                  },
                ],
              },
            }),
          ],
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "image",
          title: "Obraz (opcjonalny)",
          type: "image",
          description:
            "Gdy podany, renderowana jest duża karta z obrazem zamiast ikony.",
          options: {
            hotspot: true,
          },
        }),
      ],
      preview: {
        select: { title: "title", subtitle: "description" },
      },
    }),
  ],
  validation: (Rule) => Rule.min(1).max(6),
});

// ─── Reusable object: Team Card ─────────────────────────────────────

const teamCardObject = defineArrayMember({
  type: "object",
  name: "teamCard",
  title: "Karta zespołu",
  fields: [
    defineField({
      name: "title",
      title: "Tytuł",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "desc",
      title: "Opis",
      type: "text",
      rows: 2,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: "title" },
  },
});

// ─── Reusable object: Detailed Section ──────────────────────────────

const detailedSectionField = defineField({
  name: "detailedSections",
  title: "Sekcje szczegółowe",
  type: "array",
  description: "Sekcje z numerami (1, 2, 3) opisujące usługę",
  of: [
    defineArrayMember({
      type: "object",
      name: "detailedSection",
      title: "Sekcja",
      fields: [
        defineField({
          name: "number",
          title: "Numer",
          type: "number",
          validation: (Rule) => Rule.required().min(1),
        }),
        defineField({
          name: "title",
          title: "Tytuł",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "barColor",
          title: "Kolor paska",
          type: "string",
          options: {
            list: [
              { title: "Fioletowy", value: "purple" },
              { title: "Cyan", value: "cyan" },
              { title: "Biały", value: "white" },
            ],
          },
          initialValue: "purple",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "description",
          title: "Opis",
          type: "array",
          of: [
            defineArrayMember({
              type: "block",
              styles: [{ title: "Normal", value: "normal" }],
              lists: [
                { title: "Bullet", value: "bullet" },
                { title: "Number", value: "number" },
              ],
              marks: {
                decorators: [
                  { title: "Bold", value: "strong" },
                  { title: "Italic", value: "em" },
                ],
                annotations: [
                  {
                    name: "link",
                    type: "object",
                    title: "Link",
                    fields: [
                      defineField({
                        name: "href",
                        type: "url",
                        title: "URL",
                        validation: (Rule) =>
                          Rule.uri({ allowRelative: true, scheme: ["http", "https", "mailto", "tel"] }),
                      }),
                    ],
                  },
                ],
              },
            }),
          ],
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "teamCards",
          title: "Karty zespołu (opcjonalne)",
          type: "array",
          of: [teamCardObject],
        }),
      ],
      preview: {
        select: { title: "title", subtitle: "number" },
        prepare: ({ title, subtitle }) => ({
          title: `${subtitle}. ${title}`,
        }),
      },
    }),
  ],
  validation: (Rule) => Rule.min(1).max(6),
});

// ─── Main schema: SEO Landing Page ──────────────────────────────────

export const seoLandingPage = defineType({
  name: "seoLandingPage",
  title: "Strony SEO — Miasta",
  type: "document",
  groups: [
    { name: "hero", title: "Hero" },
    { name: "content", title: "Treść", default: true },
    { name: "results", title: "Efekty" },
    { name: "faq", title: "FAQ" },
    { name: "cta", title: "CTA" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    // ── Identity ──
    defineField({
      name: "title",
      title: "Nazwa strony (wewnętrzna)",
      type: "string",
      description: "Widoczna tylko w panelu Studio, np. \"Piła\" lub \"WordPress\"",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      description:
        "Ścieżka URL strony, np. tworzenie-stron-www-pila",
      validation: (Rule) => Rule.required(),
    }),

    // ── Hero ──
    defineField({
      name: "cityName",
      title: "Nazwa miasta",
      type: "string",
      description: "Wyświetlana w kolorze fioletowym w hero H1",
      group: "hero",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroTitle",
      title: "Tytuł hero (opcjonalny)",
      type: "string",
      description:
        'Tekst przed nazwą miasta w H1 (domyślnie "Strony internetowe")',
      group: "hero",
    }),
    defineField({
      name: "heroBadge",
      title: "Badge hero",
      type: "string",
      description: "Tekst badge powyżej H1",
      group: "hero",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroSubtitle",
      title: "Podtytuł hero",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  defineField({
                    name: "href",
                    type: "url",
                    title: "URL",
                    validation: (Rule) =>
                      Rule.uri({ allowRelative: true, scheme: ["http", "https", "mailto", "tel"] }),
                  }),
                ],
              },
            ],
          },
        }),
      ],
      description: "Tekst pod kreską w hero (z możliwością pogrubienia i linkowania)",
      group: "hero",
      validation: (Rule) => Rule.required(),
    }),

    // ── Content ──
    defineField({
      name: "benefitsTitle",
      title: "Nagłówek sekcji korzyści",
      type: "string",
      group: "content",
      validation: (Rule) => Rule.required(),
    }),
    { ...benefitItem, group: "content" },
    { ...detailedSectionField, group: "content" },
    defineField({
      name: "departmentsTitle",
      title: "Nagłówek sekcji działów",
      type: "string",
      group: "content",
      validation: (Rule) => Rule.required(),
    }),

    // ── Results ──
    defineField({
      name: "resultsTitle",
      title: "Nagłówek sekcji efektów",
      type: "string",
      description: 'Domyślnie "Efekty współpracy"',
      group: "results",
    }),
    defineField({
      name: "resultsDescription",
      title: "Opis sekcji efektów",
      type: "text",
      description: "Tekst pod nagłówkiem",
      group: "results",
    }),
    defineField({
      name: "resultsClients",
      title: "Klienci (Efekty)",
      type: "array",
      description: "Dodaj klienta i jego wynik (wyświetlane są maksymalnie 2 kafelki, domyślnie Klinika NaNowo i VerTel)",
      group: "results",
      of: [
        defineArrayMember({
          type: "object",
          name: "resultClient",
          fields: [
            defineField({
              name: "clientName",
              title: "Nazwa klienta",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "growthPercent",
              title: "Wzrost (np. 670%)",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: { title: "clientName", subtitle: "growthPercent" },
          },
        }),
      ],
      validation: (Rule) => Rule.max(2),
    }),

    // ── FAQ ──
    defineField({
      name: "faqs",
      title: "FAQ",
      type: "array",
      of: [{ type: "faqItem" }],
      group: "faq",
    }),

    // ── CTA ──
    defineField({
      name: "ctaTitle",
      title: "Tytuł CTA",
      type: "string",
      description: 'Domyślnie "Skontaktuj się z nami"',
      group: "cta",
    }),
    defineField({
      name: "ctaSubtitleLines",
      title: "Linie podtytułu CTA",
      type: "array",
      of: [{ type: "string" }],
      description: "Każda linia to osobny element tablicy",
      group: "cta",
    }),

    // ── SEO ──
    defineField({
      name: "seo",
      title: "SEO",
      type: "seoMetaFields",
      group: "seo",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "slug.current",
    },
    prepare: ({ title, subtitle }) => ({
      title: title || "Bez nazwy",
      subtitle: `/${subtitle || ""}`,
    }),
  },
});
