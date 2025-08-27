
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Check, Shield, FileText, Briefcase, Scale, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceCategories = [
    {
      title: "Labour Law Compliance",
      icon: <Shield className="h-12 w-12 text-primary-teal" />,
      description: "Comprehensive solutions for all labour law compliance requirements, ensuring your business remains fully compliant with relevant regulations.",
      services: [
        "Factory Act'1948 compliance",
        "ESIC Act'1948 compliance",
        "PF Act'1952 compliance",
        "Gratuity Act'1972 compliance",
        "Minimum Wages Act'1948 compliance",
        "Contract Labour Act'1970 compliance",
        "Employment Exchanges Act'1959 compliance"
      ]
    },
    {
      title: "Documentation & Records",
      icon: <FileText className="h-12 w-12 text-primary-teal" />,
      description: "Professional creation and management of all HR and legal documentation, ensuring proper record-keeping and compliance.",
      services: [
        "Legal drafting agreements",
        "The Professional Act documentation",
        "Maintaining computerised records",
        "HR policy creation and documentation",
        "Labour contract documentation",
        "Compliance certificates management",
        "Record digitization and organization"
      ]
    },
    {
      title: "Business Services",
      icon: <Briefcase className="h-12 w-12 text-primary-teal" />,
      description: "Supporting your business operations with specialized services to enhance compliance and productivity.",
      services: [
        "Trade Mark Registration",
        "ISO Certification",
        "Billing, Accounting & IT Return",
        "Food & Drugs Application",
        "Business license assistance",
        "Regulatory filings management",
        "Compliance audits and reviews"
      ]
    },
    {
      title: "Legal Advisory",
      icon: <Scale className="h-12 w-12 text-primary-teal" />,
      description: "Expert legal advice on various aspects of business compliance, helping you navigate complex regulatory landscapes.",
      services: [
        "HR compliance consulting",
        "Labour dispute resolution",
        "Regulatory change management",
        "Compliance risk assessment",
        "Legal representation for compliance matters",
        "Due diligence for compliance matters",
        "Compliance training for management"
      ]
    }
  ];

  const staticServices = [
    "Factory Act'1948",
    "ESIC Act'1948",
    "Payment of Bonus Act'1965",
    "Gratuity Act'1972",
    "The Professional Act",
    "Maintaining Computerised Records",
    "Billing, Accounting & IT Return",
    "Legal Drafting Agreement",
    "Contract Labour Act'1970",
    "PF Act'1952",
    "Minimum Wages Act'1948",
    "Employment Exchanges (CNV) Act'1959",
    "Food & Drugs Application",
    "Trade Mark Registration",
    "ISO Certification"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-28 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-block px-3 py-1 bg-primary-teal/10 rounded-full text-primary-teal text-sm font-medium mb-4">
              Our Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Comprehensive HR & Legal Compliance Solutions</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a wide range of services designed to help your business navigate the complex landscape of HR and legal compliance with confidence.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCategories.map((category, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 animate-fade-in service-card"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="mb-6">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{category.title}</h3>
                <p className="text-gray-600 mb-6">
                  {category.description}
                </p>
                <ul className="space-y-3">
                  {category.services.slice(0, 5).map((service, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary-green mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">All Our Specializations</h2>
            <p className="text-gray-600">
              At Infinity HR Services, we specialize in a wide range of compliance areas, providing expert guidance and solutions tailored to your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6 max-w-5xl mx-auto animate-fade-in animate-delay-200">
            {staticServices.map((service, index) => (
              <div key={index} className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-secondary-green/10 flex items-center justify-center mr-3 mt-0.5">
                  <Check className="h-3 w-3 text-secondary-green" />
                </div>
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 border border-gray-100 max-w-5xl mx-auto animate-fade-in">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-8 md:mb-0 md:mr-12 md:w-1/3">
                <div className="relative h-24 w-24 mx-auto">
                  <div className="absolute inset-0 bg-primary-teal rounded-full -left-2 -top-2"></div>
                  <div className="absolute inset-0 bg-secondary-green rounded-full left-2 top-2"></div>
                  <div className="absolute inset-0 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center">
                    <span className="text-primary-teal font-bold text-3xl">∞</span>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Service Approach</h2>
                <p className="text-gray-600 mb-6">
                  At Infinity HR Services, we follow a client-centric approach to service delivery:
                </p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary-teal/10 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-primary-teal font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Consultation & Assessment</h4>
                      <p className="text-gray-600 text-sm">We begin with a thorough assessment of your current compliance status and needs.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary-teal/10 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-primary-teal font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Tailored Solution Design</h4>
                      <p className="text-gray-600 text-sm">We develop customized solutions addressing your specific compliance requirements.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary-teal/10 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-primary-teal font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Implementation & Support</h4>
                      <p className="text-gray-600 text-sm">We implement solutions and provide ongoing support to ensure sustained compliance.</p>
                    </div>
                  </li>
                </ul>
                
                <Button asChild className="bg-primary-teal hover:bg-primary-teal/90 text-white">
                  <Link to="/contact">
                    Schedule a Consultation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gradient-to-r from-primary-teal to-secondary-green text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 animate-fade-in">Ready to Ensure Complete Compliance?</h2>
            <p className="text-xl mb-12 opacity-90 animate-fade-in animate-delay-100">
              Partner with Infinity HR Services for expert guidance and comprehensive solutions.
            </p>
            <Button asChild className="bg-white text-primary-teal hover:bg-white/90 animate-fade-in animate-delay-200">
              <Link to="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
