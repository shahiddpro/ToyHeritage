import { useState } from "react";
import { useRoute } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import ProductGrid from "@/components/ui/ProductGrid";
import { formatPrice, getTruncatedImageUrl } from "@/lib/utils";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

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
  artisanId: number;
  history?: string;
  culturalSignificance?: string;
  [key: string]: any;
}

interface Artisan {
  id: number;
  name: string;
  region: string;
  bio?: string;
  [key: string]: any;
}

const ProductDetail = () => {
  const [match, params] = useRoute("/product/:id");
  const productId = match ? parseInt(params.id) : 0;
  const [quantity, setQuantity] = useState(1);
  const { toast } = useToast();
  const { addToCart, isLoading: isCartLoading } = useCart();

  // Fetch product details
  const { data: product, isLoading } = useQuery<Product>({
    queryKey: [`/api/products/${productId}`],
    enabled: productId > 0,
  });

  // Fetch artisan info if product is loaded
  const { data: artisan } = useQuery<Artisan>({
    queryKey: [product?.artisanId ? `/api/artisans/${product.artisanId}` : null],
    enabled: !!product?.artisanId,
  });

  // Fetch similar products
  const { data: similarProducts = [] } = useQuery<Product[]>({
    queryKey: [product?.category ? `/api/products/category/${product.category}` : null],
    enabled: !!product?.category,
  });

  // Filter out the current product from similar products and limit to 4
  const filteredSimilarProducts = similarProducts
    .filter(item => item.id !== productId)
    .slice(0, 4);

  const handleAddToCart = async () => {
    if (!product) return;

    try {
      await addToCart(product.id, quantity);
      toast({
        title: "Added to cart",
        description: `${quantity} × ${product.name} added to your cart`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add item to cart",
        variant: "destructive",
      });
    }
  };

  const increaseQuantity = () => {
    if (product && quantity < product.stock) {
      setQuantity(prev => prev + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/3 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="h-96 bg-gray-200 rounded"></div>
            <div>
              <div className="h-10 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-6 bg-gray-200 rounded w-1/4 mb-6"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded mb-6"></div>
              <div className="h-12 bg-gray-200 rounded w-full mb-6"></div>
              <div className="h-10 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-medium text-gray-900 mb-4">Product Not Found</h2>
        <p className="text-gray-600 mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <Button asChild className="bg-[#E64A19] hover:bg-[#BF360C]">
          <a href="/shop">Continue Shopping</a>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/shop">Shop</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/shop?category=${encodeURIComponent(product.category)}`}>
              {product.category}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>{product.name}</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Product Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Product Image */}
        <div className="bg-white rounded-xl overflow-hidden shadow-md">
          <img 
            src={getTruncatedImageUrl(product.imageUrl)}
            alt={product.name} 
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-medium mb-2">{product.name}</h1>
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary">{product.region}</Badge>
            <Badge variant="secondary">{product.material}</Badge>
            <Badge variant="secondary">{product.category}</Badge>
          </div>
          
          <div className="text-2xl font-semibold text-[#E64A19] mb-6">
            {formatPrice(product.price)}
          </div>
          
          <p className="text-gray-700 mb-6">{product.description}</p>
          
          {artisan && (
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gray-200 mr-3 overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-600">Crafted by</p>
                <a href={`/artisan/${artisan.id}`} className="text-[#1A237E] font-medium hover:underline">
                  {artisan.name}
                </a>
              </div>
            </div>
          )}
          
          <div className="flex items-center mb-6">
            <span className="text-gray-700 mr-4">Quantity:</span>
            <div className="flex items-center border border-gray-300 rounded">
              <button 
                className="px-3 py-1 hover:bg-gray-100" 
                onClick={decreaseQuantity}
                disabled={quantity <= 1}
              >
                -
              </button>
              <span className="px-4 py-1 border-l border-r border-gray-300">{quantity}</span>
              <button 
                className="px-3 py-1 hover:bg-gray-100" 
                onClick={increaseQuantity}
                disabled={product.stock <= quantity}
              >
                +
              </button>
            </div>
            <span className="ml-4 text-sm text-gray-600">
              {product.stock} available
            </span>
          </div>
          
          <Button 
            className="w-full bg-[#E64A19] hover:bg-[#BF360C] py-6 text-lg mb-4"
            onClick={handleAddToCart}
            disabled={isCartLoading || product.stock < 1}
          >
            {isCartLoading ? "Adding..." : "Add to Cart"}
          </Button>
          
          <div className="flex justify-center gap-6 text-sm text-gray-600 mb-6">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Fast Shipping</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>100% Authentic</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
              </svg>
              <span>Secure Payment</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Information Tabs */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-16">
        <Tabs defaultValue="description">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="cultural">Cultural Significance</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="text-gray-700">
            <p>{product.description}</p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#E64A19] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Material: {product.material}</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#E64A19] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Region: {product.region}</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#E64A19] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Category: {product.category}</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#E64A19] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Handcrafted by skilled artisans</span>
              </li>
            </ul>
          </TabsContent>
          <TabsContent value="history" className="text-gray-700">
            {product.history ? (
              <p>{product.history}</p>
            ) : (
              <p>No historical information is available for this product.</p>
            )}
          </TabsContent>
          <TabsContent value="cultural" className="text-gray-700">
            {product.culturalSignificance ? (
              <p>{product.culturalSignificance}</p>
            ) : (
              <p>No cultural significance information is available for this product.</p>
            )}
          </TabsContent>
        </Tabs>
      </div>

      {/* Similar Products */}
      {filteredSimilarProducts.length > 0 && (
        <div className="mb-16">
          <h2 className="font-serif text-2xl mb-6">You May Also Like</h2>
          <ProductGrid products={filteredSimilarProducts} />
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
