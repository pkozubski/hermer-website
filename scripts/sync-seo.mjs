import { createClient } from "@sanity/client";
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});
const slug = "strony-internetowe-dla-developerow";
const title = "Strony internetowe dla deweloperów - WWW dla Dewelopera";
const description = "Strony internetowe dla Deweloperów to jedna z naszych specjalizacji. Przygotujemy stronę www idealnie dopasowaną do Twojej branży. Sprawdź!";
async function run() {
  const docId = `page-${slug}`;
  await client.patch(docId).set({
    "seo.metaTitle": title,
    "seo.metaDescription": description,
    "seo.openGraph.title": title,
    "seo.openGraph.description": description
  }).commit();
  console.log("Success!");
}
run().catch(console.error);
