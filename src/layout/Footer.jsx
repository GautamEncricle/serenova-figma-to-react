import React from "react";
import Marquee from "react-fast-marquee";

const leafBg = "./src/assets/images/icons/palmLeafBg.svg";

const paperPlaneIcon = "./src/assets/images/icons/social/paper-plane-icon.svg";
const sendIcon = "./src/assets/images/icons/social/send-icon.svg";
const facebookIcon = "./src/assets/images/icons/social/facebook-icon.svg";
const twitterIcon = "./src/assets/images/icons/social/twitter-x-icon.svg";
const instagramIcon = "./src/assets/images/icons/social/instagram-icon.svg";
const linkedInIcon = "./src/assets/images/icons/social/linkedin-icon.svg";

const Footer = () => {
  const marqueeText = "Serenova The Luxury Stay.";

  return (
    <footer
      className="relative bg-cream-medium font-sans pt-16 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        "--leaf-bg-url": `url(${leafBg})`,
      }}
    >
      {/* Decorative Background Images */}
      <div
        className="absolute bottom-[-68px] left-[-142px] w-[200px] md:bottom-20 md:-left-30 rotate-110 md:w-100 h-100 bg-no-repeat bg-contain opacity-80"
        style={{ backgroundImage: "var(--leaf-bg-url)" }}
      ></div>
      <div
        className="absolute bottom-[-220px] right-0 w-[200px] md:bottom-0 md:-right-10 rotate-10 md:w-100 h-100 bg-no-repeat bg-contain opacity-80"
        style={{ backgroundImage: "var(--leaf-bg-url)" }}
      ></div>

      {/* --- Marquee Section --- */}
      <div className="w-full mb-16 overflow-y-hidden no-scrollbar">
        <Marquee speed={350} gradient={false} pauseOnHover={true}>
          <span className="text-[70px] md:text-9xl text-dark font-[200] mr-16">
            {marqueeText}
          </span>
          <span className="text-[70px] md:text-9xl text-dark font-[200] mr-16">
            {marqueeText}
          </span>
        </Marquee>
      </div>

      {/* --- Newsletter Section --- */}
      <div className="relative md:flex md:flex-col md:justify-center items-center z-10 max-w-2xl mx-auto text-center mb-16">
        <img
          src={paperPlaneIcon}
          alt="Subscribe"
          className="mx-auto mb-5 bg-dark-brown p-2 rounded w-10 h-10"
        />
        <h3 className="text-2xl md:w-[50%] text-center font-extralight text-gray-700 mb-6">
          Get the best blog stories into your inbox!
        </h3>

        {/* Email Input Form */}
        <form className="relative max-w-lg mx-auto mb-4">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="w-full py-3 pl-4 pr-32 text-sm border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-dark-brown"
          />
          <button
            type="submit"
            className="absolute inset-y-0 right-0 flex items-center pr-4 text-xs text-gray-600 hover:text-black"
          >
            <img
              src={sendIcon}
              alt="Subscribe"
              className="w-4 h-4 mr-2 opacity-70"
            />
            Subscribe
          </button>
        </form>

        {/* Privacy Policy Checkbox */}
        <div className="flex items-center justify-center text-xs text-gray-500">
          <input
            type="checkbox"
            id="privacy"
            className="w-4 h-4 mr-2 accent-dark-brown"
          />
          <label htmlFor="privacy">
            I agree to the{" "}
            <a href="/privacy-policy" className="underline hover:text-black">
              Privacy Policy
            </a>
          </label>
        </div>
      </div>

      {/* --- Bottom Footer Bar --- */}
      <div className="relative z-10 max-w-7xl mx-auto pt-8 border-t-2 border-dark">
        <div className="flex flex-col md:flex-row justify-between items-center text-center gap-6">
          {/* Copyright */}
          <p className="text-xs text-gray-500">
            © 2025 Serenova. All rights reserved.
          </p>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-700">
            <a href="/" className="hover:underline">
              Home
            </a>
            <a href="/accommodation" className="hover:underline">
              Accommodation
            </a>
            <a href="/offers" className="hover:underline">
              Offers & Packages
            </a>
            <a href="/events" className="hover:underline">
              Events
            </a>
            <a href="/facilities" className="hover:underline">
              Facilities
            </a>
            <a href="/contact" className="hover:underline">
              Contact us
            </a>
          </nav>

          {/* Social Media Icons */}
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-white rounded-md border border-gray-200"
            >
              <img src={facebookIcon} alt="Facebook" className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-white rounded-md border border-gray-200"
            >
              <img src={twitterIcon} alt="Twitter" className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-white rounded-md border border-gray-200"
            >
              <img src={instagramIcon} alt="Instagram" className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-white rounded-md border border-gray-200"
            >
              <img src={linkedInIcon} alt="LinkedIn" className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
