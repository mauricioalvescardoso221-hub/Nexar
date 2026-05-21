import { Zap } from 'lucide-react';
import type { ContactInfo } from './ContactInfo';

interface Props {
  contactInfo: ContactInfo;
}

// A floating WhatsApp button, visible only on smaller screens for quick access.
const FloatingWhatsApp = ({ contactInfo }: Props) => {
  const encodedMessage = encodeURIComponent(contactInfo.whatsappMessage);

  return (
    <a
      href={`https://wa.me/55${contactInfo.phone}?text=${encodedMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="sm:hidden fixed bottom-4 right-4 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-colors"
      aria-label="Contact via WhatsApp"
    >
      <Zap size={28} />
    </a>
  );
};

export default FloatingWhatsApp;
