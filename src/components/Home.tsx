import React from 'react';
import Marquee from './Marquee';
import Hero from './Hero';
import EssentialsSlider from './EssentialsSlider';

const Home: React.FC = () => {
    return (
        <>
            {/* --- HERO SECTION --- */}
            <Hero></Hero>
            <Marquee></Marquee>
            {/* --- CONCEPTUAL HORIZONTAL CATEGORIES --- */}
            {/* --- DYNAMIC VERTICAL CARDS SECTION --- */}
            {/* --- ESSENTIALS GRID: STARTING AT --- */}
            {/* --- ESSENTIALS HORIZONTAL SLIDER --- */}
            <EssentialsSlider></EssentialsSlider>
            <section className="py-20 px-6 max-w-[1400px] mx-auto bg-white">

                {/* Header sutil pero firme */}
                <div className="flex items-end justify-between mb-10">
                    <div className="flex flex-col">
                        <span className="text-[10px] font-black tracking-[0.4em] uppercase text-zinc-400">Categorías</span>
                        <h2 className="text-2xl font-black uppercase tracking-tighter text-zinc-900">Selección 2026</h2>
                    </div>
                    <div className="h-[1px] flex-grow mx-8 bg-zinc-100 hidden md:block"></div>
                    <button className="text-[10px] font-bold uppercase tracking-widest border border-zinc-200 px-4 py-2 hover:bg-black hover:text-white transition-all">
                        Explorar todo
                    </button>
                </div>

                {/* Grid de tarjetas verticales */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                    {/* CARD 01 - DEPORTIVO */}
                    <a href="/deportivo" className="group relative aspect-[3/4] overflow-hidden bg-zinc-100">
                        <img
                            src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=800"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>

                        <div className="absolute bottom-0 left-0 p-6 w-full">
                            <span className="text-[10px] text-white/50 block mb-1">01</span>
                            <h3 className="text-2xl font-black uppercase tracking-tighter text-white leading-none">
                                Deportivo
                            </h3>
                            <div className="h-0 group-hover:h-8 transition-all duration-300 overflow-hidden">
                                <p className="text-[10px] text-white/70 uppercase tracking-widest mt-2">Tecnología & Rendimiento</p>
                            </div>
                        </div>
                    </a>

                    {/* CARD 02 - CASUAL */}
                    <a href="/casual" className="group relative aspect-[3/4] overflow-hidden bg-zinc-100">
                        <img
                            src="https://images.unsplash.com/photo-1520975922284-7b958b3f4b8a?q=80&w=800"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>

                        <div className="absolute bottom-0 left-0 p-6 w-full">
                            <span className="text-[10px] text-white/50 block mb-1">02</span>
                            <h3 className="text-2xl font-black uppercase tracking-tighter text-white leading-none">
                                Casual
                            </h3>
                            <div className="h-0 group-hover:h-8 transition-all duration-300 overflow-hidden">
                                <p className="text-[10px] text-white/70 uppercase tracking-widest mt-2">Esenciales Diarios</p>
                            </div>
                        </div>
                    </a>

                    {/* CARD 03 - EQUIPOS */}
                    <a href="/equipos" className="group relative aspect-[3/4] overflow-hidden bg-zinc-100">
                        <img
                            src="https://www.entrenos.com.co/wp-content/uploads/2025/11/Nueva-camiseta-de-la-Seleccion-Colombia.png"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>

                        <div className="absolute bottom-0 left-0 p-6 w-full">
                            <span className="text-[10px] text-white/50 block mb-1">03</span>
                            <h3 className="text-2xl font-black uppercase tracking-tighter text-white leading-none">
                                Equipos
                            </h3>
                            <div className="h-0 group-hover:h-8 transition-all duration-300 overflow-hidden">
                                <p className="text-[10px] text-white/70 uppercase tracking-widest mt-2">Cultura de Fútbol</p>
                            </div>
                        </div>
                    </a>

                    {/* CARD 04 - GORRAS */}
                    <a href="/gorras" className="group relative aspect-[3/4] overflow-hidden bg-zinc-100">
                        <img
                            src="https://images.unsplash.com/photo-1588850567047-380673ee6f72?q=80&w=800"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>

                        <div className="absolute bottom-0 left-0 p-6 w-full">
                            <span className="text-[10px] text-white/50 block mb-1">04</span>
                            <h3 className="text-2xl font-black uppercase tracking-tighter text-white leading-none">
                                Gorras
                            </h3>
                            <div className="h-0 group-hover:h-8 transition-all duration-300 overflow-hidden">
                                <p className="text-[10px] text-white/70 uppercase tracking-widest mt-2">Headwear Urban</p>
                            </div>
                        </div>
                    </a>

                </div>
            </section>

            {/* --- OFFERS / DROPS SECTION --- */}
            <section className="py-24 px-6 max-w-[1400px] mx-auto bg-white">

                {/* Header de Ofertas */}
                <div className="flex items-baseline justify-between mb-12">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-[2px] bg-black"></div>
                        <h2 className="text-3xl font-black uppercase tracking-tighter text-zinc-900">
                            Ofertas <span className="text-zinc-400">/ Seasonal Drops</span>
                        </h2>
                    </div>
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">
                        Stock Limitado
                    </span>
                </div>

                {/* Grid de Productos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* PRODUCT CARD 01 */}
                    <div className="group cursor-pointer">
                        <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100 mb-4">
                            {/* Badge de Descuento Minimalista */}
                            <div className="absolute top-4 left-4 z-10 bg-black text-white px-2 py-1 text-[10px] font-bold uppercase tracking-widest">
                                -30% OFF
                            </div>

                            <img
                                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                alt="Camiseta Replica"
                            />

                            {/* Quick Add / Sizes - Aparece en Hover */}
                            <div className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-sm p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <div className="flex justify-between items-center">
                                    <span className="text-[10px] font-bold uppercase tracking-tighter">Tallas: S M L XL</span>
                                    <button className="text-[10px] font-black uppercase border-b border-black">Añadir +</button>
                                </div>
                            </div>
                        </div>

                        {/* Info del Producto */}
                        <div className="flex flex-col gap-1">
                            <p className="text-[10px] text-zinc-400 uppercase tracking-widest">Streetwear / Tee</p>
                            <h3 className="text-sm font-black uppercase tracking-tight text-zinc-900 group-hover:underline underline-offset-4">
                                Oversized Heavy Tee - Black Edition
                            </h3>
                            <div className="flex items-center gap-3 mt-1">
                                <span className="text-sm font-bold text-zinc-900">$85.000</span>
                                <span className="text-[11px] text-zinc-400 line-through">$120.000</span>
                            </div>
                        </div>
                    </div>

                    {/* PRODUCT CARD 02 */}
                    <div className="group cursor-pointer">
                        <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100 mb-4">
                            <div className="absolute top-4 left-4 z-10 bg-black text-white px-2 py-1 text-[10px] font-bold uppercase tracking-widest">
                                LAST SIZE
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1552066344-24632e509613?q=80&w=800"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-sm p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <div className="flex justify-between items-center">
                                    <span className="text-[10px] font-bold uppercase tracking-tighter">Última: XL</span>
                                    <button className="text-[10px] font-black uppercase border-b border-black">Añadir +</button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-[10px] text-zinc-400 uppercase tracking-widest">Football / Retro</p>
                            <h3 className="text-sm font-black uppercase tracking-tight text-zinc-900 group-hover:underline underline-offset-4">
                                Classic Team Jersey 90s Style
                            </h3>
                            <div className="flex items-center gap-3 mt-1">
                                <span className="text-sm font-bold text-zinc-900">$110.000</span>
                                <span className="text-[11px] text-zinc-400 line-through">$150.000</span>
                            </div>
                        </div>
                    </div>

                    {/* PRODUCT CARD 03 */}
                    <div className="group cursor-pointer">
                        <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100 mb-4">
                            <div className="absolute top-4 left-4 z-10 bg-black text-white px-2 py-1 text-[10px] font-bold uppercase tracking-widest">
                                FLASH SALE
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-sm p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <div className="flex justify-between items-center">
                                    <span className="text-[10px] font-bold uppercase tracking-tighter">Tallas: Única</span>
                                    <button className="text-[10px] font-black uppercase border-b border-black">Añadir +</button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-[10px] text-zinc-400 uppercase tracking-widest">Accessory / Urban</p>
                            <h3 className="text-sm font-black uppercase tracking-tight text-zinc-900 group-hover:underline underline-offset-4">
                                Tech-Wear 5-Panel Cap
                            </h3>
                            <div className="flex items-center gap-3 mt-1">
                                <span className="text-sm font-bold text-zinc-900">$45.000</span>
                                <span className="text-[11px] text-zinc-400 line-through">$65.000</span>
                            </div>
                        </div>
                    </div>

                    {/* PRODUCT CARD 04 */}
                    <div className="group cursor-pointer">
                        <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100 mb-4">
                            <div className="absolute top-4 left-4 z-10 bg-black text-white px-2 py-1 text-[10px] font-bold uppercase tracking-widest">
                                -20% OFF
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1571945153237-4929e783ee4a?q=80&w=800"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-sm p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <div className="flex justify-between items-center">
                                    <span className="text-[10px] font-bold uppercase tracking-tighter">Tallas: M L</span>
                                    <button className="text-[10px] font-black uppercase border-b border-black">Añadir +</button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-[10px] text-zinc-400 uppercase tracking-widest">Essentials / Shorts</p>
                            <h3 className="text-sm font-black uppercase tracking-tight text-zinc-900 group-hover:underline underline-offset-4">
                                Performance Training Shorts
                            </h3>
                            <div className="flex items-center gap-3 mt-1">
                                <span className="text-sm font-bold text-zinc-900">$75.000</span>
                                <span className="text-[11px] text-zinc-400 line-through">$95.000</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Home;