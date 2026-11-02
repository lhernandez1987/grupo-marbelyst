import React from 'react';
import { Truck, CreditCard, Sparkles, MessageCircle, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

interface WholesaleBannerProps {
  onGoToQuote: () => void;
}

export const WholesaleBanner: React.FC<WholesaleBannerProps> = ({ onGoToQuote }) => {
  return (
    <section className="py-14 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden">
      {/* Visual lighting background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D946EF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Info (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-yellow-300 text-xs font-bold uppercase tracking-wider border border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
              <span>Emprende o Dota tu Empresa</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight leading-tight">
              Fabricación Textil Directa para <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-fuchsia-400 to-rose-400">Marcas y Negocios</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
              Al igual que las principales marcas de moda y confección venezolana, producimos franelas oversize, polos piqué, ropa deportiva dry-fit y uniformes corporativos con precios de fábrica sin intermediarios.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Escala Mayorista:</strong> Precios especiales desde 50 piezas.</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Envíos Nacionales:</strong> Por MRW, Zoom y Tealca garantizados.</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Pagos Flexibles:</strong> Pago Móvil, Binance USDT, Zinli y Divisas.</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Técnicas Certificadas:</strong> Sublimación HD, Serigrafía y Bordados.</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-4 flex flex-wrap gap-3">
              <button
                onClick={onGoToQuote}
                className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-linear-to-r from-[#D946EF] to-[#EF4444] hover:opacity-95 transition-all shadow-lg flex items-center gap-2 cursor-pointer"
              >
                <span>Cotizar Pedido Mayorista</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/584120000000?text=Hola%20Grupo%20Marbelyst,%20deseo%20asesoría%20para%20un%20pedido%20al%20mayor"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-slate-200 bg-white/10 hover:bg-white/20 transition-all border border-white/20 flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Hablar con un Asesor</span>
              </a>
            </div>
          </div>

          {/* Right Highlights Cards (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/30">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">
                  Despachos los Lunes, Miércoles y Viernes
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Envíos directos a cualquier oficina MRW o Zoom en toda Venezuela con guía de seguimiento en tiempo real.
                </p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-fuchsia-500/20 text-fuchsia-400 flex items-center justify-center shrink-0 border border-fuchsia-500/30">
                <CreditCard className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">
                  Múltiples Opciones de Pago
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Aceptamos Pago Móvil, Binance Pay (USDT), Zinli, transferencias bancarias nacionales y divisas en efectivo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
