export const products = [
  {
    id: 1,
    name: 'Vestido Midi Seda',
    ref: 'VS-001',
    price: 250000,
    description: 'Elegante vestido midi en seda con caída fluida. Perfecto para eventos de noche o cocteles.',
    category: 'Elegante',
    colors: ['Negro', 'Beige', 'Vino'],
    sizes: ['S', 'M', 'L'],
    stock: 15,
    images: {
      'Negro': ['https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80', 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80'],
      'Beige': ['https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80'],
      'Vino': ['https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80']
    },
    featured: true,
    created_at: '2026-09-01'
  },
  {
    id: 2,
    name: 'Blusa Básica Lino',
    ref: 'BL-002',
    price: 120000,
    description: 'Blusa de lino transpirable, ideal para el día a día. Corte holgado y sofisticado.',
    category: 'Básicos',
    colors: ['Blanco', 'Gris Claro'],
    sizes: ['XS', 'S', 'M', 'L'],
    stock: 30,
    images: {
      'Blanco': ['https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=800&q=80'],
      'Gris Claro': ['https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=800&q=80']
    },
    featured: true,
    created_at: '2026-09-10'
  },
  {
    id: 3,
    name: 'Pantalón Sastre Recto',
    ref: 'PT-003',
    price: 180000,
    description: 'Pantalón de corte sastre impecable. Cintura alta y bota recta para alargar la silueta.',
    category: 'Casual',
    colors: ['Negro', 'Beige'],
    sizes: ['S', 'M', 'L', 'XL'],
    stock: 5,
    images: {
      'Negro': ['https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?w=800&q=80'],
      'Beige': ['https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?w=800&q=80']
    },
    featured: true,
    created_at: '2026-09-15'
  },
  {
    id: 4,
    name: 'Abrigo Largo Lana',
    ref: 'AB-004',
    price: 450000,
    description: 'Abrigo estructurado en mezcla de lana. El toque final para cualquier look de invierno.',
    category: 'Elegante',
    colors: ['Gris Claro', 'Negro'],
    sizes: ['S', 'M', 'L'],
    stock: 0,
    images: {
      'Gris Claro': ['https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=800&q=80'],
      'Negro': ['https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=800&q=80']
    },
    featured: true,
    created_at: '2026-09-20'
  },
  {
    id: 5,
    name: 'Top Asimétrico',
    ref: 'TP-005',
    price: 95000,
    description: 'Top con diseño asimétrico moderno. Ideal para una salida casual.',
    category: 'Nueva Colección',
    colors: ['Blanco', 'Negro'],
    sizes: ['S', 'M', 'L'],
    stock: 20,
    images: {
      'Blanco': ['https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=800&q=80'],
      'Negro': ['https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=800&q=80']
    },
    featured: false,
    created_at: '2026-09-28'
  },
  {
    id: 6,
    name: 'Vestido Cruzado Floral',
    ref: 'VS-006',
    price: 160000,
    description: 'Vestido cruzado con estampado sutil. Excelente ajuste y tela ligera.',
    category: 'Casual',
    colors: ['Beige', 'Blanco'],
    sizes: ['S', 'M', 'L'],
    stock: 12,
    images: {
      'Beige': ['https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80'],
      'Blanco': ['https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80']
    },
    featured: false,
    created_at: '2026-09-25'
  },
  {
    id: 7,
    name: 'Camisa Oversize Satín',
    ref: 'CM-007',
    price: 135000,
    description: 'Camisa estilo oversize en tela satinada. Elegante pero relajada.',
    category: 'Elegante',
    colors: ['Blanco', 'Vino'],
    sizes: ['Única'],
    stock: 25,
    images: {
      'Blanco': ['https://images.unsplash.com/photo-1596783049187-578b8fbd86db?w=800&q=80'],
      'Vino': ['https://images.unsplash.com/photo-1596783049187-578b8fbd86db?w=800&q=80']
    },
    featured: false,
    created_at: '2026-09-22'
  },
  {
    id: 8,
    name: 'Chaqueta de Cuero Sintético',
    ref: 'CH-008',
    price: 280000,
    description: 'Chaqueta de corte clásico, imprescindible para cualquier guardarropa.',
    category: 'Básicos',
    colors: ['Negro'],
    sizes: ['S', 'M', 'L'],
    stock: 8,
    images: {
      'Negro': ['https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80']
    },
    featured: true,
    created_at: '2026-09-18'
  },
  {
    id: 9,
    name: 'Falda Plisada',
    ref: 'FA-009',
    price: 110000,
    description: 'Falda midi plisada con cintura elástica. Comodidad y estilo.',
    category: 'Casual',
    colors: ['Negro', 'Gris Claro'],
    sizes: ['S', 'M'],
    stock: 18,
    images: {
      'Negro': ['https://images.unsplash.com/photo-1582142407894-ec85a1260a46?w=800&q=80'],
      'Gris Claro': ['https://images.unsplash.com/photo-1582142407894-ec85a1260a46?w=800&q=80']
    },
    featured: false,
    created_at: '2026-09-12'
  },
  {
    id: 10,
    name: 'Jeans Rectos Clásicos',
    ref: 'JN-010',
    price: 150000,
    description: 'Jeans de tiro alto con lavado vintage y corte recto.',
    category: 'Básicos',
    colors: ['Gris Claro', 'Negro'],
    sizes: ['6', '8', '10', '12'],
    stock: 22,
    images: {
      'Gris Claro': ['https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80'],
      'Negro': ['https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80']
    },
    featured: false,
    created_at: '2026-09-05'
  },
  {
    id: 11,
    name: 'Top Corset Estructurado',
    ref: 'TP-011',
    price: 85000,
    description: 'Top estilo corset que moldea la figura. Perfecto para salir de noche.',
    category: 'Nueva Colección',
    colors: ['Negro', 'Vino'],
    sizes: ['XS', 'S', 'M'],
    stock: 10,
    images: {
      'Negro': ['https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80'],
      'Vino': ['https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80']
    },
    featured: true,
    created_at: '2026-09-28'
  },
  {
    id: 12,
    name: 'Blazer Entallado',
    ref: 'BZ-012',
    price: 210000,
    description: 'Blazer estructurado con hombreras. Ideal para oficina o looks formales.',
    category: 'Elegante',
    colors: ['Beige', 'Negro'],
    sizes: ['S', 'M', 'L'],
    stock: 4,
    images: {
      'Beige': ['https://images.unsplash.com/photo-1548624149-f9b1859aa7d0?w=800&q=80'],
      'Negro': ['https://images.unsplash.com/photo-1548624149-f9b1859aa7d0?w=800&q=80']
    },
    featured: false,
    created_at: '2026-09-08'
  }
];

export const collections = [
  {
    id: 'nueva-coleccion',
    name: 'Nueva Colección',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80'
  },
  {
    id: 'casual',
    name: 'Casual',
    image: 'https://images.unsplash.com/photo-1434389678369-bd410e278cb9?w=1200&q=80'
  },
  {
    id: 'elegante',
    name: 'Elegante',
    image: 'https://images.unsplash.com/photo-1515347619362-6712b591b34a?w=1200&q=80'
  },
  {
    id: 'basicos',
    name: 'Básicos',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=1200&q=80'
  }
];

export const storeConfig = {
  freeShippingThreshold: 300000,
  whatsappNumber: '573000000000',
  topbarMessages: [
    'Envíos a todo Colombia',
    'Envío gratis desde $300.000',
    'Compra fácil y segura',
    'Nueva colección disponible'
  ]
};
