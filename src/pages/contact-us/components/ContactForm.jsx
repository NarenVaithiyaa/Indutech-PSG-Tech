import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: '',
    priority: 'normal',
    subject: '',
    message: '',
    attachment: null
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiries' },
    { value: 'technical', label: 'Technical Support' },
    { value: 'registration', label: 'Registration Assistance' },
    { value: 'sponsorship', label: 'Sponsorship Partnerships' },
    { value: 'abstract', label: 'Abstract Submission' },
    { value: 'accommodation', label: 'Accommodation' },
    { value: 'media', label: 'Media & Press' }
  ];

  const priorityLevels = [
    { value: 'low', label: 'Low Priority (7-10 business days)' },
    { value: 'normal', label: 'Normal Priority (3-5 business days)' },
    { value: 'high', label: 'High Priority (1-2 business days)' },
    { value: 'urgent', label: 'Urgent (Within 24 hours)' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    if (errors?.[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleFileChange = (e) => {
    const file = e?.target?.files?.[0];
    if (file && file?.size > 10 * 1024 * 1024) { // 10MB limit
      setErrors(prev => ({
        ...prev,
        attachment: 'File size must be less than 10MB'
      }));
      return;
    }
    handleInputChange('attachment', file);
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData?.name?.trim()) newErrors.name = 'Name is required';
    if (!formData?.email?.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/?.test(formData?.email)) newErrors.email = 'Invalid email format';
    if (!formData?.inquiryType) newErrors.inquiryType = 'Please select inquiry type';
    if (!formData?.subject?.trim()) newErrors.subject = 'Subject is required';
    if (!formData?.message?.trim()) newErrors.message = 'Message is required';
    else if (formData?.message?.length < 10) newErrors.message = 'Message must be at least 10 characters';
    
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
      
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        inquiryType: '',
        priority: 'normal',
        subject: '',
        message: '',
        attachment: null
      });
      
      alert('Your message has been sent successfully! We will get back to you soon.');
    } catch (error) {
      console.error('Failed to send message:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-card rounded-lg p-8 shadow-subtle">
      <div className="flex items-center space-x-3 mb-6">
        <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
          <Icon name="MessageCircle" size={20} color="white" />
        </div>
        <div>
          <h2 className="text-2xl font-heading font-bold text-foreground">Send us a Message</h2>
          <p className="text-sm text-muted-foreground">We'll respond based on your selected priority level</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Full Name"
            type="text"
            placeholder="Enter your full name"
            value={formData?.name}
            onChange={(e) => handleInputChange('name', e?.target?.value)}
            error={errors?.name}
            required
          />
          
          <Input
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            value={formData?.email}
            onChange={(e) => handleInputChange('email', e?.target?.value)}
            error={errors?.email}
            required
          />
        </div>

        {/* Inquiry Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Select
            label="Inquiry Type"
            options={inquiryTypes}
            value={formData?.inquiryType}
            onChange={(value) => handleInputChange('inquiryType', value)}
            placeholder="Select inquiry type"
            error={errors?.inquiryType}
            required
          />
          
          <Select
            label="Priority Level"
            options={priorityLevels}
            value={formData?.priority}
            onChange={(value) => handleInputChange('priority', value)}
            placeholder="Select priority level"
          />
        </div>

        {/* Subject */}
        <Input
          label="Subject"
          type="text"
          placeholder="Brief subject of your inquiry"
          value={formData?.subject}
          onChange={(e) => handleInputChange('subject', e?.target?.value)}
          error={errors?.subject}
          required
        />

        {/* Message */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">
            Message <span className="text-destructive">*</span>
          </label>
          <textarea
            rows={6}
            placeholder="Please provide detailed information about your inquiry..."
            value={formData?.message}
            onChange={(e) => handleInputChange('message', e?.target?.value)}
            className={`w-full px-3 py-2 border rounded-lg text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth resize-none ${
              errors?.message ? 'border-destructive' : 'border-border'
            }`}
          />
          {errors?.message && (
            <p className="text-xs text-destructive">{errors?.message}</p>
          )}
          <p className="text-xs text-muted-foreground">
            {formData?.message?.length}/1000 characters
          </p>
        </div>

        {/* File Attachment */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">
            Attachment (Optional)
          </label>
          <div className="relative">
            <input
              type="file"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.txt"
              className="w-full px-3 py-2 border border-border rounded-lg text-sm bg-background text-foreground file:mr-4 file:py-1 file:px-3 file:rounded file:border-0 file:bg-muted file:text-muted-foreground hover:file:bg-muted/80 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
            />
          </div>
          {errors?.attachment && (
            <p className="text-xs text-destructive">{errors?.attachment}</p>
          )}
          <p className="text-xs text-muted-foreground">
            Supported formats: PDF, DOC, DOCX, JPG, PNG, TXT (Max 10MB)
          </p>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end pt-4 border-t border-border">
          <Button
            type="submit"
            variant="default"
            size="lg"
            loading={isSubmitting}
            iconName="Send"
            iconPosition="left"
          >
            {isSubmitting ? 'Sending Message...' : 'Send Message'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;