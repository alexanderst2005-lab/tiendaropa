import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import ProductCard from '../components/ProductCard';

const Favorites = () => {
  const { favorites, products } = useStore();
  
  const favoriteProducts = products.filter(p => favorites.includes(p.id));

  return (
    <div className="favorites-page section-padding">
      <div className="container">
        <h1 className="section-title">Mis Favoritos</h1>
        
        {favoriteProducts.length === 0 ? (
          <div className="text-center" style={{padding: '50px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px'}}>
            <Heart size={64} color="#ccc" />
            <h2 style={{fontFamily: 'var(--font-serif)'}}>No tienes favoritos aún</h2>
            <p style={{color: '#666'}}>Guarda los productos que más te gustan para verlos más tarde.</p>
            <Link to="/tienda" className="btn-primary mt-4">Explorar la tienda</Link>
          </div>
        ) : (
          <div className="products-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px'}}>
            {favoriteProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
