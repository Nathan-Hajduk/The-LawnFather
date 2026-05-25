import type { Metadata } from 'next';
import { RevealSection } from '@/components/RevealSection';
import { GalleryBrowser } from '@/components/GalleryBrowser';
import { MEDIA_SECTIONS, getMediaItems } from '@/lib/media';

export const metadata: Metadata = {
  title: 'Gallery | The LawnFather',
  description: 'Recent lawn care, cleanup, mulching, trimming, planting, and property improvement work from The LawnFather.'
};

export default function GalleryPage() {
  const sections = MEDIA_SECTIONS.map((section) => ({
    ...section,
    items: getMediaItems(section.itemIds)
  })).filter((section) => section.items.length > 0);

  return (
    <div className="px-4 pb-20 sm:px-6 lg:px-8">
      <RevealSection className="mx-auto max-w-7xl space-y-6">
        <p className="section-kicker">Gallery</p>
        <h1 className="max-w-3xl text-4xl font-semibold text-slate-900 sm:text-5xl">Our Work</h1>
        <p className="max-w-3xl text-base font-semibold leading-8 text-slate-700">A look at lawn care, cleanup, mulching, trimming, planting, and outdoor property services completed by The LawnFather.</p>
      </RevealSection>

      <GalleryBrowser sections={sections} />
    </div>
  );
}