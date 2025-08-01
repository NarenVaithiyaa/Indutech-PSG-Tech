import React from 'react';
import Icon from '../../../components/AppIcon';

const EmergencyContact = () => {
  const emergencyContacts = [
    {
      id: 1,
      title: 'Conference Emergency Hotline',
      description: 'For urgent conference-related issues during event days',
      phone: '+91-98765-00000',
      email: 'emergency@indutech2025.org',
      availability: '24/7 during conference week (March 15-17, 2025)',
      type: 'primary'
    },
    {
      id: 2,
      title: 'Medical Emergency',
      description: 'On-campus medical assistance and emergency services',
      phone: '+91-98765-00001',
      email: 'medical@indutech2025.org',
      availability: '24/7 during conference week',
      type: 'medical'
    },
    {
      id: 3,
      title: 'Security & Safety',
      description: 'Campus security and safety concerns',
      phone: '+91-98765-00002',
      email: 'security@indutech2025.org',
      availability: '24/7 during conference week',
      type: 'security'
    }
  ];

  return (
    <div className="mb-12">
      <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="flex items-center justify-center w-12 h-12 bg-destructive rounded-lg">
            <Icon name="Phone" size={24} color="white" />
          </div>
          <div>
            <h2 className="text-2xl font-heading font-bold text-foreground">Emergency Support</h2>
            <p className="text-sm text-muted-foreground">24/7 support during conference week</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {emergencyContacts?.map((contact) => (
            <div 
              key={contact?.id} 
              className={`bg-card rounded-lg p-4 border shadow-subtle ${
                contact?.type === 'primary' ? 'border-destructive/30 bg-destructive/5' : 'border-border'
              }`}
            >
              <div className="flex items-center space-x-2 mb-3">
                <Icon 
                  name={
                    contact?.type === 'medical' ? 'Heart' : 
                    contact?.type === 'security' ? 'Shield' : 'AlertTriangle'
                  } 
                  size={16} 
                  className={
                    contact?.type === 'primary' ? 'text-destructive' : 'text-muted-foreground'
                  } 
                />
                <h3 className="font-medium text-foreground text-sm">
                  {contact?.title}
                </h3>
              </div>
              
              <p className="text-xs text-muted-foreground mb-3">
                {contact?.description}
              </p>
              
              <div className="space-y-2">
                <a
                  href={`tel:${contact?.phone}`}
                  className={`flex items-center space-x-2 text-sm font-medium transition-smooth ${
                    contact?.type === 'primary' ?'text-destructive hover:text-destructive/80' :'text-foreground hover:text-primary'
                  }`}
                >
                  <Icon name="Phone" size={14} />
                  <span>{contact?.phone}</span>
                </a>
                
                <a
                  href={`mailto:${contact?.email}`}
                  className="flex items-center space-x-2 text-xs text-muted-foreground hover:text-primary transition-smooth"
                >
                  <Icon name="Mail" size={12} />
                  <span>{contact?.email}</span>
                </a>
              </div>
              
              <div className="mt-3 pt-3 border-t border-border">
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={12} className="text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">
                    {contact?.availability}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-card rounded-lg p-4 border border-border">
          <div className="flex items-start space-x-3">
            <Icon name="Info" size={20} className="text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-medium text-foreground mb-2">Important Notice</h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>• Emergency contacts are active 24/7 only during conference week (March 15-17, 2025)</p>
                <p>• For non-emergency inquiries outside conference dates, please use regular contact channels</p>
                <p>• Local emergency services: Police (100), Fire (101), Medical (108)</p>
                <p>• All emergency staff are multilingual (English, Tamil, Hindi)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyContact;