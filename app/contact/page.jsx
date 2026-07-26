import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ContactSection from '../../components/sections/ContactSection';

export const metadata = {
  title: 'Contact — Hire a Frontend Engineer in Dubai',
  description:
    'Get in touch with Mohammed Tariq, Senior Frontend Engineer based in Dubai, UAE. Open to frontend engineering roles, AI product work, contract and consulting enquiries. Response within 24 hours.',
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
