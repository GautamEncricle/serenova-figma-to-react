import React from 'react';

// Import SVGs as image paths (used inside <img />)
import PalmTreeIcon from '../../assets/images/icons/services/privacy.svg';
import BeachChairIcon from '../../assets/images/icons/services/personalize.svg';
import CoconutDrinkIcon from '../../assets/images/icons/services/luxury.svg';
import PalmLeaf from '../../assets/images/icons/tree.svg';

// Reusable Service Card Component
const ServiceCard = ({ icon, title, description, isHighlighted = false }) => {
    const borderStyle = isHighlighted
        ? "border-2 border-[var(--color-brand-accent)] p-px"
        : "border border-gray-300 p-8";

    return (
        <div className={borderStyle}>
            <div className={`${isHighlighted ? 'border border-gray-300 h-full p-8' : ''} flex flex-col text-center`}>
                <div className="flex-grow">
                    <div className="flex justify-center mb-6">
                        {icon}
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--color-brand-accent)] font-[var(--font-sans)] mb-4">
                        {title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
                </div>
                <div className="mt-8">
                    <a href="#" className="inline-block text-[var(--color-brand-accent)]">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

// Main Services Section Component
const ServicesSection = () => {
    const services = [
        {
            icon: <img src={BeachChairIcon} alt="Privacy Icon" className="w-12 h-12" />,
            title: "Privacy & exclusivity",
            description: "Enjoy peaceful moments in secluded settings, curated for those who value space, silence, and sophistication.",
        },
        {
            icon: <img src={PalmTreeIcon} alt="Personalized Service Icon" className="w-12 h-12" />,
            title: "Personalized service",
            description: "From arrival to farewell, every detail is tailored to your preferences by our attentive, discreet staff.",
            isHighlighted: true,
        },
        {
            icon: <img src={CoconutDrinkIcon} alt="Luxury Icon" className="w-12 h-12" />,
            title: "Luxury accommodation",
            description: "Stay in refined villas and suites designed with nature, comfort, and quiet luxury at their heart.",
        },
    ];

    return (
        <section className="bg-[var(--color-cream)] py-20 font-[var(--font-sans)]">
            <div className="container mx-auto px-4 text-center">
                {/* Section Header */}
                <div className="mb-16 flex flex-col items-center">
                    <img src={PalmLeaf} alt="Palm Leaf" className="w-12 h-auto mb-2 opacity-70" />
                    <p className="text-sm text-gray-500 mb-2">Our Services</p>
                    <h2 className="text-4xl md:text-5xl font-[var(--font-serif)] text-[var(--color-text-dark)]">
                        What Makes Serenova Exceptional
                    </h2>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.title}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            isHighlighted={service.isHighlighted}
                        />
                    ))}
                </div>

                {/* See All Services Button */}
                <div className="mt-16">
                    <a
                        href="#"
                        className="inline-block border border-[var(--color-brand-accent)] px-8 py-3 text-sm font-semibold text-[var(--color-brand-accent)] tracking-widest transition hover:bg-[var(--color-brand-accent)] hover:text-white"
                    >
                        SEE ALL SERVICES
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
