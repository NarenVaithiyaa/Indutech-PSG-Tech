import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactCards = () => {
  const contactSections = [
    {
      id: 1,
      title: 'General Inquiries',
      description: 'Conference information and general questions',
      contacts: [
        {
          name: 'Dr. Rajesh Kumar',
          role: 'Conference Coordinator',
          email: 'coordinator@indutech2025.org',
          phone: '+91-98765-43210',
          image: '/assets/images/no_image.png'
        }
      ],
      responseTime: '2-3 business days',
      icon: 'Info'
    },
    {
      id: 2,
      title: 'Technical Support',
      description: 'Website issues and submission problems',
      contacts: [
        {
          name: 'Priya Sharma',
          role: 'Technical Support Lead',
          email: 'technical@indutech2025.org',
          phone: '+91-98765-43211',
          image: '/assets/images/no_image.png'
        }
      ],
      responseTime: '1-2 business days',
      icon: 'Settings'
    },
    {
      id: 3,
      title: 'Registration Assistance',
      description: 'Registration process and payment support',
      contacts: [
        {
          name: 'Amit Patel',
          role: 'Registration Manager',
          email: 'registration@indutech2025.org',
          phone: '+91-98765-43212',
          image: '/assets/images/no_image.png'
        }
      ],
      responseTime: '1-2 business days',
      icon: 'UserPlus'
    },
    {
      id: 4,
      title: 'Sponsorship Partnerships',
      description: 'Corporate partnerships and sponsorship opportunities',
      contacts: [
        {
          name: 'Dr. Meera Gupta',
          role: 'Partnership Director',
          email: 'partnerships@indutech2025.org',
          phone: '+91-98765-43213',
          image: '/assets/images/no_image.png'
        }
      ],
      responseTime: '3-5 business days',
      icon: 'Handshake'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="flex items-center justify-center w-10 h-10 bg-secondary rounded-lg">
          <Icon name="Users" size={20} color="white" />
        </div>
        <div>
          <h2 className="text-2xl font-heading font-bold text-foreground">Contact Our Team</h2>
          <p className="text-sm text-muted-foreground">Direct access to department specialists</p>
        </div>
      </div>

      <div className="space-y-4">
        {contactSections?.map((section) => (
          <div key={section?.id} className="bg-card rounded-lg p-6 border border-border shadow-subtle">
            <div className="flex items-start space-x-4">
              <div className="flex items-center justify-center w-10 h-10 bg-muted rounded-lg flex-shrink-0">
                <Icon name={section?.icon} size={20} className="text-muted-foreground" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">
                  {section?.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {section?.description}
                </p>
                
                {section?.contacts?.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4 mb-4">
                    <img
                      src={contact?.image}
                      alt={contact?.name}
                      className="w-12 h-12 rounded-full object-cover bg-muted"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground text-sm">
                        {contact?.name}
                      </h4>
                      <p className="text-xs text-muted-foreground mb-2">
                        {contact?.role}
                      </p>
                      <div className="flex flex-col space-y-1">
                        <a
                          href={`mailto:${contact?.email}`}
                          className="text-xs text-primary hover:text-primary/80 transition-smooth flex items-center space-x-1"
                        >
                          <Icon name="Mail" size={12} />
                          <span>{contact?.email}</span>
                        </a>
                        <a
                          href={`tel:${contact?.phone}`}
                          className="text-xs text-primary hover:text-primary/80 transition-smooth flex items-center space-x-1"
                        >
                          <Icon name="Phone" size={12} />
                          <span>{contact?.phone}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
                
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <Icon name="Clock" size={12} />
                  <span>Response time: {section?.responseTime}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactCards;