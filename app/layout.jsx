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
    'Senior Frontend Engineer',
    'AI-Powered Products',
    'Agentic AI',
    'React',
    'Next.js',
    'Data Visualization',
    'Dubai',
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
  name: 'Mohammed Tariq',
  jobTitle: 'Senior Frontend Engineer | AI-Powered Products Specialist',
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
  knowsAbout: [
    'React.js',
    'Next.js',
    'TypeScript',
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

export default function RootLayout({ children }) {
  return (
    <html className={`dark ${fontVars}`} lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="font-body-md text-on-background selection:bg-primary-container selection:text-on-primary-container">
        <CodeRain className="fixed inset-0 -z-10 pointer-events-none opacity-[0.18]" />
        {children}
      </body>
    </html>
  );
}
