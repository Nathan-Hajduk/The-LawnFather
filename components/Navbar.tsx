"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, Leaf } from 'lucide-react';
import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  "use client";

  import Link from 'next/link';
  import { usePathname } from 'next/navigation';
  import { Menu, X, ArrowRight, Leaf } from 'lucide-react';
  import { useEffect, useState } from 'react';

  const NAV_LINKS = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/intro', label: 'Intro' },
    { href: '/about', label: 'About' }
  ];

  export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [logoLoaded, setLogoLoaded] = useState(false);

    useEffect(() => {
      setIsOpen(false);
    }, [pathname]);

    const leftLinks = NAV_LINKS.slice(0, Math.ceil(NAV_LINKS.length / 2));
    const rightLinks = NAV_LINKS.slice(Math.ceil(NAV_LINKS.length / 2));

    return (
      <header className="fixed inset-x-0 top-0 z-50 border-b border-emerald-900/10 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="hidden md:flex items-center gap-2">
            {leftLinks.map((link) => {
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
          </div>

          <Link href="/" className="flex items-center justify-center gap-3 font-semibold tracking-wide text-slate-900" aria-label="The LawnFather home">
            <div className="h-12 w-12 flex items-center justify-center">
              <img
                src="/media/logo.png"
                alt="The LawnFather logo"
                className="max-h-10 max-w-10 object-contain"
                onLoad={() => setLogoLoaded(true)}
                onError={() => setLogoLoaded(false)}
              />
              {!logoLoaded && (
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-300/25 bg-emerald-100 text-emerald-800 shadow-glow">
                  <Leaf className="h-5 w-5" aria-hidden="true" />
                </span>
              )}
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {rightLinks.map((link) => {
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
              {[...NAV_LINKS, { href: '/quote', label: 'Get a Quote' }].map((link) => (
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
    </header>
  );
}
