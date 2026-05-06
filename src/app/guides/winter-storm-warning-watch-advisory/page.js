import Link from 'next/link';
import { SiteHeader } from '@/components/SiteHeader';
import { StructuredData } from '@/components/StructuredData';
import { DEFAULT_OG_IMAGE, DEFAULT_TWITTER_IMAGE, SITE_NAME, SITE_URL } from '@/lib/site';

const alertTypes = [
  {
    title: 'Winter storm watch',
    details: 'A watch means winter weather could become disruptive, but confidence or timing may still be developing. For school planning, it is usually an early signal to watch the overnight forecast closely.',
  },
  {
    title: 'Winter storm warning',
    details: 'A warning means impactful winter weather is expected or already happening. When a warning overlaps with the school-morning window, closure or delay risk usually becomes more serious.',
  },
  {
    title: 'Winter weather advisory',
    details: 'An advisory often points to lower-end snow, ice, or mixed travel issues. It may still matter for schools when conditions line up with bus routes, refreeze, or early commuting.',
  },
  {
    title: 'Wind chill warning or advisory',
    details: 'Dangerous cold can influence school decisions even when fresh snow is limited. Districts may weigh how long students wait outside and how safely buses can run.',
  },
];

export const metadata = {
  title: 'Winter Storm Warning vs Watch vs Advisory',
  description: 'Learn how winter storm watches, warnings, advisories, and wind chill alerts can affect school closing and delay risk.',
  alternates: {
    canonical: '/guides/winter-storm-warning-watch-advisory',
  },
  openGraph: {
    title: `Winter Storm Warning vs Watch vs Advisory | ${SITE_NAME}`,
    description: 'A practical guide to winter weather alerts and what they can mean for snow day planning.',
    url: `${SITE_URL}/guides/winter-storm-warning-watch-advisory`,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Winter Storm Warning vs Watch vs Advisory | ${SITE_NAME}`,
    description: 'A practical guide to winter weather alerts and what they can mean for snow day planning.',
    images: [DEFAULT_TWITTER_IMAGE],
  },
};

const guideSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Winter Storm Warning vs Watch vs Advisory',
      description: 'Learn how winter storm watches, warnings, advisories, and wind chill alerts can affect school closing and delay risk.',
      url: `${SITE_URL}/guides/winter-storm-warning-watch-advisory`,
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
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does a winter storm warning guarantee a snow day?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. A warning raises concern because impactful winter weather is expected, but districts still weigh timing, road treatment, bus routes, staffing, and local conditions before closing.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can a winter weather advisory still close school?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. An advisory can still matter when snow, ice, or refreeze hits during the school commute, especially on longer bus routes or untreated roads.',
          },
        },
      ],
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
          name: 'Winter Storm Alerts',
          item: `${SITE_URL}/guides/winter-storm-warning-watch-advisory`,
        },
      ],
    },
  ],
};

export default function WinterStormAlertsPage() {
  return (
    <>
      <StructuredData data={guideSchema} />
      <SiteHeader />

      <main className="main-content content-page">
        <div className="page-intro glass-panel">
          <p className="eyebrow">Weather alert guide</p>
          <h1>Winter storm warning vs watch vs advisory: what each one can mean for school closings.</h1>
          <p>
            Weather alerts are useful, but they are not the same as school announcements. The key is understanding what each alert says about confidence, timing, and travel risk during the school-morning window.
          </p>
        </div>

        <section className="content-section">
          <div className="section-heading">
            <p className="eyebrow">Alert meanings</p>
            <h2>The school-closing signal depends on timing and local travel impact.</h2>
          </div>
          <div className="support-grid">
            {alertTypes.map((alert) => (
              <article key={alert.title} className="section-card">
                <h2>{alert.title}</h2>
                <p>{alert.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <div className="section-heading">
            <p className="eyebrow">How to read alerts</p>
            <h2>Use alerts with the forecast score, not instead of it.</h2>
          </div>
          <div className="faq-list">
            <article className="section-card faq-card">
              <h3>Morning timing matters most</h3>
              <p>
                A warning that peaks overnight or during the first bus routes can carry more school risk than a larger storm that arrives after dismissal.
              </p>
            </article>
            <article className="section-card faq-card">
              <h3>Ice and cold can outweigh snowfall totals</h3>
              <p>
                Some alerts focus on freezing rain, refreeze, or dangerous cold. Those hazards can influence district decisions even when snow totals look modest.
              </p>
            </article>
            <article className="section-card faq-card">
              <h3>Local districts still make the final call</h3>
              <p>
                Alerts help frame the risk, but school leaders still consider bus operations, road treatment, staffing, sidewalks, and official local guidance.
              </p>
            </article>
          </div>
        </section>

        <section className="content-section">
          <div className="inline-actions">
            <Link href="/guides/how-schools-decide-snow-days" className="text-link">See how schools decide</Link>
            <Link href="/guides/snow-vs-ice-school-closures" className="text-link">Compare snow and ice risk</Link>
            <Link href="/" className="text-link">Check your city forecast</Link>
          </div>
        </section>
      </main>
    </>
  );
}
