"use client";

import React from "react";
import useFetchData from "../hooks/useFetchData";
import AsyncWrapper from "../components/ui/AsyncWrapper";
import Marquee from "react-fast-marquee";

const Footer = () => {
  const { data, loading, error, refetch } = useFetchData("/footer");
  const footer = data || {};

  return (
    <AsyncWrapper loading={loading} error={error} retry={refetch}>
      <footer
        className="relative bg-cream-medium font-sans pt-16 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          "--leaf-bg-url": `url(${footer.background})`,
        }}
      >
        {/* Decorative Background */}
        <div
          className="absolute bottom-[-68px] left-[-142px] w-[200px] md:bottom-20 md:-left-30 rotate-110 md:w-100 h-100 bg-no-repeat bg-contain opacity-80"
          style={{ backgroundImage: "var(--leaf-bg-url)" }}
        ></div>
        <div
          className="absolute bottom-[-220px] right-0 w-[200px] md:bottom-0 md:-right-10 rotate-10 md:w-100 h-100 bg-no-repeat bg-contain opacity-80"
          style={{ backgroundImage: "var(--leaf-bg-url)" }}
        ></div>

        {/* Marquee */}
        <div className="w-full mb-16 overflow-y-hidden no-scrollbar">
          <Marquee speed={350} gradient={false} pauseOnHover={true}>
            <span className="text-[70px] md:text-9xl text-dark font-[200] mr-16">
              {footer.marqueeText}
            </span>
            <span className="text-[70px] md:text-9xl text-dark font-[200] mr-16">
              {footer.marqueeText}
            </span>
          </Marquee>
        </div>

        {/* Newsletter */}
        <div className="relative md:flex md:flex-col md:justify-center items-center z-10 max-w-2xl mx-auto text-center mb-16">
          <img
            src={footer.newsletter?.icon}
            alt="Subscribe"
            className="mx-auto mb-5 bg-dark-brown p-2 rounded w-10 h-10"
          />
          <h3 className="text-2xl md:w-[50%] text-center font-extralight text-gray-700 mb-6">
            {footer.newsletter?.heading}
          </h3>

          <form className="relative max-w-lg mx-auto mb-4">
            <input
              type="email"
              placeholder={footer.newsletter?.placeholder}
              className="w-full py-3 pl-4 pr-32 text-sm border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-dark-brown"
            />
            <button
              type="submit"
              className="absolute inset-y-0 right-0 flex items-center pr-4 text-xs text-gray-600 hover:text-black"
            >
              <img
                src={footer.newsletter?.buttonIcon}
                alt="Subscribe"
                className="w-4 h-4 mr-2 opacity-70"
              />
              {footer.newsletter?.buttonText}
            </button>
          </form>

          <div className="flex items-center justify-center text-xs text-gray-500">
            <input
              type="checkbox"
              id="privacy"
              className="w-4 h-4 mr-2 accent-dark-brown"
            />
            <label htmlFor="privacy">
              {footer.newsletter?.privacyPolicy?.label}{" "}
              <a
                href={footer.newsletter?.privacyPolicy?.linkUrl}
                className="underline hover:text-black"
              >
                {footer.newsletter?.privacyPolicy?.linkText}
              </a>
            </label>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative z-10 max-w-7xl mx-auto pt-8 border-t-2 border-dark">
          <div className="flex flex-col md:flex-row justify-between items-center text-center gap-6">
            <p className="text-xs text-gray-500">{footer?.copyright}</p>

            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-700">
              {footer.links?.map((link, index) => (
                <a key={index} href={link.url} className="hover:underline">
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              {footer.socials?.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-8 h-8 flex items-center justify-center bg-white rounded-md border border-gray-200"
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-4 h-4"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </AsyncWrapper>
  );
};

export default Footer;
