import type { Metadata } from 'next';
import { CTASection } from '@/components/CTASection';
import { IntroVideo } from '@/components/IntroVideo';

export const metadata: Metadata = {
  title: 'Intro | The LawnFather',
  description: 'Meet The LawnFather, then request a lawn care or landscaping quote.'
};

export default function IntroPage() {
  return (
    <div>
      <IntroVideo />
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <CTASection
            title="Need lawn care, cleanup, or property help?"
            description="Send the job details and I will follow up with the next step."
            primaryHref="/quote"
            primaryLabel="Request a Quote"
            secondaryHref="/services"
            secondaryLabel="View Services"
          />
        </div>
      </section>
    </div>
  );
}
