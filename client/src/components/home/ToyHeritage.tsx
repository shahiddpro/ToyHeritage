import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

// Define the heritage toy data structure
interface HeritageToy {
  id: string;
  name: string;
  region: string;
  description: string;
  history: string;
  culturalSignificance: string;
  materials: string[];
  imageUrl: string;
}

// Sample data for heritage toys
const heritageToys: HeritageToy[] = [
  {
    id: "channapatna",
    name: "Channapatna Toys",
    region: "Karnataka",
    description: "Colorful wooden toys made with natural dyes and lacquer finish, known for their smooth texture and vibrant colors.",
    history: "The craft dates back to the reign of Tipu Sultan in the 18th century who invited artisans from Persia to train local craftsmen. Today, Channapatna is known as 'Toy Town' of Karnataka.",
    culturalSignificance: "These toys represent sustainable toy-making traditions and are now protected under the Geographical Indication (GI) tag. They're not just playthings but symbols of cultural heritage and eco-friendly craftsmanship.",
    materials: ["Ivory wood (Hale wood)", "Natural dyes", "Vegetable lacquer"],
    imageUrl: "/images/toys/channapatna-toys.svg",
  },
  {
    id: "kathputli",
    name: "Kathputli Puppets",
    region: "Rajasthan",
    description: "Intricately crafted string puppets with colorful clothing and detailed features, used in traditional storytelling performances.",
    history: "The art of Kathputli has been practiced by the Bhat community of Rajasthan for over a thousand years. Originally performed for royalty, these puppets now keep folktales and epics alive for modern audiences.",
    culturalSignificance: "Kathputli performances translate ancient stories and social messages through entertainment. Each puppet is a character from mythology, folklore, or everyday life, preserving oral traditions through visual art.",
    materials: ["Wood", "Cotton cloth", "String", "Traditional colors"],
    imageUrl: "/images/toys/kathputli-puppets.svg",
  },
  {
    id: "kondapalli",
    name: "Kondapalli Toys",
    region: "Andhra Pradesh",
    description: "Hand-carved, lightweight wooden toys depicting rural life, mythological characters, and animals, known for their simple yet expressive designs.",
    history: "This 400-year-old craft originated in Kondapalli village near Vijayawada. The artisans, known as 'Aryakhastriyas', have passed down their techniques through generations.",
    culturalSignificance: "These toys often depict scenes from rural life, festivals, and mythological stories, serving as educational tools for children while preserving cultural narratives and traditional lifestyles of Andhra Pradesh.",
    materials: ["Poniki wood (white sander)", "Natural colors", "Sawdust paste"],
    imageUrl: "/images/toys/kondapalli-toys.svg",
  },
  {
    id: "leather-puppets",
    name: "Tholu Bommalata",
    region: "Andhra Pradesh & Karnataka",
    description: "Translucent leather shadow puppets with intricate perforations and colorful designs, used in traditional shadow puppet theater performances.",
    history: "Dating back to the 3rd century BCE, this ancient art form was once the primary entertainment in rural areas. These puppets are crafted from treated goat or deer hide, with intricate perforations that allow light to pass through.",
    culturalSignificance: "Used to narrate episodes from Hindu epics like Ramayana and Mahabharata, these puppet shows were a means of entertainment and religious education. The tradition has been recognized by UNESCO as an intangible cultural heritage.",
    materials: ["Treated leather", "Natural dyes", "Bamboo sticks"],
    imageUrl: "/images/toys/leather-puppets.svg",
  },
  {
    id: "terracotta",
    name: "Terracotta Toys",
    region: "West Bengal & Tamil Nadu",
    description: "Handcrafted clay toys and figurines, often depicting rural life, decorated with bright colors and natural motifs.",
    history: "This ancient craft has been practiced across India for thousands of years. The Gangetic belt, particularly Krishnanagar in West Bengal, and the Thanjavur region in Tamil Nadu are famous for their distinct terracotta traditions.",
    culturalSignificance: "These toys are often linked to seasonal festivals and rituals. In Bengal, terracotta horses are offered to village deities, while in Tamil Nadu, terracotta figures represent household gods and cultural themes.",
    materials: ["Clay", "Natural pigments", "Straw (for reinforcement)"],
    imageUrl: "/images/toys/terracotta-toys.svg",
  },
  {
    id: "wooden-lacquerware",
    name: "Varanasi Wooden Toys",
    region: "Uttar Pradesh",
    description: "Brightly painted wooden toys including spinning tops, dolls, and stacking toys, known for their bold geometric patterns and durability.",
    history: "The wooden toy craft of Varanasi has flourished alongside the city's rich cultural and artistic heritage for centuries. Many toys feature religious motifs reflecting the city's spiritual significance.",
    culturalSignificance: "These toys often incorporate religious symbols and are sometimes used in ceremonies. The lacquered finish gives a distinct sheen while protecting the wood, making them both decorative and functional pieces.",
    materials: ["Mango wood", "Neem wood", "Vegetable dyes", "Lac"],
    imageUrl: "/images/toys/varanasi-toys.svg",
  }
];

const ToyHeritage = () => {
  const [activeToy, setActiveToy] = useState<HeritageToy>(heritageToys[0]);
  
  return (
    <section className="py-16 bg-[#F8F0E3]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-3">Ancient Toy Heritage of India</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the rich traditions of Indian toymaking spanning centuries of craftsmanship, cultural significance, and artistic excellence
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-medium text-xl mb-4 text-gray-900">Traditional Toys</h3>
            <div className="flex flex-col space-y-2">
              {heritageToys.map((toy) => (
                <button
                  key={toy.id}
                  onClick={() => setActiveToy(toy)}
                  className={`text-left px-4 py-3 rounded-lg transition-colors ${
                    activeToy.id === toy.id
                      ? "bg-[#E64A19] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <div className="font-medium">{toy.name}</div>
                  <div className="text-sm opacity-90">{toy.region}</div>
                </button>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-64 md:h-auto">
                  <img 
                    src={activeToy.imageUrl}
                    alt={activeToy.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-gray-900 mb-2">{activeToy.name}</h3>
                  <p className="text-[#E64A19] font-medium mb-3">Region: {activeToy.region}</p>
                  <p className="text-gray-700 mb-4">{activeToy.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-1">Materials Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeToy.materials.map((material, idx) => (
                        <span 
                          key={idx}
                          className="text-xs px-2 py-1 bg-[#F5F5F5] text-gray-700 rounded-full"
                        >
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-100">
                <Tabs defaultValue="history" className="p-6">
                  <TabsList className="mb-4">
                    <TabsTrigger value="history">History</TabsTrigger>
                    <TabsTrigger value="significance">Cultural Significance</TabsTrigger>
                  </TabsList>
                  <TabsContent value="history" className="text-gray-700">
                    {activeToy.history}
                  </TabsContent>
                  <TabsContent value="significance" className="text-gray-700">
                    {activeToy.culturalSignificance}
                  </TabsContent>
                </Tabs>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <Button asChild variant="default" className="bg-[#1A237E] hover:bg-[#0D47A1]">
                <Link href="/shop">
                  <a>Shop Traditional Toys</a>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToyHeritage;