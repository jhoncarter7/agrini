
import { 
  Leaf, 
  BarChart3, 
  CloudRain, 
  Smartphone, 
  Tractor, 
  LineChart 
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const features = [
  {
    icon: <Leaf className="h-12 w-12 text-agri-green" />,
    title: "Crop Monitoring",
    description: "Real-time monitoring of crop health, growth stages, and potential issues."
  },
  {
    icon: <BarChart3 className="h-12 w-12 text-agri-green" />,
    title: "Yield Prediction",
    description: "AI-powered predictions to help plan harvests and maximize profits."
  },
  {
    icon: <CloudRain className="h-12 w-12 text-agri-green" />,
    title: "Weather Integration",
    description: "Localized weather data and alerts to protect your crops."
  },
  {
    icon: <Smartphone className="h-12 w-12 text-agri-green" />,
    title: "Mobile Management",
    description: "Control your entire farm operation from anywhere with our mobile app."
  },
  {
    icon: <Tractor className="h-12 w-12 text-agri-green" />,
    title: "Equipment Tracking",
    description: "Monitor usage, maintenance schedules, and efficiency of your farm equipment."
  },
  {
    icon: <LineChart className="h-12 w-12 text-agri-green" />,
    title: "Market Analytics",
    description: "Stay updated on market trends and optimize your selling strategy."
  }
];

export function Features() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="features" className="section-padding bg-muted">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 delay-100 ${
          isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform combines cutting-edge technology with agricultural expertise to provide you with the tools you need for success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`feature-card flex flex-col items-center text-center transition-all duration-700 ${
                isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(index * 100) + 200}ms` }}
            >
              <div className={`mb-4 ${isIntersecting ? 'float-animation' : ''}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
