import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const FeatureCards = () => {
  const features = [
    {
      id: 1,
      title: "Conference Themes",
      description: "Explore cutting-edge research areas in industrial textiles, from smart fabrics to sustainable manufacturing processes.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      icon: "Lightbulb",
      link: "/about-us",
      color: "primary"
    },
    {
      id: 2,
      title: "Expert Speakers",
      description: "Learn from renowned international experts, industry leaders, and pioneering researchers in textile technology.",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg",
      icon: "Users",
      link: "/expert-talk",
      color: "success"
    },
    {
      id: 3,
      title: "Registration",
      description: "Secure your spot at INDUTECH 2025 with early bird discounts and comprehensive conference packages.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      icon: "UserPlus",
      link: "/registration",
      color: "accent"
    },
    {
      id: 4,
      title: "Abstract Submission",
      description: "Submit your research abstracts across 17 specialized tracks and contribute to the advancement of industrial textiles.",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
      icon: "FileText",
      link: "/abstract-submission",
      color: "secondary"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      primary: "bg-primary text-primary-foreground",
      success: "bg-success text-success-foreground",
      accent: "bg-accent text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground"
    };
    return colorMap?.[color] || colorMap?.primary;
  };

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Conference Highlights
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Discover the key features that make INDUTECH 2025 the premier destination for industrial textiles professionals and researchers worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {features?.map((feature) => (
            <Link
              key={feature?.id}
              to={feature?.link}
              className="group bg-white rounded-xl shadow-subtle hover:shadow-elevated transition-smooth card-hover overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative h-52 sm:h-56 lg:h-60 overflow-hidden">
                <Image
                  src={feature?.image}
                  alt={feature?.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Icon */}
                <div className={`absolute top-4 right-4 w-14 h-14 sm:w-16 sm:h-16 rounded-full ${getColorClasses(feature?.color)} flex items-center justify-center shadow-elevated`}>
                  <Icon name={feature?.icon} size={24} className="sm:w-7 sm:h-7" />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-smooth">
                  {feature?.title}
                </h3>
                <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed mb-6">
                  {feature?.description}
                </p>
                
                {/* Call to Action */}
                <div className="flex items-center text-primary font-medium text-lg sm:text-xl group-hover:translate-x-1 transition-smooth">
                  <span>Learn More</span>
                  <Icon name="ArrowRight" size={20} className="ml-3 sm:w-6 sm:h-6" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional Info Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          <div className="bg-primary/5 rounded-lg p-8 lg:p-10 text-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Calendar" size={32} color="white" className="sm:w-10 sm:h-10" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">3 Days Event</h3>
            <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
              Comprehensive program spanning three full days of presentations, workshops, and networking.
            </p>
          </div>

          <div className="bg-success/5 rounded-lg p-8 lg:p-10 text-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Globe" size={32} color="white" className="sm:w-10 sm:h-10" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">International Reach</h3>
            <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
              Participants from over 25 countries sharing knowledge and fostering global collaboration.
            </p>
          </div>

          <div className="bg-accent/5 rounded-lg p-8 lg:p-10 text-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Award" size={32} color="white" className="sm:w-10 sm:h-10" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Excellence Awards</h3>
            <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
              Recognition for outstanding research contributions and innovative solutions in industrial textiles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;