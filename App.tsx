import React, { useState, useMemo, useEffect } from 'react';
import type { Product, CartItem } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';

export type View = 'home' | 'catalog' | 'offers' | 'contact' | 'about' | 'account';
export type Theme = 'light' | 'dark';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedTheme = window.localStorage.getItem('theme') as Theme;
      if (storedTheme) return storedTheme;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      const itemInCart = prevItems.find(item => item.id === product.id);
      if (itemInCart) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const cartItemCount = useMemo(() => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  }, [cartItems]);

  const renderView = () => {
    const placeholderStyles = "text-center p-20 min-h-[60vh] flex items-center justify-center";
    switch (currentView) {
      case 'home':
        return <Hero setView={setCurrentView} />;
      case 'catalog':
        return <Catalog addToCart={addToCart} />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'offers':
        return <div className={placeholderStyles}><h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Ofertas Próximamente</h1></div>;
      case 'account':
        return <div className={placeholderStyles}><h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Mi Cuenta Próximamente</h1></div>;
      default:
        return <Hero setView={setCurrentView} />;
    }
  };

  return (
    <div className="bg-[#FAFAFA] text-[#424242] dark:bg-gray-900 dark:text-gray-300 min-h-screen flex flex-col font-sans transition-colors duration-300">
      <Header 
        setView={setCurrentView} 
        cartItemCount={cartItemCount} 
        openCart={() => setIsCartOpen(true)}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <main className="flex-grow">
        <div key={currentView} className="view-fade-in">
            {renderView()}
        </div>
      </main>
      <Footer />
      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cartItems} 
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />
    </div>
  );
};

export default App;