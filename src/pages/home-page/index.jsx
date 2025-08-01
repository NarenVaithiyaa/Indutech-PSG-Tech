import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import CollaborationSection from './components/CollaborationSection';
import FeatureCards from './components/FeatureCards';
import ConferenceTheme from './components/ConferenceTheme';
import NewsUpdates from './components/NewsUpdates';

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
      <main className="pt-20">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Collaboration Partners */}
        <CollaborationSection />
        
        {/* Feature Cards */}
        <FeatureCards />
        
        {/* Conference Theme */}
        <ConferenceTheme />
        
        {/* News & Updates */}
        <NewsUpdates />
      </main>
      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Conference Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                  <span className="text-white font-bold text-lg">I</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">INDUTECH 2025</h3>
                  <p className="text-sm text-white/70">International Conference on Industrial Textiles</p>
                </div>
              </div>
              <p className="text-white/80 mb-4 leading-relaxed">
                Join us for three days of groundbreaking research presentations, networking opportunities, 
                and collaborative discussions that will shape the future of industrial textiles.
              </p>
              <div className="text-sm text-white/70">
                <p className="mb-1"><strong>Date:</strong> 15-17 March 2025</p>
                <p className="mb-1"><strong>Venue:</strong> New Delhi, India</p>
                <p><strong>Theme:</strong> Innovation &amp; Sustainability</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
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
              <div className="text-sm text-white/80 space-y-2">
                <p>Conference Secretariat</p>
                <p>Email: info@indutech2025.org</p>
                <p>Phone: +91-11-2345-6789</p>
                <p>Address: New Delhi, India</p>
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