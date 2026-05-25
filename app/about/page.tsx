import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CTASection } from '@/components/CTASection';
import { ReviewRotator } from '@/components/ReviewRotator';
import { RevealSection } from '@/components/RevealSection';
import { PROMISE_CARDS } from '@/lib/siteContent';
import { getAboutUsMediaItems } from '@/lib/media';

export const metadata: Metadata = {
  title: 'About Us | The LawnFather',
  description: 'Learn about The LawnFather’s mission to provide reliable, affordable, and professional property services.'
};

export default function AboutPage() {
  const aboutMediaItems = getAboutUsMediaItems();

  return (
    <div className="px-4 pb-20 sm:px-6 lg:px-8">
      <RevealSection className="mx-auto max-w-7xl space-y-6">
        <p className="section-kicker">About Us</p>
        <h1 className="max-w-3xl text-4xl font-semibold text-slate-900 sm:text-5xl">About The LawnFather</h1>
        <div className="max-w-4xl space-y-4 text-base font-bold leading-8 text-slate-950">
          <p>The LawnFather was built from discipline, faith, family, and years of honest work.</p>
          <p>My name is Nathan Hajduk. I was born in Garwood, New Jersey, and moved to Charlotte, North Carolina when I was five years old. Since then, North Carolina has been home. I grew up in a Christian household where character, responsibility, humility, and hard work were not just talked about, they were expected. Those values shaped the way I carry myself, the way I treat people, and the standard I bring to every job.</p>
          <p>Before The LawnFather became a business, landscaping was part of my life every week. My dad, my brother, and I maintained the two acres of land our family lived on. That meant mowing, weed whacking, weeding, mulching, trimming bushes, gardening, hauling materials, cleaning up outdoor spaces, and doing the same type of property work I now offer through my business. It taught me patience, precision, grit, and the importance of doing a job right even when nobody is watching.</p>
          <p>That same work ethic carried into my athletic and academic journey. I originally attended Presbyterian College in Clinton, South Carolina, where I played Division I football for the Blue Hose. I later transferred to Long Island University on a full football scholarship, continuing my Division I career while earning my Bachelor of Science in Computer Science.</p>
          <p>While I was in school on Long Island, I started doing landscaping work to make extra money. What began as a side hustle quickly started to grow because clients noticed the difference. I showed up on time, communicated clearly, paid attention to the details, and treated every property with respect. My client base began to scale because people could see that my work was not careless or perfunctory. It was intentional, reliable, and done with pride.</p>
          <p>Now, as a sole proprietor and entrepreneur, I created The LawnFather to bring that same standard to every customer I serve. Whether it is mowing, mulching, weeding, bush trimming, gardening, power washing, cleanup work, or small outdoor projects, my goal is simple: provide dependable service, clean results, and a level of professionalism people can trust.</p>
          <p>The LawnFather is more than a landscaping business. It is a reflection of where I come from, how I was raised, and the standard I believe every customer deserves.</p>
          <p>We do not just take care of lawns. We make your yard an offer it cannot refuse.</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/quote" className="neon-button">
            Ready to transform your property? Get a quote. <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </RevealSection>

      <section className="mx-auto mt-14 max-w-7xl">
        <div className="grid gap-4 sm:grid-cols-2">
          {aboutMediaItems.map((item) => (
            <article key={item.id} className="glass-panel overflow-hidden p-3">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-lg">
                <div className="relative aspect-[4/3] w-full">
                  <Image src={item.src} alt={item.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-7xl grid gap-6 lg:grid-cols-2">
        <div className="glass-panel-strong p-6 sm:p-8">
          <p className="section-kicker">Our Promise</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {PROMISE_CARDS.map((item) => (
              <article key={item} className="rounded-2xl border border-white/5 bg-white/[0.03] p-4">
                <p className="text-lg font-semibold text-slate-900">{item}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="glass-panel-strong p-6 sm:p-8">
          <p className="section-kicker">Gallery</p>
          <p className="mt-4 text-base font-bold leading-8 text-slate-900">View Recent Work</p>
          <p className="mt-2 text-base leading-8 text-slate-700">See examples of the care, detail, and effort that go into each property.</p>
          <div className="mt-6">
            <Link href="/gallery" className="neon-button">
              Open Gallery <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-7xl">
        <CTASection
          title="Ready for a cleaner property?"
          description="Tell me what your property needs and I’ll follow up with next steps."
          primaryHref="/quote"
          primaryLabel="Get a Free Quote"
          secondaryHref="/gallery"
          secondaryLabel="View Recent Work"
        />
      </section>

      <section className="mx-auto mt-20 max-w-7xl">
        <ReviewRotator />
      </section>
    </div>
  );
}