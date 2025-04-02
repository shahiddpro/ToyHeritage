const Home = () => {
  return (
    <div className="container mx-auto p-6">
      <section className="py-12 text-center">
        <h1 className="text-4xl font-bold text-[#1A237E] mb-4">Welcome to ToyCraft</h1>
        <p className="text-xl text-gray-700 mb-8">Celebrating Ancient Indian Toys and Crafts</p>
        
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-[#E64A19] mb-4">About This Project</h2>
          <p className="text-lg text-gray-800 mb-4">
            This marketplace explores the rich heritage of ancient Indian toys, offering an immersive platform for collectors, educators, and cultural enthusiasts.
          </p>
          <p className="text-lg text-gray-800 mb-4">
            We've simplified the site temporarily while we address technical issues.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-[#1A237E] mb-3">Explore Regional Crafts</h3>
            <p className="text-gray-700">Discover unique toys from diverse regions of India, each with its own cultural significance and artisanal techniques.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-[#1A237E] mb-3">Meet Master Artisans</h3>
            <p className="text-gray-700">Connect with skilled craftspeople preserving ancient techniques and bringing traditional toys to modern audiences.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
