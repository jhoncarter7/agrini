import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Clock, ShoppingBag, Trash2, Link2Off, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export function HarshReality() {
  const [activeItem, setActiveItem] = useState(0);
  
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const items = [
    {
      icon: Clock,
      title: "16-Hour Workdays",
      description: "Retailers often work from early morning to late night.",
      caption: "Yet they earn just ₹500–₹800 per day.",
      color: "#ef4444",
      bgGradient: "from-red-500/20 to-red-600/5",
      stats: "16+ hours",
    },
    {
      icon: ShoppingBag,
      title: "Mandi Mayhem",
      description: "Early morning trips, inconsistent prices, no support.",
      caption: "Unpredictable market conditions create daily challenges.",
      color: "#f59e0b",
      bgGradient: "from-amber-500/20 to-amber-600/5",
      stats: "4 AM trips",
    },
    {
      icon: Trash2,
      title: "30% Wastage on Average",
      description: "Unsold stock leads to financial losses every day.",
      caption: "Significant environmental impact from food waste.",
      color: "#03A9F4",
      bgGradient: "from-blue-500/20 to-blue-600/5",
      stats: "30%",
    },
    {
      icon: Link2Off,
      title: "Outdated & Inefficient",
      description: "The entire supply chain leads to 20–30% vegetable loss.",
      caption: "Lack of technology integration perpetuates the problem.",
      color: "#9333ea",
      bgGradient: "from-purple-500/20 to-purple-600/5",
      stats: "20-30%",
    }
  ];

  return (
    <section 
      id="harsh-reality" 
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-[#141414]">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <pattern id="pattern-circles" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
              <circle id="pattern-circle" cx="10" cy="10" r="1.6257413380501518" fill="#fff"></circle>
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className={cn(
          "max-w-3xl mx-auto mb-16 transition-all duration-700 ease-out",
          sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wide bg-red-500/10 text-red-400 mb-4">
              THE HARSH REALITY
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 relative inline-block">
              Problems with <span className="text-red-400">Vegetable Retailing</span>
              <svg className="absolute -bottom-2 left-0 w-full h-2 text-red-500/20" viewBox="0 0 200 8" preserveAspectRatio="none">
                <path d="M0,0 C50,6 150,6 200,0 L200,8 L0,8 Z" fill="currentColor" />
              </svg>
            </h2>
          </div>
          <p className="text-gray-300 text-lg text-center mt-6 max-w-xl mx-auto">
            Despite being essential to our food supply, vegetable retailers face extreme challenges that threaten their livelihoods and the entire supply chain.
          </p>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Stats Column */}
          <div className="lg:col-span-5">
            <div className={cn(
              "transition-all duration-700 ease-out bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-2xl border border-gray-800",
              sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              {items.map((item, index) => (
                <div 
                  key={index}
                  className={cn(
                    "p-5 border-l-4 cursor-pointer transition-all",
                    activeItem === index ? `bg-gradient-to-r ${item.bgGradient}` : "hover:bg-[#222]",
                    index !== items.length - 1 ? "border-b border-gray-800" : ""
                  )}
                  style={{ borderLeftColor: item.color }}
                  onClick={() => setActiveItem(index)}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center opacity-90"
                        style={{ backgroundColor: `${item.color}15` }}
                      >
                        <item.icon 
                          className="w-6 h-6" 
                          style={{ color: item.color }}
                        />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      <p className="text-sm text-gray-400 mt-1">{item.description}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <ChevronRight 
                        className={cn(
                          "w-5 h-5 text-gray-500 transition-transform",
                          activeItem === index ? "transform rotate-90" : ""
                        )}
                      />
                    </div>
                  </div>
                  
                  <div className={cn(
                    "mt-4 overflow-hidden transition-all",
                    activeItem === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  )}>
                    <p className="text-sm text-gray-300 mb-3">{item.caption}</p>
                    <div 
                      className="mt-3 pt-3 border-t border-gray-700/30"
                      style={{ borderColor: `${item.color}30` }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-xs uppercase tracking-wider text-gray-500">Impact</span>
                        <span 
                          className="text-xl font-bold"
                          style={{ color: item.color }}
                        >{item.stats}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Visual Column */}
          <div className="lg:col-span-7">
            <div className={cn(
              "relative transition-all duration-1000 ease-out rounded-2xl overflow-hidden",
              sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}>
              {/* Dynamic Content Based on Active Item */}
              <div 
                className="h-[500px] bg-cover bg-center rounded-2xl relative"
                style={{
                  backgroundImage: activeItem === 0 
                    ? "url('https://images.unsplash.com/photo-1573743338941-39db12ef9b64?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" 
                    : activeItem === 1
                    ? "url('https://images.unsplash.com/photo-1534723452862-4c874018d66d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"
                    : activeItem === 2
                    ? "url('https://images.unsplash.com/photo-1579113800032-c38bd7635818?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"
                    : "url('https://images.unsplash.com/photo-1562440499-64c9a111f713?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"
                }}
              >
                {/* Overlay Gradient */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br"
                  style={{ 
                    background: `linear-gradient(to bottom right, 
                      ${items[activeItem].color}80, 
                      ${items[activeItem].color}30, 
                      transparent)` 
                  }}
                ></div>
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div 
                    className="inline-block px-4 py-2 rounded-full text-xs font-medium tracking-wide text-white mb-4 w-fit"
                    style={{ backgroundColor: items[activeItem].color }}
                  >
                    Problem {activeItem + 1}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                    {items[activeItem].title}
                  </h3>
                  <p className="text-xl text-white/80 max-w-xl">
                    {items[activeItem].description} {items[activeItem].caption}
                  </p>

                  <div className="mt-8">
                    <div 
                      className="w-full h-2 bg-white/20 rounded-full overflow-hidden"
                    >
                      <div 
                        className="h-full transition-all duration-500 ease-out"
                        style={{ 
                          width: `${(activeItem + 1) / items.length * 100}%`,
                          backgroundColor: items[activeItem].color
                        }}
                      ></div>
                    </div>
                    <div className="flex justify-between mt-2 text-sm text-white/60">
                      <span>Problem 1</span>
                      <span>Problem {items.length}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className={cn(
          "max-w-4xl mx-auto mt-20 rounded-xl overflow-hidden transition-all duration-700 ease-out",
          sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="bg-gradient-to-r from-red-500/80 to-red-600/80 p-8 relative">
            <div className="absolute top-0 right-0 w-64 h-full opacity-20">
              <svg viewBox="0 0 200 600" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.1,-61.1C46.2,-53.8,53.4,-42.6,59.8,-30.8C66.2,-19,71.8,-6.5,70.3,5.2C68.7,16.9,60,27.8,50.5,36.5C41,45.2,30.8,51.8,19.2,57.9C7.7,64.1,-5.1,69.8,-18.9,69.7C-32.7,69.6,-47.5,63.7,-57.6,53.3C-67.8,42.8,-73.5,27.7,-74.3,12.9C-75.1,-1.9,-71.1,-16.5,-65.3,-30.5C-59.6,-44.5,-52.1,-57.9,-41.1,-64.9C-30.1,-71.8,-15,-72.3,-0.9,-70.9C13.3,-69.5,26.6,-66.2,36.1,-61.1Z" transform="translate(100 300)" fill="#fff"/>
              </svg>
            </div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">These challenges affect everyone</h3>
              <p className="text-white/90 text-lg max-w-2xl mx-auto">
                From farmers to consumers, the entire supply chain suffers from inefficiency, waste, and missed opportunities for better livelihoods.
              </p>
              <div className="mt-6 flex justify-center space-x-4">
                <button className="px-6 py-3 bg-white text-red-600 rounded-full font-medium hover:bg-white/90 transition-colors shadow-lg">
                  Learn How We Solve This
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
