import { createClient } from '@sanity/client';
import dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = '2024-01-01';
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!token) {
  console.error(
    'Error: SANITY_API_WRITE_TOKEN not found in environment variables.',
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

async function run() {
  const pageData = {
    _id: 'page-projektowanie-stron-gorzow', // Helper ID
    _type: 'page',
    title: 'Strony internetowe Gorzów',
    slug: {
      _type: 'slug',
      current: 'projektowanie-stron-gorzow',
    },
    seo: {
      _type: 'seoMetaFields',
      metaTitle: 'Strony internetowe Gorzów - Tworzenie stron Gorzów - Hermer',
      metaDescription:
        'Strony internetowe Gorzów to oferta skierowana specjalnie do mieszkańców Gorzowa Wielkopolskiego. Sprawdź i Zadzwoń!',
      nofollowAttributes: false,
      seoKeywords: ['strony internetowe gorzów', 'tworzenie stron gorzów'],
      openGraph: {
        _type: 'openGraph',
        title: 'Strony internetowe Gorzów - Tworzenie stron Gorzów - Hermer',
        description:
          'Strony internetowe Gorzów to oferta skierowana specjalnie do mieszkańców Gorzowa Wielkopolskiego. Sprawdź i Zadzwoń!',
        url: 'https://e-hermer.pl/projektowanie-stron-gorzow/',
        siteName: 'Hermer',
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: 'image-945ec37943503468593333333333333333333333-1024x980-webp', // We'll try to reuse if known, otherwise we might need to upload.
            // But wait, the previous script uploads it. I should probably copy the upload logic.
          },
        },
      },
      twitter: {
        _type: 'twitter',
        cardType: 'summary_large_image',
      },
    },
  };

  // Re-use upload logic from previous script to be safe
  const imageUrl =
    'https://e-hermer.pl/wp-content/uploads/2024/05/klinika-na-nowo-website-1024x980.webp';

  console.log('Fetching image...');
  const res = await fetch(imageUrl);
  if (!res.ok) throw new Error('Failed to fetch image');
  const buffer = Buffer.from(await res.arrayBuffer());

  console.log('Uploading asset...');
  const asset = await client.assets.upload('image', buffer, {
    filename: 'gorzow-og-image.webp',
  });

  console.log('Asset uploaded:', asset._id);

  pageData.seo.openGraph.image.asset._ref = asset._id;
  pageData.seo.metaImage = {
    _type: 'image',
    asset: { _type: 'reference', _ref: asset._id },
  };

  console.log('Creating/Updating document...');
  await client.createOrReplace(pageData);

  console.log('Done!');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
