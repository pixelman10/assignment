"use client"
import Link from "next/link"

  // components/Header.js
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the dropdown menu
  };

  return (
    <header className="bg-gray-900 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href={"/"}>
        <h1 className="text-3xl font-bold text-white">ANIME EXPLORER</h1>
        </Link>

        {/* Navigation Links for Desktop */}
        <nav className="hidden md:flex space-x-8">
        <Link  href={"/"} className="text-gray-300 hover:text-purple-500 transition-colors">Home</Link>
        <Link  href={"/about-me"} className="text-gray-300 hover:text-purple-500 transition-colors">About Me</Link>
        <Link  href={"/skills"} className="text-gray-300 hover:text-purple-500 transition-colors">Skills</Link>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-300 hover:text-purple-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 py-2 px-4 rounded">
          <Link href={"/"} className="block text-gray-300 hover:text-purple-500 py-1 transition-colors">Home</Link>
          <Link href={"/about-me"} className="block text-gray-300 hover:text-purple-500 py-1 transition-colors">About Me</Link>
          <Link href={"/skills"} className="block text-gray-300 hover:text-purple-500 py-1 transition-colors">Skills</Link>
        </div>
      )}
    </header>
  );
};

export default Header;

  
  
