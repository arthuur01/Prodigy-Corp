'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false); 

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`${
        isScrolled ? 'bg-white/10 backdrop-blur-sm shadow-sm' : 'bg-white shadow-lg'
      } sticky top-0 z-50 transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-14">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center select-none">
              <span className="text-lg md:text-xl tracking-tight text-black select-none">
                Prodigy
              </span>
            </Link>
          </div>

          {/* Links Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Products
            </a>
            <a
              href="#about"
              className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              About Us
            </a>
            <a
              href="#footer"
              className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Contact
            </a>

            {/* Seletor de idioma */}
            <div className="relative">
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center space-x-2 px-3 py-2 text-gray-900 hover:text-gray-500 rounded-md text-sm font-medium transition-colors duration-200"
              >
                <Image
                  src="/language_icon.png"
                  alt="Language"
                  width={20}
                  height={20}
                  className="object-contain hover:scale-110 transition-transform duration-200 cursor-pointer"
                />
                
              </button>

              {/* Dropdown */}
              {open && (
                <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  <button
                    onClick={() => setOpen(false)}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    English
                  </button>
                  <button
                    onClick={() => setOpen(false)}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Portuguese(BR)
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Botão Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open Main Menu</span>
              {/* Ícones */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
          <a
            href="#about"
            className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#services"
            className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#footer"
            className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
