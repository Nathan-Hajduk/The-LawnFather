import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { ServiceCardContent } from '@/lib/siteContent';

type ServiceCardProps = {
  service: ServiceCardContent;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="glass-panel h-full overflow-hidden p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800">Outdoor Service</p>
          <h3 className="mt-2 text-2xl font-semibold text-slate-900">{service.name}</h3>
        </div>
        <span className="rounded-full border border-emerald-300/20 bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800">
          {service.estimateType === 'hourly' ? '$50/hr+' : 'Quote'}
        </span>
      </div>

      {service.featuredMedia ? (
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-lg">
          {service.featuredMedia.kind === 'image' ? (
            <div className="relative aspect-[4/3] w-full">
              <Image src={service.featuredMedia.src} alt={service.featuredMedia.alt} fill sizes="(max-width: 1024px) 100vw, 25vw" className="object-cover" />
            </div>
          ) : (
            <video className="aspect-[4/3] w-full bg-black object-cover" controls preload="metadata" playsInline aria-label={service.featuredMedia.alt} title={service.featuredMedia.alt}>
              <source src={service.featuredMedia.src} />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      ) : (
        <div className="aspect-[4/3] rounded-3xl border border-dashed border-slate-200 bg-slate-50/80" aria-hidden="true" />
      )}

      <p className="mt-4 text-sm leading-6 text-slate-600">{service.description}</p>

      <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
        <p className="font-semibold text-emerald-800">Pricing note</p>
        <p className="mt-2 leading-6">{service.pricingNote}</p>
      </div>

      <Link href={`/quote?service=${service.key}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-800">
        Request This Service
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </article>
  );
}
