import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SiteHeader } from '@/components/SiteHeader';
import { StructuredData } from '@/components/StructuredData';
import { DEFAULT_OG_IMAGE, DEFAULT_TWITTER_IMAGE, SITE_NAME, SITE_URL, buildStateGuideFaqs, getLocationsForState, getStateGuideBySlug, STATE_GUIDES } from '@/lib/site';

export async function generateStaticParams() {
  return STATE_GUIDES.map((guide) => ({
    state: guide.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { state } = await params;
  const guide = getStateGuideBySlug(state);

  if (!guide) {
    return {
      title: `${SITE_NAME}`,
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${guide.name} Snow Day Calculator Guide`,
    description: `Understand snow day patterns across ${guide.name} with local city pages, forecast factors, and planning advice.`,
    alternates: {
      canonical: `/states/${guide.slug}`,
    },
    openGraph: {
      title: `${guide.name} Snow Day Calculator Guide | ${SITE_NAME}`,
      description: `Local snow day calculator coverage and winter weather planning for ${guide.name}.`,
      url: `${SITE_URL}/states/${guide.slug}`,
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${guide.name} Snow Day Calculator Guide | ${SITE_NAME}`,
      description: `Local snow day calculator coverage and winter weather planning for ${guide.name}.`,
      images: [DEFAULT_TWITTER_IMAGE],
    },
  };
}

export default async function StateGuidePage({ params }) {
  const { state } = await params;
  const guide = getStateGuideBySlug(state);

  if (!guide) {
    notFound();
  }

  const locations = getLocationsForState(guide.slug);
  const faqItems = buildStateGuideFaqs(guide);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: `${guide.name} Snow Day Calculator Guide`,
        url: `${SITE_URL}/states/${guide.slug}`,
        description: guide.summary
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
            name: `${guide.name} Guide`,
            item: `${SITE_URL}/states/${guide.slug}`
          }
        ]
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((faq) => ({
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

  return (
    <>
      <StructuredData data={schema} />
      <SiteHeader />

      <main className="main-content content-page">
        <div className="page-intro glass-panel">
          <p className="eyebrow">State guide</p>
          <h1>{guide.name} snow day calculator guide.</h1>
          <p>{guide.summary} {guide.regionNote}</p>
        </div>

        <section className="content-section">
          <div className="section-heading">
            <p className="eyebrow">Local forecast factors</p>
            <h2>What usually drives closures in {guide.name}.</h2>
          </div>
          <div className="support-grid">
            {guide.weatherFactors.map((factor) => (
              <article key={factor} className="section-card">
                <h3>{factor}</h3>
                <p>
                  This factor regularly changes local school-closing decisions, which is why Winter Day Calculator pairs the forecast with more local context instead of a single generic summary.
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <div className="section-heading">
            <p className="eyebrow">Regional context</p>
            <h2>How conditions can vary across {guide.name}.</h2>
          </div>
          <div className="faq-list">
            <article className="section-card faq-card">
              <h3>Why local conditions can split quickly</h3>
              <p>{guide.regionNote}</p>
            </article>
            <article className="section-card faq-card">
              <h3>What this guide helps you do</h3>
              <p>
                Use the state overview to understand the wider setup, then open a city page to see a more specific forecast-based estimate for the next school-morning window.
              </p>
            </article>
          </div>
        </section>

        <section className="content-section">
          <div className="section-heading">
            <p className="eyebrow">Cities covered</p>
            <h2>Explore winter city pages in {guide.name}.</h2>
          </div>
          <div className="guide-grid">
            {locations.map((location) => (
              <Link key={location.slug} href={`/prediction/${location.slug}`} className="section-card link-card">
                <h3>{location.city}, {location.regionCode}</h3>
                <p>{location.reason}</p>
                <span className="card-meta">{location.watchFor.join(' | ')}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="content-section faq-section">
          <div className="section-heading">
            <p className="eyebrow">Guide FAQ</p>
            <h2>How to use the {guide.name} guide.</h2>
          </div>
          <div className="faq-list">
            {faqItems.map((faq) => (
              <article key={faq.question} className="section-card faq-card">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <div className="inline-actions">
            <Link href="/methodology" className="text-link">Review the methodology</Link>
            <Link href="/" className="text-link">Search another location</Link>
          </div>
        </section>
      </main>
    </>
  );
}
