import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useStore } from '../context/StoreContext';

const ProductCard = ({ product }) => {
  const { toggleFavorite, favorites } = useStore();
  const isFavorite = favorites.includes(product.id);

  // Get the first color's images, or fallback to first available
  const firstColor = Object.keys(product.images)[0];
  const images = product.images[firstColor];
  
  const formattedPrice = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(product.price);

  return (
    <div className="product-card animate-fade-in">
      <button 
        className="btn-favorite"
        onClick={(e) => {
          e.preventDefault();
          toggleFavorite(product.id);
        }}
      >
        <Heart size={18} fill={isFavorite ? 'var(--color-accent)' : 'none'} color={isFavorite ? 'var(--color-accent)' : 'var(--color-black)'} />
      </button>
      
      <Link to={`/producto/${product.id}`}>
        <div className="product-image-container">
          <img src={images[0]} alt={product.name} className="product-image-main" />
          {images.length > 1 && (
            <img src={images[1]} alt={`${product.name} hover`} className="product-image-hover" />
          )}
          {product.stock === 0 && (
            <div style={{
              position: 'absolute', bottom: 0, left: 0, width: '100%', 
              background: 'rgba(255,255,255,0.9)', textAlign: 'center', 
              padding: '8px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase'
            }}>
              Agotado
            </div>
          )}
        </div>
        <div className="product-info">
          <h3 className="product-title">{product.name}</h3>
          <p className="product-price">{formattedPrice}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
