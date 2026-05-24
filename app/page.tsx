import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, PhoneCall } from 'lucide-react';
import { CTASection } from '@/components/CTASection';
import { ReviewRotator } from '@/components/ReviewRotator';
import { ServiceCard } from '@/components/ServiceCard';
import { RevealSection } from '@/components/RevealSection';
import { SERVICE_OPTIONS, VALUE_PROPS } from '@/lib/siteContent';

export const metadata: Metadata = {
  title: 'The LawnFather | Lawn Care, Landscaping & Home Services',
  description: 'The LawnFather provides mowing, weedwacking, weeding, bush trimming, mulching, gardening, powerwashing, and small handyman services.'
};

export default function HomePage() {
  const featuredServices = SERVICE_OPTIONS;

  return (
    <div className="relative">
      <section className="relative overflow-hidden px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
          <RevealSection className="w-full space-y-8">
            <div className="space-y-5">
              <div className="flex justify-center">
                <Image
                  src="/media/logo.png"
                  alt="The LawnFather logo"
                  width={1400}
                  height={1400}
                  priority
                  className="h-auto w-full max-w-[46rem] sm:max-w-[54rem] lg:max-w-[64rem]"
                />
              </div>
              <p className="section-kicker">Local lawn care</p>
              <h1 className="mx-auto max-w-4xl text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Simple, reliable outdoor work.
              </h1>
              <p className="mx-auto max-w-3xl text-base leading-8 text-slate-700 sm:text-lg">
                Mowing, trimming, weeding, mulching, gardening, powerwashing, and small property help with clear communication from quote to cleanup.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
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

            <div className="grid gap-3 pt-2 sm:grid-cols-2 lg:grid-cols-3">
              {VALUE_PROPS.map((value) => (
                <div key={value} className="flex items-center gap-3 rounded-2xl border border-emerald-900/10 bg-white px-4 py-3 text-sm font-medium text-slate-800 shadow-sm">
                  <CheckCircle2 className="h-4 w-4 flex-none text-emerald-600" aria-hidden="true" />
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-kicker">Service Categories</p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900">Tap a category to request a quote.</h2>
            </div>
            <Link href="/services" className="neon-button-secondary">
              View All Services
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {featuredServices.map((service) => (
              <ServiceCard key={service.key} service={service} />
            ))}
          </div>
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
            title="Browse the gallery layout"
            description="Open the gallery page to review locations and tell me which images belong in each service category."
            primaryHref="/gallery"
            primaryLabel="Open Gallery"
            secondaryHref="/quote"
            secondaryLabel="Get a Free Quote"
          />
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ReviewRotator />
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
