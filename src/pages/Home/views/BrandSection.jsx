import React from "react";

import dust from "../../../assets/images/icons/Dust.svg";

import { logos } from "../../../constants/data";

const BrandsSection = () => {
  return (
    <div
      style={{ backgroundImage: `url("${dust}")` }}
      className="bg-no-repeat bg-cover bg-center bg-cream-medium"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center lg:justify-between gap-10 md:gap-12 lg:gap-16 overflow-x-auto no-scrollbar pb-4">
          {logos.map((logo, index) => (
            <div key={index} className="flex-shrink-0">
              <img
                className="h-10 md:h-12 w-auto object-contain grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                src={logo.src}
                alt={`${logo.name} logo`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandsSection;
