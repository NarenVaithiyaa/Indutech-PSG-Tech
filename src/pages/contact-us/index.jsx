import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ContactForm from './components/ContactForm';
import ContactCards from './components/ContactCards';
import OfficeLocation from './components/OfficeLocation';
import FAQSection from './components/FAQSection';
import SocialMediaLinks from './components/SocialMediaLinks';
import EmergencyContact from './components/EmergencyContact';

const ContactUs = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - INDUTECH 2025 | International Conference on Industrial Textiles</title>
        <meta 
          name="description" 
          content="Get in touch with INDUTECH 2025 organizers. Find contact information, support channels, and emergency contacts for the International Conference on Industrial Textiles." 
        />
        <meta name="keywords" content="INDUTECH 2025, contact us, conference support, technical assistance, registration help, sponsorship inquiries" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
            {/* Page Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
                Contact Us
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Get comprehensive support for INDUTECH 2025. Our dedicated team is here to assist you 
                with registration, technical questions, sponsorship opportunities, and conference logistics.
              </p>
            </div>

            {/* Emergency Contact - Prominent Position */}
            <EmergencyContact />

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Contact Form */}
              <div>
                <ContactForm />
              </div>
              
              {/* Contact Information */}
              <div className="space-y-8">
                <ContactCards />
                <OfficeLocation />
              </div>
            </div>

            {/* FAQ Section */}
            <FAQSection />

            {/* Social Media Links */}
            <SocialMediaLinks />
          </div>
        </main>
      </div>
    </>
  );
};

export default ContactUs;