import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="font-display text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Contáctanos
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Estamos aquí para ayudarte con cualquier pregunta
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-emerald/10 p-3 rounded-lg">
                <MapPin className="h-6 w-6 text-emerald" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Ubicación</h3>
                <p className="text-gray-600 dark:text-gray-300">Bogotá, Colombia</p>
                <p className="text-gray-600 dark:text-gray-300">Calle Principal #123-45</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-gold/10 p-3 rounded-lg">
                <Phone className="h-6 w-6 text-gold" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Teléfono</h3>
                <p className="text-gray-600 dark:text-gray-300">+57 300 000 0000</p>
                <p className="text-gray-600 dark:text-gray-300">Lun - Vie: 9:00 AM - 6:00 PM</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-emerald/10 p-3 rounded-lg">
                <Mail className="h-6 w-6 text-emerald" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Email</h3>
                <p className="text-gray-600 dark:text-gray-300">info@goldengem.com</p>
                <p className="text-gray-600 dark:text-gray-300">ventas@goldengem.com</p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-br from-emerald to-emerald-dark rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Horario de Atención</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Lunes - Viernes</span>
                <span className="font-semibold">9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sábados</span>
                <span className="font-semibold">9:00 AM - 2:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Tienda Online</span>
                <span className="font-semibold">24/7</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Envíanos un mensaje</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Nombre completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-emerald focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-emerald focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Teléfono
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-emerald focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-emerald focus:border-transparent resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full btn-primary flex items-center justify-center space-x-2 py-3"
            >
              <Send className="h-5 w-5" />
              <span>Enviar Mensaje</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

