"use client";

import useFetchData from "../../../hooks/useFetchData";

import AsyncWrapper from "../../../components/ui/AsyncWrapper";
import Button from "../../../components/ui/Button";
import TourCard from "../../../components/cards/TourCard";

export default function CuratedToursSection() {
  const { data, loading, error, refetch } = useFetchData("/home");
  const tours = data?.tours || {};
  const tourItems = tours.items || [];

  return (
    <AsyncWrapper loading={loading} error={error} retry={refetch}>
      <section
        style={{ backgroundImage: `url("${tours.background}")` }}
        className="bg-no-repeat bg-cover bg-center bg-cream-medium font-teachers py-20 md:py-28 relative overflow-hidden"
      >
        {/* Decorative Palm Leaf */}
        <img
          src={tours.palmLeaf}
          alt=""
          aria-hidden="true"
          className="absolute rotate-100 bottom-[10%] left-0 w-[30%] max-w-[300px] opacity-80 pointer-events-none select-none -ml-24 -mb-24"
        />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center">
            <div className="inline-block">
              <img
                src={tours.icon}
                alt="Decorative Palm Icon"
                className="h-8 w-8 mx-auto"
              />
              <p className="mt-2 text-xs font-teachers uppercase tracking-widest text-stone-600">
                {tours.subtitle}
              </p>
            </div>
            <h2 className="mt-4 text-4xl md:text-5xl font-light text-stone-800">
              {tours.title}
            </h2>
          </div>

          {/* Tours Grid */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {tourItems.map((tour, index) => (
              <TourCard key={index} tour={tour} />
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-20 text-center">
            <Button
              buttonText="Plan Your Experience"
              className="px-8 py-3 text-xs font-sans uppercase"
            />
          </div>
        </div>
      </section>
    </AsyncWrapper>
  );
}
