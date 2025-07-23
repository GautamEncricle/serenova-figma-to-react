import React from "react";

import PalmLeaf from "../../../assets/images/icons/tree.svg";

import { services } from "../../../constants/data";

// Reusable Service Card Component
const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="group relative h-full">
      {/* Border on hover */}
      <div
        className="
                absolute -inset-1.5
                border-2 border-brand-accent
                -left-4 -top-4 bottom-4 right-4
                opacity-0 group-hover:opacity-100
                transition-opacity duration-300 z-10
            "
      ></div>

      <div className="relative h-full font-teachers border border-gray-300 bg-cream p-8 flex flex-col text-center">
        <div className="flex-grow">
          {/* Icon */}
          <div className="flex justify-center mb-6">{icon}</div>

          <h3 className="text-2xl font-teachers font-medium text-brand-accent font-teachers mb-4 group-hover:text-black transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-500 font-sans text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Arrow Button */}
        <div className="mt-8">
          <a
            href="#"
            className="inline-block text-brand-accent group-hover:text-black"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section className="bg-cream py-20 font-teachers">
      <div className="container mx-auto px-4 text-center">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center">
          <img
            src={PalmLeaf}
            alt="Palm Leaf"
            className="w-12 h-auto mb-2 opacity-70"
          />
          <p className="text-sm text-gray-500 mb-2">Our Services</p>
          <h2 className="text-4xl md:text-5xl font-teacher text-dark">
            What Makes Serenova Exceptional
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              isHighlighted={service.isHighlighted}
            />
          ))}
        </div>

        {/* See All Services Button */}
        <div className="mt-16">
          <a
            href="#"
            className="inline-block border border-[var(--color-brand-accent)] px-8 py-3 text-sm font-semibold text-[var(--color-brand-accent)] tracking-widest transition hover:bg-[var(--color-brand-accent)] hover:text-white"
          >
            SEE ALL SERVICES
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
