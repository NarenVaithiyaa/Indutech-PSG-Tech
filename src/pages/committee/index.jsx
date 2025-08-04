import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import AppImage from '../../components/AppImage';

const Committee = () => {
  return (
    <>
      <Helmet>
        <title>Committee - INDUTECH 2025 | International Conference on Industrial Textiles</title>
        <meta 
          name="description" 
          content="Meet the distinguished committee members of INDUTECH 2025. Our organizing team from PSG College of Technology ensures a world-class conference experience." 
        />
        <meta name="keywords" content="INDUTECH 2025, committee, organizing committee, PSG College of Technology, conference organizers" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16 sm:pt-18 md:pt-20 lg:pt-24">
          {/* Hero Section */}
          <section className="pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-16 bg-gradient-to-r from-cyan-700 via-cyan-800 to-cyan-900">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
                  Conference Committee
                </h1>
                <p className="text-lg text-cyan-100 max-w-3xl mx-auto leading-relaxed text-center">
                  Meet the distinguished academic and industry professionals organizing INDUTECH 2025. 
                  Our committee brings together expertise from PSG College of Technology 
                  to deliver a world-class conference experience.
                </p>
              </div>
            </div>
          </section>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
            
            {/* Organizing Committee */}
            <section className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                  Organizing Committee
                </h2>
              </div>

              {/* Chief Patron - Single card */}
              <div className="mb-12">
                <div className="max-w-md mx-auto">
                  <div className="bg-card rounded-lg border border-border p-6 text-center hover:shadow-lg transition-all duration-300">
                    <div className="mb-4">
                      <div className="w-40 h-40 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-4">
                        <AppImage
                          src="/assets/images/gopalakrishnan.jpg"
                          alt="Shri. L. Gopalakrishnan"
                          className="w-full h-full object-cover rounded-full"
                          fallback={
                            <div className="w-full h-full bg-gray-100 rounded-full flex items-center justify-center">
                              <span className="text-4xl text-gray-400">👤</span>
                            </div>
                          }
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-foreground mb-2">Chief Patron</h3>
                      <p className="text-xl font-semibold text-primary mb-1">Shri. L. Gopalakrishnan</p>
                      <p className="text-base text-muted-foreground mb-1">Managing Trustee</p>
                      <p className="text-base text-muted-foreground">PSG Institutions, Coimbatore</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chair - Single card */}
              <div className="mb-12">
                <div className="max-w-md mx-auto">
                  <div className="bg-card rounded-lg border border-border p-6 text-center hover:shadow-lg transition-all duration-300">
                    <div className="mb-4">
                      <div className="w-40 h-40 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-4">
                        <AppImage
                          src="/assets/images/prakasan.jpg"
                          alt="Dr. K. Prakasan"
                          className="w-full h-full object-cover rounded-full"
                          fallback={
                            <div className="w-full h-full bg-gray-100 rounded-full flex items-center justify-center">
                              <span className="text-4xl text-gray-400">👤</span>
                            </div>
                          }
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-foreground mb-2">Chair</h3>
                      <p className="text-xl font-semibold text-primary mb-1">Dr. K. Prakasan</p>
                      <p className="text-base text-muted-foreground mb-1">Principal</p>
                      <p className="text-base text-muted-foreground">PSG College of Technology, Coimbatore</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Convenors - Two cards side by side */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <div className="bg-card rounded-lg border border-border p-6 text-center hover:shadow-lg transition-all duration-300">
                  <div className="mb-4">
                    <div className="w-40 h-40 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-4">
                      <AppImage
                        src="/assets/images/thilagavathi.jpg"
                        alt="Dr. G. Thilagavathi"
                        className="w-full h-full object-cover rounded-full"
                        fallback={
                          <div className="w-full h-full bg-gray-100 rounded-full flex items-center justify-center">
                            <span className="text-4xl text-gray-400">👤</span>
                          </div>
                        }
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-foreground mb-2">Convenor</h3>
                    <p className="text-xl font-semibold text-primary mb-1">Dr. G. Thilagavathi</p>
                    <p className="text-base text-muted-foreground mb-1">Professor and Head</p>
                    <p className="text-base text-muted-foreground mb-1">Department of Textile Technology</p>
                    <p className="text-base text-muted-foreground">PSG College of Technology, Coimbatore</p>
                  </div>
                </div>

                <div className="bg-card rounded-lg border border-border p-6 text-center hover:shadow-lg transition-all duration-300">
                  <div className="mb-4">
                    <div className="w-40 h-40 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-4">
                      <AppImage
                        src="/assets/images/neelakrishnan.jpg"
                        alt="Dr. S. Neelakrishnan"
                        className="w-full h-full object-cover rounded-full"
                        fallback={
                          <div className="w-full h-full bg-gray-100 rounded-full flex items-center justify-center">
                            <span className="text-4xl text-gray-400">👤</span>
                          </div>
                        }
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-foreground mb-2">Convenor</h3>
                    <p className="text-xl font-semibold text-primary mb-1">Dr. S. Neelakrishnan</p>
                    <p className="text-base text-muted-foreground mb-1">Professor and Head</p>
                    <p className="text-base text-muted-foreground mb-1">Department of Automobile Engineering</p>
                    <p className="text-base text-muted-foreground">PSG College of Technology, Coimbatore</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Organizing Secretaries */}
            <section className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                  Organizing Secretaries
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-card rounded-lg border border-border p-6 text-center hover:shadow-lg transition-all duration-300">
                  <div className="mb-4">
                    <div className="w-40 h-40 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-4">
                      <AppImage
                        src="/assets/images/viju.jpg"
                        alt="Dr. S. Viju"
                        className="w-full h-full object-cover rounded-full"
                        fallback={
                          <div className="w-full h-full bg-gray-100 rounded-full flex items-center justify-center">
                            <span className="text-4xl text-gray-400">👤</span>
                          </div>
                        }
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-semibold text-primary mb-1">Dr. S. Viju</p>
                    <p className="text-base text-muted-foreground mb-1">Department of Textile Technology</p>
                    <p className="text-base text-muted-foreground">PSG College of Technology, Coimbatore</p>
                  </div>
                </div>

                <div className="bg-card rounded-lg border border-border p-6 text-center hover:shadow-lg transition-all duration-300">
                  <div className="mb-4">
                    <div className="w-40 h-40 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-4">
                      <AppImage
                        src="/assets/images/ganesan.jpg"
                        alt="Dr. P. Ganesan"
                        className="w-full h-full object-cover rounded-full"
                        fallback={
                          <div className="w-full h-full bg-gray-100 rounded-full flex items-center justify-center">
                            <span className="text-4xl text-gray-400">👤</span>
                          </div>
                        }
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-semibold text-primary mb-1">Dr. P. Ganesan</p>
                    <p className="text-base text-muted-foreground mb-1">Department of Textile Technology</p>
                    <p className="text-base text-muted-foreground">PSG College of Technology, Coimbatore</p>
                  </div>
                </div>

                <div className="bg-card rounded-lg border border-border p-6 text-center hover:shadow-lg transition-all duration-300">
                  <div className="mb-4">
                    <div className="w-40 h-40 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-4">
                      <AppImage
                        src="/assets/images/karthik.jpg"
                        alt="Dr. T. Karthik"
                        className="w-full h-full object-cover rounded-full"
                        fallback={
                          <div className="w-full h-full bg-gray-100 rounded-full flex items-center justify-center">
                            <span className="text-4xl text-gray-400">👤</span>
                          </div>
                        }
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-semibold text-primary mb-1">Dr. T. Karthik</p>
                    <p className="text-base text-muted-foreground mb-1">Department of Textile Technology</p>
                    <p className="text-base text-muted-foreground">PSG College of Technology, Coimbatore</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Joint Organizing Secretaries */}
            <section className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                  Joint Organizing Secretaries
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="bg-card rounded-lg border border-border p-6 text-center hover:shadow-lg transition-all duration-300">
                  <div className="mb-4">
                    <div className="w-40 h-40 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-4">
                      <AppImage
                        src="/assets/images/niresh.jpg"
                        alt="Dr. J. Niresh"
                        className="w-full h-full object-cover rounded-full"
                        fallback={
                          <div className="w-full h-full bg-gray-100 rounded-full flex items-center justify-center">
                            <span className="text-4xl text-gray-400">👤</span>
                          </div>
                        }
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-semibold text-primary mb-1">Dr. J. Niresh</p>
                    <p className="text-base text-muted-foreground mb-1">Department of Automobile Engineering</p>
                    <p className="text-base text-muted-foreground">PSG College of Technology, Coimbatore</p>
                  </div>
                </div>

                <div className="bg-card rounded-lg border border-border p-6 text-center hover:shadow-lg transition-all duration-300">
                  <div className="mb-4">
                    <div className="w-40 h-40 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-4">
                      <AppImage
                        src="/assets/images/barathimohan.png"
                        alt="Dr. M. P. Bharathimohan"
                        className="w-full h-full object-cover rounded-full"
                        fallback={
                          <div className="w-full h-full bg-gray-100 rounded-full flex items-center justify-center">
                            <span className="text-4xl text-gray-400">👤</span>
                          </div>
                        }
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-semibold text-primary mb-1">Dr. M. P. Bharathimohan</p>
                    <p className="text-base text-muted-foreground mb-1">Department of Automobile Engineering</p>
                    <p className="text-base text-muted-foreground">PSG College of Technology, Coimbatore</p>
                  </div>
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

export default Committee;