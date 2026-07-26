'use client';

import { useEffect, useState } from 'react';

const TYPE_MS = 55;
const DELETE_MS = 28;
const HOLD_MS = 1800;
const BETWEEN_MS = 400;

// Typewriter cycle through roles. Hidden from assistive tech — the hero renders
// a static, complete title for screen readers and crawlers alongside this.
export default function RotatingTitle({ roles, className = '' }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(roles[0]);
  const [phase, setPhase] = useState('hold');
  const [animate, setAnimate] = useState(false);

  // Start static so server and first client render agree, then opt in to motion.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setAnimate(!mq.matches);
    const onChange = () => setAnimate(!mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (!animate) return;
    const current = roles[index];
    let delay;

    if (phase === 'typing') {
      if (text === current) {
        delay = HOLD_MS;
        return schedule(() => setPhase('deleting'), delay);
      }
      return schedule(() => setText(current.slice(0, text.length + 1)), TYPE_MS);
    }

    if (phase === 'deleting') {
      if (text === '') {
        return schedule(() => {
          setIndex((i) => (i + 1) % roles.length);
          setPhase('typing');
        }, BETWEEN_MS);
      }
      return schedule(() => setText(text.slice(0, -1)), DELETE_MS);
    }

    // 'hold' is the initial state: show the first role, then start cycling.
    return schedule(() => setPhase('deleting'), HOLD_MS);

    function schedule(fn, ms) {
      const t = setTimeout(fn, ms);
      return () => clearTimeout(t);
    }
  }, [animate, phase, text, index, roles]);

  return (
    <span className={className} aria-hidden="true">
      <span className="text-primary-fixed-dim/50">&gt;&nbsp;</span>
      <span className="text-primary-fixed-dim">{text}</span>
      <span
        className="inline-block w-[0.55em] h-[1.05em] -mb-[0.15em] ml-[2px] bg-primary-fixed-dim"
        style={animate ? { animation: 'blink 1s step-end infinite' } : undefined}
      />
    </span>
  );
}
