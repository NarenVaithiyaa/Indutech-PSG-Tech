import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Button from '../../components/ui/Button';

const Sponsorship = () => {
  const sponsorshipOptions = [
    { item: "Conference Proceedings", cost: "Rs. 1,50,000" },
    { item: "Delegate Dockets", cost: "Rs. 1,50,000" },
    { item: "Delegate Buffet Lunch (per day)", cost: "Rs. 1,50,000" },
    { item: "Delegate Buffet Dinner (per day)", cost: "Rs. 1,25,000" },
    { item: "Delegate Badges", cost: "Rs. 20,000" },
    { item: "Delegate Refreshment with High Tea", cost: "Rs. 45,000" },
    { item: "Cultural Programme", cost: "Rs. 50,000" },
    { item: "CDs, Brochures, Product Samples in Conference Dockets", cost: "Rs. 50,000" }
  ];

  const souvenirAdvertisement = [
    { category: "Full Page Color Backside Cover (Outside)", foreign: "US$ 750", indian: "Rs. 25,000" },
    { category: "Full Page Color Backside Cover (Inside)", foreign: "US$ 500", indian: "Rs. 20,000" },
    { category: "Full Page Color Frontside Cover (Inside)", foreign: "US$ 750", indian: "Rs. 25,000" },
    { category: "Full Page Color (Inside)", foreign: "US$ 500", indian: "Rs. 10,000" },
    { category: "Full Page B/W (Inside)", foreign: "US$ 200", indian: "Rs. 5,000" }
  ];

  const paymentDetails = [
    { field: "Account Number", value: "1481267367" },
    { field: "Beneficiary Name", value: "PSG Centre for Non formal and Continuing Education" },
    { field: "Address", value: "Peelamedu, Coimbatore" },
    { field: "Bank Name", value: "Central Bank of India" },
    { field: "IFSC Code", value: "CBINO2809135" },
    { field: "SWIFT Code", value: "CBININBBOSB" }
  ];
  return (
    <>
      <Helmet>
        <title>Sponsorship - INDUTECH 2025 | 6th International Conference on Industrial Textiles</title>
        <meta 
          name="description" 
          content="Become a sponsor of INDUTECH 2025. Explore sponsorship opportunities and partnership packages for the 6th International Conference on Industrial Textiles - Products, Applications and Prospects." 
        />
        <meta name="keywords" content="INDUTECH 2025, sponsorship, partnership, corporate sponsor, conference sponsorship, industrial textiles" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16 sm:pt-18 md:pt-20 lg:pt-24">
          {/* Hero Section */}
          <section className="pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-16 bg-gradient-to-r from-cyan-700 via-cyan-800 to-cyan-900">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
                  Sponsorship Opportunities
                </h1>
                <p className="text-lg text-cyan-100 max-w-3xl mx-auto leading-relaxed text-center">
                  Partner with INDUTECH 2025 and connect with leading professionals in industrial textiles. 
                  Discover various sponsorship packages tailored to meet your marketing objectives.
                </p>
              </div>
            </div>
          </section>
          
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">

            {/* Important Note Section */}
            <section className="mb-12">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-foreground mb-4">Important Note</h2>
                <p className="text-foreground leading-relaxed text-justify">
                  SPONSORS are requested to register using the link provided only after completing the payment of the respective amount.
                </p>
                <p className="text-foreground leading-relaxed mt-3 text-justify">
                  After making the payment, please proceed to fill in the registration form by entering your personal details along with the payment transaction details for verification.
                </p>
              </div>
            </section>

            {/* Sponsorship Opportunities Section */}
            <section className="mb-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Sponsorship Opportunities</h2>
              </div>
              
              <div className="bg-card rounded-lg border border-border p-8 mb-8">
                <p className="text-foreground leading-relaxed mb-6 text-justify">
                  The international conference provides an excellent opportunity for companies to gain global visibility by showcasing their products and services to a highly focused audience. It also allows networking with participants from across the world. Sponsors will gain visibility through the conference souvenir, backdrops, documentation, and dockets.
                </p>
                <p className="text-foreground leading-relaxed text-justify">
                  Sponsors will also have the privilege of product presentation/display during the conference, helping students, researchers, and attendees to visualize state-of-the-art technologies.
                </p>
              </div>
            </section>

            {/* Sponsorship Options Table */}
            <section className="mb-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Sponsorship Options</h2>
              </div>
              
              <div className="bg-card rounded-lg border border-border p-8">
                <div className="overflow-x-auto">
                  <table className="w-full border-4 border-gray-800">
                    <thead>
                      <tr className="border-b-4 border-gray-800">
                        <th className="text-left py-4 px-6 font-bold text-white border-r-4 border-gray-800" style={{backgroundColor: '#60a5fa', color: 'white'}}>Item</th>
                        <th className="text-left py-4 px-6 font-bold text-white" style={{backgroundColor: '#60a5fa', color: 'white'}}>Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sponsorshipOptions.map((item, index) => (
                        <tr key={index} className="border-b-4 border-gray-800 last:border-b-4">
                          <td className="py-4 px-6 text-foreground font-medium border-r-4 border-gray-800">{item.item}</td>
                          <td className="py-4 px-6 text-black font-bold" style={{backgroundColor: '#fef08a', color: 'black'}}>{item.cost}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Souvenir Advertisement Table */}
            <section className="mb-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Souvenir Advertisement Opportunities</h2>
              </div>
              
              <div className="bg-card rounded-lg border border-border p-8">
                <div className="overflow-x-auto">
                  <table className="w-full border-4 border-gray-800">
                    <thead>
                      <tr className="border-b-4 border-gray-800">
                        <th className="text-left py-4 px-6 font-bold text-white border-r-4 border-gray-800" style={{backgroundColor: '#60a5fa', color: 'white'}}>Category</th>
                        <th className="text-left py-4 px-6 font-bold text-white border-r-4 border-gray-800" style={{backgroundColor: '#60a5fa', color: 'white'}}>Foreign Companies</th>
                        <th className="text-left py-4 px-6 font-bold text-white" style={{backgroundColor: '#60a5fa', color: 'white'}}>Indian Companies</th>
                      </tr>
                    </thead>
                    <tbody>
                      {souvenirAdvertisement.map((item, index) => (
                        <tr key={index} className="border-b-4 border-gray-800 last:border-b-4">
                          <td className="py-4 px-6 text-foreground font-medium border-r-4 border-gray-800">{item.category}</td>
                          <td className="py-4 px-6 text-black font-bold border-r-4 border-gray-800" style={{backgroundColor: '#fef08a', color: 'black'}}>{item.foreign}</td>
                          <td className="py-4 px-6 text-black font-bold" style={{backgroundColor: '#fef08a', color: 'black'}}>{item.indian}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Mode of Payment Table */}
            <section className="mb-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Mode of Payment</h2>
              </div>
              
              <div className="bg-card rounded-lg border border-border p-8">
                <div className="overflow-x-auto">
                  <table className="w-full border-4 border-gray-800">
                    <thead>
                      <tr className="border-b-4 border-gray-800">
                        <th className="text-left py-4 px-6 font-bold text-white border-r-4 border-gray-800" style={{backgroundColor: '#60a5fa', color: 'white'}}>Payment Details</th>
                        <th className="text-left py-4 px-6 font-bold text-white" style={{backgroundColor: '#60a5fa', color: 'white'}}>Information</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paymentDetails.map((item, index) => (
                        <tr key={index} className="border-b-4 border-gray-800 last:border-b-4">
                          <td className="py-4 px-6 text-foreground font-medium border-r-4 border-gray-800">{item.field}</td>
                          <td className="py-4 px-6 text-black font-bold" style={{backgroundColor: '#fef08a', color: 'black'}}>{item.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Sponsorship Registration Button */}
            <section className="text-center">
              <div className="bg-card rounded-lg border border-border p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-6">After completing payment, register here:</h3>
                <Button 
                  variant="default" 
                  size="lg" 
                  iconName="ExternalLink" 
                  iconPosition="right"
                  className="w-full sm:w-auto text-sm sm:text-base px-4 sm:px-8"
                  onClick={() => {
                    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdPoFdOf7fD9FqQtILznaVoCuJyAGxsWte6GzMiXpQizN7X3A/viewform?usp=sharing&ouid=116181167168677400281', '_blank');
                  }}
                >
                  <span className="block sm:hidden">Register Post Payment</span>
                  <span className="hidden sm:block">Sponsorship registration post payment</span>
                </Button>
                <p className="text-xs sm:text-sm text-muted-foreground mt-4">
                  Please ensure you have completed the payment before proceeding with sponsorship registration
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
                Organized by Departments of Textile Technology and Automobile Engineering, PSG College of Technology.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Sponsorship;