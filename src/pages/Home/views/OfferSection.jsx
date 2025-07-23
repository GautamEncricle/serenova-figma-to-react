import React from "react";

const leafBg = "./src/assets/images/icons/offers/leafBg.svg";
const umbrellaBg = "./src/assets/images/icons/offers/umbrellaBg.svg";
const tree = "./src/assets/images/icons/tree.svg";
const beachChairImg = "./src/assets/images/Home/offer/beach-chair-image.png";
const birdcageChairsImg =
  "./src/assets/images/Home/offer/birdcage-chairs-image.png";

const OfferSection = () => {
  return (
    <section
      className="relative bg-cream md:h-[900px] py-10 overflow-hidden"
      style={{
        "--leaf-bg-url": `url(${leafBg})`,
        "--umbrella-bg-url": `url(${umbrellaBg})`,
      }}
    >
      <div
        className="absolute top-10 right-0 md:-right-8 w-48 md:w-60 h-48 md:h-60 bg-no-repeat bg-contain opacity-100 z-0"
        style={{ backgroundImage: "var(--leaf-bg-url)" }}
      ></div>
      <div
        className="absolute bottom-0 md:bottom-[-5%] left-0 w-48 md:w-60 h-48 md:h-60 bg-no-repeat bg-contain opacity-80 z-0"
        style={{ backgroundImage: "var(--umbrella-bg-url)" }}
      ></div>

      <div className="max-w-7xl mx-auto lg:max-w-[90vw] h-full flex flex-col lg:flex-row items-center gap-16">
        {/* Text Content */}
        <div className="lg:w-[700px] w-full md:h-1/2 z-10 font-teachers">
          <div className="flex flex-col items-start mb-4">
            <img
              src={tree}
              alt="offers"
              className="w-8 h-8 mr-2 text-gray-400"
            />
            <span className="text-sm uppercase tracking-widest text-gray-600">
              Offer
            </span>
          </div>
          <h2 className="text-4xl md:text-3xl font-normal text-gray-500 leading-tight">
            Reserve Your Stay{" "}
            <span className="text-dark-green text-[36px] font-[400]">
              30 Days
            </span>{" "}
            In Advance And Enjoy{" "}
            <span className="text-dark-green text-[36px] font-[400]">
              Exclusive Savings
            </span>{" "}
            On All Suites And Villas.
          </h2>
          <p className="mt-6 font-sans text-gray-500">
            At Serenova, we believe that luxury should arrive gently. That's why
            our curated offers are designed not just to save you more but to
            give you more. More stillness. More time. More unforgettable
            experiences.
          </p>
          <button className="mt-8 bg-transparent p-2 border border-brand-accent text-brand-accent cursor-pointer hover:bg-stone-700 hover:text-white transition-colors duration-300 translate-x-2/3 md:translate-0">
            VIEW ALL OFFERS
          </button>
        </div>

        {/* Image Collage */}
        <div className="relative  lg:w-1/2 w-full -mt-10 md:mt-30 h-96 lg:h-[600px] lg:aspect-square z-10">
          <div className="absolute group top-0 md:top-10 2xl:top-[-5%] left-[-5%] w-3/5 md:w-[320px] 2xl:w-[420px] h-auto md:h-[300px] 2xl:h-[420px] p-2 z-10">
            <div
              className="
                        absolute -inset-1.5
                        border-3 border-brand-accent
                        left-5 top-3 -right-3
                        opacity-0 group-hover:opacity-100
                        transition-opacity duration-300 z-10
                    "
            ></div>
            <img
              src={beachChairImg}
              alt="Beach with lounge chairs under an umbrella"
              className="relative w-full h-full object-cover top-6 z-0"
            />
          </div>
          <div className="absolute group bottom-0 md:bottom-32 2xl:bottom-2 right-0 md:right-5 2xl:right-0  w-3/5 md:w-[320px] 2xl:w-[420px] h-auto md:h-[300px] 2xl:h-[420px]">
            <div
              className="
                        absolute -inset-1.5
                        border-3 border-brand-accent
                        left-5 top-3 -right-3
                        opacity-0 group-hover:opacity-100
                        transition-opacity duration-300 z-10
                    "
            ></div>
            <img
              src={birdcageChairsImg}
              alt="Modern birdcage-style chairs overlooking the ocean"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
