import type React from 'react';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
}

export interface Category {
  id: string;
  name: string;
  // FIX: Replaced JSX.Element with React.ReactElement to resolve missing JSX namespace error.
  icon: React.ReactElement;
  products: Product[];
}

export interface CartItem extends Product {
  quantity: number;
}
