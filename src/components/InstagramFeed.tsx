import React, { useState } from 'react';
import { Heart, MessageCircle, Instagram, ExternalLink, CheckCircle2, Bookmark, Share2, Layers } from 'lucide-react';

interface InstagramPost {
  id: string;
  image: string;
  caption: string;
  likes: number;
  comments: number;
  category: string;
  date: string;
  tagTechnique: string;
}

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'post-1',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    caption: '¡Producción masiva de franelas 100% algodón peinado 20/1 listas para despacho! Corte tubular y refuerzo de hombro a hombro. Calidad directa de fábrica para marcas y mayoristas. 🧵⚡',
    likes: 842,
    comments: 48,
    category: 'Algodón Peinado',
    date: 'Hace 2 días',
    tagTechnique: 'Confección Mayorista'
  },
  {
    id: 'post-2',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
    caption: 'Sublimación digital Full HD en tela Dry-Fit microperforada. Pigmentos que penetran molecularmente la fibra textil, cero tacto y colores neón que resisten el sol y los lavados intensos. 🎨🏃‍♂️',
    likes: 1205,
    comments: 63,
    category: 'Sublimación',
    date: 'Hace 3 días',
    tagTechnique: 'Sublimación HD 360°'
  },
  {
    id: 'post-3',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
    caption: 'Tiraje de serigrafía industrial a 4 colores en pulpo automático. Curado térmico en túnel infrarrojo para máxima durabilidad. ¿Tienes un evento o marca de ropa? Cotiza tu lote hoy mismo. 👕🔥',
    likes: 934,
    comments: 39,
    category: 'Serigrafía',
    date: 'Hace 5 días',
    tagTechnique: 'Serigrafía Plastisol'
  },
  {
    id: 'post-4',
    image: 'https://images.unsplash.com/photo-1625910513413-7d52671e3b10?auto=format&fit=crop&w=800&q=80',
    caption: 'Dotación corporativa de camisas tipo Polo Piqué 220g con bordado computarizado de alta definición. Cuello y puños tejidos antipilling para una presentación ejecutiva impecable. 💼✨',
    likes: 1140,
    comments: 52,
    category: 'Bordados',
    date: 'Hace 1 semana',
    tagTechnique: 'Bordado Computarizado'
  },
  {
    id: 'post-5',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80',
    caption: 'Gorras personalizadas 5 paneles con frontal en drill acolchado y malla trucker fresca. Listas para bordado 3D de alto relieve o parche sublimado. ¡Ideal para merch de tu marca! 🧢⚡',
    likes: 789,
    comments: 31,
    category: 'Gorras & Merch',
    date: 'Hace 1 semana',
    tagTechnique: 'Bordado 3D'
  },
  {
    id: 'post-6',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80',
    caption: 'Hoodies en algodón perchado térmico de 310g con serigrafía en tinta relieve. Acabado suave y abrigado para dotaciones de invierno y marcas urbanas. Pedidos a partir de 24 piezas. ❄️👌',
    likes: 1450,
    comments: 76,
    category: 'Hoodies & Buzos',
    date: 'Hace 2 semanas',
    tagTechnique: 'Tinta Relieve Hinchable'
  }
];

