import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactSupport = () => {
  const supportContacts = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Technical Committee Chair",
      email: "technical@indutech2025.org",
      phone: "+91 98765 43210",
      specialization: "Abstract Review & Technical Queries"
    },
    {
      name: "Prof. Meera Sharma",
      role: "Publication Coordinator",
      email: "publications@indutech2025.org",
      phone: "+91 98765 43211",
      specialization: "Journal Publications & Proceedings"
    },
    {
      name: "Dr. Amit Patel",
      role: "Submission Support",
      email: "submissions@indutech2025.org",
      phone: "+91 98765 43212",
      specialization: "Submission Portal & Technical Issues"
    }
  ];

  return (
    <div className="bg-card rounded-lg border border-border p-8">
      <div className="flex items-center mb-6">
        <div className="p-3 bg-accent text-accent-foreground rounded-lg mr-4">
          <Icon name="Headphones" size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">Technical Support</h2>
          <p className="text-muted-foreground">Get assistance with your abstract submission process</p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {supportContacts?.map((contact, index) => (
          <div key={index} className="p-6 bg-background rounded-lg border border-border">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mr-3">
                <Icon name="User" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{contact?.name}</h3>
                <p className="text-sm text-muted-foreground">{contact?.role}</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <Icon name="Mail" size={16} className="mr-2 text-primary" />
                <a href={`mailto:${contact?.email}`} className="text-sm text-primary hover:underline">
                  {contact?.email}
                </a>
              </div>
              <div className="flex items-center">
                <Icon name="Phone" size={16} className="mr-2 text-primary" />
                <a href={`tel:${contact?.phone}`} className="text-sm text-foreground">
                  {contact?.phone}
                </a>
              </div>
              <div className="pt-2">
                <p className="text-xs text-muted-foreground">{contact?.specialization}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-muted rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-foreground mb-2">Need Immediate Help?</h3>
            <p className="text-sm text-muted-foreground">
              Our support team is available Monday to Friday, 9:00 AM to 6:00 PM IST
            </p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline" iconName="MessageCircle" iconPosition="left">
              Live Chat
            </Button>
            <Button variant="default" iconName="Phone" iconPosition="left">
              Call Support
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-6 p-4 bg-success/10 rounded-lg border border-success/20">
        <div className="flex items-start">
          <Icon name="Clock" size={20} className="mr-3 text-success flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-medium text-foreground mb-1">Response Time</h4>
            <p className="text-sm text-muted-foreground">
              We typically respond to technical queries within 24 hours during business days. 
              For urgent submission issues, please call our support hotline.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSupport;