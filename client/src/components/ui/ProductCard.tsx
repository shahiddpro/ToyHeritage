import { Link } from "wouter";
import { formatPrice, getTruncatedImageUrl } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    description: string;
    price: string;
    category: string;
    region: string;
    material: string;
    imageUrl: string;
    stock: number;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    try {
      await addToCart(product.id, 1);
    } catch (error) {
      toast({
        title: "Error",
        description: "Could not add item to cart",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="product-card bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
      <Link href={`/product/${product.id}`}>
        <a className="block">
          <div className="relative h-56">
            <img 
              src={getTruncatedImageUrl(product.imageUrl)}
              alt={product.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 right-3">
              <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:text-[#E64A19] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center mb-2 flex-wrap gap-2">
              <Badge variant="secondary" className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100">
                {product.region}
              </Badge>
              <Badge variant="secondary" className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100">
                {product.material}
              </Badge>
            </div>
            <h3 className="font-medium text-lg mb-1">{product.name}</h3>
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
            <div className="flex justify-between items-center">
              <span className="font-semibold text-lg">{formatPrice(product.price)}</span>
              <Button
                className="bg-[#E64A19] hover:bg-[#BF360C] text-white px-3 py-2 rounded-lg text-sm transition-colors"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ProductCard;
