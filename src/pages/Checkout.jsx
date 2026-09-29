import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import './Checkout.css';

const Checkout = () => {
  const { cart, getCartTotal, storeConfig } = useStore();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    address: '',
    neighborhood: '',
    notes: ''
  });

  if (cart.length === 0) {
    navigate('/carrito');
    return null;
  }

  const total = getCartTotal();
  const shipping = total >= storeConfig.freeShippingThreshold ? 0 : 15000;
  const finalTotal = total + shipping;

  const formatPrice = (price) => new Intl.NumberFormat('es-CO', {
    style: 'currency', currency: 'COP', minimumFractionDigits: 0
  }).format(price);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateWhatsAppMessage = () => {
    const orderNumber = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    let message = `Hola, quiero realizar el siguiente pedido.\n\n`;
    message += `*Pedido #${orderNumber}*\n\n`;

    cart.forEach(item => {
      message += `*Producto:* ${item.name}\n`;
      message += `*Talla:* ${item.size}\n`;
      message += `*Color:* ${item.color}\n`;
      message += `*Cantidad:* ${item.quantity}\n`;
      message += `*Precio:* ${formatPrice(item.price * item.quantity)}\n\n`;
    });

    message += `*Subtotal:* ${formatPrice(total)}\n`;
    message += `*Envío:* ${formatPrice(shipping)}\n`;
    message += `*Total:* ${formatPrice(finalTotal)}\n\n`;

    message += `*Datos del cliente:*\n\n`;
    message += `Nombre: ${formData.name}\n`;
    message += `Teléfono: ${formData.phone}\n`;
    message += `Correo: ${formData.email}\n`;
    message += `Ciudad: ${formData.city}\n`;
    message += `Dirección: ${formData.address}\n`;
    message += `Barrio: ${formData.neighborhood}\n`;
    if (formData.notes) {
      message += `Notas: ${formData.notes}\n`;
    }
    
    message += `\nQuiero realizar este pedido.`;

    return encodeURIComponent(message);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const waUrl = `https://wa.me/${storeConfig.whatsappNumber}?text=${generateWhatsAppMessage()}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="checkout-page section-padding">
      <div className="container">
        <h1 className="section-title">Finalizar Compra</h1>
        
        <div className="checkout-layout">
          <div className="checkout-form-container">
            <h3 style={{fontFamily: 'var(--font-serif)', marginBottom: '20px'}}>Datos de envío</h3>
            <form onSubmit={handleSubmit} className="checkout-form">
              <div className="form-group">
                <label>Nombre Completo *</label>
                <input type="text" name="name" required value={formData.name} onChange={handleChange} />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Teléfono (WhatsApp) *</label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Correo Electrónico *</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Ciudad *</label>
                  <input type="text" name="city" required value={formData.city} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Barrio *</label>
                  <input type="text" name="neighborhood" required value={formData.neighborhood} onChange={handleChange} />
                </div>
              </div>
              
              <div className="form-group">
                <label>Dirección de Envío *</label>
                <input type="text" name="address" required value={formData.address} onChange={handleChange} />
              </div>
              
              <div className="form-group">
                <label>Notas del Pedido (Opcional)</label>
                <textarea name="notes" rows="3" value={formData.notes} onChange={handleChange} placeholder="Instrucciones especiales para la entrega..."></textarea>
              </div>

              <div className="checkout-disclaimer mt-4">
                <p>Al hacer clic en "Enviar Pedido por WhatsApp", serás redirigido a WhatsApp para confirmar y coordinar el pago de tu compra con nuestro equipo.</p>
              </div>
              
              <button type="submit" className="btn-primary" style={{width: '100%', marginTop: '20px', padding: '15px', fontSize: '16px'}}>
                Enviar Pedido por WhatsApp
              </button>
            </form>
          </div>

          <div className="checkout-summary">
            <h3 style={{fontFamily: 'var(--font-serif)', marginBottom: '20px'}}>Resumen del pedido</h3>
            
            <div className="summary-items">
              {cart.map((item, index) => (
                <div className="summary-item" key={index}>
                  <div className="summary-item-img">
                    <img src={item.images[item.color][0]} alt={item.name} />
                    <span className="summary-item-qty">{item.quantity}</span>
                  </div>
                  <div className="summary-item-info">
                    <h5>{item.name}</h5>
                    <p>{item.color} / {item.size}</p>
                  </div>
                  <div className="summary-item-price">
                    {formatPrice(item.price * item.quantity)}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="summary-totals">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
