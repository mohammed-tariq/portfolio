import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RevealOnScroll from '../components/RevealOnScroll';
import HeroSection from '../components/sections/HeroSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import AboutSection from '../components/sections/AboutSection';
import ContactSection from '../components/sections/ContactSection';

export const metadata = {
  title: 'Mohammed Tariq — Senior Frontend Engineer | AI-Powered Products Specialist',
  description:
    'Dubai-based engineer specializing in agentic AI, high-performance data visualization, and real-time systems. Architecting the next generation of intelligent digital interfaces.',
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
