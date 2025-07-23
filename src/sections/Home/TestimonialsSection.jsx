import React, { useRef } from 'react';

// --- Assets ---
const leafBgPattern = './src/assets/images/icons/offers/leafBg.svg';
const leafCardPattern = './src/assets/images/icons/leaf-card.svg';
const quoteIcon = './src/assets/images/icons/quotes.svg';
const tree = './src/assets/images/icons/tree.svg';

// --- Testimonial Data ---
const testimonials = [
    {
        quote:
            "I came to unwind, and I left transformed. Morning yoga by the sea, quiet forest walks, and food that nourished more than my body. Serenova is pure soul therapy. Really I love this place must visit.",
        author: "Talia M.",
        location: "Dubai",
    },
    {
        quote:
            "From our spacious villa to the cultural tours and kind-hearted staff, everything was seamless. My children still talk about the dolphin cruise. We’ll be back—next time, for longer.",
        author: "Ravi N.",
        location: "Bengaluru, India",
    },
    {
        quote:
            "Serenova was a dream come true. The sunsets were breathtaking, and the guided meditation sessions changed my perspective. I never wanted to leave this paradise. I often look for places that breathe inspiration.",
        author: "Clara J.",
        location: "New York, USA",
    },
    {
        quote:
            "Our family found a slice of heaven. The blend of adventure and relaxation was perfect for everyone. From competitive beach games to the serene spa, every moment was magical.",
        author: "Eli & Mara",
        location: "Toronto, Canada",
    },
    {
        quote:
            "It felt like it was just us, the ocean, the silence, the breeze whispering our names. It was the pause we desperately needed.",
        author: "Chen L.",
        location: "Shanghai, China",
    },
];

// --- Testimonial Card Component ---
const TestimonialCard = ({ quote, author, location }) => (
    <div className="relative bg-cream-medium p-8 rounded-md w-[320px] md:w-[380px] 2xl:w-[444px] shrink-0 mr-6 min-h-[342px] flex flex-col justify-between">
        {/* Quote Icon */}
        <img
            src={quoteIcon}
            alt="Quote"
            className="absolute top-6 left-6 w-15 h-15 opacity-80"
        />

        <div
            className="absolute bottom-4 -rotate-10 -right-3 w-30 h-30 bg-no-repeat bg-contain opacity-60"
            style={{ backgroundImage: `url(${leafCardPattern})` }}
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

// --- Testimonials Section ---
const TestimonialsSection = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (!scrollRef.current) return;
        const isMobile = window.innerWidth <= 768;
        const offset = isMobile ? 300 : 1120;
        scrollRef.current.scrollBy({
            left: direction === 'left' ? -offset : offset,
            behavior: 'smooth',
        });
    };

    return (
        <section
            className="relative bg-cream py-20 px-4 sm:px-6 lg:px-8 overflow-hidden font-teachers"
            style={{ '--leaf-bg-url': `url(${leafBgPattern})` }}
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
                    onClick={() => scroll('left')}
                    className="bg-gray-200/70 hover:bg-gray-300 transition-colors w-12 h-12 rounded-md flex items-center justify-center text-2xl font-mono"
                >
                    ←
                </button>
                <button
                    onClick={() => scroll('right')}
                    className="bg-[#B9A98A] hover:bg-[#a9997a] transition-colors text-white w-12 h-12 rounded-md flex items-center justify-center text-2xl font-mono"
                >
                    →
                </button>
            </div>
        </section>
    );
};

export default TestimonialsSection;
