import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { Instagram, Facebook, Phone } from 'lucide-react';

const Footer = () => {
  const { storeConfig } = useStore();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3 className="footer-logo">ESSENCE</h3>
            <p style={{fontSize: '14px', color: 'var(--color-light-gray)', marginBottom: '20px'}}>
              Tu estilo, tu esencia. Moda premium para la mujer moderna.
            </p>
            <div style={{display: 'flex', gap: '15px'}}>
              <a href="#"><Instagram size={20} /></a>
              <a href="#"><Facebook size={20} /></a>
            </div>
          </div>
          
          <div className="footer-col">
            <h4>Navegación</h4>
            <ul>
              <li><Link to="/tienda">Tienda</Link></li>
              <li><Link to="/colecciones">Colecciones</Link></li>
              <li><Link to="/nosotros">Nosotros</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Atención al Cliente</h4>
            <ul>
              <li><Link to="/faq">Preguntas Frecuentes</Link></li>
              <li><Link to="/envios">Políticas de Envío</Link></li>
              <li><Link to="/devoluciones">Cambios y Devoluciones</Link></li>
              <li><Link to="/guia-tallas">Guía de Tallas</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contacto</h4>
            <ul>
              <li style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                <Phone size={16} /> 
                <a href={`https://wa.me/${storeConfig.whatsappNumber}`} target="_blank" rel="noreferrer">WhatsApp</a>
              </li>
              <li><a href="mailto:contacto@essence.com">contacto@essence.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Essence. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
