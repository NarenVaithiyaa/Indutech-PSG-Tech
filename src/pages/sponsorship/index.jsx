import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';

const Sponsorship = () => {
  return (
    <>
      <Helmet>
        <title>Sponsorship - INDUTECH 2025 | International Conference on Industrial Textiles</title>
        <meta 
          name="description" 
          content="Become a sponsor of INDUTECH 2025. Explore sponsorship opportunities and partnership packages for the International Conference on Industrial Textiles." 
        />
        <meta name="keywords" content="INDUTECH 2025, sponsorship, partnership, corporate sponsor, conference sponsorship, industrial textiles" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
            {/* Page Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
                Sponsorship Opportunities
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Partner with INDUTECH 2025 and connect with leading professionals in industrial textiles. 
                Discover various sponsorship packages tailored to meet your marketing objectives.
              </p>
            </div>

            {/* Coming Soon Notice */}
            <div className="bg-card rounded-lg p-8 border border-border text-center">
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                Sponsorship Packages Coming Soon
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We are preparing comprehensive sponsorship packages with various levels and benefits. 
                Detailed information about partnership opportunities will be available shortly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact-us"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-smooth focus-ring"
                >
                  Inquire About Sponsorship
                </a>
                <a
                  href="/about-us"
                  className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/90 transition-smooth focus-ring"
                >
                  Learn About INDUTECH
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Sponsorship;