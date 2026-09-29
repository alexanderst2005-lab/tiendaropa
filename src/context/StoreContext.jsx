import React, { createContext, useState, useEffect, useContext } from 'react';
import { products, storeConfig } from '../data/products';

const StoreContext = createContext();

export const useStore = () => useContext(StoreContext);

export const StoreProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  
  const [favorites, setFavorites] = useState(() => {
    const savedFavs = localStorage.getItem('favorites');
    return savedFavs ? JSON.parse(savedFavs) : [];
  });

  const [recentlyViewed, setRecentlyViewed] = useState(() => {
    const savedViews = localStorage.getItem('recentlyViewed');
    return savedViews ? JSON.parse(savedViews) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
  }, [recentlyViewed]);

  const addToCart = (product, color, size, quantity) => {
    setCart(prev => {
      const existingItem = prev.find(
        item => item.id === product.id && item.color === color && item.size === size
      );
      if (existingItem) {
        return prev.map(item =>
          item === existingItem
            ? { ...item, quantity: Math.min(item.quantity + quantity, product.stock) }
            : item
        );
      }
      return [...prev, { ...product, color, size, quantity }];
    });
  };

  const removeFromCart = (index) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  const updateQuantity = (index, delta) => {
    setCart(prev => {
      const newCart = [...prev];
      const item = newCart[index];
      const newQty = item.quantity + delta;
      if (newQty > 0 && newQty <= item.stock) {
        item.quantity = newQty;
      }
      return newCart;
    });
  };

  const toggleFavorite = (productId) => {
    setFavorites(prev => 
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const addRecentlyViewed = (productId) => {
    setRecentlyViewed(prev => {
      const newViews = prev.filter(id => id !== productId);
      return [productId, ...newViews].slice(0, 4); // Keep last 4
    });
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <StoreContext.Provider value={{
      cart, addToCart, removeFromCart, updateQuantity, getCartTotal,
      favorites, toggleFavorite,
      recentlyViewed, addRecentlyViewed,
      products, storeConfig
    }}>
      {children}
    </StoreContext.Provider>
  );
};
