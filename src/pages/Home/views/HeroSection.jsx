import React from "react";

import leafIcon from "../../../assets/images/icons/leaf.svg";
import leafBg from "../../../assets/images/icons/tree.svg";

import bedroomImg from "../../../assets/images/Home/hero/image1.png";
import paddleboardImg from "../../../assets/images/Home/hero/image2.png";
import boardwalkImg from "../../../assets/images/Home/hero/image3.png";
import poolWomanImg from "../../../assets/images/Home/hero/image4.png";
import beachChairsImg from "../../../assets/images/Home/hero/image5.png";
import aerialIslandsImg from "../../../assets/images/Home/hero/image6.png";

const ArrowDownIcon = () => (
  <svg
    className="w-6 h-6 mx-auto text-black"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 13.5L12 20.25m0 0L4.5 13.5M12 20.25V3.75"
    />
  </svg>
);

const HeroSection = () => {
  return (
    <section
      style={{
        "--leaf-bg-url": `url(${leafBg})`,
      }}
      className="bg-cream w-full font-sans flex items-center justify-center p-4 sm:p-6 lg:p-8"
    >
      {/* Decorative Background Images */}
      <div
        className="absolute hidden md:block scale-y-[-1] bottom-[-68px] left-[-142px] w-[200px] md:bottom-[-200px] md:-left-18 rotate-200 md:w-100 h-100 bg-no-repeat bg-contain opacity-20"
        style={{ backgroundImage: "var(--leaf-bg-url)" }}
      ></div>

      <div className="w-full max-w-7xl mx-auto">
        <div className="lg:hidden">
          <div className="text-center text-black mb-8">
            <h1 className="text-5xl/tight font-thin">Let the Ocean</h1>
            <h2 className="text-5xl/tight font-thin">Slow You Down</h2>
            <p className="mt-6 text-base">For the ultimate getaway</p>
            <div className="mt-4">
              <ArrowDownIcon />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={paddleboardImg}
              alt="Person on paddleboard"
              className="rounded-lg w-full h-full object-cover"
            />
            <img
              src={bedroomImg}
              alt="Bedroom with ocean view"
              className="rounded-lg w-full h-full object-cover"
            />
            <img
              src={poolWomanImg}
              alt="Woman by the pool"
              className="rounded-lg w-full h-full object-cover"
            />
            <img
              src={boardwalkImg}
              alt="Boardwalk at sunset"
              className="rounded-lg w-full h-full object-cover"
            />
            <img
              src={beachChairsImg}
              alt="Beach chairs and umbrella"
              className="rounded-lg w-full h-full object-cover"
            />
            <img
              src={aerialIslandsImg}
              alt="Aerial view of islands"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="hidden lg:block relative">
          <div className="absolute font-teacher inset-0 z-10 flex flex-col md:-top-40 items-center justify-center text-center text-black pointer-events-none">
            <img src={leafIcon} alt="Palm leaf icon" className="w-40 h-40" />
            <h1 className="text-7xl font-thin tracking-wide leading-tight">
              Let the Ocean
            </h1>
            <h2 className="text-7xl font-thin tracking-wide leading-tight">
              Slow You Down
            </h2>
            <p className="mt-8 text-lg">For the ultimate getaway</p>
            <div className="mt-6">
              <ArrowDownIcon />
            </div>
          </div>

          <div className="grid grid-cols-3 grid-rows-2 gap-2 auto-rows-[250px]">
            {/* Row 1 */}
            <div className="rounded-lg overflow-hidden">
              <div className="relative h-[350px]  ">
                <img
                  src={bedroomImg}
                  alt="Person on paddleboard"
                  className="absolute md:w-[350px] md:right-5 md:h-[230px] w-full h-full object-cover"
                />
                <img
                  src={paddleboardImg}
                  alt="Person on paddleboard"
                  className="absolute md:w-[140px] left-[0] top-40 md:h-[150px] w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="rounded-lg overflow-hidden"></div>
            <div className="rounded-lg overflow-hidden">
              <img
                src={poolWomanImg}
                alt="Woman by the pool"
                className="w-full h-full md:w-full md:h-[250px] object-cover"
              />
            </div>

            {/* Row 2 */}
            <div className="rounded-lg overflow-hidden">
              <img
                src={boardwalkImg}
                alt="Boardwalk at sunset"
                className="w-full h-full md:w-[100%] md:h-[280px] object-cover mb-0"
              />
            </div>
            <div className="rounded-lg overflow-hidden"></div>
            <div className="rounded-lg overflow-hidden">
              <div className="relative h-[350px] left-0">
                <img
                  src={beachChairsImg}
                  alt="beach chairs"
                  className="absolute md:w-[130px] right-10 -top-0 md:h-[150px] w-full h-full object-cover"
                />
                <img
                  src={aerialIslandsImg}
                  alt="Aerial view of islands"
                  className="absolute md:w-[300px] md:left-5 md:bottom-20 md:h-[180px] w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
