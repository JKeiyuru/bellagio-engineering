/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import BuildingConstruction from '../assets/divsions/building-construction.jpg';
import CivilEngineering from '../assets/divsions/civil-engineering.jpg';
import PlumbingServices from '../assets/divsions/plumbing-services.jpg';
import WaterSanitation from '../assets/divsions/water-sanitation.jpeg'

const Divisions = () => {
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash && ['building', 'civil', 'plumbing', 'water'].includes(hash)) {
      setActiveTab(hash);
    }
    window.scrollTo(0, 0);
    document.title = 'Operating Divisions | Bellagio Engineering';
  }, []);

  const [activeTab, setActiveTab] = useState('building');
  const divisions = [
    {
      id: 'building',
      name: 'Building Construction',
      icon: 'building',
      description:
        'Our flagship division specializes in commercial, residential, and institutional construction projects across Kenya. With a focus on quality, safety, and timely delivery, we construct buildings that stand the test of time.',
      services: [
        'Commercial Buildings and Office Complexes',
        'Residential Developments and Housing Estates',
        'Educational Institutions and Healthcare Facilities',
        'Industrial Buildings and Warehouses',
        'Retail Centers and Shopping Malls',
        'Hotel and Hospitality Construction',
      ],
      projects: [
        {
          name: 'Westlands Business Park',
          location: 'Nairobi',
          description: 'A modern 15-story office complex with LEED certification',
        },
        {
          name: 'Riverside Gardens Estate',
          location: 'Karen, Nairobi',
          description: 'Luxury residential development of 45 townhouses',
        },
        {
          name: 'Mombasa Shopping Plaza',
          location: 'Mombasa',
          description: '35,000 sq. meter retail development with underground parking',
        },
      ],
      image: BuildingConstruction,
    },
    {
      id: 'civil',
      name: 'Civil Engineering',
      icon: 'bridge',
      description:
        "Our Civil Engineering division delivers infrastructure that connects communities and drives economic growth. From roads and bridges to dams and irrigation systems, we build the backbone of Kenya's development.",
      services: [
        'Road Construction and Rehabilitation',
        'Bridge Construction and Maintenance',
        'Earthworks and Site Preparation',
        'Dams and Water Retention Structures',
        'Drainage Systems and Flood Control',
        'Infrastructure Development for Real Estate Projects',
      ],
      projects: [
        {
          name: 'Thika Highway Extension',
          location: 'Kiambu County',
          description: '12km highway extension with 2 interchanges',
        },
        {
          name: 'Kisumu Port Access Road',
          location: 'Kisumu',
          description: 'Access infrastructure for Lake Victoria port facilities',
        },
        {
          name: 'Machakos Dam Project',
          location: 'Machakos',
          description: 'Medium-sized dam providing water to local communities',
        },
      ],
      image: CivilEngineering,
    },
    {
      id: 'plumbing',
      name: 'Plumbing Services',
      icon: 'pipe',
      description:
        'Our specialized Plumbing division ensures reliable, efficient water and waste systems for all types of buildings. Using the latest technologies and materials, we create solutions that conserve water while providing optimal performance.',
      services: [
        'Commercial and Residential Plumbing Systems',
        'Industrial Plumbing and Process Piping',
        'Fire Protection Systems',
        'Gas Fitting and Installation',
        'Solar Water Heating Systems',
        'Rainwater Harvesting and Greywater Systems',
      ],
      projects: [
        {
          name: 'Kenyatta Hospital Plumbing Overhaul',
          location: 'Nairobi',
          description: 'Complete modernization of water systems for medical facility',
        },
        {
          name: 'Garden City Mall Water Systems',
          location: 'Nairobi',
          description: 'Modern plumbing solutions for major retail development',
        },
        {
          name: 'Standard Group Tower Fire Protection',
          location: 'Nairobi CBD',
          description: 'Advanced fire suppression system installation',
        },
      ],
      image: PlumbingServices,
    },
    {
      id: 'water',
      name: 'Water & Sanitation',
      icon: 'droplet',
      description:
        'Dedicated to improving access to clean water and sanitation across Kenya, this division works on municipal systems, community projects, and industrial water treatment. We believe in creating sustainable solutions that protect both public health and the environment.',
      services: [
        'Municipal Water Supply Networks',
        'Sewage Treatment Plants and Networks',
        'Water Treatment Facilities',
        'Borehole Drilling and Equipping',
        'Community Water Projects',
        'Industrial Wastewater Management',
      ],
      projects: [
        {
          name: 'Nakuru Municipal Water Project',
          location: 'Nakuru',
          description: 'Urban water distribution network upgrading and expansion',
        },
        {
          name: 'Meru Community Boreholes',
          location: 'Meru County',
          description: 'Installation of 15 community water points serving 12,000 people',
        },
        {
          name: 'Athi River Treatment Plant',
          location: 'Mavoko',
          description: 'Industrial wastewater treatment facility for manufacturing zone',
        },
      ],
      image: WaterSanitation,
    },
  ];

  const activeDivision = divisions.find((d) => d.id === activeTab);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Operating Divisions"
        subtitle="What We Specialize In"
        bgImage="/assets/images/projects-header.jpg"
      />

      <div className="container mx-auto px-4 py-8">
        {/* Division Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-3">
          {divisions.map((division) => (
            <button
              key={division.id}
              onClick={() => {
                setActiveTab(division.id);
                window.location.hash = division.id;
              }}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === division.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {division.name}
            </button>
          ))}
        </div>

        {/* Active Division Content */}
        {activeDivision && (
          <motion.div
            key={activeDivision.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-10 items-start"
          >
            {/* Text Content */}
            <div>
              <h2 className="text-2xl font-bold mb-4">{activeDivision.name}</h2>
              <p className="mb-5 text-gray-700 leading-relaxed">{activeDivision.description}</p>

              <h3 className="text-lg font-semibold mb-2">Services:</h3>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                {activeDivision.services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>

              <h3 className="text-lg font-semibold mb-2">Featured Projects:</h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                {activeDivision.projects.map((project, index) => (
                  <li key={index}>
                    <strong>{project.name}</strong> – {project.location}: {project.description}
                  </li>
                ))}
              </ul>

              <Link
                to="/projects"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition-colors duration-300"
              >
                View All {activeDivision.name} Projects
              </Link>
            </div>

            {/* Image */}
            <div>
              <img
                src={activeDivision.image}
                alt={activeDivision.name}
                className="rounded-xl shadow-md w-full h-auto max-h-[450px] object-cover"
              />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Divisions;
