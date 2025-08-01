import React from 'react';

const RegistrationHeader = () => {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <div className="relative pt-32 pb-16 bg-gradient-to-r from-cyan-700 via-cyan-800 to-cyan-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Conference Registration
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Join leading experts in industrial textiles and technical innovations. 
              Secure your spot at India's premier conference on advanced textile technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationHeader;