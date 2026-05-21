import { Zap, ShieldCheck, Clock } from "lucide-react";
import type { ContactInfo } from './ContactInfo';
import { trackGtagEvent } from "../lib/gtag";

interface Props {
  contactInfo: ContactInfo;
}

// The Hero section is the first thing users see. It's optimized for immediate conversion.
const Hero = ({ contactInfo }: Props) => {
  // Encodes the message for the WhatsApp URL
  const encodedMessage = encodeURIComponent(contactInfo.whatsappMessage);

  return (
    <section className="bg-slate-950 text-white pt-16 pb-20 text-center">
      <div className="container mx-auto px-4">
        {/* The H1 is crucial for SEO and clearly states the service and location. */}
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Eletricista em <span className="text-yellow-400">Canoas</span> – Atendimentos de Segunda a Domingo.
        </h1>
        {/* The subheadline builds credibility and trust. */}
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Soluções elétricas rápidas e seguras para sua residência ou empresa. Mais de 8 anos de experiência e compromisso com a sua segurança.
        </p>
        
        {/* Primary and Secondary Call-to-Action buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
          <a
            href={`https://wa.me/55${contactInfo.phone}?text=${encodedMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-green-500 text-white text-lg font-bold py-4 px-8 rounded-lg hover:bg-green-600 transition-transform transform hover:scale-105"
            onClick={() =>
              trackGtagEvent("click_whatsapp", { location: "hero" })
            }
          >
            <Zap size={24} /> {/* Using Zap as a proxy for WhatsApp icon */}
            Orçamento por WhatsApp
          </a>
        </div>

        {/* Trust highlights provide quick, scannable reasons to trust the service. */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-gray-300">
          <div className="flex items-center gap-2">
            <ShieldCheck size={20} className="text-yellow-400" />
            <span>Eletricista Qualificado</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={20} className="text-yellow-400" />
            <span>Atendimento Rápido</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap size={20} className="text-yellow-400" />
            <span>Emergência 24/7</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
