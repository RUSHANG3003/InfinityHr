
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="relative h-10 w-10">
                <div className="absolute inset-0 bg-primary-teal rounded-full -left-1 -top-1"></div>
                <div className="absolute inset-0 bg-secondary-green rounded-full left-1 top-1"></div>
                <div className="absolute inset-0 bg-white rounded-full flex items-center justify-center">
                  <span className="text-primary-teal font-bold text-xl">∞</span>
                </div>
              </div>
              <div className="ml-3">
                <div className="font-bold text-xl text-white">INFINITY</div>
                <div className="text-sm text-secondary-green">HR SERVICES</div>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6">
              Your complete HR & legal compliance partner, providing expert guidance and services to businesses of all sizes.
            </p>
            
            <div className="flex items-center">
              <span className="text-primary-teal mr-2">•</span>
              <span className="text-sm text-gray-400">YOUR COMPLIANCE PARTNER</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Labour Law Compliance
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Legal Documentation
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Trade Mark Registration
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  ISO Certification
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-primary-teal/20 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-primary-teal text-xs">•</span>
                </div>
                <span className="text-gray-400">
                  Shop No. 3, 2nd Floor, Aditya Complex, Vapi-396191
                </span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-primary-teal/20 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-primary-teal text-xs">•</span>
                </div>
                <span className="text-gray-400">
                  Office: +91 94094 33066<br />
                  Mobile: +91 99095 70056
                </span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-primary-teal/20 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-primary-teal text-xs">•</span>
                </div>
                <span className="text-gray-400">
                  infinityhrservices@outlook.com
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {currentYear} Infinity HR Services. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-4">
              <Link to="/privacy-policy" className="text-gray-500 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-500 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
