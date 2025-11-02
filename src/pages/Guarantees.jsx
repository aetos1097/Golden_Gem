import React from 'react';
import { Shield, Award, Truck, CreditCard, RefreshCw } from 'lucide-react';

const Guarantees = () => {
  const guarantees = [
    {
      icon: Shield,
      title: 'Garantía por Vida',
      description: 'Todos nuestros productos vienen con garantía de por vida contra defectos de fabricación y pérdida de brillo.'
    },
    {
      icon: Award,
      title: 'Materiales Certificados',
      description: 'Cada esmeralda viene con certificado de autenticidad emitido por laboratorios reconocidos internacionalmente.'
    },
    {
      icon: Truck,
      title: 'Envío Seguro',
      description: 'Paga al recibir o paga seguro en línea. Ofrecemos envío gratis en compras superiores a $300.000 COP.'
    },
    {
      icon: CreditCard,
      title: 'Financiación Flexible',
      description: 'Tenemos opciones de financiación con MercadoPago y otros métodos de pago para que disfrutes hoy.'
    },
    {
      icon: RefreshCw,
      title: 'Devoluciones',
      description: 'Si no estás completamente satisfecho, puedes devolver tu compra dentro de 15 días sin preguntas.'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <Shield className="h-20 w-20 text-emerald mx-auto mb-4" />
        <h1 className="font-display text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Garantías y Políticas
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Tu satisfacción es nuestra prioridad
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {guarantees.map((guarantee, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="bg-emerald/10 p-3 rounded-lg flex-shrink-0">
                <guarantee.icon className="h-8 w-8 text-emerald" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{guarantee.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{guarantee.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Política de Garantía */}
        <div className="bg-gradient-to-br from-emerald/10 to-gold/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Política de Garantía</h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="text-emerald mr-2">•</span>
              <span>Cobertura de por vida contra defectos de fabricación</span>
            </li>
            <li className="flex items-start">
              <span className="text-emerald mr-2">•</span>
              <span>Reparación gratuita por pérdida de brillo (políticas aplican)</span>
            </li>
            <li className="flex items-start">
              <span className="text-emerald mr-2">•</span>
              <span>Reemplazo en caso de defectos estructurales</span>
            </li>
            <li className="flex items-start">
              <span className="text-emerald mr-2">•</span>
              <span>Certificado de autenticidad incluido con cada compra</span>
            </li>
          </ul>
        </div>

        {/* Política de Devoluciones */}
        <div className="bg-gradient-to-br from-gold/10 to-emerald/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Política de Devoluciones</h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="text-gold mr-2">•</span>
              <span>15 días para devoluciones sin preguntas</span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-2">•</span>
              <span>El producto debe estar en su estado original</span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-2">•</span>
              <span>Reembolso completo del precio de compra</span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-2">•</span>
              <span>Los gastos de envío del retorno corren por cuenta del cliente</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 bg-gray-900 text-white rounded-2xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">¿Tienes preguntas?</h2>
        <p className="text-gray-300 mb-6">
          Nuestro equipo está aquí para ayudarte con cualquier consulta
        </p>
        <a href="/contacto" className="btn-primary inline-block bg-white text-emerald hover:bg-gray-100">
          Contáctanos
        </a>
      </div>
    </div>
  );
};

export default Guarantees;

