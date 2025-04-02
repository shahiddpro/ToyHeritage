import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import FeaturedToys from "@/components/home/FeaturedToys";
import RegionSection from "@/components/home/RegionSection";
import ToyShowcase from "@/components/home/ToyShowcase";
import ArtisanSection from "@/components/home/ArtisanSection";
import AboutSection from "@/components/home/AboutSection";
import CTASection from "@/components/home/CTASection";
import ToyHeritage from "@/components/home/ToyHeritage";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <FeaturedToys />
      <RegionSection />
      <ToyShowcase />
      <ToyHeritage />
      <ArtisanSection />
      <AboutSection />
      <CTASection />
    </div>
  );
};

export default Home;
