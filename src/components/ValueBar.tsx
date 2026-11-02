import React from 'react';
import { Truck, Factory, Percent, ShieldCheck } from 'lucide-react';

export const ValueBar: React.FC = () => {
  const values = [
    {
      id: 'envios',
      title: 'Envíos a Nivel Nacional',
      subtitle: 'Entregas en todo el territorio',
      description: 'Cobertura por empresas de encomiendas de confianza o entrega en nuestra planta de confección.',
      icon: Truck,
      accentBorder: 'border-blue-500/30',
      iconBg: 'bg-blue-50 text-blue-600',
      tag: '100% Cobertura',
      tagColor: 'bg-blue-100 text-blue-700'
    },
    {
      id: 'precios',
      title: 'Precios Directos de Fábrica',
      subtitle: 'Cero intermediarios',
      description: 'Comercialización directa desde el taller textil, maximizando el margen y la rentabilidad de tu negocio.',
      icon: Factory,
      accentBorder: 'border-fuchsia-500/30',
      iconBg: 'bg-fuchsia-50 text-fuchsia-600',
      tag: 'Ahorro Garantizado',
      tagColor: 'bg-fuchsia-100 text-fuchsia-700'
    },
    {
      id: 'volumen',
      title: 'Descuentos por Volumen',
      subtitle: 'A partir de 50 piezas',
      description: 'Tarifas escalonadas al mayor en 50, 100, 500 y más de 1.000 unidades para corporativos y marcas.',
      icon: Percent,
      accentBorder: 'border-amber-500/30',
      iconBg: 'bg-amber-50 text-amber-600',
      tag: 'Escala Mayorista',
      tagColor: 'bg-amber-100 text-amber-800'
    },
    {
      id: 'calidad',
      title: 'Calidad Garantizada',
      subtitle: 'Control punto por punto',
      description: 'Tejidos de hilatura peinada, costuras reforzadas con remate overlock y tintas con fijación certificada.',
      icon: ShieldCheck,
      accentBorder: 'border-rose-500/30',
      iconBg: 'bg-rose-50 text-rose-600',
      tag: 'Inspección Textil',
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
