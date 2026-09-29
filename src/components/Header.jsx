import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import { useStore } from '../context/StoreContext';

const Header = () => {
  const { cart, favorites } = useStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const favCount = favorites.length;

  return (
    <header className="header">
      <div className="container header-container">
        <button className="menu-toggle action-btn" onClick={() => setIsMenuOpen(true)}>
          <Menu size={24} />
        </button>

        <Link to="/" className="logo">
          ESSENCE
        </Link>

        <nav className={`nav-desktop ${isMenuOpen ? 'nav-mobile-open' : ''}`}>
          <ul className="nav-links">
            <li><NavLink to="/" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Inicio</NavLink></li>
            <li><NavLink to="/tienda" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Tienda</NavLink></li>
            <li><NavLink to="/nosotros" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Nosotros</NavLink></li>
            <li><NavLink to="/contacto" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Contacto</NavLink></li>
          </ul>
        </nav>

        <div className="header-actions">
          <button className="action-btn">
            <Search size={20} />
          </button>
          <Link to="/favoritos" className="action-btn">
            <Heart size={20} />
            {favCount > 0 && <span className="badge">{favCount}</span>}
          </Link>
          <Link to="/carrito" className="action-btn">
            <ShoppingBag size={20} />
            {cartCount > 0 && <span className="badge">{cartCount}</span>}
          </Link>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <button className="close-menu" onClick={() => setIsMenuOpen(false)}>
            <X size={24} />
          </button>
          <ul className="mobile-nav-links">
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Inicio</Link></li>
            <li><Link to="/tienda" onClick={() => setIsMenuOpen(false)}>Tienda</Link></li>
            <li><Link to="/nosotros" onClick={() => setIsMenuOpen(false)}>Nosotros</Link></li>
            <li><Link to="/contacto" onClick={() => setIsMenuOpen(false)}>Contacto</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
