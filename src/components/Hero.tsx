
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 z-0"></div>
      
      {/* Decorative Elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-teal/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary-green/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-4">
              <span className="block">Your Complete</span>
              <span className="text-primary-teal">HR & Legal</span>
              <span className="block">Compliance Partner</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 md:pr-8 animate-fade-in animate-delay-200">
              Navigating complex HR legislation and compliance requirements with expertise and precision for businesses of all sizes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animate-delay-300">
              <Button asChild className="bg-primary-teal hover:bg-primary-teal/90 text-white px-6 py-6 rounded-md">
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-primary-teal text-primary-teal hover:bg-primary-teal/5 px-6 py-6 rounded-md">
                <Link to="/services">
                  Explore Services
                </Link>
              </Button>
            </div>
            
            <div className="mt-8 p-4 border border-gray-200 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm animate-fade-in animate-delay-500">
              <p className="text-sm text-gray-500 font-medium mb-2">Trusted by businesses for expert HR & legal compliance</p>
              <div className="flex flex-wrap gap-4 items-center">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">Factory Act 1948</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">ESIC Act 1948</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">PF Act 1952</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">ISO Certification</span>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end animate-fade-in animate-delay-100">
            <div className="max-w-md bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-center mb-5">
                <div className="relative w-20 h-20">
                  <div className="absolute inset-0 rounded-full border-2 border-primary-teal"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-primary-teal font-bold text-2xl">∞</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-primary-teal">INFINITY</h3>
                <p className="text-lg text-secondary-green">HR SERVICES</p>
              </div>
              
              <h3 className="text-lg font-bold mb-4 text-center">We Specialize In:</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-primary-teal flex items-center justify-center mr-3">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  </div>
                  <span>Labour Law Compliance</span>
                </li>
                <li className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-primary-teal flex items-center justify-center mr-3">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  </div>
                  <span>HR Documentation & Legal Drafting</span>
                </li>
                <li className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-primary-teal flex items-center justify-center mr-3">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  </div>
                  <span>Statutory Compliance Management</span>
                </li>
                <li className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-primary-teal flex items-center justify-center mr-3">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  </div>
                  <span>Trade Mark Registration</span>
                </li>
                <li className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-primary-teal flex items-center justify-center mr-3">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  </div>
                  <span>ISO Certification</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
