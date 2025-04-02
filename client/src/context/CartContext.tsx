import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export interface CartItem {
  id: number;
  userId: number;
  productId: number;
  quantity: number;
  product?: {
    id: number;
    name: string;
    price: string;
    imageUrl: string;
    [key: string]: any;
  };
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (productId: number, quantity: number) => Promise<void>;
  removeFromCart: (cartItemId: number) => Promise<void>;
  updateQuantity: (cartItemId: number, quantity: number) => Promise<void>;
  clearCart: () => Promise<void>;
  isLoading: boolean;
  cartTotal: number;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Mock user ID for demonstration
const DEMO_USER_ID = 1;

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cartItems.reduce((total, item) => {
    const price = item.product?.price ? parseFloat(item.product.price) : 0;
    return total + (price * item.quantity);
  }, 0);

  // Fetch cart items on load
  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/cart/${DEMO_USER_ID}`);
      if (!response.ok) throw new Error("Failed to fetch cart items");
      const data = await response.json();
      setCartItems(data);
    } catch (error) {
      console.error("Error fetching cart items:", error);
      toast({
        title: "Error",
        description: "Failed to load your cart items",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const addToCart = async (productId: number, quantity: number) => {
    setIsLoading(true);
    try {
      const response = await apiRequest("POST", "/api/cart", {
        userId: DEMO_USER_ID,
        productId,
        quantity,
      });
      
      const data = await response.json();
      
      // Check if item already exists in cart, and update accordingly
      const existingItemIndex = cartItems.findIndex(item => item.id === data.id);
      
      if (existingItemIndex >= 0) {
        // Update existing item
        const updatedCartItems = [...cartItems];
        updatedCartItems[existingItemIndex] = data;
        setCartItems(updatedCartItems);
      } else {
        // Add new item
        setCartItems([...cartItems, data]);
      }
      
      toast({
        title: "Success",
        description: "Item added to cart",
      });
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast({
        title: "Error",
        description: "Failed to add item to cart",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const removeFromCart = async (cartItemId: number) => {
    setIsLoading(true);
    try {
      await apiRequest("DELETE", `/api/cart/${cartItemId}`);
      
      // Update local state by removing the item
      setCartItems(cartItems.filter(item => item.id !== cartItemId));
      
      toast({
        title: "Success",
        description: "Item removed from cart",
      });
    } catch (error) {
      console.error("Error removing from cart:", error);
      toast({
        title: "Error",
        description: "Failed to remove item from cart",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const updateQuantity = async (cartItemId: number, quantity: number) => {
    setIsLoading(true);
    try {
      const response = await apiRequest("PUT", `/api/cart/${cartItemId}`, { quantity });
      const data = await response.json();
      
      // Update local state
      setCartItems(
        cartItems.map(item => item.id === cartItemId ? data : item)
      );
    } catch (error) {
      console.error("Error updating cart quantity:", error);
      toast({
        title: "Error",
        description: "Failed to update cart",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const clearCart = async () => {
    setIsLoading(true);
    try {
      await apiRequest("DELETE", `/api/cart/user/${DEMO_USER_ID}`);
      
      // Clear local state
      setCartItems([]);
      
      toast({
        title: "Success",
        description: "Cart cleared successfully",
      });
    } catch (error) {
      console.error("Error clearing cart:", error);
      toast({
        title: "Error",
        description: "Failed to clear cart",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isLoading,
        cartTotal,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
