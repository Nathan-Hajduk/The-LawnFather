import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, PhoneCall } from 'lucide-react';
import { CTASection } from '@/components/CTASection';
import { MediaGallery } from '@/components/MediaGallery';
import { RevealSection } from '@/components/RevealSection';
import { getLatestImageItems } from '@/lib/media';
import { SERVICE_OPTIONS, VALUE_PROPS } from '@/lib/siteContent';

export const metadata: Metadata = {
  title: 'The LawnFather | Lawn Care, Landscaping & Home Services',
  description: 'The LawnFather provides mowing, weedwacking, weeding, bush trimming, mulching, gardening, powerwashing, and small handyman services.'
};

export default function HomePage() {
  const featuredMedia = getLatestImageItems(4);
  const featuredServices = SERVICE_OPTIONS.slice(0, 6);

  return (
    <div className="relative">
      <section className="relative overflow-hidden px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <RevealSection className="space-y-8">
            <div className="space-y-4">
              <p className="section-kicker">Local lawn care</p>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
                <span className="gradient-text">The LawnFather</span>
                <br />
                Simple, reliable outdoor work.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Mowing, trimming, weeding, mulching, gardening, powerwashing, and small property help with clear communication from quote to cleanup.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/quote" className="neon-button">
                Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/services" className="neon-button-secondary">
                View Services
              </Link>
              <a href="tel:9803396491" className="neon-button-secondary inline-flex items-center gap-2">
                <PhoneCall className="h-4 w-4" aria-hidden="true" /> Call Now
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {VALUE_PROPS.map((value) => (
                <div key={value} className="flex items-center gap-3 rounded-lg border border-emerald-900/10 bg-white px-4 py-3 text-sm text-slate-700">
                  <CheckCircle2 className="h-4 w-4 flex-none text-emerald-600" aria-hidden="true" />
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </RevealSection>

          <RevealSection className="space-y-5">
            <div className="glass-panel-strong p-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image src="/media/IMG_3168.JPG" alt="The LawnFather finished landscaping work" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="mt-4 grid gap-3 text-sm text-slate-700 sm:grid-cols-3">
                <p className="rounded-lg bg-emerald-50 p-3 font-semibold text-emerald-900">Free quotes</p>
                <p className="rounded-lg bg-emerald-50 p-3 font-semibold text-emerald-900">$40/hr options</p>
                <p className="rounded-lg bg-emerald-50 p-3 font-semibold text-emerald-900">Custom jobs</p>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-kicker">Services</p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900">Pick the help you need.</h2>
            </div>
            <Link href="/services" className="neon-button-secondary">
              View All Services
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => (
              <article key={service.key} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-slate-900">{service.name}</h3>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
                    {service.estimateType === 'hourly' ? 'Hourly' : 'Quote'}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
                <p className="mt-4 text-sm font-semibold text-emerald-800">{service.pricingNote}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <MediaGallery
            title="Recent Work"
            description="A quick look at recent lawn, planting, and cleanup work."
            items={featuredMedia}
          />
        </div>
      </section>

      <section id="intro-video" className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <CTASection
            title="Scan, meet The LawnFather, and request a quote."
            description="Use the intro page for your business-card QR code, then send visitors straight into the quote form."
            primaryHref="/intro"
            primaryLabel="Open Intro Page"
            secondaryHref="/quote"
            secondaryLabel="Get a Free Quote"
          />
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <CTASection
            title="Ready for a cleaner property?"
            description="Tell me what you need and I will follow up with next steps."
            primaryHref="/quote"
            primaryLabel="Get a Free Quote"
            secondaryHref="tel:9803396491"
            secondaryLabel="Call Now"
          />
        </div>
      </section>
    </div>
  );
}
