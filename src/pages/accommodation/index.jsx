import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';

const Accommodation = () => {
  const hotelData = [
    {
      name: "Hotel Residency",
      website: "theresidency.com",
      websiteUrl: "https://theresidency.com",
      additionalInfo: "",
      standardComfort: "6000 | 8000",
      studio: "-",
      deluxe: "6700 - 10000",
      clubExecutive: "8500 - 10000",
      suite: "10500 - 12500"
    },
    {
      name: "Hotel Jenney's Club",
      website: "jenneysclub.com",
      websiteUrl: "https://jenneysclub.com",
      additionalInfo: "",
      standardComfort: "8100 | 8910",
      studio: "-",
      deluxe: "8748 - 9963",
      clubExecutive: "-",
      suite: "16200 - 19125"
    },
    {
      name: "Le Meridien",
      website: "marriott.com",
      websiteUrl: "https://marriott.com",
      additionalInfo: "",
      standardComfort: "Deluxe Suite",
      studio: "-",
      deluxe: "18500 - 19500",
      clubExecutive: "18500 - 19500",
      suite: "25000 - 27000",
      isLeMeridien: true
    },
    {
      name: "Taj Vivanta",
      website: "",
      websiteUrl: "",
      additionalInfo: "Superior / Deluxe / Premium",
      standardComfort: "9500 - 10000",
      studio: "-",
      deluxe: "11000 - 15000",
      clubExecutive: "12000 - 14000",
      suite: "-"
    },
    {
      name: "Gokulam Park",
      website: "",
      websiteUrl: "",
      additionalInfo: "",
      standardComfort: "6000 - 7000",
      studio: "-",
      deluxe: "8000",
      clubExecutive: "10000",
      suite: "-"
    },
    {
      name: "Radisson Blu",
      website: "",
      websiteUrl: "",
      additionalInfo: "",
      standardComfort: "6000 - 7000",
      studio: "-",
      deluxe: "10000",
      clubExecutive: "12000",
      suite: "29000"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Accommodation - INDUTECH 2025 | International Conference on Industrial Textiles</title>
        <meta 
          name="description" 
          content="Find accommodation options for INDUTECH 2025. Discover hotels, guest houses, and lodging near the conference venue in Coimbatore." 
        />
        <meta name="keywords" content="INDUTECH 2025, accommodation, hotels, guest houses, conference lodging, Coimbatore hotels" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16 sm:pt-18 md:pt-20 lg:pt-24">
          {/* Hero Section */}
          <section className="pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-16 bg-gradient-to-r from-cyan-700 via-cyan-800 to-cyan-900">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
                  Accommodation
                </h1>
                <p className="text-lg text-cyan-100 max-w-3xl mx-auto leading-relaxed text-center">
                  Find comfortable and convenient accommodation options for INDUTECH 2025. 
                  We have partnered with various hotels and guest houses to ensure a pleasant stay.
                </p>
              </div>
            </div>
          </section>
          
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">

            {/* Accommodation Details Section */}
            <section className="mb-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Accommodation Details</h2>
              </div>
              
              <div className="bg-card rounded-lg border border-border p-8 mb-8">
                <p className="text-foreground leading-relaxed mb-6">
                  Accommodation can be arranged in hotels like The Residency, Jenney's Club, Le Meridien, and Taj Vivanta, 
                  which are situated in the heart of Coimbatore and are within 5 km from the Conference venue.
                </p>
                <p className="text-foreground leading-relaxed mb-6">
                  These rated hotels provide amenities like high-speed internet, air-conditioned bedrooms, meeting spaces, 
                  and professional staff. Accommodation can also be arranged in the College Guest House based on availability.
                </p>
                <p className="text-foreground leading-relaxed">
                  Room and tariff details are provided below:
                </p>
              </div>
            </section>

            {/* Hotel Pricing Table */}
            <section className="mb-12">
              <div className="bg-card rounded-lg border border-border p-8">
                <div className="overflow-x-auto">
                  <table className="w-full border-4 border-gray-800">
                    <thead>
                      <tr className="border-b-4 border-gray-800">
                        <th className="text-center py-4 px-6 font-bold text-white border-r-4 border-gray-800" style={{backgroundColor: '#60a5fa', color: 'white'}}>
                          Name of Hotel
                        </th>
                        <th className="text-center py-4 px-6 font-bold text-white border-r-4 border-gray-800" style={{backgroundColor: '#60a5fa', color: 'white'}}>
                          Standard / Comfort
                        </th>
                        <th className="text-center py-4 px-6 font-bold text-white border-r-4 border-gray-800" style={{backgroundColor: '#60a5fa', color: 'white'}}>
                          Studio
                        </th>
                        <th className="text-center py-4 px-6 font-bold text-white border-r-4 border-gray-800" style={{backgroundColor: '#60a5fa', color: 'white'}}>
                          Deluxe
                        </th>
                        <th className="text-center py-4 px-6 font-bold text-white border-r-4 border-gray-800" style={{backgroundColor: '#60a5fa', color: 'white'}}>
                          Club / Executive Room
                        </th>
                        <th className="text-center py-4 px-6 font-bold text-white" style={{backgroundColor: '#60a5fa', color: 'white'}}>
                          Suite
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {hotelData.map((hotel, index) => (
                        <tr key={index} className="border-b-4 border-gray-800 last:border-b-4 hover:bg-gray-50">
                          <td className="py-4 px-6 border-r-4 border-gray-800 text-center">
                            <div className="font-bold text-foreground">{hotel.name}</div>
                            {hotel.website && (
                              <div className="text-sm mt-1">
                                {hotel.websiteUrl ? (
                                  <a 
                                    href={hotel.websiteUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 underline"
                                  >
                                    {hotel.website}
                                  </a>
                                ) : (
                                  <span className="text-muted-foreground">{hotel.website}</span>
                                )}
                              </div>
                            )}
                            {hotel.additionalInfo && (
                              <div className="text-sm text-muted-foreground mt-1">{hotel.additionalInfo}</div>
                            )}
                          </td>
                          <td className="py-4 px-6 text-black font-bold border-r-4 border-gray-800 text-center" style={{backgroundColor: '#fef08a', color: 'black'}}>
                            {hotel.standardComfort}
                          </td>
                          <td className="py-4 px-6 text-black font-bold border-r-4 border-gray-800 text-center" style={{backgroundColor: '#fef08a', color: 'black'}}>
                            {hotel.studio}
                          </td>
                          {hotel.isLeMeridien ? (
                            <td 
                              className="py-4 px-6 text-black font-bold border-r-4 border-gray-800 text-center" 
                              style={{backgroundColor: '#fef08a', color: 'black'}}
                              colSpan="2"
                            >
                              {hotel.deluxe}
                            </td>
                          ) : (
                            <>
                              <td className="py-4 px-6 text-black font-bold border-r-4 border-gray-800 text-center" style={{backgroundColor: '#fef08a', color: 'black'}}>
                                {hotel.deluxe}
                              </td>
                              <td className="py-4 px-6 text-black font-bold border-r-4 border-gray-800 text-center" style={{backgroundColor: '#fef08a', color: 'black'}}>
                                {hotel.clubExecutive}
                              </td>
                            </>
                          )}
                          <td className="py-4 px-6 text-black font-bold text-center" style={{backgroundColor: '#fef08a', color: 'black'}}>
                            {hotel.suite}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Additional Information */}
            <section className="mb-12">
              <div className="bg-card rounded-lg border border-border p-8">
                <p className="text-foreground leading-relaxed text-center">
                  All rates are in Indian Rupees (₹) per night and are subject to availability and change. 
                  For booking assistance and more information, please contact the conference organizing committee.
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section className="text-center">
              <div className="bg-card rounded-lg border border-border p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">Need Assistance with Accommodation?</h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact-us"
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-smooth focus-ring"
                  >
                    Contact Us for Booking
                  </a>
                  <a
                    href="/registration"
                    className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/90 transition-smooth focus-ring"
                  >
                    Register for Conference
                  </a>
                </div>
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

export default Accommodation;