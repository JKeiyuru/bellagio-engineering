/* eslint-disable no-unused-vars */
// File: client/src/pages/AboutUs.jsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import TimelineItem from '../components/TimelineItem';
import LeadershipCard from '../components/LeadershipCard';
import CertificationCard from '../components/CertificationCard';
import PageHeader from '../components/PageHeader';
import HoseaImg from '../assets/leaders/hosea-kinyua.jpeg';
import TonnyImg from '../assets/leaders/tonny-muriithi.jpeg';
import JosephImg from '../assets/leaders/joseph-keiyuru.jpeg';
import AliceImg from '../assets/leaders/alice-manene.jpg';
import NcaImg from '../assets/certifications/NCA.jpeg';
import Iso9001 from '../assets/certifications/iso-9001.jpeg';
import NemaImg from '../assets/certifications/nema.jpg';
import Iso45001 from '../assets/certifications/iso-45001.jpeg';



const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'About Us | Bellagio Engineering';
  }, []);

  const timelineData = [
    {
      year: '2005',
      title: 'Company Founded',
      description: 'Bellagio Engineering was established in Nairobi with a small team of 5 engineers and construction experts.'
    },
    {
      year: '2008',
      title: 'First Major Project',
      description: 'Completed our first major commercial project with Equity Bank headquarters renovation in Nairobi CBD.'
    },
    {
      year: '2012',
      title: 'Expansion to Civil Engineering',
      description: 'Expanded our services to include civil engineering projects, focusing on road construction and water infrastructure.'
    },
    {
      year: '2015',
      title: 'Government Certification',
      description: 'Received NCA-1 certification, allowing us to bid on major government infrastructure projects.'
    },
    {
      year: '2018',
      title: 'Regional Expansion',
      description: 'Opened regional offices in Mombasa and Kisumu to serve coastal and western Kenya regions.'
    },
    {
      year: '2021',
      title: 'International Recognition',
      description: 'Awarded "Best Construction Company in East Africa" by the East African Business Council.'
    },
    {
      year: '2023',
      title: 'Sustainability Initiative',
      description: 'Launched our green building initiative, committing to sustainable construction practices across all projects.'
    }
  ];

  const leadershipData = [
    {
      name: 'Hosea Kinyua',
      title: 'Chief Executive Officer',
      image: HoseaImg,
      bio: 'With over 25 years in construction and civil engineering, Hosea has led Bellagio Engineering since its founding. He holds a Masters in Civil Engineering from the University of Nairobi and is a registered Professional Engineer with the Engineers Board of Kenya.'
    },
    {
      name: 'Tonny Muriithi',
      title: 'Chief Operations Officer',
      image: TonnyImg,
      bio: "Tonny brings 18 years of operational excellence to our team. He specializes in optimizing project delivery and has overseen our largest government infrastructure projects. He holds an MBA from Strathmore University and a Bachelor's in Construction Management."
    },
    {
      name: 'Joseph Keiyuru',
      title: 'Technical Director',
      image: JosephImg,
      bio: 'Dr. Keiyuru leads our technical innovation initiatives. With a PhD in Structural Engineering from the University of Cape Town, he ensures Bellagio stays at the cutting edge of construction technology and methodologies.'
    },
    {
      name: 'Alice Manene',
      title: 'Finance Director',
      image: AliceImg,
      bio: 'A chartered accountant with 15 years in the construction industry, Alice manages our financial strategy and ensures the company maintains its strong financial foundation while pursuing growth opportunities.'
    }
  ];

  const certificationData = [
    {
      name: 'National Construction Authority (NCA-1)',
      logo: NcaImg,
      description: 'Highest level certification allowing us to undertake construction projects of unlimited value in Kenya.'
    },
    {
      name: 'ISO 9001:2015',
      logo: Iso9001,
      description: 'International standard for quality management systems, ensuring consistent, high-quality service delivery.'
    },
    {
      name: 'NEMA Compliance',
      logo: NemaImg,
      description: 'Certified by the National Environment Management Authority for environmentally responsible construction practices.'
    },
    {
      name: 'ISO 45001 ',
      logo: Iso45001,
      description: 'Certification for occupational health and safety management systems, demonstrating our commitment to worker safety.'
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="about-us-page">
      <PageHeader 
        title="About Bellagio Engineering" 
        subtitle="Building Kenya's Future Since 2005"
        backgroundImage="/assets/headers/about-header.jpg"
      />

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.div 
              className="bg-gray-50 p-8 rounded-lg shadow-lg"
              variants={fadeIn}
            >
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To deliver exceptional construction and engineering solutions that transform communities and 
                exceed client expectations through innovation, quality, and sustainability.
              </p>
            </motion.div>

            <motion.div 
              className="bg-gray-50 p-8 rounded-lg shadow-lg"
              variants={fadeIn}
            >
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be East Africa's premier construction and engineering firm, recognized for excellence, 
                integrity, and transformative impact on the built environment.
              </p>
            </motion.div>

            <motion.div 
              className="bg-gray-50 p-8 rounded-lg shadow-lg"
              variants={fadeIn}
            >
              <h3 className="text-2xl font-bold text-primary mb-4">Our Values</h3>
              <ul className="text-gray-700 space-y-2">
                <li><span className="font-semibold">Excellence:</span> Pursuing the highest standards in all we do</li>
                <li><span className="font-semibold">Integrity:</span> Maintaining ethical practices and transparency</li>
                <li><span className="font-semibold">Innovation:</span> Embracing new technologies and methodologies</li>
                <li><span className="font-semibold">Safety:</span> Prioritizing the wellbeing of our team and communities</li>
                <li><span className="font-semibold">Sustainability:</span> Committing to environmentally responsible practices</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company History Timeline */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
            
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {timelineData.map((item, index) => (
                  <TimelineItem 
                    key={index}
                    year={item.year}
                    title={item.title}
                    description={item.description}
                    isLeft={index % 2 === 0}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">Our Leadership</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadershipData.map((leader, index) => (
                <LeadershipCard 
                  key={index}
                  name={leader.name}
                  title={leader.title}
                  image={leader.image}
                  bio={leader.bio}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications & Standards */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">Our Certifications</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {certificationData.map((cert, index) => (
                <CertificationCard 
                  key={index}
                  name={cert.name}
                  logo={cert.logo}
                  description={cert.description}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;