import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero section */}
      <section className="mb-16">
        <div className="relative">
          <div className="h-64 md:h-80 bg-[#1A237E] rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1599045239569-c27172f3ae0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Traditional Indian toys arrangement" 
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-4 md:px-8 max-w-3xl">
                <h1 className="font-serif text-3xl md:text-5xl text-white mb-4">Our Mission</h1>
                <p className="text-white text-opacity-90 text-lg">
                  Preserving India's rich toy-making traditions by connecting artisans with the world
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our story section */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-sm text-[#E64A19] font-medium">Our Mission</span>
            <h2 className="font-serif text-3xl text-gray-900 mt-2 mb-6">Preserving India's Toy Heritage</h2>
            
            <div className="space-y-4 text-gray-700">
              <p>
                ToyCraft is dedicated to revitalizing India's rich toy-making traditions by connecting skilled artisans directly 
                with global markets while educating new generations about these cultural treasures.
              </p>
              
              <p>
                The Indian toy industry faces significant challenges today, from competition with mass-produced plastic toys to 
                the declining number of traditional craftspeople. We address these challenges by:
              </p>
            </div>
            
            <div className="mt-6 space-y-4">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-[#FF7043] bg-opacity-20 flex items-center justify-center mt-1 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E64A19]">
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E64A19]">
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E64A19]">
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
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="/images/smth.webp" 
                alt="Traditional toy crafting" 
                className="w-full h-48 object-cover rounded-lg"
              />
              <img 
                src="/images/smth_2.jpg" 
                alt="Traditional toy making" 
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4 mt-8">
              <img 
                src="/images/smth_3.webp" 
                alt="Traditional toy creation" 
                className="w-full h-64 object-cover rounded-lg"
              />
              <img 
                src="/images/artisans_working_on_clay_tos.jpg" 
                alt="Artisans working on clay toys" 
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our values */}
      <section className="mb-16">
        <h2 className="font-serif text-3xl text-center mb-8">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="w-12 h-12 rounded-full bg-[#FF7043] bg-opacity-20 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E64A19]">
                <rect width="8" height="12" x="8" y="2" rx="1"></rect>
                <rect width="14" height="8" x="5" y="14" rx="1"></rect>
              </svg>
            </div>
            <h3 className="font-medium text-xl mb-2">Authenticity</h3>
            <p className="text-gray-700">
              We ensure that every product on our platform is authentically handcrafted using traditional methods and materials. 
              We verify the origin and craftsmanship of each item to preserve cultural integrity.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="w-12 h-12 rounded-full bg-[#FF7043] bg-opacity-20 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E64A19]">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                <path d="m7 9 3 3-3 3"></path>
                <path d="M14 9h3v3"></path>
                <path d="M14 15h3v-3"></path>
              </svg>
            </div>
            <h3 className="font-medium text-xl mb-2">Sustainability</h3>
            <p className="text-gray-700">
              Traditional Indian toys are inherently eco-friendly, made from natural materials like wood, clay, and cotton. 
              We promote these sustainable alternatives to mass-produced plastic toys.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="w-12 h-12 rounded-full bg-[#FF7043] bg-opacity-20 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E64A19]">
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
              </svg>
            </div>
            <h3 className="font-medium text-xl mb-2">Education</h3>
            <p className="text-gray-700">
              We believe in sharing the rich stories behind each toy tradition. By educating consumers about the historical 
              and cultural significance of these toys, we help ensure these traditions continue.
            </p>
          </div>
        </div>
      </section>

      {/* Our impact */}
      <section className="mb-16">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="font-serif text-3xl text-center mb-8">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-[#E64A19] mb-2">500+</div>
              <h3 className="font-medium mb-2">Artisans Supported</h3>
              <p className="text-gray-700 text-sm">
                Providing sustainable livelihoods to craftspeople across India
              </p>
            </div>
            
            <div>
              <div className="text-3xl font-bold text-[#E64A19] mb-2">20+</div>
              <h3 className="font-medium mb-2">Toy Traditions</h3>
              <p className="text-gray-700 text-sm">
                Preserving diverse toy-making techniques from different regions
              </p>
            </div>
            
            <div>
              <div className="text-3xl font-bold text-[#E64A19] mb-2">15+</div>
              <h3 className="font-medium mb-2">Indian States</h3>
              <p className="text-gray-700 text-sm">
                Representing toy traditions from across the country
              </p>
            </div>
            
            <div>
              <div className="text-3xl font-bold text-[#E64A19] mb-2">5000+</div>
              <h3 className="font-medium mb-2">Global Customers</h3>
              <p className="text-gray-700 text-sm">
                Connecting traditional crafts with appreciative audiences worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our team */}
      <section className="mb-16">
        <h2 className="font-serif text-3xl text-center mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="h-64 bg-gray-200">
              <svg className="h-full w-full text-gray-300" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512">
                <path d="M104 136a56 56 0 1 1 112 0A56 56 0 1 1 104 136zm120 312c17.7 0 32-14.3 32-32v-8c0-48.6-39.4-88-88-88h-8c-48.6 0-88 39.4-88 88v8c0 17.7 14.3 32 32 32h120zm200-112a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm120 112c17.7 0 32-14.3 32-32v-8c0-48.6-39.4-88-88-88h-8c-48.6 0-88 39.4-88 88v8c0 17.7 14.3 32 32 32h120z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="font-medium text-xl mb-1">Anjali Sharma</h3>
              <p className="text-[#E64A19] mb-3">Founder & CEO</p>
              <p className="text-gray-700">
                With a background in cultural anthropology and a passion for traditional crafts, Anjali founded ToyCraft to 
                bridge the gap between artisans and global markets.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="h-64 bg-gray-200">
              <svg className="h-full w-full text-gray-300" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512">
                <path d="M104 136a56 56 0 1 1 112 0A56 56 0 1 1 104 136zm120 312c17.7 0 32-14.3 32-32v-8c0-48.6-39.4-88-88-88h-8c-48.6 0-88 39.4-88 88v8c0 17.7 14.3 32 32 32h120zm200-112a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm120 112c17.7 0 32-14.3 32-32v-8c0-48.6-39.4-88-88-88h-8c-48.6 0-88 39.4-88 88v8c0 17.7 14.3 32 32 32h120z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="font-medium text-xl mb-1">Rajeev Patel</h3>
              <p className="text-[#E64A19] mb-3">Head of Artisan Relations</p>
              <p className="text-gray-700">
                Born into a family of traditional toy makers, Rajeev brings firsthand knowledge of craft traditions and deep 
                connections with artisan communities across India.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="h-64 bg-gray-200">
              <svg className="h-full w-full text-gray-300" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512">
                <path d="M104 136a56 56 0 1 1 112 0A56 56 0 1 1 104 136zm120 312c17.7 0 32-14.3 32-32v-8c0-48.6-39.4-88-88-88h-8c-48.6 0-88 39.4-88 88v8c0 17.7 14.3 32 32 32h120zm200-112a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm120 112c17.7 0 32-14.3 32-32v-8c0-48.6-39.4-88-88-88h-8c-48.6 0-88 39.4-88 88v8c0 17.7 14.3 32 32 32h120z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="font-medium text-xl mb-1">Maya Reddy</h3>
              <p className="text-[#E64A19] mb-3">Cultural Documentation</p>
              <p className="text-gray-700">
                With a background in museum curation, Maya leads our efforts to document and share the rich histories and 
                techniques behind each toy tradition we represent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center mb-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl mb-4">Join Our Mission</h2>
          <p className="text-gray-700 mb-8">
            Whether you're a customer, artisan, or enthusiast of cultural heritage, there are many ways to support our 
            mission of preserving India's traditional toys and crafts.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-[#E64A19] hover:bg-[#BF360C]">
              <a href="/shop">Shop Our Collection</a>
            </Button>
            <Button asChild variant="outline" className="border-[#E64A19] text-[#E64A19]">
              <a href="/artisans">Meet Our Artisans</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
