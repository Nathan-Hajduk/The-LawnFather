import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CTASection } from '@/components/CTASection';
import { MediaGallery } from '@/components/MediaGallery';
import { ReviewRotator } from '@/components/ReviewRotator';
import { RevealSection } from '@/components/RevealSection';
import { getMediaItems } from '@/lib/media';
import { PROMISE_CARDS } from '@/lib/siteContent';

export const metadata: Metadata = {
  title: 'About Us | The LawnFather',
  description: 'Learn about The LawnFather’s mission to provide reliable, affordable, and professional property services.'
};

export default function AboutPage() {
  return (
    <div className="px-4 pb-20 sm:px-6 lg:px-8">
      <RevealSection className="mx-auto max-w-7xl space-y-6">
        <p className="section-kicker">About Us</p>
        <h1 className="max-w-3xl text-4xl font-semibold text-slate-900 sm:text-5xl">About The LawnFather</h1>
        <div className="max-w-4xl space-y-4 text-base leading-8 text-slate-600">
          <p>
            The LawnFather was created to provide reliable, affordable lawn care and property help.
          </p>
          <p>
            Communication, punctuality, and clean work guide every job.
          </p>
          <p>
            The mission is to make properties look better and make the process simple.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/quote" className="neon-button">
            Ready to transform your property? Get a quote. <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </RevealSection>

      <section className="mx-auto mt-14 max-w-7xl grid gap-6 lg:grid-cols-2">
        <MediaGallery
          title="About The LawnFather Through Recent Work"
          description="A small chronological snapshot that shows the style of jobs this business handles while keeping the closest media items together."
          items={getMediaItems(['IMG_3234.MOV', 'IMG_3235.MOV', 'IMG_3103.MOV', 'IMG_3111.MOV'])}
        />
        <div className="glass-panel-strong p-6 sm:p-8">
          <p className="section-kicker">Our Promise</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {PROMISE_CARDS.map((item) => (
              <article key={item} className="rounded-2xl border border-white/5 bg-white/[0.03] p-4">
                <p className="text-lg font-semibold text-slate-900">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-7xl">
        <CTASection
          title="Scan, Watch, and Request a Quote"
          description="QR codes can point to the home page or the intro video anchor."
          primaryHref="/quote"
          primaryLabel="Get a Free Quote"
          secondaryHref="/services"
          secondaryLabel="View Services"
        />
      </section>

      <section className="mx-auto mt-20 max-w-7xl">
        <ReviewRotator />
      </section>
    </div>
  );
}