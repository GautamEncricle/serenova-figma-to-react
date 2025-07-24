'use client';

import React, { useState } from "react";
import useFetchData from '../hooks/useFetchData';
import AsyncWrapper from '../components/ui/AsyncWrapper';
import Button from '../components/ui/Button';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { data, loading, error, refetch } = useFetchData('/header');

  const header = data || {};
  const navLinks = header.navLinks || [];

  return (
    <AsyncWrapper loading={loading} error={error} retry={refetch}>
      <header className="bg-cream font-sans relative top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="relative flex h-30 items-center justify-between">
            {/* Mobile Menu Toggle */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsNavOpen(!isNavOpen)}
                className="p-2 text-brand-brown"
                aria-label="Toggle navigation"
                aria-expanded={isNavOpen}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>

            {/* Logo */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
              <a href="#home" aria-label="Back to homepage">
                <img
                  src={header.logo}
                  alt="Logo"
                  className="h-25 w-auto"
                />
              </a>
            </div>

            {/* Right-side Button */}
            <div className="flex items-center right-0 absolute">
              <Button
                buttonText={header.buttonText}
                className="hidden lg:block p-2"
              />
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex justify-center border-brand-gold py-4">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  className={`pb-2 text-gray-700 transition hover:text-black hover:border-b-2 hover:border-brand-gold ${link.active ? "text-dark-brown font-medium border-b-2 border-brand-gold" : ""
                    }`}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <nav className={`lg:hidden ${isNavOpen ? "block" : "hidden"} py-4`}>
          <ul className="flex flex-col items-center space-y-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  onClick={() => setIsNavOpen(false)}
                  className={`pb-2 text-gray-700 transition hover:text-black ${link.active ? "text-black" : ""
                    }`}
                >
                  {link.title}
                </a>
              </li>
            ))}
            <li>
              <button className="bg-transparent p-2 border border-brand-accent text-brand-accent hover:bg-stone-700 hover:text-white transition-colors duration-300">
                {header.buttonText}
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </AsyncWrapper>
  );
};

export default Header;
