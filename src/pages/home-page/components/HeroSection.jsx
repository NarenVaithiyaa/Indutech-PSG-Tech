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
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold mb-6 lg:mb-8 leading-tight">
          INDUTECH
          <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-accent mt-2 lg:mt-4">
            2025
          </span>
        </h1>
        
        <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-8 lg:mb-12 font-medium">
          International Conference on Industrial Textiles
        </p>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 sm:p-8 lg:p-10 xl:p-12 mb-8 lg:mb-12 border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 text-center">
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2 lg:mb-4">Date</h3>
              <p className="text-accent text-2xl sm:text-3xl lg:text-4xl font-bold">15-17 March 2025</p>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2 lg:mb-4">Venue</h3>
              <p className="text-accent text-2xl sm:text-3xl lg:text-4xl font-bold">New Delhi, India</p>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2 lg:mb-4">Theme</h3>
              <p className="text-accent text-2xl sm:text-3xl lg:text-4xl font-bold">Innovation &amp; Sustainability</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center">
          <a
            href="#registration"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 sm:px-10 sm:py-5 lg:px-12 lg:py-6 rounded-lg font-semibold text-xl sm:text-2xl lg:text-3xl transition-smooth shadow-elevated"
          >
            Register Now
          </a>
          <a
            href="#about"
            className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 sm:px-10 sm:py-5 lg:px-12 lg:py-6 rounded-lg font-semibold text-xl sm:text-2xl lg:text-3xl transition-smooth border border-white/30 backdrop-blur-sm"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;