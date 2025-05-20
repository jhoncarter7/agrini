import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import { useEffect, useState } from "react";

export default function ContactPage() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Initialize animations on page load
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
      element.classList.add('active');
    });
    
    // Add scroll event listener for animations
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Add 'active' class to elements as they scroll into view
      document.querySelectorAll('.reveal-on-scroll').forEach(elem => {
        const elemPosition = elem.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elemPosition < screenPosition) {
          elem.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section with Enhanced Background */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background with parallax-like effect */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-white/70 z-10"></div>
          <div className="absolute inset-0 z-0 scale-105 origin-center transition-transform duration-1000">
            <img 
              src="/images/farm-landscape.jpg" 
              alt="Agricultural Landscape" 
              className="w-full h-full object-cover opacity-25"
            />
          </div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-20">
          <div className="fade-in stagger-1 mx-auto mb-8 flex justify-center">
            <img 
              src="/images/logo.png" 
              alt="Agriniri Evergreen Logo" 
              className="h-20 drop-shadow-md" 
            />
          </div>
          
          <h1 className="fade-in stagger-2 text-4xl md:text-6xl font-bold mb-8 text-green-900">
            Get In <span className="text-green-600">Touch</span>
          </h1>
          
          <p className="fade-in stagger-3 text-xl text-green-800/80 max-w-3xl mx-auto leading-relaxed">
            Have questions or want to learn more about Agriniri Evergreen Private Limited? 
            We're here to support your agricultural journey every step of the way.
          </p>
          
          <div className="fade-in stagger-4 mt-12">
            <div className="float-animation cursor-pointer flex flex-col items-center" onClick={() => {
                document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
              }}>
              <span className="text-green-600 text-sm font-medium mb-2">Scroll Down</span>
              <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Information Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quick Contact Card */}
            <div className="reveal-on-scroll fade-in stagger-1 bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 text-center shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-green-900 mb-4">Call Us</h3>
              <p className="text-green-700 mb-2">General Inquiries</p>
              <p className="text-lg font-medium mb-4">+91 98765 43210</p>
              <p className="text-green-700 mb-2">Customer Support</p>
              <p className="text-lg font-medium">+91 98765 12345</p>
            </div>
            
            {/* Email Card */}
            <div className="reveal-on-scroll fade-in stagger-2 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-8 text-center shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-4">Email Us</h3>
              <p className="text-amber-700 mb-2">General Inquiries</p>
              <p className="text-lg font-medium mb-4">info@agriniri.com</p>
              <p className="text-amber-700 mb-2">Support</p>
              <p className="text-lg font-medium">support@agriniri.com</p>
            </div>
            
            {/* Location Card */}
            <div className="reveal-on-scroll fade-in stagger-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Visit Us</h3>
              <p className="text-blue-700 mb-2">Headquarters</p>
              <p className="text-lg font-medium mb-4">123 Agricultural Way, Gorakhpur, Uttar Pradesh, India</p>
              <p className="text-blue-700 mb-2">Hours</p>
              <p className="text-lg font-medium">Mon-Fri: 9AM - 6PM</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="reveal-on-scroll fade-in">
            <Contact />
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="reveal-on-scroll fade-in rounded-xl overflow-hidden shadow-xl transform transition-all duration-700 hover:scale-[1.01]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114548.64332600547!2d83.31104529751871!3d26.75486520192201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991446a0c332489%3A0x36a6ab0ca6aab1a!2sGorakhpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1621512720978!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Location Map"
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="reveal-on-scroll fade-in text-center mb-12">
            <h2 className="text-3xl font-bold text-green-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-green-700 max-w-2xl mx-auto">
              Find quick answers to common questions about our services and products.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {["What agricultural products do you offer?", 
              "How can I become a partner?", 
              "Do you provide consultancy services?", 
              "What regions do you operate in?"
            ].map((question, index) => (
              <div 
                key={index}
                className={`reveal-on-scroll fade-in mb-4 ${index === 0 ? 'stagger-1' : index === 1 ? 'stagger-2' : index === 2 ? 'stagger-3' : 'stagger-4'}`}
              >
                <details className="group bg-white rounded-lg shadow-md overflow-hidden">
                  <summary className="flex justify-between items-center p-6 text-lg font-medium text-green-900 cursor-pointer">
                    {question}
                    <span className="transition-transform duration-300 group-open:rotate-180">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-green-700">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. 
                    Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac.</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-green-700 to-green-900 py-12">
        <div className="container mx-auto px-4">
          <div className="reveal-on-scroll fade-in flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Ready to grow with us?</h2>
              <p className="text-green-100 mt-2">Join our network of agricultural partners today.</p>
            </div>
            <a href="#" className="px-6 py-3 bg-white text-green-800 font-medium rounded-lg hover:bg-green-100 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
              Become a Partner
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
