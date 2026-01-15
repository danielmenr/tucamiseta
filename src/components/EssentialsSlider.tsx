import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Opcional: puedes usar flechas estándar "→"

const EssentialsSlider = () => {
  const scrollRef = useRef(null);

  const items = [
    { id: 1, label: 'Casual', category: 'Camisas Básicas', price: '29.000', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800' },
    { id: 2, label: 'Casual', category: 'Camisas Polo', price: '50.000', img: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&w=800' },
    { id: 3, label: 'Deportivo', category: 'Camisas Deportivas', price: '30.000', img: 'https://images.unsplash.com/photo-1530549387631-fbb129c13d98?q=80&w=800' },
    { id: 4, label: 'Casual', category: 'Shorts Básicos', price: '40.000', img: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=800' },
    { id: 5, label: 'Deportivo', category: 'Shorts Deportivos', price: '25.000', img: 'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=800' },
    { id: 6, label: 'Invierno', category: 'Sudaderas', price: '55.000', img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800' },
    { id: 7, label: 'Accesorios', category: 'Gorras Urban', price: '20.000', img: 'https://images.unsplash.com/photo-1588850567047-380673ee6f72?q=80&w=800' },
    { id: 8, label: 'Football', category: 'Jerseys Replicas', price: '35.000', img: 'https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=800' },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      // Calcula el desplazamiento: una página completa (4 cards en desktop)
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 px-6 max-w-[1400px] mx-auto bg-white">
      {/* HEADER */}
      <div className="flex items-end justify-between mb-10">
        <div>
          <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-400 uppercase">Categorias</span>
          <h2 className="text-4xl font-black uppercase tracking-tighter text-zinc-900 mt-2">
            nuestros Productos <span className="text-zinc-300">// 2026</span>
          </h2>
        </div>

        {/* CONTROLES */}
        <div className="flex gap-2">
          <button 
            onClick={() => scroll('left')}
            className="w-12 h-12 flex items-center justify-center border border-zinc-200 hover:bg-black hover:text-white transition-all duration-300"
            aria-label="Anterior"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-12 h-12 flex items-center justify-center border border-zinc-200 hover:bg-black hover:text-white transition-all duration-300"
            aria-label="Siguiente"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* SLIDER CONTAINER */}
      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map((item) => (
          <div 
            key={item.id}
            className="min-w-[85%] sm:min-w-[45%] lg:min-w-[calc(25%-12px)] snap-start group cursor-pointer"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-zinc-100 mb-5">
              <img 
                src={item.img} 
                alt={item.category}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              {item.label && (
                <div className="absolute bottom-4 left-4 bg-white px-3 py-1 shadow-sm">
                  <span className="text-[10px] font-black uppercase tracking-widest text-black">
                    {item.label}
                  </span>
                </div>
              )}
            </div>
            
            <div className="space-y-1">
              <h3 className="text-xs font-bold uppercase tracking-[0.1em] text-zinc-400">
                {item.category}
              </h3>
              <p className="text-2xl font-black tracking-tighter text-zinc-900">
                Desde ${item.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CSS INLINE PARA OCULTAR SCROLLBAR (Opcional si no usas plugin tailwind-scrollbar-hide) */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default EssentialsSlider;