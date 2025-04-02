import { useState } from "react";
import { Link } from "wouter";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import CartItem from "@/components/ui/CartItem";
import { formatPrice } from "@/lib/utils";

const Cart = () => {
  const { cartItems, clearCart, isLoading, cartTotal } = useCart();
  
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-medium mb-6">Your Cart</h1>
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/4 mb-6"></div>
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="flex py-6 border-b border-gray-200">
              <div className="h-24 w-24 bg-gray-200 rounded mr-4"></div>
              <div className="flex-1">
                <div className="h-6 bg-gray-200 rounded w-1/3 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
              <div className="h-6 bg-gray-200 rounded w-20"></div>
            </div>
          ))}
          <div className="mt-8">
            <div className="h-8 bg-gray-200 rounded w-1/4 ml-auto mb-4"></div>
            <div className="h-12 bg-gray-200 rounded w-full"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-medium mb-6">Your Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="bg-white rounded-xl shadow-md p-8 text-center">
          <div className="mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="8" cy="21" r="1"></circle>
              <circle cx="19" cy="21" r="1"></circle>
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
            </svg>
          </div>
          <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Looks like you haven't added any toys to your cart yet.</p>
          <Button asChild className="bg-[#E64A19] hover:bg-[#BF360C]">
            <Link href="/shop">Continue Shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium">Cart Items ({cartItems.length})</h2>
                <button 
                  onClick={() => clearCart()} 
                  className="text-sm text-[#E64A19] hover:text-[#BF360C] transition-colors"
                >
                  Clear Cart
                </button>
              </div>
              
              <Separator className="mb-6" />
              
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          </div>
          
          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h2 className="text-lg font-medium mb-4">Order Summary</h2>
              
              <Separator className="mb-6" />
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">{formatPrice(cartTotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">₹150</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">{formatPrice(cartTotal * 0.05)}</span>
                </div>
              </div>
              
              <Separator className="mb-6" />
              
              <div className="flex justify-between mb-6">
                <span className="text-lg font-medium">Total</span>
                <span className="text-lg font-semibold text-[#E64A19]">
                  {formatPrice(cartTotal + 150 + (cartTotal * 0.05))}
                </span>
              </div>
              
              <Button asChild className="w-full bg-[#E64A19] hover:bg-[#BF360C] py-6">
                <Link href="/checkout">Proceed to Checkout</Link>
              </Button>
              
              <div className="mt-4 text-center">
                <Link href="/shop">
                  <a className="text-sm text-[#E64A19] hover:text-[#BF360C]">
                    Continue Shopping
                  </a>
                </Link>
              </div>
              
              <div className="mt-6 flex items-center justify-center space-x-4 text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                  <line x1="2" x2="22" y1="10" y2="10"></line>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="4"></circle>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                  <line x1="2" x2="22" y1="10" y2="10"></line>
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
