import { rmSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { CITY_SEO_PAGES } from "../src/data/seo/cityData";

const __dirname = dirname(fileURLToPath(import.meta.url));

async function deleteFolders() {
  console.log("🚀 Starting cleanup of duplicated city folders...");
  
  const slugs = Object.keys(CITY_SEO_PAGES);
  let deletedCount = 0;

  for (const slug of slugs) {
    const dirPath = resolve(__dirname, "..", "src", "app", slug);
    if (existsSync(dirPath)) {
      rmSync(dirPath, { recursive: true, force: true });
      console.log(`🗑️ Deleted: ${slug}`);
      deletedCount++;
    }
  }

  console.log(`\n🎉 Cleanup complete! Deleted ${deletedCount} redundant folders.`);
}

deleteFolders();
