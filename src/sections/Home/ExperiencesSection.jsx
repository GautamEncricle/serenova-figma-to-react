import React from 'react';

import experienceImage1 from '../../assets/images/Home/Experience/image2.png';
import experienceImage2 from '../../assets/images/Home/Experience/image1.png';
import bgPalm from '../../assets/images/icons/tree1.svg';
import bgBirds from '../../assets/images/icons/birds.svg';
import palmIcon from '../../assets/images/icons/tree.svg';
import playIcon from '../../assets/images/icons/play.svg';
import checkIcon from '../../assets/images/icons/check.svg';
const ExperiencesSection = () => {
    const experiences = [
        'Sunset catamaran cruises',
        'Guided cultural excursions',
        'Coastal nature treks',
        'Mountain biking adventures',
        'Scuba diving expeditions',
    ];

    return (
        <section className="bg-[#FBF9F3] font-serif relative py-16 md:py-24 lg:py-32 overflow-hidden">

            {/* Decorative Background Elements */}
            <img
                src={bgBirds}
                alt=""
                aria-hidden="true"
                className="absolute top-10 right-0 w-40 opacity-60 pointer-events-none select-none"
            />
            <img
                src={bgPalm}
                alt=""
                aria-hidden="true"
                className="absolute bottom-0 md:right-12 w-[30%] opacity-80 pointer-events-none select-none -mr-25 -mb-24"
            />

            <div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                        {/* First Image */}
                        <div className="w-full h-full md:h-full rounded-lg overflow-hidden shadow-lg">
                            <img
                                src={experienceImage1}
                                alt="A tropical beach seen from inside a seaside cave"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="relative w-full h-full md:h-full rounded-lg overflow-hidden shadow-lg">
                            <img
                                src={experienceImage2}
                                alt="A woman in a yellow dress overlooking a tropical bay"
                                className="w-full h-full object-cover"
                            />
                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center bg-[rgba(0, 0, 0, 0.5)]">
                                <button
                                    aria-label="Play video"
                                    className="transform transition-transform hover:scale-110"
                                >
                                    <img src={playIcon} alt="Play" className="h-20 w-20" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Text Content */}
                    <div className="text-center lg:text-left">
                        {/* Intro Tag */}
                        <div className="inline-block">
                            <img src={palmIcon} alt="Palm tree icon" className="h-8 w-8 mx-auto lg:mx-0" />
                            <p className="mt-2 text-xs font-sans uppercase tracking-widest text-stone-600">
                                The Best Of The Best
                            </p>
                        </div>

                        {/* Main Headline */}
                        <h2 className="mt-5 text-4xl md:text-5xl font-light text-stone-800 leading-tight">
                            Experiences That Move You
                        </h2>

                        {/* Description */}
                        <p className="mt-6 max-w-lg mx-auto lg:mx-0 font-sans text-base text-stone-600 leading-relaxed">
                            Whether you’re sailing across the horizon or exploring quiet coastal trails, our curated experiences invite you to slow down or seek out something new.
                        </p>

                        {/* List of Experiences */}
                        <ul className="mt-8 space-y-4 inline-block text-left">
                            {experiences.map((item, index) => (
                                <li key={index} className="flex items-center">
                                    <img src={checkIcon} alt="Checkmark" className="h-5 w-5 mr-3 text-stone-700" />
                                    <span className="font-sans text-stone-700">{item}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Action Button */}
                        <div className="mt-10">
                            <button className="px-8 py-3 text-xs font-sans font-semibold tracking-widest uppercase border border-stone-400 text-stone-600 hover:bg-stone-700 hover:text-white transition-colors duration-300">
                                See Experiences
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperiencesSection;