import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative">
      <div className="h-[500px] bg-[#1A237E] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1599045239569-c27172f3ae0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
          alt="Traditional Indian toys arrangement" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 md:px-8 max-w-4xl">
            <h1 className="font-serif text-4xl md:text-6xl text-white mb-6">Rediscover India's Toy Heritage</h1>
            <p className="font-medium text-white text-lg md:text-xl mb-8">Connect with artisans preserving centuries of tradition through timeless toys</p>
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
