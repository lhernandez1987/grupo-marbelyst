import React from 'react';
import { Layers, MessageCircle, Phone, Mail, MapPin, Clock, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onSelectCategory: (category: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateSection,
  onSelectCategory,
}) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Col (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center shadow-md relative overflow-hidden">
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#D946EF] rounded-full blur-[2px]" />
                <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-[#2563EB] rounded-full blur-[2px]" />
                <Layers className="w-5 h-5 text-white relative z-10" />
              </div>
              <span className="text-xl font-black text-white font-heading">
                Grupo <span className="text-[#2563EB]">Marbe</span><span className="text-[#D946EF]">lyst</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Fabricantes textiles directos especializados en sublimación digital de alta resolución, serigrafía industrial automática, bordados computarizados de alta densidad y confección corporativa al mayor y detal.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-900 text-slate-300 border border-slate-800">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Taller y Confección Propia
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-900 text-slate-300 border border-slate-800">
                A partir de 50 unds al mayor
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-heading">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => {
                    onNavigateSection('catalogo');
                    onSelectCategory('todos');
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Catálogo de Tienda
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('servicios')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Servicios de Fabricación
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('cotizador')}
                  className="hover:text-white transition-colors cursor-pointer text-fuchsia-400 font-bold"
                >
                  Cotización Corporativa
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigateSection('catalogo');
                    onSelectCategory('ultimas');
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Últimas Piezas
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigateSection('catalogo');
                    onSelectCategory('nuevos');
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Lo Más Nuevo
                </button>
              </li>
            </ul>
          </div>

          {/* Lines */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-heading">
              Líneas Textiles
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => {
                    onNavigateSection('catalogo');
                    onSelectCategory('franelas');
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Franelas Algodón 20/1
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigateSection('catalogo');
                    onSelectCategory('polos');
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Polos Piqué y Chemises
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigateSection('catalogo');
                    onSelectCategory('deportivo');
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Camisetas Dry-Fit Sublimadas
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigateSection('catalogo');
                    onSelectCategory('corporativo');
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Dotación y Uniformes
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigateSection('catalogo');
                    onSelectCategory('gorras');
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Gorras Trucker & Merch
                </button>
              </li>
            </ul>
          </div>

          {/* Plant & Contact Info */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-heading">
              Atención y Despacho
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  Planta Textil y Taller de Confección. Envíos nacionales.
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="text-slate-400">Lun a Vie: 8:00 AM - 5:30 PM</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="https://wa.me/584120000000?text=Hola%20Grupo%20Marbelyst"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 font-semibold transition-colors"
                >
                  +58 412-MARBELYST
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-4 h-4 rounded-full bg-linear-to-tr from-amber-400 via-rose-500 to-fuchsia-500 flex items-center justify-center shrink-0">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                </span>
                <a
                  href="https://www.instagram.com/grupomarbelyst"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fuchsia-400 hover:text-fuchsia-300 font-bold transition-colors"
                >
                  @grupomarbelyst
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-slate-400">ventas@grupomarbelyst.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Shipping & Payment methods */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col lg:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Grupo Marbelyst. Fabricación textil directa al mayor y detal. Hecho en Venezuela.</p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-[11px] text-slate-400 font-semibold">Despachos:</span>
            <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] font-black text-amber-400">
              MRW
            </span>
            <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] font-black text-blue-400">
              ZOOM
            </span>
            <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] font-black text-red-400">
              TEALCA
            </span>

            <span className="text-slate-700">|</span>

            <span className="text-[11px] text-slate-400 font-semibold">Pagos:</span>
            <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] font-bold text-slate-300">
              Pago Móvil
            </span>
            <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] font-bold text-yellow-300">
              Binance (USDT)
            </span>
            <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] font-bold text-purple-300">
              Zinli
            </span>
            <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] font-bold text-emerald-400">
              Zelle / Divisas
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
