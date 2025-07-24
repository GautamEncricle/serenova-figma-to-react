"use client";

import useFetchData from "../../../hooks/useFetchData";
import AsyncWrapper from "../../../components/ui/AsyncWrapper";
import Button from "../../../components/ui/Button";
import ServiceCard from "../../../components/cards/ServiceCard";

export default function ServicesSection() {
  const { data, loading, error, refetch } = useFetchData("/home");
  const servicesData = data?.services || {};
  const serviceItems = servicesData.items || [];

  return (
    <AsyncWrapper loading={loading} error={error} retry={refetch}>
      <section className="bg-cream py-20 font-teachers">
        <div className="container mx-auto px-4 text-center">
          {/* Section Header */}
          <div className="mb-16 flex flex-col items-center">
            <img
              src={servicesData.icon}
              alt="Palm Leaf"
              className="w-12 h-auto mb-2 opacity-70"
            />
            <p className="text-sm text-gray-500 mb-2">
              {servicesData.subtitle}
            </p>
            <h2 className="text-4xl md:text-5xl font-teacher text-dark">
              {servicesData.title}
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {serviceItems.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                isHighlighted={service.isHighlighted}
              />
            ))}
          </div>

          {/* Button */}
          <div className="mt-16">
            <Button
              buttonText="SEE ALL SERVICES"
              className="mx-auto uppercase"
            />
          </div>
        </div>
      </section>
    </AsyncWrapper>
  );
}
