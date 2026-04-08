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
    ];
  },
};

export default nextConfig;
