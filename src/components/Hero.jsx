import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Colección Otoño 2025",
      subtitle: "Descubre nuestra nueva colección de anillos de oro y esmeralda",
      cta: "Explorar Colección",
      bgGradient: "from-emerald/90 to-emerald-dark/90"
    },
    {
      title: "Esmeraldas Colombianas",
      subtitle: "Autenticidad certificada en cada pieza",
      cta: "Ver Catálogo",
      bgGradient: "from-gold/90 to-gold-dark/90"
    },
    {
      title: "Envío Gratis",
      subtitle: "En compras superiores a $300.000 COP",
      cta: "Comprar Ahora",
      bgGradient: "from-emerald/90 to-gold/90"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-advance slides
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-gradient-to-br ${slide.bgGradient} transition-opacity duration-700 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                {slide.subtitle}
              </p>
              <Link to="/catalogo" className="btn-primary inline-block">
                {slide.cta}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;

