import React from 'react';
import Icon from '../../../components/AppIcon';

const RegistrationHeader = () => {
  const steps = [
    { id: 1, title: 'Category Selection', icon: 'UserCheck', completed: true },
    { id: 2, title: 'Personal Details', icon: 'FileText', completed: false },
    { id: 3, title: 'Payment', icon: 'CreditCard', completed: false },
    { id: 4, title: 'Confirmation', icon: 'CheckCircle', completed: false }
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-lg backdrop-blur-sm">
                <Icon name="UserPlus" size={32} color="white" />
              </div>
              <div>
                <h1 className="text-4xl lg:text-5xl font-heading font-bold">
                  Conference Registration
                </h1>
                <p className="text-xl opacity-90 mt-2">INDUTECH 2025</p>
              </div>
            </div>
            
            <p className="text-lg opacity-90 max-w-3xl mx-auto leading-relaxed">
              Join leading experts in industrial textiles and technical innovations. 
              Secure your spot at India's premier conference on advanced textile technologies.
            </p>
            
            <div className="flex items-center justify-center space-x-6 mt-8 text-sm">
              <div className="flex items-center space-x-2">
                <Icon name="Calendar" size={16} />
                <span>March 15-17, 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span>New Delhi, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={16} />
                <span>500+ Delegates Expected</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Registration Steps */}
      <div className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            {steps?.map((step, index) => (
              <React.Fragment key={step?.id}>
                <div className="flex flex-col items-center space-y-2">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-colors ${
                    step?.completed 
                      ? 'bg-success border-success text-success-foreground' 
                      : index === 1 
                        ? 'bg-primary border-primary text-primary-foreground'
                        : 'bg-muted border-border text-muted-foreground'
                  }`}>
                    <Icon 
                      name={step?.icon} 
                      size={20} 
                      color={step?.completed || index === 1 ? 'white' : 'var(--color-muted-foreground)'} 
                    />
                  </div>
                  <div className="text-center">
                    <p className={`text-sm font-medium ${
                      step?.completed || index === 1 ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {step?.title}
                    </p>
                  </div>
                </div>
                
                {index < steps?.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-4 ${
                    step?.completed ? 'bg-success' : 'bg-border'
                  }`}></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      {/* Early Bird Notice */}
      <div className="bg-accent/10 border-b border-accent/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center justify-center space-x-3 text-center">
            <Icon name="Clock" size={20} color="var(--color-accent)" />
            <p className="text-accent font-medium">
              Early Bird Discount: Save up to 30% - Valid until January 15, 2025
            </p>
            <Icon name="Zap" size={20} color="var(--color-accent)" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationHeader;