import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    closeMenu();
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={isScrolled 
      ? "fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-md py-2" 
      : "fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-sm shadow-sm py-3"
    }>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src="/images/logo.png" 
              alt="Agriniri Evergreen Logo" 
              className="h-10 md:h-12 transition-transform duration-300 group-hover:scale-105" 
            />
            <span className="text-agri-green text-sm font-medium hidden lg:block group-hover:text-agri-green/80 transition-colors">
              Agriniri
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link 
            to="/" 
            className={`relative text-foreground hover:text-agri-green transition-colors px-2 py-1 ${
              isActive('/') ? 'text-agri-green font-medium' : ''
            }`}
          >
            Home
            {isActive('/') && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-agri-green rounded-full" />}
          </Link>
          
          <Link 
            to="/services" 
            className={`relative text-foreground hover:text-agri-green transition-colors px-2 py-1 ${
              isActive('/services') ? 'text-agri-green font-medium' : ''
            }`}
          >
            Services
            {isActive('/services') && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-agri-green rounded-full" />}
          </Link>
          
          <Link 
            to="/how-it-works" 
            className={`relative text-foreground hover:text-agri-green transition-colors px-2 py-1 ${
              isActive('/how-it-works') ? 'text-agri-green font-medium' : ''
            }`}
          >
            How It Works
            {isActive('/how-it-works') && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-agri-green rounded-full" />}
          </Link>
          
          <Link 
            to="/about-us" 
            className={`relative text-foreground hover:text-agri-green transition-colors px-2 py-1 ${
              isActive('/about-us') ? 'text-agri-green font-medium' : ''
            }`}
          >
            About Us
            {isActive('/about-us') && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-agri-green rounded-full" />}
          </Link>
          
          <Link 
            to="/contact" 
            className={`relative text-foreground hover:text-agri-green transition-colors px-2 py-1 ${
              isActive('/contact') ? 'text-agri-green font-medium' : ''
            }`}
          >
            Contact
            {isActive('/contact') && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-agri-green rounded-full" />}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className={isMenuOpen ? "text-agri-green" : "text-gray-600"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[57px] bg-white z-50 pb-[22rem]">
          <div className="container mx-auto py-6 flex flex-col gap-5">
            <Link 
              to="/" 
              className={`text-lg font-medium flex items-center ${isActive('/') ? 'text-agri-green' : 'text-foreground'} hover:text-agri-green transition-colors`}
              onClick={closeMenu}
            >
              Home
              {isActive('/') && <span className="ml-2 w-2 h-2 rounded-full bg-agri-green" />}
            </Link>
            
            <Link 
              to="/services" 
              className={`text-lg font-medium flex items-center ${isActive('/services') ? 'text-agri-green' : 'text-foreground'} hover:text-agri-green transition-colors`}
              onClick={closeMenu}
            >
              Services
              {isActive('/services') && <span className="ml-2 w-2 h-2 rounded-full bg-agri-green" />}
            </Link>
            
            <Link
              to="/how-it-works" 
              className={`text-lg font-medium flex items-center ${isActive('/how-it-works') ? 'text-agri-green' : 'text-foreground'} hover:text-agri-green transition-colors`}
              onClick={closeMenu}
            >
              How It Works
              {isActive('/how-it-works') && <span className="ml-2 w-2 h-2 rounded-full bg-agri-green" />}
            </Link>
            
            <Link
              to="/about-us" 
              className={`text-lg font-medium flex items-center ${isActive('/about-us') ? 'text-agri-green' : 'text-foreground'} hover:text-agri-green transition-colors`}
              onClick={closeMenu}
            >
              About Us
              {isActive('/about-us') && <span className="ml-2 w-2 h-2 rounded-full bg-agri-green" />}
            </Link>
            
            <Link
              to="/contact" 
              className={`text-lg font-medium flex items-center ${isActive('/contact') ? 'text-agri-green' : 'text-foreground'} hover:text-agri-green transition-colors`}
              onClick={closeMenu}
            >
              Contact
              {isActive('/contact') && <span className="ml-2 w-2 h-2 rounded-full bg-agri-green" />}
            </Link>
          </div>
        </div>
      )}

      {/* Mobile Bottom Nav */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4 flex justify-around z-40 shadow-md">
        <Link to="/" className={`flex flex-col items-center ${isActive('/') ? 'text-agri-green' : 'text-gray-600'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          <span className="text-xs mt-1">Home</span>
        </Link>
        
        <button onClick={toggleMenu} className={`flex flex-col items-center ${isMenuOpen ? 'text-agri-green' : 'text-gray-600'}`}>
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          <span className="text-xs mt-1">Menu</span>
        </button>
      </div>
    </nav>
  );
}
