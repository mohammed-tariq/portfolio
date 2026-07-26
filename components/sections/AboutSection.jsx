import Image from 'next/image';
import SkillCluster from '../SkillCluster';
import { SKILL_ICONS } from '../../lib/skill-icons';

const TIMELINE = [
  {
    period: '11/2025 – PRESENT',
    title: 'SENIOR_FRONTEND_ENGINEER @ SUADEO',
    body: 'Focus on French sovereign Data & AI platform, AI-powered visual intelligence, and real-time marine fleet visualization in Dubai, UAE.',
    current: true,
    logTone: 'text-primary-fixed-dim',
    logs: [
      ['[LOG]', 'AI_VISUAL_INTEL: ACTIVE'],
      ['[LOG]', 'FLEET_VIZ: REAL_TIME'],
      ['[LOG]', 'SOVEREIGN_DATA_SYNC: OK'],
    ],
  },
  {
    period: '08/2024 – 10/2025',
    title: 'TECH_LEAD_FRONTEND @ INDIASSETZ',
    body: 'Spearheaded AIRA (AI Real Estate Agent), conversational UI, and broker UX research in India.',
    logTone: 'text-secondary',
    logs: [
      ['[AGENT]', 'AIRA_CORE: DEPLOYED'],
      ['[UX]', 'BROKER_RESEARCH: COMPLETE'],
      ['[UI]', 'CONVERSATIONAL_FLOW: STABLE'],
    ],
  },
  {
    period: '02/2022 – 07/2024',
    title: 'FRONTEND_DEVELOPER @ NIVEUS',
    body: 'Engineered the Mahindra Scorpio launch platform (300K+ concurrent users, $2.3B bookings) and ICICI Bank online banking.',
    logTone: 'text-on-surface-variant/40',
    logs: [
      ['[SYS]', 'SCORPIO_LAUNCH: SUCCESS'],
      ['[SYS]', 'CONCURRENT_USERS: 300K+'],
      ['[SYS]', 'BANKING_PORTAL: ONLINE'],
    ],
  },
  {
    period: '12/2020 – 02/2022',
    title: 'FRONTEND_DEVELOPER @ PRESENOVA',
    body: 'Built the Edunovas EdTech platform for scalable digital learning in India.',
    logTone: 'text-secondary',
    logs: [
      ['[EDTECH]', 'EDUNOVAS_CORE: LIVE'],
      ['[DEV]', 'COMPONENT_LIB: BUILT'],
      ['[SYS]', 'LEARNING_LMS: NOMINAL'],
    ],
  },
];

export default function AboutSection({ as: Heading = 'h1', id, className = '', imagePriority = false }) {
  const Sub = Heading === 'h1' ? 'h2' : 'h3';
  const EntryHeading = Heading === 'h1' ? 'h3' : 'h4';

  return (
    <section
      id={id}
      className={`relative max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop ${className}`}
    >
      {/* Identity */}
      <div className="mb-32">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-1/2">
            <Heading className="font-headline-xl text-[40px] md:text-headline-xl fit-headline-xl mb-6 glow-text">
              SYSTEM_ARCHITECT
            </Heading>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Synthesizing complex digital ecosystems through high-performance engineering and
              avant-garde interface design. Specializing in low-latency architectures and immersive
              visual computation.
            </p>
          </div>
          <div className="relative w-full md:w-1/2 aspect-video glass-card overflow-hidden group">
            <Image
              src="/images/server-room.jpg"
              alt="Futuristic server room with cyan glow, tech noir aesthetic"
              fill
              priority={imagePriority}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Technical stack */}
      <div className="mb-40">
        <div className="flex items-center gap-4 mb-4">
          <Sub className="font-label-caps text-label-caps text-primary-fixed-dim tracking-widest shrink-0">
            TECHNICAL_STACK
          </Sub>
          <div className="h-[1px] flex-grow bg-outline-variant/30" />
          <span className="hidden sm:inline shrink-0 font-code-sm text-code-sm text-on-surface-variant opacity-70">
            {SKILL_ICONS.length} MODULES
          </span>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant/80 mb-4 max-w-xl">
          Hover any module to identify it.
        </p>
        <SkillCluster />
      </div>

      {/* Timeline */}
      <div className="relative">
        <div className="flex items-center gap-4 mb-16">
          <Sub className="font-headline-lg text-headline-lg fit-headline-lg glow-text">
            SEQUENCE_OF_OPERATIONS
          </Sub>
          <div className="h-[1px] flex-grow bg-outline-variant/30" />
          <span className="hidden sm:inline shrink-0 font-code-sm text-code-sm text-on-surface-variant opacity-70">
            v2.4.0_LOGS
          </span>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] timeline-line transform -translate-x-1/2" />
          <div className="space-y-24">
            {TIMELINE.map((entry, i) => {
              const flip = i % 2 === 1;
              return (
                <div
                  key={entry.title}
                  className={`reveal-entry relative flex flex-col gap-8 items-center md:items-start ${
                    flip ? 'md:flex-row-reverse' : 'md:flex-row'
                  }`}
                >
                  <div className={`md:w-1/2 ${flip ? 'md:text-left md:pl-12' : 'md:text-right md:pr-12'}`}>
                    <span className="font-code-sm text-code-sm text-primary-fixed-dim bg-primary/5 px-2 py-1 border border-primary/10 mb-2 inline-block uppercase">
                      {entry.period}
                    </span>
                    <EntryHeading className="font-headline-md text-headline-md fit-headline-md text-on-surface mb-2">
                      {entry.title}
                    </EntryHeading>
                    <p className="font-body-md text-body-md text-on-surface-variant">{entry.body}</p>
                  </div>
                  <div
                    className={`absolute left-0 md:left-1/2 w-4 h-4 rounded-full transform -translate-x-1/2 mt-2 border-4 border-background ${
                      entry.current
                        ? 'bg-primary-fixed-dim shadow-[0_0_15px_#00dbe9]'
                        : 'bg-outline-variant'
                    }`}
                  />
                  <div className={`md:w-1/2 hidden md:block ${flip ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div
                      className={`glass-card p-4 font-code-sm text-code-sm text-on-surface-variant ${
                        flip
                          ? 'border-r-2 border-r-outline-variant text-right'
                          : `border-l-2 ${entry.current ? 'border-l-primary-fixed-dim' : 'border-l-outline-variant'}`
                      }`}
                    >
                      {entry.logs.map(([tag, text], j) => (
                        <span key={tag + text}>
                          <span className={entry.logTone}>{tag}</span> {text}
                          {j < entry.logs.length - 1 && <br />}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Decorative background */}
      <div className="fixed top-0 right-0 -z-10 opacity-10 pointer-events-none">
        <svg fill="none" height="800" viewBox="0 0 600 800" width="600" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 1L599 150M1 200L599 350M1 400L599 550M1 600L599 750"
            stroke="#00dbe9"
            strokeWidth="0.5"
          />
          <circle cx="300" cy="400" r="200" stroke="#00dbe9" strokeDasharray="10 10" strokeWidth="0.5" />
        </svg>
      </div>
    </section>
  );
}
