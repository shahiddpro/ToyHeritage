import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { CartProvider } from "./context/CartContext";
import NotFound from "@/pages/not-found";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Artisans from "./pages/Artisans";
import ArtisanDetail from "./pages/ArtisanDetail";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Regions from "./pages/Regions";
import RegionDetail from "./pages/RegionDetail";
import Checkout from "./pages/Checkout";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/shop" component={Shop} />
      <Route path="/product/:id" component={ProductDetail} />
      <Route path="/artisans" component={Artisans} />
      <Route path="/artisan/:id" component={ArtisanDetail} />
      <Route path="/about" component={About} />
      <Route path="/cart" component={Cart} />
      <Route path="/regions" component={Regions} />
      <Route path="/region/:id" component={RegionDetail} />
      <Route path="/checkout" component={Checkout} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <div className="flex flex-col min-h-screen bg-[#FFF8E1] font-sans">
          <Header />
          <main className="flex-grow">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
