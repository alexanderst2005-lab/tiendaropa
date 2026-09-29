import React, { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import ProductCard from '../components/ProductCard';
import './Shop.css';

const Shop = () => {
  const { products } = useStore();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialCategory = searchParams.get('categoria');

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState('destacados');

  const [filters, setFilters] = useState({
    categories: initialCategory ? [initialCategory] : [],
    sizes: [],
    colors: [],
    minPrice: '',
    maxPrice: '',
    inStock: false
  });

  const categories = [...new Set(products.map(p => p.category))];
  const allSizes = [...new Set(products.flatMap(p => p.sizes))];
  const allColors = [...new Set(products.flatMap(p => p.colors))];

  const handleCheckbox = (type, value) => {
    setFilters(prev => {
      const current = prev[type];
      return {
        ...prev,
        [type]: current.includes(value) ? current.filter(item => item !== value) : [...current, value]
      };
    });
  };

  const filteredProducts = useMemo(() => {
    let result = products;

    if (filters.categories.length > 0) {
      result = result.filter(p => filters.categories.includes(p.category));
    }
    if (filters.sizes.length > 0) {
      result = result.filter(p => p.sizes.some(s => filters.sizes.includes(s)));
    }
    if (filters.colors.length > 0) {
      result = result.filter(p => p.colors.some(c => filters.colors.includes(c)));
    }
    if (filters.minPrice) {
      result = result.filter(p => p.price >= Number(filters.minPrice));
    }
    if (filters.maxPrice) {
      result = result.filter(p => p.price <= Number(filters.maxPrice));
    }
    if (filters.inStock) {
      result = result.filter(p => p.stock > 0);
    }

    switch (sortOrder) {
      case 'menor_precio':
        return result.sort((a, b) => a.price - b.price);
      case 'mayor_precio':
        return result.sort((a, b) => b.price - a.price);
      case 'recientes':
        return result.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      case 'destacados':
      default:
        return result.sort((a, b) => (b.featured === a.featured) ? 0 : b.featured ? 1 : -1);
    }
  }, [products, filters, sortOrder]);

  const Sidebar = () => (
    <div className="shop-sidebar">
      <div className="filter-group">
        <h4 className="filter-title">Categorías</h4>
        <div className="filter-list">
          {categories.map(cat => (
            <label key={cat} className="filter-label">
              <input 
                type="checkbox" 
                checked={filters.categories.includes(cat)}
                onChange={() => handleCheckbox('categories', cat)}
              />
              {cat}
            </label>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <h4 className="filter-title">Tallas</h4>
        <div className="filter-list" style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {allSizes.map(size => (
            <label key={size} className="filter-label" style={{border: '1px solid #ccc', padding: '5px 10px'}}>
              <input 
                type="checkbox" 
                checked={filters.sizes.includes(size)}
                onChange={() => handleCheckbox('sizes', size)}
                style={{display: 'none'}}
              />
              <span style={{fontWeight: filters.sizes.includes(size) ? 'bold' : 'normal', color: filters.sizes.includes(size) ? 'var(--color-black)' : '#666'}}>{size}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <h4 className="filter-title">Colores</h4>
        <div className="filter-list" style={{flexDirection: 'row', flexWrap: 'wrap', gap: '15px'}}>
          {allColors.map(color => (
            <div 
              key={color} 
              className={`color-swatch ${filters.colors.includes(color) ? 'active' : ''}`}
              style={{
                backgroundColor: color === 'Blanco' ? '#fff' : color === 'Negro' ? '#000' : color === 'Beige' ? '#F5F5DC' : color === 'Gris Claro' ? '#D3D3D3' : color === 'Vino' ? '#722F37' : '#ccc'
              }}
              title={color}
              onClick={() => handleCheckbox('colors', color)}
            />
          ))}
        </div>
      </div>

      <div className="filter-group">
        <h4 className="filter-title">Disponibilidad</h4>
        <label className="filter-label">
          <input 
            type="checkbox" 
            checked={filters.inStock}
            onChange={(e) => setFilters({...filters, inStock: e.target.checked})}
          />
          En Stock
        </label>
      </div>

      <button className="btn-secondary" style={{width: '100%'}} onClick={() => setFilters({categories:[], sizes:[], colors:[], minPrice:'', maxPrice:'', inStock:false})}>
        Limpiar Filtros
      </button>
    </div>
  );

  return (
    <div className="shop section-padding">
      <div className="container">
        <h1 className="section-title">Tienda</h1>
        
        <div className="shop-header">
          <div className="shop-filters">
            <button className="filter-btn d-lg-none" onClick={() => setIsFilterOpen(true)}>
              <SlidersHorizontal size={18} /> Filtros
            </button>
            <span style={{fontSize: '14px', color: '#666'}}>{filteredProducts.length} productos</span>
          </div>
          
          <select 
            className="sort-select"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="destacados">Destacados</option>
            <option value="recientes">Más Recientes</option>
            <option value="menor_precio">Precio: Menor a Mayor</option>
            <option value="mayor_precio">Precio: Mayor a Menor</option>
          </select>
        </div>

        <div className="shop-layout">
          {/* Desktop Sidebar */}
          <div className="d-none d-lg-block">
            <Sidebar />
          </div>

          {/* Products Grid */}
          <div className="shop-products">
            {filteredProducts.length > 0 ? (
              <div className="products-grid">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div style={{textAlign: 'center', padding: '50px 0'}}>
                <h3>No hay productos que coincidan con los filtros.</h3>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Modal */}
      {isFilterOpen && (
        <div className="modal-overlay">
          <div className="modal-content" style={{height: '100%', maxWidth: '350px', marginLeft: 'auto'}}>
            <button className="modal-close" onClick={() => setIsFilterOpen(false)}><X /></button>
            <h3 style={{marginBottom: '20px', fontFamily: 'var(--font-serif)'}}>Filtros</h3>
            <Sidebar />
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
