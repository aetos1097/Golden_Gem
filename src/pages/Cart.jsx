import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/format';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();

  const handleCheckout = () => {
    alert('Esta es una demostración. El procesamiento de pagos no está implementado.');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-display text-4xl font-bold text-gray-900 dark:text-white mb-8">Carrito de Compras</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-20">
          <ShoppingBag className="h-32 w-32 text-gray-300 dark:text-gray-600 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Tu carrito está vacío</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">Agrega productos para comenzar</p>
          <Link to="/catalogo" className="btn-primary inline-block">
            Explorar Catálogo
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 flex gap-6">
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-cover rounded-lg flex-shrink-0"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-xl text-gray-900 dark:text-white mb-2">{item.name}</h3>
                <p className="text-emerald font-bold text-lg mb-4">{formatPrice(item.price)}</p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 border border-gray-300 dark:border-gray-600 rounded-lg">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-3 font-semibold text-lg text-gray-900 dark:text-white">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 p-2 transition-colors"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mt-4">
                  Subtotal: <span className="font-semibold text-gray-900 dark:text-white">{formatPrice(item.price * item.quantity)}</span>
                </p>
              </div>
            </div>
          ))}
          
          <div className="bg-gradient-to-br from-emerald to-emerald-dark rounded-lg p-6 text-white">
            <div className="flex justify-between items-center mb-6 text-2xl font-bold">
              <span>Total:</span>
              <span>{formatPrice(cartTotal)}</span>
            </div>
            <div className="flex gap-4">
              <button
                onClick={clearCart}
                className="flex-1 btn-secondary border-white text-white hover:bg-white hover:text-emerald py-3"
              >
                Limpiar Carrito
              </button>
              <button
                onClick={handleCheckout}
                className="flex-1 bg-white text-emerald hover:bg-gray-100 font-medium py-3 rounded-lg transition-colors"
              >
                Finalizar Compra
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

