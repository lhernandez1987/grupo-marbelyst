import React from 'react';
import { Sparkles, Flame, Shirt, Shield, Layers, Award } from 'lucide-react';

interface CategoryCirclesProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export const CATEGORY_ITEMS = [
  {
    id: 'todos',
    label: 'Todo el Catálogo',
    sublabel: 'Colección Completa',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=300&q=80',
    badge: 'Fábrica'
  },
  {
    id: 'ultimas',
    label: 'Últimas Piezas',
    sublabel: 'Pocas Unidades',
    image: 'https://images.unsplash.com/photo-1625910513413-7d52671e3b10?auto=format&fit=crop&w=300&q=80',
    badge: 'Ofertas',
    isSpecial: 'ultimas'
  },
  {
    id: 'nuevos',
    label: 'Lo Más Nuevo',
    sublabel: 'Lanzamiento',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=300&q=80',
    badge: 'Nuevo',
    isSpecial: 'nuevos'
  },
  {
    id: 'franelas',
    label: 'Franelas & Oversize',
    sublabel: 'Algodón 20/1 Peinado',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=300&q=80',
    badge: 'Top Ventas'
  },
  {
    id: 'polos',
    label: 'Polos & Piqué',
    sublabel: 'Bordado Ejecutivo',
    image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?auto=format&fit=crop&w=300&q=80',
    badge: 'Premium'
  },
  {
    id: 'deportivo',
    label: 'Dry-Fit Sublimado',
    sublabel: 'Full Print 360°',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=300&q=80',
    badge: 'Deportes'
  },
  {
    id: 'corporativo',
    label: 'Dotaciones & Hoodies',
    sublabel: 'Uniformes Industriales',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=300&q=80',
    badge: 'Empresas'
  },
  {
    id: 'gorras',
    label: 'Gorras & Merch',
    sublabel: 'Bordado 3D & Drill',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=300&q=80',
    badge: 'Accesorios'
  }
];

export const CategoryCircles: React.FC<CategoryCirclesProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <section className="py-8 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-[11px] font-black tracking-widest uppercase text-blue-600 block mb-0.5">
              Líneas de Producción
            </span>
            <h3 className="text-lg sm:text-xl font-black text-slate-900 font-heading">
              Explora por Categoría
            </h3>
          </div>
          <span className="text-xs font-semibold text-slate-500 hidden sm:inline">
            Directo de taller textil al mayor y detal
          </span>
        </div>

        {/* Horizontal Category Strip (Rossi by Rossi style) */}
        <div className="flex items-center gap-3 sm:gap-6 overflow-x-auto pb-4 scrollbar-none pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x">
          {CATEGORY_ITEMS.map((cat) => {
            const isActive = activeCategory === cat.id;

            let ringClass = 'border-slate-200 group-hover:border-blue-600';
            if (cat.isSpecial === 'ultimas') {
              ringClass = 'border-fuchsia-500 ring-2 ring-fuchsia-500/30';
            } else if (cat.isSpecial === 'nuevos') {
              ringClass = 'border-amber-500 ring-2 ring-amber-500/30';
            } else if (isActive) {
              ringClass = 'border-slate-900 ring-2 ring-slate-900/30';
            }

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className="flex flex-col items-center gap-1.5 sm:gap-2 shrink-0 group cursor-pointer focus:outline-hidden snap-start active:scale-95 transition-transform"
              >
                {/* Visual Category Circle */}
                <div className="relative">
                  <div
                    className={`w-18 h-18 sm:w-24 sm:h-24 rounded-full overflow-hidden p-1 border-2 transition-all duration-300 transform group-hover:scale-105 shadow-xs ${ringClass} ${
                      isActive ? 'scale-105' : ''
                    }`}
                  >
                    <div className="w-full h-full rounded-full overflow-hidden bg-slate-100">
                      <img
                        src={cat.image}
                        alt={cat.label}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Badge */}
                  {cat.badge && (
                    <span
                      className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full shadow-xs whitespace-nowrap ${
                        cat.isSpecial === 'ultimas'
                          ? 'bg-linear-to-r from-[#D946EF] to-[#EF4444] text-white'
                          : cat.isSpecial === 'nuevos'
                          ? 'bg-linear-to-r from-[#2563EB] to-[#EAB308] text-white'
                          : isActive
                          ? 'bg-slate-900 text-white'
                          : 'bg-white text-slate-700 border border-slate-200'
                      }`}
                    >
                      {cat.badge}
                    </span>
                  )}
                </div>

                {/* Labels */}
                <div className="text-center mt-1">
                  <span
                    className={`text-xs font-bold block transition-colors leading-tight max-w-[90px] truncate ${
                      isActive
                        ? 'text-blue-600 font-black'
                        : 'text-slate-800 group-hover:text-blue-600'
                    }`}
                  >
                    {cat.label}
                  </span>
                  <span className="text-[10px] text-slate-400 block max-w-[90px] truncate">
                    {cat.sublabel}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
