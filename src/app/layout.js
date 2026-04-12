import './globals.css';
import Link from 'next/link';
import { Outfit } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import { ClientWrapper } from '@/components/ClientWrapper';
import { DEFAULT_OG_IMAGE, DEFAULT_TWITTER_IMAGE, SITE_DESCRIPTION, SITE_NAME, SITE_URL, STATE_GUIDES, SUPPORT_PAGES } from '@/lib/site';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Snow Day Calculator and School Closing Predictor`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    url: SITE_URL,
    title: `${SITE_NAME} | Snow Day Calculator and School Closing Predictor`,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Snow Day Calculator and School Closing Predictor`,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_TWITTER_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: '/manifest.webmanifest',
  category: 'weather',
};

export const viewport = {
  themeColor: '#0a0e17',
  colorScheme: 'dark',
};

export default function RootLayout({ children }) {
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en" className={outfit.variable}>
      <body>
        <ClientWrapper>
          {children}
          <footer className="site-footer">
            <div className="footer-grid glass-panel">
              <div>
                <p className="footer-heading">{SITE_NAME}</p>
                <p className="footer-copy">
                  Forecast-based snow day risk estimates, methodology, and regional winter weather guides for US and Canada locations.
                </p>
              </div>

              <div>
                <p className="footer-heading">Core Pages</p>
                <nav className="footer-links" aria-label="Core site links">
                  {SUPPORT_PAGES.map((page) => (
                    <Link key={page.href} href={page.href}>
                      {page.navLabel || page.title}
                    </Link>
                  ))}
                </nav>
              </div>

              <div>
                <p className="footer-heading">State Guides</p>
                <nav className="footer-links" aria-label="Snow day state guides">
                  {STATE_GUIDES.slice(0, 6).map((guide) => (
                    <Link key={guide.slug} href={`/states/${guide.slug}`}>
                      {guide.name} Snow Day Guide
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </footer>
        </ClientWrapper>
      </body>
      {gaMeasurementId ? <GoogleAnalytics gaId={gaMeasurementId} /> : null}
    </html>
  );
}
