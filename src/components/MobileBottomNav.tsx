import React from 'react';
import { Home, Shirt, Calculator, MessageCircle, ShoppingBag } from 'lucide-react';

interface MobileBottomNavProps {
  cartCount: number;
  onOpenCart: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  cartCount,
  onOpenCart,
  onNavigateSection,
}) => {
  return (
    <nav className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-slate-200/90 shadow-2xl py-1.5 px-3">
      <div className="grid grid-cols-5 items-center justify-items-center">
        {/* Inicio */}
        <button
          onClick={() => onNavigateSection('hero')}
          className="flex flex-col items-center gap-0.5 py-1 text-slate-600 hover:text-blue-600 active:scale-95 transition-all w-full"
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-semibold">Inicio</span>
        </button>

        {/* Catálogo */}
        <button
          onClick={() => onNavigateSection('catalogo')}
          className="flex flex-col items-center gap-0.5 py-1 text-slate-600 hover:text-blue-600 active:scale-95 transition-all w-full"
        >
          <Shirt className="w-5 h-5" />
          <span className="text-[10px] font-semibold">Catálogo</span>
        </button>

        {/* Cotizar Mayor */}
        <button
          onClick={() => onNavigateSection('cotizador')}
          className="flex flex-col items-center gap-0.5 py-1 text-fuchsia-600 font-bold active:scale-95 transition-all w-full relative"
        >
          <div className="w-8 h-8 rounded-full bg-linear-to-r from-fuchsia-600 to-rose-600 text-white flex items-center justify-center -mt-3 shadow-md border-2 border-white">
            <Calculator className="w-4 h-4" />
          </div>
          <span className="text-[10px] text-fuchsia-600 font-bold">Mayor +50</span>
        </button>

        {/* WhatsApp Direct */}
        <a
          href="https://wa.me/584120000000?text=Hola%20Grupo%20Marbelyst,%20estoy%20en%20la%20tienda%20móvil%20y%20deseo%20asesoría"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-0.5 py-1 text-emerald-600 hover:text-emerald-700 active:scale-95 transition-all w-full"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-[10px] font-semibold">WhatsApp</span>
        </a>

        {/* Carrito */}
        <button
          onClick={onOpenCart}
          className="flex flex-col items-center gap-0.5 py-1 text-slate-700 hover:text-blue-600 active:scale-95 transition-all w-full relative"
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-gradient-to-r from-fuchsia-500 to-red-500 text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                {cartCount > 99 ? '99+' : cartCount}
              </span>
            )}
          </div>
          <span className="text-[10px] font-semibold">Carrito</span>
        </button>
      </div>
    </nav>
  );
};
