import React from 'react';

// TODO: Replace these placeholder paths with your actual logo images
import brandLogo1 from '../../assets/images/Home/Brand/image1.svg';
import brandLogo2 from '../../assets/images/Home/Brand/image2.svg';
import brandLogo3 from '../../assets/images/Home/Brand/image3.svg';
import brandLogo4 from '../../assets/images/Home/Brand/image4.svg';
import brandLogo5 from '../../assets/images/Home/Brand/image5.svg';
import brandLogo6 from '../../assets/images/Home/Brand/image6.svg';


const BrandsSection = () => {
    // An array of logo objects to make the component easy to update and manage.
    const logos = [
        { name: 'Mountaineer Casino', src: brandLogo1 },
        { name: 'Tripadvisor', src: brandLogo2 },
        { name: 'Diani Sea Resort', src: brandLogo3 },
        { name: 'Le Gilmer Beach Resort', src: brandLogo4 },
        { name: 'My World', src: brandLogo5 },
        { name: 'Cruise Travel', src: brandLogo6 },
    ];

    return (
        // The main container for the section.
        <div className="">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex items-center justify-center lg:justify-between gap-10 md:gap-12 lg:gap-16 overflow-x-auto no-scrollbar pb-4">

                    {logos.map((logo, index) => (
                        <div key={index} className="flex-shrink-0">
                            <img
                                className="h-10 md:h-12 w-auto object-contain grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                                src={logo.src}
                                alt={`${logo.name} logo`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BrandsSection;