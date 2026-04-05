import Link from 'next/link';
import { permanentRedirect } from 'next/navigation';
import { SiteHeader } from '@/components/SiteHeader';
import { StructuredData } from '@/components/StructuredData';
import { getSnowDayData } from '@/lib/weather';
import ResultView from '@/components/ResultView';
import { DEFAULT_OG_IMAGE, DEFAULT_TWITTER_IMAGE, POPULAR_LOCATIONS, SITE_NAME, SITE_URL, buildPredictionFaqs, getLocationBySlug, getRelatedLocations, getStateGuideBySlug } from '@/lib/site';

export function generateStaticParams() {
  return POPULAR_LOCATIONS.map((location) => ({
    zip: location.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { zip } = await params;
  const decodedZip = decodeURIComponent(zip);
  const result = await getSnowDayData(decodedZip);
  const canonicalSlug = result.success ? result.data.slug : decodedZip;
  
  if (result.success) {
    const { probability, location, summary } = result.data;
    return {
      title: `${location} Snow Day Calculator: ${probability}% Risk`,
      description: summary,
      alternates: {
        canonical: `/prediction/${canonicalSlug}`,
      },
      openGraph: {
        title: `${location} Snow Day Calculator: ${probability}% Risk | ${SITE_NAME}`,
        description: summary,
        url: `${SITE_URL}/prediction/${canonicalSlug}`,
        images: [DEFAULT_OG_IMAGE],
      },
      twitter: {
        card: 'summary_large_image',
        title: `${location} Snow Day Calculator: ${probability}% Risk | ${SITE_NAME}`,
        description: summary,
        images: [DEFAULT_TWITTER_IMAGE],
      },
    };
  }
  
  return {
    title: `Snow Day Prediction Lookup`,
    description: `Search for another city or ZIP code to find a supported snow day forecast page.`,
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function PredictionPage({ params }) {
  const { zip } = await params;
  const decodedZip = decodeURIComponent(zip);
  const result = await getSnowDayData(decodedZip);
  
  if (result.success && result.data.slug !== decodedZip) {
    permanentRedirect(`/prediction/${result.data.slug}`);
  }

  const canonicalSlug = result.success ? result.data.slug : decodedZip;
  const locationRecord = getLocationBySlug(canonicalSlug);
  const stateGuide = locationRecord ? getStateGuideBySlug(locationRecord.stateSlug) : null;
  const relatedLocations = locationRecord ? getRelatedLocations(canonicalSlug, locationRecord.stateSlug) : [];
  const faqItems = buildPredictionFaqs(
    result.success ? result.data.location : decodedZip.replace(/-/g, ' '),
    locationRecord
      ? {
          watchFor: locationRecord.watchFor,
          regionNote: stateGuide?.regionNote,
        }
      : undefined
  );
  const structuredData = result.success ? {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: `${result.data.location} Snow Day Calculator`,
        url: `${SITE_URL}/prediction/${canonicalSlug}`,
        description: result.data.summary
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
          ...(locationRecord ? [
            {
              "@type": "ListItem",
              position: 2,
              name: `${locationRecord.region} Guide`,
              item: `${SITE_URL}/states/${locationRecord.stateSlug}`
            }
          ] : []),
          {
            "@type": "ListItem",
            position: locationRecord ? 3 : 2,
            name: result.data.location,
            item: `${SITE_URL}/prediction/${canonicalSlug}`
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
  } : {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: 'Snow Day Prediction Lookup',
    url: `${SITE_URL}/prediction/${canonicalSlug}`
  };

  return (
    <>
      <StructuredData data={structuredData} />
      <SiteHeader />

      <main className="main-content content-page prediction-page">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          {locationRecord && <Link href={`/states/${locationRecord.stateSlug}`}>{locationRecord.region} Guide</Link>}
          <span>{result.success ? result.data.location : 'Prediction lookup'}</span>
        </nav>

        <div className="page-intro glass-panel">
          <p className="eyebrow">Location forecast</p>
          <h1>{result.success ? `${result.data.location} snow day calculator` : 'Snow day prediction lookup'}</h1>
          <p>
            {result.success
              ? `${result.data.summary} This page focuses on the next school-morning window and the nearby overnight setup.`
              : 'The location could not be matched cleanly. Search again from the homepage and choose a supported suggestion to create a stronger location page.'}
          </p>
        </div>

        <ResultView result={result} />

        {result.success && (
          <>
            {locationRecord && (
              <section className="content-section">
                <div className="section-heading">
                  <p className="eyebrow">Local context</p>
                  <h2>Why {result.data.location} can behave differently from the broader forecast.</h2>
                </div>
                <div className="support-grid">
                  <article className="section-card">
                    <h3>Why families check early</h3>
                    <p>{locationRecord.reason}</p>
                  </article>
                  <article className="section-card">
                    <h3>What to watch locally</h3>
                    <p>{locationRecord.watchFor.join(', ')}.</p>
                  </article>
                  {stateGuide && (
                    <article className="section-card">
                      <h3>Regional setup</h3>
                      <p>{stateGuide.regionNote}</p>
                    </article>
                  )}
                </div>
              </section>
            )}

            <section className="content-section">
              <div className="section-heading">
                <p className="eyebrow">Forecast drivers</p>
                <h2>What is shaping the {result.data.location} estimate right now.</h2>
              </div>
              <div className="support-grid">
                {result.data.primaryDrivers.map((driver) => (
                  <article key={driver} className="section-card">
                    <h3>{driver}</h3>
                    <p>
                      This signal is part of the current estimate for {result.data.location}. If the forecast changes, this driver may become stronger or weaker.
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section className="content-section">
              <div className="section-heading">
                <p className="eyebrow">How to read this page</p>
                <h2>Use the score as a planning signal, not a final district decision.</h2>
              </div>
              <div className="faq-list">
                {result.data.methodologyNotes.map((note) => (
                  <article key={note} className="section-card faq-card">
                    <p>{note}</p>
                  </article>
                ))}
              </div>
            </section>

            {relatedLocations.length > 0 && (
              <section className="content-section">
                <div className="section-heading">
                  <p className="eyebrow">Related city pages</p>
                  <h2>More snow day calculator pages in this region.</h2>
                </div>
                <div className="guide-grid">
                  {relatedLocations.map((location) => (
                    <Link key={location.slug} href={`/prediction/${location.slug}`} className="section-card link-card">
                      <h3>{location.city}, {location.regionCode}</h3>
                      <p>{location.reason}</p>
                      <span className="card-meta">{location.watchFor.join(' | ')}</span>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            <section className="content-section faq-section">
              <div className="section-heading">
                <p className="eyebrow">Location FAQ</p>
                <h2>Questions about the {result.data.location} estimate.</h2>
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
          </>
        )}
      </main>
    </>
  );
}
