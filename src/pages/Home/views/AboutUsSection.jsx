"use client";

import useFetchData from "../../../hooks/useFetchData";
import AsyncWrapper from "../../../components/ui/AsyncWrapper";
import Button from "../../../components/ui/Button";

export default function AboutUsSection() {
  const { data, loading, error, refetch } = useFetchData("/home");
  const about = data?.about || {};

  return (
    <AsyncWrapper loading={loading} error={error} retry={refetch}>
      <section
        style={{ backgroundImage: `url("${about.backgroundImage}")` }}
        className="bg-no-repeat bg-cover bg-center bg-cream-medium font-teachers relative overflow-x-clip"
      >
        <img
          src={about.topLeaf}
          alt="leaf background"
          aria-hidden="true"
          className="absolute top-0 right-0 w-[60%] max-w-xs -mr-16 opacity-70 pointer-events-none select-none z-0 
                   md:w-[450px] md:max-w-md md:-mr-20
                   lg:top-22 lg:w-[500px] lg:max-w-xl lg:-mr-24 lg:-mt-4"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-28 relative z-10">
          <div className="flex flex-col lg:items-start lg:gap-x-20">
            <div className="lg:w-10/12 lg:flex-shrink-0">
              <div className="text-center lg:text-left lg:w-8/12">
                <div className="inline-block">
                  <img
                    src={about.icon}
                    alt="Decorative star icon"
                    className="h-6 w-6 mx-auto lg:mx-0"
                  />
                  <p className="mt-2 text-xs font-sans uppercase tracking-widest text-stone-600">
                    {about.sectionLabel}
                  </p>
                </div>

                <h1 className="mt-6 text-3xl md:text-4xl lg:text-[1.9rem] font-extralight text-gray-500 leading-tight lg:w-auto md:w-full">
                  {about.title?.split(" ").map((word, idx) => {
                    const isEmphasized = about.emphasisWords?.includes(
                      word.replace(/[^\w]/g, ""),
                    );
                    return isEmphasized ? (
                      <strong
                        key={idx}
                        className="font-semibold text-stone-800"
                      >
                        {word}{" "}
                      </strong>
                    ) : (
                      word + " "
                    );
                  })}
                </h1>
              </div>

              <div className="mt-10 flex flex-col items-center gap-8 lg:mt-0 lg:flex-row lg:items-end lg:gap-0">
                <div className="w-full text-center lg:w-auto lg:text-left">
                  <Button
                    buttonText="Read more"
                    className="px-8 py-3 whitespace-nowrap text-xs font-sans font-semibold tracking-widest uppercase"
                  />
                </div>

                <div className="w-full lg:flex-grow lg:pl-12">
                  <p className="font-sans text-base text-stone-600 leading-relaxed text-center lg:text-left">
                    {about.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AsyncWrapper>
  );
}
