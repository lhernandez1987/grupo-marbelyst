import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/mockData';
import { ServiceItem } from '../types';
import { Sparkles, Check, ArrowRight, Clock, Box, Info } from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceToQuote: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceToQuote,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="servicios" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-100 text-fuchsia-800 text-xs font-black uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-fuchsia-600" />
            <span>Procesos Industriales Propios</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-heading mb-4">
            Servicios Especializados de Fabricación
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Combinamos maquinaria industrial de última generación, insumos certificados y mano de obra experta para entregar prendas de estándar internacional.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:border-slate-300 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              {/* Image banner */}
              <div className="relative h-48 overflow-hidden bg-slate-200">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <span className={`text-[11px] font-extrabold px-2.5 py-1 rounded-full border bg-white/95 backdrop-blur-xs shadow-xs text-slate-900`}>
                    {service.badge}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="text-lg font-black leading-tight font-heading">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Service content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-slate-500 font-semibold mb-3 leading-relaxed">
                    {service.subtitle}
                  </p>

                  <p className="text-xs text-slate-700 leading-relaxed mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Highlights checklist */}
                  <ul className="space-y-2 mb-6">
                    {service.highlights.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specs pill & Quote button */}
                <div className="pt-4 border-t border-slate-200/80 space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-slate-500 font-semibold">
                    <span className="flex items-center gap-1">
                      <Box className="w-3.5 h-3.5 text-blue-600" />
                      {service.minQty}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-fuchsia-600" />
                      {service.leadTime}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectServiceToQuote(service.id)}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-slate-900 bg-white hover:bg-slate-900 hover:text-white border border-slate-300 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs group-hover:bg-slate-900 group-hover:text-white"
                  >
                    <span>Cotizar {service.title.split(' ')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Informative Banner */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
              <Info className="w-7 h-7 text-[#EAB308]" />
            </div>
            <div>
              <h4 className="text-lg font-bold mb-1">
                ¿No estás seguro de qué técnica textil elegir?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                Nuestros asesores técnicos evalúan tu logotipo, tipo de tela deseado y volumen de producción para recomendarte la técnica más rentable y duradera sin costo adicional.
              </p>
            </div>
          </div>

          <button
            onClick={() => onSelectServiceToQuote('sublimacion')}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#D946EF] to-[#EF4444] hover:from-[#c026d3] hover:to-[#dc2626] text-white text-xs sm:text-sm font-bold shadow-lg transition-transform hover:scale-105 shrink-0 cursor-pointer"
          >
            Hablar con Asesor Técnico
          </button>
        </div>
      </div>
    </section>
  );
};
