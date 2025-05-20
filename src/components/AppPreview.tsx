
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Smartphone, TabletIcon } from 'lucide-react';

export function AppPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AgriHub Mobile App</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take control of your farm from anywhere with our powerful mobile application.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="farmers" className="mb-12">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-3 w-full max-w-lg">
                <TabsTrigger value="farmers">For Farmers</TabsTrigger>
                <TabsTrigger value="retailers">For Retailers</TabsTrigger>
                <TabsTrigger value="aiSuggestions">AI Suggestions</TabsTrigger>
              </TabsList>
            </div>
            
            <div className="relative bg-gradient-to-br from-agri-green/5 to-agri-blue/5 rounded-2xl p-8 md:p-12">
              <TabsContent value="farmers" className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-4">For Farmers</h3>
                  <p className="text-lg mb-6">
                    Seamlessly list your produce and connect with retailers directly, eliminating middlemen and maximizing your profits.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <svg className="h-5 w-5 text-agri-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Easy crop listing with quality grading</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-5 w-5 text-agri-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Real-time market prices and trends</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-5 w-5 text-agri-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Direct payment without delays</span>
                    </li>
                  </ul>
                  <div className="flex gap-4">
                    <Button variant="outline" className="rounded-full">
                      <Smartphone className="mr-2 h-4 w-4" /> iOS App
                    </Button>
                    <Button variant="outline" className="rounded-full">
                      <Smartphone className="mr-2 h-4 w-4" /> Android App
                    </Button>
                  </div>
                </div>
                <div className="order-1 md:order-2 flex justify-center">
                  <div className="relative w-64 h-auto">
                    <div className="absolute inset-0 bg-black rounded-[40px] shadow-lg -z-10 transform translate-x-4 translate-y-4 opacity-20"></div>
                    <div className="bg-black rounded-[40px] p-3 shadow-xl">
                      <div className="bg-white rounded-[32px] overflow-hidden h-[500px]">
                        <div className="bg-agri-green text-white py-6 px-4 text-center">
                          <h4 className="font-semibold">Farmer's Dashboard</h4>
                        </div>
                        <img 
                          src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2" 
                          alt="Farmer using app" 
                          className="w-full h-[240px] object-cover" 
                        />
                        <div className="p-4">
                          <div className="bg-agri-green/10 rounded-lg p-3 mb-3">
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-medium">Tomatoes</span>
                              <span className="text-agri-green font-semibold">₹25/kg</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-agri-green h-2 rounded-full" style={{ width: '90%' }}></div>
                            </div>
                          </div>
                          <div className="bg-agri-blue/10 rounded-lg p-3 mb-3">
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-medium">Potatoes</span>
                              <span className="text-agri-blue font-semibold">₹18/kg</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-agri-blue h-2 rounded-full" style={{ width: '80%' }}></div>
                            </div>
                          </div>
                          <div className="bg-yellow-100 rounded-lg p-3">
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-medium">Onions</span>
                              <span className="text-yellow-600 font-semibold">₹22/kg</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="retailers" className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-4">For Retailers</h3>
                  <p className="text-lg mb-6">
                    Get access to fresh produce directly from farmers with optimized ordering and inventory management.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <svg className="h-5 w-5 text-agri-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Browse verified quality produce listings</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-5 w-5 text-agri-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Effortless order placement and tracking</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-5 w-5 text-agri-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Automated inventory and waste management</span>
                    </li>
                  </ul>
                  <div className="flex gap-4">
                    <Button variant="outline" className="rounded-full">
                      <Smartphone className="mr-2 h-4 w-4" /> iOS App
                    </Button>
                    <Button variant="outline" className="rounded-full">
                      <Smartphone className="mr-2 h-4 w-4" /> Android App
                    </Button>
                  </div>
                </div>
                <div className="order-1 md:order-2 flex justify-center">
                  <div className="relative w-64 h-auto">
                    <div className="absolute inset-0 bg-black rounded-[40px] shadow-lg -z-10 transform translate-x-4 translate-y-4 opacity-20"></div>
                    <div className="bg-black rounded-[40px] p-3 shadow-xl">
                      <div className="bg-white rounded-[32px] overflow-hidden h-[500px]">
                        <div className="bg-agri-blue text-white py-6 px-4 text-center">
                          <h4 className="font-semibold">Retailer's Dashboard</h4>
                        </div>
                        <div className="p-4">
                          <div className="text-lg font-medium mb-3">Today's Best Deals</div>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center p-3 bg-green-50 rounded border-l-4 border-green-500">
                              <div>
                                <div className="font-medium">Premium Tomatoes</div>
                                <div className="text-sm text-gray-500">6 farmers available</div>
                              </div>
                              <div className="text-green-600 font-bold">₹25/kg</div>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-blue-50 rounded border-l-4 border-blue-500">
                              <div>
                                <div className="font-medium">Fresh Potatoes</div>
                                <div className="text-sm text-gray-500">4 farmers available</div>
                              </div>
                              <div className="text-blue-600 font-bold">₹18/kg</div>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-yellow-50 rounded border-l-4 border-yellow-500">
                              <div>
                                <div className="font-medium">Organic Onions</div>
                                <div className="text-sm text-gray-500">3 farmers available</div>
                              </div>
                              <div className="text-yellow-600 font-bold">₹22/kg</div>
                            </div>
                          </div>
                          
                          <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                            <div className="text-lg font-medium mb-2">Order Summary</div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Total Items:</span>
                              <span className="font-medium">3</span>
                            </div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Total Quantity:</span>
                              <span className="font-medium">45 kg</span>
                            </div>
                            <div className="flex justify-between text-sm mb-3">
                              <span>Total Amount:</span>
                              <span className="font-medium">₹950</span>
                            </div>
                            <div className="bg-agri-green text-white py-2 px-4 rounded text-center font-medium">
                              Place Order
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="aiSuggestions" className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-4">AI-Driven Suggestions</h3>
                  <p className="text-lg mb-6">
                    Make data-informed decisions with our advanced AI and machine learning algorithms.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <svg className="h-5 w-5 text-agri-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Demand prediction based on historical data</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-5 w-5 text-agri-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Price optimization for maximum profit</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-5 w-5 text-agri-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Personalized recommendations for each user</span>
                    </li>
                  </ul>
                  <div className="flex gap-4">
                    <Button variant="outline" className="rounded-full">
                      <Smartphone className="mr-2 h-4 w-4" /> iOS App
                    </Button>
                    <Button variant="outline" className="rounded-full">
                      <Smartphone className="mr-2 h-4 w-4" /> Android App
                    </Button>
                  </div>
                </div>
                <div className="order-1 md:order-2 flex justify-center">
                  <div className="relative w-64 h-auto">
                    <div className="absolute inset-0 bg-black rounded-[40px] shadow-lg -z-10 transform translate-x-4 translate-y-4 opacity-20"></div>
                    <div className="bg-black rounded-[40px] p-3 shadow-xl">
                      <div className="bg-white rounded-[32px] overflow-hidden h-[500px]">
                        <div className="bg-agri-brown text-white py-6 px-4 text-center">
                          <h4 className="font-semibold">AI Insights</h4>
                        </div>
                        <div className="p-4">
                          <div className="mb-4">
                            <div className="text-lg font-medium mb-2">Demand Forecast</div>
                            <div className="bg-gray-50 rounded-lg p-3">
                              <div className="flex justify-between items-center mb-1">
                                <span className="text-sm">Tomatoes</span>
                                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">High Demand</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                                <div className="bg-green-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                              </div>
                              
                              <div className="flex justify-between items-center mb-1">
                                <span className="text-sm">Potatoes</span>
                                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Medium Demand</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                              </div>
                              
                              <div className="flex justify-between items-center mb-1">
                                <span className="text-sm">Cauliflower</span>
                                <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Rising Trend</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="mb-4">
                            <div className="text-lg font-medium mb-2">Recommended Actions</div>
                            <div className="space-y-2">
                              <div className="p-2 bg-green-50 text-green-800 border-l-4 border-green-500 rounded text-sm">
                                <div className="font-medium">Increase tomato inventory by 15%</div>
                                <div className="text-xs">Expected demand spike next week</div>
                              </div>
                              <div className="p-2 bg-yellow-50 text-yellow-800 border-l-4 border-yellow-500 rounded text-sm">
                                <div className="font-medium">Consider adding cauliflower</div>
                                <div className="text-xs">Trending with 30% higher sales</div>
                              </div>
                              <div className="p-2 bg-blue-50 text-blue-800 border-l-4 border-blue-500 rounded text-sm">
                                <div className="font-medium">Maintain current potato levels</div>
                                <div className="text-xs">Stable demand expected</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 justify-center bg-agri-green/10 text-agri-green font-medium py-2 px-4 rounded-full mb-6">
              <TabletIcon className="h-4 w-4" />
              <span>Available on all devices</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to transform your farming?</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Download our app today and join thousands of farmers already benefiting from AgriHub Verse technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary rounded-full px-8 py-6 text-lg">
                Download for iOS
              </Button>
              <Button className="btn-accent rounded-full px-8 py-6 text-lg">
                Download for Android
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
