import Link from 'next/link';
import { SiteHeader } from '@/components/SiteHeader';
import { StructuredData } from '@/components/StructuredData';
import { DEFAULT_OG_IMAGE, DEFAULT_TWITTER_IMAGE, FORECAST_REFRESH_HOURS, METHODOLOGY_PILLARS, SITE_NAME, SITE_URL } from '@/lib/site';

export const metadata = {
  title: 'Snow Day Calculator Methodology',
  description: 'Learn how Winter Day Calculator turns snowfall, temperature, and wind forecasts into a practical school-closing risk estimate.',
  alternates: {
    canonical: '/methodology',
  },
  openGraph: {
    title: `Snow Day Calculator Methodology | ${SITE_NAME}`,
    description: 'See the forecast signals and guardrails behind the snow day score.',
    url: `${SITE_URL}/methodology`,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Snow Day Calculator Methodology | ${SITE_NAME}`,
    description: 'See the forecast signals and guardrails behind the snow day score.',
    images: [DEFAULT_TWITTER_IMAGE],
  },
};

const methodologySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: 'Snow Day Calculator Methodology',
      url: `${SITE_URL}/methodology`,
      description: 'How Winter Day Calculator estimates closure risk from forecast conditions.'
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
          name: 'Methodology',
          item: `${SITE_URL}/methodology`
        }
      ]
    }
  ]
};

export default function MethodologyPage() {
  return (
    <>
      <StructuredData data={methodologySchema} />
      <SiteHeader />

      <main className="main-content content-page">
        <div className="page-intro glass-panel">
          <p className="eyebrow">Methodology</p>
          <h1>How Winter Day Calculator estimates snow day risk.</h1>
          <p>
            The goal is simple: turn a messy weather forecast into a useful planning signal for parents, students, and school staff.
            The score is forecast-based, refreshes about every {FORECAST_REFRESH_HOURS} hour, and is designed to explain the next school-morning setup instead of presenting a mystery percentage.
          </p>
        </div>

        <section className="content-section">
          <div className="section-heading">
            <p className="eyebrow">Core inputs</p>
            <h2>The three forecast signals behind the score.</h2>
          </div>
          <div className="insight-grid">
            {METHODOLOGY_PILLARS.map((pillar) => (
              <article key={pillar.title} className="section-card">
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <div className="section-heading">
            <p className="eyebrow">Interpretation</p>
            <h2>What the percentage actually means.</h2>
          </div>
          <div className="support-grid">
            <article className="section-card">
              <h3>Low risk</h3>
              <p>
                The forecast currently shows limited disruption signals. Light snow or manageable temperatures may still create local issues, but the model does not see a strong closure setup.
              </p>
            </article>
            <article className="section-card">
              <h3>Moderate risk</h3>
              <p>
                One or more signals are becoming meaningful. This is the range where fresh forecast updates matter most because the probability can move quickly.
              </p>
            </article>
            <article className="section-card">
              <h3>High risk</h3>
              <p>
                Heavy snow, dangerous cold, strong wind, or a combination of all three is creating a closure-friendly setup. Even then, local district policy still decides the final call.
              </p>
            </article>
          </div>
        </section>

        <section className="content-section">
          <div className="section-heading">
            <p className="eyebrow">Limits</p>
            <h2>What this model does not know.</h2>
          </div>
          <div className="faq-list">
            <article className="section-card faq-card">
              <h3>District policy and leadership decisions</h3>
              <p>
                School systems weigh staffing, transportation, local road treatment, and operational policy. Those decisions cannot be modeled perfectly from forecast data alone.
              </p>
            </article>
            <article className="section-card faq-card">
              <h3>Hyper-local neighborhood differences</h3>
              <p>
                A regional forecast can still miss street-level icing, lake-effect band placement, and neighborhood snow totals. That is why each page explains the forecast drivers and not just a percentage.
              </p>
            </article>
            <article className="section-card faq-card">
              <h3>Official announcements</h3>
              <p>
                Winter Day Calculator is not an official district or employer alert system. Always confirm with the organization responsible for the final closure decision.
              </p>
            </article>
          </div>
        </section>

        <section className="content-section">
          <div className="inline-actions">
            <Link href="/faq" className="text-link">Read the snow day FAQ</Link>
            <Link href="/guides/how-schools-decide-snow-days" className="text-link">See how districts decide</Link>
            <Link href="/guides/snow-vs-ice-school-closures" className="text-link">Compare snow vs ice risk</Link>
            <Link href="/" className="text-link">Run the calculator</Link>
          </div>
        </section>
      </main>
    </>
  );
}
