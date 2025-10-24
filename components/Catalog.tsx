import React, { useState } from 'react';
import type { Product } from '../types';
import { PRODUCT_CATEGORIES } from '../constants';
import ProductCard from './ProductCard';

interface CatalogProps {
  addToCart: (product: Product) => void;
}

const Catalog: React.FC<CatalogProps> = ({ addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(PRODUCT_CATEGORIES[0].id);

  const activeCategory = PRODUCT_CATEGORIES.find(cat => cat.id === selectedCategory);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-[#424242] dark:text-white">Nuestro Catálogo</h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">Encuentra todo lo que necesitas para tu proyecto.</p>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="md:w-1/4 lg:w-1/5">
          <h2 className="text-xl font-semibold mb-4 text-[#424242] dark:text-white">Categorías</h2>
          <ul className="space-y-2">
            {PRODUCT_CATEGORIES.map(category => (
              <li key={category.id}>
                <button
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full text-left px-4 py-2 rounded-lg flex items-center gap-3 transition-all duration-200 transform focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#D32F2F] ${
                    selectedCategory === category.id
                      ? 'bg-[#D32F2F] text-white shadow-md scale-105'
                      : 'bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {category.icon}
                  <span className="font-medium">{category.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </aside>
        <section className="md:w-3/4 lg:w-4/5">
            {activeCategory && (
                <div key={activeCategory.id} className="animate-fade-in-up">
                    <h2 className="text-3xl font-bold mb-6 text-[#424242] dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">{activeCategory.name}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {activeCategory.products.map(product => (
                            <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
                        ))}
                    </div>
                </div>
            )}
        </section>
      </div>
    </div>
  );
};

export default Catalog;