import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const ConferenceTheme = () => {
  const themeAreas = [
    {
      id: 1,
      title: "Smart Textiles & Wearable Technology",
      description: "Integration of electronics and sensors into textile structures for advanced functionality.",
      icon: "Cpu",
      color: "primary"
    },
    {
      id: 2,
      title: "Sustainable Manufacturing",
      description: "Eco-friendly production processes and circular economy principles in textile manufacturing.",
      icon: "Leaf",
      color: "success"
    },
    {
      id: 3,
      title: "Advanced Composite Materials",
      description: "High-performance textile-reinforced composites for aerospace and automotive applications.",
      icon: "Layers",
      color: "accent"
    },
    {
      id: 4,
      title: "Medical & Healthcare Textiles",
      description: "Biocompatible materials and textile solutions for medical and healthcare applications.",
      icon: "Heart",
      color: "error"
    },
    {
      id: 5,
      title: "Protective & Safety Textiles",
      description: "Advanced materials for personal protection equipment and safety applications.",
      icon: "Shield",
      color: "warning"
    },
    {
      id: 6,
      title: "Digital Textile Manufacturing",
      description: "Industry 4.0 technologies, automation, and digital transformation in textile production.",
      icon: "Settings",
      color: "secondary"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      primary: "bg-primary/10 text-primary border-primary/20",
      success: "bg-success/10 text-success border-success/20",
      accent: "bg-accent/10 text-accent border-accent/20",
      error: "bg-error/10 text-error border-error/20",
      warning: "bg-warning/10 text-warning border-warning/20",
      secondary: "bg-secondary/10 text-secondary border-secondary/20"
    };
    return colorMap?.[color] || colorMap?.primary;
  };

  const getIconBgClasses = (color) => {
    const colorMap = {
      primary: "bg-primary text-primary-foreground",
      success: "bg-success text-success-foreground",
      accent: "bg-accent text-accent-foreground",
      error: "bg-error text-error-foreground",
      warning: "bg-warning text-warning-foreground",
      secondary: "bg-secondary text-secondary-foreground"
    };
    return colorMap?.[color] || colorMap?.primary;
  };

  return (
    <section id="about" className="py-20 lg:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8">
            Conference Theme: Innovation &amp; Sustainability
          </h2>
          <div className="max-w-5xl mx-auto">
            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-10 leading-relaxed text-justify" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
              INDUTECH 2025 focuses on the convergence of innovation and sustainability in industrial textiles. 
              Our theme explores how cutting-edge technologies can drive sustainable practices while maintaining 
              performance excellence in textile manufacturing and applications.
            </p>
          </div>
        </div>

        {/* Main Theme Visual */}
        <div className="mb-20">
          <div className="relative rounded-2xl overflow-hidden shadow-elevated">
            <Image
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
              alt="Industrial textile manufacturing innovation"
              className="w-full h-72 sm:h-80 lg:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/80 flex items-center justify-center">
              <div className="text-center text-white px-6">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                  Shaping the Future of Industrial Textiles
                </h3>
                <p className="text-xl sm:text-2xl lg:text-3xl opacity-90 max-w-3xl leading-relaxed">
                  Where traditional craftsmanship meets modern technology to create sustainable solutions for tomorrow's challenges.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Theme Areas Grid */}
        <div className="mb-20">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-center mb-16">
            Key Research Areas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {themeAreas?.map((area) => (
              <div
                key={area?.id}
                className={`rounded-xl p-8 lg:p-10 border-2 transition-smooth hover:shadow-elevated card-hover ${getColorClasses(area?.color)}`}
              >
                <div className={`w-18 h-18 sm:w-20 sm:h-20 rounded-full ${getIconBgClasses(area?.color)} flex items-center justify-center mb-6`}>
                  <Icon name={area?.icon} size={32} className="sm:w-10 sm:h-10" />
                </div>
                <h4 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  {area?.title}
                </h4>
                <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
                  {area?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-white rounded-2xl p-10 lg:p-16 shadow-subtle text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8">
              Join the Innovation Movement
            </h3>
            <p className="text-muted-foreground text-xl sm:text-2xl lg:text-3xl mb-12 leading-relaxed">
              Be part of the global community driving sustainable innovation in industrial textiles. 
              Connect with researchers, industry leaders, and innovators who are shaping the future of our industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/abstract-submission"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 rounded-lg font-semibold text-xl sm:text-2xl transition-smooth shadow-elevated inline-flex items-center justify-center"
              >
                <Icon name="FileText" size={24} className="mr-3 sm:w-7 sm:h-7" />
                Submit Abstract
              </a>
              <a
                href="/registration"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-6 rounded-lg font-semibold text-xl sm:text-2xl transition-smooth shadow-elevated inline-flex items-center justify-center"
              >
                <Icon name="UserPlus" size={24} className="mr-3 sm:w-7 sm:h-7" />
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConferenceTheme;