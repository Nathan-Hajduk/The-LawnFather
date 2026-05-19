import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import type { MediaItem } from '@/lib/media';

type MediaGalleryProps = {
  title: string;
  description?: string;
  items: MediaItem[];
  className?: string;
};

function formatCapturedAt(capturedAt: string) {
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  }).format(new Date(capturedAt));
}

function MediaCard({ item, label }: { item: MediaItem; label: string }) {
  return (
    <article className="glass-panel overflow-hidden p-4">
      <div className="mb-3 flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-800">
        <span>{label}</span>
        <span>{formatCapturedAt(item.capturedAt)}</span>
      </div>
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-lg">
        {item.kind === 'image' ? (
          <div className="relative aspect-[4/3] w-full">
            <Image src={item.src} alt={item.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        ) : (
          <video className="aspect-[4/3] w-full bg-black object-contain" controls preload="metadata" playsInline>
            <source src={item.src} />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-lg font-semibold text-slate-900">{item.title}</p>
          <p className="mt-1 text-sm leading-6 text-slate-600">Captured as part of the {item.serviceGroup} section.</p>
        </div>
        <a
          href={item.src}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-900 transition hover:bg-emerald-100"
        >
          Open <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

export function MediaGallery({ title, description, items, className = '' }: MediaGalleryProps) {
  const sortedItems = [...items].sort((left, right) => new Date(left.capturedAt).getTime() - new Date(right.capturedAt).getTime());

  return (
    <section className={className}>
      <div className="mb-6 max-w-3xl">
        <p className="section-kicker">{title}</p>
        {description ? <p className="mt-3 text-base leading-8 text-slate-600">{description}</p> : null}
      </div>

      <div className="space-y-5">
        {sortedItems
          .reduce<Array<MediaItem[]>>((pairs, item, index) => {
            if (index % 2 === 0) {
              pairs.push([item]);
            } else {
              pairs[pairs.length - 1].push(item);
            }

            return pairs;
          }, [])
          .map((pair, index) => (
            <div key={`${pair[0].id}-${index}`} className="grid gap-5 md:grid-cols-2">
              <MediaCard item={pair[0]} label="Before" />
              {pair[1] ? <MediaCard item={pair[1]} label="After" /> : <div className="hidden md:block" />}
            </div>
          ))}
      </div>
    </section>
  );
}