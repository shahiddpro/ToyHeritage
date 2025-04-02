import { useRoute } from "wouter";
import { useQuery } from "@tanstack/react-query";
import ProductGrid from "@/components/ui/ProductGrid";
import { Button } from "@/components/ui/button";
import { getTruncatedImageUrl } from "@/lib/utils";

interface Region {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  products?: Product[];
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
  [key: string]: any;
}

const RegionDetail = () => {
  const [match, params] = useRoute("/region/:id");
  const regionId = match ? parseInt(params.id) : 0;

  const { data: region, isLoading } = useQuery<Region>({
    queryKey: [`/api/regions/${regionId}`],
    enabled: regionId > 0,
  });

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-64 bg-gray-200 rounded-xl mb-8"></div>
          <div className="h-10 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3 mb-8"></div>
          <div className="h-10 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="h-48 bg-gray-200 rounded"></div>
            <div className="h-48 bg-gray-200 rounded"></div>
            <div className="h-48 bg-gray-200 rounded"></div>
            <div className="h-48 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!region) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-medium text-gray-900 mb-4">Region Not Found</h2>
        <p className="text-gray-600 mb-8">The region you're looking for doesn't exist or has been removed.</p>
        <Button asChild className="bg-[#E64A19] hover:bg-[#BF360C]">
          <a href="/regions">View All Regions</a>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero section */}
      <div className="relative mb-12">
        <div className="h-64 md:h-80 bg-[#1A237E] rounded-xl overflow-hidden">
          <img 
            src={getTruncatedImageUrl(region.imageUrl)}
            alt={`Traditional crafts from ${region.name}`} 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4 md:px-8 max-w-3xl">
              <h1 className="font-serif text-3xl md:text-5xl text-white mb-4">{region.name}</h1>
              <p className="text-white text-opacity-90 text-lg">
                {region.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Region Description */}
      <div className="mb-16">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="font-serif text-2xl mb-6">About {region.name} Toy Traditions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4">
                {region.name} is home to a rich variety of traditional toy-making crafts, each with its own unique 
                history and cultural significance. The region's artisans have been passing down their skills through 
                generations, preserving techniques that date back centuries.
              </p>
              <p className="text-gray-700 mb-4">
                The toys from this region are characterized by their use of local materials and motifs that reflect 
                the cultural heritage and daily life of the people. These toys not only serve as playthings but also 
                as educational tools that help transmit cultural values and stories to younger generations.
              </p>
              <p className="text-gray-700">
                By supporting artisans from {region.name}, you're helping preserve these ancient traditions and 
                providing sustainable livelihoods for skilled craftspeople and their communities.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {region.products && region.products.length > 0 ? (
                <>
                  <img 
                    src={getTruncatedImageUrl(region.products[0]?.imageUrl)}
                    alt={`${region.name} craft example`} 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  {region.products[1] && (
                    <img 
                      src={getTruncatedImageUrl(region.products[1]?.imageUrl)}
                      alt={`${region.name} craft example`} 
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  )}
                </>
              ) : (
                <>
                  <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Products from this region */}
      <div className="mb-16">
        <h2 className="font-serif text-2xl mb-6">Toys & Crafts from {region.name}</h2>
        {region.products && region.products.length > 0 ? (
          <ProductGrid products={region.products} />
        ) : (
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">No Products Found</h3>
            <p className="text-gray-600 mb-6">
              We're currently adding more products from {region.name}. Please check back soon!
            </p>
            <Button asChild className="bg-[#E64A19] hover:bg-[#BF360C]">
              <a href="/shop">Browse All Products</a>
            </Button>
          </div>
        )}
      </div>

      {/* Famous Crafts */}
      <div className="mb-16">
        <h2 className="font-serif text-2xl mb-6">Famous Craft Types from {region.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="font-medium text-xl mb-2">
                {region.name === "North India" ? "Wooden Toys of Varanasi" :
                 region.name === "South India" ? "Channapatna Wooden Toys" :
                 region.name === "East India" ? "Clay Dolls of West Bengal" :
                 "Wooden Toys of Gujarat"}
              </h3>
              <p className="text-gray-700">
                {region.name === "North India" ? "Handcrafted wooden toys made using techniques passed down through generations." :
                 region.name === "South India" ? "Lacquered wooden toys made using ivory wood and natural dyes." :
                 region.name === "East India" ? "Intricately designed clay dolls representing rural life and mythology." :
                 "Brightly painted wooden toys featuring geometric patterns and themes from daily life."}
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="font-medium text-xl mb-2">
                {region.name === "North India" ? "Puppets of Rajasthan" :
                 region.name === "South India" ? "Kondapalli Toys" :
                 region.name === "East India" ? "Bamboo Toys of Assam" :
                 "Clay Figures of Maharashtra"}
              </h3>
              <p className="text-gray-700">
                {region.name === "North India" ? "Colorful string puppets used to tell stories from mythology and folklore." :
                 region.name === "South India" ? "Softwood toys depicting scenes from rural life in Andhra Pradesh." :
                 region.name === "East India" ? "Sustainable toys and figurines made from locally sourced bamboo." :
                 "Handpainted clay figurines depicting local deities and scenes from daily life."}
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="font-medium text-xl mb-2">
                {region.name === "North India" ? "Cloth Dolls of Punjab" :
                 region.name === "South India" ? "Leather Shadow Puppets" :
                 region.name === "East India" ? "Painted Wooden Figures" :
                 "Tribal Art Toys"}
              </h3>
              <p className="text-gray-700">
                {region.name === "North India" ? "Handstitched dolls with vibrant fabrics and intricate embroidery." :
                 region.name === "South India" ? "Translucent leather puppets used in traditional shadow plays." :
                 region.name === "East India" ? "Wooden figures hand-painted with natural dyes and traditional motifs." :
                 "Toys featuring authentic tribal art motifs and natural materials."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="font-serif text-2xl mb-4">Support {region.name} Artisans</h2>
        <p className="text-gray-700 mb-6">
          By purchasing traditional toys from {region.name}, you're helping preserve ancient crafts and providing 
          sustainable livelihoods for artisan communities across the region.
        </p>
        <Button asChild className="bg-[#E64A19] hover:bg-[#BF360C]">
          <a href={`/shop?region=${encodeURIComponent(region.name)}`}>Shop {region.name} Collection</a>
        </Button>
      </div>
    </div>
  );
};

export default RegionDetail;
