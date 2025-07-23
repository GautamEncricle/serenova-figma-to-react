import React from "react";

const heroBgImage = "./src/assets/images/Home/luxury/luxury.png";
const treeWhite = "./src/assets/images/icons/tree-white.svg";

const LuxurySection = () => {
  return (
    <section className="relative h-[70vh] bg-cover bg-center text-white font-teachers">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBgImage})`,
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-4">
        {/* Icon */}
        <div className="mb-4">
          <img src={treeWhite} alt="icon" className="w-10 h-10" />
        </div>

        <p className="text- font-semibold uppercase tracking-widest mb-4">
          Luxury Lifestyle
        </p>

        <h1 className="text-5xl md:text-5xl font-medium mb-4 leading-tight">
          The Journey Begins with a Click
        </h1>

        <p className="text-lg font-sans font-normal text-white mb-8">
          Choose your stay. We'll take care of the rest.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-transparent border font-semibold border-white text-white py-3 px-10 uppercase tracking-wider text-sm hover:bg-white hover:text-black transition duration-300">
            Make a Booking
          </button>
          <button className="bg-white font-semibold text-dark py-3 px-10 uppercase tracking-wider text-sm hover:bg-transparent hover:text-white border border-white transition duration-300">
            Enquire Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default LuxurySection;
