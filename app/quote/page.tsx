import type { Metadata } from 'next';
import { QuoteForm } from '@/components/QuoteForm';
import { RevealSection } from '@/components/RevealSection';
import { SERVICE_KEYS } from '@/lib/siteContent';

type QuotePageProps = {
  searchParams?: Promise<{
    service?: string;
  }>;
};

export const metadata: Metadata = {
  title: 'Get a Quote | The LawnFather',
  description: 'Request a personalized quote from The LawnFather for lawn care, landscaping, powerwashing, gardening, or small handyman work.'
};

function normalizeService(service?: string) {
  if (!service) return undefined;
  return SERVICE_KEYS.includes(service as (typeof SERVICE_KEYS)[number]) ? (service as (typeof SERVICE_KEYS)[number]) : undefined;
}

export default async function QuotePage({ searchParams }: QuotePageProps) {
  const params = await searchParams;
  const initialService = normalizeService(params?.service);

  return (
    <div className="px-4 pb-20 sm:px-6 lg:px-8">
      <RevealSection className="mx-auto max-w-7xl space-y-6">
        <p className="section-kicker">Get a Quote</p>
        <h1 className="max-w-3xl text-4xl font-semibold text-slate-900 sm:text-5xl">Request a Quote</h1>
        <p className="max-w-3xl text-base leading-8 text-slate-600">Fill out the form and I will follow up with a quote.</p>
      </RevealSection>

      <section className="mx-auto mt-14 max-w-7xl">
        <QuoteForm initialServiceSlug={initialService} />
      </section>
    </div>
  );
}
