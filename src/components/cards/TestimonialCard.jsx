import leafCardPattern from "/assets/images/icons/leaf-card.svg";
import quoteIcon from "/assets/images/icons/quotes.svg";

const TestimonialCard = ({ testimonial: { quote, author, location } }) => (
  <div className="relative bg-cream-medium p-8 rounded-md w-[320px] md:w-[380px] 2xl:w-[444px] shrink-0 mr-6 min-h-[342px] flex flex-col justify-between">
    {/* Quote Icon */}
    <img
      src={quoteIcon}
      alt="Quote"
      className="absolute top-6 left-6 w-15 h-15 opacity-80"
    />

    <div
      className="absolute bottom-4 -rotate-10 -right-3 w-30 h-30 bg-no-repeat bg-contain opacity-60"
      style={{ backgroundImage: `url("${leafCardPattern}")` }}
    ></div>

    {/* Content */}
    <div className="relative z-10 flex-1 flex flex-col justify-between mt-12">
      <p className="text-gray font-sans">{quote}</p>
      <p className="font-semibold font-teachers text-gray-800 mt-6">
        {author}, <span>{location}</span>
      </p>
    </div>
  </div>
);

export default TestimonialCard;
