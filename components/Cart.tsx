import React from 'react';
import type { CartItem } from '../types';
import { PlusIcon, MinusIcon, TrashIcon } from '../constants';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, cartItems, removeFromCart, updateQuantity }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black bg-opacity-60 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white dark:bg-gray-800 shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-heading"
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 id="cart-heading" className="text-xl font-bold text-[#424242] dark:text-white">Carrito de Compras</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          {cartItems.length === 0 ? (
            <div className="flex-grow flex flex-col items-center justify-center text-center p-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-300 dark:text-gray-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              <p className="text-gray-500 dark:text-gray-400">Tu carrito está vacío.</p>
            </div>
          ) : (
            <div className="flex-grow overflow-y-auto p-4 space-y-4">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center space-x-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                  <div className="flex-grow">
                    <p className="font-semibold text-gray-800 dark:text-gray-100">{item.name}</p>
                    <p className="text-gray-600 dark:text-gray-300">S/ {item.price.toFixed(2)}</p>
                    <div className="flex items-center mt-2">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 border rounded-l-md dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"><MinusIcon /></button>
                      <span className="px-3 py-0.5 border-t border-b dark:border-gray-600">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 border rounded-r-md dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"><PlusIcon /></button>
                    </div>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700 dark:hover:text-red-400">
                     <TrashIcon />
                  </button>
                </div>
              ))}
            </div>
          )}

          {cartItems.length > 0 && (
            <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                <div className="flex justify-between font-bold text-lg mb-4 text-gray-800 dark:text-white">
                <span>Subtotal:</span>
                <span>S/ {total.toFixed(2)}</span>
                </div>
                <button className="w-full bg-[#D32F2F] text-white py-3 rounded-md font-bold hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 transition-colors">
                Finalizar Compra
                </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;