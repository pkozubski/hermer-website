import {
  buildMetadataFromSanityWithFallbackMetadata,
  type SanitySeo,
} from '@/sanity/lib/seo';
import { PAGE_SEO_QUERY } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';
import type { Metadata } from 'next';

const SEO_SLUG = 'projektowanie-stron-gorzow';

const metadataFallback: Metadata = {
  title: 'Strony internetowe Gorzów - Tworzenie stron Gorzów - Hermer',
  description:
    'Strony internetowe Gorzów to oferta skierowana specjalnie do mieszkańców Gorzowa Wielkopolskiego. Sprawdź i Zadzwoń!',
  alternates: {
    canonical: 'https://e-hermer.pl/projektowanie-stron-gorzow/',
  },
  openGraph: {
    title: 'Strony internetowe Gorzów - Tworzenie stron Gorzów - Hermer',
    description:
      'Strony internetowe Gorzów to oferta skierowana specjalnie do mieszkańców Gorzowa Wielkopolskiego. Sprawdź i Zadzwoń!',
    url: 'https://e-hermer.pl/projektowanie-stron-gorzow/',
    type: 'article',
    siteName: 'Hermer',
    locale: 'pl_PL',
    images: [
      {
        url: 'https://e-hermer.pl/wp-content/uploads/2024/05/klinika-na-nowo-website-1024x980.webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Strony internetowe Gorzów - Tworzenie stron Gorzów - Hermer',
    description:
      'Strony internetowe Gorzów to oferta skierowana specjalnie do mieszkańców Gorzowa Wielkopolskiego. Sprawdź i Zadzwoń!',
    images: [
      'https://e-hermer.pl/wp-content/uploads/2024/05/klinika-na-nowo-website-1024x980.webp',
    ],
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-video-preview': -1,
    'max-image-preview': 'large',
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-video-preview': -1,
      'max-image-preview': 'large',
    },
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const page = await client.fetch<{ seo?: SanitySeo } | null>(PAGE_SEO_QUERY, {
    slug: SEO_SLUG,
  });

  return buildMetadataFromSanityWithFallbackMetadata(
    page?.seo ?? null,
    metadataFallback,
  );
}

export default function GorzowSeoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
