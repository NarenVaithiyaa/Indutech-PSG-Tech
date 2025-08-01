import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';

const Accommodation = () => {
  return (
    <>
      <Helmet>
        <title>Accommodation - INDUTECH 2025 | International Conference on Industrial Textiles</title>
        <meta 
          name="description" 
          content="Find accommodation options for INDUTECH 2025. Discover hotels, guest houses, and lodging near the conference venue." 
        />
        <meta name="keywords" content="INDUTECH 2025, accommodation, hotels, guest houses, conference lodging, Tirunelveli hotels" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
            {/* Page Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
                Accommodation
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Find comfortable and convenient accommodation options for INDUTECH 2025. 
                We have partnered with various hotels and guest houses to ensure a pleasant stay.
              </p>
            </div>

            {/* Coming Soon Notice */}
            <div className="bg-card rounded-lg p-8 border border-border text-center">
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                Accommodation Details Coming Soon
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We are currently finalizing accommodation partnerships and will provide detailed 
                information about hotels, guest houses, and booking procedures very soon.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact-us"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-smooth focus-ring"
                >
                  Contact Us for Information
                </a>
                <a
                  href="/registration"
                  className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/90 transition-smooth focus-ring"
                >
                  Register Now
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Accommodation;