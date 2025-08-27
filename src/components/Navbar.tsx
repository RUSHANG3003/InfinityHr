
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-white/90 backdrop-blur-md shadow-sm' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative h-10 w-10">
              <div className="absolute inset-0 rounded-full border-2 border-primary-teal flex items-center justify-center">
                <span className="text-primary-teal font-bold text-lg">∞</span>
              </div>
            </div>
            <div>
              <span className="font-bold text-xl text-primary-teal">INFINITY</span>
              <div className="flex items-center">
                <span className="text-secondary-green font-medium text-sm">HR SERVICES</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium hover:text-primary-teal transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary-teal transition-colors">
              About
            </Link>
            <Link to="/services" className="text-sm font-medium hover:text-primary-teal transition-colors">
              Services
            </Link>
            <Link to="/contact" className="text-sm font-medium hover:text-primary-teal transition-colors">
              Contact
            </Link>
            <Button className="bg-primary-teal hover:bg-primary-teal/90 text-white">
              Schedule Consultation
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-primary-teal" />
            ) : (
              <Menu className="h-6 w-6 text-primary-teal" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-scale-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-base font-medium hover:text-primary-teal transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-base font-medium hover:text-primary-teal transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="text-base font-medium hover:text-primary-teal transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className="text-base font-medium hover:text-primary-teal transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button 
              className="bg-primary-teal hover:bg-primary-teal/90 text-white w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
