import { useState, useEffect, useRef } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { 
  Smartphone, 
  Truck, 
  Warehouse, 
  ShoppingBasket, 
  DollarSign, 
  RefreshCcw,
  Leaf,
  Filter,
  Droplets,
  CheckCircle,
  ArrowRight,
  Star,
  ChevronDown
} from 'lucide-react';
import { 
  Card, 
  CardContent 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Custom hook to detect if element is in viewport
const useOnScreen = (options = {}): [React.RefObject<HTMLDivElement>, boolean] => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);
    
    const currentElement = ref.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return [ref, isVisible];
};

// Add custom step component for the new design
const ProcessStep = ({ 
  step, 
  title, 
  description, 
  icon: Icon, 
  color, 
  isActive,
  children
}) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
  
  return (
    <div 
      ref={ref}
      className={`mb-24 relative transition-all duration-700 ease-out ${isActive ? 'opacity-100' : 'opacity-85'} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
    >
      {/* Connection line */}
      {step > 1 && (
        <div className="absolute left-6 -top-24 w-0.5 h-24 bg-gradient-to-b from-transparent to-gray-200"></div>
      )}
      
      <div className="flex gap-8 flex-col md:flex-row items-start">
        {/* Left side with step number and icon */}
        <div className="md:w-14 flex flex-col items-center">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${color}`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="text-sm font-medium text-gray-400 mt-2">Step {step}</div>
        </div>
        
        {/* Right side with content */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-2 text-gray-800">{title}</h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl">{description}</p>
          
          {/* Content area */}
          <div className="bg-white/50 backdrop-blur-sm border border-gray-100 rounded-xl p-6 shadow-lg shadow-gray-100/50">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const [activeSection, setActiveSection] = useState(0);

  // References for each section
  const headerRef = useRef(null);
  const stepRefs = Array(6).fill(null).map(() => useRef(null));
  
  // Observer for header
  const [heroRef, isHeroVisible] = useOnScreen({ threshold: 0.3 });
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Update active section based on scroll position
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      // Find active section
      stepRefs.forEach((ref, index) => {
        if (ref.current) {
          const element = ref.current;
          const { top, bottom } = element.getBoundingClientRect();
          const elementTop = top + window.pageYOffset;
          
          if (scrollPosition >= elementTop && scrollPosition < elementTop + element.offsetHeight) {
            setActiveSection(index);
          }
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white relative">
      {/* Background texture */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-repeat" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.2' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")` 
        }}></div>
      </div>

      <Navbar />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="pt-32 pb-24 px-4 relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-20 left-0 w-64 h-64 bg-green-400/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-40 right-0 w-80 h-80 bg-blue-400/10 rounded-full filter blur-3xl"></div>
        
        <div 
          className={`container mx-auto max-w-6xl relative z-10 transition-all duration-1000 ease-out ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div className="flex justify-center mb-8">
            <Badge className="px-4 py-1 bg-green-100 text-green-800 hover:bg-green-100">Our Process</Badge>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-agri-green to-agri-blue">
            How It Works
          </h1>
          
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-center text-gray-600 mb-12 leading-relaxed">
            Revolutionizing agriculture with technology and <span className="font-semibold text-agri-green">transforming</span> the supply chain
          </p>
          
          <div className="relative max-w-md mx-auto h-12 mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-agri-green/20 to-agri-blue/20 rounded-full"></div>
            <div className="absolute inset-0 flex items-center justify-center px-6">
              <div className="flex items-center gap-6">
                {[
                  { Icon: Leaf, color: 'text-agri-green' },
                  { Icon: Truck, color: 'text-agri-brown' },
                  { Icon: Smartphone, color: 'text-agri-blue' },
                  { Icon: ShoppingBasket, color: 'text-agri-green' },
                  { Icon: DollarSign, color: 'text-amber-500' }
                ].map(({ Icon, color }, i) => (
                  <div key={i} className="w-8 h-8 flex items-center justify-center">
                    <Icon 
                      className={`${color} w-5 h-5 tws-bounce delay-[${i * 300}ms]`} 
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <button 
              className="flex items-center gap-2 text-agri-green font-medium tws-pulse"
              onClick={() => {
                window.scrollTo({ 
                  top: window.innerHeight * 0.8, 
                  behavior: 'smooth' 
                });
              }}
            >
              <span>Explore Our Process</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
      
      {/* Supply Chain Steps */}
      <section className="py-12 md:py-20 relative z-10">
        <div className="container mx-auto max-w-5xl px-4">
          {/* Quick navigation */}
          <div className="hidden md:flex justify-center mb-16 sticky top-20 z-20">
            <div className="bg-white/80 backdrop-blur-sm flex gap-2 rounded-full shadow-lg p-1">
              {Array(6).fill(null).map((_, index) => (
                <button
                  key={`nav-${index}`}
                  className={`py-2 px-4 rounded-full transition-all ${
                    activeSection === index 
                      ? 'bg-agri-green text-white shadow-md' 
                      : 'text-gray-600 hover:bg-green-50'
                  }`}
                  onClick={() => {
                    const element = document.getElementById(`step-${index + 1}`);
                    if (element) {
                      const y = element.getBoundingClientRect().top + window.scrollY - 100;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                  }}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
          
          {/* Step 1 */}
          <div id="step-1" ref={stepRefs[0]}>
            <ProcessStep
              step={1}
              title="Farmer Listing"
              description="Farmers use our platform to showcase their fresh produce directly to buyers."
              icon={Smartphone}
              color="bg-gradient-to-r from-blue-500 to-cyan-400"
              isActive={activeSection === 0}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Star className="w-5 h-5 text-blue-600" />
                    </div>
                    <h4 className="text-lg font-semibold">Real-Time Updates</h4>
                  </div>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 min-w-5 min-h-5 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-blue-600">1</span>
                      </div>
                      <span className="text-gray-700">Farmers photograph and upload their harvest</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 min-w-5 min-h-5 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-blue-600">2</span>
                      </div>
                      <span className="text-gray-700">Our app instantly lists available produce with quality details</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 min-w-5 min-h-5 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-blue-600">3</span>
                      </div>
                      <span className="text-gray-700">Price transparency ensures fair compensation</span>
                    </li>
                  </ul>
                </div>
                
                <div className="relative h-72">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-36 h-64 bg-white rounded-3xl shadow-xl p-3 overflow-hidden border-8 border-gray-800">
                      <div className="absolute inset-0 bg-gradient-to-br from-agri-blue to-agri-green opacity-20"></div>
                      <div className="bg-agri-blue h-6 w-full rounded-t-lg absolute top-0 left-0"></div>
                      <div className="absolute top-8 inset-x-3 bottom-3">
                        <div className="bg-white/80 p-2 rounded-lg mb-2 backdrop-blur-sm shadow-sm">
                          <div className="h-3 w-3/4 bg-gray-200 rounded mb-1"></div>
                          <div className="h-3 w-1/2 bg-gray-200 rounded"></div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-2 mt-4">
                          <div className="bg-green-50 rounded-lg p-2 shadow-sm">
                            <div className="w-8 h-8 bg-green-200 rounded-full mx-auto mb-1"></div>
                            <div className="h-2 bg-green-200 rounded mb-1"></div>
                            <div className="h-2 bg-green-200 rounded w-1/2 mx-auto"></div>
                          </div>
                          <div className="bg-blue-50 rounded-lg p-2 shadow-sm">
                            <div className="w-8 h-8 bg-blue-200 rounded-full mx-auto mb-1"></div>
                            <div className="h-2 bg-blue-200 rounded mb-1"></div>
                            <div className="h-2 bg-blue-200 rounded w-1/2 mx-auto"></div>
                          </div>
                          <div className="bg-amber-50 rounded-lg p-2 shadow-sm">
                            <div className="w-8 h-8 bg-amber-200 rounded-full mx-auto mb-1"></div>
                            <div className="h-2 bg-amber-200 rounded mb-1"></div>
                            <div className="h-2 bg-amber-200 rounded w-1/2 mx-auto"></div>
                          </div>
                          <div className="bg-red-50 rounded-lg p-2 shadow-sm">
                            <div className="w-8 h-8 bg-red-200 rounded-full mx-auto mb-1"></div>
                            <div className="h-2 bg-red-200 rounded mb-1"></div>
                            <div className="h-2 bg-red-200 rounded w-1/2 mx-auto"></div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-4 inset-x-0 flex justify-center">
                        <div className="w-16 h-1 bg-gray-300 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 right-4 tws-float">
                    <div className="bg-green-500 text-white p-2 rounded-lg shadow-lg">
                      <Leaf className="w-8 h-8" />
                    </div>
                  </div>
                </div>
              </div>
            </ProcessStep>
          </div>
          
          {/* Step 2 */}
          <div id="step-2" ref={stepRefs[1]}>
            <ProcessStep
              step={2}
              title="Procurement & Transport"
              description="We collect produce directly from farms and transport it efficiently to our processing centers."
              icon={Truck}
              color="bg-gradient-to-r from-amber-500 to-amber-600"
              isActive={activeSection === 1}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 relative h-72">
                  <div className="w-full h-full relative overflow-hidden rounded-xl bg-gradient-to-r from-green-50 to-amber-50">
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-amber-100/70 to-transparent"></div>
                    <div className="absolute bottom-4 w-full">
                      <div className="h-1 bg-amber-200 w-full"></div>
                    </div>
                    
                    <div className="absolute bottom-5 left-8 transform tws-truck">
                      <div className="relative">
                        <Truck className="w-16 h-16 text-amber-600" />
                        <div className="absolute top-2 right-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                          <Leaf className="w-4 h-4 text-green-600" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute top-4 left-4 flex flex-col items-center">
                      <div className="w-20 h-20 rounded-lg bg-green-100 flex items-center justify-center border-4 border-white shadow-lg">
                        <div className="relative">
                          <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                            <Leaf className="w-6 h-6 text-green-600" />
                          </div>
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                      <div className="mt-2 px-3 py-1 bg-white rounded-full shadow-md text-xs font-medium">Farm 1</div>
                    </div>
                    
                    <div className="absolute top-4 right-4 flex flex-col items-center">
                      <div className="w-20 h-20 rounded-lg bg-amber-100 flex items-center justify-center border-4 border-white shadow-lg">
                        <div className="relative">
                          <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center">
                            <Warehouse className="w-6 h-6 text-amber-600" />
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 px-3 py-1 bg-white rounded-full shadow-md text-xs font-medium">Warehouse</div>
                    </div>
                  </div>
                </div>
                
                <div className="order-1 md:order-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-amber-100 p-2 rounded-lg">
                      <Truck className="w-5 h-5 text-amber-600" />
                    </div>
                    <h4 className="text-lg font-semibold">Direct From Farms</h4>
                  </div>
                  
                  <ul className="space-y-4">
                    <li className="bg-amber-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex gap-3">
                        <div className="text-2xl font-bold text-amber-500">01</div>
                        <div>
                          <h5 className="font-medium">Fair Price Procurement</h5>
                          <p className="text-sm text-gray-600">We pay farmers 15-20% more than traditional markets</p>
                        </div>
                      </div>
                    </li>
                    <li className="bg-amber-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex gap-3">
                        <div className="text-2xl font-bold text-amber-500">02</div>
                        <div>
                          <h5 className="font-medium">Smart Logistics</h5>
                          <p className="text-sm text-gray-600">Optimized routes reduce transport costs and carbon emissions</p>
                        </div>
                      </div>
                    </li>
                    <li className="bg-amber-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex gap-3">
                        <div className="text-2xl font-bold text-amber-500">03</div>
                        <div>
                          <h5 className="font-medium">Quality Preservation</h5>
                          <p className="text-sm text-gray-600">Climate-controlled vehicles maintain freshness</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </ProcessStep>
          </div>
          
          {/* Step 3 */}
          <div id="step-3" ref={stepRefs[2]}>
            <ProcessStep
              step={3}
              title="Warehouse Operations"
              description="Advanced processing ensures the highest quality produce reaches your customers."
              icon={Warehouse}
              color="bg-gradient-to-r from-green-600 to-green-500"
              isActive={activeSection === 2}
            >
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <Card className="overflow-hidden border-0 shadow-lg bg-gradient-to-br from-green-50 to-white hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                        <Filter className="h-6 w-6 text-green-600" />
                      </div>
                      <h4 className="font-semibold text-lg mb-2">Sorting & Grading</h4>
                      <p className="text-gray-600 text-sm">
                        Using AI-powered imaging to sort vegetables by quality, size, and ripeness
                      </p>
                      <div className="mt-4 bg-green-100/50 p-2 rounded-lg">
                        <div className="text-xs font-medium text-green-800">Accuracy Rate</div>
                        <div className="flex items-center gap-2">
                          <div className="flex-grow h-2 bg-white rounded-full overflow-hidden">
                            <div className="h-full w-[95%] bg-green-500 rounded-full tws-progress"></div>
                          </div>
                          <div className="text-sm font-bold text-green-800">95%</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="overflow-hidden border-0 shadow-lg bg-gradient-to-br from-blue-50 to-white hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                        <Droplets className="h-6 w-6 text-blue-600" />
                      </div>
                      <h4 className="font-semibold text-lg mb-2">Cleaning</h4>
                      <p className="text-gray-600 text-sm">
                        Eco-friendly washing processes that preserve nutritional content
                      </p>
                      <div className="mt-4 bg-blue-100/50 p-2 rounded-lg">
                        <div className="text-xs font-medium text-blue-800">Water Recycled</div>
                        <div className="flex items-center gap-2">
                          <div className="flex-grow h-2 bg-white rounded-full overflow-hidden">
                            <div className="h-full w-[80%] bg-blue-500 rounded-full tws-progress delay-300"></div>
                          </div>
                          <div className="text-sm font-bold text-blue-800">80%</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="overflow-hidden border-0 shadow-lg bg-gradient-to-br from-amber-50 to-white hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="bg-amber-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                        <CheckCircle className="h-6 w-6 text-amber-600" />
                      </div>
                      <h4 className="font-semibold text-lg mb-2">Quality Control</h4>
                      <p className="text-gray-600 text-sm">
                        Multi-stage inspection process ensures only the best produce moves forward
                      </p>
                      <div className="mt-4 bg-amber-100/50 p-2 rounded-lg">
                        <div className="text-xs font-medium text-amber-800">Quality Standards</div>
                        <div className="flex items-center gap-2">
                          <div className="flex-grow h-2 bg-white rounded-full overflow-hidden">
                            <div className="h-full w-full bg-amber-500 rounded-full tws-progress delay-600"></div>
                          </div>
                          <div className="text-sm font-bold text-amber-800">100%</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="relative h-64 bg-gradient-to-r from-gray-50 to-green-50 rounded-xl overflow-hidden">
                  <div className="absolute inset-0">
                    <div className="h-full w-full flex items-center">
                      {/* Processing flow animation */}
                      <div className="flex w-full items-center justify-around">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg relative z-20 tws-scale-hover">
                          <Truck className="w-8 h-8 text-amber-500" />
                          <div className="absolute -right-1 -top-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            1
                          </div>
                        </div>
                        
                        <ArrowRight className="w-8 h-8 text-gray-300" />
                        
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg relative z-20 tws-scale-hover delay-100">
                          <Filter className="w-8 h-8 text-green-500" />
                          <div className="absolute -right-1 -top-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            2
                          </div>
                        </div>
                        
                        <ArrowRight className="w-8 h-8 text-gray-300" />
                        
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg relative z-20 tws-scale-hover delay-200">
                          <Droplets className="w-8 h-8 text-blue-500" />
                          <div className="absolute -right-1 -top-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            3
                          </div>
                        </div>
                        
                        <ArrowRight className="w-8 h-8 text-gray-300" />
                        
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg relative z-20 tws-scale-hover delay-300">
                          <CheckCircle className="w-8 h-8 text-green-500" />
                          <div className="absolute -right-1 -top-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            4
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Line connecting all elements */}
                    <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2 z-10"></div>
                  </div>
                </div>
              </div>
            </ProcessStep>
          </div>
          
          {/* Step 4 */}
          <div id="step-4" ref={stepRefs[3]}>
            <ProcessStep
              step={4}
              title="Retailer Orders via App"
              description="Empower retailers with a seamless ordering experience through our intuitive mobile platform."
              icon={ShoppingBasket}
              color="bg-gradient-to-r from-blue-500 to-indigo-500"
              isActive={activeSection === 3}
            >
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                <div className="md:col-span-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                  <h4 className="font-semibold text-xl mb-4 text-blue-900">Streamlined Ordering Process</h4>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4 hover:-translate-y-1 transition-transform duration-300">
                      <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md shrink-0">
                        <span className="text-blue-600 font-bold">1</span>
                      </div>
                      <div>
                        <h5 className="font-medium text-blue-800">Browse Inventory</h5>
                        <p className="text-sm text-blue-800/70">
                          Retailers browse available vegetables with real-time stock levels, pricing, and quality metrics
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 hover:-translate-y-1 transition-transform duration-300">
                      <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md shrink-0">
                        <span className="text-blue-600 font-bold">2</span>
                      </div>
                      <div>
                        <h5 className="font-medium text-blue-800">Create Order</h5>
                        <p className="text-sm text-blue-800/70">
                          Simple interface for selecting quantities and creating purchase orders
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 hover:-translate-y-1 transition-transform duration-300">
                      <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md shrink-0">
                        <span className="text-blue-600 font-bold">3</span>
                      </div>
                      <div>
                        <h5 className="font-medium text-blue-800">Track Delivery</h5>
                        <p className="text-sm text-blue-800/70">
                          Real-time delivery tracking and estimated arrival times
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 hover:-translate-y-1 transition-transform duration-300">
                      <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md shrink-0">
                        <span className="text-blue-600 font-bold">4</span>
                      </div>
                      <div>
                        <h5 className="font-medium text-blue-800">Sales Analytics</h5>
                        <p className="text-sm text-blue-800/70">
                          Access performance metrics and optimize inventory based on sales data
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <div className="relative h-full min-h-[300px] bg-gradient-to-br from-blue-100/30 to-white rounded-xl overflow-hidden flex items-center justify-center">
                    <div className="relative w-40 h-80 bg-white rounded-3xl shadow-xl overflow-hidden border-8 border-gray-800">
                      <div className="absolute inset-0 bg-blue-900/5"></div>
                      
                      {/* App header */}
                      <div className="bg-blue-600 h-10 w-full flex items-center px-3">
                        <div className="w-6 h-6 bg-white rounded-full mr-2"></div>
                        <div className="h-3 w-20 bg-white/50 rounded-full"></div>
                      </div>
                      
                      {/* App content */}
                      <div className="p-2">
                        <div className="mb-3">
                          <div className="h-3 w-3/4 bg-gray-200 rounded mb-1"></div>
                          <div className="h-3 w-1/2 bg-gray-200 rounded"></div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-2 mb-3">
                          <div className="bg-green-50 p-2 rounded-lg relative">
                            <div className="w-full h-12 bg-green-200 rounded-md mb-1"></div>
                            <div className="h-2 bg-gray-400 rounded-full mb-1"></div>
                            <div className="h-2 bg-green-500 rounded-full w-1/2"></div>
                            <div className="absolute top-1 right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-[8px] font-bold">
                              +
                            </div>
                          </div>
                          <div className="bg-red-50 p-2 rounded-lg relative">
                            <div className="w-full h-12 bg-red-200 rounded-md mb-1"></div>
                            <div className="h-2 bg-gray-400 rounded-full mb-1"></div>
                            <div className="h-2 bg-red-500 rounded-full w-2/3"></div>
                            <div className="absolute top-1 right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-[8px] font-bold">
                              +
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-blue-100 rounded-lg p-2 mb-2">
                          <div className="flex justify-between items-center mb-1">
                            <div className="h-3 w-16 bg-blue-300 rounded"></div>
                            <div className="h-3 w-8 bg-blue-500 rounded"></div>
                          </div>
                          <div className="flex justify-between">
                            <div className="h-2 w-12 bg-blue-200 rounded"></div>
                            <div className="h-2 w-6 bg-blue-400 rounded"></div>
                          </div>
                        </div>
                        
                        <div className="bg-amber-100 rounded-lg p-2">
                          <div className="flex justify-between items-center mb-1">
                            <div className="h-3 w-16 bg-amber-300 rounded"></div>
                            <div className="h-3 w-8 bg-amber-500 rounded"></div>
                          </div>
                          <div className="flex justify-between">
                            <div className="h-2 w-12 bg-amber-200 rounded"></div>
                            <div className="h-2 w-6 bg-amber-400 rounded"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Bottom navigation bar */}
                      <div className="absolute bottom-0 inset-x-0 h-10 bg-gray-100 flex justify-around items-center">
                        <div className="h-5 w-5 bg-blue-500 rounded"></div>
                        <div className="h-5 w-5 bg-gray-300 rounded"></div>
                        <div className="h-5 w-5 bg-gray-300 rounded"></div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-6 right-6 tws-pulse">
                      <div className="bg-blue-600 text-white p-2 rounded-full shadow-lg">
                        <ShoppingBasket className="h-6 w-6" />
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs text-white font-bold">
                          3
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ProcessStep>
          </div>
          
          {/* Step 5 */}
          <div id="step-5" ref={stepRefs[4]}>
            <ProcessStep
              step={5}
              title="Retailer Sales & Commission"
              description="Retailers enjoy significant profit margins with our commission-based model."
              icon={DollarSign}
              color="bg-gradient-to-r from-amber-500 to-yellow-400"
              isActive={activeSection === 4}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md mb-6">
                    <h4 className="text-xl font-semibold text-amber-800 mb-4 flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-amber-500" />
                      Commission Structure
                    </h4>
                    <p className="text-amber-700 mb-6">
                      Our retailers earn a competitive 15-20% commission on all sales, creating a 
                      sustainable and profitable business model.
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-amber-700">Low Season</span>
                          <span className="text-sm font-medium text-amber-700">15%</span>
                        </div>
                        <div className="h-2.5 w-full bg-amber-100 rounded-full">
                          <div className="h-2.5 bg-amber-500 rounded-full tws-width-animate" style={{ width: '75%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-amber-700">Peak Season</span>
                          <span className="text-sm font-medium text-amber-700">20%</span>
                        </div>
                        <div className="h-2.5 w-full bg-amber-100 rounded-full">
                          <div className="h-2.5 bg-amber-500 rounded-full tws-width-animate delay-200" style={{ width: '100%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-amber-700">Specialty Items</span>
                          <span className="text-sm font-medium text-amber-700">25%</span>
                        </div>
                        <div className="h-2.5 w-full bg-amber-100 rounded-full">
                          <div className="h-2.5 bg-amber-500 rounded-full tws-width-animate delay-400" style={{ width: '100%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="bg-green-50 p-4 rounded-xl flex-1 text-center hover:shadow-md transition-shadow">
                      <div className="text-3xl font-bold text-green-600 mb-1">3X</div>
                      <p className="text-sm text-green-700">Higher retailer retention rate</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-xl flex-1 text-center hover:shadow-md transition-shadow">
                      <div className="text-3xl font-bold text-blue-600 mb-1">24h</div>
                      <p className="text-sm text-blue-700">Settlement time</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-amber-50 to-white rounded-xl overflow-hidden shadow-md p-6">
                  <h4 className="text-xl font-semibold text-amber-800 mb-6">Monthly Revenue Potential</h4>
                  
                  <div className="relative h-64">
                    {/* Chart background grid */}
                    <div className="absolute inset-0 flex flex-col justify-between">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <div key={`grid-${i}`} className="border-t border-amber-100 h-0"></div>
                      ))}
                    </div>
                    
                    {/* Chart bars */}
                    <div className="absolute inset-0 flex items-end justify-around pt-6">
                      {[
                        { label: 'Greens', value: 65, color: 'bg-green-500' },
                        { label: 'Root Veg', value: 80, color: 'bg-amber-500' },
                        { label: 'Tomatoes', value: 90, color: 'bg-red-500' },
                        { label: 'Gourds', value: 45, color: 'bg-blue-500' },
                        { label: 'Fruits', value: 75, color: 'bg-purple-500' }
                      ].map((item, i) => (
                        <div key={`bar-${i}`} className="flex flex-col items-center">
                          <div 
                            className={`w-12 ${item.color} rounded-t-lg tws-bar-animate`} 
                            style={{ 
                              height: `${item.value}%`, 
                              transitionDelay: `${i * 100}ms`
                            }}
                          ></div>
                          <div className="mt-2 text-xs font-medium text-amber-800">{item.label}</div>
                          <div className="text-xs font-bold text-amber-900">₹{item.value * 100}</div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Y-axis labels */}
                    <div className="absolute inset-y-0 left-0 flex flex-col justify-between text-right pr-2 text-xs text-amber-700">
                      {['₹10k', '₹7.5k', '₹5k', '₹2.5k', '₹0'].map((label, i) => (
                        <div key={`y-${i}`}>{label}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ProcessStep>
          </div>
          
          {/* Step 6 */}
          <div id="step-6" ref={stepRefs[5]}>
            <ProcessStep
              step={6}
              title="Return Logistics & Credit"
              description="Our circular system minimizes waste and protects retailer profits."
              icon={RefreshCcw}
              color="bg-gradient-to-r from-green-600 to-emerald-500"
              isActive={activeSection === 5}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-5">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl shadow-md h-full">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="bg-emerald-100 p-2 rounded-lg">
                        <RefreshCcw className="w-6 h-6 text-emerald-600" />
                      </div>
                      <h4 className="text-xl font-semibold text-emerald-800">Circular Economy</h4>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <h5 className="font-semibold text-emerald-700 mb-2">Zero-Risk Returns</h5>
                        <p className="text-emerald-700/80 text-sm">
                          Unsold vegetables are collected and retailers receive full credit, 
                          eliminating financial risk of unsold inventory.
                        </p>
                      </div>
                      
                      <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <h5 className="font-semibold text-emerald-700 mb-2">Waste Reduction</h5>
                        <p className="text-emerald-700/80 text-sm">
                          Returned produce is repurposed for composting, animal feed, or 
                          commercial food processing, creating a zero-waste cycle.
                        </p>
                      </div>
                      
                      <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <h5 className="font-semibold text-emerald-700 mb-2">Automated Credit System</h5>
                        <p className="text-emerald-700/80 text-sm">
                          Credits are automatically applied to retailer accounts within 24 hours
                          and can be used for future purchases.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-7">
                  <div className="h-full flex flex-col">
                    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                      <h4 className="text-xl font-semibold text-gray-800 mb-4">Return Process Timeline</h4>
                      
                      <div className="relative">
                        {/* Timeline */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                        
                        <div className="space-y-8 relative">
                          <div className="flex gap-4 tws-slide-in">
                            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 z-10">
                              <ShoppingBasket className="w-8 h-8 text-emerald-600" />
                            </div>
                            <div>
                              <h5 className="font-medium text-lg">Unsold Inventory Collection</h5>
                              <p className="text-gray-600">Evening pickup ensures no inventory management needed</p>
                              <div className="text-sm text-emerald-600 font-medium mt-1">Day 1 • 7:00 PM</div>
                            </div>
                          </div>
                          
                          <div className="flex gap-4 tws-slide-in delay-200">
                            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center shrink-0 z-10">
                              <div className="relative">
                                <DollarSign className="w-8 h-8 text-blue-600" />
                                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full"></div>
                              </div>
                            </div>
                            <div>
                              <h5 className="font-medium text-lg">Credit Applied</h5>
                              <p className="text-gray-600">100% credit for unsold items applied to retailer account</p>
                              <div className="text-sm text-blue-600 font-medium mt-1">Day 2 • 9:00 AM</div>
                            </div>
                          </div>
                          
                          <div className="flex gap-4 tws-slide-in delay-400">
                            <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center shrink-0 z-10">
                              <RefreshCcw className="w-8 h-8 text-amber-600" />
                            </div>
                            <div>
                              <h5 className="font-medium text-lg">Repurposing</h5>
                              <p className="text-gray-600">Produce is sorted for composting, animal feed, or processing</p>
                              <div className="text-sm text-amber-600 font-medium mt-1">Day 2 • 2:00 PM</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-emerald-50 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-emerald-600">
                        <span className="inline-block tws-pulse">95%</span> Waste Reduction
                      </div>
                      <p className="text-emerald-700 text-sm">Compared to traditional supply chains</p>
                    </div>
                  </div>
                </div>
              </div>
            </ProcessStep>
          </div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-agri-green-light/30 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-200/30 rounded-full filter blur-3xl transform -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-200/30 rounded-full filter blur-3xl transform translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="inline-block mb-6 bg-green-100/80 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-green-800 font-medium">Ready to transform your business?</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-agri-green-dark to-agri-blue">
            Join Our Agricultural Revolution
          </h2>
          
          <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
            Our innovative supply chain connects farmers, retailers, and consumers in a sustainable ecosystem 
            that benefits everyone while reducing waste and increasing profits.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button 
              className="bg-agri-green hover:bg-agri-green-dark text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-green-200/50 hover:shadow-xl hover:shadow-green-200/60 transition-all hover:-translate-y-1"
              onClick={() => window.location.href = "/#contact"}
            >
              Become a Partner
            </Button>
            
            <Button 
              variant="outline"
              className="bg-white border-green-200 text-agri-green hover:bg-green-50 px-8 py-6 text-lg rounded-xl shadow-sm hover:-translate-y-1 transition-transform"
              onClick={() => window.location.href = "/contact"}
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
      
      {/* Custom animation styles */}
      <style jsx global>{`
        /* Custom animations without framer-motion */
        .tws-bounce {
          animation: tws-bounce 2s infinite;
        }
        
        @keyframes tws-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .tws-pulse {
          animation: tws-pulse 2s infinite;
        }
        
        @keyframes tws-pulse {
          0% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        .tws-float {
          animation: tws-float 3s ease-in-out infinite;
        }
        
        @keyframes tws-float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        .tws-truck {
          animation: tws-truck 10s linear infinite;
        }
        
        @keyframes tws-truck {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
        
        .tws-progress {
          animation: tws-progress 1.5s ease-out forwards;
          width: 0;
        }
        
        @keyframes tws-progress {
          0% { width: 0; }
          100% { width: var(--width, 100%); }
        }
        
        .tws-scale-hover {
          transition: transform 0.3s ease;
        }
        
        .tws-scale-hover:hover {
          transform: scale(1.1);
        }
        
        .tws-width-animate {
          animation: tws-width 1.2s ease-out forwards;
          width: 0;
        }
        
        @keyframes tws-width {
          0% { width: 0; }
          100% { width: var(--target-width, 100%); }
        }
        
        .tws-bar-animate {
          animation: tws-bar 1s ease-out forwards;
          height: 0;
        }
        
        @keyframes tws-bar {
          0% { height: 0; }
          100% { height: var(--height, 100%); }
        }
        
        .tws-slide-in {
          animation: tws-slide-in 0.8s ease-out forwards;
          opacity: 0;
          transform: translateX(-30px);
        }
        
        @keyframes tws-slide-in {
          0% { opacity: 0; transform: translateX(-30px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-600 { animation-delay: 600ms; }
        .delay-900 { animation-delay: 900ms; }
        .delay-1200 { animation-delay: 1200ms; }
      `}</style>
    </div>
  );
};

export default HowItWorks;