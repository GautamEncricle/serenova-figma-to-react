import React from "react";
import Button from "../../../components/ui/Button";
import ServiceCard from "../../../components/cards/ServiceCard";

import PalmLeaf from "../../../assets/images/icons/tree.svg";

import { services } from "../../../constants/data";

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
          <Button buttonText="SEE ALL SERVICES" className="mx-auto uppercase" />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
