import { Product, ServiceItem } from '../types';

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'franela-algodon-20-1',
    name: 'Franela Clásica Algodón Peinado 20/1',
    category: 'franelas',
    categoryLabel: 'Franelas & T-Shirts',
    detalPrice: 7.50,
    wholesalePrice: 4.80,
    minWholesaleQty: 50,
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Blanco Óptico', hex: '#FFFFFF' },
      { name: 'Negro Azabache', hex: '#111827' },
      { name: 'Azul Marino', hex: '#1E3A8A' },
      { name: 'Rojo Carmesí', hex: '#DC2626' },
      { name: 'Gris Jaspe', hex: '#9CA3AF' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    description: 'Camiseta de corte tubular con refuerzo de hombro a hombro. Confeccionada con algodón 100% peinado de fibra larga, ideal para recibir tintas de serigrafía plastisol y DTF sin migración.',
    fabric: '100% Algodón Peinado Jersey',
    grammage: '185 g/m² (Gramaje Pesado)',
    recommendedTechnique: 'Serigrafía Plastisol / DTF Textil',
    inStock: true,
    minProductionDays: 4
  },
  {
    id: 'franela-dryfit-sublimada',
    name: 'Camiseta Dry-Fit Sublimación Total 360°',
    category: 'deportivo',
    categoryLabel: 'Deportivo & Sublimado',
    detalPrice: 12.00,
    wholesalePrice: 7.90,
    minWholesaleQty: 50,
    tag: 'Lo Más Nuevo',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Neón Multitono', hex: '#D946EF' },
      { name: 'Cyan Eléctrico', hex: '#06B6D4' },
      { name: 'Amarillo Fluor', hex: '#EAB308' },
      { name: 'Negro con Degradé', hex: '#1F2937' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
    description: 'Tejido microperforado de alta transpirabilidad y secado ultrarrápido. Estampado por sublimación de alta resolución en toda la prenda con tintas italianas resistentes al sol y lavados constantes.',
    fabric: '100% Poliéster Microfibra Dry-Fit',
    grammage: '145 g/m² (Ultra Liviano Transpirable)',
    recommendedTechnique: 'Sublimación Digital Full Print',
    inStock: true,
    minProductionDays: 5
  },
  {
    id: 'polo-pique-corporativa',
    name: 'Polo Piqué Premium Corporativa',
    category: 'polos',
    categoryLabel: 'Franelas & Polos',
    detalPrice: 14.50,
    wholesalePrice: 9.80,
    minWholesaleQty: 50,
    tag: 'Últimas Piezas',
    image: 'https://images.unsplash.com/photo-1625910513413-7d52671e3b10?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1625910513413-7d52671e3b10?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Azul Rey Corporativo', hex: '#2563EB' },
      { name: 'Negro Clásico', hex: '#111827' },
      { name: 'Blanco Nieve', hex: '#F9FAFB' },
      { name: 'Vinotinto', hex: '#831843' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    description: 'Polo con cuello y puños tejidos antipilling, pechera con 3 botones al tono y aberturas laterales reforzadas. Preparada especialmente para bordados densos sin arrugar la tela.',
    fabric: 'Piqué 65% Algodón / 35% Poliéster',
    grammage: '220 g/m² (Estructura Firme)',
    recommendedTechnique: 'Bordado Computarizado HD',
    inStock: true,
    minProductionDays: 6
  },
  {
    id: 'chemise-bicolor-industrial',
    name: 'Chemise Bicolor Cuello Contraste',
    category: 'corporativo',
    categoryLabel: 'Corporativo & Uniformes',
    detalPrice: 16.00,
    wholesalePrice: 10.90,
    minWholesaleQty: 50,
    tag: 'Directo de Fábrica',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Gris / Amarillo', hex: '#EAB308' },
      { name: 'Azul Marino / Magenta', hex: '#D946EF' },
      { name: 'Negro / Rojo', hex: '#EF4444' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    description: 'Uniforme industrial y corporativo con cortes ergonómicos bicolores en mangas y costados. Confección con costuras reforzadas de doble aguja para uso rudo y diario.',
    fabric: 'Piqué Lacoste Especial Uniformes',
    grammage: '230 g/m²',
    recommendedTechnique: 'Bordado + Serigrafía Espalda',
    inStock: true,
    minProductionDays: 7
  },
  {
    id: 'gorra-trucker-drill',
    name: 'Gorra 5 Paneles Drill & Malla Trucker',
    category: 'gorras',
    categoryLabel: 'Gorras & Merch',
    detalPrice: 6.80,
    wholesalePrice: 3.90,
    minWholesaleQty: 50,
    tag: 'Lo Más Nuevo',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Negro Total', hex: '#000000' },
      { name: 'Azul Royal', hex: '#2563EB' },
      { name: 'Rojo Fuego', hex: '#EF4444' },
      { name: 'Blanco / Malla Negra', hex: '#E5E7EB' }
    ],
    sizes: ['Ajustable Snapback'],
    description: 'Frontal en drill acolchado de alto relieve listo para bordado 3D o parche de goma / sublimado. Malla posterior fresca con broche plástico de 7 puntos.',
    fabric: 'Drill de Algodón Pesado + Malla Poliéster',
    grammage: 'Estructura rígida',
    recommendedTechnique: 'Bordado 3D / Parche Sublimado',
    inStock: true,
    minProductionDays: 5
  },
  {
    id: 'hoodie-algodon-perchado',
    name: 'Hoodie Suéter Capucha Algodón Perchado',
    category: 'corporativo',
    categoryLabel: 'Corporativo & Uniformes',
    detalPrice: 24.00,
    wholesalePrice: 16.50,
    minWholesaleQty: 50,
    tag: 'Últimas Piezas',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Gris Jaspeado', hex: '#9CA3AF' },
      { name: 'Negro Profundo', hex: '#111827' },
      { name: 'Azul Petróleo', hex: '#1E3A8A' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    description: 'Suéter con interior perchado ultra suave al tacto. Bolsillo canguro frontal reforzado, cordones tubulares con punteras metálicas y ojetes antioxidantes.',
    fabric: 'Felpa Perchada 70% Algodón / 30% Poliéster',
    grammage: '310 g/m² (Térmico Premium)',
    recommendedTechnique: 'Serigrafía Tinta Hinchable / Bordado',
    inStock: true,
    minProductionDays: 8
  },
  {
    id: 'camisa-oxford-manga-larga',
    name: 'Camisa Oxford Ejecutiva Manga Larga',
    category: 'corporativo',
    categoryLabel: 'Corporativo & Uniformes',
    detalPrice: 19.50,
    wholesalePrice: 13.90,
    minWholesaleQty: 50,
    tag: 'Directo de Fábrica',
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Azul Cielo', hex: '#93C5FD' },
      { name: 'Blanco Ejecutivo', hex: '#FFFFFF' },
      { name: 'Rosa Pastel', hex: '#F472B6' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    description: 'Confeccionada en tela Oxford pin-point con acabado suave de fácil planchado. Botones perlados reforzados con costura en cruz y bolsillo opcional.',
    fabric: 'Oxford 60% Algodón / 40% Poliéster Easy Care',
    grammage: '150 g/m²',
    recommendedTechnique: 'Bordado Institucional Pecho/Cuello',
    inStock: true,
    minProductionDays: 7
  },
  {
    id: 'tote-bag-lona-ecologica',
    name: 'Tote Bag Lona Cruda Ecológica',
    category: 'merch',
    categoryLabel: 'Gorras & Merch',
    detalPrice: 4.50,
    wholesalePrice: 2.40,
    minWholesaleQty: 50,
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Crudo Natural', hex: '#F5F5DC' },
      { name: 'Negro Mate', hex: '#18181B' }
    ],
    sizes: ['38 x 42 cm + Asas 65cm'],
    description: 'Bolsa ecológica de tela cruda reutilizable de alto calibre. Asas de cinta de espiguilla cruzada con remate en X para soportar hasta 15 kg.',
    fabric: '100% Lienzo de Algodón Crudo Calibre 10',
    grammage: '240 g/m²',
    recommendedTechnique: 'Serigrafía Ecológica al Agua',
    inStock: true,
    minProductionDays: 4
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'sublimacion',
    title: 'Sublimación Digital Full HD',
    subtitle: 'Colores vivos, degradados infinitos y transpirabilidad total',
    description: 'Tecnología de transferencia térmica directa sobre poliéster. Las moléculas de tinta se integran con las fibras textiles sin dejar relieve ni tapar los poros de la tela, garantizando que el diseño nunca se cuartee ni pierda vivacidad.',
    badge: 'Sin límite de colores',
    badgeColor: 'bg-fuchsia-100 text-fuchsia-700 border-fuchsia-300',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
    minQty: 'Desde 12 unidades',
    leadTime: '3 a 5 días hábiles',
    highlights: [
      'Resolución fotográfica de 1440 DPI',
      'Cero tacto: la tinta penetra la fibra molecularmente',
      'Resistencia absoluta al sudor y lavado industrial',
      'Ideal para jerseys deportivos, lycras y merchandising a todo color'
    ],
    bestFor: 'Deportivos, eventos corporativos, camisetas promocionales 360°'
  },
  {
    id: 'serigrafia',
    title: 'Serigrafía Industrial Automática',
    subtitle: 'El estándar de oro para tirajes medianos y masivos',
    description: 'Impresión textil mediante pantallas tensadas de alta precisión y pulpos automáticos. Aplicamos tintas plastisol libres de ftalatos, tintas al agua con tacto cero y efectos especiales como foil metalizado y relieve hinchable.',
    badge: 'Máxima durabilidad',
    badgeColor: 'bg-blue-100 text-blue-700 border-blue-300',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
    minQty: 'Desde 24 unidades',
    leadTime: '4 a 6 días hábiles',
    highlights: [
      'Capacidad diaria de más de 3.500 estampados',
      'Registro milimétrico en hasta 8 colores simultáneos',
      'Tintas certificadas eco-friendly sin metales pesados',
      'Termofijado en túnel infrarrojo para resistencia de +100 lavadas'
    ],
    bestFor: 'Marcas de ropa urbana, uniformes masivos, franelas promocionales'
  },
  {
    id: 'bordados',
    title: 'Bordado Computarizado HD',
    subtitle: 'Elegancia institucional con relieve y textura premium',
    description: 'Bordadoras industriales multicabezal con tecnología de corte de hilo automático. Empleamos hilos de poliéster trilobal brillante de alta resistencia y entretelas alemanas que evitan deformaciones con el paso del tiempo.',
    badge: 'Acabado institucional',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    minQty: 'Desde 20 unidades',
    leadTime: '5 a 7 días hábiles',
    highlights: [
      'Puntadas precisas con densidad personalizada de hilos',
      'Efecto 3D en gorras (bordado con goma EVA interna)',
      'Hilos resistentes al cloro y lavados industriales intensos',
      'Digitalización y ponchado profesional sin cargo en pedidos mayoristas'
    ],
    bestFor: 'Polos piqué, camisas ejecutivas, chaquetas y gorras estructuradas'
  },
  {
    id: 'confeccion',
    title: 'Confección Textil a la Medida',
    subtitle: 'Patronaje industrial, telas certificadas y taller propio',
    description: 'Desarrollamos tus prendas desde cero. Seleccionamos el tipo de tejido, corte anatómico, confección reforzada con costura overlock de 5 hilos y pegado de marquillas tejidas personalizadas con tu marca.',
    badge: 'Fábrica directa',
    badgeColor: 'bg-red-100 text-red-700 border-red-300',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80',
    minQty: 'Desde 50 unidades',
    leadTime: '7 a 12 días hábiles',
    highlights: [
      'Moldería digital personalizada (dama, caballero, niño y oversize)',
      'Telas con control de encogimiento y solidez de color',
      'Etiquetas estampadas o tejidas en damasco',
      'Empaque individual en bolsas biodegradables con código de barra'
    ],
    bestFor: 'Colecciones de moda privada, dotaciones industriales y pedidos especiales'
  }
];

export const VALUE_PROPS = [
  {
    id: 'envios',
    title: 'Envíos a Nivel Nacional',
    description: 'Despachos garantizados a todas las ciudades por las principales empresas de encomienda o retiro en planta.',
    badge: '100% Cobertura',
    color: 'from-blue-600 to-cyan-500'
  },
  {
    id: 'precios',
    title: 'Precios Directos de Fábrica',
    description: 'Sin intermediarios ni comisionistas. Obtienes el mejor costo por prenda del mercado textil.',
    badge: 'Ahorro Real',
    color: 'from-fuchsia-600 to-pink-500'
  },
  {
    id: 'volumen',
    title: 'Descuentos por Volumen',
    description: 'Escalas de precios preferenciales a partir de 50, 100, 500 y +1.000 piezas para tu empresa.',
    badge: '+50 Unidades',
    color: 'from-amber-500 to-yellow-400'
  },
  {
    id: 'calidad',
    title: 'Calidad Garantizada',
    description: 'Inspección minuciosa pieza por pieza, telas con garantía anti-motas y tintas de alta duración.',
    badge: 'Control Riguroso',
    color: 'from-red-500 to-rose-600'
  }
];
