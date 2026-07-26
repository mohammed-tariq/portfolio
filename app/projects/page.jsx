import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProjectsSection from '../../components/sections/ProjectsSection';

export const metadata = {
  title: 'Projects — Deployed Assets',
  description:
    'High-performance platforms and AI products: Mahindra Scorpio launch (300K+ concurrent users, $2.3B bookings), Suadeo AI intelligence, AIRA agentic real estate, marine fleet visualization, ICICI Bank portal, and French Ministry applications.',
  alternates: { canonical: '/projects' },
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProjectsSection as="h1" className="pt-32 pb-stack-unit" />
      </main>
      <Footer />
    </>
  );
}
