import React from 'react';
import Image from '../../../components/AppImage';

const CollaborationSection = () => {
  const partners = [
    {
      id: 1,
      name: "Ministry of Textiles",
      logo: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      type: "Government Partner"
    },
    {
      id: 2,
      name: "Indian Institute of Technology",
      logo: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg",
      type: "Academic Partner"
    },
    {
      id: 3,
      name: "Textile Research Association",
      logo: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg",
      type: "Research Partner"
    },
    {
      id: 4,
      name: "International Textile Institute",
      logo: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
      type: "International Partner"
    },
    {
      id: 5,
      name: "Textile Manufacturers Association",
      logo: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      type: "Industry Partner"
    },
    {
      id: 6,
      name: "National Institute of Fashion Technology",
      logo: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
      type: "Educational Partner"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Collaboration Partners
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            INDUTECH 2025 is proudly supported by leading institutions, government bodies, and industry leaders committed to advancing industrial textiles research and innovation.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners?.map((partner) => (
            <div
              key={partner?.id}
              className="bg-white rounded-lg p-6 shadow-subtle hover:shadow-elevated transition-smooth card-hover group"
            >
              <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                <Image
                  src={partner?.logo}
                  alt={partner?.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-sm text-foreground mb-1 line-clamp-2">
                  {partner?.name}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {partner?.type}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg p-8 shadow-subtle max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Government of India Collaboration
            </h3>
            <p className="text-muted-foreground mb-6">
              This conference is organized in collaboration with the Ministry of Textiles, Government of India, and supported by various national and international textile research institutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                Government Approved
              </span>
              <span className="bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium">
                International Recognition
              </span>
              <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
                Industry Endorsed
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;