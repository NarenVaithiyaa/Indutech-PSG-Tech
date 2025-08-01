import React from 'react';
import Icon from '../../../components/AppIcon';

const OfficeLocation = () => {
  const locations = [
    {
      id: 1,
      name: 'Government College of Engineering, Tirunelveli',
      type: 'Primary Venue & Registration Office',
      address: 'Melapalayam, Tirunelveli, Tamil Nadu 627007, India',
      phone: '+91-462-2321001',
      email: 'gcet@indutech2025.org',
      hours: 'Mon-Fri: 9:00 AM - 5:00 PM',
      accessibility: 'Wheelchair accessible, Parking available',
      isMain: true
    },
    {
      id: 2,
      name: 'Anna University, Chennai',
      type: 'Academic Partner Office',
      address: 'Sardar Patel Road, Guindy, Chennai, Tamil Nadu 600025, India',
      phone: '+91-44-22203000',
      email: 'annauniv@indutech2025.org',
      hours: 'Mon-Fri: 10:00 AM - 4:00 PM',
      accessibility: 'Wheelchair accessible',
      isMain: false
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="flex items-center justify-center w-10 h-10 bg-accent rounded-lg">
          <Icon name="MapPin" size={20} color="white" />
        </div>
        <div>
          <h2 className="text-2xl font-heading font-bold text-foreground">Office Locations</h2>
          <p className="text-sm text-muted-foreground">Visit us at our campus offices</p>
        </div>
      </div>

      <div className="space-y-4">
        {locations?.map((location) => (
          <div 
            key={location?.id}
            className={`bg-card rounded-lg p-6 border shadow-subtle ${
              location?.isMain ? 'border-primary/20 bg-primary/5' : 'border-border'
            }`}
          >
            {location?.isMain && (
              <div className="flex items-center space-x-2 mb-3">
                <Icon name="Star" size={16} className="text-primary" />
                <span className="text-xs font-medium text-primary">Primary Office</span>
              </div>
            )}
            
            <h3 className="text-lg font-heading font-semibold text-foreground mb-1">
              {location?.name}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              {location?.type}
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Icon name="MapPin" size={16} className="text-muted-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-foreground">{location?.address}</p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(location?.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary hover:text-primary/80 transition-smooth"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={16} className="text-muted-foreground flex-shrink-0" />
                <a
                  href={`tel:${location?.phone}`}
                  className="text-sm text-foreground hover:text-primary transition-smooth"
                >
                  {location?.phone}
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={16} className="text-muted-foreground flex-shrink-0" />
                <a
                  href={`mailto:${location?.email}`}
                  className="text-sm text-foreground hover:text-primary transition-smooth"
                >
                  {location?.email}
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Icon name="Clock" size={16} className="text-muted-foreground flex-shrink-0" />
                <span className="text-sm text-foreground">{location?.hours}</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <Icon name="Info" size={16} className="text-muted-foreground mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{location?.accessibility}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Campus Map Notice */}
      <div className="bg-muted rounded-lg p-4 border border-border">
        <div className="flex items-start space-x-3">
          <Icon name="Navigation" size={20} className="text-muted-foreground flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-medium text-foreground mb-2">Campus Navigation</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Detailed campus maps and parking information will be provided upon registration confirmation. 
              Shuttle services will be available from major transport hubs during conference days.
            </p>
            <a
              href="/registration"
              className="text-sm text-primary hover:text-primary/80 transition-smooth font-medium"
            >
              Register now to receive detailed directions →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeLocation;