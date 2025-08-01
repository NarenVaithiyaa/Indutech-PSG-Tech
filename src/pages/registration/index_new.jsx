import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import RegistrationHeader from './components/RegistrationHeader';
import Button from '../../components/ui/Button';

const Registration = () => {
  const registrationFees = [
    { category: "Delegates from Industry", beforeSept19: "Rs. 8000", afterSept19: "Rs. 9500" },
    { category: "Delegates from Institutes", beforeSept19: "Rs. 5000", afterSept19: "Rs. 6500" },
    { category: "Student Delegates", beforeSept19: "Rs. 2000", afterSept19: "Rs. 2500" },
    { category: "Foreign Delegates", beforeSept19: "US$ 100", afterSept19: "US$ 150" }
  ];

  const paymentDetails = [
    { field: "Account Number", value: "1481267367" },
    { field: "Beneficiary Name", value: "PSG Centre for Non formal and Continuing Education" },
    { field: "Address", value: "Peelamedu, Coimbatore" },
    { field: "Bank Name", value: "Central Bank of India" },
    { field: "IFSC Code", value: "CBIN02809135" },
    { field: "SWIFT Code", value: "CBININBBOSB" }
  ];

  return (
    <>
      <Helmet>
        <title>Registration - INDUTECH 2025 | International Conference on Industrial Textiles</title>
        <meta 
          name="description" 
          content="Register for INDUTECH 2025. View registration fees, payment details, and complete your conference registration." 
        />
        <meta name="keywords" content="INDUTECH 2025, registration, conference fees, payment, industrial textiles conference" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <RegistrationHeader />
        
        <main className="pb-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
            
            {/* Important Note Section */}
            <section className="mb-12">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-foreground mb-4">Important Note:</h2>
                <p className="text-foreground leading-relaxed">
                  Participants are requested to register using the link provided only after completing the payment of the respective amount via the payment option given below.
                </p>
                <p className="text-foreground leading-relaxed mt-3">
                  After making the payment, please proceed to fill in the registration form by entering your personal details along with the payment transaction details for verification.
                </p>
              </div>
            </section>

            {/* Registration Fee Table */}
            <section className="mb-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Registration Fee</h2>
              </div>
              
              <div className="bg-card rounded-lg border border-border p-8">
                <div className="overflow-x-auto">
                  <table className="w-full border-4 border-gray-800">
                    <thead>
                      <tr className="border-b-4 border-gray-800">
                        <th className="text-left py-4 px-6 font-bold text-white border-r-4 border-gray-800" style={{backgroundColor: '#60a5fa', color: 'white'}}>Registration Category</th>
                        <th className="text-left py-4 px-6 font-bold text-white border-r-4 border-gray-800" style={{backgroundColor: '#60a5fa', color: 'white'}}>Paid before Sept. 19, 2025</th>
                        <th className="text-left py-4 px-6 font-bold text-white" style={{backgroundColor: '#60a5fa', color: 'white'}}>Paid after Sept. 19, 2025</th>
                      </tr>
                    </thead>
                    <tbody>
                      {registrationFees.map((item, index) => (
                        <tr key={index} className="border-b-4 border-gray-800 last:border-b-4">
                          <td className="py-4 px-6 text-foreground font-medium border-r-4 border-gray-800">{item.category}</td>
                          <td className="py-4 px-6 text-black font-bold border-r-4 border-gray-800" style={{backgroundColor: '#fef08a', color: 'black'}}>{item.beforeSept19}</td>
                          <td className="py-4 px-6 text-black font-bold" style={{backgroundColor: '#fef08a', color: 'black'}}>{item.afterSept19}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Registration Fee Covers Section */}
            <section className="mb-12">
              <div className="bg-card rounded-lg border border-border p-8">
                <p className="text-foreground leading-relaxed text-center">
                  Registration fee covers admission to all presentations, conference lunch and refreshments. Each participant will receive conference proceedings in CD ROM, a conference souvenir, docket, and certificate.
                </p>
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

            {/* Post Payment Registration Button */}
            <section className="text-center">
              <div className="bg-card rounded-lg border border-border p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">After completing payment, register here:</h3>
                <Button 
                  variant="default" 
                  size="lg" 
                  iconName="ExternalLink" 
                  iconPosition="right"
                  onClick={() => {
                    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdRQUIMjnYdvtQ6sXJlsPEobQ7Tc1evBdxkHOS9ScwNIfodhQ/viewform', '_blank');
                  }}
                >
                  Post payment registration
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Please ensure you have completed the payment before proceeding with registration
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
                Organized by Department of Textile Technology, IIT Delhi.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Registration;
