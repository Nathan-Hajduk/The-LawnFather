import Link from 'next/link';

type CTASectionProps = {
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CTASection({ title, description, primaryHref, primaryLabel, secondaryHref, secondaryLabel }: CTASectionProps) {
  return (
    <section className="glass-panel-strong relative overflow-hidden p-8 sm:p-10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.5),transparent_24%)]" />
      <div className="max-w-3xl">
        <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">{title}</h2>
        <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href={primaryHref} className="neon-button">
            {primaryLabel}
          </Link>
          {secondaryHref && secondaryLabel ? (
            <Link href={secondaryHref} className="neon-button-secondary">
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}