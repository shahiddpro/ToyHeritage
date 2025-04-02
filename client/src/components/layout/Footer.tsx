import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-[#1A237E] py-12 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-[#E64A19]">
                  <path d="M17.5 7.5c.82.82 2.13.82 2.95 0l.5-.5c.82-.82.82-2.13 0-2.95l-3-3c-.82-.82-2.13-.82-2.95 0l-.5.5c-.82.82-.82 2.13 0 2.95z" />
                  <path d="M3 21h18" />
                  <path d="M12.77 10L8.83 6.078a1.967 1.967 0 00-2.775 0l-.082.083a1.967 1.967 0 000 2.775L9.927 13" />
                  <path d="M9.17 11.636l-2.292 2.292a3.908 3.908 0 00-1.144 2.77V17" />
                  <path d="M16.95 14.95a1 1 0 101.414-1.414l-1.414 1.414z" />
                  <path d="M11 9l4.95 4.95" />
                </svg>
              </div>
              <span className="font-serif text-2xl text-white">Toy<span className="text-[#FFD700]">Craft</span></span>
            </div>
            
            <p className="text-white text-opacity-80 mb-6">
              Preserving India's toy heritage by connecting artisans with global markets and sharing cultural knowledge.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-white bg-opacity-10 rounded-full flex items-center justify-center text-white hover:bg-opacity-20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-white bg-opacity-10 rounded-full flex items-center justify-center text-white hover:bg-opacity-20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-white bg-opacity-10 rounded-full flex items-center justify-center text-white hover:bg-opacity-20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-white bg-opacity-10 rounded-full flex items-center justify-center text-white hover:bg-opacity-20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/">
                  <a className="text-white text-opacity-80 hover:text-opacity-100 transition-colors">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-white text-opacity-80 hover:text-opacity-100 transition-colors">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/regions">
                  <a className="text-white text-opacity-80 hover:text-opacity-100 transition-colors">Shop by Region</a>
                </Link>
              </li>
              <li>
                <Link href="/shop">
                  <a className="text-white text-opacity-80 hover:text-opacity-100 transition-colors">Toy Categories</a>
                </Link>
              </li>
              <li>
                <Link href="/artisans">
                  <a className="text-white text-opacity-80 hover:text-opacity-100 transition-colors">Meet the Artisans</a>
                </Link>
              </li>
              <li>
                <a href="#" className="text-white text-opacity-80 hover:text-opacity-100 transition-colors">Blog & Stories</a>
              </li>
              <li>
                <a href="#" className="text-white text-opacity-80 hover:text-opacity-100 transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-6">Toy Traditions</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white text-opacity-80 hover:text-opacity-100 transition-colors">Channapatna Toys</a>
              </li>
              <li>
                <a href="#" className="text-white text-opacity-80 hover:text-opacity-100 transition-colors">Kondapalli Crafts</a>
              </li>
              <li>
                <a href="#" className="text-white text-opacity-80 hover:text-opacity-100 transition-colors">Rajasthani Puppets</a>
              </li>
              <li>
                <a href="#" className="text-white text-opacity-80 hover:text-opacity-100 transition-colors">Bengali Clay Dolls</a>
              </li>
              <li>
                <a href="#" className="text-white text-opacity-80 hover:text-opacity-100 transition-colors">Varanasi Wooden Toys</a>
              </li>
              <li>
                <a href="#" className="text-white text-opacity-80 hover:text-opacity-100 transition-colors">Kerala Shadow Puppets</a>
              </li>
              <li>
                <a href="#" className="text-white text-opacity-80 hover:text-opacity-100 transition-colors">Assamese Bamboo Toys</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-6">Contact & Support</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FFD700] mt-1 mr-3">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="text-white text-opacity-80">123 Heritage Lane, Crafts District, Bangalore, Karnataka 560001</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FFD700] mt-1 mr-3">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <span className="text-white text-opacity-80">connect@toycraftindia.com</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FFD700] mt-1 mr-3">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span className="text-white text-opacity-80">+91 98765 43210</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <h5 className="font-medium text-white text-sm mb-3">Secure Payment Options</h5>
              <div className="flex space-x-3">
                <div className="w-10 h-6 bg-white rounded flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1A237E]">
                    <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                    <line x1="2" x2="22" y1="10" y2="10"></line>
                  </svg>
                </div>
                <div className="w-10 h-6 bg-white rounded flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1A237E]">
                    <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                    <line x1="2" x2="22" y1="10" y2="10"></line>
                  </svg>
                </div>
                <div className="w-10 h-6 bg-white rounded flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1A237E]">
                    <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                    <line x1="2" x2="22" y1="10" y2="10"></line>
                  </svg>
                </div>
                <div className="w-10 h-6 bg-white rounded flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1A237E]">
                    <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                    <line x1="2" x2="22" y1="10" y2="10"></line>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white border-opacity-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-opacity-60 text-sm mb-4 md:mb-0">© 2023 ToyCraft India. All rights reserved.</p>
            
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <a href="#" className="text-white text-opacity-60 text-sm hover:text-opacity-100">Terms of Service</a>
              <a href="#" className="text-white text-opacity-60 text-sm hover:text-opacity-100">Privacy Policy</a>
              <a href="#" className="text-white text-opacity-60 text-sm hover:text-opacity-100">Shipping Policy</a>
              <a href="#" className="text-white text-opacity-60 text-sm hover:text-opacity-100">Return & Refund</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
