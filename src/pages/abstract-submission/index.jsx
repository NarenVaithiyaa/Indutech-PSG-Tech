import React from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const AbstractSubmission = () => {
  const callForPapersTopics = [
    "Textiles in Belts Construction: Conveyor Belts & Drive Belts",
    "Industrial Filtration Textiles",
    "Textiles for Acoustics",
    "3-D Textile Structures",
    "Home Textiles",
    "Textiles for Industrial Abrasives",
    "Ropes and Cordages",
    "Textile Composites",
    "Textiles for Battery Separators",
    "Interlinings and their usage in Leather and Sports Applications",
    "Automobile Textiles, Thermal Insulation Materials & Interior Textiles",
    "Scrubs, Industrial Wipes and Brushes",
    "Coated and Laminated Fabrics",
    "Processing and Finishing of Industrial Textiles",
    "Textiles for Decatising Cloth and Bolting Cloth",
    "Textiles for Awnings",
    "Smart Textiles"
  ];

  const importantDates = [
    { event: "Abstract submission", date: "30-09-2025" },
    { event: "Notification of the Acceptance of Abstract", date: "01-10-2025" },
    { event: "Submission of Full Paper & Registration Fee", date: "10-10-2025" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16 sm:pt-18 md:pt-20 lg:pt-24">
        {/* Hero Section */}
        <section className="pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-16 bg-gradient-to-r from-cyan-700 via-cyan-800 to-cyan-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Abstract Submission
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed text-center">
              Submit your research abstracts for INDUTECH 2025 and contribute to advancing 
              industrial textile technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Action Buttons Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-12 justify-center items-center">
              <div className="flex flex-col items-center gap-3">
                <p className="text-lg text-foreground font-medium">Click here to submit your abstract:</p>
                <Button 
                  variant="default" 
                  size="lg" 
                  iconName="ExternalLink" 
                  iconPosition="right"
                  onClick={() => {
                    window.open('https://docs.google.com/forms/d/e/1FAIpQLSebWB06HE-_3A1U9rGE2-1j7jaFn1i9Xl98TETDyrZlM2rZHw/viewform?usp=header', '_blank');
                  }}
                >
                  Submit here
                </Button>
              </div>
              
              <div className="flex flex-col items-center gap-3">
                <p className="text-lg text-foreground font-medium">Click here to download abstract template:</p>
                <Button 
                  variant="default" 
                  size="lg" 
                  iconName="Download" 
                  iconPosition="right"
                  onClick={() => {
                    // TODO: Add your abstract template docx file to public/assets/docx/ folder
                    // and update the filename below (e.g., 'abstract-template.docx')
                    const link = document.createElement('a');
                    link.href = '/assets/docx/Abstract_Template.docx'; // Update filename as needed
                    link.download = 'Abstract_Template.docx'; // Update filename as needed
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  Download abstract
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call for Papers Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Call for Papers</h2>
          </div>

          <div className="bg-card rounded-lg border border-border p-8 mb-12">
            <ul className="space-y-3">
              {callForPapersTopics.map((topic, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-foreground">{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Call for Delegates Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Call for Delegates</h2>
          </div>
          
          <div className="bg-card rounded-lg border border-border p-8">
            <p className="text-foreground leading-relaxed">
              The deliberations and proceedings will be very valuable for the global textile audience 
              and multinational companies. The conference will provide enormous opportunities for 
              interactions which can spearhead new ventures for the global industry and academia. 
              The conference is keen on attracting a large number of delegates spanning the entire 
              value-chain of the textile industry to enable excellent knowledge transfer on a single platform.
            </p>
          </div>
        </div>
      </section>

      {/* Woodhead Publication Collaboration Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Woodhead Publication Collaboration</h2>
          </div>
          
          <div className="bg-card rounded-lg border border-border p-8">
            <p className="text-foreground leading-relaxed">
              Publication of Conference Proceedings has been confirmed by Woodhead Publishers. 
              Selected papers after screening and review would be published. Hence, the authors 
              are requested to submit original quality research work so as it may get published 
              in the publication.
            </p>
          </div>
        </div>
      </section>

      {/* Important Dates Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Important Dates</h2>
          </div>
          
          <div className="bg-card rounded-lg border border-border p-8 max-w-3xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full border-4 border-gray-800">
                <thead>
                  <tr className="border-b-4 border-gray-800">
                    <th className="text-center py-4 px-14 font-bold text-white border-r-4 border-gray-800" style={{backgroundColor: '#60a5fa', color: 'white', minWidth: '220px'}}>Event</th>
                    <th className="text-center py-4 px-16 font-bold text-white whitespace-nowrap" style={{backgroundColor: '#60a5fa', color: 'white', minWidth: '220px'}}>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {importantDates.map((item, index) => (
                    <tr key={index} className="border-b-4 border-gray-800 last:border-b-4">
                      <td className="py-4 px-14 text-foreground font-medium border-r-4 border-gray-800 whitespace-nowrap" style={{minWidth: '220px'}}>{item.event}</td>
                      <td className="py-4 px-16 text-black font-bold whitespace-nowrap" style={{backgroundColor: '#fef08a', color: 'black', minWidth: '220px'}}>{item.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      </main>
    </div>
  );
};

export default AbstractSubmission;