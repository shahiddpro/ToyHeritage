import { useState } from "react";
import ProductCard from "./ProductCard";
import { Skeleton } from "@/components/ui/skeleton";

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

interface ProductGridProps {
  products: Product[];
  isLoading?: boolean;
  emptyMessage?: string;
}

const ProductGrid = ({ products, isLoading = false, emptyMessage = "No products found" }: ProductGridProps) => {
  // Number of skeleton cards to show when loading
  const skeletonCount = 8;
  
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array(skeletonCount)
          .fill(0)
          .map((_, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md">
              <Skeleton className="h-56 w-full" />
              <div className="p-4">
                <div className="flex gap-2 mb-2">
                  <Skeleton className="h-6 w-20 rounded-full" />
                  <Skeleton className="h-6 w-20 rounded-full" />
                </div>
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-2/3 mb-3" />
                <div className="flex justify-between items-center">
                  <Skeleton className="h-6 w-16" />
                  <Skeleton className="h-10 w-24 rounded-lg" />
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="py-10 text-center">
        <div className="mx-auto w-16 h-16 mb-4 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-1">No Results Found</h3>
        <p className="text-gray-600">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
