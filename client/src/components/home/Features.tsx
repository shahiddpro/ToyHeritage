const featuresData = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E64A19]">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
      </svg>
    ),
    title: "Artisan Made",
    description: "Supporting traditional craftspeople"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E64A19]">
        <path d="M13.41 10.59a2 2 0 0 0 0 2.82l8.18 8.18A2 2 0 0 0 24 20.18v-8.36a2 2 0 0 0-2.41-1.96L13.41 10.59Z"></path>
        <path d="M15.62 5.22 10.59 13.4a2 2 0 0 0 0 2.82L18.78 8.4a2 2 0 0 0-1.39-3.46l-1.77.28Z"></path>
        <path d="M8.4 18.78 5.22 8.38a2 2 0 0 0-3.46 1.4l.28 1.76v1.41a2 2 0 0 0 .32 1.1L8.4 22.61a2 2 0 0 0 2.82-2.82L8.4 18.78Z"></path>
      </svg>
    ),
    title: "Authentic Designs",
    description: "True to cultural heritage"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E64A19]">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
      </svg>
    ),
    title: "Educational",
    description: "Learn about rich toy traditions"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E64A19]">
        <path d="M12 2v20"></path>
        <path d="M2 12h20"></path>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        <path d="M2 12a15.3 15.3 0 0 1 10-4 15.3 15.3 0 0 1 10 4 15.3 15.3 0 0 1-10 4 15.3 15.3 0 0 1-10-4z"></path>
      </svg>
    ),
    title: "Eco-Friendly",
    description: "Sustainable natural materials"
  }
];

const Features = () => {
  return (
    <div className="container mx-auto px-4 -mt-20 relative z-10">
      <div className="bg-white shadow-xl rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {featuresData.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-[#FF7043] bg-opacity-20 flex items-center justify-center mb-3">
              {feature.icon}
            </div>
            <h3 className="font-medium text-gray-900">{feature.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
