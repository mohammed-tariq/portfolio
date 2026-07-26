'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

// Three.js is ~120 kB and purely decorative. It loads in its own chunk, and
// only once the browser is idle, so it never competes with first paint.
const TechCore = dynamic(() => import('./TechCore'), { ssr: false });

export default function TechCoreLazy(props) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window.requestIdleCallback !== 'function') {
      const t = setTimeout(() => setReady(true), 200);
      return () => clearTimeout(t);
    }
    const handle = window.requestIdleCallback(() => setReady(true), { timeout: 2000 });
    return () => window.cancelIdleCallback(handle);
  }, []);

  if (!ready) return <div className={props.className} aria-hidden="true" />;
  return <TechCore {...props} />;
}
