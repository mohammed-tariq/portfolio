import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ContactSection from '../../components/sections/ContactSection';

export const metadata = {
  title: 'Contact — Hire a Full Stack Engineer in Dubai',
  description:
    'Get in touch with Mohammed Tariq, Senior Full Stack Engineer in Dubai, UAE. Open to full stack and frontend roles, AI product work and consulting.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <div className="fixed inset-0 noise-bg z-[100]" />
      <Navbar />
      <main className="min-h-screen">
        <ContactSection as="h1" className="pt-32 pb-stack-unit" />
      </main>
      <Footer />
    </>
  );
}
