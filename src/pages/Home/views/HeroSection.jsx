'use client';

import useFetchData from '../../../hooks/useFetchData';
import AsyncWrapper from '../../../components/ui/AsyncWrapper';

const ArrowDownIcon = () => (
  <svg
    className="w-6 h-6 mx-auto text-black"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 13.5L12 20.25m0 0L4.5 13.5M12 20.25V3.75"
    />
  </svg>
);

export default function HeroSection() {
  const { data, loading, error, refetch } = useFetchData('/home');
  const hero = data?.hero || {};
  const images = hero.images || {};

  return (
    <AsyncWrapper loading={loading} error={error} retry={refetch}>
      <section
        style={{
          '--leaf-bg-url': `url(${hero.leafBg})`,
        }}
        className="bg-cream w-full font-sans flex items-center justify-center p-4 sm:p-6 lg:p-8"
      >
        {/* Decorative Background Image */}
        <div
          className="absolute hidden md:block scale-y-[-1] bottom-[-68px] left-[-142px] w-[200px] md:bottom-[-600px] 2xl:bottom-[-200px] md:-left-18 rotate-200 md:w-100 h-100 bg-no-repeat bg-contain opacity-20"
          style={{ backgroundImage: 'var(--leaf-bg-url)' }}
        ></div>

        <div className="w-full max-w-7xl mx-auto">
          {/* Mobile View */}
          <div className="lg:hidden">
            <div className="text-center text-black mb-8">
              <h1 className="text-5xl/tight font-thin">{hero.title}</h1>
              <h2 className="text-5xl/tight font-thin">{hero.subtitle}</h2>
              <p className="mt-6 text-base">{hero.description}</p>
              <div className="mt-4">
                <ArrowDownIcon />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={images.paddleboard?.src} alt={images.paddleboard?.alt} className="rounded-lg w-full h-full object-cover" />
              <img src={images.bedroom?.src} alt={images.bedroom?.alt} className="rounded-lg w-full h-full object-cover" />
              <img src={images.poolWoman?.src} alt={images.poolWoman?.alt} className="rounded-lg w-full h-full object-cover" />
              <img src={images.boardwalk?.src} alt={images.boardwalk?.alt} className="rounded-lg w-full h-full object-cover" />
              <img src={images.beachChairs?.src} alt={images.beachChairs?.alt} className="rounded-lg w-full h-full object-cover" />
              <img src={images.aerialIslands?.src} alt={images.aerialIslands?.alt} className="rounded-lg w-full h-full object-cover" />
            </div>
          </div>

          {/* Desktop View */}
          <div className="hidden lg:block relative">
            <div className="absolute font-teacher inset-0 z-10 flex flex-col md:-top-40 items-center justify-center text-center text-black pointer-events-none">
              <img src={hero.leafIcon} alt="Palm leaf icon" className="w-40 h-40" />
              <h1 className="text-7xl font-thin tracking-wide leading-tight">{hero.title}</h1>
              <h2 className="text-7xl font-thin tracking-wide leading-tight">{hero.subtitle}</h2>
              <p className="mt-8 text-lg">{hero.description}</p>
              <div className="mt-6">
                <ArrowDownIcon />
              </div>
            </div>

            <div className="grid grid-cols-3 grid-rows-2 gap-2 auto-rows-[250px]">
              <div className="rounded-lg overflow-hidden">
                <div className="relative h-[350px]">
                  <img
                    src={images.bedroom?.src}
                    alt={images.bedroom?.alt}
                    className="absolute md:w-[350px] md:right-5 md:h-[230px] w-full h-full object-cover"
                  />
                  <img
                    src={images.paddleboard?.src}
                    alt={images.paddleboard?.alt}
                    className="absolute md:w-[140px] left-[0] top-40 md:h-[150px] w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="rounded-lg overflow-hidden"></div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src={images.poolWoman?.src}
                  alt={images.poolWoman?.alt}
                  className="w-full h-full md:w-full md:h-[250px] object-cover"
                />
              </div>

              <div className="rounded-lg overflow-hidden">
                <img
                  src={images.boardwalk?.src}
                  alt={images.boardwalk?.alt}
                  className="w-full h-full md:w-[100%] md:h-[280px] object-cover mb-0"
                />
              </div>
              <div className="rounded-lg overflow-hidden"></div>
              <div className="rounded-lg overflow-hidden">
                <div className="relative h-[350px] left-0">
                  <img
                    src={images.beachChairs?.src}
                    alt={images.beachChairs?.alt}
                    className="absolute md:w-[130px] right-10 -top-0 md:h-[150px] w-full h-full object-cover"
                  />
                  <img
                    src={images.aerialIslands?.src}
                    alt={images.aerialIslands?.alt}
                    className="absolute md:w-[300px] md:left-5 md:bottom-20 md:h-[180px] w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AsyncWrapper>
  );
}
