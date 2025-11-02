import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/logo.png" alt="Golden Gem" className="h-16 w-16" />
              <span className="font-display text-2xl font-bold">Golden Gem</span>
            </div>
            <p className="text-gray-400 mb-4">
              Joyería fina especializada en anillos de oro y esmeralda colombiana. 
              Ofrecemos piezas únicas con certificación de autenticidad y garantía de por vida.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-emerald transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/catalogo" className="text-gray-400 hover:text-emerald transition-colors">
                  Catálogo
                </Link>
              </li>
              <li>
                <Link to="/sobre-nosotros" className="text-gray-400 hover:text-emerald transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-400 hover:text-emerald transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link to="/garantias" className="text-gray-400 hover:text-emerald transition-colors">
                  Garantías
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Bogotá, Colombia</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>+57 300 000 0000</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>info@goldengem.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Golden Gem. Todos los derechos reservados. Medina & Salazar</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

