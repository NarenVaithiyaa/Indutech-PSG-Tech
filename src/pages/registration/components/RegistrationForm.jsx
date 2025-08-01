import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const RegistrationForm = ({ selectedCategory, onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    institution: '',
    designation: '',
    country: '',
    city: '',
    specialRequirements: '',
    accommodation: false,
    meals: false,
    materials: false,
    termsAccepted: false,
    newsletter: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors?.[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData?.firstName?.trim()) newErrors.firstName = 'First name is required';
    if (!formData?.lastName?.trim()) newErrors.lastName = 'Last name is required';
    if (!formData?.email?.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/?.test(formData?.email)) newErrors.email = 'Invalid email format';
    if (!formData?.phone?.trim()) newErrors.phone = 'Phone number is required';
    if (!formData?.institution?.trim()) newErrors.institution = 'Institution is required';
    if (!formData?.designation?.trim()) newErrors.designation = 'Designation is required';
    if (!formData?.country?.trim()) newErrors.country = 'Country is required';
    if (!formData?.city?.trim()) newErrors.city = 'City is required';
    if (!formData?.termsAccepted) newErrors.termsAccepted = 'You must accept the terms and conditions';
    
    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      onSubmit(formData);
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-card rounded-lg p-8 shadow-subtle">
      <div className="flex items-center space-x-3 mb-6">
        <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
          <Icon name="UserPlus" size={20} color="white" />
        </div>
        <div>
          <h2 className="text-2xl font-heading font-bold text-foreground">Registration Form</h2>
          <p className="text-sm text-muted-foreground">Please fill in your details to register for INDUTECH 2025</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-heading font-semibold text-foreground border-b border-border pb-2">
            Personal Information
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="First Name"
              type="text"
              placeholder="Enter your first name"
              value={formData?.firstName}
              onChange={(e) => handleInputChange('firstName', e?.target?.value)}
              error={errors?.firstName}
              required
            />
            
            <Input
              label="Last Name"
              type="text"
              placeholder="Enter your last name"
              value={formData?.lastName}
              onChange={(e) => handleInputChange('lastName', e?.target?.value)}
              error={errors?.lastName}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Email Address"
              type="email"
              placeholder="Enter your email"
              value={formData?.email}
              onChange={(e) => handleInputChange('email', e?.target?.value)}
              error={errors?.email}
              required
            />
            
            <Input
              label="Phone Number"
              type="tel"
              placeholder="Enter your phone number"
              value={formData?.phone}
              onChange={(e) => handleInputChange('phone', e?.target?.value)}
              error={errors?.phone}
              required
            />
          </div>
        </div>

        {/* Professional Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-heading font-semibold text-foreground border-b border-border pb-2">
            Professional Information
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Institution/Organization"
              type="text"
              placeholder="Enter your institution"
              value={formData?.institution}
              onChange={(e) => handleInputChange('institution', e?.target?.value)}
              error={errors?.institution}
              required
            />
            
            <Input
              label="Designation"
              type="text"
              placeholder="Enter your designation"
              value={formData?.designation}
              onChange={(e) => handleInputChange('designation', e?.target?.value)}
              error={errors?.designation}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Country"
              type="text"
              placeholder="Enter your country"
              value={formData?.country}
              onChange={(e) => handleInputChange('country', e?.target?.value)}
              error={errors?.country}
              required
            />
            
            <Input
              label="City"
              type="text"
              placeholder="Enter your city"
              value={formData?.city}
              onChange={(e) => handleInputChange('city', e?.target?.value)}
              error={errors?.city}
              required
            />
          </div>
        </div>

        {/* Additional Services */}
        <div className="space-y-4">
          <h3 className="text-lg font-heading font-semibold text-foreground border-b border-border pb-2">
            Additional Services
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Checkbox
              label="Accommodation Required"
              description="₹2,500 per night"
              checked={formData?.accommodation}
              onChange={(e) => handleInputChange('accommodation', e?.target?.checked)}
            />
            
            <Checkbox
              label="Conference Meals"
              description="₹1,200 per day"
              checked={formData?.meals}
              onChange={(e) => handleInputChange('meals', e?.target?.checked)}
            />
            
            <Checkbox
              label="Conference Materials"
              description="₹800 (proceedings & kit)"
              checked={formData?.materials}
              onChange={(e) => handleInputChange('materials', e?.target?.checked)}
            />
          </div>
        </div>

        {/* Special Requirements */}
        <div className="space-y-4">
          <h3 className="text-lg font-heading font-semibold text-foreground border-b border-border pb-2">
            Special Requirements
          </h3>
          
          <Input
            label="Special Requirements (Optional)"
            type="text"
            placeholder="Dietary restrictions, accessibility needs, etc."
            value={formData?.specialRequirements}
            onChange={(e) => handleInputChange('specialRequirements', e?.target?.value)}
            description="Please mention any special requirements you may have"
          />
        </div>

        {/* Terms and Conditions */}
        <div className="space-y-4">
          <div className="border-t border-border pt-4">
            <Checkbox
              label="I agree to the terms and conditions"
              description="By checking this box, you agree to our conference terms and conditions"
              checked={formData?.termsAccepted}
              onChange={(e) => handleInputChange('termsAccepted', e?.target?.checked)}
              error={errors?.termsAccepted}
              required
            />
            
            <div className="mt-3">
              <Checkbox
                label="Subscribe to conference newsletter"
                description="Receive updates about future conferences and events"
                checked={formData?.newsletter}
                onChange={(e) => handleInputChange('newsletter', e?.target?.checked)}
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end pt-6 border-t border-border">
          <Button
            type="submit"
            variant="default"
            size="lg"
            loading={isSubmitting}
            iconName="CreditCard"
            iconPosition="left"
            disabled={!selectedCategory}
          >
            {isSubmitting ? 'Processing Registration...' : 'Proceed to Payment'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;