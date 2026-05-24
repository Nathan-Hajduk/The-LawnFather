import Link from 'next/link';

const QUICK_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/intro', label: 'Intro' },
  { href: '/quote', label: 'Get a Quote' },
  { href: '/about', label: 'About' }
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-emerald-900/10 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:px-8">
        <div className="space-y-4">
          <p className="text-xl font-semibold text-slate-900">The LawnFather</p>
          <p className="max-w-md text-sm leading-6 text-slate-600">Clean lawn care and property help for local homeowners.</p>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-800">Contact</p>
          <div className="space-y-2 text-sm text-slate-700">
            <p>
              Phone: <a href="tel:9803396491" className="text-slate-900 hover:text-emerald-700">980-339-6491</a>
            </p>
            <p>
              Email: <a href="mailto:lawnfatherco@gmail.com" className="text-slate-900 hover:text-emerald-700">lawnfatherco@gmail.com</a>
            </p>
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-800">Quick Links</p>
          <div className="grid grid-cols-2 gap-3 text-sm text-slate-700 sm:grid-cols-4 lg:grid-cols-1">
            {QUICK_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-slate-900">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-emerald-900/10 px-4 py-5 text-center text-xs text-slate-500 sm:px-6 lg:px-8">
        Copyright {year} The LawnFather. All rights reserved.
      </div>
    </footer>
  );
}
