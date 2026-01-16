import { Menu, ShoppingCart } from 'lucide-react'
import React, { useState, useEffect } from 'react'

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        // Clean up the event listener when the component unmounts
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`w-full px-6 md:px-[10%] py-5 fixed top-0 left-0 duration-400 ${isScrolled ? 'bg-white border-b border-gray-200 md:shadow-2xl/20' : 'bg-transparent border-b border-transparent text-white'}`}>
            <div className='grid grid-cols-3 items-center'>
                <div className='flex items-center justify-start'>
                    <Menu className="cursor-pointer" />
                </div>
                <div className='flex items-center justify-center'>
                    <img src="logo-white.svg" alt="Tucamiseta Logo" className={`duration-400 absolute w-32 ${!isScrolled ? 'opacity-100' : 'opacity-0'}`} />
                    <img src="logo.svg" alt="Tucamiseta Logo" className={`duration-400 w-32 ${isScrolled ? 'opacity-100' : 'opacity-0'}`} />
                </div>
                <div className='flex items-center justify-end'>
                    <ShoppingCart className="cursor-pointer" />
                </div>
            </div>
        </header>
    )
}

export default Header