import { useQuery } from "@tanstack/react-query";
import ArtisanCard from "@/components/ui/ArtisanCard";
import { Skeleton } from "@/components/ui/skeleton";

interface Artisan {
  id: number;
  name: string;
  region: string;
  bio: string;
  isArtisan: boolean;
  [key: string]: any;
}

const artisanImages = [
  "/images/artisans/artisan-south.svg",
  "/images/artisans/artisan-east.svg",
  "/images/artisans/artisan-north.svg"
];

const specialties = ["Wooden Toys", "Clay Dolls", "Kathputli", "Cloth Toys", "Metal Crafts"];
const experiences = ["Master Craftsman", "3rd Generation", "Award Winner", "Traditional Artist", "Craft Teacher"];

const Artisans = () => {
  const { data: artisans = [], isLoading } = useQuery<Artisan[]>({
    queryKey: ["/api/artisans"],
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero section */}
      <div className="relative mb-12">
        <div className="h-64 md:h-80 bg-[#1A237E] rounded-xl overflow-hidden">
          <img 
            src="/images/artisans/artisan-north.svg" 
            alt="Artisans working on traditional crafts" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4 md:px-8 max-w-3xl">
              <h1 className="font-serif text-3xl md:text-5xl text-white mb-4">Meet Our Artisans</h1>
              <p className="text-white text-opacity-90 text-lg">
                Discover the skilled craftspeople preserving India's toy traditions through generations of dedication and passion
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="font-serif text-2xl mb-4">Preserving Ancient Traditions</h2>
        <p className="text-gray-700 mb-6">
          Our artisans are the backbone of India's toy heritage. Many of them represent families that have been crafting 
          traditional toys for generations, passing down unique techniques and cultural knowledge that might otherwise be lost.
        </p>
        <p className="text-gray-700">
          By purchasing from these skilled craftspeople, you're not just getting a beautiful product – you're supporting the 
          preservation of cultural heritage and providing sustainable livelihoods for artisan communities across India.
        </p>
      </div>

      {/* Artisan Grid */}
      <div className="mb-16">
        <h2 className="font-serif text-2xl mb-6">Our Craftspeople</h2>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <Skeleton className="h-64 w-full" />
                <div className="p-5">
                  <div className="flex items-center mb-2">
                    <Skeleton className="h-6 w-20 rounded-full" />
                    <Skeleton className="h-6 w-20 rounded-full ml-2" />
                  </div>
                  <Skeleton className="h-6 w-3/4 mb-1" />
                  <Skeleton className="h-4 w-full mb-1" />
                  <Skeleton className="h-4 w-full mb-1" />
                  <Skeleton className="h-4 w-1/2 mb-4" />
                  <Skeleton className="h-4 w-32" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artisans.map((artisan, index) => (
              <ArtisanCard 
                key={artisan.id} 
                artisan={artisan} 
                imageUrl={artisanImages[index % artisanImages.length]}
                specialty={specialties[index % specialties.length]}
                experience={experiences[index % experiences.length]}
              />
            ))}
          </div>
        )}
      </div>

      {/* Become an Artisan */}
      <div className="bg-[#E64A19] rounded-xl overflow-hidden relative shadow-lg">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          {/* Decorative pattern */}
          <div className="h-full" style={{ 
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 5px, #FFD700 5px, #FFD700 10px)' 
          }}></div>
        </div>
        
        <div className="p-8 md:p-12">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl text-white mb-4">Join Our Artisan Community</h2>
            <p className="text-white text-opacity-90 mb-6">
              Are you an artisan preserving traditional toy-making skills? Join our community to showcase your craft to a global audience and receive fair prices for your handmade products.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FFD700] mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white text-opacity-90">Connect directly with buyers who value your craft</span>
              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FFD700] mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white text-opacity-90">Get fair prices for your traditional handmade toys</span>
              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FFD700] mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white text-opacity-90">Receive support for documentation and promotion</span>
              </div>
            </div>
            
            <a href="#" className="inline-block bg-white hover:bg-[#FFF8E1] text-[#E64A19] font-medium px-8 py-3 rounded-lg transition-colors">
              Apply as an Artisan
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artisans;
