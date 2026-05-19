import type { Metadata } from 'next';
import { Manrope, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const headingFont = Space_Grotesk({ subsets: ['latin'], variable: '--font-heading' });
const bodyFont = Manrope({ subsets: ['latin'], variable: '--font-body' });

export const metadata: Metadata = {
  title: 'The LawnFather | Lawn Care, Landscaping & Home Services',
  description: 'The LawnFather provides mowing, weedwacking, weeding, bush trimming, mulching, gardening, powerwashing, and small handyman services.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${headingFont.variable} ${bodyFont.variable} bg-slate-50 text-slate-900 antialiased`}>
        <div className="relative flex min-h-screen flex-col overflow-hidden">
          <Navbar />
          <main className="relative z-10 flex-1 pt-24">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}