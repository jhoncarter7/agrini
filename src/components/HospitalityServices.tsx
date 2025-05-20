
import { Coffee, UtensilsCrossed, Truck, CalendarCheck, Leaf, LineChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export function HospitalityServices() {
  const features = [
    {
      icon: <Leaf className="h-10 w-10 text-agri-green" />,
      title: "Farm-Fresh Quality",
      description: "Direct sourcing from farms ensures the freshest produce with full traceability. Premium quality vegetables mean better taste for your customers."
    },
    {
      icon: <Truck className="h-10 w-10 text-agri-green" />,
      title: "Reliable Delivery",
      description: "Scheduled deliveries that adapt to your business hours. Consistent supply chain ensures you never run out of essential ingredients."
    },
    {
      icon: <CalendarCheck className="h-10 w-10 text-agri-green" />,
      title: "Flexible Ordering",
      description: "Order in bulk with advance scheduling or place emergency orders when needed. Our system adapts to your changing requirements."
    },
    {
      icon: <LineChart className="h-10 w-10 text-agri-green" />,
      title: "Cost Effectiveness",
      description: "Competitive pricing with bulk purchase benefits. Reduce your ingredient costs while maintaining quality standards."
    },
    {
      icon: <UtensilsCrossed className="h-10 w-10 text-agri-green" />,
      title: "Customized Selection",
      description: "Tailored vegetable selection based on your menu requirements. Special grades and varieties available on request."
    },
    {
      icon: <Coffee className="h-10 w-10 text-agri-green" />,
      title: "Partner Support",
      description: "Dedicated account manager for hospitality clients. Regular quality inspections and feedback implementation."
    }
  ];
  
  return (
    <section id="services-hospitality" className="py-16 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 flex items-center justify-center gap-2">
            <UtensilsCrossed className="h-7 w-7 text-agri-green" />
            <span>For Hotels, Restaurants & Canteens</span>
          </h2>
          <div className="w-16 h-1 bg-agri-green/60 mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Reliable supply of premium quality fresh produce for your culinary needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, idx) => (
            <Card 
              key={idx} 
              className="border border-gray-100 hover:border-agri-green/30 transition-all duration-300 hover:shadow-md bg-white overflow-hidden group"
            >
              <CardContent className="p-6">
                <div className="mb-4 p-3 bg-agri-green/10 rounded-full inline-block group-hover:bg-agri-green/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 text-center bg-white p-8 rounded-xl shadow-sm border border-gray-100 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Ready to transform your procurement?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of hospitality businesses that trust us for consistent, 
            high-quality produce delivery.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-agri-green hover:bg-agri-green-dark text-white font-medium rounded-md">
              Schedule a Consultation
            </Button>
            <Button variant="outline" className="border-agri-green text-agri-green hover:bg-agri-green/10 font-medium rounded-md">
              View Sample Products
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
