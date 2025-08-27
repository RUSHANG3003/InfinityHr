
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-28 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-block px-3 py-1 bg-primary-teal/10 rounded-full text-primary-teal text-sm font-medium mb-4">
              Contact Us
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch With Us</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Have questions or need assistance? Our team is here to help you with all your HR and legal compliance needs.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3 animate-fade-in animate-delay-100">
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <h2 className="text-2xl font-bold mb-8">Send Us a Message</h2>
                
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-teal/50"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-teal/50"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-teal/50"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-teal/50"
                        required
                      >
                        <option value="">Select a service</option>
                        <option value="labour-law">Labour Law Compliance</option>
                        <option value="documentation">Documentation & Records</option>
                        <option value="business">Business Services</option>
                        <option value="legal">Legal Advisory</option>
                        <option value="other">Other Services</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-teal/50"
                      required
                    ></textarea>
                  </div>
                  
                  <Button type="submit" className="bg-primary-teal hover:bg-primary-teal/90 text-white px-8 py-6">
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
            
            <div className="lg:col-span-2 animate-fade-in animate-delay-300">
              <div className="bg-gradient-to-br from-primary-teal to-primary-teal/90 text-white rounded-xl p-8 shadow-lg mb-8">
                <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mr-6">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Phone</h3>
                      <p className="text-white/80 mb-1">Office: +91 94094 33066</p>
                      <p className="text-white/80 mb-1">Mobile: +91 99095 70056</p>
                      <p className="text-white/80">Mobile: +91 63559 40071</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mr-6">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Email</h3>
                      <p className="text-white/80 mb-1">infinityhrservices@outlook.com</p>
                      <p className="text-white/80">infinityhrvapi@outlook.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mr-6">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Address</h3>
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
              
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <h3 className="text-xl font-semibold mb-6">Business Hours</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-primary-teal/10 flex items-center justify-center mr-4">
                      <Clock className="h-5 w-5 text-primary-teal" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Working Hours</h4>
                      <p className="text-gray-600 text-sm">Monday - Friday: 9:30 AM - 6:30 PM</p>
                      <p className="text-gray-600 text-sm">Saturday: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-primary-teal/10 flex items-center justify-center mr-4">
                      <Calendar className="h-5 w-5 text-primary-teal" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Consultation</h4>
                      <p className="text-gray-600 text-sm">
                        Schedule an appointment for personalized consultation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">
                Find answers to commonly asked questions about our services.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in animate-delay-200">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-3">What services does Infinity HR Services offer?</h3>
                <p className="text-gray-600">
                  We offer a comprehensive range of HR and legal compliance services, including labour law compliance, documentation services, business services, and legal advisory.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-3">How can I schedule a consultation?</h3>
                <p className="text-gray-600">
                  You can schedule a consultation by filling out our contact form, calling our office, or sending us an email. We'll respond promptly to set up a meeting.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-3">Do you serve clients outside of Vapi?</h3>
                <p className="text-gray-600">
                  Yes, while our office is located in Vapi, we serve clients across various locations. We can provide remote consultations and services as needed.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-3">What makes Infinity HR Services unique?</h3>
                <p className="text-gray-600">
                  Our extensive expertise, personalized approach, and comprehensive service offerings set us apart. We provide tailored solutions for your specific compliance needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
