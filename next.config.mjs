/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/methodology.html',
        destination: '/methodology',
        permanent: true,
      },
      {
        source: '/faq.html',
        destination: '/faq',
        permanent: true,
      },
      {
        source: '/about.html',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/blog/preparing-for-snow-days-guide.html',
        destination: '/guides/preparing-for-snow-days',
        permanent: true,
      },
      {
        source: '/blog/evolution-of-snow-days.html',
        destination: '/guides/preparing-for-snow-days',
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/contact/',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/form/simple-contact-form',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/form/simple-contact-form/',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/author/:slug',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/author/:slug/',
        destination: '/about',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
