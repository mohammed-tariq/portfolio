import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProjectsSection from '../../components/sections/ProjectsSection';

export const metadata = {
  title: 'Projects — React, Next.js & AI Platforms',
  description:
    'Full stack work by Mohammed Tariq, Dubai: the Mahindra Scorpio launch platform, AIRA agentic real-estate AI on React and Node.js, and Suadeo AI intelligence.',
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
