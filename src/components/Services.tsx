import { Wrench, Zap, PanelTop, Lightbulb, AlertTriangle, Video } from 'lucide-react';

// This component lists the main services offered, focusing on clarity and benefits.
const Services = () => {
  const services = [
    { icon: <Wrench className="text-yellow-400" size={32} />, title: 'Reparos Elétricos Gerais', description: 'Solução de curtos-circuitos, fiação defeituosa e outros problemas elétricos com segurança.' },
    { icon: <Zap className="text-yellow-400" size={32} />, title: 'Instalações Elétricas', description: 'Instalação de tomadas, interruptores, chuveiros e ventiladores de teto.' },
    { icon: <PanelTop className="text-yellow-400" size={32} />, title: 'Troca de Disjuntores', description: 'Modernização do seu quadro de disjuntores para maior segurança e capacidade.' },
    { icon: <Lightbulb className="text-yellow-400" size={32} />, title: 'Projetos de Iluminação', description: 'Instalação de lustres, spots e sistemas de iluminação LED para valorizar seu ambiente.' },
    { icon: <Video className="text-yellow-400" size={32} />, title: 'Instalação de Câmeras', description: 'Instalação de sistemas de CFTV para monitoramento e segurança do seu imóvel.' },
    { icon: <AlertTriangle className="text-yellow-400" size={32} />, title: 'Atendimento Emergencial', description: 'Disponível semanalmente para resolver problemas elétricos urgentes com agilidade.' },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Nossos Serviços</h2>
          <p className="text-gray-300 mt-2 max-w-2xl mx-auto">Oferecemos uma gama completa de serviços elétricos para garantir a segurança e o conforto do seu lar ou negócio.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-slate-900 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                {service.icon}
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
              </div>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
