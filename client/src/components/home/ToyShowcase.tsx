import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { formatPrice, getTruncatedImageUrl } from "@/lib/utils";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  region: string;
  material: string;
  imageUrl: string;
  stock: number;
  history?: string;
  culturalSignificance?: string;
  [key: string]: any;
}

const ToyShowcase = () => {
  // Get the first few Channapatna toys (wooden toys from South India)
  const { data: woodenToys = [], isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products/category/Wooden%20Toys"],
  });

  // Filter to Channapatna toys which are from South India
  const channapatnaToys = woodenToys.filter(toy => 
    toy.region === "South India" && 
    toy.material === "Wood"
  ).slice(0, 5);

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-3">
            Spotlight: Channapatna Toys
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A deeper look at the GI-tagged wooden toys from Karnataka's "Toy City"
          </p>
        </div>
        
        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="order-2 md:order-1 p-6 md:p-10">
                <Skeleton className="h-6 w-40 mb-2" />
                <Skeleton className="h-8 w-3/4 mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-4" />
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-start">
                    <Skeleton className="h-4 w-4 mr-2" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                  <div className="flex items-start">
                    <Skeleton className="h-4 w-4 mr-2" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                  <div className="flex items-start">
                    <Skeleton className="h-4 w-4 mr-2" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                  <div className="flex items-start">
                    <Skeleton className="h-4 w-4 mr-2" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Skeleton className="h-12 w-full sm:w-48" />
                  <Skeleton className="h-12 w-full sm:w-48" />
                </div>
              </div>
              
              <div className="order-1 md:order-2 h-64 md:h-auto">
                <Skeleton className="h-full w-full" />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="order-2 md:order-1 p-6 md:p-10 flex flex-col justify-center">
                <span className="text-sm text-[#E64A19] font-medium mb-2">Protected Geographical Indication</span>
                <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-4">Channapatna: The Toy Town Legacy</h3>
                
                <div className="mb-6">
                  <p className="text-gray-700 mb-4">
                    For over 200 years, the town of Channapatna in Karnataka has been crafting exquisite wooden toys 
                    using techniques introduced during the reign of Tipu Sultan. These toys are distinguished by:
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
                    <Link href="/shop?category=Wooden%20Toys">
                      <a>Shop Channapatna Collection</a>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-[#E64A19] text-[#E64A19]">
                    <Link href="#">
                      <a>Watch Craft Story</a>
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="order-1 md:order-2 h-64 md:h-auto">
                <img 
                  src="/images/products/channapatna-toytown.jpg" 
                  alt="Collection of Channapatna wooden toys at Karnataka Handicrafts Emporium" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
          
          <div className="border-t border-gray-200 border-opacity-10 p-6">
            <h4 className="font-medium text-lg mb-4">Explore Channapatna Collection</h4>
            
            {isLoading ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <div key={index} className="bg-[#FFF8E1] rounded-lg overflow-hidden">
                    <Skeleton className="h-32 w-full" />
                    <div className="p-3">
                      <Skeleton className="h-5 w-3/4 mb-1" />
                      <Skeleton className="h-4 w-1/3" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {channapatnaToys.map((item) => (
                  <Link key={item.id} href={`/product/${item.id}`}>
                    <a className="bg-[#FFF8E1] rounded-lg overflow-hidden hover:shadow-md transition-all">
                      <div className="h-32 overflow-hidden">
                        <img 
                          src={getTruncatedImageUrl(item.imageUrl)}
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-3">
                        <h5 className="font-medium text-sm mb-1 truncate">{item.name}</h5>
                        <span className="text-[#E64A19] font-semibold text-sm">{formatPrice(item.price)}</span>
                      </div>
                    </a>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToyShowcase;
