import type { PropsWithChildren } from 'react';

type RevealSectionProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  id?: string;
}>;

export function RevealSection({ children, className = '', delay = 0, id }: RevealSectionProps) {
  return (
    <section
      id={id}
      className={`reveal-section ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </section>
  );
}