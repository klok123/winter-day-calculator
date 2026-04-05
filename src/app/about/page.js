import Link from 'next/link';
import { SiteHeader } from '@/components/SiteHeader';
import { StructuredData } from '@/components/StructuredData';
import { DEFAULT_OG_IMAGE, DEFAULT_TWITTER_IMAGE, SITE_NAME, SITE_URL } from '@/lib/site';

export const metadata = {
  title: 'About Winter Day Calculator',
  description: 'Learn what Winter Day Calculator is, who it serves, and why it focuses on transparent snow day forecasting instead of black-box claims.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: `About Winter Day Calculator | ${SITE_NAME}`,
    description: 'What the tool does, who it serves, and why the forecast explanation matters.',
    url: `${SITE_URL}/about`,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: `About Winter Day Calculator | ${SITE_NAME}`,
    description: 'What the tool does, who it serves, and why the forecast explanation matters.',
    images: [DEFAULT_TWITTER_IMAGE],
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      name: 'About Winter Day Calculator',
      url: `${SITE_URL}/about`,
      description: 'About the snow day calculator and the editorial principles behind it.'
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: 'Home',
          item: SITE_URL
        },
        {
          "@type": "ListItem",
          position: 2,
          name: 'About',
          item: `${SITE_URL}/about`
        }
      ]
    }
  ]
};

export default function AboutPage() {
  return (
    <>
      <StructuredData data={aboutSchema} />
      <SiteHeader />

      <main className="main-content content-page">
        <div className="page-intro glass-panel">
          <p className="eyebrow">About</p>
          <h1>Why Winter Day Calculator exists.</h1>
          <p>
            Winter Day Calculator is built for people who want a clearer read on winter disruption risk without having to trust a mystery number. The goal is to pair useful forecast guidance with plain-language explanations and better local context.
          </p>
        </div>

        <section className="content-section">
          <div className="support-grid">
            <article className="section-card">
              <h2>Built for real school-morning decisions</h2>
              <p>
                The product is designed around the moment people actually care about most: whether the next school morning is becoming difficult enough to change plans.
              </p>
            </article>
            <article className="section-card">
              <h2>Focused on transparency</h2>
              <p>
                Rather than positioning every result as magic certainty, the site explains the forecast signals behind the estimate and clearly says it is not an official district announcement.
              </p>
            </article>
            <article className="section-card">
              <h2>Local coverage matters</h2>
              <p>
                State guides, city pages, and support content help the site explain why Buffalo, Chicago, Toronto, and Worcester can behave differently during the same kind of storm.
              </p>
            </article>
          </div>
        </section>

        <section className="content-section">
          <div className="inline-actions">
            <Link href="/" className="text-link">Check your city</Link>
            <Link href="/faq" className="text-link">Read the FAQ</Link>
          </div>
        </section>
      </main>
    </>
  );
}
