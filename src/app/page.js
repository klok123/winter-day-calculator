import Link from 'next/link';
import { SearchPanel } from '@/components/SearchPanel';
import { SiteHeader } from '@/components/SiteHeader';
import { StructuredData } from '@/components/StructuredData';
import { HOME_FAQS, METHODOLOGY_PILLARS, POPULAR_LOCATIONS, SITE_DESCRIPTION, SITE_NAME, SITE_URL, STATE_GUIDES, SUPPORT_PAGES } from '@/lib/site';

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION
    },
    {
      "@type": "WebApplication",
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      applicationCategory: "WeatherApplication",
      operatingSystem: "Any"
    },
    {
      "@type": "FAQPage",
      mainEntity: HOME_FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer
        }
      }))
    }
  ]
};

export default function HomePage() {
  return (
    <>
      <StructuredData data={homeSchema} />
      <SiteHeader />

      <main className="main-content home-content">
        <section className="hero hero-shell">
          <p className="eyebrow">Snow day calculator for the United States and Canada</p>
          <h1>Check local snow day risk before your school district posts an update.</h1>
          <p className="hero-copy">
            Winter Day Calculator is a forecast-based snow day predictor that turns snowfall, temperature, and wind into a clear school-closing risk estimate.
            Search by ZIP, postal code, or city to get a fast read on the next high-risk forecast window.
          </p>
          <SearchPanel />
          <p className="hero-note">
            Built for parents, students, and school staff who need a faster answer than generic weather apps provide.
          </p>
        </section>

        <section className="content-section">
          <div className="section-heading">
            <p className="eyebrow">Why families use it</p>
            <h2>Built to explain winter risk, not just throw out a number.</h2>
          </div>
          <div className="insight-grid">
            <article className="section-card">
              <h3>Forecast signals in plain English</h3>
              <p>
                Instead of hiding behind a mystery formula, each result explains whether snowfall, freezing temperatures, or wind is driving the estimate.
              </p>
            </article>
            <article className="section-card">
              <h3>Local context that feels specific</h3>
              <p>
                State guides and city pages add regional context, so families can see what usually matters where they live instead of reading one generic weather summary.
              </p>
            </article>
            <article className="section-card">
              <h3>Written for real winter decisions</h3>
              <p>
                The experience is centered on the next school-morning window, which is usually when parents, students, and staff need the clearest answer.
              </p>
            </article>
          </div>
        </section>

        <section className="content-section">
          <div className="section-heading">
            <p className="eyebrow">Methodology snapshot</p>
            <h2>How the snow day predictor works.</h2>
          </div>
          <div className="insight-grid">
            {METHODOLOGY_PILLARS.map((pillar) => (
              <article key={pillar.title} className="section-card">
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </article>
            ))}
          </div>
          <div className="inline-actions">
            <Link href="/methodology" className="text-link">Read the full methodology</Link>
          </div>
        </section>

        <section className="content-section">
          <div className="section-heading">
            <p className="eyebrow">Popular winter cities</p>
            <h2>Featured city pages with weather patterns worth checking early.</h2>
          </div>
          <div className="guide-grid">
            {POPULAR_LOCATIONS.filter((location) => location.showOnHome !== false).map((location) => (
              <Link key={location.slug} href={`/prediction/${location.slug}`} className="section-card link-card">
                <h3>{location.city}, {location.regionCode}</h3>
                <p>{location.reason}</p>
                <span className="card-meta">{location.watchFor.join(' | ')}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="content-section">
          <div className="section-heading">
            <p className="eyebrow">Regional guides</p>
            <h2>State and province pages that add the bigger weather picture.</h2>
          </div>
          <div className="guide-grid">
            {STATE_GUIDES.map((guide) => (
              <Link key={guide.slug} href={`/states/${guide.slug}`} className="section-card link-card">
                <h3>{guide.name} Snow Day Guide</h3>
                <p>{guide.regionNote}</p>
                <span className="card-meta">{guide.weatherFactors.join(' | ')}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="content-section">
          <div className="section-heading">
            <p className="eyebrow">Support content</p>
            <h2>Key pages that explain the estimate and the real school-morning decision.</h2>
          </div>
          <div className="support-grid">
            {SUPPORT_PAGES.map((page) => (
              <Link key={page.href} href={page.href} className="section-card link-card">
                <h3>{page.title}</h3>
                <p>{page.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="content-section faq-section">
          <div className="section-heading">
            <p className="eyebrow">Snow day FAQ</p>
            <h2>Common questions from families and school staff.</h2>
          </div>
          <div className="faq-list">
            {HOME_FAQS.map((faq) => (
              <article key={faq.question} className="section-card faq-card">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
