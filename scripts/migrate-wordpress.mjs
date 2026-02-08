import { createClient } from '@sanity/client';
import fetch from 'node-fetch';
import { JSDOM } from 'jsdom';
import { htmlToBlocks } from '@portabletext/block-tools';
import { Schema } from '@sanity/schema';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

const WP_URL = 'https://e-hermer.pl/wp-json/wp/v2';

// Simplified schema to avoid internal type issues with block-tools
const compiledSchema = Schema.compile({
  name: 'myBlog',
  types: [
    {
      type: 'object',
      name: 'post',
      fields: [
        {
          title: 'Body',
          name: 'body',
          type: 'array',
          of: [{ type: 'block' }],
        },
      ],
    },
  ],
});

const blockContentType = compiledSchema
  .get('post')
  .fields.find((field) => field.name === 'body').type;

async function uploadImage(url) {
  if (!url) return null;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to fetch image: ${url}`);
    const buffer = await response.arrayBuffer();
    const asset = await client.assets.upload('image', Buffer.from(buffer), {
      filename: url.split('/').pop(),
    });
    return {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id,
      },
    };
  } catch (error) {
    console.error(`Error uploading image (${url}):`, error.message);
    return null;
  }
}

function convertHtmlToBlocks(html) {
  if (!html) return [];
  const dom = new JSDOM(html);
  return htmlToBlocks(html, blockContentType, {
    parseHtml: (html) => dom.window.document,
  });
}

async function migrate() {
  console.log('🚀 Starting migration (with custom SEO schema)...');

  try {
    // 1. Fetch Categories
    console.log('📁 Fetching categories...');
    const wpCategoriesRes = await fetch(`${WP_URL}/categories?per_page=100`);
    const wpCategories = await wpCategoriesRes.json();
    const catMap = {};

    for (const cat of wpCategories) {
      console.log(`  Checking category: ${cat.name}`);
      const doc = {
        _type: 'category',
        _id: `category-${cat.id}`,
        title: cat.name,
        slug: { _type: 'slug', current: cat.slug },
        description: cat.description,
      };
      await client.createOrReplace(doc);
      catMap[cat.id] = doc._id;
    }

    // 2. Fetch Posts
    let page = 1;
    let allPosts = [];
    while (true) {
      console.log(`📄 Fetching posts page ${page}...`);
      const res = await fetch(`${WP_URL}/posts?_embed&per_page=100&page=${page}`);
      if (!res.ok) {
          if (res.status === 400) break;
          throw new Error(`Failed to fetch posts: ${res.statusText}`);
      }
      const posts = await res.json();
      if (posts.length === 0) break;
      allPosts = allPosts.concat(posts);
      page++;
    }

    console.log(`✅ Found ${allPosts.length} posts to migrate.`);

    for (const wpPost of allPosts) {
      console.log(`🏗️ Migrating post: ${wpPost.title.rendered}`);

      const featuredImage = wpPost._embedded?.['wp:featuredmedia']?.[0]?.source_url;
      const mainImageAsset = await uploadImage(featuredImage);

      const rankMath = wpPost.rank_math_seo || {};
      
      const seo = {
        _type: 'object',
        title: rankMath.title || wpPost.title.rendered,
        description: rankMath.description || '',
      };

      if (rankMath.facebook_image) {
          seo.ogImage = await uploadImage(rankMath.facebook_image);
      } else if (mainImageAsset) {
          seo.ogImage = mainImageAsset;
      }

      const postDoc = {
        _type: 'post',
        _id: `post-${wpPost.id}`,
        title: wpPost.title.rendered,
        slug: { _type: 'slug', current: wpPost.slug },
        publishedAt: wpPost.date_gmt + 'Z',
        year: new Date(wpPost.date).getFullYear().toString(),
        mainImage: mainImageAsset,
        body: convertHtmlToBlocks(wpPost.content.rendered),
        seo: seo,
      };

      if (wpPost.categories && wpPost.categories.length > 0) {
        const catId = wpPost.categories[0];
        if (catMap[catId]) {
          postDoc.category = {
            _type: 'reference',
            _ref: catMap[catId],
          };
        }
      }

      await client.createOrReplace(postDoc);
      console.log(`  Done: ${wpPost.title.rendered}`);
    }

    console.log('🏁 Migration finished successfully!');
  } catch (error) {
    console.error('❌ Migration failed:', error);
  }
}

migrate();
