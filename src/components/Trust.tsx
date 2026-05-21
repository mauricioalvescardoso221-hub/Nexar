import { Award, ShieldCheck, Users, Smile } from 'lucide-react';

// This section displays trust badges to quickly build credibility with visitors.
const Trust = () => {
  const trustItems = [
    { icon: <Award size={40} />, text: 'Mais de 8 Anos de Experiência' },
    { icon: <ShieldCheck size={40} />, text: 'Garantia de Serviço' },
    { icon: <Users size={40} />, text: 'Centenas de Clientes' },
    { icon: <Smile size={40} />, text: 'Satisfação Garantida' },
  ];

  return (
    <section className="bg-slate-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {trustItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-2 text-white">
              <div className="text-yellow-400">{item.icon}</div>
              <p className="font-semibold text-sm md:text-base">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
