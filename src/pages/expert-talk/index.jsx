import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import AppImage from '../../components/AppImage';

const ExpertTalk = () => {
  const speakers = [
    {
      id: 1,
      name: "Dr. Prasad Potluri",
      title: "Director, Northwest Composites Centre, University of Manchester, United Kingdom.",
      image: "/assets/images/potluri.png"
    },
    {
      id: 2,
      name: "Dr. Rangam Rajkhowa",
      title: "Associate Professor, Faculty of Science, Institute for Frontier Materials, Deakin University, Australia.",
      image: "/assets/images/rangam.jpg"
    },
    {
      id: 3,
      name: "Dr. Radhakrishnaiah Parachuru",
      title: "Principal Research Scientist, Georgia Institute of Technology, USA.",
      image: "/assets/images/parachuru.jpg"
    },
    {
      id: 4,
      name: "Dr. Badri Narayanan G",
      title: "Professor Economics, Woods College of Advancing Studies, USA.",
      image: "/assets/images/badri.jpg"
    },
    {
      id: 5,
      name: "Dr. R. Alagirusamy",
      title: "Professor & Head, Department of Fibre and Textile Technology, Indian Institute of Technology Delhi, India.",
      image: "/assets/images/alagirusamy.jpg"
    },
    {
      id: 6,
      name: "Dr. Rengasamy",
      title: "Professor, Department of Fibre and Textile Technology, Indian Institute of Technology Delhi, India.",
      image: "/assets/images/rengasamy.jpg"
    },
    {
      id: 7,
      name: "Dr. Apurba Das",
      title: "Professor, Department of Fibre and Textile Technology, Indian Institute of Technology Delhi, India.",
      image: "/assets/images/apurba.jpg"
    },
    {
      id: 8,
      name: "Prof. Deepti Gupta",
      title: "Professor, Department of Fibre and Textile Technology, Indian Institute of Technology Delhi, India.",
      image: "/assets/images/deepti.jpg"
    },
    {
      id: 9,
      name: "Dr. Vikas B Thakre",
      title: "Scientist 'G' Defense Research & Development Establishment (DRDE) Gwalior, India",
      image: "/assets/images/vikas.jpg"
    },
    {
      id: 10,
      name: "Dr. Arunangshu Mukhopadhyay",
      title: "Professor, Department of Textile Technology, Dr B R Ambedkar National Institute of Technology, India",
      image: "/assets/images/arunangshu.jpeg"
    },
    {
      id: 11,
      name: "Dr. M.S. Parmar",
      title: "Director General, Northern India Textile Research Association (NITRA), Uttar Pradesh, India",
      image: "/assets/images/parmar.jpg"
    },
    {
      id: 12,
      name: "Dr. Prakash Vasudevan",
      title: "Director, South India Textile Research Association (SITRA), Tamil Nadu, Coimbatore, India",
      image: "/assets/images/prakash.jpg"
    },
    {
      id: 13,
      name: "Dr. Jiri Militky",
      title: "Faculty of Textile Engineering, Technical University of Liberec, Czech Republic.",
      image: "/assets/images/jiri.jpeg"
    },
    {
      id: 14,
      name: "Mr. ShivaKumar Venkatesh",
      title: "Senior Regional Manager, Zwick Roell, Kolar, Karnataka, India.",
      image: "/assets/images/shivakumar.jpeg"
    },
  ];

  return (
    <>
      <Helmet>
        <title>Expert Talk - INDUTECH 2025 | International Conference on Industrial Textiles</title>
        <meta 
          name="description" 
          content="Join expert talk sessions at INDUTECH 2025 featuring renowned speakers from leading institutions worldwide. Learn from industry experts and academic leaders." 
        />
        <meta name="keywords" content="INDUTECH 2025, expert talk, speakers, textile technology, industrial textiles, conference sessions" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16 sm:pt-18 md:pt-20 lg:pt-24">
          {/* Hero Section */}
          <section className="pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-16 bg-gradient-to-r from-cyan-700 via-cyan-800 to-cyan-900">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
                  Expert Talk Sessions
                </h1>
                <p className="text-lg text-cyan-100 max-w-3xl mx-auto leading-relaxed">
                  Learn from world-renowned experts in textile engineering, composite materials, and industrial applications. Join sessions featuring distinguished speakers from leading institutions worldwide.
                </p>
              </div>
            </div>
          </section>
          
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
            {/* Introduction */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                Meet Our Distinguished Speakers
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our expert talk sessions feature leading researchers, industry professionals, and innovators from around the world. Each session provides valuable insights into cutting-edge developments in textile engineering, composite materials, and industrial applications.
              </p>
            </div>

            {/* Speakers Grid - 4 cards per row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {speakers.map((speaker) => (
                <div key={speaker.id} className="bg-card rounded-lg border border-border p-6 hover:shadow-lg transition-all duration-300">
                  {/* Speaker Image */}
                  <div className="mb-4">
                    <div className="w-full aspect-square bg-gray-200 rounded-lg overflow-hidden">
                      <AppImage
                        src={speaker.image}
                        alt={`${speaker.name}`}
                        className="w-full h-full object-cover"
                        fallback={
                          <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
                            <div className="text-gray-400 text-center">
                              <div className="w-16 h-16 mx-auto mb-2 bg-gray-300 rounded-full flex items-center justify-center">
                                <span className="text-2xl">👤</span>
                              </div>
                              <p className="text-sm">Photo</p>
                            </div>
                          </div>
                        }
                      />
                    </div>
                  </div>

                  {/* Speaker Info */}
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-foreground mb-2 leading-tight">
                      {speaker.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {speaker.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <section className="mt-16 bg-card rounded-lg border border-border p-8 text-center">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                Don't Miss These Expert Sessions
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                Register now to secure your spot and gain access to all expert talk sessions, networking opportunities, and conference materials from these distinguished speakers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/registration"
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  Register Now
                </a>
                <a
                  href="/abstract-submission"
                  className="inline-flex items-center justify-center px-8 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-muted transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  Submit Abstract
                </a>
              </div>
            </section>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-card border-t border-border py-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} INDUTECH 2025. All rights reserved. 
                Organized by Departments of Textile Technology and Automobile Engineering, PSG College of Technology.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ExpertTalk;