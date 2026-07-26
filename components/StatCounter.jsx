'use client';

import { useEffect, useRef, useState } from 'react';

const DURATION = 1600;

function format(value, decimals) {
  return decimals ? value.toFixed(decimals) : Math.round(value).toLocaleString('en-US');
}

// Counts up once, the first time the stat scrolls into view. The final value is
// rendered server-side inside an sr-only node, so screen readers and crawlers
// never see the intermediate numbers.
export default function StatCounter({ value, decimals = 0, prefix = '', suffix = '' }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(value);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = ref.current;
    if (!el) return;

    setShown(0);
    setAnimate(true);

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        let raf;
        const tick = (now) => {
          const t = Math.min((now - start) / DURATION, 1);
          // easeOutExpo — fast start, long settle, which reads as "counting up".
          const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
          setShown(value * eased);
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="stat-value">
      <span aria-hidden={animate ? 'true' : undefined}>
        {prefix}
        {format(shown, decimals)}
        {suffix}
      </span>
      {animate && (
        <span className="sr-only">
          {prefix}
          {format(value, decimals)}
          {suffix}
        </span>
      )}
    </span>
  );
}
