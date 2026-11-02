import React, { useState } from 'react';
import { ShoppingBag, Eye, Check, Sparkles, Flame, Tag } from 'lucide-react';
import { Product, ProductColor } from '../types';

interface ProductCardProps {
  product: Product;
  onOpenDetails: (product: Product) => void;
  onAddToCart: (product: Product, color: ProductColor, size: string, quantity: number) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onOpenDetails,
  onAddToCart,
}) => {
  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0]);
  const [isAdded, setIsAdded] = useState(false);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, selectedColor, selectedSize, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1600);
  };

  const getTagBadge = () => {
    if (!product.tag) return null;
    if (product.tag === 'Últimas Piezas') {
      return (
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-black text-white bg-gradient-to-r from-[#D946EF] to-[#EF4444] shadow-md">
          <Flame className="w-3.5 h-3.5 text-yellow-300" />
          {product.tag}
        </span>
      );
    }
    if (product.tag === 'Lo Más Nuevo') {
      return (
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-black text-white bg-gradient-to-r from-[#2563EB] to-[#EAB308] shadow-md">
          <Sparkles className="w-3.5 h-3.5 text-yellow-200" />
          {product.tag}
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold text-slate-800 bg-white/95 backdrop-blur-sm border border-slate-200 shadow-sm">
        <Tag className="w-3.5 h-3.5 text-blue-600" />
        {product.tag}
      </span>
    );
  };

  const discountPercent = Math.round(
    ((product.detalPrice - product.wholesalePrice) / product.detalPrice) * 100
  );

  return (
    <div
      onClick={() => onOpenDetails(product)}
      className="group relative bg-white rounded-2xl sm:rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1"
    >
      {/* Product Image & Badges (Vertical 3:4 fashion ratio) */}
      <div className="relative aspect-3/4 overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Top Badges */}
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10 flex flex-col gap-1 items-start">
          {getTagBadge()}
        </div>

        {/* Direct factory savings badge */}
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10">
          <span className="px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[9px] sm:text-[11px] font-black text-white bg-slate-900/80 backdrop-blur-xs">
            -{discountPercent}% Mayor
          </span>
        </div>

        {/* Hover Quick Action */}
        <div className="hidden sm:flex absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity items-center justify-center gap-3">
          <span className="px-4 py-2 rounded-xl bg-white/95 text-slate-900 text-xs font-bold shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <Eye className="w-4 h-4 text-blue-600" />
            <span>Ver Ficha Técnica</span>
          </span>
        </div>
      </div>

      {/* Product Body */}
      <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="text-[9px] sm:text-[11px] font-bold text-blue-600 uppercase tracking-wider mb-0.5 sm:mb-1 truncate">
            {product.categoryLabel}
          </div>

          <h3 className="text-xs sm:text-base font-bold text-slate-900 leading-snug mb-1 sm:mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">
            {product.name}
          </h3>

          <p className="text-[10px] sm:text-xs text-slate-500 mb-2 sm:mb-4 line-clamp-1 sm:line-clamp-2">
            {product.fabric}
          </p>
        </div>

        {/* Double Pricing Card Requirement */}
        <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-2 sm:p-3 border border-slate-100 mb-2 sm:mb-4">
          <div className="flex items-center justify-between text-[10px] sm:text-xs mb-1">
            <span className="text-slate-500 font-medium">Detal:</span>
            <span className="font-bold text-slate-800 text-xs sm:text-sm">
              ${product.detalPrice.toFixed(2)}
            </span>
          </div>

          <div className="flex items-center justify-between pt-1 border-t border-slate-200/80">
            <div>
              <span className="font-extrabold text-fuchsia-600 text-[10px] sm:text-xs block leading-tight">
                Mayor:
              </span>
              <span className="text-[8px] sm:text-[10px] text-slate-400 font-medium block">
                (+{product.minWholesaleQty} unds)
              </span>
            </div>
            <span className="font-black text-fuchsia-600 text-sm sm:text-base">
              ${product.wholesalePrice.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Color swatches & sizes preview (Compact on mobile) */}
        <div className="hidden xs:flex items-center justify-between mb-2 sm:mb-4">
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
              {product.colors.slice(0, 3).map((c) => (
                <button
                  key={c.name}
                  onClick={() => setSelectedColor(c)}
                  title={c.name}
                  className={`w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 rounded-full border transition-transform cursor-pointer ${
                    selectedColor.name === c.name ? 'scale-125 border-slate-900' : 'border-slate-200'
                  }`}
                  style={{ backgroundColor: c.hex }}
                />
              ))}
            </div>
          </div>

          {/* Sizes preview */}
          <div className="flex items-center gap-0.5 sm:gap-1" onClick={(e) => e.stopPropagation()}>
            {product.sizes.slice(0, 3).map((s) => (
              <span
                key={s}
                className="text-[9px] sm:text-[10px] font-bold px-1 py-0.5 rounded bg-slate-100 text-slate-600"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleQuickAdd}
          className={`w-full py-2 sm:py-2.5 px-2 sm:px-4 rounded-xl text-[11px] sm:text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs active:scale-95 ${
            isAdded
              ? 'bg-emerald-600 text-white'
              : 'bg-slate-900 hover:bg-blue-600 text-white'
          }`}
        >
          {isAdded ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>¡Agregado!</span>
            </>
          ) : (
            <>
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Agregar</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
