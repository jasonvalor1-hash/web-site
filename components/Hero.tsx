import React from 'react';

interface HeroProps {
    setView: (view: 'catalog') => void;
}

const Hero: React.FC<HeroProps> = ({ setView }) => {
  return (
    <div className="relative bg-white dark:bg-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-white dark:from-gray-800 dark:via-transparent dark:to-gray-800 opacity-50"></div>
        <div className="container mx-auto px-6 py-24 md:py-32 lg:py-48 text-center relative z-10">
            <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#424242] dark:text-white">
                Bienvenido a <span className="text-[#D32F2F]">SOLFER</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Fuerza, calidad y confianza en cada herramienta.
            </p>
            <div className="mt-8 flex justify-center">
                <button 
                    onClick={() => setView('catalog')}
                    className="bg-[#D32F2F] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 transform hover:scale-105 transition-all duration-300 ease-in-out"
                >
                Explorar Catálogo
                </button>
            </div>
            </div>
        </div>
      <style>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Hero;
