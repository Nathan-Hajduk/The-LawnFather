"use client";

import { usePathname } from 'next/navigation';

export function PageWatermark() {
  const pathname = usePathname();

  if (pathname === '/') {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 hidden bg-no-repeat opacity-[0.05] md:block"
      style={{
        backgroundImage: "url('/media/logo.png')",
        backgroundPosition: 'center 15rem',
        backgroundSize: 'min(96vw, 72rem)'
      }}
    />
  );
}