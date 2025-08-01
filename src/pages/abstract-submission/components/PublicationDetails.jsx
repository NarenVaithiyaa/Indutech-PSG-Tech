import React from 'react';
import Icon from '../../../components/AppIcon';

const PublicationDetails = () => {
  const publicationSteps = [
    {
      step: 1,
      title: "Peer Review Process",
      description: "All submitted abstracts undergo rigorous peer review by international experts in the field",
      icon: "Users"
    },
    {
      step: 2,
      title: "Conference Proceedings",
      description: "Accepted abstracts will be published in the official conference proceedings with ISBN",
      icon: "Book"
    },
    {
      step: 3,
      title: "Journal Publication",
      description: "Selected full papers will be invited for publication in indexed international journals",
      icon: "Award"
    }
  ];

  const journalPartners = [
    "Journal of Industrial Textiles (SCI Indexed)",
    "Textile Research Journal (SCI Indexed)",
    "Composites Science and Technology",
    "Materials & Design",
    "Journal of Reinforced Plastics and Composites"
  ];

  return (
    <div className="bg-card rounded-lg border border-border p-8">
      <div className="flex items-center mb-6">
        <div className="p-3 bg-success text-success-foreground rounded-lg mr-4">
          <Icon name="BookOpen" size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">Publication Opportunities</h2>
          <p className="text-muted-foreground">Multiple pathways for research dissemination and impact</p>
        </div>
      </div>
      <div className="grid gap-6 mb-8">
        {publicationSteps?.map((step) => (
          <div key={step?.step} className="flex items-start p-6 bg-muted rounded-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full mr-4 flex-shrink-0">
              <span className="font-bold">{step?.step}</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center mb-2">
                <Icon name={step?.icon} size={20} className="mr-2 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">{step?.title}</h3>
              </div>
              <p className="text-muted-foreground">{step?.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-border pt-6">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
          <Icon name="Star" size={20} className="mr-2 text-accent" />
          Partner Journals
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {journalPartners?.map((journal, index) => (
            <div key={index} className="flex items-center p-3 bg-background rounded-lg border border-border">
              <Icon name="ExternalLink" size={16} className="mr-3 text-primary" />
              <span className="text-sm text-foreground">{journal}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
        <div className="flex items-start">
          <Icon name="Info" size={20} className="mr-3 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-medium text-foreground mb-1">Publication Benefits</h4>
            <p className="text-sm text-muted-foreground">
              All publications will include DOI assignment, international visibility, and citation tracking. 
              Authors retain copyright while granting conference publication rights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicationDetails;