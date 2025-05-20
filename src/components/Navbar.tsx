import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Search, Bell, User } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-md py-2' 
        : 'bg-white/80 backdrop-blur-sm shadow-sm py-3'
    }`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center gap-2 group">
            <img 
              src="/images/logo.png" 
              alt="Agriniri Evergreen Logo" 
              className="h-12 transition-transform duration-300 group-hover:scale-105" 
            />
            <span className="text-agri-green text-sm font-medium hidden lg:block group-hover:text-agri-green/80 transition-colors">
              Agriniri
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <a 
            href="/" 
            className={`relative text-foreground hover:text-agri-green transition-colors px-2 py-1 ${
              isActive('/') ? 'text-agri-green font-medium' : ''
            }`}
          >
            Home
            {isActive('/') && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-agri-green rounded-full" />}
          </a>
          
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

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={toggleSearch}
            className="text-gray-600 hover:text-agri-green transition-colors"
            aria-label="Search"
          >
            <Search size={20} />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon"
            className="text-gray-600 hover:text-agri-green transition-colors relative"
            aria-label="Notifications"
          >
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              2
            </span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={toggleSearch}
            className="text-gray-600"
            aria-label="Search"
          >
            <Search size={20} />
          </Button>
          
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

      {/* Search Bar (conditionally shown) */}
      {showSearch && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md p-3 border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="container mx-auto">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search for resources, products, or topics..." 
                className="w-full py-2 pl-4 pr-10 rounded-lg border border-gray-200 focus:border-agri-green focus:ring-1 focus:ring-agri-green focus:outline-none"
                autoFocus
              />
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-agri-green"
              >
                <Search size={18} />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[57px] bg-white/95 z-40 animate-in fade-in slide-in-from-right duration-300">
          <div className="container mx-auto py-8 flex flex-col gap-6">
            <a 
              href="/" 
              className={`text-xl font-medium flex items-center ${isActive('/') ? 'text-agri-green' : 'text-foreground'} hover:text-agri-green transition-colors`}
              onClick={closeMenu}
            >
              Home
              {isActive('/') && <span className="ml-2 w-2 h-2 rounded-full bg-agri-green" />}
            </a>
            
            <Link
              to="/services" 
              className={`text-xl font-medium flex items-center ${isActive('/services') ? 'text-agri-green' : 'text-foreground'} hover:text-agri-green transition-colors`}
              onClick={closeMenu}
            >
              Services
              {isActive('/services') && <span className="ml-2 w-2 h-2 rounded-full bg-agri-green" />}
            </Link>
            
            <Link
              to="/how-it-works" 
              className={`text-xl font-medium flex items-center ${isActive('/how-it-works') ? 'text-agri-green' : 'text-foreground'} hover:text-agri-green transition-colors`}
              onClick={closeMenu}
            >
              How It Works
              {isActive('/how-it-works') && <span className="ml-2 w-2 h-2 rounded-full bg-agri-green" />}
            </Link>
            
            <Link
              to="/about-us" 
              className={`text-xl font-medium flex items-center ${isActive('/about-us') ? 'text-agri-green' : 'text-foreground'} hover:text-agri-green transition-colors`}
              onClick={closeMenu}
            >
              About Us
              {isActive('/about-us') && <span className="ml-2 w-2 h-2 rounded-full bg-agri-green" />}
            </Link>
            
            <Link
              to="/contact" 
              className={`text-xl font-medium flex items-center ${isActive('/contact') ? 'text-agri-green' : 'text-foreground'} hover:text-agri-green transition-colors`}
              onClick={closeMenu}
            >
              Contact
              {isActive('/contact') && <span className="ml-2 w-2 h-2 rounded-full bg-agri-green" />}
            </Link>

            <div className="pt-4 border-t border-gray-100">
              {/* Removed Sign In button */}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
