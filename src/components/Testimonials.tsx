
import { Star } from 'lucide-react';
// Testimonials build social proof and trust.
const Testimonials = () => {
  const testimonials = [
    {
      quote: "Serviço impecável! O Maurício foi muito rápido e profissional para resolver um curto-circuito aqui em casa. Preço justo e atendimento nota 10. Recomendo!",
      name: "Fernanda S.",
      location: "Bairro Mathias Velho, Canoas",
    },
    {
      quote: "Precisava de uma instalação completa no meu novo escritório e o trabalho foi excelente. Tudo dentro do prazo e com muita organização. Profissional de confiança.",
      name: "Ricardo M.",
      location: "Bairro Centro, Canoas",
    },
    {
      quote: "Tive uma emergência de madrugada e fui atendido prontamente. O Maurício resolveu o problema na mesma hora. Salvou a noite! Muito obrigado.",
      name: "Juliana P.",
      location: "Bairro Niterói, Canoas",
    },
  ];

  return (
    <section id="testimonials" className="bg-slate-900 py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">O Que Nossos Clientes Dizem</h2>
          <p className="text-gray-300 mt-2">A satisfação de quem confia em nosso trabalho.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-800 p-6 rounded-lg shadow-lg">
              <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
              <div className="font-bold text-white">{testimonial.name}</div>
              <div className="text-sm text-gray-400">{testimonial.location}</div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/search?q=mauricio+cardoso+eletricista&oq=mauricio+cardoso+eletricista&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRiPAjIHCAQQIRiPAtIBCDkwMDZqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#mpd=~5232048357927673683/customers/reviews" // <-- IMPORTANT: Replace this with your actual Google Reviews URL
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-slate-950 font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors transform hover:scale-105"
          >
            <Star size={20} />
            Ver mais avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
