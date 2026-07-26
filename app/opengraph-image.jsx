import { ImageResponse } from 'next/og';

export const alt = 'Mohammed Tariq — Senior Frontend Engineer in Dubai, UAE';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Social preview card. Rendered at build time, so sharing the site on LinkedIn,
// WhatsApp or X shows a branded card instead of a blank box.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: '#131313',
          backgroundImage:
            'radial-gradient(circle at 78% 22%, rgba(0,219,233,0.22), transparent 55%)',
          padding: '76px 84px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 30 }}>
          <div style={{ width: 54, height: 2, background: '#00dbe9' }} />
          <div style={{ color: '#00dbe9', fontSize: 25, letterSpacing: 5, fontWeight: 700 }}>
            BASED IN DUBAI, UAE
          </div>
        </div>

        <div style={{ display: 'flex', color: '#e5e2e1', fontSize: 92, fontWeight: 800, lineHeight: 1.05 }}>
          MOHAMMED&nbsp;<span style={{ color: '#7ef4fb' }}>TARIQ</span>
        </div>

        <div style={{ display: 'flex', color: '#b9cacb', fontSize: 38, marginTop: 22, fontWeight: 500 }}>
          Senior Frontend Engineer · React, Next.js &amp; AI
        </div>

        <div style={{ display: 'flex', gap: 14, marginTop: 46, flexWrap: 'wrap' }}>
          {['300K+ CONCURRENT USERS', '$2.3B LAUNCH DAY', '6+ YEARS'].map((t) => (
            <div
              key={t}
              style={{
                display: 'flex',
                color: '#00dbe9',
                fontSize: 22,
                letterSpacing: 2,
                border: '1px solid rgba(0,219,233,0.45)',
                padding: '10px 20px',
                fontWeight: 700,
              }}
            >
              {t}
            </div>
          ))}
        </div>

        <div
          style={{
            display: 'flex',
            position: 'absolute',
            bottom: 54,
            right: 84,
            color: '#00dbe9',
            fontSize: 30,
            fontWeight: 700,
          }}
        >
          ~/findtariq.com
        </div>
      </div>
    ),
    size
  );
}
