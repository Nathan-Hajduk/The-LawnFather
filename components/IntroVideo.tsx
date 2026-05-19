"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, PhoneCall } from 'lucide-react';

export function IntroVideo() {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section id="intro-video" className="px-4 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="space-y-6">
          <p className="section-kicker">The LawnFather</p>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
            Meet the person behind the work.
          </h1>
          <p className="max-w-2xl text-base leading-8 text-slate-600">
            Watch the intro, see the services, and request a quote when you are ready.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/quote" className="neon-button">
              Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
            <a href="tel:9803396491" className="neon-button-secondary inline-flex items-center gap-2">
              <PhoneCall className="h-4 w-4" aria-hidden="true" /> Call Now
            </a>
          </div>
        </div>

        <div className="glass-panel-strong p-4">
          <div className="aspect-video overflow-hidden rounded-lg border border-slate-200 bg-slate-950">
            {videoFailed ? (
              <div className="flex h-full flex-col items-center justify-center p-8 text-center">
                <p className="text-xl font-semibold text-white">Intro video coming soon.</p>
                <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">
                  The quote form is ready now, and this page is ready for your generated intro MP4.
                </p>
              </div>
            ) : (
              <video
                className="h-full w-full object-cover"
                controls
                playsInline
                preload="metadata"
                poster="/media/IMG_3168.JPG"
                onError={() => setVideoFailed(true)}
              >
                <source src="/media/intro.mp4" type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
