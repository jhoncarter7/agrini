
import { useState, useEffect } from 'react';
import { ShoppingCart, Check, Truck, RotateCcw, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function RetailersServices() {
  const [activeStep, setActiveStep] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  const steps = [
    {
      icon: <ShoppingCart className="h-12 w-12 text-agri-green" />,
      title: "Platform Onboarding",
      description: "Simple registration process that connects retailers to our platform in minutes. Start selling fresh produce with minimal setup.",
    },
    {
      icon: <Check className="h-12 w-12 text-agri-green" />,
      title: "Shop Setup Kits",
      description: "Collapsible shop setup kits including cart, gloves, fan, and essential tools to kickstart your vegetable retail business.",
    },
    {
      icon: <Truck className="h-12 w-12 text-agri-green" />,
      title: "Doorstep Delivery",
      description: "Fresh vegetables delivered to your doorstep every morning. Quality assured produce straight from farms to your business.",
    },
    {
      icon: <RotateCcw className="h-12 w-12 text-agri-green" />,
      title: "Return Logistics",
      description: "We handle return logistics for unsold vegetables, reducing waste and ensuring you only pay for what you sell.",
    }
  ];

  return (
    <section id="services-retailers" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 flex items-center justify-center gap-2">
            <ShoppingCart className="h-7 w-7 text-agri-green" />
            <span>For Retailers</span>
          </h2>
          <div className="w-16 h-1 bg-agri-green/60 mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Boost your business with our end-to-end retail support system
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Left Side: Animated steps */}
          <div className="bg-gray-50 rounded-xl p-6 md:p-8 shadow-sm border border-gray-100 hover:border-agri-green/20 transition-colors">
            <div className="relative h-[220px]">
              {steps.map((step, idx) => (
                <div 
                  key={idx} 
                  className={`transition-all duration-500 ease-out absolute top-0 left-0 right-0 ${
                    activeStep === idx 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4'
                  }`}
                >
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="mb-4 p-3 bg-agri-green/10 rounded-full">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Step indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {steps.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    activeStep === idx ? 'bg-agri-green' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to step ${idx + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Right Side: Benefits */}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-5 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-agri-green" />
              Benefits for Retailers
            </h3>
            <ul className="space-y-3 mb-6">
              {[
                "Reduce initial investment costs with our shop setup kits",
                "Access high-quality produce at competitive prices",
                "Save time with convenient morning deliveries",
                "Minimize losses with our return policy for unsold items",
                "Increase profit margins by 15-20% compared to traditional sourcing",
                "Join a network of successful retailers across the city"
              ].map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-agri-green mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">{benefit}</span>
                </li>
              ))}
            </ul>
            <div>
              <Button className="bg-agri-green hover:bg-agri-green-dark text-white font-medium rounded-md">
                Become a Retail Partner
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
