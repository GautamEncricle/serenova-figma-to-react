import React from 'react';

import tourImage1 from '../../assets/images/Home/tours/image1.png';
import tourImage2 from '../../assets/images/Home/tours/image2.png';
import tourImage3 from '../../assets/images/Home/tours/image3.png';
import tourImage4 from '../../assets/images/Home/tours/image4.png';
import tourImage5 from '../../assets/images/Home/tours/image5.png';
import tourImage6 from '../../assets/images/Home/tours/image6.png';
import palmIcon from '../../assets/images/icons/tree.svg';

import bgPalmLeaf from '../../assets/images/icons/palmLeafBg.svg';
import dust from '../../assets/images/icons/Dust.svg'

const toursData = [
    {
        image: tourImage1,
        title: 'Coastal Kayaking & Hidden Coves',
        category: 'Adventure Tour',
        details: [
            { label: 'Duration', value: 'Half Day (4 hrs)' },
            { label: 'Includes', value: 'Kayak gear' },
            { label: 'Guide', value: 'Local marine naturalist' },
        ],
    },
    {
        image: tourImage2,
        title: 'Hillside Hike & Ocean Vistas',
        category: 'Nature Walk',
        details: [
            { label: 'Duration', value: '3-5 Hours' },
            { label: 'Includes', value: 'Trail snacks, water, guide' },
            { label: 'Guide', value: 'Certified eco-hiking expert' },
        ],
    },
    {
        image: tourImage3,
        title: 'Sacred Temples & Local Traditions',
        category: 'Cultural Experience',
        details: [
            { label: 'Duration', value: 'Full Day (6-7 hrs)' },
            { label: 'Includes', value: 'Entry passes, lunch, guide' },
            { label: 'Guide', value: 'Local historian & storyteller' },
        ],
    },
    {
        image: tourImage4,
        title: 'Dolphin Cruise & Marine Discovery',
        category: 'Ocean Safari',
        details: [
            { label: 'Duration', value: '2.5 Hours' },
            { label: 'Includes', value: 'Boat ride, binoculars, snacks' },
            { label: 'Guide', value: 'Marine life specialist' },
        ],
    },
    {
        image: tourImage5,
        title: 'Coastal Flavors Culinary Tour',
        category: 'Food & Culture',
        details: [
            { label: 'Duration', value: 'Half Day (4 hrs)' },
            { label: 'Includes', value: 'Cooking class, tasting menu' },
            { label: 'Guide', value: 'In-house chef & local farmer' },
        ],
    },
    {
        image: tourImage6,
        title: 'Sunset Sailing Experience',
        category: 'Romantic Escape',
        details: [
            { label: 'Duration', value: '2 Hours' },
            { label: 'Includes', value: 'Small bites, captain' },
            { label: 'Guide', value: 'Private skipper' },
        ],
    },
];

const TourCard = ({ image, title, category, details }) => (
    <div className="bg-cream rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 flex flex-col">
        <img src={image} alt={title} className="w-full h-56 object-cover" />
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="font-teachers font-400">{title}</h3>
            <p className="text-sm text-cream-dark font-sans tracking-wide mt-1">{category}</p>
            <div className="mt-4 pt-4 space-y-3 font-sans text-sm">
                {details.map((detail, index) => (
                    index === details.length - 1 ? (
                        <div key={index} className="flex justify-between items-center text-stone-600">
                            <span className="font-sans text-stone-800">{detail.label}</span>
                            <span className="text-cream-dark">{detail.value}</span>
                        </div>
                    ) : (
                        <div key={index} className="flex border-b py-[5px] border-[var(--color-text-cream)] justify-between items-center text-stone-600">
                            <span className="font-[var(--font-teacher)] text-stone-800">{detail.label}</span>
                            <span className="text-[var(--color-text-cream)]">{detail.value}</span>
                        </div>
                    )
                ))}
            </div>

        </div>
    </div>
);

const CuratedToursSection = () => {
    return (
        <section
            style={{ backgroundImage: `url(${dust})` }}
            className="bg-no-repeat bg-cover bg-center bg-cream-medium font-teachers py-20 md:py-28 relative overflow-hidden">
            {/* Decorative Background Palm Leaf */}
            <img
                src={bgPalmLeaf}
                alt=""
                aria-hidden="true"
                className="absolute rotate-100 bottom-[10%] left-0 w-[30%] max-w-[300px] opacity-80 pointer-events-none select-none -ml-24 -mb-24"
            />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center">
                    <div className="inline-block">
                        <img src={palmIcon} alt="Decorative Palm Icon" className="h-8 w-8 mx-auto" />
                        <p className="mt-2 text-xs font-[var(--font-teachers)] uppercase tracking-widest text-stone-600">
                            Our Tours
                        </p>
                    </div>
                    <h2 className="mt-4 text-4xl md:text-5xl font-light text-stone-800">
                        Curated Tours for the Curious Soul
                    </h2>
                </div>

                {/* Tours Grid */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {toursData.map((tour, index) => (
                        <TourCard key={index} {...tour} />
                    ))}
                </div>

                {/* CTA Button */}
                <div className="mt-20 text-center">
                    <button className="px-8 py-3 text-xs font-sans font-semibold tracking-widest uppercase border border-[var-(-color-brand-accent)] text-[var(--color-brand-accent)] hover:bg-stone-700 hover:text-white transition-colors duration-300">
                        Plan Your Experience
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CuratedToursSection;