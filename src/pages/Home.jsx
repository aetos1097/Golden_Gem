import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import ProductGrid from '../components/ProductGrid';
import CartDrawer from '../components/CartDrawer';
import { products } from '../data/products';
import { Shield, Truck, Award, Star } from 'lucide-react';

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const featuredProducts = products.filter(p => p.featured).slice(0, 8);
  
  const testimonials = [
    {
      name: "María González",
      comment: "Excelente calidad y muy rápida la entrega. El anillo es hermoso!",
      rating: 5
    },
    {
      name: "Carlos Ramírez",
      comment: "Superó mis expectativas. Joyas muy bonitas y auténticas.",
      rating: 5
    },
    {
      name: "Ana Martínez",
      comment: "100% recomendado. Hasta el momento no ha perdido su brillo.",
      rating: 5
    },
    {
      name: "Luis Hernández",
      comment: "Excelente producto, se recibe lo promocionado. Muy satisfecho.",
      rating: 5
    },
    {
      name: "Laura Torres",
      comment: "La atención al cliente es excelente y el producto es de primera.",
      rating: 5
    },
    {
      name: "David Vargas",
      comment: "Es exactamente lo que estaba esperando. Perfecto y brilla bonito.",
      rating: 5
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Garantia Joyas Colombianas",
      description: "Materiales certificados"
    },
    {
      icon: Truck,
      title: "Paga al Recibir",
      description: "O paga seguro en línea"
    },
    {
      icon: Award,
      title: "Oro de 18K",
      description: "Somos fabricantes"
    }
  ];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-emerald/10 p-4 rounded-full">
                  <feature.icon className="h-8 w-8 text-emerald" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Featured Products Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white">
              Productos Destacados
            </h2>
            <Link to="/catalogo" className="text-emerald hover:text-emerald-dark font-medium">
              Ver todos →
            </Link>
          </div>
          <ProductGrid products={featuredProducts} onProductClick={handleProductClick} />
        </div>

        {/* New Collection Section */}
        <div className="bg-gradient-to-br from-emerald to-emerald-dark text-white rounded-2xl p-8 md:p-12 mb-16">
          <div className="max-w-3xl">
            <h2 className="font-display text-4xl font-bold mb-4">
              Nueva Colección de Otoño 2025
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Descubre nuestra exclusiva línea de anillos de compromiso con esmeraldas 
              colombianas certificadas. Piezas únicas que cuentan tu historia.
            </p>
            <Link to="/catalogo/anillos" className="btn-primary inline-block bg-white text-emerald hover:bg-gray-100">
              Explorar Colección
            </Link>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h2 className="font-display text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Lo que dicen nuestros clientes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                  "{testimonial.comment}"
                </p>
                <p className="font-semibold text-gray-900 dark:text-white">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CartDrawer isOpen={isDrawerOpen} onClose={closeDrawer} />
    </>
  );
};

export default Home;

