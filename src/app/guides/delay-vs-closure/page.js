import Link from 'next/link';
import { SiteHeader } from '@/components/SiteHeader';
import { StructuredData } from '@/components/StructuredData';
import { DEFAULT_OG_IMAGE, DEFAULT_TWITTER_IMAGE, SITE_NAME, SITE_URL } from '@/lib/site';

const decisionComparisons = [
  {
    title: 'Why districts choose a delay',
    details: 'A delay is often used when crews just need more time. The weather may be disruptive, but roads, parking lots, and sidewalks could improve enough after sunrise to open safely.',
  },
  {
    title: 'Why districts close completely',
    details: 'A full closure is more likely when the forecast suggests roads will remain dangerous through the morning, visibility stays poor, or extreme cold makes transportation unsafe.',
  },
  {
    title: 'Why nearby districts can disagree',
    details: 'Bus-route length, hills, bridge icing, staffing, and local treatment timing can push one district toward a delay and another toward a closure in the same storm.',
  },
  {
    title: 'Why timing matters more than totals',
    details: 'A moderate burst that peaks during the school commute can support a closure or delay more strongly than a bigger storm that ends early enough for recovery crews to catch up.',
  },
];

export const metadata = {
  title: 'Delay vs Closure',
  description: 'Learn why schools sometimes delay the start instead of canceling completely, and what forecast patterns usually drive each choice.',
  alternates: {
    canonical: '/guides/delay-vs-closure',
  },
  openGraph: {
    title: `Delay vs Closure | ${SITE_NAME}`,
    description: 'A practical guide to why districts choose a delay versus a full closure.',
    url: `${SITE_URL}/guides/delay-vs-closure`,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Delay vs Closure | ${SITE_NAME}`,
    description: 'A practical guide to why districts choose a delay versus a full closure.',
    images: [DEFAULT_TWITTER_IMAGE],
  },
};

const guideSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Delay vs Closure',
      description: 'Learn why schools sometimes delay the start instead of canceling completely, and what forecast patterns usually drive each choice.',
      url: `${SITE_URL}/guides/delay-vs-closure`,
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
          name: 'Delay vs Closure',
          item: `${SITE_URL}/guides/delay-vs-closure`,
        },
      ],
    },
  ],
};

export default function DelayVsClosurePage() {
  return (
    <>
      <StructuredData data={guideSchema} />
      <SiteHeader />

      <main className="main-content content-page">
        <div className="page-intro glass-panel">
          <p className="eyebrow">Decision guide</p>
          <h1>Delay vs closure: why schools sometimes open late instead of canceling.</h1>
          <p>
            Families often see a rough forecast and assume a full snow day is coming. In practice, districts may lean toward a delay when conditions look bad early but recoverable after sunrise, while a full closure is more likely when the whole morning window stays unsafe.
          </p>
        </div>

        <section className="content-section">
          <div className="section-heading">
            <p className="eyebrow">What changes the call</p>
            <h2>The practical difference between a delayed opening and a full cancellation.</h2>
          </div>
          <div className="support-grid">
            {decisionComparisons.map((item) => (
              <article key={item.title} className="section-card">
                <h2>{item.title}</h2>
                <p>{item.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <div className="section-heading">
            <p className="eyebrow">How to use it</p>
            <h2>Read the estimate as a timing signal, not a guarantee.</h2>
          </div>
          <div className="faq-list">
            <article className="section-card faq-card">
              <h3>A moderate risk can still become a delay</h3>
              <p>
                If the most dangerous conditions look concentrated right around daybreak, a district may buy time with a delayed opening instead of closing completely.
              </p>
            </article>
            <article className="section-card faq-card">
              <h3>High risk does not force the same outcome everywhere</h3>
              <p>
                One district may delay, another may close, and a third may open on time, depending on how quickly roads improve and how local operations are set up.
              </p>
            </article>
            <article className="section-card faq-card">
              <h3>Use local pages to understand your own pattern</h3>
              <p>
                City pages help you see whether your area usually reacts more to icy roads, lake-effect snow, extreme cold, or commuter timing.
              </p>
            </article>
          </div>
        </section>

        <section className="content-section">
          <div className="inline-actions">
            <Link href="/guides/how-schools-decide-snow-days" className="text-link">See how districts decide</Link>
            <Link href="/guides/what-parents-should-check-before-6-am" className="text-link">Use the 6 AM checklist</Link>
            <Link href="/" className="text-link">Check your city</Link>
          </div>
        </section>
      </main>
    </>
  );
}
