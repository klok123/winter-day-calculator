import Link from 'next/link';
import { SiteHeader } from '@/components/SiteHeader';
import { StructuredData } from '@/components/StructuredData';
import { DEFAULT_OG_IMAGE, DEFAULT_TWITTER_IMAGE, SITE_NAME, SITE_URL } from '@/lib/site';

const decisionFactors = [
  {
    title: 'Road conditions before buses roll',
    details: 'Districts care less about total snowfall on a weather app and more about whether roads, parking lots, and neighborhood streets are still slick when drivers and school buses leave early in the morning.',
  },
  {
    title: 'Snow timing during the school-morning window',
    details: 'Fresh snow falling between roughly 4 AM and 10 AM is often more disruptive than snow that ended the previous afternoon because crews have less time to treat routes and clear lots.',
  },
  {
    title: 'Temperature and refreeze risk',
    details: 'A smaller storm can still cause a delay or closure if temperatures crash overnight and untreated roads or sidewalks refreeze before students arrive.',
  },
  {
    title: 'Wind, visibility, and rural route safety',
    details: 'Wind can reduce visibility, drift roads back over, and create very different conditions on open roads or long bus routes than in denser city centers.',
  },
  {
    title: 'Local policy and operational judgment',
    details: 'Every district balances staffing, transportation, building readiness, and local road updates differently, which is why two nearby cities can make different calls in the same storm.',
  },
];

export const metadata = {
  title: 'How Schools Decide Snow Days',
  description: 'Learn the practical factors districts weigh when deciding on snow days, delays, and school closures.',
  alternates: {
    canonical: '/guides/how-schools-decide-snow-days',
  },
  openGraph: {
    title: `How Schools Decide Snow Days | ${SITE_NAME}`,
    description: 'A plain-language guide to the real factors behind school snow day decisions.',
    url: `${SITE_URL}/guides/how-schools-decide-snow-days`,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: `How Schools Decide Snow Days | ${SITE_NAME}`,
    description: 'A plain-language guide to the real factors behind school snow day decisions.',
    images: [DEFAULT_TWITTER_IMAGE],
  },
};

const guideSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'How Schools Decide Snow Days',
      description: 'A plain-language guide to the real factors behind school snow day decisions.',
      url: `${SITE_URL}/guides/how-schools-decide-snow-days`,
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
          name: 'How Schools Decide Snow Days',
          item: `${SITE_URL}/guides/how-schools-decide-snow-days`,
        },
      ],
    },
  ],
};

export default function HowSchoolsDecideSnowDaysPage() {
  return (
    <>
      <StructuredData data={guideSchema} />
      <SiteHeader />

      <main className="main-content content-page">
        <div className="page-intro glass-panel">
          <p className="eyebrow">Decision guide</p>
          <h1>How schools really decide snow days, delays, and closures.</h1>
          <p>
            Families often search for a single magic number, but districts usually make weather decisions by weighing several practical questions at once: road safety, timing, cold, visibility, staffing, and the local transportation picture.
          </p>
        </div>

        <section className="content-section">
          <div className="section-heading">
            <p className="eyebrow">Decision factors</p>
            <h2>The five things that matter most before the final morning call.</h2>
          </div>
          <div className="support-grid">
            {decisionFactors.map((factor) => (
              <article key={factor.title} className="section-card">
                <h2>{factor.title}</h2>
                <p>{factor.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <div className="section-heading">
            <p className="eyebrow">What to do with that information</p>
            <h2>Use the estimate as an early signal, then compare it with the local decision environment.</h2>
          </div>
          <div className="faq-list">
            <article className="section-card faq-card">
              <h3>Watch the timing, not just the total</h3>
              <p>
                A moderate overnight burst that hits right before morning routes can be more disruptive than a larger storm that ends early enough for crews to catch up.
              </p>
            </article>
            <article className="section-card faq-card">
              <h3>Check your city page and state guide together</h3>
              <p>
                The city page gives the local estimate, while the state guide explains the broader setup that can make neighboring districts behave differently.
              </p>
            </article>
            <article className="section-card faq-card">
              <h3>Expect districts to value local operations</h3>
              <p>
                Transportation readiness, staffing, and local road updates can move the final decision even when two areas share the same weather forecast.
              </p>
            </article>
          </div>
        </section>

        <section className="content-section">
          <div className="inline-actions">
            <Link href="/guides/snow-vs-ice-school-closures" className="text-link">Compare snow vs ice closures</Link>
            <Link href="/guides/preparing-for-snow-days" className="text-link">Read the family guide</Link>
            <Link href="/" className="text-link">Check your city</Link>
          </div>
        </section>
      </main>
    </>
  );
}
