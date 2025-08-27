
import { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    // Here you would typically send the form data to your backend
    alert('Thank you for your message. We will contact you shortly!');
    setFormState({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <section className="section-padding bg-gray-50" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-block px-3 py-1 bg-primary-teal/10 rounded-full text-primary-teal text-sm font-medium mb-4">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us Today</h2>
          <p className="text-gray-600">
            Have questions about our services? Need expert advice on HR and legal compliance? We're here to help.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in animate-delay-100">
            <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-teal/50"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-teal/50"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-teal/50"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-teal/50"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="legal-compliance">Legal Compliance</option>
                      <option value="documentation">HR Documentation</option>
                      <option value="trademark">Trade Mark Registration</option>
                      <option value="iso">ISO Certification</option>
                      <option value="other">Other Services</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-teal/50"
                    required
                  ></textarea>
                </div>
                
                <Button type="submit" className="bg-primary-teal hover:bg-primary-teal/90 text-white w-full md:w-auto">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
          
          <div className="animate-fade-in animate-delay-300">
            <div className="bg-gradient-to-br from-primary-teal to-primary-teal/90 text-white rounded-xl p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Phone</p>
                    <p className="text-white/80">Office: +91 94094 33066</p>
                    <p className="text-white/80">Mobile: +91 99095 70056, +91 63559 40071</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <p className="text-white/80">infinityhrservices@outlook.com</p>
                    <p className="text-white/80">infinityhrvapi@outlook.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Address</p>
                    <p className="text-white/80">
                      Shop No. 3, 2nd Floor, Aditya Complex, 
                      Behind Indian Bank, Telephone Exchange Road, 
                      Nr. G.I.D.C. Char Rasta, Vapi-396191. 
                      Dist.: Valsad.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h3 className="text-xl font-semibold mb-4">Meet Our Expert</h3>
              
              <div className="flex items-start">
                <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center mr-4 overflow-hidden">
                  <div className="text-primary-teal font-bold text-xl">BG</div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Bhupendra Gandhi</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    BSc(Chem), PGD-PTCT, MHRD, MBA(HR), LLB
                  </p>
                  <div className="flex items-center">
                    <MessageSquare className="h-4 w-4 text-primary-teal mr-2" />
                    <span className="text-sm">15+ years of industry experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
