import { useQuery } from "@tanstack/react-query";
import RegionCard from "@/components/ui/RegionCard";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

interface Region {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

const Regions = () => {
  const { data: regions = [], isLoading } = useQuery<Region[]>({
    queryKey: ["/api/regions"],
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero section */}
      <div className="relative mb-12">
        <div className="h-64 md:h-80 bg-[#1A237E] rounded-xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1606293926249-ed2332ef3dc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
            alt="Map of India with traditional toys" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4 md:px-8 max-w-3xl">
              <h1 className="font-serif text-3xl md:text-5xl text-white mb-4">Explore India's Toy Heritage</h1>
              <p className="text-white text-opacity-90 text-lg">
                Discover unique toy traditions from different regions of India, each with their own distinct craft techniques and cultural significance
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="font-serif text-2xl mb-4">Regional Toy Traditions</h2>
        <p className="text-gray-700 mb-6">
          India's diverse geography and cultural history have given rise to a rich variety of toy-making traditions. 
          From the lacquered wooden toys of Karnataka to the clay figurines of West Bengal, each region offers 
          unique crafts that reflect local materials, myths, and ways of life.
        </p>
        <p className="text-gray-700">
          Explore the different regions below to discover their distinctive toy crafts and the skilled artisans 
          who are keeping these traditions alive.
        </p>
      </div>

      {/* Region Grid */}
      <div className="mb-16">
        <h2 className="font-serif text-2xl mb-6">Regions of India</h2>
        
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md">
                <Skeleton className="h-48 w-full" />
                <div className="p-5">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-1" />
                  <Skeleton className="h-4 w-full mb-1" />
                  <Skeleton className="h-4 w-1/2 mb-4" />
                  <Skeleton className="h-4 w-32" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {regions.map((region) => (
              <RegionCard key={region.id} region={region} />
            ))}
          </div>
        )}
      </div>

      {/* Regional Map */}
      <div className="mb-16">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="font-serif text-2xl mb-6 text-center">Toy Map of India</h2>
          <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center p-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <h3 className="text-lg font-medium mb-2">Interactive Map Coming Soon</h3>
              <p className="text-gray-600 mb-6">
                We're working on an interactive map that will allow you to explore toy traditions across India. 
                Check back soon!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Tradition */}
      <div className="mb-16">
        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="order-2 md:order-1 p-6 md:p-10 flex flex-col justify-center">
              <span className="text-sm text-[#E64A19] font-medium mb-2">Featured Tradition</span>
              <h3 className="font-serif text-2xl md:text-3xl font-medium mb-4">Channapatna: The Toy Town Legacy</h3>
              
              <div className="mb-6">
                <p className="text-gray-700 mb-4">
                  For over 200 years, the town of Channapatna in Karnataka has been crafting exquisite wooden toys using techniques 
                  introduced during the reign of Tipu Sultan. These toys are distinguished by:
                </p>
                
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#E64A19] mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Natural ivory wood (Wrightia tinctoria) known locally as "Aale mara"</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#E64A19] mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Vegetable dyes in vibrant colors, making them safe for children</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#E64A19] mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Traditional lathe turning techniques passed down generations</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#E64A19] mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Lacquering with natural resin for durability and shine</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-[#E64A19] hover:bg-[#BF360C]">
                  <a href="/shop?category=Wooden%20Toys">Shop Channapatna Collection</a>
                </Button>
                <Button asChild variant="outline" className="border-[#E64A19] text-[#E64A19]">
                  <a href="#">Watch Craft Story</a>
                </Button>
              </div>
            </div>
            
            <div className="order-1 md:order-2 h-64 md:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1598875184988-5e67b1a874b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Collection of Channapatna wooden toys" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="font-serif text-2xl mb-4">Discover India's Diverse Toy Crafts</h2>
        <p className="text-gray-700 mb-6">
          Each region of India has unique toy-making traditions that reflect its cultural heritage, available materials, 
          and historical influences. Explore these regional treasures and support the artisans keeping these crafts alive.
        </p>
        <Button asChild className="bg-[#E64A19] hover:bg-[#BF360C]">
          <a href="/shop">Shop All Traditional Toys</a>
        </Button>
      </div>
    </div>
  );
};

export default Regions;
