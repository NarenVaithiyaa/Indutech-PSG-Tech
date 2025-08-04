import React from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  const navigate = useNavigate();
  
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const headerHeight = 100; // Account for responsive fixed header
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-18 md:pt-20 lg:pt-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/psgtech_tomb.jpg"
          alt="PSG College of Technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-8 sm:py-12 lg:py-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight">
          INDUTECH
          <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold text-accent mt-2 lg:mt-4">
            2025
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-6 sm:mb-8 lg:mb-12 font-medium leading-tight">
          6th International Conference on Industrial Textiles – Products, Applications and Prospects
        </p>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 lg:p-8 xl:p-10 2xl:p-12 mb-6 sm:mb-8 lg:mb-12 border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 text-center">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2 lg:mb-4">Date</h3>
              <p className="text-accent text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">11 & 12 December 2025</p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2 lg:mb-4">Venue</h3>
              <p className="text-accent text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">PSG College of Technology, Coimbatore, India</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center">
          <button
            className="bg-primary hover:bg-primary/90 text-white px-6 py-3 sm:px-7 sm:py-3 lg:px-8 lg:py-4 rounded-lg font-semibold text-base sm:text-lg lg:text-xl transition-smooth shadow-elevated"
            onClick={() => navigate('/registration')}
          >
            Register Now
          </button>
          <button
            className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 sm:px-7 sm:py-3 lg:px-8 lg:py-4 rounded-lg font-semibold text-base sm:text-lg lg:text-xl transition-smooth border border-white/30 backdrop-blur-sm"
            onClick={() => scrollToSection('#organizers')}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;