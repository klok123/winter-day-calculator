import Link from 'next/link';
import { SiteHeader } from '@/components/SiteHeader';
import { StructuredData } from '@/components/StructuredData';
import { DEFAULT_OG_IMAGE, DEFAULT_TWITTER_IMAGE, SITE_NAME, SITE_URL } from '@/lib/site';

const earlyMorningChecklist = [
  {
    title: 'Check whether the risky weather is still active before dawn',
    details: 'Snow that is still falling between roughly 4 AM and 6 AM usually matters more than a storm that ended earlier and gave crews time to recover.',
  },
  {
    title: 'Look at temperature trends, not just snowfall totals',
    details: 'A sharp overnight temperature drop can turn wet roads, parking lots, and sidewalks into a bigger problem than the raw snow number suggests.',
  },
  {
    title: 'Read the local page for the travel setup',
    details: 'Bridge icing, hill routes, lake-effect bands, and bus-route visibility all change the story from one city to the next.',
  },
  {
    title: 'Check district alerts once, then stop refreshing',
    details: 'Have the official alert source ready, but avoid doom-scrolling. A calm check of your city page and district notifications is usually enough.',
  },
];

export const metadata = {
  title: 'What Parents Should Check Before 6 AM',
  description: 'A practical before-6-AM checklist for families watching snow day risk, road conditions, and district updates.',
  alternates: {
    canonical: '/guides/what-parents-should-check-before-6-am',
  },
  openGraph: {
    title: `What Parents Should Check Before 6 AM | ${SITE_NAME}`,
    description: 'A calm early-morning checklist for families watching snow day risk.',
    url: `${SITE_URL}/guides/what-parents-should-check-before-6-am`,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: `What Parents Should Check Before 6 AM | ${SITE_NAME}`,
    description: 'A calm early-morning checklist for families watching snow day risk.',
    images: [DEFAULT_TWITTER_IMAGE],
  },
};

const guideSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'What Parents Should Check Before 6 AM',
      description: 'A practical before-6-AM checklist for families watching snow day risk, road conditions, and district updates.',
      url: `${SITE_URL}/guides/what-parents-should-check-before-6-am`,
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
          name: 'What Parents Should Check Before 6 AM',
          item: `${SITE_URL}/guides/what-parents-should-check-before-6-am`,
        },
      ],
    },
  ],
};

export default function WhatParentsShouldCheckBeforeSixPage() {
  return (
    <>
      <StructuredData data={guideSchema} />
      <SiteHeader />

      <main className="main-content content-page">
        <div className="page-intro glass-panel">
          <p className="eyebrow">Morning checklist</p>
          <h1>What parents should actually check before 6 AM on a possible snow day.</h1>
          <p>
            The goal is not to stare at your phone all morning. It is to quickly figure out whether the risky weather is still active, whether roads are likely to be worse than they look, and whether your district is close to posting the final decision.
          </p>
        </div>

        <section className="content-section">
          <div className="section-heading">
            <p className="eyebrow">Before-6-AM checklist</p>
            <h2>Four things worth checking before the school day starts moving.</h2>
          </div>
          <div className="support-grid">
            {earlyMorningChecklist.map((item) => (
              <article key={item.title} className="section-card">
                <h2>{item.title}</h2>
                <p>{item.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <div className="section-heading">
            <p className="eyebrow">Calmer decisions</p>
            <h2>How to use the estimate without turning it into a stress machine.</h2>
          </div>
          <div className="faq-list">
            <article className="section-card faq-card">
              <h3>Use one local page and one official source</h3>
              <p>
                That combination is usually enough. The local page explains the risk setup, and the district alert confirms the final decision once it is posted.
              </p>
            </article>
            <article className="section-card faq-card">
              <h3>Watch for icy travel, not just dramatic snow totals</h3>
              <p>
                Many difficult school mornings come from refreeze, freezing drizzle, or slick untreated roads, even when snowfall looks modest.
              </p>
            </article>
            <article className="section-card faq-card">
              <h3>Decide your backup plan before the final alert</h3>
              <p>
                If you already know what happens in a delay, closure, or normal opening, the morning becomes much easier to handle.
              </p>
            </article>
          </div>
        </section>

        <section className="content-section">
          <div className="inline-actions">
            <Link href="/guides/preparing-for-snow-days" className="text-link">Read the family guide</Link>
            <Link href="/guides/delay-vs-closure" className="text-link">Compare delay vs closure</Link>
            <Link href="/" className="text-link">Check your city</Link>
          </div>
        </section>
      </main>
    </>
  );
}
