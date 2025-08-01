import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SubmissionGuidelines = () => {
  const guidelines = [
    "Abstract should be between 250-300 words",
    "Include 3-5 keywords relevant to your research",
    "Use Times New Roman, 12pt font, single spacing",
    "Submit in PDF format only",
    "Include author names, affiliations, and contact details",
    "Ensure originality and avoid plagiarism",
    "Follow the provided template structure",
    "Include references if applicable (max 5)"
  ];

  const formatRequirements = [
    "Title: Maximum 20 words, capitalize first letter of each word",
    "Authors: Full names with institutional affiliations",
    "Abstract: 250-300 words, justified alignment",
    "Keywords: 3-5 terms separated by semicolons",
    "File naming: LastName_FirstName_Abstract.pdf"
  ];

  return (
    <div className="bg-card rounded-lg border border-border p-8">
      <div className="flex items-center mb-6">
        <div className="p-3 bg-primary text-primary-foreground rounded-lg mr-4">
          <Icon name="FileText" size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">Submission Guidelines</h2>
          <p className="text-muted-foreground">Please follow these requirements for your abstract submission</p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
            <Icon name="CheckCircle" size={20} className="mr-2 text-success" />
            General Guidelines
          </h3>
          <ul className="space-y-3">
            {guidelines?.map((guideline, index) => (
              <li key={index} className="flex items-start">
                <Icon name="ArrowRight" size={16} className="mt-1 mr-3 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{guideline}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
            <Icon name="Settings" size={20} className="mr-2 text-accent" />
            Format Requirements
          </h3>
          <ul className="space-y-3">
            {formatRequirements?.map((requirement, index) => (
              <li key={index} className="flex items-start">
                <Icon name="ArrowRight" size={16} className="mt-1 mr-3 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{requirement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-8 p-6 bg-muted rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-semibold text-foreground mb-2">Download Resources</h4>
            <p className="text-sm text-muted-foreground">Get the official template and submission guidelines</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline" iconName="Download" iconPosition="left">
              Template
            </Button>
            <Button variant="outline" iconName="FileText" iconPosition="left">
              Guidelines PDF
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmissionGuidelines;