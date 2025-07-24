"use client";

import useFetchData from "../../../hooks/useFetchData";
import AsyncWrapper from "../../../components/ui/AsyncWrapper";

export default function LuxurySection() {
  const { data, loading, error, refetch } = useFetchData("/home");
  const luxury = data?.luxury || {};

  return (
    <AsyncWrapper loading={loading} error={error} retry={refetch}>
      <section className="relative h-[70vh] bg-cover bg-center text-white font-teachers">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${luxury.background})`,
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-4">
          {/* Icon */}
          <div className="mb-4">
            <img src={luxury.icon} alt="icon" className="w-10 h-10" />
          </div>

          <p className="text-sm font-semibold uppercase tracking-widest mb-4">
            {luxury.subtitle}
          </p>

          <h1 className="text-5xl md:text-5xl font-medium mb-4 leading-tight">
            {luxury.title}
          </h1>

          <p className="text-lg font-sans font-normal text-white mb-8">
            {luxury.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-transparent border font-semibold border-white text-white cursor-pointer py-3 px-10 uppercase tracking-wider text-sm hover:bg-white hover:text-black transition duration-300">
              {luxury.primaryBtn || "Make a Booking"}
            </button>
            <button className="bg-white font-semibold text-dark py-3 px-10 uppercase cursor-pointer tracking-wider text-sm hover:bg-transparent hover:text-white border border-white transition duration-300">
              {luxury.secondaryBtn || "Enquire Now"}
            </button>
          </div>
        </div>
      </section>
    </AsyncWrapper>
  );
}
