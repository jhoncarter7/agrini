
import { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SupplyChainStep } from '@/components/SupplyChainStep';
import { useInView } from 'react-intersection-observer';
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
} from 'lucide-react';
import { 
  Card, 
  CardContent 
} from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Setup intersection observer for header
  const { ref: headerRef, inView: headerInView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50/30">
      <Navbar />
      
      {/* Header Section */}
      <section 
        ref={headerRef}
        className="pt-28 pb-16 px-4 md:pt-32 md:pb-24 bg-gradient-to-b from-agri-green/10 to-white text-center"
      >
        <div 
          className="container mx-auto max-w-6xl transition-all duration-1000 ease-out"
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">How It Works</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-600 mb-8">
            Transforming the vegetable supply chain through technology and innovation
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-agri-green/10 p-3 rounded-full">
              <Leaf className="w-6 h-6 text-agri-green" />
            </div>
            <div className="bg-agri-brown/10 p-3 rounded-full">
              <Truck className="w-6 h-6 text-agri-brown" />
            </div>
            <div className="bg-agri-blue/10 p-3 rounded-full">
              <Smartphone className="w-6 h-6 text-agri-blue" />
            </div>
            <div className="bg-agri-green/10 p-3 rounded-full">
              <ShoppingBasket className="w-6 h-6 text-agri-green" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Supply Chain Steps */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <SupplyChainStep 
            index={1}
            title="Farmer Listing"
            description="Farmers list their fresh vegetables through our app for direct selling."
            icon={Smartphone}
            iconColor="text-agri-blue"
            isActive={activeStep === 0}
          >
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-4 animate-fade-in">
                <h4 className="font-medium mb-2 text-agri-blue">Real-Time Listings</h4>
                <p className="text-sm text-gray-600">
                  Our app displays current vegetable availability from nearby farmers, 
                  complete with quantity and transparent pricing information.
                </p>
              </div>
              <div className="relative h-48 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg overflow-hidden animate-fade-in">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-24 h-48 bg-white rounded-xl shadow-lg p-2 transform rotate-12 animate-float">
                    <div className="bg-blue-100 h-4 w-full rounded-t-md mb-2"></div>
                    <div className="space-y-1 p-1">
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-agri-green rounded-full"></div>
                        <div className="h-2 bg-gray-200 rounded w-full"></div>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-agri-green rounded-full"></div>
                        <div className="h-2 bg-gray-200 rounded w-full"></div>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-agri-green rounded-full"></div>
                        <div className="h-2 bg-gray-200 rounded w-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 w-16 h-16 bg-white rounded-lg p-1 shadow-md transform -rotate-6 animate-float animation-delay-300">
                    <div className="bg-agri-green/20 w-full h-full rounded flex items-center justify-center">
                      <Leaf className="w-8 h-8 text-agri-green" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SupplyChainStep>
          
          <SupplyChainStep 
            index={2}
            title="Procurement & Transport"
            description="Direct purchasing from farmers based on demand forecasting."
            icon={Truck}
            iconColor="text-agri-brown"
            isActive={activeStep === 1}
          >
            <div className="mt-4 space-y-4">
              <div className="bg-amber-50 p-4 rounded-lg animate-fade-in">
                <p className="text-sm text-gray-600">
                  We purchase vegetables directly from farmers at fair prices, eliminating middlemen and 
                  ensuring farmers receive better compensation for their produce.
                </p>
              </div>
              
              <div className="relative h-36 bg-gradient-to-r from-amber-50 to-green-50 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center animate-slide">
                  <div className="relative pl-8">
                    <Truck className="h-12 w-12 text-agri-brown absolute left-2 top-0 animate-bounce" />
                    <div className="h-2 w-full bg-gray-300 absolute top-16"></div>
                    <div className="h-6 w-6 bg-agri-green rounded-full absolute left-16 top-1 animate-pulse"></div>
                    <div className="h-4 w-4 bg-agri-green-light rounded-full absolute left-24 top-3 animate-pulse"></div>
                    <div className="h-5 w-5 bg-amber-400 rounded-full absolute left-32 top-2 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </SupplyChainStep>
          
          <SupplyChainStep 
            index={3}
            title="Warehouse Operations"
            description="Quality processing to ensure the highest standards of freshness."
            icon={Warehouse}
            iconColor="text-agri-green"
            isActive={activeStep === 2}
          >
            <div className="mt-4 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="overflow-hidden">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="bg-agri-green/10 p-2 rounded-full">
                      <Filter className="h-5 w-5 text-agri-green" />
                    </div>
                    <div>
                      <h4 className="font-medium">Sorting & Grading</h4>
                      <p className="text-sm text-gray-500">Vegetables are sorted by quality and size</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="bg-agri-blue/10 p-2 rounded-full">
                      <Droplets className="h-5 w-5 text-agri-blue" />
                    </div>
                    <div>
                      <h4 className="font-medium">Cleaning</h4>
                      <p className="text-sm text-gray-500">Thorough washing to remove dirt and debris</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="relative h-40 bg-gradient-to-r from-gray-50 to-green-50 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full max-w-md bg-white rounded-lg shadow-md p-2 flex flex-row gap-2">
                    <div className="flex-1 h-24 bg-gray-100 rounded flex items-center justify-center">
                      <div className="w-12 h-12 bg-red-200 rounded-full"></div>
                    </div>
                    <div className="flex-1 h-24 bg-gray-100 rounded relative overflow-hidden">
                      <div className="absolute inset-x-0 top-0 h-1/2 flex items-center justify-center">
                        <div className="w-12 h-12 bg-blue-200 rounded-full"></div>
                      </div>
                      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-blue-50 flex items-center justify-center">
                        <Droplets className="h-8 w-8 text-blue-300" />
                      </div>
                    </div>
                    <div className="flex-1 h-24 bg-gray-100 rounded flex items-center justify-center">
                      <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-6 w-6 text-green-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SupplyChainStep>
          
          <SupplyChainStep 
            index={4}
            title="Retailer Orders via App"
            description="Connected retailers place orders through our intuitive mobile platform."
            icon={ShoppingBasket}
            iconColor="text-agri-blue"
            isActive={activeStep === 3}
          >
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-medium mb-2 text-agri-blue">Streamlined Ordering</h4>
                <p className="text-sm text-gray-600">
                  Retailers browse available inventory, select quantities, and place orders
                  directly through our app. The intuitive interface makes daily ordering simple.
                </p>
              </div>
              
              <div className="relative h-48 rounded-lg overflow-hidden bg-gradient-to-br from-blue-50 to-white">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-24 h-40 bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="bg-agri-blue h-6 w-full"></div>
                    <div className="p-2 space-y-1">
                      <div className="h-3 w-full bg-gray-100 rounded"></div>
                      <div className="h-3 w-3/4 bg-gray-100 rounded"></div>
                      <div className="flex justify-between items-center mt-2">
                        <div className="h-6 w-6 bg-green-100 rounded-full"></div>
                        <div className="h-4 w-8 bg-agri-green rounded"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 inset-x-0 h-8 bg-gray-100 flex justify-center items-center">
                      <div className="h-4 w-10 bg-agri-blue rounded"></div>
                    </div>
                  </div>
                  <div className="absolute right-8 bottom-4">
                    <div className="relative">
                      <div className="w-20 h-20 bg-white rounded-lg shadow-lg flex items-center justify-center">
                        <ShoppingBasket className="h-10 w-10 text-agri-green" />
                      </div>
                      <div className="absolute -top-2 -right-2 h-6 w-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        3
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SupplyChainStep>
          
          <SupplyChainStep 
            index={5}
            title="Retailer Sales & Commission"
            description="Retailers earn 15–20% commission on all sales."
            icon={DollarSign}
            iconColor="text-amber-500"
            isActive={activeStep === 4}
          >
            <div className="mt-4 space-y-4">
              <div className="bg-amber-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  Retailers sell our high-quality vegetables to end consumers and earn a competitive 
                  15–20% commission on all sales. Our model ensures profitability for our retail partners.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <div className="text-3xl font-bold text-agri-green mb-2">15-20%</div>
                  <p className="text-sm text-gray-500">Commission Rate</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <div className="text-3xl font-bold text-agri-blue mb-2">100%</div>
                  <p className="text-sm text-gray-500">Quality Assurance</p>
                </div>
              </div>
              
              <div className="relative h-20 bg-gradient-to-r from-amber-50 to-green-50 rounded-lg overflow-hidden">
                <div className="absolute inset-y-0 left-0 right-24 flex items-center animate-pulse">
                  <DollarSign className="h-8 w-8 text-amber-500 mx-4" />
                  <div className="h-1 flex-grow bg-amber-200 relative">
                    <div className="h-1 bg-amber-500 w-3/4"></div>
                    <div className="absolute h-3 w-3 rounded-full bg-amber-500 right-0 top-1/2 transform -translate-y-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </SupplyChainStep>
          
          <SupplyChainStep 
            index={6}
            title="Return Logistics & Credit"
            description="Unsold vegetables are picked up and retailers receive credit."
            icon={RefreshCcw}
            iconColor="text-agri-green"
            isActive={activeStep === 5}
          >
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-medium mb-2 text-agri-green">Waste Reduction</h4>
                <p className="text-sm text-gray-600">
                  We pick up unsold vegetables and provide retailers with credit in their account. 
                  This reduces waste and financial risk for our retail partners.
                </p>
              </div>
              
              <Collapsible className="bg-white p-4 rounded-lg shadow-sm">
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="flex w-full justify-between rounded-lg border p-4">
                    <span>How credits work</span>
                    <RefreshCcw className="h-4 w-4" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-2 p-4">
                  <p className="text-sm text-gray-600">
                    1. Unsold items are collected at the end of the day
                  </p>
                  <p className="text-sm text-gray-600">
                    2. Credit is applied to retailer account within 24 hours
                  </p>
                  <p className="text-sm text-gray-600">
                    3. Credit can be used for future purchases
                  </p>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </SupplyChainStep>
        </div>
      </section>
      
      {/* Conclusion */}
      <section className="py-16 px-4 bg-gradient-to-t from-agri-green/10 to-white text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Join Our Circular Supply Chain</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our innovative approach reduces waste, increases farmer income, and creates 
            sustainable business opportunities for retailers.
          </p>
          <Button 
            className="bg-agri-green hover:bg-agri-green-dark text-white"
            onClick={() => window.location.href = "/#contact"}
          >
            Partner With Us
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default HowItWorks;
