import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import CallForPapersCard from './components/CallForPapersCard';
import DeadlineCard from './components/DeadlineCard';
import SubmissionGuidelines from './components/SubmissionGuidelines';
import PublicationDetails from './components/PublicationDetails';
import ContactSupport from './components/ContactSupport';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const AbstractSubmission = () => {
  const [expandedTopic, setExpandedTopic] = useState(null);

  const callForPapersTopics = [
    {
      id: 1,
      title: "Advanced Fiber Technologies",
      brief: "Novel fiber development and characterization techniques",
      themes: [
        "High-performance synthetic fibers",
        "Bio-based and sustainable fibers",
        "Smart and functional fibers",
        "Nanofiber technologies"
      ],
      guidelines: [
        "Include experimental methodology",
        "Provide comparative analysis",
        "Discuss industrial applications",
        "Address sustainability aspects"
      ],
      reviewCriteria: "Evaluated based on novelty, technical rigor, industrial relevance, and potential impact on fiber technology advancement."
    },
    {
      id: 2,
      title: "Composite Materials and Structures",
      brief: "Innovative composite design and manufacturing processes",
      themes: [
        "Fiber-reinforced composites",
        "Natural fiber composites",
        "Hybrid composite systems",
        "Composite recycling technologies"
      ],
      guidelines: [
        "Detail manufacturing processes",
        "Include mechanical testing results",
        "Discuss failure mechanisms",
        "Address cost-effectiveness"
      ],
      reviewCriteria: "Assessment focuses on material innovation, structural performance, manufacturing feasibility, and environmental considerations."
    },
    {
      id: 3,
      title: "Technical Textiles for Automotive",
      brief: "Textile solutions for automotive industry applications",
      themes: [
        "Interior textile components",
        "Filtration systems",
        "Reinforcement materials",
        "Acoustic insulation textiles"
      ],
      guidelines: [
        "Specify automotive standards compliance",
        "Include durability testing data",
        "Discuss weight reduction benefits",
        "Address safety requirements"
      ],
      reviewCriteria: "Reviewed for automotive industry relevance, performance standards compliance, innovation level, and commercial viability."
    },
    {
      id: 4,
      title: "Geotextiles and Infrastructure",
      brief: "Textile applications in civil engineering and construction",
      themes: [
        "Soil reinforcement systems",
        "Drainage and filtration",
        "Erosion control textiles",
        "Road construction applications"
      ],
      guidelines: [
        "Include field testing results",
        "Provide durability assessments",
        "Discuss installation methods",
        "Address environmental impact"
      ],
      reviewCriteria: "Evaluated on engineering performance, durability, installation feasibility, and contribution to infrastructure development."
    },
    {
      id: 5,
      title: "Medical and Healthcare Textiles",
      brief: "Textile innovations for medical and healthcare applications",
      themes: [
        "Surgical textiles and implants",
        "Wound care materials",
        "Antimicrobial textiles",
        "Drug delivery systems"
      ],
      guidelines: [
        "Include biocompatibility testing",
        "Discuss regulatory compliance",
        "Provide clinical trial data",
        "Address sterilization methods"
      ],
      reviewCriteria: "Assessment based on medical efficacy, safety standards, regulatory compliance, and potential clinical impact."
    },
    {
      id: 6,
      title: "Protective Textiles and Safety",
      brief: "Advanced materials for personal and industrial protection",
      themes: [
        "Ballistic protection systems",
        "Chemical protective clothing",
        "Fire-resistant textiles",
        "Cut and puncture resistance"
      ],
      guidelines: [
        "Include protection level testing",
        "Specify standard compliance",
        "Discuss comfort factors",
        "Address durability requirements"
      ],
      reviewCriteria: "Reviewed for protection effectiveness, standard compliance, user comfort, and industrial application potential."
    },
    {
      id: 7,
      title: "Smart and Functional Textiles",
      brief: "Integration of electronics and sensors in textile structures",
      themes: [
        "Conductive textile materials",
        "Sensor-integrated fabrics",
        "Energy harvesting textiles",
        "Shape memory textiles"
      ],
      guidelines: [
        "Detail electronic integration methods",
        "Include functionality testing",
        "Discuss washability and durability",
        "Address manufacturing scalability"
      ],
      reviewCriteria: "Evaluated on technological innovation, functionality demonstration, durability, and commercial feasibility."
    },
    {
      id: 8,
      title: "Sustainable Manufacturing Processes",
      brief: "Eco-friendly production methods and circular economy approaches",
      themes: [
        "Water-free dyeing technologies",
        "Energy-efficient processes",
        "Waste reduction strategies",
        "Circular economy models"
      ],
      guidelines: [
        "Quantify environmental benefits",
        "Include life cycle assessment",
        "Discuss economic viability",
        "Address scalability challenges"
      ],
      reviewCriteria: "Assessment focuses on environmental impact reduction, economic feasibility, scalability, and industry adoption potential."
    },
    {
      id: 9,
      title: "Filtration and Separation Technologies",
      brief: "Advanced filtration systems using textile materials",
      themes: [
        "Air filtration systems",
        "Water treatment applications",
        "Industrial separation processes",
        "Membrane technologies"
      ],
      guidelines: [
        "Include filtration efficiency data",
        "Discuss pressure drop characteristics",
        "Address fouling resistance",
        "Provide cost-benefit analysis"
      ],
      reviewCriteria: "Reviewed for filtration performance, durability, cost-effectiveness, and industrial application potential."
    },
    {
      id: 10,
      title: "Nonwoven Technologies",
      brief: "Innovative nonwoven production and applications",
      themes: [
        "Spunbond and meltblown processes",
        "Needlepunch technologies",
        "Hydroentanglement systems",
        "Biodegradable nonwovens"
      ],
      guidelines: [
        "Detail production parameters",
        "Include property characterization",
        "Discuss application suitability",
        "Address cost considerations"
      ],
      reviewCriteria: "Evaluated on process innovation, product performance, application versatility, and manufacturing efficiency."
    },
    {
      id: 11,
      title: "Textile Testing and Quality Control",
      brief: "Advanced testing methods and quality assurance systems",
      themes: [
        "Non-destructive testing methods",
        "Automated quality control",
        "Performance prediction models",
        "Digital testing technologies"
      ],
      guidelines: [
        "Include validation studies",
        "Discuss accuracy and precision",
        "Address implementation challenges",
        "Provide comparative analysis"
      ],
      reviewCriteria: "Assessment based on testing accuracy, industrial applicability, cost-effectiveness, and contribution to quality improvement."
    },
    {
      id: 12,
      title: "Digital Textile Manufacturing",
      brief: "Industry 4.0 applications in textile production",
      themes: [
        "Digital printing technologies",
        "IoT in textile manufacturing",
        "AI-driven process optimization",
        "Automated production systems"
      ],
      guidelines: [
        "Include implementation case studies",
        "Discuss ROI and efficiency gains",
        "Address technical challenges",
        "Provide scalability assessment"
      ],
      reviewCriteria: "Reviewed for technological advancement, implementation feasibility, economic benefits, and industry transformation potential."
    },
    {
      id: 13,
      title: "Textile Recycling and Waste Management",
      brief: "Innovative approaches to textile waste reduction and recycling",
      themes: [
        "Chemical recycling processes",
        "Mechanical recycling innovations",
        "Waste-to-energy applications",
        "Circular design principles"
      ],
      guidelines: [
        "Quantify recycling efficiency",
        "Include economic analysis",
        "Discuss environmental benefits",
        "Address scalability issues"
      ],
      reviewCriteria: "Evaluated on recycling effectiveness, environmental impact, economic viability, and contribution to circular economy."
    },
    {
      id: 14,
      title: "Textile Machinery and Equipment",
      brief: "Advanced machinery design and automation technologies",
      themes: [
        "High-speed production systems",
        "Energy-efficient machinery",
        "Maintenance and monitoring systems",
        "Flexible manufacturing equipment"
      ],
      guidelines: [
        "Include performance benchmarks",
        "Discuss energy efficiency gains",
        "Address maintenance requirements",
        "Provide cost-benefit analysis"
      ],
      reviewCriteria: "Assessment focuses on technological innovation, efficiency improvements, reliability, and industrial adoption potential."
    },
    {
      id: 15,
      title: "Textile Chemistry and Finishing",
      brief: "Novel chemical treatments and finishing technologies",
      themes: [
        "Eco-friendly finishing processes",
        "Functional chemical treatments",
        "Plasma and UV treatments",
        "Nanotechnology applications"
      ],
      guidelines: [
        "Include chemical analysis data",
        "Discuss environmental compliance",
        "Address durability of treatments",
        "Provide application examples"
      ],
      reviewCriteria: "Reviewed for chemical innovation, environmental safety, treatment effectiveness, and commercial applicability."
    },
    {
      id: 16,
      title: "Biomaterials and Biotextiles",
      brief: "Bio-based materials and biotechnology applications in textiles",
      themes: [
        "Bacterial cellulose production",
        "Protein-based fibers",
        "Enzymatic treatments",
        "Biodegradable textile materials"
      ],
      guidelines: [
        "Include biocompatibility studies",
        "Discuss production scalability",
        "Address regulatory considerations",
        "Provide sustainability metrics"
      ],
      reviewCriteria: "Evaluated on biological innovation, sustainability benefits, scalability potential, and regulatory compliance."
    },
    {
      id: 17,
      title: "Textile Economics and Market Analysis",
      brief: "Economic studies and market trends in textile industry",
      themes: [
        "Market demand analysis",
        "Cost optimization strategies",
        "Supply chain management",
        "Investment and financing models"
      ],
      guidelines: [
        "Include statistical analysis",
        "Provide market data validation",
        "Discuss economic implications",
        "Address future projections"
      ],
      reviewCriteria: "Assessment based on analytical rigor, market relevance, economic insights, and strategic implications for industry."
    }
  ];

  const keyDeadlines = [
    {
      title: "Abstract Submission Deadline",
      description: "Final date for abstract submissions",
      date: "15th February 2025"
    },
    {
      title: "Review Results Notification",
      description: "Authors will be notified of review outcomes",
      date: "1st March 2025"
    },
    {
      title: "Full Paper Submission",
      description: "Deadline for full paper submissions",
      date: "15th March 2025"
    },
    {
      title: "Final Registration Deadline",
      description: "Last date for conference registration",
      date: "30th March 2025"
    }
  ];

  const handleTopicToggle = (topicId) => {
    setExpandedTopic(expandedTopic === topicId ? null : topicId);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-primary text-primary-foreground rounded-2xl">
                <Icon name="FileText" size={32} />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Abstract Submission
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Submit your research abstracts for INDUTECH 2025 and contribute to advancing 
              industrial textile technologies. Join leading researchers and industry experts 
              in sharing innovative solutions and breakthrough discoveries.
            </p>
          </div>

          {/* Key Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-card rounded-lg border border-border">
              <div className="text-3xl font-bold text-primary mb-2">17</div>
              <div className="text-sm text-muted-foreground">Research Topics</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border border-border">
              <div className="text-3xl font-bold text-success mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Expected Submissions</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border border-border">
              <div className="text-3xl font-bold text-accent mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Review Experts</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border border-border">
              <div className="text-3xl font-bold text-warning mb-2">5</div>
              <div className="text-sm text-muted-foreground">Partner Journals</div>
            </div>
          </div>
        </div>
      </section>
      {/* Key Deadlines */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Important Deadlines</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Mark your calendar with these critical dates for the submission process
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyDeadlines?.map((deadline, index) => (
              <DeadlineCard key={index} deadline={deadline} />
            ))}
          </div>
        </div>
      </section>
      {/* Call for Papers Topics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Call for Papers</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive research topics and submit your innovative work 
              in industrial textiles and related technologies
            </p>
          </div>

          <div className="grid gap-6">
            {callForPapersTopics?.map((topic) => (
              <CallForPapersCard
                key={topic?.id}
                topic={topic}
                isExpanded={expandedTopic === topic?.id}
                onToggle={() => handleTopicToggle(topic?.id)}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="default" size="lg" iconName="ExternalLink" iconPosition="right">
              Access Submission Portal
            </Button>
          </div>
        </div>
      </section>
      {/* Submission Guidelines */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SubmissionGuidelines />
        </div>
      </section>
      {/* Publication Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <PublicationDetails />
        </div>
      </section>
      {/* Contact Support */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ContactSupport />
        </div>
      </section>
      {/* Footer CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Submit Your Research?</h2>
          <p className="text-xl opacity-90 mb-8">
            Join the global community of researchers advancing industrial textile technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" iconName="FileText" iconPosition="left">
              Start Submission
            </Button>
            <Button variant="outline" size="lg" iconName="Download" iconPosition="left">
              Download Guidelines
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AbstractSubmission;