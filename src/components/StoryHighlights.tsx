import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle, CheckCircle2 } from 'lucide-react';

interface Story {
  id: string;
  title: string;
  subtitle: string;
  coverImage: string;
  stories: {
    image: string;
    caption: string;
    tag: string;
  }[];
}

export const STORY_HIGHLIGHTS: Story[] = [
  {
    id: 'planta',
    title: 'Planta Propia',
    subtitle: 'Nuestras Instalaciones',
    coverImage: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=400&q=80',
    stories: [
      {
        image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80',
        caption: 'Mesa de corte industrial automatizado y patronaje digital CAD en Grupo Marbelyst.',
        tag: 'Planta de Confección',
      },
      {
        image: 'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?auto=format&fit=crop&w=800&q=80',
        caption: 'Línea de confección con costura reforzada de 5 hilos y control de calidad punto por punto.',
        tag: 'Taller Textil',
      },
    ],
  },
  {
    id: 'sublimacion',
    title: 'Sublimación',
    subtitle: 'Full HD 360°',
    coverImage: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=400&q=80',
    stories: [
      {
        image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
        caption: 'Calandrado continuo y estampación por sublimación digital con tintas italianas de alta penetración.',
        tag: 'Proceso Sublimación',
      },
      {
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
        caption: 'Resultado final en tela Dry-Fit: cero tacto, colores neón ultra vibrantes y máxima transpirabilidad.',
        tag: 'Prenda Deportiva',
      },
    ],
  },
  {
    id: 'serigrafia',
    title: 'Serigrafía',
    subtitle: 'Pulpo Automático',
    coverImage: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80',
    stories: [
      {
        image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
        caption: 'Registro milimétrico en pulpo serigráfico industrial a 6 colores con tintas plastisol libres de ftalatos.',
        tag: 'Serigrafía Textil',
      },
      {
        image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
        caption: 'Franelas 100% algodón peinado 20/1 con curado en túnel infrarrojo para resistencia de +100 lavadas.',
        tag: 'Algodón Peinado',
      },
    ],
  },
  {
    id: 'bordados',
    title: 'Bordados',
    subtitle: 'Relieve & 3D',
    coverImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=400&q=80',
    stories: [
      {
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
        caption: 'Bordadoras industriales multicabezal con hilos de poliéster de alto brillo y definición milimétrica.',
        tag: 'Bordado Computarizado',
      },
      {
        image: 'https://images.unsplash.com/photo-1625910513413-7d52671e3b10?auto=format&fit=crop&w=800&q=80',
        caption: 'Polos piqué corporativas con bordado en pecho y manga para dotación empresarial.',
        tag: 'Uniformes Ejecutivos',
      },
    ],
  },
  {
    id: 'envios',
    title: 'Envíos',
    subtitle: 'A Nivel Nacional',
    coverImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=400&q=80',
    stories: [
      {
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
        caption: 'Empaque individual en bolsas protectoras y embalaje sellado para envíos garantizados a todo el país.',
        tag: 'Despacho Nacional',
      },
    ],
  },
  {
    id: 'clientes',
    title: 'Clientes',
    subtitle: 'Marcas & Empresas',
    coverImage: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=400&q=80',
    stories: [
      {
        image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80',
        caption: 'Dotaciones corporativas de hoodies y camisetas para más de 120 empresas en todo el país.',
        tag: 'Casos de Éxito',
      },
    ],
  },
];

