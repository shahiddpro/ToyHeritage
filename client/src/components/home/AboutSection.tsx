import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-sm text-[#E64A19] font-medium">Our Mission</span>
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mt-2 mb-6">Preserving India's Toy Heritage</h2>
            
            <div className="space-y-4 text-gray-700">
              <p>
                ToyCraft is dedicated to revitalizing India's rich toy-making traditions by connecting skilled artisans 
                directly with global markets while educating new generations about these cultural treasures.
              </p>
              
              <p>
                The Indian toy industry faces significant challenges today, from competition with mass-produced plastic toys 
                to the declining number of traditional craftspeople. We address these challenges by:
              </p>
            </div>
            
            <div className="mt-6 space-y-4">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-[#FF7043] bg-opacity-20 flex items-center justify-center mt-1 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E64A19]">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-lg text-gray-900">Supporting Artisans</h3>
                  <p className="text-gray-700">Providing fair prices and sustainable income to toy-makers across India</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-[#FF7043] bg-opacity-20 flex items-center justify-center mt-1 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E64A19]">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-lg text-gray-900">Preserving Knowledge</h3>
                  <p className="text-gray-700">Documenting and sharing traditional toy-making techniques and cultural significance</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-[#FF7043] bg-opacity-20 flex items-center justify-center mt-1 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E64A19]">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" x2="22" y1="12" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-lg text-gray-900">Creating Market Access</h3>
                  <p className="text-gray-700">Building a global platform for traditional toys to reach appreciative consumers</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Button asChild className="bg-[#E64A19] hover:bg-[#BF360C]">
                <Link href="/about">
                  <a>Learn About Our Journey</a>
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1618842676088-c4489444c0d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Traditional wooden toy making process" 
                className="w-full h-48 object-cover rounded-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1602934585418-f588bea4215a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Display of traditional Indian toys" 
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4 mt-8">
              <img 
                src="https://images.unsplash.com/photo-1598875184988-5e67b1a874b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Children playing with traditional toys" 
                className="w-full h-64 object-cover rounded-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1600595289860-fc1fa58ec456?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Artisan working on clay toys" 
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
