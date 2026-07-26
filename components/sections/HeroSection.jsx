import Link from 'next/link';
import ShaderBackground from '../ShaderBackground';
import TechCore from '../TechCoreLazy';
import RotatingTitle from '../RotatingTitle';

const ROLES = [
  'SENIOR_FRONTEND_ENGINEER',
  'SYSTEM_ARCHITECT',
  'AI_PRODUCT_ENGINEER',
  'DATA_VIZ_SPECIALIST',
  'AGENTIC_AI_DEVELOPER',
];

const CARDS = [
  {
    icon: 'monitoring',
    title: '01. PROVEN_AT_SCALE',
    body: '300K+ concurrent users and 100K+ bookings in the first 30 minutes of a single launch day.',
  },
  {
    icon: 'psychology',
    title: '02. AI_IN_PRODUCTION',
    body: 'Agentic assistants, voice interfaces, and natural-language dashboards, shipped to real users.',
  },
  {
    icon: 'verified_user',
    title: '03. DELIVERED_FOR',
    body: 'Platforms built for Mahindra, ICICI Bank, Suadeo, and the French Ministry.',
  },
];

export default function HeroSection({ id }) {
  return (
    <section
      id={id}
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background shader */}
      <ShaderBackground className="absolute inset-0 w-full h-full opacity-40" />

      {/* Decorative dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: 'radial-gradient(#00dbe9 0.5px, transparent 0.5px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Hero content */}
      <div className="relative z-10 w-full max-w-container-max px-margin-mobile md:px-margin-desktop flex flex-col items-center text-center pt-32 pb-16">
        {/* 3D Tech Core */}
        <div className="w-64 h-64 md:w-80 md:h-80 mb-12 relative group">
          <div className="absolute inset-0 bg-primary-fixed-dim/10 rounded-full blur-3xl group-hover:bg-primary-fixed-dim/20 transition-all duration-700" />
          <TechCore className="w-full h-full" />
        </div>

        {/* Text content */}
        <div className="max-w-3xl space-y-6">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4 opacity-0 animate-fade-up">
            <span className="w-8 md:w-12 h-[1px] bg-primary-fixed-dim/60" />
            <span className="font-label-caps text-label-caps text-primary-fixed-dim tracking-[0.2em]">
              OPERATOR_ONLINE
            </span>
            <span className="w-8 md:w-12 h-[1px] bg-primary-fixed-dim/60" />
          </div>

          <h1 className="font-headline-xl text-[44px] sm:text-[64px] md:text-[80px] leading-[0.95] tracking-tight opacity-0 animate-fade-up">
            {/* Screen readers and crawlers get the complete, static title. */}
            <span className="sr-only">
              Mohammed Tariq — Senior Frontend Engineer and AI-Powered Products Specialist
            </span>
            <span aria-hidden="true" className="text-on-surface">
              MOHAMMED <span className="text-primary glow-text">TARIQ</span>
            </span>
          </h1>

          {/* Cycling role line */}
          <div className="flex items-center justify-center min-h-[3rem] md:min-h-[2.5rem] opacity-0 animate-fade-up delay-100">
            <RotatingTitle
              roles={ROLES}
              className="font-code-sm text-[15px] sm:text-[18px] md:text-[22px] tracking-tight"
            />
          </div>

          <p className="font-body-md text-[15px] md:text-[16px] text-on-surface-variant/90 max-w-xl mx-auto text-balance opacity-0 animate-fade-up delay-100">
            Making complicated things feel simple.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 opacity-0 animate-fade-up delay-200">
            <Link
              href="#projects"
              className="group relative bg-primary-fixed-dim text-on-primary-fixed font-label-caps text-label-caps px-8 py-4 flex items-center justify-center gap-2 hover:bg-primary-container active:scale-95 transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">grid_view</span>
              VIEW_WORK
              <span className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-primary-fixed-dim" />
              <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-primary-fixed-dim" />
            </Link>
            <Link
              href="#contact"
              className="group relative border border-primary-fixed-dim/40 text-primary-fixed-dim font-label-caps text-label-caps px-8 py-4 flex items-center justify-center gap-2 hover:border-primary-fixed-dim hover:bg-primary-fixed-dim/5 active:scale-95 transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">terminal</span>
              GET_IN_TOUCH
              <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>

        {/* Technical detail grid */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-gutter w-full max-w-4xl opacity-0 animate-fade-up delay-300">
          {CARDS.map(({ icon, title, body }) => (
            <div key={title} className="glass-panel p-6 text-left glow-hover transition-all">
              <div className="text-primary-fixed-dim mb-4">
                <span className="material-symbols-outlined">{icon}</span>
              </div>
              <div className="font-label-caps text-label-caps text-primary mb-2">{title}</div>
              <p className="font-code-sm text-code-sm text-on-tertiary-container">{body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative sidebar info */}
      <div className="hidden lg:block absolute left-margin-desktop bottom-margin-desktop space-y-4 opacity-40">
        <div className="font-code-sm text-code-sm flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-primary-fixed-dim animate-pulse" />
          SYSTEM_STATUS: NOMINAL
        </div>
        <div className="font-code-sm text-code-sm flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-primary-fixed-dim" />
          UPTIME: 99.98%
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-50 hidden md:flex">
        <div className="font-label-caps text-label-caps">SCROLL</div>
        <div className="w-px h-12 bg-gradient-to-b from-primary-fixed-dim to-transparent" />
      </div>
    </section>
  );
}
