"use client";

import Image from 'next/image';
import type { MediaItem } from '@/lib/media';

type MediaGalleryProps = {
  title: string;
  items: MediaItem[];
  className?: string;
};

type MediaPair = {
  earlier: MediaItem;
  later?: MediaItem;
};

function MediaCard({ item }: { item: MediaItem }) {
  return (
    <article className="glass-panel overflow-hidden p-2">
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
    </article>
  );
}

function pairItems(items: MediaItem[]): MediaPair[] {
  const pairs: MediaPair[] = [];

  for (let index = 0; index < items.length; index += 2) {
    pairs.push({
      earlier: items[index],
      later: items[index + 1]
    });
  }

  return pairs;
}

export function MediaGallery({ title, items, className = '' }: MediaGalleryProps) {
  const sortedItems = [...items].sort((left, right) => new Date(left.capturedAt).getTime() - new Date(right.capturedAt).getTime());
  const pairedItems = pairItems(sortedItems);

  return (
    <section className={className}>
      <div className="mb-6 max-w-3xl">
        <p className="section-kicker">{title}</p>
      </div>

      <div className="space-y-3">
        {pairedItems.map((pair) => (
          <div key={pair.earlier.id} className="grid gap-3 md:grid-cols-2">
            <div className="glass-panel overflow-hidden p-2">
              <MediaCard item={pair.earlier} />
            </div>
            {pair.later ? (
              <div className="glass-panel overflow-hidden p-2">
                <MediaCard item={pair.later} />
              </div>
            ) : (
              <div className="hidden md:block" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}