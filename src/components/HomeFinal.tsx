import React from 'react';
import { ArrowUpRight, Plus } from 'lucide-react';

const HomeFinal: React.FC = () => {
  return (
    <>
      <section className="relative h-[80vh] w-full overflow-hidden">
        <img
          src="https://fcf.com.co/wp-content/uploads/2025/11/Colombia_Producto_2842-1024x576.jpg"
          alt="Selección Colombia"
          className="w-full h-full object-cover grayscale-10 contrast-110 absolute"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-12 px-6 mx-auto">
          <div className="max-w-4xl space-y-5">
            <div className="flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4">
              <span className="w-8 h-0.5 bg-white"></span>
              <span className="text-white text-xs font-bold tracking-[0.4em] uppercase">
                La sele
              </span>
            </div>

            <h1 className="text-4xl font-light text-white leading-[0.9] tracking-tighter uppercase">
              El ritmo que<br />
              <span className="font-black text-6xl italic">Nos une.</span>
            </h1>

            <button className="group flex items-center justify-center gap-4 bg-white w-full px-8 py-4 rounded-none transition-all active:scale-95">
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                Comprar ahora
              </span>
              <ArrowUpRight size={16} />
            </button>

            <button className="group flex items-center justify-center gap-4 bg-white/30 text-white w-full px-8 py-4 rounded-none transition-all active:scale-95">
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                Precio mayorista
              </span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* --- BLACK SLEEK SEPARATOR (Responsive Ticker) --- */}
      <div className="bg-slate-950 py-8 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-12 items-center">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-12">
              <span className="text-white/40 text-[9px] font-bold uppercase tracking-[0.4em]">
                1.1 Master Quality
              </span>
              <div className="w-1.5 h-1.5 bg-brand rounded-none"></div>
              <span className="text-white text-xs font-light uppercase tracking-[0.2em]">
                New Arrival
              </span>
              <div className="w-1.5 h-1.5 bg-brand rounded-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* --- CATEGORIES SECTION --- */}
      <section className="py-16 px-6 max-w-[1600px] mx-auto bg-white">
        <div className="mb-12 flex flex-col justify-between items-start gap-6 border-b border-slate-100 pb-10">
          <h2 className="text-4xl font-black uppercase tracking-tighter leading-none">
            Archivo <br /> <span className="text-slate-300">2026.</span>
          </h2>
          <p className="text-slate-400 text-[10px] font-medium uppercase tracking-[0.2em] max-w-[250px]">
            Curaduría de réplicas exactas y estilo urbano.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          <div className="space-y-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-slate-50">
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000"
                className="w-full h-full object-cover grayscale-[20%] active:grayscale-0 transition-all duration-700"
              />
              <div className="absolute top-6 right-6 w-10 h-10 bg-white flex items-center justify-center">
                <Plus size={18} className="text-slate-900" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-2xl font-black uppercase tracking-tighter">
                Sportswear
              </h3>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                Performance Kits
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-slate-50">
              <img
                src="https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=1000"
                className="w-full h-full object-cover grayscale-[20%] active:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-2xl font-black uppercase tracking-tighter">
                Casual
              </h3>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                Urban Lifestyle
              </p>
            </div>
          </div>

          <div className="py-8 space-y-6">
            <div className="relative h-[300px] overflow-hidden bg-slate-50">
              <img
                src="https://images.unsplash.com/photo-1588850567047-380673ee6f72?q=80&w=1500"
                className="w-full h-full object-cover grayscale-[40%]"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <h3 className="text-5xl font-black uppercase tracking-tighter italic text-white">
                  GORRAS.
                </h3>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="text-[9px] font-black uppercase tracking-[0.4em] border-b-2 border-brand pb-2">
                Ver accesorios
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeFinal;