import React from 'react';
import { LogoGear } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#424242] dark:bg-gray-900 border-t-4 border-[#D32F2F]">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2 mb-4">
              <LogoGear />
              <span className="text-2xl font-bold text-white">SOL<span className="text-[#D32F2F]">FER</span></span>
            </div>
            <p className="text-gray-300 dark:text-gray-400">"Fuerza, calidad y confianza en cada herramienta."</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Contacto</h3>
            <ul className="space-y-2 text-gray-300 dark:text-gray-400">
              <li>WhatsApp: +51 921 049 919</li>
              <li>Email: atencion@solfer.com</li>
              <li>Dirección: Av. Principal 123, Ciudad</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Métodos de Pago</h3>
            <div className="flex justify-center md:justify-start flex-wrap gap-2">
                <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold py-1 px-3 rounded-md text-sm">Efectivo</span>
                <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold py-1 px-3 rounded-md text-sm">Yape</span>
                <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold py-1 px-3 rounded-md text-sm">Plin</span>
                <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold py-1 px-3 rounded-md text-sm">Tarjeta</span>
                <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold py-1 px-3 rounded-md text-sm">Transferencia</span>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-600 dark:border-gray-700 pt-8 text-center text-gray-400 dark:text-gray-500">
          <p>&copy; {new Date().getFullYear()} SOLFER – Ferretería en General. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;