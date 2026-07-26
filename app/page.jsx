import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RevealOnScroll from '../components/RevealOnScroll';
import HeroSection from '../components/sections/HeroSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import AboutSection from '../components/sections/AboutSection';
import ContactSection from '../components/sections/ContactSection';

export const metadata = {
  // Full title, so the "| Mohammed Tariq" template is not appended twice.
  title: {
    absolute: 'Mohammed Tariq — Senior Frontend Engineer in Dubai | React, Next.js & AI',
  },
  description:
    'Senior Frontend Engineer based in Dubai, UAE. 6+ years with React, Next.js and TypeScript, building AI-powered products and high-traffic platforms — 300K+ concurrent users, $2.3B in launch-day bookings. Open to frontend engineering roles.',
  alternates: { canonical: '/' },
};

// Single-page view. Each section is also served standalone at its own route
// (/projects, /about, /contact) from the same components, so per-page metadata
// and sitemap entries are preserved.
export default function HomePage() {
  return (
    <>
      <Navbar />
      <RevealOnScroll />
      <main>
        <HeroSection id="top" />
        <ProjectsSection as="h2" id="projects" className="py-32 scroll-mt-24" />
        <AboutSection as="h2" id="about" className="py-32 scroll-mt-24" />
        <ContactSection as="h2" id="contact" className="py-32 scroll-mt-24" />
      </main>
      <Footer />
    </>
  );
}
