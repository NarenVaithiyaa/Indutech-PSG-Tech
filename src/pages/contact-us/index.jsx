import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Button from '../../components/ui/Button';

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
        
        <main className="pt-16 sm:pt-18 md:pt-20 lg:pt-24">
          {/* Hero Section */}
          <section className="pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-16 bg-gradient-to-r from-cyan-700 via-cyan-800 to-cyan-900">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
                  Contact Us
                </h1>
                <p className="text-lg text-cyan-100 max-w-3xl mx-auto leading-relaxed text-center">
                  Get comprehensive support for INDUTECH 2025. Our dedicated team is here to assist you 
                  with registration, technical questions, sponsorship opportunities, and conference logistics.
                </p>
              </div>
            </div>
          </section>
          
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
            
            {/* Main Contact Information */}
            <section className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Get in Touch With Us</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Conference Convenor */}
                <div className="bg-card rounded-lg border border-border p-8">
                  <h3 className="text-xl font-bold text-foreground mb-6">The Convenor – InduTech 2025</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-foreground font-medium">Department of Textile Technology</p>
                      <p className="text-foreground">PSG College of Technology</p>
                      <p className="text-foreground">Peelamedu, Coimbatore – 641 004</p>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Email:</p>
                        <a 
                          href="mailto:psgindutech@psgtech.ac.in" 
                          className="text-blue-600 hover:text-blue-800 underline font-medium"
                        >
                          psgindutech@psgtech.ac.in
                        </a>
                      </div>
                      
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Phone:</p>
                        <div className="flex flex-wrap gap-2">
                          <a href="tel:+918610643346" className="text-blue-600 hover:text-blue-800 underline">+91 8610643346</a>
                          <span className="text-muted-foreground">,</span>
                          <a href="tel:+914222572177" className="text-blue-600 hover:text-blue-800 underline">2572177</a>
                          <span className="text-muted-foreground">,</span>
                          <a href="tel:+914224344777" className="text-blue-600 hover:text-blue-800 underline">4344777</a>
                          <span className="text-muted-foreground">,</span>
                          <a href="tel:+914224344269" className="text-blue-600 hover:text-blue-800 underline">4344269</a>
                          <span className="text-muted-foreground text-sm">(Direct)</span>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Fax:</p>
                        <p className="text-foreground">0422 2573833</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Organizing Secretaries */}
                <div className="bg-card rounded-lg border border-border p-8">
                  <h3 className="text-xl font-bold text-foreground mb-6">Organising Secretaries</h3>
                  <div className="space-y-6">
                    <div className="border-b border-border pb-4">
                      <p className="font-medium text-foreground">Dr. Viju S</p>
                      <p className="text-sm text-muted-foreground mb-2">Department of Textile Technology</p>
                      <a 
                        href="tel:+919790067633" 
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        +91 97900 67633
                      </a>
                    </div>
                    
                    <div className="border-b border-border pb-4">
                      <p className="font-medium text-foreground">Dr. Ganesan P</p>
                      <p className="text-sm text-muted-foreground mb-2">Department of Textile Technology</p>
                      <a 
                        href="tel:+919894888145" 
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        +91 98948 88145
                      </a>
                    </div>
                    
                    <div>
                      <p className="font-medium text-foreground">Dr. Karthik T</p>
                      <p className="text-sm text-muted-foreground mb-2">Department of Textile Technology</p>
                      <a 
                        href="tel:+919894429559" 
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        +91 98944 29559
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Email Button Section */}
            <section className="mb-16">
              <div className="text-center">
                <div className="bg-card rounded-lg border border-border p-8">
                  <h3 className="text-xl font-bold text-foreground mb-6">Need Quick Assistance?</h3>
                  <a 
                    href="mailto:psgindutech@psgtech.ac.in"
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-smooth focus-ring gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Click here to mail us
                  </a>
                  <p className="text-sm text-muted-foreground mt-4">
                    Send your queries directly to our conference team
                  </p>
                </div>
              </div>
            </section>

            {/* Location Map Section */}
            <section className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Location</h2>
                <p className="text-muted-foreground">PSG College of Technology, Peelamedu, Coimbatore</p>
              </div>
              
              <div className="bg-card rounded-lg border border-border p-8">
                <div className="w-full h-96 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.1914293961054!2d77.00024787584023!3d11.024259654571821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8582f1435fa59%3A0x137d95bfd8909293!2sPSG%20College%20Of%20Technology!5e0!3m2!1sen!2sin!4v1754070590066!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="PSG College of Technology Location"
                  ></iframe>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-muted-foreground">
                    Click on the map to get directions to PSG College of Technology
                  </p>
                </div>
              </div>
            </section>

          </div>
        </main>

        {/* Footer */}
        <footer className="bg-card border-t border-border py-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                © {new Date()?.getFullYear()} INDUTECH 2025. All rights reserved. 
                Organized by Departments of Textile Technology and Automobile Engineering, PSG College of Technology.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ContactUs;