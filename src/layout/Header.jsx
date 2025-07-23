import React, { useState } from "react";
// Make sure to have your logo file in your project, e.g., in the `src/assets` folder
import Logo from "../assets/images/Logo.svg";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navLinks = [
    { title: "Home", url: "#home", active: true },
    { title: "About Us", url: "#about" },
    { title: "Accommodation", url: "#accommodation" },
    { title: "Offers & Packages", url: "#offers" },
    { title: "Wellness & Spa", url: "#spa" },
    { title: "Events", url: "#events" },
    { title: "Facilities", url: "#facilities" },
    { title: "Gallery", url: "#gallery" },
    { title: "Contact Us", url: "#contact" },
  ];

  return (
    <header className="bg-cream font-sans relative top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="relative flex h-30 items-center justify-between">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
            <a href="#home" aria-label="Back to homepage">
              <img
                src={Logo}
                alt="Tropical Resort Logo"
                className="h-25 w-auto"
              />
            </a>
          </div>

          <div className="flex items-center right-0 absolute">
            <button className="hidden lg:block bg-transparent p-2 border border-brand-accent text-brand-accent hover:bg-stone-700 hover:text-white transition-colors duration-300">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex justify-center border-brand-gold py-4">
        <ul className="flex items-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.title}>
              <a
                href={link.url}
                className={`pb-2 text-gray-700 transition hover:text-black hover:border-b-2 hover:border-brand-gold ${link.active ? "text-dark-brown font-medium border-b-2 border-brand-gold" : ""}`}
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
          {navLinks.map((link) => (
            <li key={link.title}>
              <a
                href={link.url}
                onClick={() => setIsNavOpen(false)}
                className={`pb-2 text-gray-700 transition hover:text-black ${link.active ? "text-black" : ""}`}
              >
                {link.title}
              </a>
            </li>
          ))}
          <li>
            <button className="bg-transparent p-2 border border-brand-accent text-brand-accent hover:bg-stone-700 hover:text-white transition-colors duration-300">
              BOOK NOW
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
