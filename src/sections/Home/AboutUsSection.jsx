import React from 'react'
import tree from '../../assets/images/icons/tree.svg';
import palmLeafBg from '../../assets/images/icons/palmLeafBg.svg'

const AboutUsSection = () => {
    return (
        // Section container - no changes needed here.
        <section className="bg-[#FBF9F3] font-serif relative overflow-x-clip">

            {/* Decorative Background Palm Leaf - Now with responsive adjustments that revert to your original style on desktop. */}
            <img
                src={palmLeafBg}
                alt=""
                aria-hidden="true"
                // Mobile & Tablet: Smaller, repositioned for vertical layout.
                className="absolute top-0 right-0 w-[60%] max-w-xs -mr-16 opacity-70 pointer-events-none select-none z-0 
                           md:w-[50%] md:max-w-md md:-mr-20
                           // Desktop (YOUR ORIGINAL STYLES): Reverts to your precise positioning and size.
                           lg:top-12 lg:w-[45%] lg:max-w-xl lg:-mr-24 lg:-mt-4"
            />

            {/* Max-width container for content, with responsive padding. */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-28 relative z-10">

                {/* Flexbox container for the 2-column layout */}
                {/* Mobile: A simple block stack. Desktop: Your original flex layout is restored. */}
                <div className="flex flex-col lg:items-start lg:gap-x-20">

                    {/* Left Column (Headline & Button) - full width on mobile, your width on desktop */}
                    <div className="lg:w-10/12 lg:flex-shrink-0">
                        {/* Text alignment is centered on mobile, left on desktop */}
                        <div className="text-center lg:text-left lg:w-8/12">
                            {/* Intro Tag - Centered on mobile, left-aligned on desktop */}
                            <div className="inline-block">
                                <img src={tree} alt="Decorative star icon" className="h-6 w-6 mx-auto lg:mx-0" />
                                <p className="mt-2 text-xs font-sans uppercase tracking-widest text-stone-600">
                                    About Us
                                </p>
                            </div>

                            {/* Main Headline - Responsive text size and width */}
                            <h1 className="mt-6 text-3xl md:text-4xl lg:text-[2.6rem] font-extralight text-gray-500 leading-tight lg:w-auto md:w-full">
                                A Place Where <strong className="font-semibold text-stone-800">Luxury</strong> Comes Gently And
                                Every Stay Feels Like Coming Home Crafted
                                For The <strong className="font-semibold text-stone-800">Soul.</strong>
                            </h1>
                        </div>

                        {/* THIS IS THE KEY SECTION THAT IS NOW FIXED */}
                        {/* It now uses a flex-col layout on mobile and reverts to your more complex flex structure on desktop */}
                        <div className="mt-10 flex flex-col items-center gap-8 
                                    lg:mt-0 lg:flex-row lg:items-end lg:gap-0">

                            {/* Button - Takes full width on mobile for centering, shrinks back on desktop */}
                            <div className="w-full text-center lg:w-auto lg:text-left">
                                <button className="px-8 py-3 whitespace-nowrap text-xs font-sans font-semibold tracking-widest uppercase border border-stone-400 text-stone-600 hover:bg-stone-600 hover:text-white transition-colors duration-300">
                                    Read more
                                </button>
                            </div>

                            {/* Paragraph - Centered text on mobile, restored to your flex-grow layout on desktop */}
                            <div className="w-full lg:flex-grow lg:pl-12">
                                <p className="font-sans text-base text-stone-600 leading-relaxed text-center lg:text-left">
                                    Tucked along the quiet coast, Serenova is more than a destination—it’s a philosophy of peace, space, and soulful hospitality. Every corner of our resort is shaped by the rhythm of nature and the comforts of curated design. Whether you’re watching the sunrise from your private deck or dining under the stars, Serenova offers something rare: the freedom to truly unwind. We are more than a resort; Serenova is a mood, a moment, a memory in the making. And once you’ve experienced it, you’ll carry its calm with you long after you’ve returned home.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;