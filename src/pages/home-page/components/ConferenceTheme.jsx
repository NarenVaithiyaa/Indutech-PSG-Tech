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
    <section id="about" className="py-16 lg:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Conference Theme: Innovation &amp; Sustainability
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              INDUTECH 2025 focuses on the convergence of innovation and sustainability in industrial textiles. 
              Our theme explores how cutting-edge technologies can drive sustainable practices while maintaining 
              performance excellence in textile manufacturing and applications.
            </p>
          </div>
        </div>

        {/* Main Theme Visual */}
        <div className="mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-elevated">
            <Image
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
              alt="Industrial textile manufacturing innovation"
              className="w-full h-64 lg:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/80 flex items-center justify-center">
              <div className="text-center text-white px-6">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Shaping the Future of Industrial Textiles
                </h3>
                <p className="text-lg lg:text-xl opacity-90 max-w-2xl">
                  Where traditional craftsmanship meets modern technology to create sustainable solutions for tomorrow's challenges.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Theme Areas Grid */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-12">
            Key Research Areas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {themeAreas?.map((area) => (
              <div
                key={area?.id}
                className={`rounded-xl p-6 border-2 transition-smooth hover:shadow-elevated card-hover ${getColorClasses(area?.color)}`}
              >
                <div className={`w-14 h-14 rounded-full ${getIconBgClasses(area?.color)} flex items-center justify-center mb-4`}>
                  <Icon name={area?.icon} size={24} />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-3">
                  {area?.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {area?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-subtle text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
              Join the Innovation Movement
            </h3>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Be part of the global community driving sustainable innovation in industrial textiles. 
              Connect with researchers, industry leaders, and innovators who are shaping the future of our industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/abstract-submission"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-smooth shadow-elevated inline-flex items-center justify-center"
              >
                <Icon name="FileText" size={20} className="mr-2" />
                Submit Abstract
              </a>
              <a
                href="/registration"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-smooth shadow-elevated inline-flex items-center justify-center"
              >
                <Icon name="UserPlus" size={20} className="mr-2" />
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