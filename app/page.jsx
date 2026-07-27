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
    absolute: 'Mohammed Tariq — Senior Full Stack Engineer in Dubai | MERN, Next.js & AI',
  },
  description:
    'Dubai-based Senior Full Stack Engineer, frontend-focused. 6+ years across MERN and Next.js building AI-powered products and high-traffic platforms.',
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
