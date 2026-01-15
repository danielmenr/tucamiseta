import React, { useState } from 'react';
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: 'Inicio', href: '/' },
    { name: 'Catálogo', href: '/tienda' },
    { name: 'Promociones', href: '/promociones' },
    { name: 'Mayoristas', href: '/mayoristas' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-lg border-b border-gray-200 font-brand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- MOBILE VIEW (3 Columns) --- */}
        <div className="grid grid-cols-3 items-center h-16 md:hidden">
          {/* Izquierda: Menu Burger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-800 justify-self-start p-1"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Centro: Logo */}
          <a href="/" className="tracking-tighter text-center">
            <img src="logo.svg" alt="Tucamiseta Logo" className='w-full' />
          </a>

          {/* Derecha: Solo Carrito */}
          <button className="relative justify-self-end text-slate-800 p-1">
            <ShoppingCart size={24} />
            <span className="absolute -top-1 -right-1 bg-brand text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
              0
            </span>
          </button>
        </div>

        {/* --- DESKTOP VIEW --- */}
        <div className="hidden md:flex justify-between items-center h-20">
          {/* Logo */}
          <a href="/" className="tracking-tighter shrink-0">
            <img src="logo.svg" alt="Tucamiseta Logo" className='w-36' />
          </a>

          {/* Navegación Central */}
          <nav className="flex space-x-10">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-500 hover:text-brand transition-colors tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Acciones Derecha: Buscar, Registro y Carrito */}
          <div className="flex items-center space-x-6">
            <button className="text-slate-800 hover:text-brand transition-colors p-1" title="Buscar">
              <Search size={20} />
            </button>

            <button className="flex items-center gap-2 text-slate-800 hover:text-brand transition-colors p-1" title="Mi Cuenta">
              <User size={20} />
              <span className="text-xs font-semibold tracking-tight">Registro</span>
            </button>

            <button className="relative text-slate-800 hover:text-brand transition-colors p-1">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-brand text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full ring-2 ring-white">
                0
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-in fade-in slide-in-from-top-1 duration-200">
          <nav className="flex flex-col p-6 space-y-5">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-slate-800 hover:text-brand"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <hr className="border-gray-50" />
            {/* Opciones que estaban ocultas en el header mobile aparecen aquí */}
            <div className="flex flex-col space-y-4 pt-2">
              <button className="flex items-center gap-3 text-slate-600 font-medium">
                <Search size={20} /> Buscar productos
              </button>
              <button className="flex items-center gap-3 text-slate-600 font-medium">
                <User size={20} /> Crear cuenta / Login
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;