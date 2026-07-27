import './globals.css';
import { Inter, JetBrains_Mono, Space_Grotesk, Share_Tech_Mono } from 'next/font/google';
import CodeRain from '../components/CodeRain';
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  SOCIALS,
} from '../lib/site';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

// Display face for headings. Space Grotesk's tighter apertures and distinctive
// caps give the SCREAMING_SNAKE_CASE titles more character than a neutral
// grotesque, and it sits naturally beside JetBrains Mono.
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-display',
});

// Hero name only. Monospaced so the decode animation can swap characters
// without the name changing width.
const shareTechMono = Share_Tech_Mono({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-name',
});

// Material Symbols is not in next/font's catalog; it is self-hosted from
// /public/fonts via an @font-face rule in globals.css.
const fontVars = `${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} ${shareTechMono.variable}`;

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: '%s | Mohammed Tariq',
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'Mohammed Tariq',
    'full stack developer Dubai',
    'MERN stack developer Dubai',
    'React developer Dubai',
    'Next.js developer UAE',
    'Node.js developer Dubai',
    'senior full stack engineer Dubai',
    'hire full stack developer Dubai',
    'AI product engineer Dubai',
    'agentic AI developer',
  ],
  authors: [{ name: 'Mohammed Tariq' }],
  creator: 'Mohammed Tariq',
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#131313',
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/#person`,
  name: 'Mohammed Tariq',
  jobTitle: 'Senior Full Stack Engineer',
  description: SITE_DESCRIPTION,
  email: `mailto:${CONTACT_EMAIL}`,
  telephone: CONTACT_PHONE,
  url: SITE_URL,
  sameAs: [SOCIALS.github, SOCIALS.linkedin],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dubai',
    addressCountry: 'AE',
  },
  worksFor: {
    '@type': 'Organization',
    name: 'Suadeo',
  },
  alumniOf: [
    {
      '@type': 'CollegeOrUniversity',
      name: 'Manipal Institute of Technology',
    },
  ],
  knowsLanguage: 'en',
  // Occupation + location are what surface this profile for "frontend
  // developer Dubai"-style queries and in hiring-intent knowledge panels.
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Senior Full Stack Engineer',
    occupationalCategory: '15-1254.00', // O*NET: Web Developers
    occupationLocation: {
      '@type': 'City',
      name: 'Dubai',
      address: { '@type': 'PostalAddress', addressLocality: 'Dubai', addressCountry: 'AE' },
    },
    skills:
      'React.js, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, TypeScript, REST APIs, WebSockets, Agentic AI, RAG, Data Visualization',
  },
  workLocation: {
    '@type': 'Place',
    address: { '@type': 'PostalAddress', addressLocality: 'Dubai', addressCountry: 'AE' },
  },
  homeLocation: {
    '@type': 'Place',
    address: { '@type': 'PostalAddress', addressLocality: 'Dubai', addressCountry: 'AE' },
  },
  knowsAbout: [
    'Full Stack Development',
    'MERN Stack',
    'React.js',
    'Next.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'PostgreSQL',
    'REST API Design',
    'WebSockets',
    'TypeScript',
    'React Native',
    'Agentic AI',
    'RAG',
    'LLM API Integration',
    'Conversational UI',
    'Data Visualization',
    'Geospatial Data Rendering',
    'Micro-Frontend Architecture',
    'Web Accessibility',
  ],
};

// Marks the site as a personal profile rather than a generic website, which is
// how search engines tie the pages to the Person entity above.
const profileJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  url: SITE_URL,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  inLanguage: 'en',
  mainEntity: { '@id': `${SITE_URL}/#person` },
};

export default function RootLayout({ children }) {
  return (
    <html className={`dark ${fontVars}`} lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
        />
      </head>
      <body className="font-body-md text-on-background selection:bg-primary-container selection:text-on-primary-container">
        <CodeRain className="fixed inset-0 -z-10 pointer-events-none opacity-[0.18]" />
        {children}
      </body>
    </html>
  );
}
