
import { 
  FileText, 
  CheckCircle, 
  BookOpen, 
  Scale, 
  Shield, 
  FileCheck, 
  Briefcase
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: <Shield className="h-6 w-6 text-primary-teal" />,
      title: "Legal Compliance",
      description: "Expert guidance on Factory Act, ESIC, PF Act, and more to keep your business fully compliant.",
      items: ["Factory Act'1948", "ESIC Act'1948", "PF Act'1952", "Gratuity Act'1972"]
    },
    {
      icon: <FileText className="h-6 w-6 text-primary-teal" />,
      title: "Documentation",
      description: "Professional creation and management of all your HR and legal documentation needs.",
      items: ["Legal Drafting Agreement", "Computerised Records", "Contract Labour Act'1970", "HR Policy Creation"]
    },
    {
      icon: <Briefcase className="h-6 w-6 text-primary-teal" />,
      title: "Business Services",
      description: "Comprehensive support for business operations and statutory requirements.",
      items: ["Trade Mark Registration", "ISO Certification", "Billing & Accounting", "IT Return"]
    },
    {
      icon: <Scale className="h-6 w-6 text-primary-teal" />,
      title: "Legal Advisory",
      description: "Strategic legal advice tailored to your business needs and industry regulations.",
      items: ["The Professional Act", "Minimum Wages Act'1948", "Food & Drugs Application", "Employment Exchanges Act"]
    }
  ];

  return (
    <section className="section-padding bg-gray-50 relative overflow-hidden" id="services">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-teal/5 rounded-full"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-green/5 rounded-full"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-block px-3 py-1 bg-primary-teal/10 rounded-full text-primary-teal text-sm font-medium mb-4">
            Our Expertise
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive HR & Legal Services</h2>
          <p className="text-gray-600">
            We provide tailored solutions to address the complete spectrum of HR and legal compliance needs, helping your business thrive while staying compliant.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 service-card animate-fade-in"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="h-12 w-12 rounded-lg bg-primary-teal/10 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 text-sm">{service.description}</p>
              
              <ul className="space-y-2">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-secondary-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-primary-teal to-secondary-green rounded-xl p-8 md:p-12 shadow-lg animate-scale-in">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to ensure complete compliance?</h3>
              <p className="text-white/90">
                Partner with Infinity HR Services for all your HR and legal compliance needs.
              </p>
            </div>
            
            <Button asChild className="bg-white text-primary-teal hover:bg-white/90 px-6 py-6">
              <Link to="/contact">
                Schedule a Consultation
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
