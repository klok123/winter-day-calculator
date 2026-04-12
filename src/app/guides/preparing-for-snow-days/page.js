import Link from 'next/link';
import { SiteHeader } from '@/components/SiteHeader';
import { StructuredData } from '@/components/StructuredData';
import { DEFAULT_OG_IMAGE, DEFAULT_TWITTER_IMAGE, SITE_NAME, SITE_URL } from '@/lib/site';

const guideSections = [
  {
    title: 'What to check the night before',
    points: [
      'Watch the forecast window, expected snow through morning, and the coldest hour on the result page.',
      'Keep school district alerts turned on so you can compare the official decision with the forecast estimate.',
      'Make sure phones are charged and any early-morning transportation changes are easy to communicate.',
    ],
  },
  {
    title: 'How families can prepare for a possible snow day',
    points: [
      'Set out winter gear, backup chargers, and any work-from-home or at-home learning essentials before bed.',
      'Build a simple morning backup plan for childcare, rides, breakfast, and a delayed start.',
      'If your area is prone to icy side streets or rural bus routes, give yourself extra time even when the estimate is moderate.',
    ],
  },
  {
    title: 'What matters most on snow day mornings',
    points: [
      'Fresh snow during the 4 AM to 10 AM window usually matters more than yesterday afternoon conditions.',
      'Very cold temperatures and gusty wind can keep roads slick and visibility poor even with lighter snowfall.',
      'Local road treatment and district policy still decide the final outcome, so use the score as guidance rather than certainty.',
    ],
  },
];

export const metadata = {
  title: 'Preparing for Snow Days',
  description: 'A practical family guide for checking the forecast, planning the next school morning, and getting ready for a possible snow day.',
  alternates: {
    canonical: '/guides/preparing-for-snow-days',
  },
  openGraph: {
    title: `Preparing for Snow Days | ${SITE_NAME}`,
    description: 'A practical family guide for checking the forecast and getting ready for a possible snow day.',
    url: `${SITE_URL}/guides/preparing-for-snow-days`,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Preparing for Snow Days | ${SITE_NAME}`,
    description: 'A practical family guide for checking the forecast and getting ready for a possible snow day.',
    images: [DEFAULT_TWITTER_IMAGE],
  },
};

const guideSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Preparing for Snow Days',
      description: 'A practical family guide for checking the forecast and planning the next school morning.',
      url: `${SITE_URL}/guides/preparing-for-snow-days`,
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
          name: 'Preparing for Snow Days',
          item: `${SITE_URL}/guides/preparing-for-snow-days`,
        },
      ],
    },
  ],
};

export default function PreparingForSnowDaysPage() {
  return (
    <>
      <StructuredData data={guideSchema} />
      <SiteHeader />

      <main className="main-content content-page">
        <div className="page-intro glass-panel">
          <p className="eyebrow">Family guide</p>
          <h1>Preparing for snow days without overreacting to the forecast.</h1>
          <p>
            The best use of a snow day estimate is simple: get a clearer read on the next school morning, make a backup plan early, and then confirm with official district communication when the final call gets closer.
          </p>
        </div>

        <section className="content-section">
          <div className="section-heading">
            <p className="eyebrow">Practical checklist</p>
            <h2>How to use the forecast like a calm planning tool.</h2>
          </div>
          <div className="support-grid">
            {guideSections.map((section) => (
              <article key={section.title} className="section-card">
                <h2>{section.title}</h2>
                {section.points.map((point) => (
                  <p key={point}>{point}</p>
                ))}
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <div className="section-heading">
            <p className="eyebrow">Best habits</p>
            <h2>What usually helps more than checking the percentage every five minutes.</h2>
          </div>
          <div className="faq-list">
            <article className="section-card faq-card">
              <h3>Check the supporting forecast drivers</h3>
              <p>
                Snow timing, freezing temperatures, and morning wind often tell a stronger story than the headline number by itself.
              </p>
            </article>
            <article className="section-card faq-card">
              <h3>Keep one simple backup plan</h3>
              <p>
                A quick plan for school delays, childcare, commuting, and remote work usually removes most of the stress even before the district posts.
              </p>
            </article>
            <article className="section-card faq-card">
              <h3>Always wait for the official decision</h3>
              <p>
                Winter Day Calculator can help you prepare, but it is still not an official closure or delay announcement.
              </p>
            </article>
          </div>
        </section>

        <section className="content-section">
          <div className="inline-actions">
            <Link href="/guides/what-parents-should-check-before-6-am" className="text-link">Use the before-6-AM checklist</Link>
            <Link href="/guides/delay-vs-closure" className="text-link">Understand delay vs closure</Link>
            <Link href="/" className="text-link">Check your city</Link>
            <Link href="/faq" className="text-link">Read the FAQ</Link>
            <Link href="/methodology" className="text-link">See the methodology</Link>
          </div>
        </section>
      </main>
    </>
  );
}
