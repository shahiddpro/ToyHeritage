import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useCart } from "@/context/CartContext";
import SearchBar from "../ui/SearchBar";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { productCategories } from "@/lib/utils";

const Header = () => {
  const [location] = useLocation();
  const { cartCount } = useCart();
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-3 px-4 md:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-[#E64A19] flex items-center justify-center mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-white">
                  <path d="M17.5 7.5c.82.82 2.13.82 2.95 0l.5-.5c.82-.82.82-2.13 0-2.95l-3-3c-.82-.82-2.13-.82-2.95 0l-.5.5c-.82.82-.82 2.13 0 2.95z" />
                  <path d="M3 21h18" />
                  <path d="M12.77 10L8.83 6.078a1.967 1.967 0 00-2.775 0l-.082.083a1.967 1.967 0 000 2.775L9.927 13" />
                  <path d="M9.17 11.636l-2.292 2.292a3.908 3.908 0 00-1.144 2.77V17" />
                  <path d="M16.95 14.95a1 1 0 101.414-1.414l-1.414 1.414z" />
                  <path d="M11 9l4.95 4.95" />
                </svg>
              </div>
              <span className="font-serif text-2xl text-[#E64A19]">Toy<span className="text-[#1A237E]">Craft</span></span>
          </Link>
          
          {/* Search - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-6">
            <SearchBar />
          </div>
          
          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/shop" className={`text-gray-800 hover:text-[#E64A19] font-medium transition-colors ${location === '/shop' ? 'text-[#E64A19]' : ''}`}>
                Shop
            </Link>
            <Link href="/artisans" className={`text-gray-800 hover:text-[#E64A19] font-medium transition-colors ${location === '/artisans' ? 'text-[#E64A19]' : ''}`}>
                Artisans
            </Link>
            <Link href="/regions" className={`text-gray-800 hover:text-[#E64A19] font-medium transition-colors ${location === '/regions' ? 'text-[#E64A19]' : ''}`}>
                Regions
            </Link>
            <Link href="/about" className={`text-gray-800 hover:text-[#E64A19] font-medium transition-colors ${location === '/about' ? 'text-[#E64A19]' : ''}`}>
                About
            </Link>
          </nav>
          
          {/* Mobile menu and cart/account */}
          <div className="flex items-center space-x-3">
            {/* Mobile Search Button */}
            <button 
              className="md:hidden text-gray-800 focus:outline-none"
              onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
            
            {/* Cart Link */}
            <Link href="/cart" className="text-gray-800 hover:text-[#E64A19] transition-colors relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="8" cy="21" r="1"></circle>
                  <circle cx="19" cy="21" r="1"></circle>
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#E64A19] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
            </Link>
            
            {/* User Account Link */}
            <a href="#" className="text-gray-800 hover:text-[#E64A19] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </a>
            
            {/* Mobile Menu Button */}
            <Sheet>
              <SheetTrigger className="md:hidden text-gray-800 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                <div className="flex flex-col h-full py-6">
                  <h2 className="font-serif text-2xl text-[#E64A19]">
                    Toy<span className="text-[#1A237E]">Craft</span>
                  </h2>
                  
                  {/* Mobile Search */}
                  <div className="mt-8 mb-6">
                    <SearchBar />
                  </div>
                  
                  {/* Mobile Navigation Links */}
                  <nav className="flex flex-col space-y-4">
                    <Link href="/" className="text-gray-800 hover:text-[#E64A19] font-medium py-2">Home</Link>
                    <Link href="/shop" className="text-gray-800 hover:text-[#E64A19] font-medium py-2">Shop</Link>
                    <Link href="/artisans" className="text-gray-800 hover:text-[#E64A19] font-medium py-2">Artisans</Link>
                    <Link href="/regions" className="text-gray-800 hover:text-[#E64A19] font-medium py-2">Regions</Link>
                    <Link href="/about" className="text-gray-800 hover:text-[#E64A19] font-medium py-2">About Us</Link>
                    <Link href="/cart" className="text-gray-800 hover:text-[#E64A19] font-medium py-2">Cart</Link>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      
      {/* Mobile Search - Expanded */}
      {mobileSearchOpen && (
        <div className="md:hidden px-4 pb-4">
          <SearchBar />
        </div>
      )}
      
      {/* Categories Bar - Desktop */}
      <div className="hidden md:block bg-gray-50 border-t border-b border-gray-700 border-opacity-10">
        <div className="container mx-auto flex justify-between py-2 px-6 overflow-x-auto">
          {productCategories.map((category, index) => (
            <Link key={index} href={`/shop?category=${encodeURIComponent(category)}`} className="whitespace-nowrap px-3 py-1 text-sm text-gray-800 hover:text-[#E64A19] font-medium transition-colors">
              {category}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
