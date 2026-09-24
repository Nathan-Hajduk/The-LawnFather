"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/#reviews', label: 'Reviews' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/quote', label: 'Get a Quote' },
  { href: '/about', label: 'About' }
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const leftLinks = NAV_LINKS.slice(0, Math.ceil(NAV_LINKS.length / 2));
  const rightLinks = NAV_LINKS.slice(Math.ceil(NAV_LINKS.length / 2));

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--color-primary)]/10 bg-[rgba(255,251,247,0.9)] backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <div className="hidden items-center gap-2 justify-self-start md:flex">
          {leftLinks.map((link) => {
            const active = pathname === link.href || (link.href === '/#reviews' && pathname === '/');
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold tracking-wide transition ${active ? 'bg-[var(--color-primary)] text-white' : 'text-[var(--color-text)] hover:bg-[var(--color-surface)] hover:text-[var(--color-primary)]'}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <Link href="/" className="justify-self-center whitespace-nowrap text-center font-heading text-2xl font-bold tracking-[0.18em] text-[var(--color-text)] sm:text-3xl" aria-label="The LawnFather home">
          The LawnFather
        </Link>

        <nav className="hidden items-center justify-self-end gap-2 md:flex">
          {rightLinks.map((link) => {
            const active = pathname === link.href || (link.href === '/#reviews' && pathname === '/');
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold tracking-wide transition ${active ? 'bg-[var(--color-primary)] text-white' : 'text-[var(--color-text)] hover:bg-[var(--color-surface)] hover:text-[var(--color-primary)]'}`}
              >
                {link.label}
              </Link>
            );
          })}

          <a href="/quote" className="neon-button ml-2">
            Get a Quote
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-primary)]/15 bg-white text-[var(--color-text)] justify-self-end md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-[var(--color-primary)]/10 bg-[rgba(255,251,247,0.96)] px-4 py-4 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl border border-[var(--color-primary)]/15 bg-white px-4 py-3 text-sm text-[var(--color-text)] transition hover:border-[var(--color-accent)]/60 hover:bg-[var(--color-surface)]"
              >
                {link.label}
              </Link>
            ))}
            <a href="/quote" className="neon-button mt-1 w-full">
              Get a Quote
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
