import Image from 'next/image';
import UplinkForm from '../UplinkForm';
import { SOCIALS } from '../../lib/site';

export default function ContactSection({ as: Heading = 'h1', id, className = '' }) {
  const Sub = Heading === 'h1' ? 'h2' : 'h3';

  return (
    <section
      id={id}
      className={`relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop ${className}`}
    >
      {/* Header */}
      <header className="mb-16 md:mb-24">
        <div className="flex items-center gap-4 mb-4">
          <span className="w-12 h-[1px] bg-primary-fixed-dim/50" />
          <span className="font-label-caps text-label-caps text-primary-fixed-dim uppercase">
            Communication Protocol v4.0.1
          </span>
        </div>
        <Heading className="font-headline-xl text-[40px] md:text-headline-xl fit-headline-xl text-primary tracking-tighter cursor-blink">
          ESTABLISH_UPLINK
        </Heading>
        <p className="font-body-lg text-body-lg text-on-surface-variant mt-6 max-w-2xl">
          Encrypted channel secure. System waiting for outbound packet data. Input parameters to
          initiate handshake with the operator.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        {/* Terminal form */}
        <div className="lg:col-span-8 glass-panel terminal-glow p-8 md:p-12">
          <div className="flex items-center justify-between mb-8 border-b border-outline-variant/20 pb-4">
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-error/40" />
              <div className="w-2.5 h-2.5 rounded-full bg-secondary/40" />
              <div className="w-2.5 h-2.5 rounded-full bg-primary-fixed-dim/40" />
            </div>
            <div className="font-code-sm text-code-sm text-on-surface-variant/70">
              SESSION_TYPE: SECURE_UPLINK
            </div>
          </div>
          <UplinkForm />
        </div>

        {/* Side panels */}
        <aside className="lg:col-span-4 flex flex-col gap-6">
          <div className="glass-panel p-8">
            <Sub className="font-label-caps text-label-caps text-primary-fixed-dim mb-8 tracking-widest border-b border-outline-variant/20 pb-4">
              EXTERNAL_NODES
            </Sub>
            <ul className="space-y-6">
              <li>
                <a
                  className="group flex items-center justify-between hover:text-primary-fixed-dim transition-colors"
                  href={SOCIALS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-primary-fixed-dim/40 group-hover:text-primary-fixed-dim">
                      terminal
                    </span>
                    <span className="font-code-sm text-code-sm">GITHUB</span>
                  </span>
                  <span className="material-symbols-outlined text-[16px] transform group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="group flex items-center justify-between hover:text-primary-fixed-dim transition-colors"
                  href={SOCIALS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-primary-fixed-dim/40 group-hover:text-primary-fixed-dim">
                      hub
                    </span>
                    <span className="font-code-sm text-code-sm">LINKEDIN</span>
                  </span>
                  <span className="material-symbols-outlined text-[16px] transform group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div className="glass-panel p-8">
            <Sub className="font-label-caps text-label-caps text-on-surface-variant mb-6 tracking-widest">
              SYSTEM_LOC_MAPPING
            </Sub>
            <div className="h-48 w-full bg-surface-container-highest overflow-hidden relative grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700 cursor-crosshair">
              <Image
                src="/images/radar-map.jpg"
                alt="Stylized dark radar map with glowing cyan data points"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 z-10 border border-primary-fixed-dim/20 pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary-fixed-dim/20 rounded-full animate-ping" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary-fixed-dim rounded-full shadow-[0_0_10px_#00dbe9]" />
              <div className="absolute bottom-2 left-2 font-code-sm text-[10px] text-primary-fixed-dim bg-background/80 px-2 py-1">
                COORD: 25.2048° N, 55.2708° E
              </div>
            </div>
          </div>

          <div className="glass-panel p-8 bg-primary-fixed-dim/5">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary-fixed-dim">info</span>
              <div>
                <Sub className="font-label-caps text-label-caps text-on-surface mb-2">
                  AVAILABILITY_STATUS
                </Sub>
                <p className="font-code-sm text-[12px] text-on-surface-variant leading-relaxed">
                  Senior Full Stack Engineer in Dubai, UAE, currently at Suadeo. Open to full
                  stack and frontend roles, AI product work, and consulting.
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
