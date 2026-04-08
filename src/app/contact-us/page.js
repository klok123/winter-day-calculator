import Link from 'next/link';
import { SiteHeader } from '@/components/SiteHeader';
import { StructuredData } from '@/components/StructuredData';
import { DEFAULT_OG_IMAGE, DEFAULT_TWITTER_IMAGE, SITE_NAME, SITE_URL } from '@/lib/site';

const contactOptions = [
  {
    title: 'Report a broken page',
    body: 'If a city page, guide, or forecast route looks wrong, note the exact URL and what you expected to see before reaching out.',
  },
  {
    title: 'Flag an indexing issue',
    body: 'If Google is showing an outdated page or wrong snippet, it helps to save the Search Console screenshot and the old URL that appears in search.',
  },
  {
    title: 'Share feedback on the forecast',
    body: 'The most useful feedback includes your city, the date, and whether the district eventually delayed, closed, or stayed open.',
  },
];

export const metadata = {
  title: 'Contact Winter Day Calculator',
  description: 'How to report a broken page, indexing issue, or forecast problem on Winter Day Calculator.',
  alternates: {
    canonical: '/contact-us',
  },
  openGraph: {
    title: `Contact Winter Day Calculator | ${SITE_NAME}`,
    description: 'How to report a broken page, indexing issue, or forecast problem.',
    url: `${SITE_URL}/contact-us`,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Contact Winter Day Calculator | ${SITE_NAME}`,
    description: 'How to report a broken page, indexing issue, or forecast problem.',
    images: [DEFAULT_TWITTER_IMAGE],
  },
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      name: 'Contact Winter Day Calculator',
      url: `${SITE_URL}/contact-us`,
      description: 'Support and issue-reporting page for Winter Day Calculator.',
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
          name: 'Contact',
          item: `${SITE_URL}/contact-us`,
        },
      ],
    },
  ],
};

export default function ContactUsPage() {
  return (
    <>
      <StructuredData data={contactSchema} />
      <SiteHeader />

      <main className="main-content content-page">
        <div className="page-intro glass-panel">
          <p className="eyebrow">Contact</p>
          <h1>How to report a site issue quickly.</h1>
          <p>
            This page is here to give Google and users a real destination for support-related URLs. If you spot a broken page, stale search result, or unexpected forecast output, gather the exact page URL first so the issue is easier to trace.
          </p>
        </div>

        <section className="content-section">
          <div className="support-grid">
            {contactOptions.map((option) => (
              <article key={option.title} className="section-card">
                <h2>{option.title}</h2>
                <p>{option.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <div className="faq-list">
            <article className="section-card faq-card">
              <h3>Best next step for search-related issues</h3>
              <p>
                If the issue is happening inside Google Search, keep the Search Console URL, the old page URL, and a screenshot together. That makes cleanup and validation much faster.
              </p>
            </article>
          </div>
        </section>

        <section className="content-section">
          <div className="inline-actions">
            <Link href="/" className="text-link">Go to the homepage</Link>
            <Link href="/faq" className="text-link">Read the FAQ</Link>
            <Link href="/about" className="text-link">About the project</Link>
          </div>
        </section>
      </main>
    </>
  );
}
