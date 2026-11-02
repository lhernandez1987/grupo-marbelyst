import React from 'react';
import { ProductCard } from './ProductCard';
import { Product, ProductColor, ProductCategory } from '../types';
import { Flame, Sparkles, Filter, RefreshCw, ArrowRight } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  onOpenDetails: (product: Product) => void;
  onAddToCart: (product: Product, color: ProductColor, size: string, quantity: number) => void;
  onGoToQuote: () => void;
  searchQuery?: string;
  onClearSearch?: () => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  activeCategory,
  onSelectCategory,
  onOpenDetails,
  onAddToCart,
  onGoToQuote,
  searchQuery,
  onClearSearch,
}) => {
  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'ultimas', label: 'Últimas Piezas', isSpecial: 'ultimas' },
    { id: 'nuevos', label: 'Lo Más Nuevo', isSpecial: 'nuevos' },
    { id: 'franelas', label: 'Franelas & T-Shirts' },
    { id: 'polos', label: 'Polos & Piqué' },
    { id: 'corporativo', label: 'Corporativo & Dotaciones' },
    { id: 'deportivo', label: 'Deportivo & Sublimado' },
    { id: 'gorras', label: 'Gorras & Merch' },
  ];

  // Filtering logic
  const filteredProducts = products.filter((product) => {
    // Search query filter
    if (searchQuery && searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        product.name.toLowerCase().includes(q) ||
        product.categoryLabel.toLowerCase().includes(q) ||
        product.fabric.toLowerCase().includes(q) ||
        product.recommendedTechnique.toLowerCase().includes(q);
      if (!matchesSearch) return false;
    }

    // Special quick filters
    if (activeCategory === 'ultimas') {
      return product.tag === 'Últimas Piezas';
    }
    if (activeCategory === 'nuevos') {
      return product.tag === 'Lo Más Nuevo';
    }

    // Category filter
    if (activeCategory === 'todos') {
      return true;
    }
    return product.category === activeCategory;
  });

  return (
    <section id="catalogo" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Filter className="w-3.5 h-3.5 text-blue-600" />
              <span>Catálogo Textil Directo</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Prendas Estrella de Fabricación
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1 max-w-xl">
              Selecciona cualquier modelo para ver su doble precio (Detal y Mayorista desde 50 piezas) o personalizar con tu marca.
            </p>
          </div>

          {/* Quick jump to Wholesale Quote */}
          <button
            onClick={onGoToQuote}
            className="self-start md:self-auto inline-flex items-center gap-2 text-xs font-bold text-fuchsia-600 hover:text-fuchsia-700 bg-fuchsia-50 hover:bg-fuchsia-100 px-4 py-2 rounded-xl transition-all border border-fuchsia-200 cursor-pointer"
          >
            <span>¿Requieres más de 100 prendas? Cotiza Lote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Filter Pills / Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;

            if (cat.isSpecial === 'ultimas') {
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold shrink-0 transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#D946EF] to-[#EF4444] text-white shadow-md'
                      : 'bg-white text-slate-700 border border-fuchsia-200 hover:border-fuchsia-400'
                  }`}
                >
                  <Flame className={`w-3.5 h-3.5 ${isActive ? 'text-yellow-200' : 'text-fuchsia-500'}`} />
                  <span>{cat.label}</span>
                </button>
              );
            }

            if (cat.isSpecial === 'nuevos') {
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold shrink-0 transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#2563EB] to-[#EAB308] text-white shadow-md'
                      : 'bg-white text-slate-700 border border-blue-200 hover:border-blue-400'
                  }`}
                >
                  <Sparkles className={`w-3.5 h-3.5 ${isActive ? 'text-yellow-300' : 'text-blue-500'}`} />
                  <span>{cat.label}</span>
                </button>
              );
            }

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold shrink-0 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Search Results Notice if active */}
        {searchQuery && (
          <div className="mb-6 flex items-center justify-between bg-blue-50 border border-blue-200 rounded-xl px-4 py-2.5 text-xs text-blue-900">
            <span>
              Filtrando resultados por: <strong className="font-bold">"{searchQuery}"</strong> ({filteredProducts.length} productos encontrados)
            </span>
            {onClearSearch && (
              <button
                onClick={onClearSearch}
                className="flex items-center gap-1 font-bold text-blue-700 hover:text-blue-900 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Restablecer</span>
              </button>
            )}
          </div>
        )}

        {/* Product Grid (Responsive: 2 cols on mobile, 2 on sm, 4 on lg) */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenDetails={onOpenDetails}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 max-w-lg mx-auto">
            <Filter className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800 mb-1">
              No hay productos en esta categoría o búsqueda
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Intenta seleccionar otra categoría o restablecer los filtros para ver todo nuestro catálogo.
            </p>
            <button
              onClick={() => onSelectCategory('todos')}
              className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-blue-600 transition-colors cursor-pointer"
            >
              Ver Todas las Prendas
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
