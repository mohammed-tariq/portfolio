import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import RevealOnScroll from '../../components/RevealOnScroll';
import AboutSection from '../../components/sections/AboutSection';

export const metadata = {
  title: 'About — Senior Full Stack Engineer in Dubai',
  description:
    'Mohammed Tariq, Senior Full Stack Engineer in Dubai. 6+ years across MERN and Next.js — now at Suadeo, previously Tech Lead at IndiAssetz and dev at Niveus.',
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
