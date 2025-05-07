/* eslint-disable no-unused-vars */
// File: client/src/pages/Markets.jsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import MarketCard from '../components/MarketCard';
import TestimonialCarousel from '../components/TestimonialCarousel';
import BankingImg from '../assets/markets/banks.jpg';
import RetailImg from '../assets/markets/retail.jpg';
import GovernmentImg from '../assets/markets/government.jpg';
import ResidentialImg from '../assets/markets/residential.jpg';
import IndustrialImg from '../assets/markets/industrial.jpg';
import EducationImg from '../assets/markets/education.jpg';
import client1 from '../assets/clients/equity-bank.png';
import client2 from '../assets/clients/garden-city.jpeg';
import client3 from '../assets/clients/kcb-bank.png';
import client4 from '../assets/clients/kenha.jpeg';
import client5 from '../assets/clients/nairobi-county.jpeg';
import client6 from '../assets/clients/two-rivers.png';
import placeholder from '../assets/clients/placeholder.jpeg';

const clientLogos = [client1, client2, client3, client4, client5, client6];
const clientNames = [
  'Equity Bank',
  'Garden City Mall',
  'KCB Group',
  'KENHA',
  'Nairobi County',
  'Two Rivers Mall',
];



const Markets = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Markets | Bellagio Engineering';
  }, []);

  const marketsData = [
    {
      id: 'banking',
      title: 'Banking & Financial',
      icon: 'landmark',
      description: "We've partnered with Kenya's leading banking institutions to deliver modern, secure, and efficient banking facilities. Our projects range from flagship headquarters to branch renovations and specialized installations.",
      clients: ['Equity Bank', 'KCB Group', 'Cooperative Bank', 'Stanbic Bank'],
      image: BankingImg,
      projects: [
        'Equity Centre Headquarters, Nairobi',
        'KCB Moi Avenue Branch Renovation',
        'Cooperative Bank Data Center, Karen'
      ]
    },
    {
      id: 'retail',
      title: 'Retail & Commercial',
      icon: 'shopping-cart',
      description: 'Our retail construction portfolio includes shopping malls, supermarkets, and specialty retail outlets across Kenya. We understand the unique requirements of commercial spaces that need to attract and serve customers while maximizing operational efficiency.',
      clients: ['Two Rivers Mall', 'Garden City Mall', 'Naivas Supermarkets', 'Carrefour Kenya'],
      image: RetailImg,
      projects: [
        'Two Rivers Mall Construction, Nairobi',
        'Naivas Supermarket Westlands Branch',
        'Carrefour Galleria Outlet, Karen'
      ]
    },
    {
      id: 'government',
      title: 'Government & Public Sector',
      icon: 'university',
      description: "We're proud to contribute to Kenya's public infrastructure through partnerships with government entities at national and county levels. Our government projects meet rigorous standards and serve the broader public interest.",
      clients: ['Kenya National Highways Authority', 'Ministry of Health', 'County Government of Mombasa', 'Kenya Airports Authority'],
      image: GovernmentImg,
      projects: [
        'Mombasa County Office Complex',
        'KENHA Regional Headquarters, Kisumu',
        'Ministry of Health Training Facility, Nairobi'
      ]
    },
    {
      id: 'residential',
      title: 'Residential & Housing',
      icon: 'home',
      description: 'From affordable housing developments to luxury residential estates, we create living spaces that combine quality, comfort, and sustainability. Our residential projects prioritize community design and modern amenities.',
      clients: ['Housing Finance Company', 'Centum Real Estate', 'Cytonn Investments', 'Acorn Housing'],
      image: ResidentialImg,
      projects: [
        'Riverside Park Apartments, Lavington',
        'Two Rivers Luxury Villas, Gigiri',
        'Acorn Student Housing, Nairobi'
      ]
    },
    {
      id: 'industrial',
      title: 'Industrial & Manufacturing',
      icon: 'industry',
      description: 'Our industrial construction expertise addresses the specialized needs of manufacturing, processing, and logistics facilities. We deliver structures that optimize workflows while maintaining safety and environmental compliance.',
      clients: ['Bidco Africa', 'Kenya Breweries', 'Bamburi Cement', 'Del Monte Kenya'],
      image: IndustrialImg,
      projects: [
        'Bidco Industrial Park, Thika',
        'Kenya Breweries Expansion, Ruaraka',
        'Bamburi Cement Manufacturing Facility, Mombasa'
      ]
    },
    {
      id: 'education',
      title: 'Education & Research',
      icon: 'graduation-cap',
      description: 'We build educational environments that inspire learning and research across primary, secondary, and tertiary levels. Our educational projects incorporate modern pedagogical approaches and technology integration.',
      clients: ['University of Nairobi', 'Strathmore University', 'Kenya Education Network', 'Brookhouse Schools'],
      image:EducationImg,
      projects: [
        'University of Nairobi Science Complex',
        'Strathmore Business School',
        'Brookhouse School Karen Campus'
      ]
    }
  ];

  const testimonials = [
    {
      quote: "Bellagio Engineering delivered our headquarters renovation project ahead of schedule and with exceptional quality. Their team's professionalism and attention to detail made them a pleasure to work with.",
      author: "John Mwangi",
      title: "Facilities Director",
      company: "Equity Bank"
    },
    {
      quote: "The mall construction project was complex, but Bellagio's expertise guided us through every phase. Their solutions to unexpected challenges saved us both time and money.",
      author: "Sarah Ochieng",
      title: "Development Manager",
      company: "Two Rivers Mall"
    },
    {
      quote: "As a government entity, we require contractors who understand regulatory compliance and public accountability. Bellagio Engineering exceeded our expectations on both counts.",
      author: "David Kimathi",
      title: "Chief Procurement Officer",
      company: "Kenya National Highways Authority"
    },
    {
      quote: "Our manufacturing facility required specialized construction knowledge. The Bellagio team brought both technical expertise and innovative thinking to deliver a state-of-the-art facility.",
      author: "James Wekesa",
      title: "Operations Director",
      company: "Bidco Africa"
    }
  ];

  return (
    <div className="markets-page">
      <PageHeader 
        title="Markets We Serve" 
        subtitle="Specialized Construction and Engineering Solutions Across Diverse Sectors"
        backgroundImage="/assets/headers/markets-header.jpg"
      />
      
      {/* Markets Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Expertise Across Industries</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We've developed specialized knowledge and capabilities to serve the unique requirements of diverse market sectors across Kenya.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {marketsData.map((market) => (
                <MarketCard 
                  key={market.id}
                  market={market}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Client Testimonials */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're proud to have earned the trust of leading organizations across Kenya through our commitment to excellence.
              </p>
            </div>
            
            <TestimonialCarousel testimonials={testimonials} />
          </motion.div>
        </div>
      </section>
      
      {/* Trusted Partners */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Trusted By Kenya's Leading Organizations</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We've built lasting relationships with prestigious clients who rely on our expertise for their construction needs.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
      {clientLogos.map((logo, index) => (
        <div key={index} className="h-20 flex items-center justify-center">
          <img
            src={logo}
            alt={clientNames[index]} // ✅ this now works
            className="max-h-16 max-w-full opacity-70 hover:opacity-100 transition-opacity duration-300"
            onError={(e) => {
              e.currentTarget.src = placeholder;
            }}
          />
        </div>
      ))}
    </div>
          </motion.div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-primary text-blue">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Let's Discuss Your Next Project</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Whether you're in banking, retail, government, or any other sector, our team has the expertise to deliver construction excellence tailored to your industry.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Schedule a Consultation
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Markets;