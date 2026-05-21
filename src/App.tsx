import Header from './components/Header';
import Hero from './components/Hero';
import Trust from './components/Trust';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

// Centralized contact information for easy updates
const contactInfo = {
  phone: '5192077430', 
  phoneFormatted: '(51) 9207-7430',   
  whatsappMessage: 'Olá! Gostaria de fazer um orçamento.',
  facebookUrl: 'https://www.facebook.com/profile.php?id=61583587396964',
  instagramUrl: 'https://www.instagram.com/eletricista.mauricio.cardoso',
};

function App() {
  return (
    <div className="bg-[#d0dbe5] font-sans text-[#1f2937]">
      <Header contactInfo={contactInfo} />
      <main>
        <Hero contactInfo={contactInfo} />
        <Trust />
        <Services />
        <Testimonials />
        <CallToAction contactInfo={contactInfo} />
        <ContactForm />
      </main>
      <Footer />
      <FloatingWhatsApp contactInfo={contactInfo} />
    </div>
  );
}

export default App;
