import React from 'react';
import Marquee from './Marquee';
import Hero from './Hero';
import { ArrowUpRight } from 'lucide-react';

const Home: React.FC = () => {
    return (
        <>
            {/* --- HERO SECTION --- */}
            <Hero></Hero>
            <Marquee></Marquee>
            <div className="px-6 my-12 md:my-18 md:w-[80%] md:px-0 md:mx-auto text-center md:text-left">
                <b className="opacity-40 font-bold text-xs uppercase tracking-widest block mb-2">
                    Categorías
                </b>
                <h2 className="font-black text-4xl italic uppercase leading-none tracking-tighter">
                    Nuestros Productos
                </h2>
            </div>
            <div className="flex overflow-x-auto px-6 gap-6 md:w-[80%] md:mx-auto md:px-0 no-scrollbar">
                <div className="shrink-0 group">
                    <div className='w-64 h-80 bg-neutral-900 relative overflow-hidden'>
                        <img src="https://dpjye2wk9gi5z.cloudfront.net/wcsstore/ExtendedSitesCatalogAssetStore/images/catalog/zoom/3023552-0001V1.jpg" className="w-full h-full object-cover brightness-95 group-hover:scale-105 group-hover:brightness-105 duration-500" />
                        <div className='p-3 absolute top-6 right-6 bg-white items-center justify-center flex group-hover:text-white duration-300'>
                            <div className='w-0 h-full absolute bg-black top-0 left-0 group-hover:w-full duration-200'></div>
                            <ArrowUpRight size={20} className='relative group-hover:scale-110 duration-200' />
                        </div>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest opacity-40 mt-4 mb-2 block">
                        Shorts deportivos
                    </span>
                    <span className="font-light text-2xl leading-none tracking-tighter group-hover:underline">
                        Desde <b className='font-black italic'>$25.000</b>
                    </span>
                </div>
                <div className="shrink-0 group">
                    <div className='w-64 h-80 bg-neutral-900 relative overflow-hidden'>
                        <img src="https://cdn.baguer.co/uploads/2025/12/camiseta-monastery-ruston-blanco-128425BL_A.webp_UqxR8uTckZh1nvQ6rV2Uy1wwL23USY.webp" className="w-full h-full object-cover brightness-95 group-hover:scale-105 group-hover:brightness-105 duration-500" />
                        <div className='p-3 absolute top-6 right-6 bg-white items-center justify-center flex group-hover:text-white duration-300'>
                            <div className='w-0 h-full absolute bg-black top-0 left-0 group-hover:w-full duration-200'></div>
                            <ArrowUpRight size={20} className='relative group-hover:scale-110 duration-200' />
                        </div>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest opacity-40 mt-4 mb-2 block">
                        camisas básicas
                    </span>
                    <span className="font-light text-2xl leading-none tracking-tighter group-hover:underline">
                        Desde <b className='font-black italic'>$29.000</b>
                    </span>
                </div>
                <div className="shrink-0 group">
                    <div className='w-64 h-80 bg-neutral-900 relative overflow-hidden'>
                        <img src="https://www.lojaferroshop.com.br/cdn/shop/files/COLAPSEPRETA.jpg" className="w-full h-full object-cover brightness-95 group-hover:scale-105 group-hover:brightness-105 duration-500" />
                        <div className='p-3 absolute top-6 right-6 bg-white items-center justify-center flex group-hover:text-white duration-300'>
                            <div className='w-0 h-full absolute bg-black top-0 left-0 group-hover:w-full duration-200'></div>
                            <ArrowUpRight size={20} className='relative group-hover:scale-110 duration-200' />
                        </div>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest opacity-40 mt-4 mb-2 block">
                        camisas deportivas
                    </span>
                    <span className="font-light text-2xl leading-none tracking-tighter group-hover:underline">
                        Desde <b className='font-black italic'>$30.000</b>
                    </span>
                </div>
                <div className="shrink-0 group">
                    <div className='w-64 h-80 bg-neutral-900 relative overflow-hidden'>
                        <img src="https://tiendamediodelcampoes.com/cdn/shop/files/9007A27E-39D7-481D-954C-F784033FEB12_800x.jpg" className="w-full h-full object-cover brightness-95 group-hover:scale-105 group-hover:brightness-105 duration-500" />
                        <div className='p-3 absolute top-6 right-6 bg-white items-center justify-center flex group-hover:text-white duration-300'>
                            <div className='w-0 h-full absolute bg-black top-0 left-0 group-hover:w-full duration-200'></div>
                            <ArrowUpRight size={20} className='relative group-hover:scale-110 duration-200' />
                        </div>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest opacity-40 mt-4 mb-2 block">
                        jerseys de fútbol
                    </span>
                    <span className="font-light text-2xl leading-none tracking-tighter group-hover:underline">
                        Desde <b className='font-black italic'>$35.000</b>
                    </span>
                </div>
                <div className="shrink-0 group">
                    <div className='w-64 h-80 bg-neutral-900 relative overflow-hidden'>
                        <img src="https://cdn-images.farfetch-contents.com/20/06/85/63/20068563_45250993_600.jpg" className="w-full h-full object-cover brightness-95 group-hover:scale-105 group-hover:brightness-105 duration-500" />
                        <div className='p-3 absolute top-6 right-6 bg-white items-center justify-center flex group-hover:text-white duration-300'>
                            <div className='w-0 h-full absolute bg-black top-0 left-0 group-hover:w-full duration-200'></div>
                            <ArrowUpRight size={20} className='relative group-hover:scale-110 duration-200' />
                        </div>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest opacity-40 mt-4 mb-2 block">
                        camisas tipo polo
                    </span>
                    <span className="font-light text-2xl leading-none tracking-tighter group-hover:underline">
                        Desde <b className='font-black italic'>$50.000</b>
                    </span>
                </div>
                <div className="shrink-0 group">
                    <div className='w-64 h-80 bg-neutral-900 relative overflow-hidden'>
                        <img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/525717/01/mod01/fnd/PNA/fmt/png/CLOUDSPUN-Men's-Joggers" className="w-full h-full object-cover brightness-95 group-hover:scale-105 group-hover:brightness-105 duration-500" />
                        <div className='p-3 absolute top-6 right-6 bg-white items-center justify-center flex group-hover:text-white duration-300'>
                            <div className='w-0 h-full absolute bg-black top-0 left-0 group-hover:w-full duration-200'></div>
                            <ArrowUpRight size={20} className='relative group-hover:scale-110 duration-200' />
                        </div>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest opacity-40 mt-4 mb-2 block">
                        joggers y pants
                    </span>
                    <span className="font-light text-2xl leading-none tracking-tighter group-hover:underline">
                        Desde <b className='font-black italic'>$60.000</b>
                    </span>
                </div>
            </div>
            <div className="px-6 my-12 md:mt-30 md:w-[80%] md:px-0 md:mx-auto text-center md:text-left">
                <b className="opacity-40 font-bold text-xs uppercase tracking-widest block mb-2">
                    nuevos drops
                </b>
                <h2 className="font-black text-4xl italic uppercase leading-none tracking-tighter">
                    lo mas nuevo está aquí
                </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-6 overflow-x-auto px-6 gap-2 md:w-[80%] md:mx-auto md:px-0">
                <div className="group cursor-pointer">
                    <div className="relative overflow-hidden bg-zinc-100 mb-4">
                        {/* Badge de Descuento Minimalista */}
                        <div className="absolute top-4 left-4 z-10 bg-brand text-white px-2 py-1 text-[10px] font-bold uppercase tracking-widest">
                            -30% OFF
                        </div>
                        <img
                            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800"
                            className="w-full h-56 object-cover group-hover:scale-105 transition-all duration-500"
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
                <div className="group cursor-pointer">
                    <div className="relative overflow-hidden bg-zinc-100 mb-4">
                        {/* Badge de Descuento Minimalista */}
                        <div className="absolute top-4 left-4 z-10 bg-brand text-white px-2 py-1 text-[10px] font-bold uppercase tracking-widest">
                            -30% OFF
                        </div>
                        <img
                            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800"
                            className="w-full h-56 object-cover group-hover:scale-105 transition-all duration-500"
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
            </div>
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


                    {/* PRODUCT CARD 02 */}
                    <div className="group cursor-pointer">
                        <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100 mb-4">
                            <div className="absolute top-4 left-4 z-10 bg-black text-white px-2 py-1 text-[10px] font-bold uppercase tracking-widest">
                                LAST SIZE
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1552066344-24632e509613?q=80&w=800"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 brightness950 group-hover:scale-105 transition-all duration-705"
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
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 brightness950 group-hover:scale-105 transition-all duration-705"
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
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 brightness950 group-hover:scale-105 transition-all duration-705"
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