import React, { useState, useEffect, useMemo } from 'react';
import Header from '../../components/ui/Header';
import FilterControls from './components/FilterControls';
import SpeakerGrid from './components/SpeakerGrid';
import SpeakerModal from './components/SpeakerModal';

const ExpertTalk = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortBy, setSortBy] = useState('name');
  const [filterBy, setFilterBy] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Mock speakers data
  const speakersData = [
    {
      id: 1,
      name: "Dr. Sarah Mitchell",
      title: "Professor of Textile Engineering",
      institution: "Massachusetts Institute of Technology, USA",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      expertise: ["Technical Textiles", "Smart Fabrics", "Nanotechnology"],
      biography: `Dr. Sarah Mitchell is a renowned expert in textile engineering with over 20 years of experience in developing innovative textile solutions. She has published over 150 research papers and holds 25 patents in the field of smart textiles and nanotechnology applications.`,
      sessionTopic: "Smart Textiles: The Future of Wearable Technology",
      sessionDescription: `This session will explore the latest developments in smart textiles, including conductive fibers, embedded sensors, and their applications in healthcare, sports, and military sectors.`,
      sessionDate: "15th March 2025",
      sessionTime: "10:00 AM - 11:00 AM",
      venue: "Main Auditorium"
    },
    {
      id: 2,
      name: "Prof. Rajesh Kumar",
      title: "Director, Textile Research Institute",
      institution: "Indian Institute of Technology Delhi, India",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      expertise: ["Composite Materials", "Automotive Textiles", "Sustainability"],
      biography: `Prof. Rajesh Kumar is a leading researcher in composite materials and automotive textiles. He has been instrumental in developing sustainable textile solutions for the automotive industry and has collaborated with major automobile manufacturers globally.`,
      sessionTopic: "Sustainable Composite Materials in Automotive Applications",
      sessionDescription: `An in-depth look at how sustainable composite materials are revolutionizing the automotive industry, focusing on weight reduction, fuel efficiency, and environmental impact.`,
      sessionDate: "15th March 2025",
      sessionTime: "11:30 AM - 12:30 PM",
      venue: "Conference Hall A"
    },
    {
      id: 3,
      name: "Dr. Emma Thompson",
      title: "Senior Research Scientist",
      institution: "Cambridge University, UK",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      expertise: ["Biomaterials", "Medical Textiles", "Innovation"],
      biography: `Dr. Emma Thompson specializes in biomaterials and medical textiles with a focus on developing innovative solutions for healthcare applications. Her research has led to breakthrough developments in wound care and surgical textiles.`,
      sessionTopic: "Biomaterials in Medical Textile Applications",
      sessionDescription: `This presentation will cover the latest advances in biomaterials for medical textiles, including biodegradable sutures, antimicrobial fabrics, and tissue engineering scaffolds.`,
      sessionDate: "15th March 2025",
      sessionTime: "2:00 PM - 3:00 PM",
      venue: "Conference Hall B"
    },
    {
      id: 4,
      name: "Dr. Hans Mueller",
      title: "Head of Innovation",
      institution: "Technical University of Munich, Germany",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      expertise: ["Technical Textiles", "Industrial Applications", "Manufacturing"],
      biography: `Dr. Hans Mueller is an expert in technical textiles with extensive experience in industrial applications. He has led numerous projects in developing high-performance textiles for aerospace, construction, and industrial sectors.`,
      sessionTopic: "High-Performance Technical Textiles for Industrial Use",
      sessionDescription: `Exploring the development and applications of high-performance technical textiles in various industrial sectors, including aerospace, construction, and manufacturing.`,
      sessionDate: "16th March 2025",
      sessionTime: "9:00 AM - 10:00 AM",
      venue: "Main Auditorium"
    },
    {
      id: 5,
      name: "Dr. Priya Sharma",
      title: "Associate Professor",
      institution: "National Institute of Fashion Technology, India",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
      expertise: ["Fashion Technology", "Sustainable Fashion", "Textile Design"],
      biography: `Dr. Priya Sharma is a fashion technology expert with a passion for sustainable fashion. She has been working on developing eco-friendly textile processes and promoting sustainable practices in the fashion industry.`,
      sessionTopic: "Sustainable Fashion: Technology Meets Responsibility",
      sessionDescription: `This session will discuss how technology is enabling sustainable fashion practices, from eco-friendly dyeing processes to circular fashion models.`,
      sessionDate: "16th March 2025",
      sessionTime: "10:30 AM - 11:30 AM",
      venue: "Conference Hall A"
    },
    {
      id: 6,
      name: "Prof. Michael Chen",
      title: "Chair, Materials Science Department",
      institution: "Stanford University, USA",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop&crop=face",
      expertise: ["Composite Materials", "Nanotechnology", "Advanced Manufacturing"],
      biography: `Prof. Michael Chen is a materials science expert specializing in composite materials and nanotechnology. His research focuses on developing next-generation materials for various applications including textiles, electronics, and energy storage.`,
      sessionTopic: "Nanotechnology in Advanced Textile Manufacturing",
      sessionDescription: `An exploration of how nanotechnology is transforming textile manufacturing, including nanofiber production, surface modification, and functional coatings.`,
      sessionDate: "16th March 2025",
      sessionTime: "12:00 PM - 1:00 PM",
      venue: "Conference Hall B"
    },
    {
      id: 7,
      name: "Dr. Lisa Anderson",
      title: "Research Director",
      institution: "Textile Research Institute, Australia",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      expertise: ["Fiber Science", "Textile Testing", "Quality Control"],
      biography: `Dr. Lisa Anderson is a fiber science expert with extensive experience in textile testing and quality control. She has developed several industry-standard testing methods and has been instrumental in improving textile quality standards globally.`,
      sessionTopic: "Advanced Fiber Characterization Techniques",
      sessionDescription: `This presentation will cover the latest techniques in fiber characterization, including advanced microscopy, spectroscopy, and mechanical testing methods.`,
      sessionDate: "16th March 2025",
      sessionTime: "2:30 PM - 3:30 PM",
      venue: "Main Auditorium"
    },
    {
      id: 8,
      name: "Dr. Ahmed Hassan",
      title: "Professor of Chemical Engineering",
      institution: "Cairo University, Egypt",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      expertise: ["Textile Chemistry", "Dyeing Technology", "Process Optimization"],
      biography: `Dr. Ahmed Hassan is a chemical engineering expert specializing in textile chemistry and dyeing technology. His research focuses on developing environmentally friendly dyeing processes and optimizing textile manufacturing operations.`,
      sessionTopic: "Green Chemistry in Textile Processing",
      sessionDescription: `Exploring environmentally friendly chemical processes in textile manufacturing, including green dyeing techniques, water treatment, and waste reduction strategies.`,
      sessionDate: "17th March 2025",
      sessionTime: "9:30 AM - 10:30 AM",
      venue: "Conference Hall A"
    },
    {
      id: 9,
      name: "Prof. Maria Rodriguez",
      title: "Head of Textile Engineering",
      institution: "Technical University of Catalonia, Spain",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face",
      expertise: ["Textile Machinery", "Automation", "Industry 4.0"],
      biography: `Prof. Maria Rodriguez is an expert in textile machinery and automation. She has been leading research in Industry 4.0 applications in textile manufacturing and has developed several automated textile production systems.`,
      sessionTopic: "Industry 4.0 in Textile Manufacturing",
      sessionDescription: `This session will explore how Industry 4.0 technologies are transforming textile manufacturing, including IoT, AI, and automated production systems.`,
      sessionDate: "17th March 2025",
      sessionTime: "11:00 AM - 12:00 PM",
      venue: "Conference Hall B"
    },
    {
      id: 10,
      name: "Dr. James Wilson",
      title: "Senior Scientist",
      institution: "DuPont Research Center, USA",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
      expertise: ["Polymer Science", "High-Performance Fibers", "Material Innovation"],
      biography: `Dr. James Wilson is a polymer science expert with over 15 years of experience in developing high-performance fibers. He has been involved in creating several breakthrough materials used in aerospace and defense applications.`,
      sessionTopic: "Next-Generation High-Performance Fibers",
      sessionDescription: `An overview of the latest developments in high-performance fibers, including ultra-strong materials, heat-resistant fibers, and their applications in extreme environments.`,
      sessionDate: "17th March 2025",
      sessionTime: "1:30 PM - 2:30 PM",
      venue: "Main Auditorium"
    },
    {
      id: 11,
      name: "Dr. Yuki Tanaka",
      title: "Professor of Materials Engineering",
      institution: "Tokyo Institute of Technology, Japan",
      image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop&crop=face",
      expertise: ["Smart Materials", "Sensors", "Wearable Technology"],
      biography: `Dr. Yuki Tanaka specializes in smart materials and sensor technology. His research focuses on developing intelligent textiles with embedded sensors for health monitoring and environmental sensing applications.`,
      sessionTopic: "Intelligent Textiles with Embedded Sensors",
      sessionDescription: `This presentation will showcase the latest developments in intelligent textiles with embedded sensors, including health monitoring fabrics and environmental sensing applications.`,
      sessionDate: "17th March 2025",
      sessionTime: "3:00 PM - 4:00 PM",
      venue: "Conference Hall A"
    },
    {
      id: 12,
      name: "Dr. Sophie Laurent",
      title: "Research Professor",
      institution: "École Nationale Supérieure des Arts et Industries Textiles, France",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=400&fit=crop&crop=face",
      expertise: ["Textile Design", "Color Science", "Digital Printing"],
      biography: `Dr. Sophie Laurent is an expert in textile design and color science. She has been working on advanced digital printing technologies and color management systems for textile applications.`,
      sessionTopic: "Digital Innovation in Textile Design and Printing",
      sessionDescription: `Exploring the latest digital innovations in textile design and printing, including 3D printing on textiles, digital color management, and personalized textile production.`,
      sessionDate: "18th March 2025",
      sessionTime: "9:00 AM - 10:00 AM",
      venue: "Conference Hall B"
    },
    {
      id: 13,
      name: "Dr. Roberto Silva",
      title: "Director of Research",
      institution: "University of São Paulo, Brazil",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      expertise: ["Natural Fibers", "Biodegradable Materials", "Circular Economy"],
      biography: `Dr. Roberto Silva is an expert in natural fibers and biodegradable materials. His research focuses on developing sustainable textile solutions using natural resources and promoting circular economy principles in the textile industry.`,
      sessionTopic: "Natural Fibers and Circular Economy in Textiles",
      sessionDescription: `This session will discuss the role of natural fibers in creating a circular economy for textiles, including biodegradable materials and sustainable production methods.`,
      sessionDate: "18th March 2025",
      sessionTime: "10:30 AM - 11:30 AM",
      venue: "Main Auditorium"
    },
    {
      id: 14,
      name: "Dr. Anna Kowalski",
      title: "Head of Textile Innovation Lab",
      institution: "Warsaw University of Technology, Poland",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      expertise: ["Protective Textiles", "Safety Applications", "Performance Testing"],
      biography: `Dr. Anna Kowalski specializes in protective textiles and safety applications. She has developed several innovative protective textile solutions for firefighters, military personnel, and industrial workers.`,
      sessionTopic: "Advanced Protective Textiles for Safety Applications",
      sessionDescription: `An in-depth look at advanced protective textiles, including flame-resistant materials, chemical protective fabrics, and ballistic protection systems.`,
      sessionDate: "18th March 2025",
      sessionTime: "12:00 PM - 1:00 PM",
      venue: "Conference Hall A"
    }
  ];

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Filter and sort speakers
  const filteredAndSortedSpeakers = useMemo(() => {
    let filtered = speakersData;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered?.filter(speaker =>
        speaker?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
        speaker?.institution?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
        speaker?.expertise?.some(exp => exp?.toLowerCase()?.includes(searchTerm?.toLowerCase()))
      );
    }

    // Apply expertise filter
    if (filterBy !== 'all') {
      filtered = filtered?.filter(speaker =>
        speaker?.expertise?.some(exp => 
          exp?.toLowerCase()?.replace(/\s+/g, '-') === filterBy
        )
      );
    }

    // Apply sorting
    filtered?.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a?.name?.localeCompare(b?.name);
        case 'institution':
          return a?.institution?.localeCompare(b?.institution);
        case 'expertise':
          return a?.expertise?.[0]?.localeCompare(b?.expertise?.[0]);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, filterBy, sortBy]);

  const handleSpeakerClick = (speaker) => {
    setSelectedSpeaker(speaker);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSpeaker(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
                Expert Talk Sessions
              </h1>
              <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
                Learn from world-renowned experts in textile engineering, composite materials, and industrial applications
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-primary-foreground/80">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span>14 Expert Speakers</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span>3 Days of Sessions</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span>Multiple Expertise Areas</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Introduction */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                Meet Our Distinguished Speakers
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our expert talk sessions feature leading researchers, industry professionals, and innovators from around the world. Each session provides valuable insights into cutting-edge developments in textile engineering, composite materials, and industrial applications.
              </p>
            </div>

            {/* Filter Controls */}
            <FilterControls
              sortBy={sortBy}
              setSortBy={setSortBy}
              filterBy={filterBy}
              setFilterBy={setFilterBy}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />

            {/* Results Count */}
            {!isLoading && (
              <div className="mb-6">
                <p className="text-muted-foreground">
                  Showing {filteredAndSortedSpeakers?.length} of {speakersData?.length} speakers
                  {searchTerm && ` for "${searchTerm}"`}
                  {filterBy !== 'all' && ` in ${filterBy?.replace('-', ' ')}`}
                </p>
              </div>
            )}

            {/* Speaker Grid */}
            <SpeakerGrid
              speakers={filteredAndSortedSpeakers}
              onSpeakerClick={handleSpeakerClick}
              isLoading={isLoading}
            />
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-card py-16 border-t border-border">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Don't Miss These Expert Sessions
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Register now to secure your spot and gain access to all expert talk sessions, networking opportunities, and conference materials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/registration"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-smooth focus-ring"
              >
                Register Now
              </a>
              <a
                href="/abstract-submission"
                className="inline-flex items-center justify-center px-8 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-muted transition-smooth focus-ring"
              >
                Submit Abstract
              </a>
            </div>
          </div>
        </section>
      </main>
      {/* Speaker Modal */}
      <SpeakerModal
        speaker={selectedSpeaker}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default ExpertTalk;