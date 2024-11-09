"use client"
import Link from "next/link";
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <header className="header-container">
      <div className="header-content">
        {/* Logo */}
        <Link href={"/"}>
          <h1 className="logo-text">
            TASTEBUDS
          </h1>
        </Link>

       
        <nav className="nav-links">
          <Link href={"/"} className="nav-item">
            Home
          </Link>
          <Link href={"/about-me"} className="nav-item">
            About Me
          </Link>
          <Link href={"/skills"} className="nav-item">
            Skills
          </Link>
        </nav>

        
        <div className="mobile-menu-icon">
          <button onClick={toggleMenu} className="menu-toggle-button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="menu-icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

     
      {isOpen && (
        <div className="mobile-menu">
          <Link href={"/"} className="mobile-nav-item">Home</Link>
          <Link href={"/about-me"} className="mobile-nav-item">About Me</Link>
          <Link href={"/skills"} className="mobile-nav-item">Skills</Link>
        </div>
      )}
    </header>
  );
};

export default Header;


