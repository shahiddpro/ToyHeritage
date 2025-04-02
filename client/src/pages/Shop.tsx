import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductGrid from "@/components/ui/ProductGrid";
import CategoryFilter, { FilterState } from "@/components/ui/CategoryFilter";
import SearchBar from "@/components/ui/SearchBar";

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

const Shop = () => {
  const [location] = useLocation();
  const params = new URLSearchParams(location.split("?")[1] || "");
  const searchQuery = params.get("q");
  const categoryParam = params.get("category");

  const initialFilters: FilterState = {
    category: categoryParam || "All Categories",
    region: "All Regions",
    priceRange: [0, 5000],
    material: "All Materials",
  };

  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [displayTitle, setDisplayTitle] = useState("All Products");

  // Fetch all products
  const { data: products = [], isLoading } = useQuery<Product[]>({
    queryKey: [searchQuery ? `/api/products/search?q=${searchQuery}` : "/api/products"],
  });

  useEffect(() => {
    if (searchQuery) {
      setDisplayTitle(`Search Results: "${searchQuery}"`);
    } else if (categoryParam && categoryParam !== "All Categories") {
      setDisplayTitle(categoryParam);
    } else {
      setDisplayTitle("All Products");
    }
  }, [searchQuery, categoryParam]);

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  const handleSearch = (query: string) => {
    // The search functionality is handled by the SearchBar component which redirects
  };

  // Filter products based on the selected filters
  const filteredProducts = products.filter((product) => {
    // Filter by category
    if (filters.category !== "All Categories" && product.category !== filters.category) {
      return false;
    }

    // Filter by region
    if (filters.region !== "All Regions" && product.region !== filters.region) {
      return false;
    }

    // Filter by price range
    const price = parseFloat(product.price);
    if (price < filters.priceRange[0] || price > filters.priceRange[1]) {
      return false;
    }

    // Filter by material
    if (filters.material !== "All Materials" && product.material !== filters.material) {
      return false;
    }

    return true;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif mb-6">{displayTitle}</h1>

      {/* Search bar for mobile view */}
      <div className="mb-6 md:hidden">
        <SearchBar onSearch={handleSearch} placeholder="Search toys..." />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar with filters */}
        <div className="md:col-span-1">
          <CategoryFilter onFilterChange={handleFilterChange} initialFilters={initialFilters} />
        </div>

        {/* Main content area */}
        <div className="md:col-span-3">
          <Tabs defaultValue="grid" className="mb-6">
            <div className="flex justify-between items-center">
              <p className="text-gray-600">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
              </p>
              <TabsList>
                <TabsTrigger value="grid">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="7" height="7" x="3" y="3" rx="1"></rect>
                    <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                    <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                    <rect width="7" height="7" x="3" y="14" rx="1"></rect>
                  </svg>
                </TabsTrigger>
                <TabsTrigger value="list">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" x2="21" y1="6" y2="6"></line>
                    <line x1="3" x2="21" y1="12" y2="12"></line>
                    <line x1="3" x2="21" y1="18" y2="18"></line>
                  </svg>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="grid" className="mt-6">
              <ProductGrid 
                products={filteredProducts} 
                isLoading={isLoading} 
                emptyMessage={searchQuery 
                  ? "No products matching your search query" 
                  : "No products matching your selected filters"
                } 
              />
            </TabsContent>
            
            <TabsContent value="list" className="mt-6">
              <ProductGrid 
                products={filteredProducts} 
                isLoading={isLoading} 
                emptyMessage={searchQuery 
                  ? "No products matching your search query" 
                  : "No products matching your selected filters"
                } 
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Shop;
