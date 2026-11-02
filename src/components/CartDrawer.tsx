import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, MessageCircle, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (itemId: string, newQty: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
  onNavigateToQuote: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onNavigateToQuote,
}) => {
  if (!isOpen) return null;

  // Total pieces count across all items
  const totalPieces = items.reduce((acc, item) => acc + item.quantity, 0);
  const wholesaleThreshold = 50;
  const isWholesaleQualified = totalPieces >= wholesaleThreshold;
  const piecesNeeded = Math.max(0, wholesaleThreshold - totalPieces);

  // Calculate totals
  const subtotalDetal = items.reduce(
    (acc, item) => acc + item.product.detalPrice * item.quantity,
    0
  );

  const finalTotal = items.reduce((acc, item) => {
    // If the cart qualifies for wholesale (>= 50 units total), apply wholesale price
    const unitPrice = isWholesaleQualified
      ? item.product.wholesalePrice
      : item.quantity >= item.product.minWholesaleQty
      ? item.product.wholesalePrice
      : item.product.detalPrice;
    return acc + unitPrice * item.quantity;
  }, 0);

  const totalSavings = Math.max(0, subtotalDetal - finalTotal);

  const handleCheckoutWhatsApp = () => {
    if (items.length === 0) return;

    let itemsList = items
      .map(
        (i, index) =>
          `${index + 1}. *${i.product.name}*\n   - Color: ${i.selectedColor.name}\n   - Talla: ${i.selectedSize}\n   - Cantidad: ${i.quantity} unds\n   - Precio: $${(isWholesaleQualified ? i.product.wholesalePrice : i.product.detalPrice).toFixed(2)} c/u (Subtotal: $${((isWholesaleQualified ? i.product.wholesalePrice : i.product.detalPrice) * i.quantity).toFixed(2)})`
      )
      .join('\n\n');

    const msg = `*PEDIDO DEMO DESDE TIENDA GRUPO MARBELYST*
Total Piezas: ${totalPieces} unidades
Tarifa Aplicada: ${isWholesaleQualified ? 'PRECIO MAYORISTA DE FÁBRICA' : 'PRECIO DETAL'}

*DETALLE DE PRENDAS:*
${itemsList}

*TOTAL A PAGAR:* $${finalTotal.toFixed(2)} USD
${totalSavings > 0 ? `*AHORRO TOTAL:* $${totalSavings.toFixed(2)} USD` : ''}

Por favor coordinar método de pago y tiempo de despacho a mi ciudad.`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/584120000000?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-xs flex justify-end">
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between border-l border-slate-200 animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900 text-base font-heading">
                Carrito de Compras
              </h3>
              <p className="text-xs text-slate-500">
                {totalPieces} {totalPieces === 1 ? 'prenda' : 'prendas'} en el pedido
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-200/80 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Wholesale Unlock Notice */}
        <div className="px-5 py-3 border-b border-slate-100 bg-linear-to-r from-blue-50 via-fuchsia-50 to-amber-50">
          {isWholesaleQualified ? (
            <div className="flex items-center gap-2 text-xs text-fuchsia-900 font-bold">
              <Sparkles className="w-4 h-4 text-fuchsia-600 shrink-0" />
              <span>
                🎉 ¡Felicidades! Se ha activado la tarifa de <strong>Precio Mayorista</strong> en todas tus prendas.
              </span>
            </div>
          ) : (
            <div className="text-xs text-slate-700">
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-slate-600">
                  Desbloquea precio mayorista:
                </span>
                <span className="font-extrabold text-blue-600">
                  {totalPieces} / 50 unds
                </span>
              </div>
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-linear-to-r from-blue-600 to-fuchsia-600 h-full transition-all duration-300"
                  style={{ width: `${Math.min(100, (totalPieces / 50) * 100)}%` }}
                />
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                Agrega <strong>{piecesNeeded} unidades más</strong> para obtener hasta 35% de ahorro directo.
              </p>
            </div>
          )}
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-5 divide-y divide-slate-100 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h4 className="text-base font-bold text-slate-800 mb-1">
                Tu carrito está vacío
              </h4>
              <p className="text-xs text-slate-500 mb-6 max-w-xs mx-auto">
                Explora nuestras franelas, polos y prendas deportivas directas de fábrica para comenzar tu pedido.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-blue-600 transition-colors cursor-pointer"
              >
                Ver Catálogo de Prendas
              </button>
            </div>
          ) : (
            items.map((item) => {
              const unitPrice = isWholesaleQualified
                ? item.product.wholesalePrice
                : item.quantity >= item.product.minWholesaleQty
                ? item.product.wholesalePrice
                : item.product.detalPrice;

              return (
                <div key={item.id} className="pt-4 first:pt-0 flex gap-3.5 items-start">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 rounded-xl object-cover bg-slate-100 border border-slate-200 shrink-0"
                  />

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <h4 className="text-xs font-bold text-slate-900 line-clamp-1">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-slate-400 hover:text-rose-600 p-1 transition-colors"
                        title="Eliminar producto"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center gap-2 text-[11px] text-slate-500 mt-0.5 mb-2">
                      <span className="flex items-center gap-1">
                        <span
                          className="w-2.5 h-2.5 rounded-full border border-slate-300"
                          style={{ backgroundColor: item.selectedColor.hex }}
                        />
                        {item.selectedColor.name}
                      </span>
                      <span>•</span>
                      <span>Talla: <strong>{item.selectedSize}</strong></span>
                    </div>

                    <div className="flex items-center justify-between">
                      {/* Quantity Controller */}
                      <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-0.5 text-slate-600 hover:bg-slate-200 text-xs font-bold"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold text-slate-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-0.5 text-slate-600 hover:bg-slate-200 text-xs font-bold"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="text-xs font-black text-slate-900 block">
                          ${(unitPrice * item.quantity).toFixed(2)}
                        </span>
                        <span className="text-[10px] text-slate-500">
                          ${unitPrice.toFixed(2)} c/u
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer actions */}
        {items.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50 space-y-3 pb-8 sm:pb-5">
            <div className="space-y-1 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal Detal:</span>
                <span>${subtotalDetal.toFixed(2)}</span>
              </div>
              {totalSavings > 0 && (
                <div className="flex justify-between text-emerald-600 font-bold">
                  <span>Ahorro de Fábrica:</span>
                  <span>-${totalSavings.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-slate-900 font-black text-base pt-2 border-t border-slate-200">
                <span>Total Estimado:</span>
                <span>${finalTotal.toFixed(2)} USD</span>
              </div>
            </div>

            <button
              onClick={handleCheckoutWhatsApp}
              className="w-full py-3.5 px-4 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-98"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Enviar Pedido a WhatsApp</span>
            </button>

            <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
              <button
                onClick={onClearCart}
                className="hover:text-rose-600 transition-colors cursor-pointer"
              >
                Vaciar Carrito
              </button>
              <button
                onClick={() => {
                  onClose();
                  onNavigateToQuote();
                }}
                className="text-blue-600 font-bold hover:underline cursor-pointer"
              >
                ¿Quieres lote personalizado?
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
