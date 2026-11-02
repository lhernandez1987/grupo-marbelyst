export type ProductCategory = 
  | 'todos' 
  | 'franelas' 
  | 'polos' 
  | 'corporativo' 
  | 'deportivo' 
  | 'gorras' 
  | 'merch';

export type ProductTag = 'Últimas Piezas' | 'Lo Más Nuevo' | 'Bestseller' | 'Directo de Fábrica';

export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  detalPrice: number;
  wholesalePrice: number; // For >= 50 units
  minWholesaleQty: number; // default 50
  tag?: ProductTag;
  image: string;
  gallery: string[];
  colors: ProductColor[];
  sizes: string[];
  description: string;
  fabric: string;
  grammage: string;
  recommendedTechnique: string;
  inStock: boolean;
  minProductionDays: number;
}

export interface CartItem {
  id: string; // generated unique id: productId + color + size
  product: Product;
  selectedColor: ProductColor;
  selectedSize: string;
  quantity: number;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  badgeColor: string;
  image: string;
  minQty: string;
  leadTime: string;
  highlights: string[];
  bestFor: string;
}

export interface WholesaleQuoteRequest {
  companyName: string;
  contactName: string;
  phone: string;
  email: string;
  city: string;
  serviceId: string;
  productType: string;
  quantity: number;
  customizationTechniques: string[];
  needDesignAssistance: boolean;
  notes: string;
  fileName?: string;
}
