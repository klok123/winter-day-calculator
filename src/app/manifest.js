import { SITE_DESCRIPTION, SITE_NAME } from '@/lib/site';

export default function manifest() {
  return {
    name: SITE_NAME,
    short_name: 'Winter Day',
    description: SITE_DESCRIPTION,
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0e17',
    theme_color: '#0a0e17',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
