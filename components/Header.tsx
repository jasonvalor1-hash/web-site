import React, { useState } from 'react';
import type { View, Theme } from '../App';
import { LogoGear, SunIcon, MoonIcon, MenuIcon, CloseIcon } from '../constants';

interface HeaderProps {
  setView: (view: View) => void;
  cartItemCount: number;
  openCart: () => void;
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeToggleButton: React.FC<{ theme: Theme; toggleTheme: () => void; }> = ({ theme, toggleTheme }) => (
    <button 
        onClick={toggleTheme} 
        className="text-gray-600 dark:text-gray-300 hover:text-[#D32F2F] dark:hover:text-red-500 transition-colors duration-300 p-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#D32F2F]"
        aria-label="Toggle theme"
    >
        {theme === 'light' ? <MoonIcon /> : <SunIcon />}
    </button>
);

const Header: React.FC<HeaderProps> = ({ setView, cartItemCount, openCart, theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { view: 'home', label: 'Inicio' },
    { view: 'catalog', label: 'Catálogo' },
    { view: 'about', label: 'Quiénes Somos' },
    { view: 'contact', label: 'Contacto' },
    { view: 'offers', label: 'Ofertas' },
  ] as const;
  
  const handleNavClick = (view: View) => {
    setView(view);
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-md z-50 transition-colors duration-300">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
            <div 
                className="flex items-center space-x-2 cursor-pointer"
                onClick={() => handleNavClick('home')}
            >
              <LogoGear />
              <span className="text-2xl font-bold text-[#424242] dark:text-gray-100">SOL<span className="text-[#D32F2F]">FER</span></span>
            </div>
            
            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map(link => (
                <button 
                  key={link.view} 
                  onClick={() => handleNavClick(link.view)} 
                  className="text-gray-600 dark:text-gray-300 hover:text-[#D32F2F] dark:hover:text-red-500 transition-colors duration-300 font-medium"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4">
              <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
              <button onClick={() => handleNavClick('account')} className="text-gray-600 dark:text-gray-300 hover:text-[#D32F2F] dark:hover:text-red-500 transition-colors duration-300 hidden sm:block">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              </button>
              <button onClick={openCart} className="relative text-gray-600 dark:text-gray-300 hover:text-[#D32F2F] dark:hover:text-red-500 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#D32F2F] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                    {cartItemCount}
                  </span>
                )}
              </button>
              <button className="md:hidden text-gray-600 dark:text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
            <div className="md:hidden py-4">
                <div className="flex flex-col space-y-4">
                {navLinks.map(link => (
                    <button 
                    key={link.view} 
                    onClick={() => handleNavClick(link.view)} 
                    className="text-gray-600 dark:text-gray-300 hover:text-[#D32F2F] dark:hover:text-red-500 text-left px-2 py-1"
                    >
                    {link.label}
                    </button>
                ))}
                <button onClick={() => handleNavClick('account')} className="text-gray-600 dark:text-gray-300 hover:text-[#D32F2F] dark:hover:text-red-500 text-left px-2 py-1">
                    Mi Cuenta
                </button>
                </div>
            </div>
        )}
      </nav>
    </header>
  );
};

export default Header;