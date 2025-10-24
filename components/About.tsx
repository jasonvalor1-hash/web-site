import React from 'react';

const About: React.FC = () => {
  const values = ['Responsabilidad', 'Honestidad', 'Calidad', 'Innovación', 'Servicio'];

  return (
    <div className="bg-white dark:bg-gray-800 py-16 sm:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-base font-semibold leading-7 text-[#D32F2F]">Quiénes somos</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-[#424242] dark:text-white sm:text-5xl">Tu aliado en cada proyecto</p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            En SOLFER, nos dedicamos a la venta de ferretería en general, ofreciendo productos de alta calidad para profesionales y hogares. Nuestro compromiso es brindar soluciones confiables, precios accesibles y un servicio al cliente de excelencia.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-8 bg-gray-50 dark:bg-gray-700/50 rounded-xl shadow-sm transition-shadow duration-300 hover:shadow-md">
            <h3 className="text-2xl font-bold text-[#424242] dark:text-white">Misión</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Brindar productos ferreteros de calidad, asegurando satisfacción, confianza y eficiencia en cada compra.
            </p>
          </div>
          <div className="p-8 bg-gray-50 dark:bg-gray-700/50 rounded-xl shadow-sm transition-shadow duration-300 hover:shadow-md">
            <h3 className="text-2xl font-bold text-[#424242] dark:text-white">Visión</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Ser una empresa líder en el rubro ferretero nacional, reconocida por su innovación, atención y compromiso con el cliente.
            </p>
          </div>
        </div>
        <div className="mt-16 max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold text-center text-[#424242] dark:text-white">Nuestros Valores</h3>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-center">
              {values.map((value) => (
                <div key={value} className="flex flex-col items-center">
                  <div className="bg-[#D32F2F] text-white rounded-full h-16 w-16 flex items-center justify-center shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <p className="mt-4 font-semibold text-gray-700 dark:text-gray-200">{value}</p>
                </div>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;