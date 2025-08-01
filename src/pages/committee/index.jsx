import React from 'react';
import Header from '../../components/ui/Header';
import CommitteeSection from './components/CommitteeSection';

const Committee = () => {
  // Mock committee data
  const organizingCommittee = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      title: "Professor & Head",
      institution: "Department of Textile Technology, IIT Delhi",
      role: "Conference Chair",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      email: "rajesh.kumar@iitd.ac.in",
      phone: "+91-11-2659-1234"
    },
    {
      id: 2,
      name: "Prof. Meera Sharma",
      title: "Director",
      institution: "National Institute of Fashion Technology, Mumbai",
      role: "Co-Chair",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      email: "meera.sharma@nift.ac.in",
      phone: "+91-22-2659-5678"
    },
    {
      id: 3,
      name: "Dr. Anil Patel",
      title: "Senior Scientist",
      institution: "Central Institute for Research on Cotton Technology",
      role: "Organizing Secretary",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      email: "anil.patel@circot.res.in",
      phone: "+91-22-2445-9876"
    }
  ];

  const technicalCommittee = [
    {
      id: 4,
      name: "Dr. Priya Gupta",
      title: "Associate Professor",
      institution: "Department of Polymer Science, University of Pune",
      role: "Technical Chair",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      email: "priya.gupta@unipune.ac.in",
      phone: "+91-20-2569-1234"
    },
    {
      id: 5,
      name: "Prof. Vikram Singh",
      title: "Head of Research",
      institution: "Textile Research Association, Ahmedabad",
      role: "Technical Co-Chair",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      email: "vikram.singh@tra.org.in",
      phone: "+91-79-2630-5678"
    },
    {
      id: 6,
      name: "Dr. Sunita Reddy",
      title: "Principal Scientist",
      institution: "Indian Institute of Chemical Technology, Hyderabad",
      role: "Program Committee",
      photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
      email: "sunita.reddy@iict.res.in",
      phone: "+91-40-2719-9876"
    }
  ];

  const advisoryBoard = [
    {
      id: 7,
      name: "Prof. Emeritus K.L. Mittal",
      title: "Former Director",
      institution: "National Institute of Technology, Jalandhar",
      role: "Advisory Board Chair",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
      email: "kl.mittal@nitj.ac.in",
      phone: "+91-181-2690-1234"
    },
    {
      id: 8,
      name: "Dr. Ravi Krishnan",
      title: "Chief Technology Officer",
      institution: "Welspun India Limited",
      role: "Industry Advisor",
      photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
      email: "ravi.krishnan@welspun.com",
      phone: "+91-22-6613-5678"
    },
    {
      id: 9,
      name: "Prof. Lakshmi Nair",
      title: "Dean",
      institution: "School of Materials Science, Anna University",
      role: "Academic Advisor",
      photo: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=400&fit=crop&crop=face",
      email: "lakshmi.nair@annauniv.edu",
      phone: "+91-44-2235-9876"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                Conference Committee
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Meet the distinguished academic and industry professionals organizing INDUTECH 2025. 
                Our committee brings together expertise from leading institutions and organizations 
                to deliver a world-class conference experience.
              </p>
            </div>
          </div>
        </section>

        {/* Committee Sections */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Organizing Committee */}
            <CommitteeSection
              title="Organizing Committee"
              description="The core team responsible for planning, coordinating, and executing all aspects of INDUTECH 2025, ensuring a seamless conference experience for all participants."
              members={organizingCommittee}
            />

            {/* Technical Committee */}
            <CommitteeSection
              title="Technical Committee"
              description="Expert panel overseeing the technical program, paper reviews, and ensuring the highest quality of scientific content and presentations."
              members={technicalCommittee}
            />

            {/* Advisory Board */}
            <CommitteeSection
              title="Advisory Board"
              description="Distinguished leaders providing strategic guidance and industry insights to shape the conference direction and maintain academic excellence."
              members={advisoryBoard}
            />
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-card py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
              Get in Touch with Our Committee
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Have questions about the conference? Need assistance with submissions or registration? 
              Our committee members are here to help. Click on any member's contact information above 
              to reach out directly, or use our general conference contact channels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center justify-center px-6 py-3 bg-primary/10 rounded-lg">
                <span className="text-sm font-medium text-primary">
                  General Inquiries: info@indutech2025.org
                </span>
              </div>
              <div className="flex items-center justify-center px-6 py-3 bg-accent/10 rounded-lg">
                <span className="text-sm font-medium text-accent">
                  Technical Support: tech@indutech2025.org
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm opacity-80">
            © {new Date()?.getFullYear()} INDUTECH 2025. All rights reserved. 
            Organized by leading academic institutions in collaboration with industry partners.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Committee;