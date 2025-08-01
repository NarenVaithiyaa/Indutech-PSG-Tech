import React from 'react';
import Icon from '../../../components/AppIcon';

const NewsUpdates = () => {
  const updates = [
    {
      id: 1,
      title: "Early Bird Registration Extended",
      description: "Due to overwhelming response, early bird registration has been extended until 31st January 2025.",
      date: "2025-01-15",
      type: "announcement",
      icon: "Clock",
      color: "accent"
    },
    {
      id: 2,
      title: "Keynote Speaker Announcement",
      description: "Dr. Sarah Johnson, leading expert in smart textiles, confirmed as keynote speaker for Day 1.",
      date: "2025-01-10",
      type: "speaker",
      icon: "User",
      color: "primary"
    },
    {
      id: 3,
      title: "Abstract Submission Deadline",
      description: "Final call for abstract submissions. Deadline: 28th February 2025. Don\'t miss this opportunity!",
      date: "2025-01-08",
      type: "deadline",
      icon: "AlertCircle",
      color: "warning"
    },
    {
      id: 4,
      title: "Accommodation Booking Open",
      description: "Special conference rates now available at partner hotels. Book early to secure your preferred accommodation.",
      date: "2025-01-05",
      type: "accommodation",
      icon: "Building",
      color: "success"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      primary: "bg-primary/10 text-primary border-l-primary",
      success: "bg-success/10 text-success border-l-success",
      accent: "bg-accent/10 text-accent border-l-accent",
      warning: "bg-warning/10 text-warning border-l-warning"
    };
    return colorMap?.[color] || colorMap?.primary;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Latest News &amp; Updates
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay informed with the latest announcements, deadlines, and important information about INDUTECH 2025.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {updates?.map((update) => (
            <div
              key={update?.id}
              className={`bg-white rounded-lg p-6 shadow-subtle hover:shadow-elevated transition-smooth border-l-4 ${getColorClasses(update?.color)}`}
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-full ${getColorClasses(update?.color)?.replace('/10', '')} flex items-center justify-center flex-shrink-0`}>
                  <Icon name={update?.icon} size={20} color="white" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-foreground">
                      {update?.title}
                    </h3>
                    <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">
                      {formatDate(update?.date)}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {update?.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getColorClasses(update?.color)}`}>
                      {update?.type?.charAt(0)?.toUpperCase() + update?.type?.slice(1)}
                    </span>
                    
                    <button className="text-primary hover:text-primary/80 text-sm font-medium transition-smooth flex items-center">
                      Read More
                      <Icon name="ArrowRight" size={14} className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 bg-primary rounded-2xl p-8 lg:p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Mail" size={24} color="white" />
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Stay Updated
            </h3>
            
            <p className="text-white/90 text-lg mb-8">
              Subscribe to our newsletter to receive the latest updates, announcements, and important deadlines directly in your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50 focus:outline-none"
              />
              <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-lg font-semibold transition-smooth whitespace-nowrap">
                Subscribe
              </button>
            </div>
            
            <p className="text-white/70 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsUpdates;