
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface SupplyChainStepProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  index: number;
  isActive?: boolean;
  children?: React.ReactNode;
}

export function SupplyChainStep({ 
  title, 
  description, 
  icon: Icon, 
  iconColor = "text-agri-green", 
  index,
  isActive = false,
  children
}: SupplyChainStepProps) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex flex-col md:flex-row items-start gap-6 transition-all duration-700 ease-out py-12",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      {/* Step number and connector line */}
      <div className="flex flex-col items-center">
        <div 
          className={cn(
            "flex items-center justify-center w-14 h-14 rounded-full text-white font-bold text-xl transition-all duration-500",
            isActive || inView ? "bg-agri-green scale-110" : "bg-gray-300",
          )}
        >
          {index}
        </div>
        {index < 6 && (
          <div 
            className={cn(
              "w-1 bg-gray-200 transition-all duration-700 flex-grow my-2",
              isActive || inView ? "bg-agri-green-light" : "bg-gray-200",
            )}
            style={{ height: '80px' }} 
          />
        )}
      </div>
      
      {/* Step content */}
      <div 
        className={cn(
          "flex-1 bg-white rounded-xl shadow-md transition-all duration-500 overflow-hidden",
          isActive || inView ? "border-agri-green" : "border-transparent",
          isActive || inView ? "shadow-lg" : "shadow-sm"
        )}
      >
        <div className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className={cn("p-3 rounded-full bg-opacity-20", iconColor, inView ? "animate-bounce" : "")}>
              <Icon className={cn("h-6 w-6", iconColor)} />
            </div>
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
          
          <p className="text-gray-600 mb-4">{description}</p>
          
          <div 
            className={cn(
              "overflow-hidden transition-all duration-700", 
              inView ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
