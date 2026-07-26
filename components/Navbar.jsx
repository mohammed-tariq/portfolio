'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

// Each entry exists twice: as an anchor on the single-page home view, and as a
// standalone route that keeps its own metadata for SEO.
const LINKS = [
  { id: 'top', route: '/', label: 'TERMINAL' },
  { id: 'projects', route: '/projects', label: 'STREAMS' },
  { id: 'about', route: '/about', label: 'BLUEPRINTS' },
  { id: 'contact', route: '/contact', label: 'RECON' },
];

const ACTIVE_CLASS =
  'font-label-caps text-label-caps text-primary-fixed-dim border-b border-primary-fixed-dim pb-1';
const IDLE_CLASS =
  'font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface transition-colors';

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    if (!isHome) return;
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isHome]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-margin-desktop py-4 bg-[#1a1a1a99] backdrop-blur-xl border-b border-outline-variant/10 shadow-[0_0_20px_rgba(0,219,233,0.05)]">
      <Link
        href="/"
        className="font-code-sm text-[20px] md:text-[24px] font-bold text-primary-fixed-dim"
        aria-label="Mohammed Tariq — home"
      >
        <span className="text-primary-fixed-dim/50">~/</span>tariq
      </Link>
      <div className="hidden md:flex gap-8 items-center">
        {LINKS.map(({ id, route, label }) => {
          const active = isHome ? activeSection === id : pathname === route;
          return (
            <Link
              key={id}
              href={isHome ? `#${id}` : `/#${id}`}
              className={active ? ACTIVE_CLASS : IDLE_CLASS}
              aria-current={active ? 'page' : undefined}
            >
              {label}
            </Link>
          );
        })}
      </div>
      <Link
        href={isHome ? '#contact' : '/#contact'}
        className="font-label-caps text-label-caps text-primary-fixed-dim border border-primary-fixed-dim/30 px-4 py-2 hover:bg-white/5 transition-all duration-300 scale-95 active:scale-90"
      >
        PING_ME
      </Link>
    </nav>
  );
}
