import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CTASection } from '@/components/CTASection';
import { RevealSection } from '@/components/RevealSection';
import { ServiceCard } from '@/components/ServiceCard';
import { SERVICE_OPTIONS } from '@/lib/siteContent';

export const metadata: Metadata = {
  title: 'Services | The LawnFather',
  description: 'Explore lawn care, landscaping, powerwashing, gardening, and small handyman services from The LawnFather.'
};

export default function ServicesPage() {
  return (
    <div className="px-4 pb-20 sm:px-6 lg:px-8">
      <RevealSection className="mx-auto max-w-7xl space-y-6">
        <p className="section-kicker">Services</p>
        <h1 className="max-w-3xl text-4xl font-semibold text-slate-900 sm:text-5xl">Services</h1>
        <p className="max-w-3xl text-base leading-8 text-slate-600">Choose what you need, then request a quote. Hourly services start at $40/hour. Larger or property-specific jobs get a custom quote.</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/quote" className="neon-button">
            Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Link>
          <Link href="/about" className="neon-button-secondary">
            About The LawnFather
          </Link>
        </div>
      </RevealSection>

      <section className="mx-auto mt-14 max-w-7xl">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {SERVICE_OPTIONS.map((service) => (
            <ServiceCard key={service.key} service={service} />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-7xl">
        <CTASection
          title="Need help choosing a service?"
          description="Pick a service and request a quote in minutes."
          primaryHref="/quote"
          primaryLabel="Request a Service Quote"
          secondaryHref="tel:9803396491"
          secondaryLabel="Call Now"
        />
      </section>
    </div>
  );
}
