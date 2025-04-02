import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Skeleton } from "@/components/ui/skeleton";
import { getTruncatedImageUrl } from "@/lib/utils";

interface Region {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

const RegionSection = () => {
  const { data: regions = [], isLoading } = useQuery<Region[]>({
    queryKey: ["/api/regions"],
  });

  return (
    <section className="py-16 bg-[#f5f5f5] bg-pattern-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-3">Explore By Region</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the unique toy traditions from different regions of India, each with their own distinct 
            craft techniques and cultural significance
          </p>
        </div>
        
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md">
                <Skeleton className="h-48 w-full" />
                <div className="p-5">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-1" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <Skeleton className="h-4 w-32" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {regions.map((region) => (
              <div 
                key={region.id} 
                className="bg-white rounded-xl overflow-hidden shadow-md transition-transform hover:-translate-y-2 duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={getTruncatedImageUrl(region.imageUrl)}
                    alt={`Traditional crafts from ${region.name}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-medium text-xl mb-2">{region.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{region.description}</p>
                  <Link href={`/region/${region.id}`}>
                    <a className="text-[#E64A19] hover:text-[#BF360C] font-medium text-sm inline-flex items-center">
                      Explore Region 
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
      </div>
    </section>
  );
};

export default RegionSection;
