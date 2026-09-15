import type { Metadata } from 'next';
import { Manrope, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageWatermark } from '@/components/PageWatermark';
import { BUSINESS_INFO } from '@/lib/siteContent';

const headingFont = Space_Grotesk({ subsets: ['latin'], variable: '--font-heading' });
const bodyFont = Manrope({ subsets: ['latin'], variable: '--font-body' });

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LandscapingBusiness',
  name: BUSINESS_INFO.name,
  url: BUSINESS_INFO.website,
  telephone: '+1-980-339-6491',
  sameAs: [BUSINESS_INFO.facebook].filter(Boolean),
  areaServed: 'Charlotte and surrounding communities',
  description: 'The LawnFather offers residential lawn care, landscaping, outdoor cleanup, mulching, pressure washing, and year-round property services in Charlotte, NC and surrounding communities.'
};

export const metadata: Metadata = {
  title: 'The LawnFather | Landscaping & Lawn Care in Charlotte, NC',
  description: 'Charlotte-area lawn care and landscaping from The LawnFather. Fall aeration, overseeding, leaf cleanup, mulching, pressure washing, debris removal, mowing, trimming, and more. Request a free quote.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${headingFont.variable} ${bodyFont.variable} bg-[var(--color-background)] text-[var(--color-text)] antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <div className="relative flex min-h-screen flex-col overflow-hidden">
          <PageWatermark />
          <Navbar />
          <main className="relative z-10 flex-1 pt-24 font-medium">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}