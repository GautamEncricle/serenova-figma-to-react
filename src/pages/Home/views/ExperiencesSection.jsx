'use client';

import useFetchData from '../../../hooks/useFetchData';
import AsyncWrapper from '../../../components/ui/AsyncWrapper';
import Button from '../../../components/ui/Button';

export default function ExperiencesSection() {
  const { data, loading, error, refetch } = useFetchData('/home');
  const experience = data?.experience || {};

  return (
    <AsyncWrapper loading={loading} error={error} retry={refetch}>
      <section
        style={{ backgroundImage: `url("${experience.background}")` }}
        className="bg-no-repeat bg-cover bg-center bg-cream-medium relative py-16 md:py-24 lg:py-32 overflow-hidden"
      >
        {/* Decorative Background Elements */}
        <img
          src={experience.bgBirds}
          alt=""
          aria-hidden="true"
          className="absolute top-0 right-5 w-30 md:top-10 md:right-0 md:w-40 opacity-60 pointer-events-none select-none"
        />
        <img
          src={experience.bgPalm}
          alt=""
          aria-hidden="true"
          className="absolute top-[80%] right-[30%] md:top-[50%] 2xl:top-80 md:bottom-0 md:right-20 2xl:right-12 w-[200px] md:w-[250px] 2xl:w-[25%] opacity-80 pointer-events-none select-none -mr-25 -mb-24"
        />

        <div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Images Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {experience.images?.map((img, i) => (
                <div
                  key={i}
                  className="group relative w-full h-full md:h-full rounded-lg overflow-hidden shadow-lg"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center top-[100%] h-full w-full bg-light group-hover:top-0">
                    <button
                      aria-label="Play video"
                      className="bg-white p-4 rounded-full transform transition-transform hover:scale-110"
                    >
                      <img src={experience.playIcon} alt="Play" className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Text Content */}
            <div className="text-center lg:text-left">
              <div className="inline-block">
                <img
                  src={experience.icon}
                  alt="Palm tree icon"
                  className="h-8 w-8 mx-auto lg:mx-0"
                />
                <p className="mt-2 text-xs font-sans uppercase tracking-widest text-stone-600">
                  {experience.sectionLabel}
                </p>
              </div>

              <h2 className="mt-5 text-4xl md:text-5xl font-light text-stone-800 leading-tight">
                {experience.title}
              </h2>

              <p className="mt-6 font-sans max-w-2xl mx-auto lg:mx-0 text-base text-gray-400 leading-relaxed">
                {experience.description}
              </p>

              <ul className="mt-8 space-y-4 inline-block text-left">
                {experience.list?.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <img
                      src={experience.checkIcon}
                      alt="Checkmark"
                      className="h-5 w-5 mr-3 text-stone-700"
                    />
                    <span className="font-sans text-stone-700">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <div className="mt-10">
                <Button buttonText="See Experiences" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </AsyncWrapper>
  );
}
