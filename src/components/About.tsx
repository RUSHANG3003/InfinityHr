
import { Check, Award, Users, BookOpen } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

export default function About() {
  const features = [
    "Expert guidance on labour law compliance",
    "Comprehensive HR documentation services",
    "Statutory compliance management",
    "Legal drafting and advisory services",
    "Trade mark registration assistance",
    "ISO certification support"
  ];

  return (
    <section className="section-padding" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in animate-delay-100">
            <div className="inline-block px-3 py-1 bg-primary-teal/10 rounded-full text-primary-teal text-sm font-medium mb-4">
              About Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Trusted Partner in HR & Legal Compliance
            </h2>
            
            <p className="text-gray-600 mb-8">
              Infinity HR Services is a leading consultancy specializing in HR and legal compliance. With decades of experience, we help businesses navigate the complex landscape of labour laws and statutory requirements with confidence.
            </p>
            
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-secondary-green/10 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-3 w-3 text-secondary-green" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button asChild className="bg-primary-teal hover:bg-primary-teal/90 text-white">
              <Link to="/about">
                Learn More About Us
              </Link>
            </Button>
          </div>
          
          <div className="relative animate-fade-in animate-delay-300">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary-teal/10 to-secondary-green/10 rounded-2xl blur-lg"></div>
            
            <div className="relative grid grid-cols-2 gap-4">
              <div className="col-span-1 space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <Award className="h-10 w-10 text-primary-teal mb-4" />
                  <h3 className="text-xl font-semibold mb-2">15+ Years</h3>
                  <p className="text-gray-600 text-sm">Of industry experience in HR & legal compliance</p>
                </div>
                
                <div className="bg-primary-teal p-6 rounded-xl shadow-sm">
                  <BookOpen className="h-10 w-10 text-white mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-white">Expertise</h3>
                  <p className="text-white/80 text-sm">Advanced qualifications in HR, law and business</p>
                </div>
              </div>
              
              <div className="col-span-1 space-y-4 mt-6">
                <div className="bg-secondary-green p-6 rounded-xl shadow-sm">
                  <Users className="h-10 w-10 text-white mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-white">300+</h3>
                  <p className="text-white/80 text-sm">Satisfied clients across industries</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary-teal/10 flex items-center justify-center">
                      <span className="text-primary-teal font-bold text-xl">∞</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                  <p className="text-gray-600 text-sm">To simplify compliance for businesses of all sizes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
