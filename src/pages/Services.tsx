import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RetailersServices } from "@/components/RetailersServices";
import { HospitalityServices } from "@/components/HospitalityServices";
import { useEffect, useState } from "react";

const Services = () => {
  const [activeTab, setActiveTab] = useState("retailers");
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-agri-green/5 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute right-0 top-20 w-96 h-96 rounded-full bg-agri-green/10 blur-3xl"></div>
          <div className="absolute left-10 bottom-20 w-72 h-72 rounded-full bg-agri-green/5 blur-2xl"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-800 leading-tight">
            Our <span className="text-agri-green">Services</span>
          </h1>
          <div className="w-24 h-1 bg-agri-green mx-auto mb-8"></div>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-slate-600 leading-relaxed">
            Transforming agricultural supply chains with technology and logistics solutions
            tailored to meet the unique needs of different businesses.
          </p>
        </div>
      </section>
      
      {/* Service Type Selector */}
      <section className="pb-16 px-4">
        <div className="container mx-auto">
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-lg border border-agri-green/20 p-1 bg-white shadow-md">
              <button 
                onClick={() => setActiveTab("retailers")}
                className={`px-6 py-3 rounded-md text-lg font-medium transition-all duration-300 ${
                  activeTab === "retailers" 
                    ? "bg-agri-green text-white shadow-sm" 
                    : "text-slate-600 hover:bg-agri-green/10"
                }`}
              >
                Retailers
              </button>
              <button 
                onClick={() => setActiveTab("hospitality")}
                className={`px-6 py-3 rounded-md text-lg font-medium transition-all duration-300 ${
                  activeTab === "hospitality" 
                    ? "bg-agri-green text-white shadow-sm" 
                    : "text-slate-600 hover:bg-agri-green/10"
                }`}
              >
                Hospitality
              </button>
            </div>
          </div>
          
          <div className="transition-opacity duration-300">
            {activeTab === "retailers" && <RetailersServices />}
            {activeTab === "hospitality" && <HospitalityServices />}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-agri-green/10 to-agri-green/5 mt-12">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-white/50 backdrop-blur-sm p-10 rounded-2xl shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">Ready to transform your supply chain?</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8 text-slate-600">
              Get in touch with our expert team to learn how our services can benefit your business.
            </p>
            <a href="/contact" className="px-8 py-4 bg-agri-green text-white font-medium rounded-lg 
                           hover:bg-agri-green/90 transition-all shadow-lg 
                           hover:shadow-xl hover:-translate-y-0.5 inline-block">
              Contact Us
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
