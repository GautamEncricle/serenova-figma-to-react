import React, { useState } from 'react';
// Make sure to have your logo file in your project, e.g., in the `src/assets` folder
import Logo from '../assets/images/Logo.svg';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navLinks = [
    { title: 'Home', url: '#home', active: true },
    { title: 'About Us', url: '#about' },
    { title: 'Accommodation', url: '#accommodation' },
    { title: 'Offers & Packages', url: '#offers' },
    { title: 'Wellness & Spa', url: '#spa' },
    { title: 'Events', url: '#events' },
    { title: 'Facilities', url: '#facilities' },
    { title: 'Gallery', url: '#gallery' },
    { title: 'Contact Us', url: '#contact' },
  ];

  return (
    <header className="bg-cream font-sans relative top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar: Hamburger, Logo, Book Now */}
        <div className="relative flex h-24 items-center justify-between">

          {/* Mobile Menu Button (Hamburger) */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="p-2 text-brand-brown"
              aria-label="Toggle navigation"
              aria-expanded={isNavOpen}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>

          {/* Logo (Centered) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
            <a href="#home" aria-label="Back to homepage">
              <img src={Logo} alt="Tropical Resort Logo" className="h-20 w-auto" />
            </a>
          </div>

          {/* Book Now Button */}
          <div className="flex items-center">
            <button className="hidden lg:block border border-brand-gold px-6 py-2 text-sm font-bold text-brand-brown transition hover:bg-brand-gold hover:text-white ">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>

      {/* --- Main Navigation Menu --- */}
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex justify-center border-t border-dashed border-brand-gold py-4">
        <ul className="flex items-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.title}>
              <a
                href={link.url}
                className={`pb-2 text-gray-700 transition hover:text-black hover:border-b-2 hover:border-brand-gold ${link.active ? 'text-black border-b-2 border-brand-gold' : ''}`}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <nav className={`lg:hidden ${isNavOpen ? 'block' : 'hidden'} border-t border-dashed border-brand-gold py-4`}>
        <ul className="flex flex-col items-center space-y-4">
          {navLinks.map((link) => (
            <li key={link.title}>
              <a
                href={link.url}
                onClick={() => setIsNavOpen(false)} // Close menu on click
                className={`pb-2 text-gray-700 transition hover:text-black ${link.active ? 'text-black' : ''}`}
              >
                {link.title}
              </a>
            </li>
          ))}
          {/* Show Book Now button inside mobile menu */}
          <li>
            <button className="mt-4 border border-brand-gold px-10 py-2 text-sm font-bold text-brand-brown transition hover:bg-brand-gold hover:text-white">
              BOOK NOW
            </button>
          </li>
        </ul>
      </nav>

    </header>
  );
};

export default Header;