import { Zap } from 'lucide-react';
import type { ContactInfo } from './ContactInfo';

interface Props {
  contactInfo: ContactInfo;
}

// This is a final, strong Call to Action section to encourage immediate contact.
const CallToAction = ({ contactInfo }: Props) => {
  const encodedMessage = encodeURIComponent(contactInfo.whatsappMessage);

  return (
    <section className="bg-slate-950 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Problemas com a rede elétrica? Não espere agravar!
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          Entre em contato agora para um atendimento rápido e seguro. Orçamento sem compromisso.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href={`https://wa.me/55${contactInfo.phone}?text=${encodedMessage}`} 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-green-500 text-white text-lg font-bold py-4 px-8 rounded-lg hover:bg-green-600 transition-transform transform hover:scale-105"
          >
            <Zap size={24} />
            Chamar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
