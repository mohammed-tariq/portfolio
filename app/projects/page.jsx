import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProjectsSection from '../../components/sections/ProjectsSection';

export const metadata = {
  title: 'Projects — React, Next.js & AI Platforms',
  description:
    'Frontend engineering work by Mohammed Tariq (Dubai): the Mahindra Scorpio launch platform (300K+ concurrent users, $2.3B launch-day bookings), Suadeo AI intelligence, AIRA agentic real estate, real-time marine fleet visualization, ICICI Bank portal and French Ministry applications.',
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
