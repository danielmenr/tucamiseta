import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ArrowUpRight } from 'lucide-react';

const Hero = () => {
    // 1. Estados para los dots
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    // 2. Configuración de Embla con Autoplay de 8s
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true },
        [Autoplay({ delay: 6000, stopOnInteraction: false })]
    );

    // 3. Función para ir a un slide específico
    const scrollTo = useCallback(
        (index: number) => emblaApi && emblaApi.scrollTo(index),
        [emblaApi]
    );

    // 4. Sincronizar el estado de Embla con React
    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi, setSelectedIndex]);

    useEffect(() => {
        if (!emblaApi) return;
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on('select', onSelect);
        onSelect();
    }, [emblaApi, setScrollSnaps, onSelect]);

    const slides = [
        {
            id: 1,
            image: "https://fcf.com.co/wp-content/uploads/2025/11/Colombia_Producto_2842-1024x576.jpg",
            tag: "La Sele",
            titleLight: "El ritmo que",
            titleBold: "Nos une.",
            buttonText: "Comprar ahora"
        },
        {
            id: 2,
            image: "./IMG_1583.jpg",
            tag: "Streetwear",
            titleLight: "Estilo para",
            titleBold: "La calle.",
            buttonText: "Ver colección"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=2000",
            tag: "prendas nacionales",
            titleLight: "Completa tu",
            titleBold: "Outfit.",
            buttonText: "Ver gorras"
        }
    ];

    return (
        <section className="relative h-[84vh] w-full overflow-hidden">
            {/* Viewport de Embla */}
            <div className="h-full overflow-hidden" ref={emblaRef}>
                <div className="flex h-full">
                    {/* slides */}
                    {slides.map((slide) => (
                        <div className="relative flex-[0_0_100%] h-full" key={slide.id}>
                            <div className='w-full h-full absolute top-0 left-0 overflow-hidden'>
                                <img src={slide.image} alt={slide.tag} className="w-full h-full object-cover grayscale-10 contrast-110 animate-slow-zoom" />
                            </div>
                            <div className="absolute inset-0 bg-linear-to-t from-black/70 to-black/5" />
                            <div className="relative h-full flex flex-col justify-end pb-20 px-6 w-full">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="w-6 h-0.5 bg-white"></span>
                                    <span className="text-white text-xs font-bold uppercase tracking-[0.3em]">
                                        {slide.tag}
                                    </span>
                                </div>
                                <div className="space-y-1">
                                    <h2 className="text-4xl font-light text-white uppercase tracking-tighter">
                                        {slide.titleLight}
                                    </h2>
                                    <h2 className="font-black text-6xl italic text-white uppercase leading-none tracking-tighter">
                                        {slide.titleBold}
                                    </h2>
                                </div>
                                <div className="mt-8">
                                    <button className="group flex items-center justify-center gap-4 bg-white w-full md:w-auto px-10 py-4 hover:bg-brand hover:text-white active:scale-95 duration-200 transition-all rounded-none">
                                        <span className="text-sm font-black uppercase tracking-widest">
                                            {slide.buttonText}
                                        </span>
                                        <ArrowUpRight size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- DOTS INDICATORS (SHARP & INTERACTIVE) --- */}
            <div className="absolute bottom-8 right-6 flex gap-3 z-20">
                {scrollSnaps.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollTo(index)}
                        className={`h-2 transition-all duration-300 rounded-full border border-white ${index === selectedIndex
                            ? 'w-10 bg-white'
                            : 'w-2 bg-transparent hover:bg-white/20'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Contador numérico sutil (Opcional, muy estilo editorial) */}
            <div className="absolute bottom-8 left-6 text-white/40 font-black text-xs tracking-widest z-20">
                0{selectedIndex + 1} / 0{slides.length}
            </div>
        </section>
    );
};

export default Hero;