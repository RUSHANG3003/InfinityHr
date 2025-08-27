
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Award, Briefcase, GraduationCap, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-28 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-block px-3 py-1 bg-primary-teal/10 rounded-full text-primary-teal text-sm font-medium mb-4">
              About Infinity HR Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Your Trusted Partner in HR & Legal Compliance</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              With over 15 years of experience, we provide expert guidance and comprehensive solutions for all your HR and legal compliance needs.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in animate-delay-100">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded by Bhupendra Gandhi, Infinity HR Services was established with a vision to simplify the complex world of HR and legal compliance for businesses of all sizes. With extensive qualifications in HR, law, and business management, Mr. Gandhi built the consultancy on the foundation of expertise, integrity, and client-focused service.
              </p>
              <p className="text-gray-600 mb-6">
                Over the years, we have grown to become a trusted name in compliance consultancy, helping hundreds of businesses navigate the intricate landscape of labour laws, statutory requirements, and business regulations.
              </p>
              <p className="text-gray-600">
                Today, we continue to deliver exceptional service, staying updated with the latest regulatory changes and industry best practices to ensure our clients remain fully compliant while focusing on their core business operations.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 animate-fade-in animate-delay-300">
              <div className="col-span-1 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <Award className="h-12 w-12 text-primary-teal mb-6" />
                <h3 className="text-xl font-semibold mb-3">15+ Years</h3>
                <p className="text-gray-600">Of industry experience and expertise</p>
              </div>
              
              <div className="col-span-1 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <Users className="h-12 w-12 text-primary-teal mb-6" />
                <h3 className="text-xl font-semibold mb-3">300+</h3>
                <p className="text-gray-600">Satisfied clients across industries</p>
              </div>
              
              <div className="col-span-1 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <Briefcase className="h-12 w-12 text-primary-teal mb-6" />
                <h3 className="text-xl font-semibold mb-3">14+</h3>
                <p className="text-gray-600">Specialized legal services offered</p>
              </div>
              
              <div className="col-span-1 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <GraduationCap className="h-12 w-12 text-primary-teal mb-6" />
                <h3 className="text-xl font-semibold mb-3">Expert</h3>
                <p className="text-gray-600">Advanced qualifications in multiple fields</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <p className="text-gray-600">
              At Infinity HR Services, our work is guided by a set of core values that define who we are and how we serve our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 animate-fade-in animate-delay-100">
              <div className="h-16 w-16 rounded-full bg-primary-teal/10 flex items-center justify-center mb-6">
                <span className="text-primary-teal font-bold text-2xl">01</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Expertise</h3>
              <p className="text-gray-600">
                We pride ourselves on our deep knowledge and continuous learning in HR and legal domains to provide the best advice to our clients.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 animate-fade-in animate-delay-200">
              <div className="h-16 w-16 rounded-full bg-primary-teal/10 flex items-center justify-center mb-6">
                <span className="text-primary-teal font-bold text-2xl">02</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Integrity</h3>
              <p className="text-gray-600">
                We operate with honesty, transparency, and the highest ethical standards in all our client interactions and business dealings.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 animate-fade-in animate-delay-300">
              <div className="h-16 w-16 rounded-full bg-primary-teal/10 flex items-center justify-center mb-6">
                <span className="text-primary-teal font-bold text-2xl">03</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Client Focus</h3>
              <p className="text-gray-600">
                We put our clients' needs first, tailoring our solutions to their specific requirements and delivering exceptional service.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Meet Our Founder</h2>
              <p className="text-gray-600">
                The driving force behind Infinity HR Services
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-8 md:p-12 animate-fade-in animate-delay-200">
              <div className="flex flex-col md:flex-row items-center">
                <div className="mb-8 md:mb-0 md:mr-12">
                  <div className="h-32 w-32 rounded-full bg-primary-teal/10 flex items-center justify-center mx-auto">
                    <span className="text-primary-teal font-bold text-3xl">BG</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Bhupendra Gandhi</h3>
                  <p className="text-gray-600 mb-6">BSc(Chem), PGD-PTCT, MHRD, MBA(HR), LLB</p>
                  
                  <p className="text-gray-700 mb-6">
                    With over 15 years of experience in HR and legal compliance, Bhupendra Gandhi has established himself as an authority in the field. His extensive educational background spans chemistry, HR management, and law, providing him with a unique perspective on business compliance challenges.
                  </p>
                  
                  <p className="text-gray-700">
                    Mr. Gandhi founded Infinity HR Services with a mission to help businesses navigate the complex regulatory landscape with ease. His client-focused approach and commitment to excellence have been instrumental in building the company's reputation as a trusted compliance partner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gradient-to-r from-primary-teal to-secondary-green text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 animate-fade-in">Ready to Partner with Us?</h2>
            <p className="text-xl mb-12 opacity-90 animate-fade-in animate-delay-100">
              Let us help you navigate the complex world of HR and legal compliance with confidence.
            </p>
            <Button asChild className="bg-white text-primary-teal hover:bg-white/90 animate-fade-in animate-delay-200">
              <Link to="/contact">
                Contact Us Today
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

export default AboutPage;
