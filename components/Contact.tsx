import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 py-16 sm:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-[#D32F2F]">Contacto</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-[#424242] dark:text-white sm:text-5xl">Estamos para ayudarte</p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Visítanos en nuestra tienda o contáctanos a través de nuestros canales digitales.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl shadow-sm p-8 transition-shadow duration-300 hover:shadow-md">
            <h3 className="text-2xl font-bold text-[#424242] dark:text-white mb-6">Nuestra Ubicación</h3>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-600">
              <img src="https://picsum.photos/seed/map/800/450" alt="Mapa de ubicación" className="w-full h-full object-cover" />
            </div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">Av. Principal 123, Distrito, Ciudad</p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl shadow-sm p-8 flex flex-col justify-center transition-shadow duration-300 hover:shadow-md">
            <h3 className="text-2xl font-bold text-[#424242] dark:text-white mb-6">Canales de Atención</h3>
            <div className="space-y-6">
              <a href="https://wa.me/51987654321" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group rounded-lg p-2 -m-2">
                <div className="bg-[#D32F2F] p-3 rounded-full text-white group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-100">WhatsApp</h4>
                  <p className="text-gray-600 dark:text-gray-300 group-hover:text-[#D32F2F] dark:group-hover:text-red-500 transition-colors">+51 987 654 321</p>
                </div>
              </a>
              <a href="mailto:atencion@solfer.com" className="flex items-center gap-4 group rounded-lg p-2 -m-2">
                <div className="bg-[#D32F2F] p-3 rounded-full text-white group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-100">Correo Electrónico</h4>
                  <p className="text-gray-600 dark:text-gray-300 group-hover:text-[#D32F2F] dark:group-hover:text-red-500 transition-colors">atencion@solfer.com</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;