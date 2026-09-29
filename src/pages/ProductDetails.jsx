import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Heart, MessageCircle, ShoppingBag } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, addToCart, toggleFavorite, favorites, storeConfig, addRecentlyViewed } = useStore();
  
  const product = products.find(p => p.id === Number(id));
  
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [error, setError] = useState('');
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);

  useEffect(() => {
    if (product) {
      addRecentlyViewed(product.id);
      window.scrollTo(0, 0);
    }
  }, [product]);

  if (!product) return <div className="container" style={{paddingTop: '80px'}}>Producto no encontrado</div>;

  const isFavorite = favorites.includes(product.id);
  const availableImages = selectedColor ? product.images[selectedColor] : Object.values(product.images)[0];
  
  const handleAddToCart = () => {
    if (!selectedColor) {
      setError('Por favor, selecciona un color.');
      return;
    }
    if (!selectedSize) {
      setError('Por favor, selecciona una talla.');
      return;
    }
    setError('');
    addToCart(product, selectedColor, selectedSize, quantity);
    // Optional: show a toast or open cart sidebar
    navigate('/carrito');
  };

  const handleBuyNow = () => {
    if (!selectedColor) {
      setError('Por favor, selecciona un color.');
      return;
    }
    if (!selectedSize) {
      setError('Por favor, selecciona una talla.');
      return;
    }
    setError('');
    addToCart(product, selectedColor, selectedSize, quantity);
    navigate('/checkout');
  };

  const formatPrice = (price) => new Intl.NumberFormat('es-CO', {
    style: 'currency', currency: 'COP', minimumFractionDigits: 0
  }).format(price);

  return (
    <div className="product-details section-padding">
      <div className="container">
        <div className="details-grid">
          
          {/* Gallery */}
          <div className="gallery">
            <div className="main-image">
              <img src={availableImages[currentImageIndex]} alt={product.name} />
              {product.stock === 0 && <div className="sold-out-badge">Agotado</div>}
            </div>
            {availableImages.length > 1 && (
              <div className="thumbnails">
                {availableImages.map((img, index) => (
                  <img 
                    key={index} 
                    src={img} 
                    alt="Thumbnail" 
                    className={`thumb ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="product-info-panel">
            <h1 className="product-title-large">{product.name}</h1>
            <p className="product-ref">Ref: {product.ref}</p>
            <p className="product-price-large">{formatPrice(product.price)}</p>
            
            <p className="product-desc">{product.description}</p>
            
            <div className="stock-status" style={{color: product.stock === 0 ? 'red' : product.stock <= 5 ? 'orange' : 'green', fontWeight: 'bold', marginBottom: '20px'}}>
              {product.stock === 0 ? 'Agotado' : product.stock <= 5 ? `Últimas unidades (${product.stock} disponibles)` : 'Disponible'}
            </div>

            {error && <div className="error-message">{error}</div>}

            {/* Colors */}
            <div className="selector-group">
              <h4>Color: <span>{selectedColor || 'Selecciona'}</span></h4>
              <div className="color-options">
                {product.colors.map(color => (
                  <button 
                    key={color}
                    className={`color-btn ${selectedColor === color ? 'active' : ''}`}
                    style={{
                      backgroundColor: color === 'Blanco' ? '#fff' : color === 'Negro' ? '#000' : color === 'Beige' ? '#F5F5DC' : color === 'Gris Claro' ? '#D3D3D3' : color === 'Vino' ? '#722F37' : '#ccc'
                    }}
                    title={color}
                    onClick={() => {
                      setSelectedColor(color);
                      setCurrentImageIndex(0);
                      setError('');
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="selector-group">
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h4>Talla: <span>{selectedSize || 'Selecciona'}</span></h4>
                <button className="size-guide-btn" onClick={() => setIsSizeGuideOpen(true)}>Guía de Tallas</button>
              </div>
              <div className="size-options">
                {product.sizes.map(size => (
                  <button 
                    key={size}
                    className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => {
                      setSelectedSize(size);
                      setError('');
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="selector-group">
              <h4>Cantidad</h4>
              <div className="qty-selector">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} disabled={product.stock === 0}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(q => Math.min(product.stock, q + 1))} disabled={product.stock === 0 || quantity >= product.stock}>+</button>
              </div>
            </div>

            {/* Actions */}
            <div className="action-buttons">
              <button 
                className="btn-primary" 
                style={{flex: 1, display: 'flex', justifyContent: 'center', gap: '10px'}}
                onClick={handleAddToCart}
                disabled={product.stock === 0}
              >
                <ShoppingBag size={20} /> Agregar al carrito
              </button>
              <button 
                className="btn-favorite-large"
                onClick={() => toggleFavorite(product.id)}
              >
                <Heart size={24} fill={isFavorite ? 'var(--color-accent)' : 'none'} color={isFavorite ? 'var(--color-accent)' : 'var(--color-black)'} />
              </button>
            </div>
            
            <button 
              className="btn-secondary" 
              style={{width: '100%', marginTop: '15px'}}
              onClick={handleBuyNow}
              disabled={product.stock === 0}
            >
              Comprar Ahora
            </button>
            
            <a 
              href={`https://wa.me/${storeConfig.whatsappNumber}?text=Hola, quiero consultar sobre el producto ${product.name} (Ref: ${product.ref})`} 
              target="_blank" rel="noreferrer"
              className="btn-wa"
            >
              <MessageCircle size={20} /> Consultar por WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Size Guide Modal */}
      {isSizeGuideOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={() => setIsSizeGuideOpen(false)}>×</button>
            <h2 style={{fontFamily: 'var(--font-serif)', marginBottom: '20px', textAlign: 'center'}}>Guía de Tallas</h2>
            <table className="size-table">
              <thead>
                <tr>
                  <th>Talla</th>
                  <th>Busto (cm)</th>
                  <th>Cintura (cm)</th>
                  <th>Cadera (cm)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>XS</td><td>82-86</td><td>62-66</td><td>88-92</td></tr>
                <tr><td>S</td><td>86-90</td><td>66-70</td><td>92-96</td></tr>
                <tr><td>M</td><td>90-94</td><td>70-74</td><td>96-100</td></tr>
                <tr><td>L</td><td>94-100</td><td>74-80</td><td>100-106</td></tr>
                <tr><td>XL</td><td>100-106</td><td>80-86</td><td>106-112</td></tr>
              </tbody>
            </table>
            <p style={{fontSize: '12px', marginTop: '15px', color: '#666', textAlign: 'center'}}>* Las medidas son aproximadas. Si estás entre dos tallas, te recomendamos elegir la mayor.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
