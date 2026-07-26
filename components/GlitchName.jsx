'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const POOL = '!<>-_\\/[]{}=+*^?#01ABCDEF';
const ACTIVE_CHARS = 3; // how many characters flicker at once
const TICK_MS = 55;
const TICKS = 14;

// Light decode effect: the name is fully readable at all times — only a few
// characters flicker, and only on first load and on hover. Never idles.
export default function GlitchName({ first, last, className = '' }) {
  const full = `${first} ${last}`;
  const chars = [...full];
  const lastStart = first.length + 1;

  // `null` = fully resolved. Otherwise the indices currently scrambling.
  const [active, setActive] = useState(null);
  const [, setSeed] = useState(0);
  const timer = useRef(null);
  const running = useRef(false);

  const stop = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    timer.current = null;
    running.current = false;
    setActive(null);
  }, []);

  const run = useCallback(() => {
    if (running.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    running.current = true;

    let ticks = 0;
    timer.current = setInterval(() => {
      const next = new Set();
      while (next.size < ACTIVE_CHARS) {
        const i = Math.floor(Math.random() * chars.length);
        if (chars[i] !== ' ') next.add(i);
      }
      setActive(next);
      setSeed((s) => s + 1);
      if (++ticks > TICKS) stop();
    }, TICK_MS);
  }, [chars.length, stop]);

  // Decode once on arrival, then sit still until hovered.
  useEffect(() => {
    run();
    return stop;
  }, [run, stop]);

  return (
    <span
      className={className}
      onMouseEnter={run}
      aria-hidden="true"
      style={{ fontFamily: 'var(--font-name), ui-monospace, monospace' }}
    >
      {chars.map((ch, i) => {
        if (ch === ' ') return ' ';
        const scrambling = active?.has(i);
        const isLast = i >= lastStart;
        const shown = scrambling ? POOL[Math.floor(Math.random() * POOL.length)] : ch;
        return (
          <span
            key={i}
            className={
              scrambling
                ? 'text-[#7ef4fb]'
                : isLast
                  ? 'text-primary glow-text'
                  : 'text-on-surface'
            }
          >
            {shown}
          </span>
        );
      })}
    </span>
  );
}