export const StoryHighlights: React.FC = () => {
  const [activeStory, setActiveStory] = useState<Story | null>(null);
  const [storyIndex, setStoryIndex] = useState(0);

  const openStory = (story: Story) => {
    setActiveStory(story);
    setStoryIndex(0);
  };

  const nextStory = () => {
    if (!activeStory) return;
    if (storyIndex < activeStory.stories.length - 1) {
      setStoryIndex(storyIndex + 1);
    } else {
      setActiveStory(null);
    }
  };

  const prevStory = () => {
    if (storyIndex > 0) {
      setStoryIndex(storyIndex - 1);
    }
  };

  return (
    <div className="bg-white border-b border-slate-200 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Historias de Producción
            </span>
            <span className="text-[11px] font-black text-fuchsia-600 bg-fuchsia-50 px-2 py-0.5 rounded-full border border-fuchsia-200">
              @grupomarbelyst
            </span>
          </div>
          <a
            href="https://www.instagram.com/grupomarbelyst"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 hover:underline"
          >
            <span>Ver Instagram</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Story Circles Strip (Touch-friendly and edge-to-edge on mobile) */}
        <div className="flex items-center gap-3 sm:gap-6 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 snap-x">
          {STORY_HIGHLIGHTS.map((item) => (
            <button
              key={item.id}
              onClick={() => openStory(item)}
              className="flex flex-col items-center gap-1.5 sm:gap-2 shrink-0 group cursor-pointer focus:outline-hidden snap-start active:scale-95 transition-transform"
            >
              {/* Vibrant Marbelyst gradient ring (Magenta, Yellow, Blue, Red) */}
              <div className="p-0.5 rounded-full bg-linear-to-tr from-[#EAB308] via-[#EF4444] to-[#D946EF] group-hover:from-[#2563EB] group-hover:to-[#D946EF] transition-all transform group-hover:scale-105 shadow-sm">
                <div className="p-0.5 bg-white rounded-full">
                  <div className="w-15 h-15 sm:w-18 sm:h-18 rounded-full overflow-hidden bg-slate-100">
                    <img
                      src={item.coverImage}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>

              <span className="text-xs font-bold text-slate-800 group-hover:text-fuchsia-600 transition-colors text-center max-w-[80px] truncate">
                {item.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Story Modal (Instagram Stories style) */}
      {activeStory && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-md h-[580px] sm:h-[640px] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between">
            {/* Top progress bars */}
            <div className="absolute top-3 left-3 right-3 z-30 flex gap-1.5">
              {activeStory.stories.map((_, i) => (
                <div
                  key={i}
                  className="h-1 flex-1 bg-white/30 rounded-full overflow-hidden"
                >
                  <div
                    className={`h-full bg-white transition-all duration-300 ${
                      i < storyIndex
                        ? 'w-full'
                        : i === storyIndex
                        ? 'w-full animate-pulse'
                        : 'w-0'
                    }`}
                  />
                </div>
              ))}
            </div>

            {/* Top Bar Header with profile badge */}
            <div className="absolute top-6 left-4 right-4 z-30 flex items-center justify-between text-white">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full border border-fuchsia-400 overflow-hidden bg-white">
                  <img
                    src={activeStory.coverImage}
                    alt={activeStory.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold">@grupomarbelyst</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 fill-blue-400 text-white" />
                  </div>
                  <span className="text-[10px] text-slate-300">
                    {activeStory.title} • {activeStory.subtitle}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setActiveStory(null)}
                className="p-1 rounded-full bg-black/40 hover:bg-black/70 text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Story Image */}
            <div className="relative w-full h-full">
              <img
                src={activeStory.stories[storyIndex].image}
                alt="Story content"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />

              {/* Navigation click zones */}
              <button
                onClick={prevStory}
                className="absolute left-0 top-16 bottom-20 w-1/3 z-20 focus:outline-hidden"
                aria-label="Anterior"
              />
              <button
                onClick={nextStory}
                className="absolute right-0 top-16 bottom-20 w-1/3 z-20 focus:outline-hidden"
                aria-label="Siguiente"
              />
            </div>

            {/* Bottom Caption & WhatsApp Call to Action */}
            <div className="absolute bottom-0 left-0 right-0 p-5 z-30 text-white space-y-3">
              <span className="inline-block px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider bg-fuchsia-600 text-white shadow-sm">
                {activeStory.stories[storyIndex].tag}
              </span>
              <p className="text-sm font-medium text-slate-100 drop-shadow-sm leading-snug">
                {activeStory.stories[storyIndex].caption}
              </p>

              <div className="flex items-center gap-2 pt-1">
                <a
                  href={`https://wa.me/584120000000?text=Hola%20Grupo%20Marbelyst,%20vi%20la%20historia%20de%20${encodeURIComponent(activeStory.title)}%20y%20deseo%20cotizar`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Cotizar Este Proceso</span>
                </a>
                <button
                  onClick={nextStory}
                  className="p-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-bold"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
