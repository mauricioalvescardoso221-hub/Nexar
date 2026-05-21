import { Facebook, Instagram } from 'lucide-react';
import type { ContactInfo } from './ContactInfo';
import { trackGtagEvent } from '../lib/gtag';

interface Props {
  contactInfo: ContactInfo;
}

// A simple header component, sticky on top for easy access to the call button.
const Header = ({ contactInfo }: Props) => {
  return (
    <header className="bg-slate-900/80 backdrop-blur-sm sticky top-0 z-40 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          Maurício <span className="text-yellow-400">Eletricista</span>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          {contactInfo.facebookUrl && (
            <a
              href={contactInfo.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white hover:text-yellow-400 transition-colors"
              onClick={() =>
                trackGtagEvent("click_facebook", {
                  link_url: contactInfo.facebookUrl,
                  location: "header",
                })
              }
            >
              <Facebook size={24} />
            </a>
          )}
          {contactInfo.instagramUrl && (
            <a
              href={contactInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white hover:text-yellow-400 transition-colors"
              onClick={() =>
                trackGtagEvent("click_instagram", {
                  link_url: contactInfo.instagramUrl,
                  location: "header",
                })
              }
            >
              <Instagram size={24} />
            </a>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
