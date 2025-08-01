import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'How do I register for INDUTECH 2025?',
      answer: 'Registration can be completed online through our registration portal. Visit the Registration page, select your category (Student, Academic, Industry Professional, or International), fill in the required details, and proceed with payment. Early bird discounts are available until December 15, 2024.'
    },
    {
      id: 2,
      question: 'What is the abstract submission deadline?',
      answer: 'The final deadline for abstract submission is January 31, 2025. However, we encourage early submission as abstracts are reviewed on a rolling basis. Accepted abstracts will be notified by February 15, 2025, with final paper submission due by March 15, 2025.'
    },
    {
      id: 3,
      question: 'Is accommodation provided by the conference?',
      answer: 'Yes, we have partnered with several hotels and guest houses near the venue. Accommodation options range from budget-friendly guest houses to premium hotels. Booking details and rates are available on the Accommodation page. We recommend booking early as rooms fill up quickly.'
    },
    {
      id: 4,
      question: 'Are virtual participation options available?',
      answer: 'Yes, INDUTECH 2025 offers hybrid participation. Virtual attendees can join live-streamed keynote sessions, panel discussions, and selected technical presentations. Virtual registration is available at a reduced fee and includes access to conference proceedings and networking platform.'
    },
    {
      id: 5,
      question: 'What are the presentation formats available?',
      answer: 'We accept oral presentations (15-20 minutes), poster presentations, and exhibition displays. All accepted abstracts will be included in the conference proceedings. Presentation guidelines and templates are provided upon acceptance notification.'
    },
    {
      id: 6,
      question: 'Is there support for international participants?',
      answer: 'Yes, we provide comprehensive support for international participants including visa invitation letters, airport pickup coordination, and local transportation assistance. Contact our international support team at international@indutech2025.org for personalized assistance.'
    },
    {
      id: 7,
      question: 'What COVID-19 safety measures are in place?',
      answer: 'We follow all local health guidelines and regulations. Current measures include optional mask-wearing, hand sanitization stations, and adequate ventilation in all venues. Specific requirements will be communicated closer to the conference date based on current health advisories.'
    },
    {
      id: 8,
      question: 'How can I become a sponsor or exhibitor?',
      answer: 'We offer various sponsorship packages from Bronze to Platinum levels, each with different benefits and visibility options. Exhibition spaces are also available for companies wanting to showcase their products and services. Visit our Sponsorship page or contact partnerships@indutech2025.org for detailed information.'
    }
  ];

  const toggleFAQ = (faqId) => {
    setExpandedFAQ(expandedFAQ === faqId ? null : faqId);
  };

  return (
    <div className="mb-12">
      <div className="flex items-center space-x-3 mb-8">
        <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
          <Icon name="HelpCircle" size={20} color="white" />
        </div>
        <div>
          <h2 className="text-2xl font-heading font-bold text-foreground">Frequently Asked Questions</h2>
          <p className="text-sm text-muted-foreground">Quick answers to common inquiries</p>
        </div>
      </div>

      <div className="bg-card rounded-lg border border-border shadow-subtle overflow-hidden">
        {faqs?.map((faq) => (
          <div key={faq?.id} className="border-b border-border last:border-b-0">
            <button
              onClick={() => toggleFAQ(faq?.id)}
              className="w-full px-6 py-4 text-left hover:bg-muted transition-smooth focus:outline-none focus-ring"
              aria-expanded={expandedFAQ === faq?.id}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-foreground pr-4">
                  {faq?.question}
                </h3>
                <Icon
                  name={expandedFAQ === faq?.id ? "ChevronUp" : "ChevronDown"}
                  size={20}
                  className="text-muted-foreground flex-shrink-0 transition-transform duration-200"
                />
              </div>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                expandedFAQ === faq?.id 
                  ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {faq?.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-muted-foreground mb-3">
          Still have questions? We're here to help!
        </p>
        <a
          href="#contact-form"
          className="inline-flex items-center space-x-2 text-sm text-primary hover:text-primary/80 transition-smooth font-medium"
        >
          <Icon name="MessageCircle" size={16} />
          <span>Ask a specific question</span>
        </a>
      </div>
    </div>
  );
};

export default FAQSection;