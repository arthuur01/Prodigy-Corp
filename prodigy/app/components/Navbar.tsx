'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    <nav className={`${isScrolled ? 'bg-white/10 backdrop-blur-sm shadow-sm' : 'bg-white shadow-lg'} sticky top-0 z-50 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-14">
          {/* Logo */}
          <div className="flex-shrink-0">
  <Link href="/" className="flex items-center select-none">
    <span className="text-lg md:text-xl  tracking-tight text-black select-none">
      Prodigy
    </span>
  </Link>
</div>

          {/* Desktop */}
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
                Products
              </a>
              <a
                href="#footer"
                className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open Main Menu</span>
            
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
