import Link from 'next/link';
import { SiteHeader } from '@/components/SiteHeader';
import { StructuredData } from '@/components/StructuredData';
import { DEFAULT_OG_IMAGE, DEFAULT_TWITTER_IMAGE, SITE_NAME, SITE_URL } from '@/lib/site';

const comparisonCards = [
  {
    title: 'Why ice can be worse than snow',
    details: 'A thinner layer of freezing rain or overnight refreeze can create more dangerous travel than a modest snowfall because roads look manageable until drivers and buses start slipping.',
  },
  {
    title: 'Why fresh snow still matters',
    details: 'Snow becomes more disruptive when bands are still active during the school-morning window, when visibility drops, or when plows cannot keep pace before buses roll.',
  },
  {
    title: 'What families should watch on the forecast',
    details: 'Look for temperature drops near freezing, wind-driven visibility, and whether precipitation changes from rain to snow or snow to sleet overnight.',
  },
];

export const metadata = {
  title: 'Snow vs Ice School Closures',
  description: 'See why slick roads, freezing rain, and overnight refreeze can close schools faster than raw snowfall totals.',
  alternates: {
    canonical: '/guides/snow-vs-ice-school-closures',
  },
  openGraph: {
    title: `Snow vs Ice School Closures | ${SITE_NAME}`,
    description: 'A practical guide to why ice can trigger school closures faster than snow.',
    url: `${SITE_URL}/guides/snow-vs-ice-school-closures`,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Snow vs Ice School Closures | ${SITE_NAME}`,
    description: 'A practical guide to why ice can trigger school closures faster than snow.',
    images: [DEFAULT_TWITTER_IMAGE],
  },
};

const guideSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Snow vs Ice School Closures',
      description: 'A practical guide to why ice can trigger school closures faster than snow.',
      url: `${SITE_URL}/guides/snow-vs-ice-school-closures`,
      author: {
        '@type': 'Organization',
        name: SITE_NAME,
      },
      publisher: {
        '@type': 'Organization',
        name: SITE_NAME,
      },
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
          name: 'Snow vs Ice School Closures',
          item: `${SITE_URL}/guides/snow-vs-ice-school-closures`,
        },
      ],
    },
  ],
};

export default function SnowVsIceSchoolClosuresPage() {
  return (
    <>
      <StructuredData data={guideSchema} />
      <SiteHeader />

      <main className="main-content content-page">
        <div className="page-intro glass-panel">
          <p className="eyebrow">Weather guide</p>
          <h1>Snow vs ice: what actually closes schools faster.</h1>
          <p>
            People often assume bigger snowfall automatically means bigger closure risk. In reality, icy roads, freezing rain, and overnight refreeze can produce more dangerous travel with less visible precipitation.
          </p>
        </div>

        <section className="content-section">
          <div className="section-heading">
            <p className="eyebrow">Quick comparison</p>
            <h2>Why districts often fear slick roads more than headline snow totals.</h2>
          </div>
          <div className="support-grid">
            {comparisonCards.map((card) => (
              <article key={card.title} className="section-card">
                <h2>{card.title}</h2>
                <p>{card.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <div className="section-heading">
            <p className="eyebrow">Practical takeaway</p>
            <h2>How to read your forecast with ice risk in mind.</h2>
          </div>
          <div className="faq-list">
            <article className="section-card faq-card">
              <h3>Watch for rain-to-snow and snow-to-sleet flips</h3>
              <p>
                Mixed precipitation can create a deceptively messy setup where totals stay modest but surfaces become more dangerous before morning traffic starts.
              </p>
            </article>
            <article className="section-card faq-card">
              <h3>Cold after wet roads is a major warning sign</h3>
              <p>
                If temperatures crash after evening moisture, districts may worry about black ice even when snowfall itself looks limited.
              </p>
            </article>
            <article className="section-card faq-card">
              <h3>Use city pages for local context</h3>
              <p>
                Some places are more sensitive to bridge icing, hills, transit disruptions, or open-road drifting, which is why the local forecast page matters.
              </p>
            </article>
          </div>
        </section>

        <section className="content-section">
          <div className="inline-actions">
            <Link href="/guides/how-schools-decide-snow-days" className="text-link">See how schools decide</Link>
            <Link href="/guides/preparing-for-snow-days" className="text-link">Read the family guide</Link>
            <Link href="/" className="text-link">Check your city</Link>
          </div>
        </section>
      </main>
    </>
  );
}
