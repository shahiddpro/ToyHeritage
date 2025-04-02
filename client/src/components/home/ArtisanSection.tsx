import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
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

const specialties = ["Wooden Toys", "Clay Dolls", "Kathputli"];
const experiences = ["3rd Generation", "Award Winner", "Master Craftsman"];

const ArtisanSection = () => {
  const { data: artisans = [], isLoading } = useQuery<Artisan[]>({
    queryKey: ["/api/artisans"],
  });
  
  // Limit to 3 artisans for showcase
  const showcasedArtisans = artisans.slice(0, 3);

  return (
    <section className="py-16 bg-[#1A237E]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">Meet Our Artisans</h2>
          <p className="text-white text-opacity-80 max-w-2xl mx-auto">
            The skilled craftspeople preserving India's toy traditions through generations
          </p>
        </div>
        
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <Skeleton className="h-64 w-full" />
                <div className="p-5">
                  <div className="flex items-center mb-2">
                    <Skeleton className="h-6 w-24 rounded-full" />
                    <Skeleton className="h-6 w-24 rounded-full ml-2" />
                  </div>
                  <Skeleton className="h-4 w-full mb-1" />
                  <Skeleton className="h-4 w-full mb-1" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <Skeleton className="h-4 w-32" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {showcasedArtisans.map((artisan, index) => (
              <div key={artisan.id} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="relative h-64">
                  <img 
                    src={artisan.imageUrl || artisanImages[index % artisanImages.length]}
                    alt={`Artisan ${artisan.name}`} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="font-medium text-xl text-white">{artisan.name}</h3>
                    <p className="text-white text-opacity-90 text-sm">{artisan.region}</p>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center mb-2 flex-wrap gap-1">
                    <span className="text-xs font-medium px-2 py-1 bg-[#E64A19] bg-opacity-10 rounded-full text-[#E64A19]">
                      {experiences[index % experiences.length]}
                    </span>
                    <span className="text-xs font-medium px-2 py-1 bg-[#E64A19] bg-opacity-10 rounded-full text-[#E64A19] ml-2">
                      {specialties[index % specialties.length]}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {artisan.bio.length > 120 ? artisan.bio.substring(0, 120) + '...' : artisan.bio}
                  </p>
                  <Link href={`/artisan/${artisan.id}`}>
                    <a className="text-[#E64A19] hover:text-[#BF360C] font-medium text-sm inline-flex items-center">
                      View Artisan Profile 
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="mt-10 text-center">
          <Button asChild variant="secondary" className="bg-white hover:bg-[#FFF8E1] text-[#E64A19]">
            <Link href="/artisans">
              <a>Meet All Artisans</a>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ArtisanSection;
