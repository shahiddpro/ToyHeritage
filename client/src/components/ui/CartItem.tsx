import { useState } from "react";
import { Link } from "wouter";
import { formatPrice, getTruncatedImageUrl } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CartItemProps {
  item: {
    id: number;
    productId: number;
    quantity: number;
    product?: {
      id: number;
      name: string;
      price: string;
      imageUrl: string;
      stock: number;
      [key: string]: any;
    };
  };
}

const CartItem = ({ item }: CartItemProps) => {
  const { updateQuantity, removeFromCart } = useCart();
  const [isUpdating, setIsUpdating] = useState(false);

  if (!item.product) {
    return null;
  }

  const { product } = item;
  const subtotal = parseFloat(product.price) * item.quantity;

  // Create quantity options array (1 to product stock, max 10)
  const maxQty = Math.min(product.stock, 10);
  const quantityOptions = Array.from({ length: maxQty }, (_, i) => i + 1);

  const handleQuantityChange = async (value: string) => {
    setIsUpdating(true);
    try {
      const newQuantity = parseInt(value);
      await updateQuantity(item.id, newQuantity);
    } catch (error) {
      console.error("Error updating quantity:", error);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleRemove = async () => {
    try {
      await removeFromCart(item.id);
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center py-6 border-b border-gray-200 last:border-b-0">
      <div className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-md overflow-hidden mr-4 mb-4 sm:mb-0">
        <Link href={`/product/${product.id}`}>
          <a>
            <img
              src={getTruncatedImageUrl(product.imageUrl)}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </a>
        </Link>
      </div>

      <div className="flex-grow sm:mr-8">
        <Link href={`/product/${product.id}`}>
          <a className="font-medium text-lg text-gray-900 hover:text-[#E64A19] transition-colors">
            {product.name}
          </a>
        </Link>
        <div className="flex items-center mt-1 text-sm text-gray-500">
          <span>
            {product.material} | {product.region}
          </span>
        </div>
        <div className="flex items-center mt-4 sm:mt-2">
          <span className="font-medium text-gray-900 w-24">
            {formatPrice(product.price)}
          </span>
          <span className="mx-3 text-gray-500">×</span>
          <Select
            value={item.quantity.toString()}
            onValueChange={handleQuantityChange}
            disabled={isUpdating}
          >
            <SelectTrigger className="w-16 h-9">
              <SelectValue placeholder={item.quantity} />
            </SelectTrigger>
            <SelectContent>
              {quantityOptions.map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <button
            onClick={handleRemove}
            className="ml-6 text-sm text-gray-500 hover:text-[#E64A19] transition-colors"
          >
            Remove
          </button>
        </div>
      </div>

      <div className="mt-4 sm:mt-0 sm:ml-auto text-right">
        <span className="font-semibold text-lg text-gray-900">
          {formatPrice(subtotal)}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
