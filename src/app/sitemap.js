import { POPULAR_LOCATIONS, SITE_URL, STATE_GUIDES, SUPPORT_PAGES } from '@/lib/site';

export default function sitemap() {
  const lastModified = new Date();
  const staticPages = [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: 'daily',
      priority: 1,
    },
    ...SUPPORT_PAGES.map((page) => ({
      url: `${SITE_URL}${page.href}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    })),
    ...STATE_GUIDES.map((guide) => ({
      url: `${SITE_URL}/states/${guide.slug}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.7,
    })),
    ...POPULAR_LOCATIONS.map((location) => ({
      url: `${SITE_URL}/prediction/${location.slug}`,
      lastModified,
      changeFrequency: 'hourly',
      priority: 0.6,
    })),
  ];

  return staticPages;
}
