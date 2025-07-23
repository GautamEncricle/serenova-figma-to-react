import HeroSection from "./views/HeroSection";
import ServicesSection from "./views/ServicesSection";
import AboutUsSection from "./views/AboutUsSection";
import ExperiencesSection from "./views/ExperiencesSection";
import BrandsSection from "./views/BrandSection";
import CuratedToursSection from "./views/CuratedToursSection";
import OfferSection from "./views/OfferSection";
import LuxurySection from "./views/LuxurySection";
import TestimonialsSection from "./views/TestimonialsSection";
import BlogSection from "./views/BlogSection";

function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutUsSection />
      <ExperiencesSection />
      <BrandsSection />
      <CuratedToursSection />
      <OfferSection />
      <LuxurySection />
      <TestimonialsSection />
      <BlogSection />
    </>
  );
}

export default Home;
