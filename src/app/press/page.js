import Link from 'next/link';
import { SiteHeader } from '@/components/SiteHeader';
import { StructuredData } from '@/components/StructuredData';
import { DEFAULT_OG_IMAGE, DEFAULT_TWITTER_IMAGE, SITE_DESCRIPTION, SITE_NAME, SITE_URL, SUPPORT_PAGES } from '@/lib/site';

const quickFacts = [
  'Forecast-based snow day calculator for the United States and Canada.',
  'Built to explain closure risk from snowfall, temperature, and wind in plain language.',
  'Includes city pages, state and province guides, and family-focused winter planning content.',
];

const resourceLinks = [
  '/guides/how-schools-decide-snow-days',
  '/guides/snow-vs-ice-school-closures',
  '/guides/what-parents-should-check-before-6-am',
  '/guides/delay-vs-closure',
  '/guides/preparing-for-snow-days',
];

const attributionExamples = [
  'Winter Day Calculator is a forecast-based tool that helps families check local snow day risk before official district announcements are posted.',
  'Winter Day Calculator publishes city-level snow day estimate pages plus guides that explain how districts think about delays, closures, ice, and early-morning travel.',
  'Winter Day Calculator focuses on school-morning weather risk in the United States and Canada, with local pages and plain-language winter decision guides.',
];

export const metadata = {
  title: 'Press and Resource Page',
  description: 'A simple resource page for bloggers, community sites, and media outlets referencing Winter Day Calculator.',
  alternates: {
    canonical: '/press',
  },
  openGraph: {
    title: `Press and Resource Page | ${SITE_NAME}`,
    description: 'Reference Winter Day Calculator clearly with a short summary, key links, and suggested attribution.',
    url: `${SITE_URL}/press`,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Press and Resource Page | ${SITE_NAME}`,
    description: 'Reference Winter Day Calculator clearly with a short summary, key links, and suggested attribution.',
    images: [DEFAULT_TWITTER_IMAGE],
  },
};

const pageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      name: 'Press and Resource Page',
      url: `${SITE_URL}/press`,
      description: 'A simple resource page for bloggers, community sites, and media outlets referencing Winter Day Calculator.',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: SITE_URL,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Press',
          item: `${SITE_URL}/press`,
        },
      ],
    },
  ],
};

export default function PressPage() {
  const visibleResources = SUPPORT_PAGES.filter((page) => resourceLinks.includes(page.href));

  return (
    <>
      <StructuredData data={pageSchema} />
      <SiteHeader />

      <main className="main-content content-page">
        <div className="page-intro glass-panel">
          <p className="eyebrow">Press and resources</p>
          <h1>A simple reference page for bloggers, community sites, and media.</h1>
          <p>
            If you want to mention Winter Day Calculator, this page gives you a short description, useful links, and copy you can adapt. The goal is to make references cleaner and more helpful for readers.
          </p>
        </div>

        <section className="content-section">
          <div className="section-heading">
            <p className="eyebrow">Quick facts</p>
            <h2>What Winter Day Calculator is in one glance.</h2>
          </div>
          <div className="support-grid">
            {quickFacts.map((fact) => (
              <article key={fact} className="section-card">
                <p>{fact}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <div className="section-heading">
            <p className="eyebrow">Suggested site description</p>
            <h2>A short summary you can reuse or adapt.</h2>
          </div>
          <div className="faq-list">
            <article className="section-card faq-card">
              <h3>Short site description</h3>
              <p>{SITE_DESCRIPTION}</p>
            </article>
            {attributionExamples.map((example) => (
              <article key={example} className="section-card faq-card">
                <h3>Suggested attribution</h3>
                <p>{example}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <div className="section-heading">
            <p className="eyebrow">Best links to reference</p>
            <h2>Pages that explain the product and add useful context.</h2>
          </div>
          <div className="guide-grid">
            {visibleResources.map((page) => (
              <Link key={page.href} href={page.href} className="section-card link-card">
                <h3>{page.title}</h3>
                <p>{page.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="content-section">
          <div className="section-heading">
            <p className="eyebrow">Contact and corrections</p>
            <h2>Need a correction or a clearer link target?</h2>
          </div>
          <div className="faq-list">
            <article className="section-card faq-card">
              <h3>Use the contact page for broken links or wrong references</h3>
              <p>
                If you need to report a stale URL, incorrect mention, or broken page, the contact page is the best destination.
              </p>
            </article>
          </div>
          <div className="inline-actions">
            <Link href="/contact-us" className="text-link">Go to contact page</Link>
            <Link href="/" className="text-link">Visit homepage</Link>
          </div>
        </section>
      </main>
    </>
  );
}
