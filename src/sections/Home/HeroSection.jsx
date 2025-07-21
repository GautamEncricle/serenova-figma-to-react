// src/components/HeroSection.jsx

import React from 'react';

// Import your images
import leafIcon from '../../assets/images/icons/leaf.svg';
import bedroomImg from '../../assets/images/Home/Hero/image1.png';
import paddleboardImg from '../../assets/images/Home/Hero/image2.png';
import boardwalkImg from '../../assets/images/Home/Hero/image3.png';
import poolWomanImg from '../../assets/images/Home/Hero/image4.png';
import beachChairsImg from '../../assets/images/Home/Hero/image5.png';
import aerialIslandsImg from '../../assets/images/Home/Hero/image6.png';

// Reusable Image component with hover effect
const CollageImage = ({ src, alt, className }) => (
    <div className={`absolute overflow-hidden ${className}`}>
        <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover" // Removed all hover and transition effects
        />
    </div>
);

const HeroSection = () => {
    return (
        // Changed to h-screen to better control viewport height
        <section className="relative w-full h-screen flex items-center justify-center font-[var(--font-sans)]">
            <div className="relative w-full max-w-[1440px] h-full mx-auto">

                {/* --- Desktop Collage Container --- */}
                <div className="hidden lg:block">
                    {/* Top-left image (Bedroom) */}
                    <CollageImage src={bedroomImg} alt="Luxury resort bedroom"
                        className="w-[380px] h-[253px] top-[15%] left-[5%]" />

                    {/* Middle-left image (Paddleboard) */}
                    <CollageImage src={paddleboardImg} alt="Person on a paddleboard"
                        className="w-[180px] h-[180px] top-[30%] left-[-4%] z-10" />

                    {/* Bottom-left image (Boardwalk) */}
                    <CollageImage src={boardwalkImg} alt="Boardwalk at sunset"
                        className="w-[450px] h-[300px] top-[60%] left-[0%]" />

                    {/* Top-right image (Woman in Pool) */}
                    <CollageImage src={poolWomanImg} alt="Woman relaxing in an infinity pool"
                        className="w-[420px] h-[280px] top-[18%] right-[5%]" />

                    {/* Middle-right image (Beach Chairs) */}
                    <CollageImage src={beachChairsImg} alt="Beach chairs and umbrella"
                        className="w-[160px] h-[160px] top-[55%] right-[5%] " />

                    {/* Bottom-right image (Aerial Islands) */}
                    <CollageImage src={aerialIslandsImg} alt="Aerial view of islands"
                        className="w-[300px] h-[200px] top-[68%] right-[10%] z-10" />
                </div>

                {/* --- Central Text Content --- */}
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center">
                    <img src={leafIcon} alt="Decorative leaf" className="w-24 h-auto mb-4" />
                    <h1 className="font-[var(--font-serif)] text-7xl text-[var(--color-brand-dark)] leading-snug font-normal">
                        Let the Ocean
                        <br />
                        Slow You Down
                    </h1>
                    <p className="mt-6 text-lg text-[var(--color-text-subtle)] font-light">
                        For the ultimate getaway
                    </p>
                    <div className="mt-8">
                        <svg className="mx-auto w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>

                {/* --- Mobile-Only Image Stack --- */}
                <div className="lg:hidden mt-16 flex flex-col items-center gap-8 px-4">
                    <img src={bedroomImg} alt="Luxury resort bedroom" className="w-full max-w-sm" />
                    <img src={poolWomanImg} alt="Woman by pool" className="w-full max-w-sm" />
                    <img src={boardwalkImg} alt="Boardwalk at sunset" className="w-full max-w-sm" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;