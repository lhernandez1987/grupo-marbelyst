import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { StoryHighlights } from './components/StoryHighlights';
import { CategoryCircles } from './components/CategoryCircles';
import { ValueBar } from './components/ValueBar';
import { ProductGrid } from './components/ProductGrid';
import { WholesaleBanner } from './components/WholesaleBanner';
import { ServicesSection } from './components/ServicesSection';
import { WholesaleForm } from './components/WholesaleForm';
import { InstagramFeed } from './components/InstagramFeed';
import { CartDrawer } from './components/CartDrawer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { MobileBottomNav } from './components/MobileBottomNav';
import { Footer } from './components/Footer';
import { PRODUCTS_DATA } from './data/mockData';
import { Product, ProductColor, CartItem } from './types';
import { MessageCircle, ArrowUp } from 'lucide-react';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: 'franela-algodon-20-1-#FFFFFF-L',
      product: PRODUCTS_DATA[0],
      selectedColor: PRODUCTS_DATA[0].colors[0],
      selectedSize: 'L',
      quantity: 12,
    },
  ]);
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [preselectedServiceId, setPreselectedServiceId] = useState<string>('serigrafia');
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Monitor scroll for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Total items in cart
  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Add item to cart
  const handleAddToCart = (
    product: Product,
    color: ProductColor,
    size: string,
    quantity: number
  ) => {
    const itemId = `${product.id}-${color.hex}-${size}`;
    setCart((prevCart) => {
      const existing = prevCart.find((i) => i.id === itemId);
      if (existing) {
        return prevCart.map((i) =>
          i.id === itemId ? { ...i, quantity: i.quantity + quantity } : i
        );
      } else {
        return [
          ...prevCart,
          {
            id: itemId,
            product,
            selectedColor: color,
            selectedSize: size,
            quantity,
          },
        ];
      }
    });
  };

  // Update item quantity
  const handleUpdateQuantity = (itemId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveFromCart(itemId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: newQty } : item
      )
    );
  };

  // Remove item from cart
  const handleRemoveFromCart = (itemId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  // Clear entire cart
  const handleClearCart = () => {
    setCart([]);
  };

  // Smooth scroll helper
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handlers for the Hero pill buttons as specified in prompt:
  // "Botón 1: 'Últimas Piezas' (Estilo Magenta/Rojo)"
  // "Botón 2: 'Lo Más Nuevo' (Estilo Azul/Amarillo)"
  const handleFilterUltimasPiezas = () => {
    setActiveCategory('ultimas');
    setSearchQuery('');
    scrollToSection('catalogo');
  };

  const handleFilterLoMasNuevo = () => {
    setActiveCategory('nuevos');
    setSearchQuery('');
    scrollToSection('catalogo');
  };

  // Handler for service to quote link
  const handleSelectServiceToQuote = (serviceId: string) => {
    setPreselectedServiceId(serviceId);
    scrollToSection('cotizador');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-fuchsia-500 selection:text-white pb-16 sm:pb-0">
      {/* 1. Header: Navigation, Logo, Search, Cart */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          setSearchQuery('');
          scrollToSection('catalogo');
        }}
        onSearch={(query) => {
          setSearchQuery(query);
          if (query.trim()) {
            scrollToSection('catalogo');
          }
        }}
        searchQuery={searchQuery}
        onNavigateSection={scrollToSection}
        allProducts={PRODUCTS_DATA}
        onSelectProduct={(product) => setSelectedProduct(product)}
      />

      <main className="flex-1">
        {/* 2. HeroSection: Background photo + overlay, Logo/Headline, Pill buttons */}
        <HeroSection
          onFilterUltimasPiezas={handleFilterUltimasPiezas}
          onFilterLoMasNuevo={handleFilterLoMasNuevo}
          onExploreCatalog={() => scrollToSection('catalogo')}
        />

        {/* 2.5 Instagram Story Highlights (@grupomarbelyst) */}
        <StoryHighlights />

        {/* 2.8 Category Circles (Rossi by Rossi visual category showcase) */}
        <CategoryCircles
          activeCategory={activeCategory}
          onSelectCategory={(cat) => {
            setActiveCategory(cat);
            setSearchQuery('');
            scrollToSection('catalogo');
          }}
        />

        {/* 3. ValueBar: Social Proof (Envíos por MRW/Zoom, Precios Directos, Volumen, Calidad) */}
        <ValueBar />

        {/* 4. ProductGrid: Star products / catalog with dual pricing */}
        <ProductGrid
          products={PRODUCTS_DATA}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          onOpenDetails={(p) => setSelectedProduct(p)}
          onAddToCart={handleAddToCart}
          onGoToQuote={() => scrollToSection('cotizador')}
          searchQuery={searchQuery}
          onClearSearch={() => setSearchQuery('')}
        />

        {/* 4.5 Wholesale Business Banner (Rossi by Rossi style) */}
        <WholesaleBanner onGoToQuote={() => scrollToSection('cotizador')} />

        {/* 5. ServicesSection: Interactive cards for Sublimación, Serigrafía, Bordados, Confección */}
        <ServicesSection onSelectServiceToQuote={handleSelectServiceToQuote} />

        {/* 6. WholesaleForm: Corporate quotation simulator & WhatsApp export */}
        <WholesaleForm preselectedServiceId={preselectedServiceId} />

        {/* 7. Instagram Feed: Real factory posts, community and social proof */}
        <InstagramFeed />
      </main>

      {/* Footer */}
      <Footer
        onNavigateSection={scrollToSection}
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          scrollToSection('catalogo');
        }}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
        onNavigateToQuote={() => scrollToSection('cotizador')}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Floating Action Buttons (offset on mobile for bottom bar) */}
      <div className="fixed bottom-18 sm:bottom-6 right-3 sm:right-6 z-40 flex flex-col items-end gap-2.5">
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/95 backdrop-blur-xs text-slate-800 shadow-lg border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition-all cursor-pointer"
            title="Volver arriba"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        <a
          href="https://wa.me/584120000000?text=Hola%20Grupo%20Marbelyst,%20estoy%20en%20la%20tienda%20online%20y%20deseo%20asesoría%20textil%20inmediata."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex group items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
          title="Contactar a Planta por WhatsApp"
        >
          <MessageCircle className="w-5 h-5 animate-bounce" />
          <span className="text-xs font-bold">
            WhatsApp de Fábrica
          </span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Navigation Bar */}
      <MobileBottomNav
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onNavigateSection={scrollToSection}
      />
    </div>
  );
}
