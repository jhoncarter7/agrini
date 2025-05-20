import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MeetOurFounders } from "@/components/MeetOurFounders";
import { useEffect } from "react";

export default function AboutUs() {
  // Enhanced observer for scroll animations with fallback
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          // Backup to ensure visibility even if animation fails
          setTimeout(() => {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0');
          }, 100);
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    // Fallback for all reveal elements to ensure visibility
    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((el) => {
        el.classList.add('opacity-100');
        el.classList.remove('opacity-0');
      });
    }, 1000);
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#fafcf7]">
      <Navbar />
      
      {/* Hero Section - Visual Only */}
      <section className="h-[70vh] w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
          alt="Agricultural landscape" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#fafcf7] to-transparent z-20"></div>
      </section>
      
      {/* Our Story - Visible by default */}
      <section className="py-24 bg-[#fafcf7]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center reveal opacity-0 transition-all duration-700">
            <div className="order-2 lg:order-1">
              <span className="inline-block px-4 py-1 rounded-full bg-agri-green/10 text-agri-green font-medium text-sm mb-4">Our Journey</span>
              <h2 className="text-4xl font-bold mb-8 leading-tight">Our Story</h2>
              <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                Founded in 2023, Agriniri Evergreen Pvt. Ltd. was born from a deep understanding 
                of the challenges faced by both farmers and retailers in India's tier 2 and tier 3 cities.
              </p>
              <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                Growing up in a farming family, our founder Aman witnessed firsthand the difficulties 
                farmers face in getting fair prices for their produce, while also seeing retailers 
                struggle with inconsistent supply and quality.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We set out to create a solution that would bridge this gap, leveraging technology 
                to create a more efficient, transparent, and sustainable supply chain for fresh vegetables.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1464226184884-fa280b87c399" 
                  alt="Farming in India" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <p className="text-white p-8 text-xl italic font-light">
                    "From farm to table, we're reimagining every step of the journey."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Vision - Visible by default */}
      <section className="py-24 bg-gradient-to-br from-agri-green/5 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal opacity-0 transition-all duration-700">
            <span className="inline-block px-4 py-1 rounded-full bg-agri-green/10 text-agri-green font-medium text-sm mb-4">What Drives Us</span>
            <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Building a future where technology empowers every participant in the agricultural ecosystem
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "M12 6v6m0 0v6m0-6h6m-6 0H6",
                title: "Bridging Gaps",
                description: "We're connecting farmers directly with retailers through tech-enabled solutions, eliminating inefficient middlemen and creating value for both sides of the market."
              },
              {
                icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
                title: "Zero Waste",
                description: "Our innovative supply chain reduces food wastage significantly by optimizing inventory, improving forecasting, and enabling just-in-time delivery systems."
              },
              {
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Quality Assurance",
                description: "We're committed to providing clean, pesticide-free vegetables to consumers, ensuring both health benefits and environmental sustainability."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 reveal opacity-0 transition-all duration-700"
                style={{ transitionDelay: `${index * 100}ms` }} // Using inline style for delay
              >
                <div className="w-16 h-16 bg-agri-green/10 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-agri-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-20 bg-white p-10 rounded-2xl shadow-xl border border-gray-100 reveal opacity-0 transition-all duration-700">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1542223616-9de9adb5e3e8" 
                  alt="Digital Agriculture" 
                  className="rounded-xl w-full h-auto shadow-lg"
                />
              </div>
              <div className="md:w-2/3">
                <span className="inline-block px-4 py-1 rounded-full bg-agri-green/10 text-agri-green font-medium text-sm mb-4">Innovation</span>
                <h3 className="text-2xl font-bold mb-6">Our Technology Approach</h3>
                <p className="text-lg mb-6 text-gray-700">
                  At Agriniri, we leverage cutting-edge technology to solve age-old problems:
                </p>
                <ul className="space-y-3 text-gray-700">
                  {[
                    "AI-driven demand forecasting to reduce waste and optimize inventory",
                    "Mobile applications that connect farmers directly with retailers",
                    "Quality control systems that ensure only the best produce reaches consumers",
                    "Logistics optimization for efficient and timely deliveries",
                    "Data analytics to continuously improve our processes and outcomes"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-agri-green mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Meet the Founders */}
      <MeetOurFounders />
      
      {/* Our Mission - Visible by default */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center reveal opacity-0 transition-all duration-700">
            <span className="inline-block px-4 py-1 rounded-full bg-agri-green/10 text-agri-green font-medium text-sm mb-4">Our Purpose</span>
            <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
            <p className="text-xl mb-12 text-gray-700 leading-relaxed">
              To revolutionize the agricultural supply chain through technology, creating 
              a sustainable ecosystem that empowers farmers, delights retailers, and delivers 
              fresh, high-quality produce to consumers.
            </p>
            
            <div className="bg-gradient-to-r from-agri-green/10 to-agri-brown/10 rounded-2xl p-10 shadow-xl border border-agri-green/20 transition-all duration-300 hover:shadow-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-agri-green/30 mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
              <p className="text-2xl italic text-gray-700 mb-6 font-light">
                "We're not just building a business; we're cultivating a movement that respects 
                the earth, honors the farmer, and nourishes communities."
              </p>
              <div className="w-16 h-1 bg-agri-green/30 mx-auto mb-4"></div>
              <p className="font-medium text-agri-green">The Agriniri Team</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
