type VideoPlaceholderProps = {
  title: string;
  description?: string;
  id?: string;
  className?: string;
};

export function VideoPlaceholder({ title, description = 'Replace this placeholder with a real video embed or upload later.', id, className = '' }: VideoPlaceholderProps) {
  return (
    <div
      id={id}
      className={`glass-panel relative overflow-hidden p-4 transition duration-300 hover:-translate-y-1 hover:scale-[1.01] ${className}`}
    >
      {/* Replace this frame with a real video URL, iframe, or uploaded media embed later. */}
      <div className="flex aspect-video items-center justify-center rounded-2xl border border-dashed border-emerald-300/25 bg-[radial-gradient(circle_at_top,rgba(134,239,172,0.28),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,253,248,0.86))] p-6 text-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-800">Video Placeholder</p>
          <p className="mt-3 text-xl font-semibold text-slate-900">{title}</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}