import React from "react";
import Button from "../../../components/ui/Button";
import TourCard from "../../../components/cards/TourCard";

import palmIcon from '../../../assets/images/icons/tree.svg';

import bgPalmLeaf from "../../../assets/images/icons/palmLeafBg.svg";
import dust from "../../../assets/images/icons/Dust.svg";

import { toursData } from "../../../constants/data";
const CuratedToursSection = () => {
  return (
    <section
      style={{ backgroundImage: `url("${dust}")` }}
      className="bg-no-repeat bg-cover bg-center bg-cream-medium font-teachers py-20 md:py-28 relative overflow-hidden"
    >
      {/* Decorative Background Palm Leaf */}
      <img
        src={bgPalmLeaf}
        alt=""
        aria-hidden="true"
        className="absolute rotate-100 bottom-[10%] left-0 w-[30%] max-w-[300px] opacity-80 pointer-events-none select-none -ml-24 -mb-24"
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-block">
            <img
              src={palmIcon}
              alt="Decorative Palm Icon"
              className="h-8 w-8 mx-auto"
            />
            <p className="mt-2 text-xs font-teachers uppercase tracking-widest text-stone-600">
              Our Tours
            </p>
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl font-light text-stone-800">
            Curated Tours for the Curious Soul
          </h2>
        </div>

        {/* Tours Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {toursData.map((tour, index) => (
            <TourCard key={index} {...tour} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-20 text-center">
          <Button buttonText="Plan Your Experience" className="px-8 py-3 text-xs font-sans uppercase" />
        </div>
      </div>
    </section>
  );
};

export default CuratedToursSection;