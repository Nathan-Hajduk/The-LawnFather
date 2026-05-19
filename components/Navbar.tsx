"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, Leaf } from 'lucide-react';
import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/intro', label: 'Intro' },
  { href: '/quote', label: 'Get a Quote' },
  { href: '/about', label: 'About' }
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-emerald-900/10 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 font-semibold tracking-wide text-slate-900" aria-label="The LawnFather home">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-300/25 bg-emerald-100 text-emerald-800 shadow-glow overflow-hidden">
            <img
              src="/media/logo.png"
              alt="The LawnFather logo"
              className="h-10 w-10 object-cover"
              onError={(e) => {
                // If the image isn't available, fall back to the Leaf icon.
                const target = e.currentTarget as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) parent.setAttribute('data-show-fallback', 'true');
              }}
            />
            <span aria-hidden="true" className="hidden" />
            <Leaf className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-lg font-semibold">The LawnFather</span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Primary navigation">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm transition ${active ? 'bg-emerald-100 text-emerald-800' : 'text-slate-600 hover:bg-emerald-50 hover:text-slate-900'}`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link href="/quote" className="neon-button ml-2">
            Get a Quote
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-emerald-900/10 bg-white/95 px-4 py-4 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 transition hover:border-emerald-300/30 hover:bg-emerald-50"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/quote" className="neon-button mt-1 w-full">
              Get a Quote
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
