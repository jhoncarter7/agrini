import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Sprout, ShoppingCart, Truck } from 'lucide-react';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animations after component mounts
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1493962853295-0fd70327578a" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-transparent"></div>
      </div>

      <div className="relative z-10 flex w-full h-full">
        {/* Content with staggered fade-in animations */}
        <div className="w-1/2 flex items-center">
          <div className="px-8 md:px-12 lg:px-16">
            <div className={`inline-block bg-agri-green/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <span className="text-agri-green-light font-medium text-sm md:text-base flex items-center">
                <Sprout className="h-4 w-4 mr-2" /> 
                Transforming Agriculture Since 2020
              </span>
            </div>
            
            <h1 
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-700 ease-out leading-tight ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Redefining <span className="text-agri-green-light relative">
                Mandis
                <svg className="absolute -bottom-2 left-0 w-full h-2 text-agri-green-light/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,0 C25,8 75,8 100,0 L100,10 L0,10 Z" fill="currentColor" />
                </svg>
              </span>. 
              <br />Empowering <span className="text-agri-green-light relative">
                Retailers
                <svg className="absolute -bottom-2 left-0 w-full h-2 text-agri-green-light/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,0 C25,8 75,8 100,0 L100,10 L0,10 Z" fill="currentColor" />
                </svg>
              </span>.
            </h1>
            
            <p 
              className={`text-xl md:text-2xl text-white/90 mb-8 transition-all duration-700 delay-300 ease-out max-w-lg ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Fresh produce, direct from farms to your business
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-400 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <Button 
                onClick={scrollToContact}
                className="bg-agri-green text-white hover:bg-agri-green-dark text-lg py-6 px-8 rounded-full hover:scale-105 transition-transform flex items-center gap-2 shadow-lg shadow-agri-green/20"
              >
                Contact Us <ArrowDown className="h-4 w-4 animate-bounce" />
              </Button>
              
              <Button 
                variant="outline"
                className="border-white/30  hover:bg-white/10 text-lg py-6 px-8 rounded-full backdrop-blur-sm transition-all flex items-center gap-2"
              >
                Learn More
              </Button>
            </div>
            
            {/* Feature Highlights */}
            <div className={`mt-12 grid grid-cols-2 lg:w-3/4  transition-all duration-700 delay-500 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>
              <div className="flex items-center gap-3">
                <div className="bg-agri-green/20 p-2 rounded-full">
                  <ShoppingCart className="h-5 w-5 text-agri-green-light" />
                </div>
                <span className="text-white/80 text-sm">Quality Produce</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-agri-green/20 p-2 rounded-full">
                  <Truck className="h-5 w-5 text-agri-green-light" />
                </div>
                <span className="text-white/80 text-sm">Direct Delivery</span>
              </div>
            </div>
          </div>
        </div>

        {/* Video Embedding with Frame */}
        <div className="w-1/2 flex items-center justify-center p-4">
          <div className={`w-full mt-12 h-5/6 rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl transition-all duration-1000 relative ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}>
            <iframe 
              src="https://www.youtube.com/embed/Mi0QycA81go?controls=1&showinfo=0" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; pause; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen 
              className="w-full h-full"
            ></iframe>
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/20 transition-colors cursor-pointer group">
              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
