import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Sprout, Truck, ShoppingBag, Coins, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Solutions() {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const solutions = [
    {
      icon: Sprout,
      title: "Farm-Direct Sourcing",
      description: "We skip the mandi and buy straight from local farmers, ensuring fresher produce at better prices.",
      benefits: [
        "30% fresher produce",
        "Support local agriculture",
        "Complete traceability"
      ],
      color: "from-green-500 to-emerald-600",
      lightColor: "bg-green-50",
      iconColor: "text-emerald-600",
      image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      icon: Truck,
      title: "Smart Logistics Network",
      description: "Daily doorstep delivery with return pickup of unsold stock, eliminating waste and hassle.",
      benefits: [
        "Doorstep morning delivery",
        "Unsold stock returns",
        "Cold chain preserved"
      ],
      color: "from-blue-500 to-indigo-600", 
      lightColor: "bg-blue-50",
      iconColor: "text-blue-600",
      image: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      icon: ShoppingBag,
      title: "Complete Retail Setup",
      description: "We provide modern, collapsible carts and equipment, making it easy to start selling quickly.",
      benefits: [
        "Modern retail carts",
        "Essential equipment",
        "No upfront investment"
      ],
      color: "from-amber-500 to-orange-600",
      lightColor: "bg-amber-50",
      iconColor: "text-amber-600",
      image: "https://images.unsplash.com/photo-1588964895597-cfccd35c2887?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      icon: Coins,
      title: "Fair Commission Model",
      description: "Retailers earn 15–20% commission, ensuring a fair profit model so sellers grow with us.",
      benefits: [
        "15-20% commission",
        "Transparent pricing",
        "Growth incentives"
      ],
      color: "from-purple-500 to-violet-600",
      lightColor: "bg-purple-50", 
      iconColor: "text-purple-600",
      image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  return (
    <section 
      id="solutions" 
      ref={sectionRef}
      className="py-20 md:py-32 bg-gray-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <pattern id="pattern-hexagons" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0,20 L10,10 L20,20 L10,30 Z" fill="#075e54" fillOpacity="0.5"></path>
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-hexagons)"></rect>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className={cn(
          "max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ease-out",
          sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-6">
            OUR APPROACH
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            How We're <span className="text-emerald-600">Solving</span> This
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We've created an integrated approach that addresses every challenge in the vegetable retail ecosystem
          </p>
        </div>
        
        {/* Solutions */}
        <div className="space-y-16 md:space-y-24">
          {solutions.map((solution, index) => {
            const { ref, inView } = useInView({
              threshold: 0.2,
              triggerOnce: true,
            });
            
            return (
              <div 
                key={index}
                ref={ref}
                className={cn(
                  "grid grid-cols-1 md:grid-cols-12 gap-8 items-center",
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                )}
              >
                {/* Image Section (Alternating left/right) */}
                <div className={cn(
                  "md:col-span-5 order-2",
                  index % 2 === 0 ? "md:order-1" : "md:order-2"
                )}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
                    <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-40`}></div>
                    <img 
                      src={solution.image} 
                      alt={solution.title} 
                      className="w-full h-full object-cover aspect-[4/3]"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${solution.lightColor}`}>
                        <solution.icon className={`h-6 w-6 ${solution.iconColor}`} />
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {solution.title}
                      </h3>
                    </div>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className={cn(
                  "md:col-span-7 order-1",
                  index % 2 === 0 ? "md:order-2" : "md:order-1",
                  "transition-all duration-700 delay-300 ease-out",
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}>
                  <div className="bg-white p-8 rounded-xl shadow-md">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${solution.color} flex-shrink-0`}>
                        <solution.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-3">{solution.title}</h3>
                        <p className="text-gray-600 text-lg">{solution.description}</p>
                      </div>
                    </div>
                    
                    <div className="mt-8 space-y-4">
                      <h4 className="text-sm uppercase tracking-wider text-gray-500 font-medium">Key Benefits</h4>
                      <div className="space-y-3">
                        {solution.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center">
                            <Check className={`mr-2 h-5 w-5 ${solution.iconColor}`} />
                            <span className="text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* CTA Section */}
        <div className={cn(
          "mt-20 text-center transition-all duration-700 ease-out",
          sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Ready to revolutionize your vegetable retail business?</h3>
          <Button 
            className="bg-emerald-600 hover:bg-emerald-700 text-white py-6 px-8 rounded-full text-lg"
          >
            Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
