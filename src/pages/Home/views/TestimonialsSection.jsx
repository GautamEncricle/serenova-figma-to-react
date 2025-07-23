import React, { useRef } from "react";
import TestimonialCard from "../../../components/cards/TestimonialCard";

const leafBgPattern = "./src/assets/images/icons/offers/leafBg.svg";
const tree = "./src/assets/images/icons/tree.svg";

import { testimonials } from "../../../constants/data";

const TestimonialsSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const isMobile = window.innerWidth <= 768;
    const offset = isMobile ? 300 : 1120;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -offset : offset,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="relative bg-cream py-20 px-4 sm:px-6 lg:px-8 overflow-hidden font-teachers"
      style={{ "--leaf-bg-url": `url(${leafBgPattern})` }}
    >
      {/* Decorative Leaf Background */}
      <div
        className="absolute rotate-180 scale-y-[-1] top-10 left-0 w-50 h-50 bg-no-repeat bg-contain opacity-100 -translate-x-1/4 -translate-y-1/4"
        style={{ backgroundImage: `var(--leaf-bg-url)` }}
      ></div>

      {/* Heading */}
      <div className="text-center mb-12">
        <div className="flex justify-center items-center mb-2">
          <img src={tree} alt="icon" className="w-8 h-8" />
        </div>
        <p className="text-sm font-medium uppercase tracking-widest text-dark mb-2">
          Testimonial
        </p>
        <h2 className="text-4xl md:text-5xl font-medium text-dark">
          Every Stay Leaves a Story
        </h2>
      </div>

      {/* Scrollable Cards */}
      <div className="w-full px-4">
        <div
          className="flex flex-nowrap overflow-x-auto no-scrollbar"
          ref={scrollRef}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              location={testimonial.location}
            />
          ))}
        </div>
      </div>

      {/* Scroll Arrows */}
      <div className="flex justify-center items-center gap-3 mt-8">
        <button
          onClick={() => scroll("left")}
          className="bg-gray-200/70 hover:bg-gray-300 transition-colors cursor-pointer w-12 h-12 rounded-md flex items-center justify-center text-2xl font-mono"
        >
          ←
        </button>
        <button
          onClick={() => scroll("right")}
          className="bg-[#B9A98A] hover:bg-[#a9997a] transition-colors cursor-pointer text-white w-12 h-12 rounded-md flex items-center justify-center text-2xl font-mono"
        >
          →
        </button>
      </div>
    </section>
  );
};

export default TestimonialsSection;
