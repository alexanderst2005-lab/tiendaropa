import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, ShoppingBag } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, storeConfig } = useStore();
  const navigate = useNavigate();

  const total = getCartTotal();
  const shipping = total >= storeConfig.freeShippingThreshold ? 0 : 15000;
  const finalTotal = total + shipping;

  const formatPrice = (price) => new Intl.NumberFormat('es-CO', {
    style: 'currency', currency: 'COP', minimumFractionDigits: 0
  }).format(price);

  if (cart.length === 0) {
    return (
      <div className="cart-empty section-padding text-center">
        <div className="container" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px'}}>
          <ShoppingBag size={64} color="#ccc" />
          <h2 style={{fontFamily: 'var(--font-serif)'}}>Tu carrito está vacío</h2>
          <p style={{color: '#666'}}>Parece que aún no has agregado nada a tu carrito.</p>
          <Link to="/tienda" className="btn-primary mt-4">Continuar Comprando</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page section-padding">
      <div className="container">
        <h1 className="section-title">Tu Carrito</h1>
        
        <div className="cart-layout">
          <div className="cart-items">
            {/* Desktop Table Header */}
            <div className="cart-header d-none d-md-grid">
              <div>Producto</div>
              <div style={{textAlign: 'center'}}>Precio</div>
              <div style={{textAlign: 'center'}}>Cantidad</div>
              <div style={{textAlign: 'right'}}>Subtotal</div>
            </div>

            {/* Items */}
            {cart.map((item, index) => (
              <div className="cart-item" key={index}>
                <div className="item-product">
                  <button className="remove-btn-mobile d-md-none" onClick={() => removeFromCart(index)}>
                    <Trash2 size={16} />
                  </button>
                  <Link to={`/producto/${item.id}`}>
                    <img src={item.images[item.color][0]} alt={item.name} />
                  </Link>
                  <div className="item-details">
                    <Link to={`/producto/${item.id}`} className="item-name">{item.name}</Link>
                    <p className="item-variant">Color: {item.color} | Talla: {item.size}</p>
                    <p className="item-price-mobile d-md-none">{formatPrice(item.price)}</p>
                  </div>
                </div>
                
                <div className="item-price d-none d-md-block" style={{textAlign: 'center'}}>
                  {formatPrice(item.price)}
                </div>
                
                <div className="item-quantity" style={{display: 'flex', justifyContent: 'center'}}>
                  <div className="qty-selector-small">
                    <button onClick={() => updateQuantity(index, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(index, 1)}>+</button>
                  </div>
                </div>
                
                <div className="item-subtotal d-none d-md-flex" style={{justifyContent: 'flex-end', alignItems: 'center', gap: '15px'}}>
                  {formatPrice(item.price * item.quantity)}
                  <button className="remove-btn" onClick={() => removeFromCart(index)} title="Eliminar">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary-wrapper">
            <div className="cart-summary">
              <h3 style={{fontFamily: 'var(--font-serif)', marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '10px'}}>Resumen del pedido</h3>
              
              <div className="summary-row">
                <span>Subtotal</span>
                <span>{formatPrice(total)}</span>
              </div>
              <div className="summary-row">
                <span>Envío</span>
                <span>{shipping === 0 ? 'Gratis' : formatPrice(shipping)}</span>
              </div>
              
              <div className="summary-total">
                <span>Total</span>
                <span>{formatPrice(finalTotal)}</span>
              </div>
              
              {shipping > 0 && (
                <p style={{fontSize: '12px', color: '#666', textAlign: 'center', marginBottom: '20px'}}>
                  Te faltan {formatPrice(storeConfig.freeShippingThreshold - total)} para envío gratis.
                </p>
              )}

              <button 
                className="btn-primary" 
                style={{width: '100%', marginBottom: '15px'}}
                onClick={() => navigate('/checkout')}
              >
                Finalizar Compra
              </button>
              <Link to="/tienda" className="btn-secondary" style={{width: '100%', display: 'block', textAlign: 'center'}}>
                Seguir Comprando
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
