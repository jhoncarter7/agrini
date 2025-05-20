import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  Download, Wheat, Brain, SquareUserRound, BarChart3, ShoppingBag, ArrowRight, 
  CheckCircle, Star, ShieldCheck, Truck, Zap, Users
} from 'lucide-react';

export function AgriniriMobile() {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const steps = [
    {
      icon: SquareUserRound,
      title: "Sign Up & List Produce",
      description: "Quick registration for farmers to showcase their harvest.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Brain,
      title: "AI-Driven Analysis",
      description: "Smart algorithms process market data and trends in real-time.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: BarChart3,
      title: "Personalized Recommendations",
      description: "Retailers receive tailored suggestions based on predictions.",
      color: "from-purple-500 to-purple-700"
    },
    {
      icon: ShoppingBag,
      title: "Seamless Transactions",
      description: "Secure ordering and delivery tracking in one place.",
      color: "from-amber-500 to-orange-600"
    }
  ];

  const benefits = [
    {
      icon: CheckCircle, 
      title: "Higher Margins", 
      description: "Cut out the middlemen and increase your profits by 20-40%",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Star, 
      title: "Premium Quality", 
      description: "Access to the freshest produce, sorted and categorized by quality",
      color: "bg-amber-100 text-amber-600"
    },
    {
      icon: ShieldCheck, 
      title: "Reduced Risk", 
      description: "Minimize uncertainties with AI-driven demand predictions",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Truck, 
      title: "Direct Delivery", 
      description: "From farms to your doorstep, cutting transit time by 80%",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Zap, 
      title: "Real-time Updates", 
      description: "Stay informed with instant price and availability notifications",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: Users, 
      title: "Community Access", 
      description: "Connect with other retailers and farmers in your region",
      color: "bg-indigo-100 text-indigo-600"
    }
  ];

  return (
    <section 
      id="agriniri-mobile" 
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <pattern id="pattern-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <rect width="1" height="40" fill="#075e54" opacity="0.5"></rect>
            <rect width="40" height="1" fill="#075e54" opacity="0.5"></rect>
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-grid)"></rect>
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* App Hero Section */}
        <div className="relative rounded-3xl overflow-hidden mb-24 bg-gradient-to-r from-emerald-900/90 to-green-800/80 shadow-2xl">
          <div className="absolute right-0 top-0 h-full w-1/2 opacity-20">
            <svg viewBox="0 0 200 800" xmlns="http://www.w3.org/2000/svg">
              <path d="M36.1,-61.1C46.2,-53.8,53.4,-42.6,59.8,-30.8C66.2,-19,71.8,-6.5,70.3,5.2C68.7,16.9,60,27.8,50.5,36.5C41,45.2,30.8,51.8,19.2,57.9C7.7,64.1,-5.1,69.8,-18.9,69.7C-32.7,69.6,-47.5,63.7,-57.6,53.3C-67.8,42.8,-73.5,27.7,-74.3,12.9C-75.1,-1.9,-71.1,-16.5,-65.3,-30.5C-59.6,-44.5,-52.1,-57.9,-41.1,-64.9C-30.1,-71.8,-15,-72.3,-0.9,-70.9C13.3,-69.5,26.6,-66.2,36.1,-61.1Z" transform="translate(100 400)" fill="#fff"/>
            </svg>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-12 lg:p-16">
            <div className={cn(
              "transition-all duration-1000 ease-out",
              sectionInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            )}>
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6">
                AGRINIRI MOBILE APP
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Smart Agriculture<br />in Your Pocket
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-lg">
                Connect farmers directly with retailers through an AI-powered ecosystem that predicts demand, optimizes pricing, and reduces waste.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white hover:bg-white/90 text-emerald-800 hover:text-emerald-900 font-medium">
                  <Download className="mr-2 h-5 w-5" /> Coming soon
                </Button>
                <Button variant="outline" size="lg" className="border-white hover:bg-white/10">
                  See Features <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              
              <div className="mt-12 flex gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">10k+</div>
                  <div className="text-white/70 text-sm">Farmers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">5k+</div>
                  <div className="text-white/70 text-sm">Retailers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">30%</div>
                  <div className="text-white/70 text-sm">Less Waste</div>
                </div>
              </div>
            </div>
            
            <div className={cn(
              "flex justify-center items-center transition-all duration-1000 ease-out relative",
              sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}>
              {/* Floating App UI */}
              <div className="relative">
                <div className="absolute -right-6 -top-6 w-20 h-20 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full blur-lg opacity-70"></div>
                <div className="absolute -left-8 -bottom-6 w-24 h-24 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full blur-lg opacity-70"></div>
                
                <div className="relative w-[280px] h-[580px] md:w-[320px] md:h-[650px] bg-white rounded-[40px] border-[14px] border-gray-900 shadow-2xl overflow-hidden">
                  <div className="h-8 bg-gray-900 w-full relative flex items-center justify-center">
                    <div className="w-20 h-5 bg-gray-900 rounded-b-xl absolute -top-4"></div>
                  </div>
                  <div className="flex-grow bg-gray-100 h-full p-4 flex flex-col">
                    {/* App Header */}
                    <div className="bg-emerald-800 text-white py-3 px-4 rounded-lg mb-4 flex items-center justify-between">
                      <div className="flex items-center">
                        <Wheat className="h-6 w-6 mr-2" />
                        <span className="font-medium">AgriniriMobile</span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <span className="text-sm font-medium">RS</span>
                      </div>
                    </div>
                    
                    {/* Markets Section */}
                    <div className="bg-white rounded-lg shadow p-3 mb-4">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="font-medium">Today's Markets</h3>
                        <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">Live</span>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-2">
                              <span className="text-xs">🍅</span>
                            </div>
                            <div>
                              <div className="text-sm font-medium">Tomatoes</div>
                              <div className="text-xs text-gray-500">Premium Quality</div>
                            </div>
                          </div>
                          <div className="text-sm font-medium text-emerald-700">₹25/kg</div>
                        </div>
                        
                        <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-2">
                              <span className="text-xs">🥔</span>
                            </div>
                            <div>
                              <div className="text-sm font-medium">Potatoes</div>
                              <div className="text-xs text-gray-500">Farm Fresh</div>
                            </div>
                          </div>
                          <div className="text-sm font-medium text-emerald-700">₹18/kg</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* AI Recommendations */}
                    <div className="bg-white rounded-lg shadow p-3 mb-4">
                      <h3 className="font-medium mb-3">AI Recommendations</h3>
                      
                      <div className="p-3 bg-emerald-50 rounded-lg mb-3">
                        <div className="flex items-center mb-2">
                          <Brain className="h-4 w-4 text-emerald-600 mr-2" />
                          <span className="text-sm text-emerald-700 font-medium">Smart Suggestion</span>
                        </div>
                        <p className="text-xs text-gray-600 mb-2">
                          Based on tomorrow's demand forecast, consider buying:
                        </p>
                        <div className="flex justify-between mb-1">
                          <span className="text-xs">Cauliflower</span>
                          <span className="text-xs text-emerald-600">95% match</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div className="bg-emerald-600 h-1.5 rounded-full" style={{ width: "95%" }}></div>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="text-xs text-gray-500">Updated 12 minutes ago</div>
                        <Button variant="ghost" size="sm" className="text-xs h-7 text-emerald-700">
                          View All
                        </Button>
                      </div>
                    </div>
                    
                    {/* Navigation Bar */}
                    <div className="mt-auto rounded-xl bg-white shadow-lg p-3 flex justify-around">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-emerald-100">
                          <Wheat className="h-4 w-4 text-emerald-700" />
                        </div>
                        <span className="text-[10px] mt-1 text-emerald-800">Market</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100">
                          <BarChart3 className="h-4 w-4 text-gray-500" />
                        </div>
                        <span className="text-[10px] mt-1 text-gray-500">Insights</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100">
                          <ShoppingBag className="h-4 w-4 text-gray-500" />
                        </div>
                        <span className="text-[10px] mt-1 text-gray-500">Orders</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium tracking-wide bg-emerald-100 text-emerald-800 mb-4">
              SIMPLE PROCESS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How AgriniriMobile Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From farm to table, our app streamlines the entire process with AI-powered technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {steps.map((step, index) => {
              const { ref, inView } = useInView({
                threshold: 0.2,
                triggerOnce: true,
                delay: 100 * index,
              });
              
              return (
                <div 
                  key={index}
                  ref={ref}
                  className={cn(
                    "relative transition-all duration-700 ease-out",
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                >
                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[calc(100%-10px)] w-full h-0.5 bg-gray-200 -z-10">
                      <div className={cn(
                        "absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-500 to-emerald-600 transition-all duration-1000",
                        inView ? "w-full" : "w-0"
                      )}></div>
                    </div>
                  )}
                  
                  {/* Step Circle */}
                  <div className="relative mb-6 flex justify-center">
                    <div className={cn(
                      "w-20 h-20 rounded-full bg-gradient-to-r flex items-center justify-center text-white transition-all duration-500",
                      step.color,
                      inView ? "scale-100" : "scale-50"
                    )}>
                      <step.icon className="w-8 h-8" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-emerald-800 font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-center">{step.title}</h3>
                  <p className="text-gray-600 text-center">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium tracking-wide bg-emerald-100 text-emerald-800 mb-4">
              WHY USE AGRINIRI MOBILE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Benefits for Users</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform creates value for both farmers and retailers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const { ref, inView } = useInView({
                threshold: 0.2,
                triggerOnce: true,
                delay: 100 * index,
              });
              
              return (
                <div 
                  key={index} 
                  ref={ref}
                  className={cn(
                    "p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md bg-white transition-all duration-500",
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                >
                  <div className={`mb-4 p-3 rounded-full inline-block ${benefit.color}`}>
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium tracking-wide bg-emerald-100 text-emerald-800 mb-4">
              USER STORIES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={cn(
              "bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-all duration-700 ease-out",
              sectionInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            )}>
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 rounded-full bg-gray-200 mr-4">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-full h-full rounded-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Rajesh Kumar</h4>
                  <p className="text-sm text-gray-600">Vegetable Retailer</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "AgriniriMobile has completely transformed my business. I've cut costs by 25% while improving the quality of produce I sell. The AI recommendations are surprisingly accurate!"
              </p>
              <div className="flex text-amber-400">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
            </div>
            
            <div className={cn(
              "bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-all duration-700 ease-out",
              sectionInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            )}>
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 rounded-full bg-gray-200 mr-4">
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="w-full h-full rounded-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Priya Sharma</h4>
                  <p className="text-sm text-gray-600">Organic Farmer</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "As a small organic farmer, I struggled to find the right buyers. AgriniriMobile connected me with retailers who value quality produce, and my income has increased by 40%!"
              </p>
              <div className="flex text-amber-400">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={cn(
          "rounded-2xl overflow-hidden transition-all duration-700 ease-out relative",
          sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-green-600"></div>
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%">
              <pattern id="pattern-circles" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
                <circle id="pattern-circle" cx="10" cy="10" r="1.6257413380501518" fill="#fff"></circle>
              </pattern>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
            </svg>
          </div>
          
          <div className="relative p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Agri-Business?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of farmers and retailers who are already benefiting from our intelligent ecosystem
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-emerald-800 hover:bg-white/90">
                <Download className="mr-2 h-5 w-5" /> Coming soon
              </Button>
              <Button variant="outline" size="lg" className="border-white  hover:bg-white/10">
                Schedule Demo
              </Button>
            </div>
            
            <div className="mt-10 flex flex-wrap justify-center gap-6">
              <div className="flex items-center">
                <img src="/images/app.png" alt="App Store" className="h-10" />
              </div>
              <div className="flex items-center">
                <img src="/images/google.png" alt="Google Play" className="h-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
