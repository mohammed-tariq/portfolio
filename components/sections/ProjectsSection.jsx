import Image from 'next/image';
import TechBadges from '../TechBadges';
import StatCounter from '../StatCounter';

const STATS = [
  { label: 'PEAK_CONCURRENT_USERS', value: 300, suffix: 'K+', note: 'single launch day' },
  { label: 'LAUNCH_DAY_BOOKINGS', value: 2.3, decimals: 1, prefix: '$', suffix: 'B', note: 'ex-showroom' },
  { label: 'APPLICATIONS_DEPLOYED', value: 22, suffix: '+', note: 'shipped to production' },
  { label: 'YEARS_EXPERIENCE', value: 6, suffix: '+', note: 'React / Next.js / TypeScript' },
];

export default function ProjectsSection({ as: Heading = 'h1', id, className = '' }) {
  const Sub = Heading === 'h1' ? 'h2' : 'h3';

  return (
    <section
      id={id}
      className={`max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop ${className}`}
    >
      {/* Section header */}
      <header className="mb-16 opacity-0 animate-slide-up" style={{ animationDelay: '0.1s' }}>
        <div className="flex items-center gap-4 mb-4">
          <span className="w-12 h-[1px] bg-primary-fixed-dim" />
          <span className="font-label-caps text-label-caps text-primary-fixed-dim tracking-[0.2em]">
            REPOSITORY_ARCHIVE
          </span>
        </div>
        <Heading className="font-headline-xl text-[40px] md:text-headline-xl fit-headline-xl text-on-background uppercase">
          DEPLOYED_ASSETS
        </Heading>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-4">
          High-performance protocol implementations and neural architectural designs optimized for
          the modern tech noir ecosystem.
        </p>
      </header>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-20">
        {/* Project 01 */}
        <div className="md:col-span-8 group opacity-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="glass-card relative overflow-hidden h-full flex flex-col p-8">
            <div className="flex justify-between items-start mb-12">
              <div>
                <Sub className="font-headline-lg text-headline-lg fit-headline-lg text-on-background group-hover:text-primary-fixed-dim transition-colors">
                  MAHINDRA_SCORPIO_LAUNCH
                </Sub>
              </div>
              <span className="material-symbols-outlined text-primary-fixed-dim text-4xl">
                neurology
              </span>
            </div>
            <div className="mt-auto">
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                High-availability platform for 300K+ concurrent users, processed 100K+ bookings in
                30 mins, generating $2.3B in bookings. Recognized by Google Cloud CEO for extreme
                scale performance.
              </p>
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <TechBadges items={['React', 'JavaScript', 'Google Cloud', 'Lighthouse']} />
                <span className="text-primary-fixed-dim font-code-sm whitespace-nowrap">
                  300K+ CONCURRENT_USERS
                </span>
              </div>
            </div>
            <div className="absolute -right-16 -bottom-16 opacity-5 group-hover:opacity-10 transition-opacity">
              <span
                className="material-symbols-outlined text-[200px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                grid_view
              </span>
            </div>
          </div>
        </div>

        {/* Project 02 */}
        <div className="md:col-span-4 group opacity-0 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <div className="glass-card relative overflow-hidden h-full flex flex-col p-8">
            <div className="mb-12">
              <Sub className="font-headline-md text-headline-md fit-headline-md text-on-background group-hover:text-primary-fixed-dim transition-colors">
                SUADEO_AI_INTELLIGENCE
              </Sub>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              Internal AI assistant for enterprise databases featuring natural language to
              visualization pipelines and automated data insights.
            </p>
            <div className="mt-auto pt-6 border-t border-outline-variant/20">
              <TechBadges items={['Next.js', 'TypeScript', 'Claude', 'Chart.js']} />
            </div>
          </div>
        </div>

        {/* Project 03 */}
        <div className="md:col-span-4 group opacity-0 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="glass-card h-full p-8 flex flex-col">
            <div className="w-12 h-12 bg-surface-container-high flex items-center justify-center mb-6 border border-outline-variant/20">
              <span className="material-symbols-outlined text-primary-fixed-dim">
                real_estate_agent
              </span>
            </div>
            <Sub className="font-headline-md text-headline-md fit-headline-md mb-4 uppercase">
              AIRA_AGENTIC_REAL_ESTATE
            </Sub>
            <p className="text-on-surface-variant font-body-md mb-8">
              AI real estate agent with natural language property addition and predictive analytics
              for market trends.
            </p>
            <div className="mt-auto space-y-3">
              <TechBadges items={['React', 'Python', 'Claude', 'Socket.IO']} />
              <span className="block text-primary-fixed-dim font-code-sm">
                1,700+ BROKERS_ONBOARDED
              </span>
            </div>
          </div>
        </div>

        {/* Project 04 */}
        <div className="md:col-span-8 group opacity-0 animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <div className="glass-card relative h-full flex flex-col md:flex-row overflow-hidden">
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <Sub className="font-headline-lg text-headline-lg fit-headline-lg mb-4 text-on-background">
                MARINE_FLEET_VISUALIZER
              </Sub>
              <p className="text-on-surface-variant font-body-md mb-6">
                Real-time ship tracking and geospatial data rendering for global maritime logistics
                and fleet management.
              </p>
              <TechBadges items={['React', 'Leaflet', 'Socket.IO', 'TypeScript']} />
            </div>
            <div className="md:w-1/2 relative bg-surface-container-highest min-h-[240px]">
              <Image
                src="/images/marine-blueprint.jpg"
                alt="Futuristic technical blueprint of a computer processor with glowing cyan lines"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover grayscale opacity-40 mix-blend-overlay"
              />
            </div>
          </div>
        </div>

        {/* Project 05 */}
        <div className="md:col-span-6 group opacity-0 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <div className="glass-card p-8 border-l-4 border-l-primary-fixed-dim h-full">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary-fixed-dim">
                account_balance
              </span>
              <Sub className="font-headline-md text-headline-md fit-headline-md uppercase">ICICI_BANK_PORTAL</Sub>
            </div>
            <p className="text-on-surface-variant font-body-md mb-8">
              Config-driven UI and business-requirement integrations for savings account holder
              features serving 35M+ monthly visits, plus API migration from legacy to modern
              architecture across core banking microservices.
            </p>
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <TechBadges items={['JavaScript', 'React', 'Git', 'Jira']} />
              <span className="text-primary-fixed-dim font-code-sm">35M+ MONTHLY_VISITS</span>
            </div>
          </div>
        </div>

        {/* Project 06 */}
        <div className="md:col-span-6 group opacity-0 animate-slide-up" style={{ animationDelay: '0.7s' }}>
          <div className="glass-card p-8 flex flex-col justify-between h-full">
            <div>
              <Sub className="font-headline-md text-headline-md fit-headline-md mb-2 uppercase">
                FRENCH_MINISTRY_APPS
              </Sub>
              <p className="text-on-surface-variant font-body-md">
                Internal government applications for navigating large-scale ministry databases, with
                Power BI tooling embedded for dynamic, role-based data reporting.
              </p>
            </div>
            <div className="mt-8 flex items-center justify-between gap-4 flex-wrap">
              <TechBadges items={['React', 'TypeScript', 'Power BI']} />
              <span className="text-primary-fixed-dim font-code-sm whitespace-nowrap">
                GOV_SECTOR
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div
        className="mt-32 opacity-0 animate-slide-up"
        style={{ animationDelay: '0.8s' }}
      >
        <div className="flex items-center gap-4 mb-10">
          <span className="w-12 h-[1px] bg-primary-fixed-dim" />
          <span className="font-label-caps text-label-caps text-primary-fixed-dim tracking-[0.2em]">
            IMPACT_METRICS
          </span>
          <div className="h-[1px] flex-grow bg-outline-variant/20" />
        </div>
        <div className="stat-grid">
          {STATS.map(({ label, value, decimals, prefix, suffix, note }) => (
            <div key={label} className="stat-cell">
              <div className="stat-cell__value">
                <StatCounter value={value} decimals={decimals} prefix={prefix} suffix={suffix} />
              </div>
              <div className="stat-cell__label">{label}</div>
              <p className="stat-cell__note">{note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
