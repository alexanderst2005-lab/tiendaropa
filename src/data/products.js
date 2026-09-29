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
      'Negro': [
        'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80',
        'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80'
      ],
      'Beige': [
        'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80'
      ],
      'Vino': [
        'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80'
      ]
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
      'Blanco': [
        'https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=800&q=80',
        'https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=800&q=80'
      ],
      'Gris Claro': [
        'https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=800&q=80'
      ]
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
    stock: 5, // Low stock
    images: {
      'Negro': [
        'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?w=800&q=80'
      ],
      'Beige': [
        'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?w=800&q=80'
      ]
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
    category: 'Noche',
    colors: ['Gris Claro', 'Negro'],
    sizes: ['S', 'M', 'L'],
    stock: 0, // Out of stock
    images: {
      'Gris Claro': [
        'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=800&q=80'
      ],
      'Negro': [
        'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=800&q=80'
      ]
    },
    featured: true,
    created_at: '2026-09-20'
  },
  {
    id: 5,
    name: 'Top Asimétrico',
    ref: 'TP-005',
    price: 950000,
    description: 'Top con diseño asimétrico moderno. Ideal para una salida casual.',
    category: 'Nueva colección',
    colors: ['Blanco', 'Negro'],
    sizes: ['S', 'M', 'L'],
    stock: 20,
    images: {
      'Blanco': [
        'https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=800&q=80'
      ],
      'Negro': [
        'https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=800&q=80'
      ]
    },
    featured: false,
    created_at: '2026-09-28'
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
