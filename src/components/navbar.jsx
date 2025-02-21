import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="max-w-4xl mx-auto ">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 font-bold text-xl">
            Alex Smith
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-blue-400 transition duration-300">About Me</a>
            <a href="#resume" className="hover:text-blue-400 transition duration-300">Resume</a>
            <a href="#portfolio" className="hover:text-blue-400 transition duration-300">Portfolio</a>
            <a href="#blog" className="hover:text-blue-400 transition duration-300">Blog</a>
            <a href="#contact" className="hover:text-blue-400 transition duration-300">Contact</a>
            <a href="#extra" className="hover:text-blue-400 transition duration-300">Extra</a>
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <a 
              href="#get-started" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
            >
              Get it Now
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" className="block px-3 py-2 rounded-md hover:bg-gray-700">About Me</a>
            <a href="#resume" className="block px-3 py-2 rounded-md hover:bg-gray-700">Resume</a>
            <a href="#portfolio" className="block px-3 py-2 rounded-md hover:bg-gray-700">Portfolio</a>
            <a href="#blog" className="block px-3 py-2 rounded-md hover:bg-gray-700">Blog</a>
            <a href="#contact" className="block px-3 py-2 rounded-md hover:bg-gray-700">Contact</a>
            <a href="#extra" className="block px-3 py-2 rounded-md hover:bg-gray-700">Extra</a>
            <a 
              href="#get-started" 
              className="block px-3 py-2 mt-4 text-center bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg"
            >
              Get it Now
            </a>
          </div>
          <div className="border-t border-gray-700 p-3">
            <p className="text-gray-400 text-sm">My name YT</p>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;