import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative">
      <div className="h-[500px] bg-[#1A237E] overflow-hidden">
        <img 
          src="/images/banners/toy-heritage-banner.svg" 
          alt="Traditional Indian toys arrangement" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 md:px-8 max-w-4xl">
            <h1 className="font-serif text-4xl md:text-6xl text-white mb-6 text-shadow-lg">Rediscover India's Toy Heritage</h1>
            <p className="font-medium text-white text-lg md:text-xl mb-8 text-shadow">Connect with artisans preserving centuries of tradition through timeless toys</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/shop">
                <Button className="bg-[#E64A19] hover:bg-[#BF360C] text-white font-medium px-8 py-6 rounded-lg transition-colors shadow-lg">
                  Explore Collection
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className="bg-white hover:bg-[#FFF8E1] text-[#E64A19] font-medium px-8 py-6 rounded-lg transition-colors shadow-lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
