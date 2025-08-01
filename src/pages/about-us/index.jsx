import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ExpandableSection from './components/ExpandableSection';
import BreadcrumbNavigation from './components/BreadcrumbNavigation';

const AboutUs = () => {
  const aboutSections = [
    {
      id: 1,
      title: "Government College of Engineering, Tirunelveli",
      subtitle: "Host Institution - Department of Textile Technology",
      content: `Government College of Engineering, Tirunelveli (GCET) is a premier technical institution established in 1981 under the Government of Tamil Nadu. The college is affiliated to Anna University, Chennai and approved by AICTE, New Delhi.

The Department of Textile Technology at GCET was established in 1985 and has been at the forefront of textile education and research in South India. The department offers undergraduate and postgraduate programs in Textile Technology with specializations in technical textiles and industrial applications.

Our faculty members are actively involved in research areas including smart textiles, composite materials, nonwoven technology, and sustainable textile processing. The department has state-of-the-art laboratories and pilot plant facilities for textile testing and product development.

The department has collaborated with various national and international institutions for research projects and student exchange programs, making it an ideal host for INDUTECH 2025.`
    },
    {
      id: 2,
      title: "Anna University, Chennai",
      subtitle: "Academic Partner - Centre for Excellence in Technical Textiles",
      content: `Anna University, Chennai is a state university located in Tamil Nadu, India. It was formed on 4 September 1978 and is named after C. N. Annadurai, former Chief Minister of Tamil Nadu.

The Centre for Excellence in Technical Textiles at Anna University is a specialized research center focusing on advanced textile materials and applications. The center conducts cutting-edge research in areas such as medical textiles, geotextiles, protective textiles, and automotive textiles.

The center has established strong industry partnerships and has been instrumental in developing innovative textile solutions for various industrial applications. Their research contributions in the field of technical textiles have been recognized nationally and internationally.

Anna University's involvement in INDUTECH 2025 brings academic excellence and research expertise to the conference, ensuring high-quality technical sessions and knowledge dissemination.`
    },
    {
      id: 3,
      title: "Indian Institute of Technology, Delhi",
      subtitle: "Research Collaborator - Department of Textile and Fibre Engineering",
      content: `The Indian Institute of Technology Delhi is one of the premier engineering institutions in India, established in 1961. IIT Delhi has been consistently ranked among the top engineering colleges in India and has a strong international reputation.

The Department of Textile and Fibre Engineering at IIT Delhi is renowned for its research in advanced materials, fiber science, and textile engineering. The department focuses on interdisciplinary research combining materials science, mechanical engineering, and chemical engineering principles.

Key research areas include nanofibers, smart textiles, biomaterials, composite reinforcements, and sustainable textile technologies. The department has numerous patents and publications in high-impact journals.

IIT Delhi's participation in INDUTECH 2025 as a research collaborator ensures the conference maintains the highest academic standards and showcases cutting-edge research in industrial textiles.`
    },
    {
      id: 4,
      title: "Ministry of Textiles, Government of India",
      subtitle: "Government Partner - Technical Textiles Mission",
      content: `The Ministry of Textiles, Government of India is the nodal ministry for the development of the textile sector in the country. The ministry formulates policies and implements various schemes for the growth and development of the textile industry.

The Technical Textiles Mission launched by the Ministry aims to position India as a global leader in technical textiles with a focus on domestic manufacturing and exports. The mission provides support for research and development, skill development, and market promotion.

Under this mission, various initiatives have been launched to promote technical textiles including setting up of centers of excellence, supporting startups, and facilitating technology transfer from research institutions to industry.

The Ministry's support for INDUTECH 2025 demonstrates the government's commitment to promoting technical textiles and fostering collaboration between academia and industry in this strategic sector.`
    },
    {
      id: 5,
      title: "Conference Objectives and Vision",
      subtitle: "Building Bridges Between Academia and Industry",
      content: `INDUTECH 2025 aims to create a comprehensive platform for knowledge exchange, networking, and collaboration in the field of industrial textiles. The conference objectives are designed to address current challenges and future opportunities in technical textiles.

Primary objectives include showcasing latest research developments in industrial textiles, facilitating technology transfer from laboratories to commercial applications, promoting sustainable and eco-friendly textile technologies, and creating networking opportunities for researchers, industry professionals, and policymakers.

The conference vision is to establish India as a global hub for technical textiles innovation and manufacturing. We aim to foster international collaborations, support startup ecosystem in technical textiles, and contribute to the national mission of achieving self-reliance in strategic textile materials.

Through expert talks, technical sessions, exhibitions, and networking events, INDUTECH 2025 will serve as a catalyst for advancing the industrial textiles sector and creating new opportunities for growth and innovation.`
    },
    {
      id: 6,
      title: "International Collaboration and Partnerships",
      subtitle: "Global Network of Academic and Industry Partners",
      content: `INDUTECH 2025 has established partnerships with leading international institutions and organizations in the field of technical textiles. These collaborations bring global perspectives and expertise to the conference.

Key international partners include universities from USA, Europe, and Asia-Pacific regions that are leaders in textile research and education. Industry partnerships include major technical textile manufacturers, machinery suppliers, and technology providers from around the world.

The conference features international speakers, joint research presentations, and technology showcases from global partners. These collaborations facilitate knowledge transfer, joint research opportunities, and business partnerships between Indian and international organizations.

Through these international partnerships, INDUTECH 2025 aims to position India in the global technical textiles ecosystem and create opportunities for Indian researchers and companies to access international markets and technologies.`
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - INDUTECH 2025 | International Conference on Industrial Textiles</title>
        <meta 
          name="description" 
          content="Learn about the organizing institutions and objectives of INDUTECH 2025 - International Conference on Industrial Textiles. Discover our academic partners and conference vision." 
        />
        <meta name="keywords" content="INDUTECH 2025, about us, organizing institutions, conference objectives, technical textiles, academic partners" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
            <BreadcrumbNavigation />
            
            {/* Page Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
                About INDUTECH 2025
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Discover the organizing institutions, academic partners, and collaborative vision 
                that make INDUTECH 2025 a premier platform for industrial textiles innovation 
                and knowledge exchange.
              </p>
            </div>

            {/* Expandable Sections */}
            <div className="space-y-4">
              {aboutSections?.map((section, index) => (
                <ExpandableSection
                  key={section?.id}
                  title={section?.title}
                  subtitle={section?.subtitle}
                  content={section?.content}
                  isInitiallyExpanded={index === 0}
                />
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center bg-card rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                Join the INDUTECH 2025 Community
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Be part of this prestigious international conference and contribute to the 
                advancement of industrial textiles technology and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/registration"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-smooth focus-ring"
                >
                  Register Now
                </a>
                <a
                  href="/abstract-submission"
                  className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/90 transition-smooth focus-ring"
                >
                  Submit Abstract
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default AboutUs;