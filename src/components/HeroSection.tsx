import React from 'react';
import { Sparkles, Flame, Scissors, CheckCircle, ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  onFilterUltimasPiezas: () => void;
  onFilterLoMasNuevo: () => void;
  onExploreCatalog: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onFilterUltimasPiezas,
  onFilterLoMasNuevo,
  onExploreCatalog,
}) => {
  return (
    <section id="hero" className="relative w-full overflow-hidden bg-slate-900">
      {/* Background Image Container with Soft Dark Overlay & Subtle Color Highlights */}
      <div className="relative min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex items-center justify-center">
        {/* Full-width textile workshop background photo */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=2000&q=85')`,
          }}
        >
          {/* Multi-layered soft overlay: Dark + Subtle Magenta & Blue lighting accents */}
          <div className="absolute inset-0 bg-slate-950/75 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-950/40" />
          
          {/* Subtle colorful ambient glows honoring brand palette */}
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#2563EB]/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/3 -right-20 w-96 h-96 bg-[#D946EF]/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 left-1/3 w-80 h-80 bg-[#EAB308]/15 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Central Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          {/* Direct Manufacturer Pill Badge with Instagram reference */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-semibold mb-6 shadow-lg animate-in fade-in slide-in-from-bottom-2">
            <span className="w-2 h-2 rounded-full bg-[#EAB308] animate-ping" />
            <span className="text-yellow-300 font-bold uppercase tracking-wider text-[11px] sm:text-xs">
              Fabricantes Textiles Directos
            </span>
            <span className="text-slate-300">|</span>
            <a
              href="https://www.instagram.com/grupomarbelyst"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fuchsia-300 hover:text-white transition-colors flex items-center gap-1 font-bold"
            >
              <span>@grupomarbelyst</span>
            </a>
          </div>

          {/* Central Logo / Main Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 font-heading drop-shadow-md">
            Grupo <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-fuchsia-400 to-rose-400">Marbelyst</span>
          </h1>

          {/* Subtitle from specifications */}
          <p className="max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-slate-200 font-normal leading-relaxed mb-8 drop-shadow-xs">
            Fabricación textil al mayor y detal:{' '}
            <span className="text-white font-semibold">Sublimación</span>,{' '}
            <span className="text-white font-semibold">Serigrafía</span> y{' '}
            <span className="text-white font-semibold">Confección Corporativa</span>.
          </p>

          {/* Industrial Highlights Pill Strip */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-slate-300 mb-10">
            <span className="flex items-center gap-1.5 bg-slate-900/60 backdrop-blur-sm px-3 py-1 rounded-lg border border-slate-700/50">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Precios directos de fábrica</span>
            </span>
            <span className="flex items-center gap-1.5 bg-slate-900/60 backdrop-blur-sm px-3 py-1 rounded-lg border border-slate-700/50">
              <CheckCircle className="w-4 h-4 text-blue-400" />
              <span>Personalización total</span>
            </span>
            <span className="flex items-center gap-1.5 bg-slate-900/60 backdrop-blur-sm px-3 py-1 rounded-lg border border-slate-700/50">
              <CheckCircle className="w-4 h-4 text-fuchsia-400" />
              <span>Despachos a todo el país</span>
            </span>
          </div>

          {/* Quick jump anchor arrow */}
          <button
            onClick={onExploreCatalog}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Ver Catálogo y Precios</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </button>
        </div>
      </div>

      {/* Pill Buttons Section directly below the image, centered as requested */}
      <div className="bg-slate-100 border-b border-slate-200 py-6 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          {/* Botón 1: "Últimas Piezas" (Estilo Magenta/Rojo) */}
          <button
            onClick={onFilterUltimasPiezas}
            className="w-full sm:w-auto min-w-[220px] px-8 py-3.5 rounded-full font-bold text-sm sm:text-base text-white shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#D946EF] to-[#EF4444] hover:from-[#c026d3] hover:to-[#dc2626] shadow-fuchsia-500/25"
          >
            <Flame className="w-5 h-5 text-yellow-200 animate-pulse" />
            <span>Últimas Piezas</span>
            <span className="text-xs bg-black/20 px-2 py-0.5 rounded-full font-semibold">
              Ofertas
            </span>
          </button>

          {/* Botón 2: "Lo Más Nuevo" (Estilo Azul/Amarillo) */}
          <button
            onClick={onFilterLoMasNuevo}
            className="w-full sm:w-auto min-w-[220px] px-8 py-3.5 rounded-full font-bold text-sm sm:text-base text-white shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#2563EB] to-[#EAB308] hover:from-[#1d4ed8] hover:to-[#ca8a04] shadow-blue-500/25"
          >
            <Sparkles className="w-5 h-5 text-amber-200" />
            <span>Lo Más Nuevo</span>
            <span className="text-xs bg-black/20 px-2 py-0.5 rounded-full font-semibold">
              Colección
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
