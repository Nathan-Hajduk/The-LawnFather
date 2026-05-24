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

export function GalleryBrowser({ sections }: GalleryBrowserProps) {
  const [activeSection, setActiveSection] = useState<string>('all');

  const sectionOptions = useMemo(
    () => [{ key: 'all', title: 'All Services' }, ...sections.map((section) => ({ key: section.key, title: section.title }))],
    [sections]
  );

  const visibleSections = activeSection === 'all' ? sections : sections.filter((section) => section.key === activeSection);

  return (
    <>
      <div className="mx-auto mt-8 flex max-w-7xl flex-wrap gap-2">
        {sectionOptions.map((option) => {
          const isActive = option.key === activeSection;

          return (
            <button
              key={option.key}
              type="button"
              onClick={() => setActiveSection(option.key)}
              className={isActive ? 'neon-button text-sm' : 'neon-button-secondary text-sm'}
            >
              {option.title}
            </button>
          );
        })}
      </div>

      <section className="mx-auto mt-10 max-w-7xl space-y-10">
        {visibleSections.map((section) => (
          <MediaGallery key={section.key} title={section.title} items={section.items} />
        ))}
      </section>
    </>
  );
}