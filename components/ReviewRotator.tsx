"use client";

import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import { TESTIMONIALS } from '@/lib/siteContent';

export function ReviewRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  const review = TESTIMONIALS[index];

  return (
    <section id="reviews" className="overflow-hidden rounded-[2rem] border border-[var(--color-accent)]/15 bg-[var(--color-surface-strong)] p-6 shadow-[0_18px_50px_rgba(48,40,32,0.08)] sm:p-8">
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="section-kicker">Reviews</p>
          <h2 className="mt-3 text-2xl font-semibold text-[var(--color-text)] sm:text-3xl">Trusted by Local Homeowners</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--color-muted)] sm:text-base">
            Real recommendations from customers throughout the Charlotte area.
          </p>
        </div>
        <div className="flex items-center gap-2 text-[var(--color-accent)]">
          {Array.from({ length: 5 }).map((_, starIndex) => (
            <Star key={starIndex} className="h-4 w-4 fill-current" aria-hidden="true" />
          ))}
        </div>
      </div>

      <div className="relative min-h-[220px] rounded-[1.5rem] border border-[var(--color-primary)]/10 bg-[rgba(255,255,255,0.74)] p-6">
        <article key={`${review.name}-${review.postedAt}-${index}`} className="animate-fade-up">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-primary)]">Customer recommendations from Nextdoor</p>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--color-text)]">“{review.quote}”</p>
          <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[var(--color-text)]">
            <span>{review.name}</span>
            <span className="text-[var(--color-muted)]">•</span>
            <span className="text-[var(--color-muted)]">{review.area}</span>
          </div>
          <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">{review.postedAt}</p>
          <div className="mt-3 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[var(--color-primary)]">
            {review.rating ? (
              <>
                <span className="flex items-center gap-1">
                  {Array.from({ length: review.rating }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                  ))}
                </span>
                <span>5 Stars</span>
              </>
            ) : (
              <span>{review.recommendationLabel}</span>
            )}
          </div>
        </article>

        <div className="mt-6 flex items-center justify-between gap-4">
          <button type="button" onClick={() => setIndex((current) => (current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)} className="neon-button-secondary inline-flex items-center gap-2">
            <ChevronLeft className="h-4 w-4" aria-hidden="true" /> Previous
          </button>
          <div className="flex gap-2" aria-label="Testimonial slide indicators">
            {TESTIMONIALS.map((item, testimonialIndex) => (
              <button
                key={`${item.name}-${item.postedAt}-${testimonialIndex}`}
                type="button"
                onClick={() => setIndex(testimonialIndex)}
                className={`h-2.5 rounded-full transition ${testimonialIndex === index ? 'w-8 bg-[var(--color-accent)]' : 'w-2.5 bg-[var(--color-primary)]/20'}`}
                aria-label={`Show testimonial from ${item.name}`}
              />
            ))}
          </div>
          <button type="button" onClick={() => setIndex((current) => (current + 1) % TESTIMONIALS.length)} className="neon-button-secondary inline-flex items-center gap-2">
            Next <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}