
import { useState, useEffect } from 'react';
import { Tractor, Warehouse, Package, Truck, Store, FilterX, Thermometer } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export function SupplyChain() {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const totalSteps = 3;
  
  const supplyChainSteps = [
    {
      id: 0,
      name: "Direct Sourcing from Farms",
      icon: <Tractor className="h-10 w-10 text-agri-green" />,
      description: "Fresh vegetables directly sourced from partner farmers",
      detailText: "We work directly with local farmers to source the freshest produce, ensuring fair compensation and reducing time from harvest to processing."
    },
    {
      id: 1,
      name: "Processing Center",
      icon: <Warehouse className="h-10 w-10 text-agri-brown" />,
      description: "State-of-the-art facility for processing vegetables",
      subProcesses: [
        {
          name: "Sorting & Grading",
          icon: <FilterX className="h-8 w-8 text-agri-blue" />,
          description: "Quality assessment and categorization"
        },
        {
          name: "Cleaning",
          icon: <Package className="h-8 w-8 text-agri-blue" />,
          description: "Thorough cleaning to ensure safety"
        },
        {
          name: "Advanced Storage",
          icon: <Thermometer className="h-8 w-8 text-agri-blue" />,
          description: "Temperature-controlled preservation"
        }
      ]
    },
    {
      id: 2,
      name: "Delivery to Retailers",
      icon: <Store className="h-10 w-10 text-agri-green" />,
      description: "In-house transportation to retail partners",
      detailText: "Our fleet of temperature-controlled vehicles ensures vegetables reach retail partners in optimal condition, maintaining the cold chain throughout delivery."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => {
        const nextStep = (prevStep + 1) % totalSteps;
        setProgress((nextStep / (totalSteps - 1)) * 100);
        return nextStep;
      });
    }, 3000); // Faster animation cycle (3 seconds instead of 4)

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="supply-chain">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <img 
            src="/lovable-uploads/3621d559-a943-4828-ae39-b3b374b070ce.png" 
            alt="Agriniri Logo" 
            className="h-10 mr-3" 
          />
          <h2 className="text-3xl md:text-4xl font-bold text-center">Our Supply Chain Process</h2>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Tractor animation above progress bar */}
          <div className="relative mb-2 h-8">
            <div 
              className="absolute transition-all duration-500 ease-in-out"
              style={{ 
                left: `${progress}%`, 
                transform: 'translateX(-50%)',
                top: '0'
              }}
            >
              <Tractor className="h-8 w-8 text-agri-green animate-bounce" />
            </div>
          </div>
          
          {/* Progress bar with smoother animation */}
          <Progress 
            value={progress} 
            className="h-2 mb-8 transition-all duration-500 ease-in-out" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {supplyChainSteps.map((step) => (
              <div 
                key={step.id} 
                className={`relative p-5 rounded-lg border transition-all duration-500 ${
                  currentStep === step.id 
                    ? 'bg-white border-agri-green shadow-lg scale-105 z-10' 
                    : 'bg-white/70 border-gray-200'
                }`}
              >
                <div className="flex flex-col items-center text-center h-full">
                  <div className={`rounded-full p-3 mb-3 transition-all duration-500 ${
                    currentStep === step.id 
                      ? 'bg-agri-green/10 animate-pulse' 
                      : 'bg-gray-100'
                  }`}>
                    {step.icon}
                  </div>
                  <h3 className="font-semibold mb-2 text-lg">{step.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{step.description}</p>
                  
                  {step.detailText && currentStep === step.id && (
                    <p className="text-xs text-gray-500 italic">{step.detailText}</p>
                  )}
                  
                  {step.subProcesses && (
                    <div className="w-full mt-4 space-y-3 pt-4 border-t border-gray-100">
                      <h4 className="font-medium text-sm text-gray-700 mb-2">Processing Activities:</h4>
                      {step.subProcesses.map((subProcess, idx) => (
                        <div 
                          key={idx} 
                          className={`p-3 rounded-md transition-all duration-300 ${
                            currentStep === step.id 
                              ? 'bg-gray-50 shadow-sm' 
                              : 'bg-gray-50/50'
                          }`}
                        >
                          <div className="flex items-center">
                            <div className="mr-3">
                              {subProcess.icon}
                            </div>
                            <div className="text-left">
                              <h5 className="font-medium text-sm">{subProcess.name}</h5>
                              <p className="text-xs text-gray-500">{subProcess.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                {step.id < totalSteps - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <div className={`h-0.5 w-6 transition-colors duration-300 ${
                      currentStep === step.id || currentStep === step.id + 1
                        ? 'bg-agri-green' 
                        : 'bg-gray-300'
                    }`} />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-lg text-gray-700">
              From farm to store, we ensure the freshest vegetables with complete traceability and quality assurance at every step
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
