import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';
import CartDrawer from '../components/CartDrawer';
import { products, categories } from '../data/products';
import { Search, Filter } from 'lucide-react';

const Catalog = () => {
  const { categoryId } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const currentCategory = categories.find(cat => cat.id === categoryId);
  const categoryProducts = categoryId 
    ? products.filter(p => p.category === categoryId)
    : products;

  const filteredProducts = categoryProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubcategory = !selectedSubcategory || product.subcategory === selectedSubcategory;
    return matchesSearch && matchesSubcategory;
  });

  // Reset subcategory when category changes
  useEffect(() => {
    setSelectedSubcategory('');
  }, [categoryId]);

  const handleProductClick = (product) => {
    setIsDrawerOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-display text-4xl font-bold text-gray-900 dark:text-white mb-2">
          {currentCategory ? currentCategory.name : 'Catálogo Completo'}
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'producto encontrado' : 'productos encontrados'}
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Search */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
          <input
            type="text"
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-emerald focus:border-transparent"
          />
        </div>

        {/* Subcategory Filter */}
        {currentCategory && currentCategory.subcategories.length > 0 && (
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500 pointer-events-none" />
            <select
              value={selectedSubcategory}
              onChange={(e) => setSelectedSubcategory(e.target.value)}
              className="pl-10 pr-8 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-emerald focus:border-transparent appearance-none cursor-pointer"
            >
              <option value="">Todas las categorías</option>
              {currentCategory.subcategories.map(sub => (
                <option key={sub.id} value={sub.id}>
                  {sub.name}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Products Grid */}
      <ProductGrid 
        products={filteredProducts} 
        onProductClick={handleProductClick}
        itemsPerPage={12}
      />

      <CartDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>
  );
};

export default Catalog;

