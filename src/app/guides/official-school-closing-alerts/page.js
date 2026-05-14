import Link from 'next/link';
import { SiteHeader } from '@/components/SiteHeader';
import { StructuredData } from '@/components/StructuredData';
import { DEFAULT_OG_IMAGE, DEFAULT_TWITTER_IMAGE, SITE_NAME, SITE_URL } from '@/lib/site';

const alertSources = [
  {
    title: 'School district website',
    details: 'The district site is usually the clearest final source for a closure, delay, remote-learning day, or early dismissal notice.',
  },
  {
    title: 'Official district text or email alert',
    details: 'Many districts send direct alerts through parent notification systems. These are more reliable than social screenshots or reposted rumors.',
  },
  {
    title: 'Verified school social accounts',
    details: 'District Facebook, X, or app posts can be useful when they match the official website or notification system.',
  },
  {
    title: 'Local news and transportation alerts',
    details: 'News tickers and local road reports can help confirm broader travel risk, especially during regional storms.',
  },
];

export const metadata = {
  title: 'Official School Closing Alerts',
  description: 'Learn where families should confirm school delays and closures after checking snow day forecast risk.',
  alternates: {
    canonical: '/guides/official-school-closing-alerts',
  },
  openGraph: {
    title: `Official School Closing Alerts | ${SITE_NAME}`,
    description: 'Where to confirm school delays and closures after checking forecast risk.',
    url: `${SITE_URL}/guides/official-school-closing-alerts`,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Official School Closing Alerts | ${SITE_NAME}`,
    description: 'Where to confirm school delays and closures after checking forecast risk.',
    images: [DEFAULT_TWITTER_IMAGE],
  },
};

const guideSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Official School Closing Alerts',
      description: 'Learn where families should confirm school delays and closures after checking snow day forecast risk.',
      url: `${SITE_URL}/guides/official-school-closing-alerts`,
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
          name: 'Is Winter Day Calculator an official school closing source?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Winter Day Calculator is a forecast-based planning tool. Families should always confirm actual school delays and closures with their district, employer, or official alert system.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where should parents check for the final school closing decision?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The safest sources are the school district website, official text or email alerts, district app notifications, and verified district social accounts.',
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
          name: 'Official School Closing Alerts',
          item: `${SITE_URL}/guides/official-school-closing-alerts`,
        },
      ],
    },
  ],
};

export default function OfficialSchoolClosingAlertsPage() {
  return (
    <>
      <StructuredData data={guideSchema} />
      <SiteHeader />

      <main className="main-content content-page">
        <div className="page-intro glass-panel">
          <p className="eyebrow">Official alert guide</p>
          <h1>Where to confirm official school closing alerts after checking the forecast.</h1>
          <p>
            A snow day estimate is useful for planning, but the final decision always belongs to the school district or local authority. Use the forecast score to understand risk, then confirm the actual announcement through official channels.
          </p>
        </div>

        <section className="content-section">
          <div className="section-heading">
            <p className="eyebrow">Best sources</p>
            <h2>Check the places that can actually confirm a closure or delay.</h2>
          </div>
          <div className="support-grid">
            {alertSources.map((source) => (
              <article key={source.title} className="section-card">
                <h2>{source.title}</h2>
                <p>{source.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <div className="section-heading">
            <p className="eyebrow">Practical checks</p>
            <h2>Use a short confirmation routine on high-risk mornings.</h2>
          </div>
          <div className="faq-list">
            <article className="section-card faq-card">
              <h3>Compare the forecast score with district timing</h3>
              <p>
                If the risk rises overnight, check whether your district usually posts decisions before buses leave, before staff arrival, or closer to sunrise.
              </p>
            </article>
            <article className="section-card faq-card">
              <h3>Avoid relying on reposted screenshots</h3>
              <p>
                Shared screenshots can be outdated or from another district. If a closure post is circulating, open the district source directly before changing plans.
              </p>
            </article>
            <article className="section-card faq-card">
              <h3>Watch for delay updates after the first notice</h3>
              <p>
                Some districts start with a delay and later close if roads do not improve. Re-check official channels when conditions keep worsening.
              </p>
            </article>
          </div>
        </section>

        <section className="content-section">
          <div className="inline-actions">
            <Link href="/guides/delay-vs-closure" className="text-link">Understand delay vs closure</Link>
            <Link href="/guides/winter-storm-warning-watch-advisory" className="text-link">Read winter alert meanings</Link>
            <Link href="/" className="text-link">Check your local risk</Link>
          </div>
        </section>
      </main>
    </>
  );
}
