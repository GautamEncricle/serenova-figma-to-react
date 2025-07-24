const ServiceCard = ({ service }) => {
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
          <div className="flex justify-center mb-6">
            <img
              src={service.icon}
              alt={service.title + " Icon"}
              className="w-12 h-12"
            />
          </div>

          <h3 className="text-2xl font-teachers font-medium text-brand-accent font-teachers mb-4 group-hover:text-black transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-gray-500 font-sans text-sm leading-relaxed">
            {service.description}
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

export default ServiceCard;
