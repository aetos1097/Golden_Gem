import React from 'react';
import { Gem, Award, Users, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <Gem className="h-20 w-20 text-emerald mx-auto mb-4" />
        <h1 className="font-display text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Sobre Golden Gem
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Joyería fina especializada en anillos de oro y esmeralda colombiana
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <div className="bg-gradient-to-br from-emerald/10 to-gold/10 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Nuestra Historia</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Golden Gem nació del sueño de ofrecer joyería de la más alta calidad con un toque 
            de elegancia y autenticidad colombiana. Nos especializamos en anillos de compromiso 
            y joyería fina con esmeraldas colombianas certificadas, combinadas con oro de 
            primera calidad.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Cada pieza es cuidadosamente seleccionada y elaborada por maestros joyeros con 
            años de experiencia, garantizando que cada creación sea única y lleve consigo 
            la esencia de la tradición joyera colombiana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Award className="h-10 w-10 text-emerald mr-3" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Certificación</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Todas nuestras esmeraldas son certificadas y provienen directamente de las 
              minas de Colombia, garantizando autenticidad y calidad superior.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Users className="h-10 w-10 text-gold mr-3" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Artesanía</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Trabajamos con maestros joyeros colombianos que combinan técnicas tradicionales 
              con diseño contemporáneo para crear piezas únicas.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Gem className="h-10 w-10 text-emerald mr-3" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Calidad Premium</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Usamos solo oro de 18 quilates y esmeraldas de grado AAA, asegurando 
              durabilidad y belleza que perduran para siempre.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Heart className="h-10 w-10 text-gold mr-3" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Compromiso</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Estamos comprometidos con la satisfacción de nuestros clientes y ofrecemos 
              garantía de por vida en todas nuestras piezas.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Nuestra Misión</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Nuestra misión es hacer que cada momento especial sea aún más memorable con 
            joyería excepcional que combine la belleza natural de las esmeraldas colombianas 
            con la artesanía y el diseño innovador. Creemos que cada pieza cuenta una historia 
            única y que mereces una joya tan especial como el momento que representa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

