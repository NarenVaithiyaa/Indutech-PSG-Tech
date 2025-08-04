import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us - INDUTECH 2025 | International Conference on Industrial Textiles</title>
        <meta 
          name="description" 
          content="Learn about the organizing institutions and academic partners behind INDUTECH 2025, including PSG College of Technology and international collaborators." 
        />
        <meta name="keywords" content="INDUTECH 2025, about us, organizing institutions, PSG College of Technology, academic partners, technical textiles" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16 sm:pt-18 md:pt-20 lg:pt-24">
          {/* Hero Section */}
          <section className="pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-16 bg-gradient-to-r from-cyan-700 via-cyan-800 to-cyan-900">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
                  About INDUTECH 2025
                </h1>
                <p className="text-lg text-cyan-100 max-w-3xl mx-auto leading-relaxed text-center">
                  Discover the organizing institutions, academic partners, and collaborative vision 
                  that make INDUTECH 2025 a premier platform for industrial textiles innovation 
                  and knowledge exchange.
                </p>
              </div>
            </div>
          </section>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

            {/* PSG College of Technology */}
            <section className="mb-16">
              <div className="bg-card rounded-lg border border-border p-8 lg:p-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">PSG College of Technology</h2>
                <p className="text-foreground leading-relaxed mb-6 text-justify">
                  PSG College of Technology is one of the eminent engineering colleges in the nation, founded by the PSG & Sons' Charities Trust (1926, with 100 years of service). The college comprises 15 engineering and technology departments along with science and humanities departments, all accredited by NBA.
                </p>
                <p className="text-foreground leading-relaxed text-justify">
                  The institution has a student strength of 8518, and more than 500 research scholars are currently pursuing Ph.D., MS, or M.Tech degrees.
                </p>
              </div>
            </section>

            {/* Department of Textile Technology */}
            <section className="mb-16">
              <div className="bg-card rounded-lg border border-border p-8 lg:p-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Department of Textile Technology</h2>
                <p className="text-foreground leading-relaxed mb-6 text-justify">
                  The Department of Textile Technology has earned national recognition, including the prestigious ELICO Mentor Award for Best Industry Linked Engineering Institute (AICTE-CII) in 2015.
                </p>
                <p className="text-foreground leading-relaxed mb-6 text-justify">
                  With significant funding of ₹45 Crores from the Ministry of Textiles and PSG Management, the department, in collaboration with Automobile Engineering, has established a Centre of Excellence (COE) focused on Industrial and Home Textiles. An additional ₹10 Crores was recently granted by the Ministry of Textiles for R&D, training, and infrastructure development in the area of Technical Textiles.
                </p>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">Programmes Offered:</h3>
                <ul className="list-disc list-inside text-foreground space-y-2">
                  <li>B.Tech - Textile Technology (4 Years, Full-time)</li>
                  <li>M.Tech - Textile Technology (2 Years, Full-time)</li>
                  <li>Ph.D - Textile Technology (Full-time and Part-time)</li>
                </ul>
              </div>
            </section>

            {/* Department of Automobile Engineering */}
            <section className="mb-16">
              <div className="bg-card rounded-lg border border-border p-8 lg:p-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Department of Automobile Engineering</h2>
                <p className="text-foreground leading-relaxed mb-6 text-justify">
                  The Department of Automobile Engineering plays a vital role in the COE on Industrial and Home Textiles and contributes actively to interdisciplinary research and industry collaboration.
                </p>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">Programmes Offered:</h3>
                <ul className="list-disc list-inside text-foreground space-y-2">
                  <li>B.E - Automobile Engineering (4 Years, Full-time)</li>
                  <li>M.E - Automobile Engineering (2 Years, Full-time)</li>
                  <li>Ph.D - Automobile Engineering (Full-time and Part-time)</li>
                </ul>
              </div>
            </section>

            {/* Centre of Excellence Objectives */}
            <section className="mb-16">
              <div className="bg-card rounded-lg border border-border p-8 lg:p-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Centre of Excellence (CoE) Objectives</h2>
                <p className="text-foreground leading-relaxed mb-6">
                  The Centre houses the facilities to meet the following objectives:
                </p>
                
                <ul className="list-disc list-inside text-foreground space-y-2">
                  <li>Testing and Evaluation of the Products of Industrial Textiles</li>
                  <li>Manufacturing and Finishing Machinery for Product Development</li>
                  <li>Resource Centre with I.T. Infrastructure</li>
                  <li>Training of Personnel from the Industry</li>
                  <li>New Product Development & Commercialization</li>
                  <li>Product Incubation Centre to Promote Innovation and Entrepreneurship</li>
                </ul>
              </div>
            </section>

            {/* Institute for Frontier Materials */}
            <section className="mb-16">
              <div className="bg-card rounded-lg border border-border p-8 lg:p-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Institute for Frontier Materials (IFM), Deakin University, Australia</h2>
                <p className="text-foreground leading-relaxed mb-6">
                  The Institute for Frontier Materials (IFM) at Deakin University is a world-leading materials science research institute. It brings together materials scientists and engineers to work alongside physicists, chemists, and computational scientists.
                </p>
                <p className="text-foreground leading-relaxed mb-6">
                  IFM's research addresses major societal challenges through innovations in materials design and performance. The team includes approximately 150 research academics and 150 Ph.D. students.
                </p>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">Main Research Themes:</h3>
                <ul className="list-disc list-inside text-foreground space-y-2 mb-6">
                  <li>Re-designing materials for a circular economy</li>
                  <li>Imparting materials with extraordinary functionality</li>
                </ul>
                
                <p className="text-foreground leading-relaxed mb-6">
                  The ultimate aim is to develop materials with advanced functionality suitable for a circular economy.
                </p>
                
                <p className="text-foreground leading-relaxed">
                  <strong>Core research areas include:</strong> advanced alloys, carbon fibres and composites, fibres and textiles, electromaterials, infrastructure materials, and micro/nano-materials.
                </p>
              </div>
            </section>

            {/* Northwest Composites Centre */}
            <section className="mb-16">
              <div className="bg-card rounded-lg border border-border p-8 lg:p-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Northwest Composites Centre, University of Manchester, UK</h2>
                <p className="text-foreground leading-relaxed mb-6">
                  The Northwest Composites Centre, housed within the Department of Materials at the University of Manchester, was established in 2006 with £2.1 million in funding from the Northwest Regional Development Agency (NWDA).
                </p>
                <p className="text-foreground leading-relaxed mb-6">
                  It later received an additional £8 million to establish the National Composites Certification and Evaluation Facility (NCCEF) in support of the composites sector.
                </p>
                <p className="text-foreground leading-relaxed mb-6">
                  The centre hosts over 45 Ph.D. students and 10 Post-doctoral RAs, with funding from EPSRC, TSB, BIS, EU, MoD, DSTL, US Air Force, and industry partners.
                </p>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">Research Areas:</h3>
                <ul className="list-disc list-inside text-foreground space-y-2 mb-6">
                  <li>2D and 3D weaving and braiding</li>
                  <li>Robotic fibre placement</li>
                  <li>Nonwovens and paper</li>
                  <li>Smart structures</li>
                  <li>Computational and experimental mechanics of composites</li>
                </ul>
                
                <p className="text-foreground leading-relaxed">
                  Established in 1824, the University of Manchester is the largest single-site university in the UK, ranked 41st in the world, eighth in Europe, and fifth in the UK in the 2015 Shanghai Jiao Tong World Ranking. A total of 25 Nobel Prize winners have studied or worked there. The university has invested over £750 million in the past decade, with another £1 billion in investment underway by 2022 — the largest such investment among UK universities.
                </p>
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
                Organized by PSG College of Technology in collaboration with international partners.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AboutUs;