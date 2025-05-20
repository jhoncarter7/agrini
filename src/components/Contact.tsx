import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setSubmitting(true);

    try {
      // collect all form fields
      const data = new FormData(formRef.current!);
      const templateParams = {
        to_name:   'Agriniri Evergreen',
        to_email:  '15singh.aman@gmail.com',
        user_name: data.get('user_name'),
        user_email:data.get('user_email'),
        subject:   data.get('subject'),
        message:   data.get('message'),
      };
      console.log('▶️ templateParams:', templateParams);

      // send via EmailJS without hidden inputs
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        templateParams
      );

      toast({ title: 'Message Sent!', description: 'We’ll be in touch shortly.' });
      formRef.current.reset();
    } catch (err: any) {
      console.error("EmailJS error:", err);
      toast({ title: 'Error', description: err.text || 'Could not send message.', variant: 'destructive' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-green-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-amber-200 rounded-full opacity-20 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4 reveal-on-scroll fade-in">Get In Touch</h2>
          <p className="text-green-700/80 max-w-2xl mx-auto reveal-on-scroll fade-in stagger-1">
            Have questions or want to learn more about our agricultural solutions?
            Fill out the form below and our team will be in touch shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Column */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-lg p-8 h-full transform transition-all duration-500 hover:shadow-xl reveal-on-scroll fade-in-left">
              <h3 className="text-2xl font-semibold mb-8 text-green-900 border-b border-green-200 pb-4">
                Contact Information
              </h3>

              <div className="space-y-8">
                <div className="flex items-start space-x-4 group">
                  <div className="bg-white p-3 rounded-full shadow-md group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                    <Mail className="h-6 w-6 text-green-600 group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800 mb-1">Email Us</h4>
                    <a href="mailto:15singh.aman@gmail.com" className="text-green-700 hover:text-green-500 transition-colors">15singh.aman@gmail.com</a>
                    <p className="text-green-600/70">support@agrinirivergreen.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-white p-3 rounded-full shadow-md group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                    <Phone className="h-6 w-6 text-green-600 group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800 mb-1">Call Us</h4>
                    <a href="tel:+15551234567" className="text-green-700 hover:text-green-500 transition-colors">+1 (555) 123-4567</a>
                    <p className="text-green-600/70">Mon-Fri, 9am-5pm EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-white p-3 rounded-full shadow-md group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                    <MapPin className="h-6 w-6 text-green-600 group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800 mb-1">Visit Us</h4>
                    <p className="text-green-700">Agriniri Evergreen Private Limited</p>
                    <p className="text-green-600/70">1234 AgriTech Boulevard</p>
                    <p className="text-green-600/70">Silicon Valley, CA 94025</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-6 border-t border-green-200">
                <h4 className="font-semibold text-green-800 mb-4">Connect With Us</h4>
                <div className="flex gap-3">
                  {['facebook', 'instagram', 'twitter', 'linkedin'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="bg-white p-3 rounded-full shadow-md hover:bg-green-600 hover:text-white transform hover:-translate-y-1 transition-all duration-300"
                      aria-label={`Follow us on ${social}`}
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        {social === 'facebook' && <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>}
                        {social === 'instagram' && <>
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </>}
                        {social === 'twitter' && <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>}
                        {social === 'linkedin' && <>
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </>}
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-3">
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="bg-white p-8 rounded-2xl shadow-lg space-y-6 reveal-on-scroll fade-in-right"
            >
              <h3 className="text-2xl font-semibold text-green-900">Send Us a Message</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="user_name"
                  placeholder="Your Name"
                  required
                />
                <Input
                  name="user_email"
                  type="email"
                  placeholder="Your Email"
                  required
                />
              </div>

              <Input
                name="subject"
                placeholder="Subject"
                required
              />

              <Textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                required
              />

              <Button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 rounded-lg"
              >
                {submitting
                  ? <span>Sending…</span>
                  : <>
                      <span>Send Message</span>
                      <Send className="h-5 w-5" />
                    </>}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
