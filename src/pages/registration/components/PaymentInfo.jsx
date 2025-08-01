import React from 'react';
import Icon from '../../../components/AppIcon';


const PaymentInfo = ({ selectedCategory, additionalServices }) => {
  const paymentMethods = [
    {
      id: 'card',
      name: 'Credit/Debit Card',
      description: 'Visa, MasterCard, RuPay accepted',
      icon: 'CreditCard',
      available: true
    },
    {
      id: 'upi',
      name: 'UPI Payment',
      description: 'Pay using any UPI app',
      icon: 'Smartphone',
      available: true
    },
    {
      id: 'netbanking',
      name: 'Net Banking',
      description: 'All major banks supported',
      icon: 'Building2',
      available: true
    },
    {
      id: 'wallet',
      name: 'Digital Wallets',
      description: 'Paytm, PhonePe, Google Pay',
      icon: 'Wallet',
      available: true
    }
  ];

  const trustBadges = [
    {
      name: 'SSL Secured',
      icon: 'Shield',
      description: '256-bit SSL encryption'
    },
    {
      name: 'PCI Compliant',
      icon: 'Lock',
      description: 'Payment Card Industry compliant'
    },
    {
      name: 'Government Approved',
      icon: 'Award',
      description: 'Ministry of Textiles endorsed'
    }
  ];

  const calculateTotal = () => {
    let total = selectedCategory?.price || 0;
    
    if (additionalServices?.accommodation) total += 2500;
    if (additionalServices?.meals) total += 1200;
    if (additionalServices?.materials) total += 800;
    
    return total;
  };

  return (
    <div className="bg-card rounded-lg p-8 shadow-subtle">
      <div className="flex items-center space-x-3 mb-6">
        <div className="flex items-center justify-center w-10 h-10 bg-success rounded-lg">
          <Icon name="CreditCard" size={20} color="white" />
        </div>
        <div>
          <h2 className="text-2xl font-heading font-bold text-foreground">Payment Information</h2>
          <p className="text-sm text-muted-foreground">Secure payment processing for your registration</p>
        </div>
      </div>
      {/* Payment Summary */}
      {selectedCategory && (
        <div className="bg-muted rounded-lg p-6 mb-6">
          <h3 className="text-lg font-heading font-semibold text-foreground mb-4">Payment Summary</h3>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-foreground">{selectedCategory?.title}</span>
              <span className="font-medium">₹{selectedCategory?.price?.toLocaleString('en-IN')}</span>
            </div>
            
            {additionalServices?.accommodation && (
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Accommodation</span>
                <span>₹2,500</span>
              </div>
            )}
            
            {additionalServices?.meals && (
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Conference Meals</span>
                <span>₹1,200</span>
              </div>
            )}
            
            {additionalServices?.materials && (
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Conference Materials</span>
                <span>₹800</span>
              </div>
            )}
            
            <div className="border-t border-border pt-3 mt-4">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span className="text-foreground">Total Amount</span>
                <span className="text-primary">₹{calculateTotal()?.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Payment Methods */}
      <div className="mb-6">
        <h3 className="text-lg font-heading font-semibold text-foreground mb-4">Accepted Payment Methods</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {paymentMethods?.map((method) => (
            <div 
              key={method?.id}
              className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:bg-muted transition-colors"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                <Icon name={method?.icon} size={20} color="var(--color-primary)" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">{method?.name}</h4>
                <p className="text-xs text-muted-foreground">{method?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Security & Trust Badges */}
      <div className="mb-6">
        <h3 className="text-lg font-heading font-semibold text-foreground mb-4">Security & Trust</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {trustBadges?.map((badge, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 bg-success/5 rounded-lg border border-success/20">
              <Icon name={badge?.icon} size={18} color="var(--color-success)" />
              <div>
                <h4 className="text-sm font-medium text-foreground">{badge?.name}</h4>
                <p className="text-xs text-muted-foreground">{badge?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Important Notes */}
      <div className="bg-warning/10 border border-warning/20 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <Icon name="AlertTriangle" size={20} color="var(--color-warning)" />
          <div>
            <h4 className="font-medium text-foreground mb-2">Important Payment Information</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Payment confirmation will be sent to your registered email address</li>
              <li>• Registration is confirmed only after successful payment</li>
              <li>• Refund policy: 80% refund until 30 days before conference</li>
              <li>• For payment issues, contact: payments@indutech2025.org</li>
              <li>• GST will be added as applicable for Indian participants</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;