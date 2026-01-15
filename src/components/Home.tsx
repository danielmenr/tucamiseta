import React from 'react';
import { Plus } from 'lucide-react';
import Marquee from './Marquee';
import Hero from './Hero';

const Home: React.FC = () => {
    return (
        <>
            {/* --- HERO SECTION --- */}
            <Hero></Hero>
            <Marquee></Marquee>
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

export default Home;