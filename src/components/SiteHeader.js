import Link from 'next/link';
import { SUPPORT_PAGES } from '@/lib/site';

export function SiteHeader() {
  return (
    <header className="header">
      <div className="top-nav">
        <Link href="/" className="title-container">
          <span className="title-icon">*</span>
          <span className="site-title">Winter Day Calculator</span>
        </Link>

        <nav className="top-links" aria-label="Primary">
          {SUPPORT_PAGES.filter((page) => page.showInHeader !== false).map((page) => (
            <Link key={page.href} href={page.href}>
              {page.navLabel || page.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
