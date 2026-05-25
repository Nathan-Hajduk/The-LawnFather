"use client";

import { useMemo, useState } from 'react';
import { MediaGallery } from '@/components/MediaGallery';
import type { MediaItem, MediaSection } from '@/lib/media';

type GallerySection = MediaSection & {
  items: MediaItem[];
};

type GalleryBrowserProps = {
  sections: GallerySection[];
};

type FilterKey = 'all' | 'mowing' | 'weeding' | 'mulching' | 'trimming' | 'powerwashing' | 'planting' | 'cleanup' | 'small-projects';

type FilterOption = {
  key: FilterKey;
  label: string;
  keywords: string[];
};

const FILTER_OPTIONS: FilterOption[] = [
  { key: 'all', label: 'All Work', keywords: [] },
  { key: 'mowing', label: 'Mowing', keywords: ['mowing'] },
  { key: 'weeding', label: 'Weeding', keywords: ['weeding', 'weedwacking'] },
  { key: 'mulching', label: 'Mulching', keywords: ['mulching'] },
  { key: 'trimming', label: 'Trimming', keywords: ['trimming', 'hedge trimming', 'bush trimming', 'brush removal'] },
  { key: 'powerwashing', label: 'Powerwashing', keywords: ['powerwashing'] },
  { key: 'planting', label: 'Planting', keywords: ['planting', 'flower bed', 'gardening & aeration', 'plant maintenance', 'plant transplant'] },
  { key: 'cleanup', label: 'Cleanup', keywords: ['cleanup', 'dead plant removal', 'tree removal', 'pool cleanup', 'lawn cleanup'] },
  { key: 'small-projects', label: 'Small Projects', keywords: ['fencing', 'umbrella buildout', 'small handyman', 'project', 'buildout'] }
];

function matchesFilter(section: GallerySection, keywords: string[]) {
  if (keywords.length === 0) return true;

  const haystack = [section.key, section.title, section.description, ...section.items.map((item) => `${item.title} ${item.serviceGroup}`)]
    .join(' ')
    .toLowerCase();

  return keywords.some((keyword) => haystack.includes(keyword));
}

export function GalleryBrowser({ sections }: GalleryBrowserProps) {
  const [activeSection, setActiveSection] = useState<FilterKey>('all');

  const activeFilter = useMemo(
    () => FILTER_OPTIONS.find((option) => option.key === activeSection) ?? FILTER_OPTIONS[0],
    [activeSection]
  );

  const visibleItems = useMemo(() => {
    const matchedSections = activeSection === 'all' ? sections : sections.filter((section) => matchesFilter(section, activeFilter.keywords));

    return matchedSections.flatMap((section) => section.items);
  }, [activeSection, activeFilter.keywords, sections]);

  return (
    <>
      <div className="mx-auto mt-8 flex max-w-7xl flex-wrap gap-2">
        {FILTER_OPTIONS.map((option) => {
          const isActive = option.key === activeSection;

          return (
            <button
              key={option.key}
              type="button"
              onClick={() => setActiveSection(option.key)}
              className={isActive ? 'neon-button text-sm' : 'neon-button-secondary text-sm'}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      <section className="mx-auto mt-10 max-w-7xl space-y-10">
        <MediaGallery title={activeFilter.label} items={visibleItems} />
      </section>
    </>
  );
}