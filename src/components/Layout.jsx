import React, { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useStore } from '../context/StoreContext';
import { MessageCircle } from 'lucide-react';
import './Layout.css';

const Layout = () => {
  const { storeConfig } = useStore();
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % storeConfig.topbarMessages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [storeConfig.topbarMessages]);

  return (
    <div className="layout-wrapper">
      <div className="topbar">
        <p className="animate-fade-in" key={currentMessage}>
          {storeConfig.topbarMessages[currentMessage]}
        </p>
      </div>
      
      <Header />
      
      <main className="main-content">
        <Outlet />
      </main>
      
      <Footer />

      <a 
        href={`https://wa.me/${storeConfig.whatsappNumber}`} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-wa"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
};

export default Layout;
