'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
  <Link href="/" className="block relative w-[50px] h-[30px] group overflow-hidden">
    {/* Fundo preto quadrado */}
    <div className="absolute inset-0 bg-black rounded-md"></div>
    
    {/* Logo padrão */}
    <Image
      src="/prodogy_icon.png"
      alt="Prodigy Logo"
      fill
      className="object-contain transition-transform duration-300 ease-in-out transform translate-x-0 group-hover:-translate-x-full relative z-10 brightness-0 invert"
      priority
    />

    {/* Ícone de casinha */}
    <Image
      src="/home_icon.png"
      alt="Home Icon"
      fill
      className="object-contain transition-transform duration-300 ease-in-out transform translate-x-full group-hover:translate-x-0 relative z-10 brightness-0 invert"
    />
  </Link>
</div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
            
              <a
                href="#about"
                className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                About Us
              </a>
              <a
                href="#services"
                className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Services
              </a>
              <a
                href="#contact"
                className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open Main Menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
    
          <a
            href="#about"
            className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Sobre
          </a>
          <a
            href="#services"
            className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Serviços
          </a>
          <a
            href="#contact"
            className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Contato
          </a>
        </div>
      </div>
    </nav>
  );
}
