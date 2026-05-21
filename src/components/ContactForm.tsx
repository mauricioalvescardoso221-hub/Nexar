import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// This component displays a portfolio of completed electrical services, including a carousel and videos.
// Suggestion: Rename this file and component to "WorkExamples.jsx" to better reflect its content.
const WorkExamples = () => {
  const images = [
    {
      src: "/images/quadro-de-luz.jpg",
      alt: "Quadro de disjuntores moderno e organizado após instalação.",
    },
    {
      src: "/images/refletor.jpg",
      alt: "Refletor de alta potência instalado em área externa.",
    },
    {
      src: "/images/bancada-com-led.jpg",
      alt: "Bancada de cozinha com iluminação de fita de LED embutida.",
    },
    {
      src: "/images/iluminacao-banheiro.jpg",
      alt: "Espelho de banheiro com iluminação de LED indireta.",
    },
    {
      src: "/images/iluminação-tv.jpg",
      alt: "Painel de TV com projeto de iluminação de LED para ambiente de cinema.",
    },
    {
      src: "/images/quadro-de-luz2.jpg",
      alt: "Outro exemplo de quadro de luz organizado e seguro.",
    },
    {
      src: "/images/trilho-de-iluminação.jpg",
      alt: "Trilho de iluminação com spots direcionáveis em sala de estar.",
    },
  ];

  const videos = [
    {
      src: "/videos/instalacao-academia2.mp4",
      poster: "/images/service11.jpg",
      title: "Projeto de Iluminação LED",
    },
    {
      src: "/videos/relato-refletor.mp4",
      poster: "/images/service12.jpg",
      title: "Instalação de Refletor de Alta Potência",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section id="work-examples" className="bg-slate-900 py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Nossos Trabalhos em Destaque</h2>
            <p className="text-gray-300 mt-2">Confira alguns dos nossos serviços concluídos com sucesso.</p>
          </div>

          <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
            {/* Carousel wrapper */}
            <div
              className="flex transition-transform duration-500 ease-in-out aspect-video"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <img
                  key={image.src} // Using src as key assuming it's unique
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover flex-shrink-0"
                  loading={index > 0 ? 'lazy' : 'eager'} // Eager load the first image, lazy load the rest
                />
              ))}
            </div>

            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-slate-800/60 text-white p-3 rounded-full transition-colors hover:bg-yellow-400 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-yellow-400"
              aria-label="Imagem anterior"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-slate-800/60 text-white p-3 rounded-full transition-colors hover:bg-yellow-400 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-yellow-400"
              aria-label="Próxima imagem"
            >
              <ChevronRight size={28} />
            </button>

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3">
              {images.map((_, slideIndex) => (
                <button
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === slideIndex ? 'bg-yellow-400 scale-110' : 'bg-slate-500/70 hover:bg-slate-400'
                  }`}
                  aria-label={`Ir para a imagem ${slideIndex + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Video Grid Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white">Serviços em Vídeo</h3>
              <p className="text-gray-300 mt-2">Veja na prática a qualidade e o cuidado em cada detalhe.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              {videos.map((video) => (
                <div key={video.src} className="w-full max-w-sm bg-slate-800 rounded-lg shadow-lg overflow-hidden">
                  <div className="aspect-video bg-slate-950">
                    <video src={video.src} poster={video.poster} controls className="w-full h-full object-cover">
                      Seu navegador não suporta a tag de vídeo.
                    </video>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-white text-lg">{video.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExamples;
