import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-transparent dark:border-gray-700">
      <div className="relative">
        <img className="w-full h-48 object-cover" src={product.image} alt={product.name} loading="lazy" />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100 truncate">{product.name}</h3>
        <p className="text-gray-700 dark:text-gray-200 mt-1 font-bold text-xl">S/ {product.price.toFixed(2)}</p>
        <button
          onClick={() => onAddToCart(product)}
          className="mt-4 w-full bg-[#424242] dark:bg-gray-700 text-white py-2 rounded-md font-semibold hover:bg-[#D32F2F] dark:hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 transition-colors duration-300 transform"
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;