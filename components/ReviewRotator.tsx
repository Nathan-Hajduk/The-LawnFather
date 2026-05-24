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
    <section className="glass-panel-strong overflow-hidden p-6 sm:p-8">
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="section-kicker">Customer Feedback</p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">What clients are saying about The LawnFather.</h2>
        </div>
        <div className="flex items-center gap-2 text-emerald-700">
          {Array.from({ length: 5 }).map((_, starIndex) => (
            <Star key={starIndex} className="h-4 w-4 fill-current" aria-hidden="true" />
          ))}
        </div>
      </div>

      <div className="relative min-h-[180px] rounded-[1.5rem] border border-white/5 bg-white/[0.03] p-6">
        <article key={review.name} className="animate-fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-800">Customer Feedback</p>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-800">“{review.quote}”</p>
          <p className="mt-5 text-sm font-semibold text-slate-900">{review.name}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-500">5 Stars</p>
        </article>

        <div className="mt-6 flex items-center justify-between gap-4">
          <button type="button" onClick={() => setIndex((current) => (current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)} className="neon-button-secondary inline-flex items-center gap-2">
            <ChevronLeft className="h-4 w-4" aria-hidden="true" /> Previous
          </button>
          <div className="flex gap-2" aria-label="Testimonial slide indicators">
            {TESTIMONIALS.map((item, testimonialIndex) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setIndex(testimonialIndex)}
                className={`h-2.5 rounded-full transition ${testimonialIndex === index ? 'w-8 bg-emerald-300' : 'w-2.5 bg-white/25'}`}
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