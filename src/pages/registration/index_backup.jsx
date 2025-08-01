import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import RegistrationHeader from './components/RegistrationHeader';
import CategoryCard from './components/CategoryCard';
import RegistrationForm from './components/RegistrationForm';
import PaymentInfo from './components/PaymentInfo';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const Registration = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState(null);
  const [additionalServices, setAdditionalServices] = useState({});

  const registrationCategories = [
    {
      id: 'academic',
      title: 'Academic Delegate',
      description: 'For faculty members, researchers, and academic professionals from universities and research institutions.',
      price: 8500,
      originalPrice: 12000,
      icon: 'GraduationCap',
      badge: 'Faculty & Researchers',
      popular: true,
      features: [
        'Access to all technical sessions',
        'Conference proceedings (digital)',
        'Welcome reception & networking dinner',
        'Coffee breaks and lunch',
        'Certificate of participation',
        'Access to exhibition area'
      ]
    },
    {
      id: 'industry',
      title: 'Industry Professional',
      description: 'For industry professionals, engineers, and corporate representatives from textile and manufacturing companies.',
      price: 12500,
      originalPrice: 18000,
      icon: 'Building2',
      badge: 'Corporate & Industry',
      features: [
        'Access to all technical sessions',
        'Conference proceedings (digital + print)',
        'Welcome reception & networking dinner',
        'All meals during conference',
        'Certificate of participation',
        'Priority access to exhibition',
        'Industry networking sessions'
      ]
    },
    {
      id: 'student',
      title: 'Student Delegate',
      description: 'Special discounted rate for undergraduate and postgraduate students with valid student ID.',
      price: 3500,
      originalPrice: 5000,
      icon: 'BookOpen',
      badge: 'Student Discount',
      features: [
        'Access to all technical sessions',
        'Conference proceedings (digital)',
        'Welcome reception',
        'Coffee breaks and lunch',
        'Certificate of participation',
        'Student poster session',
        'Career guidance sessions'
      ]
    },
    {
      id: 'international',
      title: 'International Delegate',
      description: 'For participants from outside India, including special assistance and networking opportunities.',
      price: 25000,
      originalPrice: 35000,
      icon: 'Globe',
      badge: 'International',
      features: [
        'Access to all technical sessions',
        'Conference proceedings (digital + print)',
        'Welcome reception & gala dinner',
        'All meals during conference',
        'Certificate of participation',
        'VIP access to exhibition',
        'Cultural tour of Delhi',
        'Airport transfer assistance'
      ]
    }
  ];

  const handleCategorySelect = (categoryId) => {
    const category = registrationCategories?.find(cat => cat?.id === categoryId);
    setSelectedCategory(category);
  };

  const handleProceedToForm = () => {
    if (selectedCategory) {
      setShowForm(true);
      // Scroll to form
      setTimeout(() => {
        document.getElementById('registration-form')?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  };

  const handleFormSubmit = (data) => {
    setFormData(data);
    setAdditionalServices({
      accommodation: data?.accommodation,
      meals: data?.meals,
      materials: data?.materials
    });
    
    // Show success message and redirect to payment
    alert(`Registration submitted successfully!\n\nDear ${data?.firstName} ${data?.lastName},\n\nThank you for registering for INDUTECH 2025. Your registration details have been received and you will be redirected to the secure payment gateway.\n\nRegistration ID: REG${Date.now()}\nCategory: ${selectedCategory?.title}\nTotal Amount: ₹${calculateTotal(data)?.toLocaleString('en-IN')}\n\nA confirmation email will be sent to ${data?.email} after successful payment.`);
  };

  const calculateTotal = (data) => {
    let total = selectedCategory?.price || 0;
    if (data?.accommodation) total += 2500;
    if (data?.meals) total += 1200;
    if (data?.materials) total += 800;
    return total;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Registration - INDUTECH 2025 | International Conference on Industrial Textiles</title>
        <meta name="description" content="Register for INDUTECH 2025 conference. Choose from academic, industry, student, or international delegate categories with early bird discounts." />
        <meta name="keywords" content="INDUTECH 2025, conference registration, industrial textiles, academic conference, textile engineering" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <RegistrationHeader />

        <main className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          {/* Category Selection */}
          <section className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                Choose Your Registration Category
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Select the registration category that best fits your profile. All categories include access to 
                technical sessions, networking opportunities, and conference materials.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {registrationCategories?.map((category) => (
                <CategoryCard
                  key={category?.id}
                  category={category}
                  isSelected={selectedCategory?.id === category?.id}
                  onSelect={handleCategorySelect}
                />
              ))}
            </div>

            {selectedCategory && !showForm && (
              <div className="text-center">
                <Button
                  variant="default"
                  size="lg"
                  onClick={handleProceedToForm}
                  iconName="ArrowRight"
                  iconPosition="right"
                >
                  Proceed to Registration Form
                </Button>
              </div>
            )}
          </section>

          {/* Registration Form */}
          {showForm && selectedCategory && (
            <section id="registration-form" className="mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <RegistrationForm
                    selectedCategory={selectedCategory}
                    onSubmit={handleFormSubmit}
                  />
                </div>
                <div className="lg:col-span-1">
                  <PaymentInfo
                    selectedCategory={selectedCategory}
                    additionalServices={additionalServices}
                  />
                </div>
              </div>
            </section>
          )}

          {/* Help Section */}
          <section className="bg-card rounded-lg p-8 shadow-subtle">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-lg">
                  <Icon name="HelpCircle" size={24} color="white" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-foreground">
                  Need Help with Registration?
                </h2>
              </div>
              <p className="text-muted-foreground">
                Our registration support team is here to assist you with any questions or issues.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-muted rounded-lg">
                <Icon name="Mail" size={32} color="var(--color-primary)" className="mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Email Support</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Get help via email within 24 hours
                </p>
                <p className="text-sm font-medium text-primary">
                  registration@indutech2025.org
                </p>
              </div>

              <div className="text-center p-4 bg-muted rounded-lg">
                <Icon name="Phone" size={32} color="var(--color-primary)" className="mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Phone Support</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Call us during business hours
                </p>
                <p className="text-sm font-medium text-primary">
                  +91-11-2659-1234
                </p>
              </div>

              <div className="text-center p-4 bg-muted rounded-lg">
                <Icon name="MessageCircle" size={32} color="var(--color-primary)" className="mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Live Chat</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Instant support during conference hours
                </p>
                <p className="text-sm font-medium text-primary">
                  Available 9 AM - 6 PM IST
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-card border-t border-border py-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                © {new Date()?.getFullYear()} INDUTECH 2025. All rights reserved. 
                Organized by Department of Textile Technology, IIT Delhi.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Registration;