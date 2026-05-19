type ImagePlaceholderProps = {
  title: string;
  description?: string;
  className?: string;
};

export function ImagePlaceholder({ title, description = 'Replace this placeholder with a real image or gallery embed later.', className = '' }: ImagePlaceholderProps) {
  return (
    <div className={`glass-panel relative overflow-hidden p-4 transition duration-300 hover:-translate-y-1 hover:scale-[1.01] ${className}`}>
      {/* Replace this frame with a real before/after image URL or image component later. */}
      <div className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-dashed border-emerald-300/25 bg-[radial-gradient(circle_at_top,rgba(134,239,172,0.25),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.95),rgba(248,253,248,0.85))] p-6 text-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-800">Work Showcase Placeholder</p>
          <p className="mt-3 text-xl font-semibold text-slate-900">{title}</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}