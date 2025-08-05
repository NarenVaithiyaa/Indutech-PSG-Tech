import React, { useEffect } from 'react';
import TextileIndustriesCarousel from './components/TextileIndustriesCarousel';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';

const HomePage = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e) => {
      const target = e?.target?.getAttribute('href');
      if (target && target?.startsWith('#')) {
        e?.preventDefault();
        const element = document.querySelector(target);
        if (element) {
          const headerHeight = 80; // Account for fixed header
          const elementPosition = element?.offsetTop - headerHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    // Add event listeners to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks?.forEach(link => {
      link?.addEventListener('click', handleSmoothScroll);
    });

    // Cleanup event listeners
    return () => {
      anchorLinks?.forEach(link => {
        link?.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Organizers Section */}
        <section id="organizers" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Organized by</h2>
              <div className="flex flex-col items-center justify-center mb-8">
                <img 
                  src="/assets/images/psgtech.png" 
                  alt="PSG College of Technology" 
                  className="max-h-40 max-w-xs object-contain"
                />
              </div>
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-8 rounded-lg border border-cyan-200">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                  DEPARTMENTS OF TEXTILE TECHNOLOGY AND AUTOMOBILE ENGINEERING
                </h3>
                <h4 className="text-lg lg:text-xl font-semibold text-cyan-700 mb-2">
                  PSG COLLEGE OF TECHNOLOGY
                </h4>
                <p className="text-gray-600 text-lg text-center">COIMBATORE, INDIA</p>
              </div>
            </div>
          </div>
        </section>


        {/* Collaboration Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">In Collaboration With</h2>
              {/* Partner Logos Section (moved here) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center mb-12">
                <div className="flex flex-col items-center justify-center h-40">
                  <img 
                    src="/assets/images/ministry.png" 
                    alt="Ministry of Textiles" 
                    className="max-h-full max-w-full object-contain"
                  />
                  <span className="mt-4 text-base font-semibold text-gray-800 text-center">Ministry of Textiles</span>
                </div>
                <div className="flex flex-col items-center justify-center h-40">
                  <img 
                    src="/assets/images/deakin-logo-transparent.png" 
                    alt="Deakin University" 
                    className="max-h-full max-w-full object-contain"
                  />
                  <span className="mt-4 text-base font-semibold text-gray-800 text-center">Deakin University</span>
                </div>
                <div className="flex flex-col items-center justify-center h-40">
                  <img 
                    src="/assets/images/uni_man.jpg" 
                    alt="University of Manchester" 
                    className="max-h-full max-w-full object-contain"
                  />
                  <span className="mt-4 text-base font-semibold text-gray-800 text-center">University of Manchester</span>
                </div>
              </div>
              {/* Collaboration Cards Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Ministry of Textiles */}
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">OFFICE OF THE TEXTILE COMMISSIONER</h3>
                  <p className="text-cyan-700 font-semibold text-center">MINISTRY OF TEXTILES</p>
                  <p className="text-gray-600 text-center">GOVERNMENT OF INDIA</p>
                </div>

                {/* Deakin University */}
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">INSTITUTE FOR FRONTIER MATERIALS (IFM)</h3>
                  <p className="text-cyan-700 font-semibold text-center">DEAKIN UNIVERSITY, AUSTRALIA</p>
                </div>

                {/* University of Manchester */}
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">NORTHWEST COMPOSITES CENTRE</h3>
                  <p className="text-cyan-700 font-semibold text-center">DEPARTMENT OF MATERIALS,</p>
                  <p className="text-gray-600 text-center">UNIVERSITY OF MANCHESTER</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Textile Industries Carousel Section */}
        <section className="bg-muted/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <TextileIndustriesCarousel />
          </div>
        </section>

        {/* Conference Theme Section */}
        <section className="py-16 bg-gradient-to-r from-cyan-700 via-cyan-800 to-cyan-900">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">Conference Theme</h2>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
                <p className="text-white text-lg leading-relaxed">
                  The 6th Indutech conference 2025 aims at focusing on Products, Applications and Prospects of Industrial Textiles. 
                  The term 'Industrial Textiles' is a subgroup of Technical Textiles, referring to textiles used in various products 
                  such as filters, conveyor belts, abrasive substrates, electrical components, cables, flexible seals, acoustic and 
                  thermal insulation of industrial appliances and so forth. As the growth of conventional textile industry is approaching 
                  a level of saturation, it is high time that textile industry ventures more aggressively to take its rightful share in 
                  this rapid growing sector. This conference offers a platform to discuss current trends and potential opportunities in 
                  Industrial Textiles. The conference consists of plenary lectures by eminent speakers from reputed industries and 
                  institutes, oral and poster presentations by researchers.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Conference Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex items-center justify-center w-24 h-24">
                  <img 
                    src="/assets/images/Indutech_logo.png" 
                    alt="INDUTECH 2025 Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">INDUTECH 2025</h3>
                  <p className="text-sm text-white/70">6th International Conference on Industrial Textiles</p>
                </div>
              </div>
              <p className="text-white/80 mb-4 leading-relaxed">
                Join us for three days of groundbreaking research presentations, networking opportunities, 
                and collaborative discussions that will shape the future of industrial textiles.
              </p>
              <div className="text-sm text-white/70">
                <p className="mb-1"><strong>Date:</strong> 11 & 12 December 2025</p>
                <p className="mb-1"><strong>Venue:</strong> PSG College of Technology, Coimbatore, India</p>
                <p><strong>Theme:</strong> Industrial Textiles – Products, Applications and Prospects</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-base">
                <li><a href="/about-us" className="text-white/80 hover:text-white transition-smooth">About Us</a></li>
                <li><a href="/expert-talk" className="text-white/80 hover:text-white transition-smooth">Expert Speakers</a></li>
                <li><a href="/committee" className="text-white/80 hover:text-white transition-smooth">Committee</a></li>
                <li><a href="/abstract-submission" className="text-white/80 hover:text-white transition-smooth">Abstract Submission</a></li>
                <li><a href="/registration" className="text-white/80 hover:text-white transition-smooth">Registration</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="text-base text-white/80 space-y-2">
                <p>Conference Secretariat</p>
                <p>Email: psgindutech@psgtech.ac.in</p>
                <p>Phone: +91-422-2572177</p>
                <p>Address: PSG College of Technology, Coimbatore, India</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white/70">
              © {new Date()?.getFullYear()} INDUTECH 2025. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/70 hover:text-white transition-smooth text-sm">Privacy Policy</a>
              <a href="#" className="text-white/70 hover:text-white transition-smooth text-sm">Terms of Service</a>
              <a href="#" className="text-white/70 hover:text-white transition-smooth text-sm">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;