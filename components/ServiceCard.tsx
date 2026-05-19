import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { ServiceCardContent } from '@/lib/siteContent';

type ServiceCardProps = {
  service: ServiceCardContent;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="glass-panel h-full overflow-hidden p-6 transition duration-300 hover:-translate-y-1">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800">Outdoor Service</p>
          <h3 className="mt-2 text-2xl font-semibold text-slate-900">{service.name}</h3>
        </div>
        <span className="rounded-full border border-emerald-300/20 bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800">
          {service.estimateType === 'hourly' ? '$40/hr+' : 'Quote'}
        </span>
      </div>

      <p className="text-sm leading-6 text-slate-600">{service.description}</p>

      <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
        <p className="font-semibold text-emerald-800">Pricing note</p>
        <p className="mt-2 leading-6">{service.pricingNote}</p>
      </div>

      <div className="mt-6">
        <Link href={`/quote?service=${service.key}`} className="neon-button w-full">
          Request This Service
          <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
