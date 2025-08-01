import React from 'react';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg"
          alt="Industrial textiles manufacturing facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
        <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
          INDUTECH
          <span className="block text-3xl lg:text-5xl font-semibold text-accent mt-2">
            2025
          </span>
        </h1>
        
        <p className="text-xl lg:text-2xl mb-8 font-medium">
          International Conference on Industrial Textiles
        </p>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 lg:p-8 mb-8 border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">Date</h3>
              <p className="text-accent text-xl font-bold">15-17 March 2025</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Venue</h3>
              <p className="text-accent text-xl font-bold">New Delhi, India</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Theme</h3>
              <p className="text-accent text-xl font-bold">Innovation &amp; Sustainability</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#registration"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-smooth shadow-elevated"
          >
            Register Now
          </a>
          <a
            href="#about"
            className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-smooth border border-white/30 backdrop-blur-sm"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;