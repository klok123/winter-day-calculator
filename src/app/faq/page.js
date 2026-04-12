import Link from 'next/link';
import { SiteHeader } from '@/components/SiteHeader';
import { StructuredData } from '@/components/StructuredData';
import { DEFAULT_OG_IMAGE, DEFAULT_TWITTER_IMAGE, HOME_FAQS, SITE_NAME, SITE_URL } from '@/lib/site';

const faqItems = [
  ...HOME_FAQS,
  {
    question: 'Can weather apps replace a snow day calculator?',
    answer: 'General weather apps are useful, but they do not translate those conditions into school-closing risk. A snow day calculator frames the forecast around school decisions instead of general weather awareness.'
  },
  {
    question: 'Why do some cities need their own snow day pages?',
    answer: 'Winter weather is local. Buffalo, Cleveland, Toronto, and Worcester can behave very differently in the same kind of storm, so city pages help explain what actually matters in each place.'
  },
  {
    question: 'What should I check besides the percentage?',
    answer: 'Look at the forecast drivers, the update timing, and the official district communication channels. The percentage is the headline, but the supporting context is what makes it useful.'
  }
];

export const metadata = {
  title: 'Snow Day Calculator FAQ',
  description: 'Answers to common snow day calculator questions about accuracy, forecast updates, local pages, and how to use the estimate responsibly.',
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: `Snow Day Calculator FAQ | ${SITE_NAME}`,
    description: 'Answers to common snow day calculator questions about accuracy, confidence, and local forecasting.',
    url: `${SITE_URL}/faq`,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Snow Day Calculator FAQ | ${SITE_NAME}`,
    description: 'Answers to common snow day calculator questions about accuracy, confidence, and local forecasting.',
    images: [DEFAULT_TWITTER_IMAGE],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@graph": [
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
          name: 'FAQ',
          item: `${SITE_URL}/faq`
        }
      ]
    }
  ]
};

export default function FaqPage() {
  return (
    <>
      <StructuredData data={faqSchema} />
      <SiteHeader />

      <main className="main-content content-page">
        <div className="page-intro glass-panel">
          <p className="eyebrow">FAQ</p>
          <h1>Snow day calculator questions, answered clearly.</h1>
          <p>
            This FAQ explains what the score means, where the limits are, and how to use forecast-based guidance without over-trusting any single number.
          </p>
        </div>

        <section className="content-section faq-section">
          <div className="faq-list">
            {faqItems.map((faq) => (
              <article key={faq.question} className="section-card faq-card">
                <h2>{faq.question}</h2>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <div className="inline-actions">
            <Link href="/methodology" className="text-link">See the methodology</Link>
            <Link href="/guides/preparing-for-snow-days" className="text-link">Read the family guide</Link>
            <Link href="/guides/how-schools-decide-snow-days" className="text-link">How districts decide</Link>
            <Link href="/guides/delay-vs-closure" className="text-link">Delay vs closure</Link>
            <Link href="/guides/what-parents-should-check-before-6-am" className="text-link">Before 6 AM checklist</Link>
            <Link href="/" className="text-link">Use the calculator</Link>
          </div>
        </section>
      </main>
    </>
  );
}
