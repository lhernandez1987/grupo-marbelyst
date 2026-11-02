import React from 'react';
import { Truck, Factory, Percent, ShieldCheck } from 'lucide-react';

export const ValueBar: React.FC = () => {
  const values = [
    {
      id: 'envios',
      title: 'Envíos por MRW y ZOOM',
      subtitle: 'Lunes, Miércoles y Viernes',
      description: 'Despachos a todas las agencias MRW, Zoom y Tealca en toda Venezuela con guía de rastreo inmediata.',
      icon: Truck,
      accentBorder: 'border-blue-500/30',
      iconBg: 'bg-blue-50 text-blue-600',
      tag: 'MRW & ZOOM',
      tagColor: 'bg-blue-100 text-blue-700'
    },
    {
      id: 'precios',
      title: 'Precios Directos de Fábrica',
      subtitle: 'Mayor & Detal',
      description: 'Sin intermediarios ni comisiones. Diseñado para marcas, tiendas y emprendedores de moda en Venezuela.',
      icon: Factory,
      accentBorder: 'border-fuchsia-500/30',
      iconBg: 'bg-fuchsia-50 text-fuchsia-600',
      tag: 'Sin Intermediarios',
      tagColor: 'bg-fuchsia-100 text-fuchsia-700'
    },
    {
      id: 'volumen',
      title: 'Descuentos por Volumen',
      subtitle: 'A partir de 50 piezas',
      description: 'Tarifas especiales mayoristas desde 50 unidades y escalas preferenciales para lotes de 100, 250 y 500+ prendas.',
      icon: Percent,
      accentBorder: 'border-amber-500/30',
      iconBg: 'bg-amber-50 text-amber-600',
      tag: '+50 Unidades',
      tagColor: 'bg-amber-100 text-amber-800'
    },
    {
      id: 'calidad',
      title: 'Calidad Garantizada',
      subtitle: 'Telas & Estampado Premium',
      description: 'Algodón peinado 20/1, piqué 220g, Dry-Fit microfibra y tintas que no se caen ni pierden color con el lavado.',
      icon: ShieldCheck,
      accentBorder: 'border-rose-500/30',
      iconBg: 'bg-rose-50 text-rose-600',
      tag: 'Garantía Textil',
      tagColor: 'bg-rose-100 text-rose-700'
    }
  ];

  return (
    <section className="py-10 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {values.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`bg-white rounded-2xl p-5 border ${item.accentBorder} shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center transition-transform group-hover:scale-110 shadow-xs`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full ${item.tagColor}`}>
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mb-2">
                    {item.subtitle}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
