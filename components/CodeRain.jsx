'use client';

import { useEffect, useRef } from 'react';

const GLYPHS = '01{}[]()<>/\\=+-*&|!?$#@_;:.abcdefABCDEF'.split('');

// Matrix-style falling code. Runs at a capped frame rate on a 2D canvas so the
// ambient background costs a fraction of a full-rate animation.
export default function CodeRain({ className = '' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    let width = 0;
    let height = 0;
    let fontSize = 14;
    let drops = [];
    let raf = null;
    let lastFrame = 0;
    const FRAME_MS = 1000 / 20;

    function setup() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      if (!width || !height) return;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      fontSize = width < 640 ? 12 : 14;
      const columns = Math.ceil(width / fontSize);
      drops = Array.from({ length: columns }, () => Math.random() * -60);

      ctx.fillStyle = '#131313';
      ctx.fillRect(0, 0, width, height);
    }

    function drawFrame() {
      // Translucent wash over the previous frame leaves the fading trail.
      ctx.fillStyle = 'rgba(19, 19, 19, 0.09)';
      ctx.fillRect(0, 0, width, height);
      ctx.font = `${fontSize}px "JetBrains Mono", ui-monospace, monospace`;
      ctx.textBaseline = 'top';

      for (let i = 0; i < drops.length; i++) {
        const glyph = GLYPHS[(Math.random() * GLYPHS.length) | 0];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        if (y > 0) {
          // Leading glyph is brightest, giving each column a visible head.
          ctx.fillStyle = Math.random() < 0.18 ? '#7ef4fb' : '#00dbe9';
          ctx.fillText(glyph, x, y);
        }

        if (y > height && Math.random() > 0.975) drops[i] = Math.random() * -20;
        else drops[i] += 1;
      }
    }

    function loop(now) {
      raf = requestAnimationFrame(loop);
      if (now - lastFrame < FRAME_MS) return;
      lastFrame = now;
      drawFrame();
    }

    function start() {
      if (raf != null || reduceMotion.matches || document.hidden) return;
      lastFrame = 0;
      raf = requestAnimationFrame(loop);
    }

    function stop() {
      if (raf != null) cancelAnimationFrame(raf);
      raf = null;
    }

    function onVisibility() {
      if (document.hidden) stop();
      else start();
    }

    function onMotionChange() {
      stop();
      setup();
      if (reduceMotion.matches) drawFrame();
      else start();
    }

    const ro = new ResizeObserver(() => {
      stop();
      setup();
      if (reduceMotion.matches) drawFrame();
      else start();
    });
    ro.observe(canvas);

    setup();
    if (reduceMotion.matches) drawFrame();
    else start();

    document.addEventListener('visibilitychange', onVisibility);
    reduceMotion.addEventListener('change', onMotionChange);

    return () => {
      stop();
      ro.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      reduceMotion.removeEventListener('change', onMotionChange);
    };
  }, []);

  return (
    <div className={className} aria-hidden="true">
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
    </div>
  );
}
