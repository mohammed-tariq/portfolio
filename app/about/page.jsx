import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import RevealOnScroll from '../../components/RevealOnScroll';
import AboutSection from '../../components/sections/AboutSection';

export const metadata = {
  title: 'About — System Architect',
  description:
    'Career timeline and technical stack of Mohammed Tariq: Senior Frontend Engineer at Suadeo (Dubai), previously Tech Lead at IndiAssetz, Frontend Developer at Niveus and Presenova. React, Next.js, TypeScript, agentic AI, data visualization.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <RevealOnScroll />
      <main>
        <AboutSection as="h1" className="pt-32 pb-32" imagePriority />
      </main>
      <Footer />
    </>
  );
}
