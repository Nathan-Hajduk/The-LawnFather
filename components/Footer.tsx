import Link from 'next/link';
import { Facebook, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/siteContent';

const QUICK_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/#reviews', label: 'Reviews' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/quote', label: 'Get a Quote' },
  { href: '/about', label: 'About' }
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-primary)]/10 bg-[var(--color-primary)] text-[var(--color-surface)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:px-8">
        <div className="space-y-4">
          <p className="text-xl font-semibold text-white">The LawnFather</p>
          <p className="max-w-md text-sm leading-6 text-[var(--color-surface)]/80">Charlotte-area lawn care, landscaping, and property services built for fall and year-round upkeep.</p>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">Contact</p>
          <div className="space-y-2 text-sm text-[var(--color-surface)]/80">
            <p>
              Phone: <a href={BUSINESS_INFO.phoneHref} className="text-white hover:text-[var(--color-gold)]">{BUSINESS_INFO.phone}</a>
            </p>
            <p>
              Email: <a href="mailto:lawnfatherco@gmail.com" className="text-white hover:text-[var(--color-gold)]">lawnfatherco@gmail.com</a>
            </p>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a href={BUSINESS_INFO.facebook} target="_blank" rel="noopener noreferrer" aria-label="The LawnFather Facebook" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-2 text-sm text-white transition hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]">
              <Facebook className="h-4 w-4" aria-hidden="true" /> Facebook
            </a>
            {BUSINESS_INFO.googleBusiness ? (
              <a href={BUSINESS_INFO.googleBusiness} target="_blank" rel="noopener noreferrer" aria-label="The LawnFather Google Business Profile" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-2 text-sm text-white transition hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]">
                <MapPin className="h-4 w-4" aria-hidden="true" /> Google Business
              </a>
            ) : null}
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">Quick Links</p>
          <div className="grid grid-cols-2 gap-3 text-sm text-[var(--color-surface)]/80 sm:grid-cols-3 lg:grid-cols-1">
            {QUICK_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-[var(--color-surface)]/70 sm:px-6 lg:px-8">
        Copyright {year} The LawnFather. All rights reserved.
      </div>
    </footer>
  );
}
