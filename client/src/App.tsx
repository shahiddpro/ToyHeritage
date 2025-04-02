import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "./pages/Home";

function SimpleRouter() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/:anything*" component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col min-h-screen bg-[#FFF8E1] font-sans">
        <header className="py-4 px-6 bg-white shadow-md">
          <div className="font-serif text-2xl text-[#E64A19]">
            Toy<span className="text-[#1A237E]">Craft</span>
          </div>
        </header>
        <main className="flex-grow">
          <SimpleRouter />
        </main>
        <footer className="py-4 px-6 bg-gray-100 text-center">
          <p>©2025 ToyCraft - Celebrating Ancient Indian Toys</p>
        </footer>
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
