import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Sprout, ShoppingCart, Truck } from 'lucide-react';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  
  useEffect(() => {
    // Trigger animations after component mounts
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const playVideo = () => {
    setVideoPlaying(true);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden py-8 md:py-0">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1493962853295-0fd70327578a" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60 md:to-transparent"></div>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row w-full h-full">
        {/* Content with staggered fade-in animations */}
        <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start">
          <div className="px-6 md:px-12 lg:px-16 py-8 md:py-0 w-full text-center md:text-left">
            <div className={`inline-block bg-agri-green/20 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-3 md:mb-4 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <span className="text-agri-green-light font-medium text-xs md:text-sm flex items-center">
                <Sprout className="h-3 w-3 md:h-4 md:w-4 mr-1.5 md:mr-2" /> 
                Transforming Agriculture Since 2025
              </span>
            </div>
            
            <h1 
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 transition-all duration-700 ease-out leading-tight ${
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
              className={`text-lg sm:text-xl md:text-2xl text-white/90 mb-6 md:mb-8 transition-all duration-700 delay-300 ease-out max-w-lg mx-auto md:mx-0 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Fresh produce, direct from farms to your business
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-3 md:gap-4 transition-all duration-700 delay-400 ease-out justify-center md:justify-start ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <Button 
                onClick={scrollToContact}
                className="bg-agri-green text-white hover:bg-agri-green-dark text-base md:text-lg py-5 md:py-6 px-6 md:px-8 rounded-full hover:scale-105 transition-transform flex items-center gap-2 shadow-lg shadow-agri-green/20"
              >
                Contact Us <ArrowDown className="h-4 w-4 animate-bounce" />
              </Button>
              
              <Button 
                variant="outline"
                className="border-white/30 hover:bg-white/10 text-base md:text-lg py-5 md:py-6 px-6 md:px-8 rounded-full backdrop-blur-sm transition-all flex items-center gap-2"
              >
                Learn More
              </Button>
            </div>
            
            {/* Feature Highlights - Center on mobile, left-aligned on desktop */}
            <div className={`mt-8 md:mt-12 flex flex-row items-center justify-center md:justify-start space-x-6 lg:space-x-10 w-full transition-all duration-700 delay-500 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>
              <div className="flex items-center gap-2 md:gap-3">
                <div className="bg-agri-green/20 p-1.5 md:p-2 rounded-full">
                  <ShoppingCart className="h-4 w-4 md:h-5 md:w-5 text-agri-green-light" />
                </div>
                <span className="text-white/80 text-xs md:text-sm">Quality Produce</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <div className="bg-agri-green/20 p-1.5 md:p-2 rounded-full">
                  <Truck className="h-4 w-4 md:h-5 md:w-5 text-agri-green-light" />
                </div>
                <span className="text-white/80 text-xs md:text-sm">Direct Delivery</span>
              </div>
            </div>
          </div>
        </div>

        {/* Video Embedding with Frame */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-4 mt-4 md:mt-0">
          <div className={`w-full max-w-lg md:max-w-none md:h-5/6 h-64 sm:h-80 rounded-xl md:rounded-2xl overflow-hidden border-2 md:border-4 border-white/10 shadow-xl md:shadow-2xl transition-all duration-1000 relative ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}>
            <iframe 
              src={`https://www.youtube.com/embed/Mi0QycA81go?controls=1&showinfo=0${videoPlaying ? '&autoplay=1' : ''}`}
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen 
              className="w-full h-full"
            ></iframe>
            {!videoPlaying && (
              <div 
                onClick={playVideo}
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/20 transition-colors cursor-pointer group"
              >
                <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 md:w-10 md:h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
