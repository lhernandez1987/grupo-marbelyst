import React, { useState } from 'react';
import { X, Check, ShoppingBag, Layers, Scissors, ShieldCheck, MessageCircle } from 'lucide-react';
import { Product, ProductColor } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, color: ProductColor, size: string, quantity: number) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null;

  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0] || { name: 'Estándar', hex: '#000000' });
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'M');
  const [quantity, setQuantity] = useState<number>(1);
  const [activeImage, setActiveImage] = useState<string>(product.image);
  const [addedNotice, setAddedNotice] = useState<boolean>(false);

  const isWholesale = quantity >= product.minWholesaleQty;
  const currentUnitPrice = isWholesale ? product.wholesalePrice : product.detalPrice;
  const totalPrice = currentUnitPrice * quantity;
  const savings = (product.detalPrice - product.wholesalePrice) * quantity;

  const handleAdd = () => {
    onAddToCart(product, selectedColor, selectedSize, quantity);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="relative bg-white rounded-t-3xl sm:rounded-3xl max-w-3xl w-full max-h-[92vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 animate-in slide-in-from-bottom sm:zoom-in-95">
        {/* Mobile handle indicator */}
        <div className="sm:hidden w-12 h-1.5 bg-slate-300 rounded-full mx-auto mt-2.5 mb-1" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Cerrar modal"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Gallery & Visual */}
          <div className="bg-slate-50 p-4 sm:p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-100">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-xs border border-slate-200/60 mb-4">
              <img
                src={activeImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.tag && (
                <span className="absolute top-3 left-3 px-3 py-1 text-xs font-bold rounded-full bg-slate-900 text-white shadow-md">
                  {product.tag}
                </span>
              )}
            </div>

            {/* Thumbnails */}
            {product.gallery && product.gallery.length > 1 && (
              <div className="flex gap-2">
                {product.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`w-14 h-14 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                      activeImage === img ? 'border-blue-600 scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Quality assurance notice */}
            <div className="mt-4 pt-4 border-t border-slate-200 text-xs text-slate-500 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Garantía de confección directa Grupo Marbelyst</span>
            </div>
          </div>

          {/* Product Info & Purchase Options */}
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-bold text-blue-600 uppercase tracking-wider mb-1">
                {product.categoryLabel}
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 font-heading">
                {product.name}
              </h2>

              {/* Dual Pricing Display */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 mb-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase text-slate-500 block">
                      Precio Detal
                    </span>
                    <span className="text-xl font-bold text-slate-700">
                      ${product.detalPrice.toFixed(2)}
                    </span>
                    <span className="text-[10px] text-slate-400 block">1 a 49 unidades</span>
                  </div>

                  <div className="border-l border-slate-200 pl-4">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-black uppercase text-fuchsia-600 block">
                        Precio Mayorista
                      </span>
                      <span className="bg-fuchsia-100 text-fuchsia-700 text-[9px] font-bold px-1.5 py-0.2 rounded">
                        -35% OFF
                      </span>
                    </div>
                    <span className="text-2xl font-black text-fuchsia-600">
                      ${product.wholesalePrice.toFixed(2)}
                    </span>
                    <span className="text-[10px] text-slate-500 block font-medium">
                      A partir de 50 unds
                    </span>
                  </div>
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="space-y-1.5 text-xs text-slate-600 mb-5">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-slate-400 shrink-0" />
                  <span><strong>Tejido:</strong> {product.fabric} ({product.grammage})</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scissors className="w-4 h-4 text-slate-400 shrink-0" />
                  <span><strong>Técnica ideal:</strong> {product.recommendedTechnique}</span>
                </div>
              </div>

              {/* Color Selector */}
              <div className="mb-4">
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Color Disponible: <span className="font-semibold text-blue-600">{selectedColor.name}</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c)}
                      className={`group relative flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium cursor-pointer transition-all ${
                        selectedColor.name === c.name
                          ? 'border-blue-600 bg-blue-50 text-blue-900 shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-slate-300"
                        style={{ backgroundColor: c.hex }}
                      />
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selector */}
              <div className="mb-6">
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Talla:
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`px-3 py-1.5 rounded-xl border text-xs font-bold cursor-pointer transition-all ${
                        selectedSize === s
                          ? 'bg-slate-900 border-slate-900 text-white shadow-xs'
                          : 'border-slate-200 hover:border-slate-400 text-slate-700'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Picker & Live Price preview */}
              <div className="flex items-center gap-4 mb-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Cantidad:
                  </label>
                  <div className="flex items-center border border-slate-300 rounded-xl overflow-hidden bg-slate-50">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-1.5 text-slate-600 hover:bg-slate-200 font-bold"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min={1}
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-14 text-center font-bold text-slate-800 text-sm bg-transparent border-none focus:outline-hidden"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-1.5 text-slate-600 hover:bg-slate-200 font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex-1 text-right">
                  <span className="text-[11px] text-slate-500 block">Subtotal Estimado</span>
                  <span className="text-xl font-black text-slate-900">
                    ${totalPrice.toFixed(2)}
                  </span>
                  {isWholesale && savings > 0 && (
                    <span className="text-[10px] text-emerald-600 font-bold block">
                      ¡Ahorro mayorista: ${savings.toFixed(2)}!
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Add to Cart Actions */}
            <div className="space-y-2">
              <button
                onClick={handleAdd}
                className="w-full py-3.5 px-6 rounded-2xl font-bold text-white bg-slate-900 hover:bg-blue-600 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                {addedNotice ? (
                  <>
                    <Check className="w-5 h-5 text-emerald-400" />
                    <span>¡Agregado al Carrito!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-5 h-5" />
                    <span>Agregar al Carrito ({quantity} {quantity === 1 ? 'und' : 'unds'})</span>
                  </>
                )}
              </button>

              <a
                href={`https://wa.me/584120000000?text=Hola%20Grupo%20Marbelyst,%20estoy%20interesado%20en%20el%20producto%20${encodeURIComponent(product.name)}%20en%20color%20${encodeURIComponent(selectedColor.name)}%20y%20talla%20${encodeURIComponent(selectedSize)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl border border-slate-200 hover:bg-slate-50 text-xs font-semibold text-slate-700 flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-500" />
                <span>Consultar Disponibilidad por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
