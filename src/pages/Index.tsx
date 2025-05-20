
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { HarshReality } from "@/components/HarshReality";
import { Solutions } from "@/components/Solutions";
import { SupplyChain } from "@/components/SupplyChain";
import { AgriniriMobile } from "@/components/AgriniriMobile";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  // Smooth scroll behavior for the entire page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Add smooth scroll behavior for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(anchor.hash);
        
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
          
          // Update URL without causing a page reload
          history.pushState(null, '', anchor.hash);
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <HarshReality />
      <Solutions />
      <SupplyChain />
      <AgriniriMobile />
      <Footer />
    </div>
  );
};

export default Index;
