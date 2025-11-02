import React from 'react';
import { ShoppingCart, Eye } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/format';

const ProductCard = ({ product, onQuickView }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="card group cursor-pointer" onClick={() => onQuickView && onQuickView(product)}>
      <div className="relative overflow-hidden bg-gray-100 aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {!product.available && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold">
              Agotado
            </span>
          </div>
        )}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          {onQuickView && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onQuickView(product);
              }}
              className="bg-white/90 dark:bg-gray-700/90 hover:bg-white dark:hover:bg-gray-600 text-gray-900 dark:text-white p-2 rounded-full shadow-lg"
              title="Vista rápida"
            >
              <Eye className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white group-hover:text-emerald transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between mb-3">
          <span className="text-2xl font-bold text-emerald">
            {formatPrice(product.price)}
          </span>
          {product.available && (
            <button
              onClick={handleAddToCart}
              className="bg-emerald hover:bg-emerald-dark text-white p-2 rounded-lg transition-colors"
              title="Agregar al carrito"
            >
              <ShoppingCart className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

