import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import ProductCard from '../components/ProductCard';
import './Home.css';
import { collections } from '../data/products';

const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600&q=80',
    title: 'Nueva Colección',
    subtitle: 'Descubre las tendencias de esta temporada',
    link: '/tienda?coleccion=nueva-coleccion'
  },
  {
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=80',
    title: 'Tu estilo, tu esencia',
    subtitle: 'Prendas diseñadas para resaltar tu belleza',
    link: '/tienda'
  },
  {
    image: 'https://images.unsplash.com/photo-1515347619362-6712b591b34a?w=1600&q=80',
    title: 'Prendas para cada momento',
    subtitle: 'De lo casual a lo elegante, siempre perfecta',
    link: '/tienda'
  }
];

const Home = () => {
  const { products } = useStore();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const featuredProducts = products.filter(p => p.featured).slice(0, 4);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-slider">
        {heroSlides.map((slide, index) => (
          <div key={index} className={`hero-slide ${index === currentSlide ? 'active' : ''}`}>
            <img src={slide.image} alt={slide.title} className="hero-image" />
            <div className="hero-content">
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-subtitle">{slide.subtitle}</p>
              <Link to={slide.link} className="hero-btn">Explorar Colección</Link>
            </div>
          </div>
        ))}
        <div className="slider-dots">
          {heroSlides.map((_, index) => (
            <div 
              key={index} 
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Collections Section */}
      <section className="section-padding">
        <div className="container">
          <h2 className="section-title">Nuestras Colecciones</h2>
          <div className="collections-grid">
            {collections.map(col => (
              <Link to={`/tienda?categoria=${col.name}`} key={col.id} className="collection-card">
                <img src={col.image} alt={col.name} />
                <div className="collection-overlay">
                  <h3 className="collection-title">{col.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Section */}
      <section className="editorial-section">
        <div className="editorial-overlay"></div>
        <div className="editorial-content">
          <h2 className="editorial-title">Viste lo que eres</h2>
          <Link to="/tienda" className="btn-primary" style={{ backgroundColor: 'white', color: 'black' }}>
            Descubrir la colección
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding">
        <div className="container">
          <h2 className="section-title">Destacados</h2>
          <div className="featured-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/tienda" className="btn-secondary">
              Ver toda la tienda
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
