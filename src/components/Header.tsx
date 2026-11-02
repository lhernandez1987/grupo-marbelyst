import React, { useState } from 'react';
import { ShoppingBag, Search, X, MessageCircle, Layers, ChevronDown } from 'lucide-react';
import { Product } from '../types';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onSelectCategory: (cat: string) => void;
  onSearch: (query: string) => void;
  searchQuery: string;
  onNavigateSection: (sectionId: string) => void;
  allProducts: Product[];
  onSelectProduct: (product: Product) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onSelectCategory,
  onSearch,
  searchQuery,
  onNavigateSection,
  allProducts,
  onSelectProduct
}) => {
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);

  const categories = [
    { id: 'todos', label: 'Todo el Catálogo' },
    { id: 'franelas', label: 'Franelas & T-Shirts' },
    { id: 'polos', label: 'Polos & Piqué' },
    { id: 'corporativo', label: 'Corporativo & Uniformes' },
    { id: 'deportivo', label: 'Deportivo & Sublimado' },
    { id: 'gorras', label: 'Gorras & Merch' },
  ];

  const searchResults = searchQuery.trim()
    ? allProducts.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.fabric.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
      {/* Top Banner with direct factory value notice */}
      <div className="bg-slate-900 text-slate-100 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-fuchsia-500 text-white uppercase tracking-wider">
              Fábrica Directa
            </span>
            <span className="hidden sm:inline font-medium text-slate-300">
              Ahorra hasta 35% en pedidos al mayor (a partir de 50 prendas)
            </span>
            <span className="sm:hidden font-medium text-slate-300">
              Ventas al mayor y detal directo de taller
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-300 font-medium">
            <span className="hidden md:inline">Envíos a todo el país</span>
            
            {/* Instagram Link */}
            <a
              href="https://www.instagram.com/grupomarbelyst"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-fuchsia-400 hover:text-fuchsia-300 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-linear-to-tr from-amber-400 via-rose-500 to-fuchsia-500"></span>
              <span className="font-bold">@grupomarbelyst</span>
            </a>

            <a
              href="https://wa.me/584120000000?text=Hola%20Grupo%20Marbelyst,%20deseo%20información%20sobre%20fabricación%20textil"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp de Ventas</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left Navigation: Tienda, Categorías, Servicios */}
          <nav className="hidden lg:flex items-center space-x-7 text-sm font-semibold text-slate-700">
            <button
              onClick={() => {
                onNavigateSection('catalogo');
                onSelectCategory('todos');
              }}
              className="hover:text-blue-600 transition-colors cursor-pointer py-2"
            >
              Tienda
            </button>

            {/* Dropdown Categorias */}
            <div className="relative group">
              <button
                onClick={() => setShowCategoryMenu(!showCategoryMenu)}
                onMouseEnter={() => setShowCategoryMenu(true)}
                className="flex items-center gap-1 hover:text-blue-600 transition-colors cursor-pointer py-2"
              >
                <span>Categorías</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-transform group-hover:rotate-180" />
              </button>

              {/* Categorías Dropdown Panel */}
              {showCategoryMenu && (
                <div
                  onMouseLeave={() => setShowCategoryMenu(false)}
                  className="absolute left-0 top-full mt-1 w-56 rounded-xl bg-white shadow-xl border border-slate-100 py-2.5 z-50 animate-in fade-in slide-in-from-top-1"
                >
                  <div className="px-3 py-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Líneas de Producción
                  </div>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        onSelectCategory(cat.id);
                        onNavigateSection('catalogo');
                        setShowCategoryMenu(false);
                      }}
                      className="w-full text-left px-3.5 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors flex items-center justify-between cursor-pointer"
                    >
                      <span>{cat.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => onNavigateSection('servicios')}
              className="hover:text-blue-600 transition-colors cursor-pointer py-2"
            >
              Servicios
            </button>

            <button
              onClick={() => onNavigateSection('cotizador')}
              className="text-fuchsia-600 hover:text-fuchsia-700 font-bold transition-colors cursor-pointer py-2 flex items-center gap-1.5"
            >
              <span>Cotización Corporativa</span>
              <span className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse"></span>
            </button>
          </nav>

          {/* Center Brand Isotype / Logo "Grupo Marbelyst" */}
          <div className="flex-1 lg:flex-none flex justify-start lg:justify-center">
            <button
              onClick={() => onNavigateSection('hero')}
              className="flex items-center gap-3 text-left group cursor-pointer"
            >
              <div className="relative w-11 h-11 rounded-xl bg-slate-900 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform overflow-hidden border border-slate-800">
                {/* Visual accent color ribbons matching prompt */}
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#D946EF] rounded-full blur-[2px] opacity-80" />
                <div className="absolute -bottom-1 -left-1 w-5 h-5 bg-[#2563EB] rounded-full blur-[2px] opacity-80" />
                <div className="absolute top-0 left-0 w-2.5 h-2.5 bg-[#EAB308] rounded-full opacity-90" />
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#EF4444] rounded-full opacity-90" />
                <Layers className="w-6 h-6 text-white relative z-10" />
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 font-heading">
                    Grupo <span className="text-[#2563EB]">Marbe</span><span className="text-[#D946EF]">lyst</span>
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  <span>Industria Textil</span>
                  <span className="inline-block w-1 h-1 rounded-full bg-slate-300"></span>
                  <span className="text-blue-600">Fábrica Directa</span>
                </div>
              </div>
            </button>
          </div>

          {/* Right Action Icons: Search & Cart */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick search button */}
            <div className="relative">
              <button
                onClick={() => setShowSearchModal(!showSearchModal)}
                className="p-2.5 rounded-full text-slate-700 hover:text-blue-600 hover:bg-slate-100 transition-colors cursor-pointer"
                title="Buscar prendas o servicios"
                aria-label="Buscar"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Floating search dropdown */}
              {showSearchModal && (
                <div className="absolute right-0 top-full mt-2 w-72 sm:w-88 bg-white rounded-2xl shadow-2xl border border-slate-200 p-3 z-50 animate-in fade-in zoom-in-95">
                  <div className="relative flex items-center">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="Buscar por franela, polo, dryfit..."
                      value={searchQuery}
                      onChange={(e) => onSearch(e.target.value)}
                      autoFocus
                      className="w-full pl-9 pr-8 py-2 text-sm bg-slate-100 rounded-xl border-none focus:outline-hidden focus:ring-2 focus:ring-blue-500 text-slate-800 placeholder:text-slate-400"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => onSearch('')}
                        className="absolute right-2.5 text-slate-400 hover:text-slate-600"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  {/* Instant suggestions */}
                  {searchQuery && (
                    <div className="mt-2 max-h-60 overflow-y-auto divide-y divide-slate-100">
                      {searchResults.length > 0 ? (
                        searchResults.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => {
                              onSelectProduct(item);
                              setShowSearchModal(false);
                            }}
                            className="w-full text-left p-2 hover:bg-slate-50 rounded-lg flex items-center gap-3 transition-colors cursor-pointer"
                          >
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-10 h-10 object-cover rounded-md"
                            />
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-bold text-slate-900 truncate">
                                {item.name}
                              </p>
                              <p className="text-[11px] text-slate-500">
                                Mayor: ${item.wholesalePrice.toFixed(2)} | Detal: ${item.detalPrice.toFixed(2)}
                              </p>
                            </div>
                          </button>
                        ))
                      ) : (
                        <p className="text-xs text-slate-500 text-center py-4">
                          No encontramos productos con "{searchQuery}"
                        </p>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Cart Icon with reactive item count */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full text-slate-700 hover:text-fuchsia-600 hover:bg-slate-100 transition-colors flex items-center gap-2 cursor-pointer"
              title="Ver Carrito de Compras"
              aria-label="Carrito de compras"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-gradient-to-r from-fuchsia-500 to-red-500 text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-sm animate-scale">
                    {cartCount > 99 ? '99+' : cartCount}
                  </span>
                )}
              </div>
              <span className="hidden md:inline text-xs font-bold text-slate-700">
                Carrito
              </span>
            </button>

            {/* Quick Call to Action Cotizar */}
            <button
              onClick={() => onNavigateSection('cotizador')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-blue-600 transition-all shadow-xs cursor-pointer"
            >
              Cotizar Lote
            </button>
          </div>
        </div>

        {/* Mobile Submenu Bar */}
        <div className="lg:hidden flex items-center justify-around py-2.5 border-t border-slate-100 text-xs font-semibold text-slate-600">
          <button
            onClick={() => {
              onNavigateSection('catalogo');
              onSelectCategory('todos');
            }}
            className="hover:text-blue-600 py-1"
          >
            Tienda
          </button>
          <button
            onClick={() => {
              onNavigateSection('catalogo');
              onSelectCategory('franelas');
            }}
            className="hover:text-blue-600 py-1"
          >
            Categorías
          </button>
          <button
            onClick={() => onNavigateSection('servicios')}
            className="hover:text-blue-600 py-1"
          >
            Servicios
          </button>
          <button
            onClick={() => onNavigateSection('cotizador')}
            className="text-fuchsia-600 font-bold py-1"
          >
            Cotización
          </button>
        </div>
      </div>
    </header>
  );
};