export const InstagramFeed: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null);
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});

  const toggleLike = (postId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setLikedPosts((prev) => ({ ...prev, [postId]: !prev[postId] }));
  };

  return (
    <section className="py-20 bg-slate-100/70 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Instagram Profile Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs mb-12">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
            {/* Avatar & Info */}
            <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
              {/* Profile Avatar with Instagram gradient border */}
              <div className="p-1 rounded-full bg-linear-to-tr from-[#EAB308] via-[#EF4444] to-[#D946EF] shadow-md shrink-0">
                <div className="p-1 bg-white rounded-full">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-slate-900 flex items-center justify-center text-white relative overflow-hidden">
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-[#D946EF] rounded-full blur-[4px] opacity-70" />
                    <div className="absolute -bottom-2 -left-2 w-10 h-10 bg-[#2563EB] rounded-full blur-[4px] opacity-70" />
                    <Layers className="w-9 h-9 relative z-10 text-white" />
                  </div>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1.5">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-heading">
                    grupomarbelyst
                  </h3>
                  <CheckCircle2 className="w-5 h-5 text-blue-500 fill-blue-500 text-white shrink-0" />
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                    Fabricantes Textiles
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 font-medium max-w-xl leading-relaxed mb-3">
                  📍 <strong>Fabricación Textil Directa de Fábrica</strong> | Sublimación digital, serigrafía industrial automática y bordados computarizados. Dotaciones y confección al mayor y detal 🧵📦 Envíos nacionales.
                </p>

                <div className="flex items-center justify-center sm:justify-start gap-5 text-xs text-slate-600">
                  <span><strong>148</strong> publicaciones</span>
                  <span><strong>+15.8K</strong> seguidores</span>
                  <span><strong>Fábrica</strong> certificada</span>
                </div>
              </div>
            </div>

            {/* Follow on Instagram Button */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
              <a
                href="https://www.instagram.com/grupomarbelyst"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold text-white bg-linear-to-r from-[#D946EF] via-[#EF4444] to-[#EAB308] hover:opacity-95 transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Instagram className="w-4 h-4" />
                <span>Seguir @grupomarbelyst</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://wa.me/584120000000?text=Hola%20Grupo%20Marbelyst,%20los%20encontré%20en%20Instagram%20y%20deseo%20cotizar"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Mensaje Directo</span>
              </a>
            </div>
          </div>
        </div>

        {/* 6 Grid Posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INSTAGRAM_POSTS.map((post) => {
            const isLiked = !!likedPosts[post.id];
            const currentLikes = post.likes + (isLiked ? 1 : 0);

            return (
              <div
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1"
              >
                {/* Post Header */}
                <div className="p-3.5 flex items-center justify-between border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-linear-to-tr from-amber-400 to-fuchsia-500 p-0.5">
                      <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                        <Layers className="w-3.5 h-3.5 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block leading-none">
                        grupomarbelyst
                      </span>
                      <span className="text-[10px] text-slate-400">{post.date}</span>
                    </div>
                  </div>

                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                    {post.tagTechnique}
                  </span>
                </div>

                {/* Post Image */}
                <div className="relative aspect-square overflow-hidden bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6 text-white font-bold text-sm">
                    <span className="flex items-center gap-1.5 drop-shadow-md">
                      <Heart className="w-5 h-5 fill-white" />
                      {currentLikes}
                    </span>
                    <span className="flex items-center gap-1.5 drop-shadow-md">
                      <MessageCircle className="w-5 h-5 fill-white" />
                      {post.comments}
                    </span>
                  </div>
                </div>

                {/* Post Footer with Actions */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3 text-slate-700">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={(e) => toggleLike(post.id, e)}
                          className={`cursor-pointer transition-transform active:scale-125 ${
                            isLiked ? 'text-rose-600' : 'hover:text-rose-600'
                          }`}
                        >
                          <Heart className={`w-5 h-5 ${isLiked ? 'fill-rose-600 text-rose-600' : ''}`} />
                        </button>
                        <button className="hover:text-blue-600 transition-colors cursor-pointer">
                          <MessageCircle className="w-5 h-5" />
                        </button>
                        <button className="hover:text-emerald-600 transition-colors cursor-pointer">
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>

                      <button className="hover:text-amber-500 transition-colors cursor-pointer">
                        <Bookmark className="w-5 h-5" />
                      </button>
                    </div>

                    <p className="text-xs font-bold text-slate-900 mb-1">
                      {currentLikes.toLocaleString()} Me gusta
                    </p>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      <span className="font-bold text-slate-900 mr-1.5">grupomarbelyst</span>
                      {post.caption}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">Ver comentarios ({post.comments})</span>
                    <span className="text-fuchsia-600 font-bold hover:underline">
                      Cotizar prenda →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal for Post Detail */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="aspect-square bg-slate-900">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.caption}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-linear-to-tr from-amber-400 to-fuchsia-500 p-0.5">
                        <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                          <Layers className="w-3.5 h-3.5 text-blue-600" />
                        </div>
                      </div>
                      <span className="text-xs font-bold text-slate-900">
                        grupomarbelyst
                      </span>
                    </div>

                    <button
                      onClick={() => setSelectedPost(null)}
                      className="text-slate-400 hover:text-slate-700 text-lg font-bold"
                    >
                      ✕
                    </button>
                  </div>

                  <p className="text-xs text-slate-700 leading-relaxed mb-4">
                    {selectedPost.caption}
                  </p>

                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs mb-4">
                    <span className="text-slate-500 block text-[10px] uppercase font-bold">
                      Técnica de este trabajo:
                    </span>
                    <span className="font-extrabold text-blue-600 text-sm">
                      {selectedPost.tagTechnique}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <a
                    href={`https://wa.me/584120000000?text=Hola%20Grupo%20Marbelyst,%20vi%20su%20publicación%20de%20${encodeURIComponent(selectedPost.tagTechnique)}%20en%20Instagram%20y%20deseo%20cotizar`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Cotizar este trabajo por WhatsApp</span>
                  </a>

                  <a
                    href="https://www.instagram.com/grupomarbelyst"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-4 rounded-xl border border-slate-200 hover:bg-slate-50 text-xs font-semibold text-slate-600 flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5 text-fuchsia-600" />
                    <span>Ver en Instagram @grupomarbelyst</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
