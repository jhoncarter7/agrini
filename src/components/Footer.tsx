import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  const { toast } = useToast();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Subscription Successful!",
      description: "You've been added to our newsletter.",
      duration: 5000,
    });
    
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-gray-300 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <pattern id="footer-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="2" fill="#fff"></circle>
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#footer-pattern)"></rect>
        </svg>
      </div>
      
      <div className="relative">
        {/* Wave Top */}
        <div className="absolute top-0 left-0 right-0 h-8 overflow-hidden -translate-y-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-12 text-gray-900">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
          </svg>
        </div>
        
        <div className="container mx-auto px-6 pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-10">
            <div className="md:col-span-5">
              <div className="flex items-center mb-6">
                <img 
                  src="/images/logo.png" 
                  alt="Agriniri Evergreen Logo" 
                  className="h-10 mr-2 bg-white p-1 rounded"
                />
                <div className="ml-2">
                  <div className="text-white font-medium">Agriniri Evergreen</div>
                  <div className="text-xs text-gray-400">Private Limited</div>
                </div>
              </div>
              
              <p className="mb-8 text-gray-400">
                Transforming agriculture through innovative technology solutions that empower farmers and promote sustainable practices.
              </p>
              
              <div className="space-y-4 mb-10">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-emerald-400 mr-3" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-emerald-400 mr-3" />
                  <span>contact@agrinirievergreen.com</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-emerald-400 mr-3 mt-1" />
                  <span>123 Green Avenue, Tech Park<br />Bangalore, Karnataka 560001</span>
                </div>
              </div>
              
              {/* Social Media Icons - Moved here */}
              <div className="flex gap-4 mb-8">
                <a href="#" className="bg-gray-800 hover:bg-emerald-500 text-white p-2 rounded-full transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-emerald-500 text-white p-2 rounded-full transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-emerald-500 text-white p-2 rounded-full transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-emerald-500 text-white p-2 rounded-full transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div className="md:col-span-3 md:col-start-7">
              <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-emerald-400 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></span>Home
                </a></li>
                <li><a href="#services" className="hover:text-emerald-400 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></span>Services
                </a></li>
                <li><a href="#how-it-works" className="hover:text-emerald-400 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></span>How It Works
                </a></li>
                <li><a href="#about-us" className="hover:text-emerald-400 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></span>About Us
                </a></li>
                <li><a href="#contact" className="hover:text-emerald-400 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></span>Contact
                </a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 mt-10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm order-2 md:order-1 mt-4 md:mt-0">
              &copy; {new Date().getFullYear()} Agriniri Evergreen Private Limited. All rights reserved.
            </p>
            
            {/* Removed social media icons from here */}
          </div>
        </div>
      </div>
    </footer>
  );
}
