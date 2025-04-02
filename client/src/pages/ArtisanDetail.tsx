import { useRoute } from "wouter";
import { useQuery } from "@tanstack/react-query";
import ProductGrid from "@/components/ui/ProductGrid";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface Artisan {
  id: number;
  name: string;
  region: string;
  bio: string;
  isArtisan: boolean;
  username: string;
  email: string;
  phoneNumber?: string;
  address?: string;
  products?: Product[];
  [key: string]: any;
}

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
  [key: string]: any;
}

const artisanImages = [
  "/images/artisans/artisan-south.svg",
  "/images/artisans/artisan-east.svg",
  "/images/artisans/artisan-north.svg"
];

const ArtisanDetail = () => {
  const [match, params] = useRoute("/artisan/:id");
  const artisanId = match ? parseInt(params.id) : 0;

  const { data: artisan, isLoading } = useQuery<Artisan>({
    queryKey: [`/api/artisans/${artisanId}`],
    enabled: artisanId > 0,
  });

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-64 bg-gray-200 rounded-xl mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="h-10 bg-gray-200 rounded mb-4"></div>
              <div className="h-6 bg-gray-200 rounded w-1/2 mb-4"></div>
              <div className="space-y-2 mb-6">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
              </div>
              <div className="h-10 bg-gray-200 rounded mb-4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="h-10 bg-gray-200 rounded mb-4"></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-48 bg-gray-200 rounded"></div>
                <div className="h-48 bg-gray-200 rounded"></div>
                <div className="h-48 bg-gray-200 rounded"></div>
                <div className="h-48 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!artisan) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-medium text-gray-900 mb-4">Artisan Not Found</h2>
        <p className="text-gray-600 mb-8">The artisan you're looking for doesn't exist or has been removed.</p>
        <Button asChild className="bg-[#E64A19] hover:bg-[#BF360C]">
          <a href="/artisans">View All Artisans</a>
        </Button>
      </div>
    );
  }

  // Use the artisan's image URL if available, otherwise fall back to a default
  const artisanImage = artisan.imageUrl || artisanImages[artisan.id % artisanImages.length];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero section */}
      <div className="relative mb-12">
        <div className="h-64 md:h-80 bg-[#1A237E] rounded-xl overflow-hidden">
          <img 
            src={artisanImage}
            alt={`Artisan ${artisan.name}`} 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 flex items-center">
            <div className="px-8 md:px-16">
              <h1 className="font-serif text-3xl md:text-5xl text-white mb-4">{artisan.name}</h1>
              <p className="text-white text-opacity-90 text-lg flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {artisan.address || artisan.region}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Artisan info */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="font-medium text-xl mb-2">About the Artisan</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline" className="bg-[#E64A19] bg-opacity-10 text-[#E64A19]">
                Master Craftsman
              </Badge>
              <Badge variant="outline" className="bg-[#E64A19] bg-opacity-10 text-[#E64A19]">
                {artisan.products && artisan.products[0]?.category || "Traditional Crafts"}
              </Badge>
            </div>
            
            <p className="text-gray-700 mb-6">{artisan.bio}</p>
            
            <h3 className="font-medium text-lg mb-3">Contact Information</h3>
            <div className="space-y-2 text-gray-700">
              {artisan.email && (
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>{artisan.email}</span>
                </div>
              )}
              {artisan.phoneNumber && (
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{artisan.phoneNumber}</span>
                </div>
              )}
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{artisan.address || artisan.region}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Artisan products */}
        <div className="md:col-span-2">
          <h2 className="font-medium text-xl mb-6">Crafts by {artisan.name}</h2>
          {artisan.products && artisan.products.length > 0 ? (
            <ProductGrid products={artisan.products} />
          ) : (
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-gray-700">No products are currently available from this artisan.</p>
            </div>
          )}
        </div>
      </div>

      {/* Artisan story */}
      <div className="bg-white rounded-xl shadow-md p-8 mb-16">
        <h2 className="font-serif text-2xl mb-6">The Artisan's Story</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 mb-4">
              {artisan.bio || `${artisan.name} is a skilled craftsperson specializing in traditional Indian toys. 
              Their work represents centuries of cultural heritage passed down through generations.`}
            </p>
            <p className="text-gray-700 mb-4">
              Using traditional techniques and natural materials, they create toys that are not only beautiful but also 
              environmentally friendly and safe for children. Each piece is handcrafted with careful attention to detail, 
              making it unique.
            </p>
            <p className="text-gray-700">
              By supporting {artisan.name}'s work, you're helping preserve ancient craft traditions and providing sustainable 
              income to artisan communities across India.
            </p>
          </div>
          <div className="space-y-4">
            <img 
              src={artisanImage}
              alt={`Artisan ${artisan.name} at work`} 
              className="w-full h-48 object-cover rounded-lg"
            />
            {artisan.products && artisan.products.length > 0 && (
              <img 
                src={artisan.products[0].imageUrl}
                alt={`A product by ${artisan.name}`} 
                className="w-full h-48 object-cover rounded-lg"
              />
            )}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="font-serif text-2xl mb-4">Support Traditional Craftsmanship</h2>
        <p className="text-gray-700 mb-6">
          When you purchase from our artisans, you're not just buying a product – you're investing in preserving 
          India's rich cultural heritage and supporting traditional livelihoods.
        </p>
        <Button asChild className="bg-[#E64A19] hover:bg-[#BF360C]">
          <a href="/shop">Explore All Products</a>
        </Button>
      </div>
    </div>
  );
};

export default ArtisanDetail;
