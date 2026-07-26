import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import RevealOnScroll from '../../components/RevealOnScroll';
import AboutSection from '../../components/sections/AboutSection';

export const metadata = {
  title: 'About — Senior Frontend Engineer in Dubai',
  description:
    'Mohammed Tariq is a Senior Frontend Engineer in Dubai, UAE with 6+ years of experience. Currently at Suadeo; previously Tech Lead at IndiAssetz and Frontend Developer at Niveus and PreseNova. Full stack of skills: React, Next.js, TypeScript, React Native, agentic AI, data visualization, cloud and testing.',
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
