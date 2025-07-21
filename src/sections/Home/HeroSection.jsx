import React from 'react';

// --- Using the local images you provided ---
import leafIcon from '../../assets/images/icons/leaf.svg';
import bedroomImg from '../../assets/images/Home/Hero/image1.png';
import paddleboardImg from '../../assets/images/Home/Hero/image2.png';
import boardwalkImg from '../../assets/images/Home/Hero/image3.png';
import poolWomanImg from '../../assets/images/Home/Hero/image4.png';
import beachChairsImg from '../../assets/images/Home/Hero/image5.png';
import aerialIslandsImg from '../../assets/images/Home/Hero/image6.png';

// --- Helper component for the down arrow icon ---
const ArrowDownIcon = () => (
    <svg className="w-6 h-6 mx-auto text-black" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 20.25m0 0L4.5 13.5M12 20.25V3.75" />
    </svg>
);

// --- Main Hero Component ---
const HeroSection = () => {
    return (
        <section className="bg-[#FAF6ED] w-full font-sans flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <div className="w-full max-w-7xl mx-auto">

                {/* ------------------ Mobile Layout (Visible on screens smaller than lg) ------------------ */}
                {/* A simple stacked layout for the best mobile experience */}
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
                        <img src={paddleboardImg} alt="Person on paddleboard" className="rounded-lg w-full h-full object-cover" />
                        <img src={bedroomImg} alt="Bedroom with ocean view" className="rounded-lg w-full h-full object-cover" />
                        <img src={poolWomanImg} alt="Woman by the pool" className="rounded-lg w-full h-full object-cover" />
                        <img src={boardwalkImg} alt="Boardwalk at sunset" className="rounded-lg w-full h-full object-cover" />
                        <img src={beachChairsImg} alt="Beach chairs and umbrella" className="rounded-lg w-full h-full object-cover" />
                        <img src={aerialIslandsImg} alt="Aerial view of islands" className="rounded-lg w-full h-full object-cover" />
                    </div>
                </div>

                {/* ------------------ Desktop Layout (Visible on lg screens and up) ------------------ */}
                {/* A 3-column, 2-row grid with overlaid text */}
                <div className="hidden lg:block relative">

                    {/* Centered Text - Placed on top of the image grid using absolute positioning */}
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-black pointer-events-none">
                        <img src={leafIcon} alt="Palm leaf icon" className="w-16 h-16" />
                        <h1 className="text-7xl font-thin tracking-wide leading-tight mt-4">Let the Ocean</h1>
                        <h2 className="text-7xl font-thin tracking-wide leading-tight">Slow You Down</h2>
                        <p className="mt-8 text-lg">For the ultimate getaway</p>
                        <div className="mt-6">
                            <ArrowDownIcon />
                        </div>
                    </div>

                    {/* Image Grid - The 3x2 grid structure */}
                    <div className="grid grid-cols-3 grid-rows-2 gap-2 auto-rows-[250px]">
                        {/* Row 1 */}
                        <div className="rounded-lg overflow-hidden">
                            <div className='relative h-[350px]  '>
                                <img src={bedroomImg} alt="Person on paddleboard" className="absolute md:w-[350px] md:right-0 md:h-[230px] w-full h-full object-cover" />
                                <img src={paddleboardImg} alt="Person on paddleboard" className="absolute md:w-[150px] left-[0] top-30 md:h-[180px] w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="rounded-lg overflow-hidden">
                        </div>
                        <div className="rounded-lg overflow-hidden">
                            <img src={poolWomanImg} alt="Woman by the pool" className="w-full h-full object-cover" />
                        </div>

                        {/* Row 2 */}
                        <div className="rounded-lg overflow-hidden">
                            <img src={boardwalkImg} alt="Boardwalk at sunset" className="w-full h-full object-cover" />
                        </div>
                        <div className="rounded-lg overflow-hidden">
                        </div>
                        <div className="rounded-lg overflow-hidden">
                            <img src={aerialIslandsImg} alt="Aerial view of islands" className="w-full h-full object-cover" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;