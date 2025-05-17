// File: server/utils/marketUtils.js

/**
 * Utility class for market-related operations
 * Used for analyzing market segments, trends, and opportunities
 */
class MarketUtils {
  /**
   * Get construction market segments in Kenya
   * @returns {Array} Array of market segments with data
   */
  static getConstructionMarketSegments() {
    return [
      {
        name: 'Residential Construction',
        growth: 7.5,
        opportunity: 'High',
        description: 'Housing projects for middle and upper-class Kenyans in urban areas.',
        keyPlayers: ['Centum Real Estate', 'Cytonn Real Estate', 'HF Group'],
        regions: ['Nairobi', 'Mombasa', 'Kisumu', 'Nakuru']
      },
      {
        name: 'Commercial Construction',
        growth: 5.8,
        opportunity: 'High',
        description: 'Office buildings, shopping malls, and business centers.',
        keyPlayers: ['Actis', 'Garden City', 'Two Rivers Development'],
        regions: ['Nairobi CBD', 'Upper Hill', 'Westlands', 'Mombasa Road']
      },
      {
        name: 'Industrial Construction',
        growth: 4.2,
        opportunity: 'Medium',
        description: 'Manufacturing plants, warehouses, and logistics centers.',
        keyPlayers: ['Tilisi Logistics Park', 'Africa Logistics Properties', 'Tatu City Industrial Park'],
        regions: ['Athi River', 'Ruiru', 'Naivasha', 'Mombasa SEZ']
      },
      {
        name: 'Infrastructure Development',
        growth: 9.5,
        opportunity: 'Very High',
        description: 'Roads, bridges, railways, and other public infrastructure projects.',
        keyPlayers: ['Kenya National Highways Authority', 'Kenya Urban Roads Authority', 'Kenya Railways'],
        regions: ['National', 'Major Urban Centers', 'Northern Corridor']
      },
      {
        name: 'Water & Sanitation',
        growth: 6.8,
        opportunity: 'High',
        description: 'Water supply systems, sewage treatment plants, and sanitation facilities.',
        keyPlayers: ['Nairobi Water and Sewerage Company', 'Water Resources Authority', 'County Governments'],
        regions: ['Urban Centers', 'Peri-urban Areas', 'Rural Communities']
      }
    ];
  }

  /**
   * Get construction industry trends in Kenya
   * @returns {Array} Array of industry trends
   */
  static getConstructionIndustryTrends() {
    return [
      {
        name: 'Green Building',
        impact: 'High',
        description: 'Increasing adoption of sustainable construction practices and LEED certification.',
        opportunities: [
          'Energy-efficient building designs',
          'Solar power integration',
          'Water conservation systems',
          'Sustainable materials sourcing'
        ]
      },
      {
        name: 'Affordable Housing',
        impact: 'Very High',
        description: 'Government push for affordable housing under the Big Four Agenda.',
        opportunities: [
          'Low-cost housing developments',
          'Public-private partnerships',
          'Innovative construction technologies',
          'Alternative building materials'
        ]
      },
      {
        name: 'Infrastructure Development',
        impact: 'High',
        description: 'Major infrastructure projects including roads, railways, and ports.',
        opportunities: [
          'Public-private partnerships',
          'International financing',
          'Specialized construction services',
          'Local material production'
        ]
      },
      {
        name: 'Digital Transformation',
        impact: 'Medium',
        description: 'Adoption of digital tools and technologies in construction processes.',
        opportunities: [
          'Building Information Modeling (BIM)',
          'Project management software',
          'Drone surveying and monitoring',
          'IoT for building management'
        ]
      },
      {
        name: 'Prefabrication & Modular Construction',
        impact: 'Medium',
        description: 'Growing interest in prefabricated and modular building components.',
        opportunities: [
          'Factory-built components',
          'Rapid assembly systems',
          'Quality control improvements',
          'Cost reduction strategies'
        ]
      }
    ];
  }

  /**
   * Get major construction projects in Kenya
   * @returns {Array} Array of major projects
   */
  static getMajorConstructionProjects() {
    return [
      {
        name: 'Konza Technopolis',
        value: 'USD 14.5 billion',
        location: 'Machakos County',
        status: 'Ongoing',
        description: 'A smart city development project aimed at creating a technology hub in Kenya.'
      },
      {
        name: 'LAPSSET Corridor Program',
        value: 'USD 24.5 billion',
        location: 'Northern Kenya',
        status: 'Ongoing',
        description: 'Integrating transportation infrastructure including a port, highway, railway, and pipeline.'
      },
      {
        name: 'Nairobi Expressway',
        value: 'USD 668 million',
        location: 'Nairobi',
        status: 'Completed',
        description: '27km elevated highway connecting Jomo Kenyatta International Airport to Westlands.'
      },
      {
        name: 'Mombasa-Nairobi Standard Gauge Railway (SGR)',
        value: 'USD 3.8 billion',
        location: 'Mombasa to Nairobi',
        status: 'Completed',
        description: '472km railway line connecting the port of Mombasa to Nairobi.'
      },
      {
        name: 'Affordable Housing Program',
        value: 'USD 13 billion',
        location: 'Nationwide',
        status: 'Ongoing',
        description: 'Government initiative to build 500,000 affordable housing units across Kenya.'
      }
    ];
  }

  /**
   * Get construction market forecast
   * @returns {Object} Market forecast data
   */
  static getMarketForecast() {
    return {
      overallGrowth: '7.2% (Annual, 2023-2027)',
      keyDrivers: [
        'Government infrastructure spending',
        'Housing deficit of 2 million units',
        'Regional integration projects',
        'Foreign direct investment in real estate',
        'Growing middle class'
      ],
      challenges: [
        'High cost of construction materials',
        'Fluctuating currency exchange rates',
        'Complex land acquisition processes',
        'Skills gap in specialized construction',
        'Financing constraints'
      ],
      opportunities: [
        'Public-private partnerships',
        'Green building certification',
        'Affordable housing development',
        'Infrastructure development',
        'Construction technology adoption'
      ],
      segmentGrowth: {
        residential: '7.5%',
        commercial: '5.8%',
        industrial: '4.2%',
        infrastructure: '9.5%',
        waterSanitation: '6.8%'
      }
    };
  }

  /**
   * Get key competitors analysis
   * @returns {Array} Array of key competitors with analysis
   */
  static getCompetitorAnalysis() {
    return [
      {
        name: 'H Young & Co. (East Africa) Ltd',
        strength: 'Very High',
        specialization: 'Civil engineering, building works, mechanical engineering',
        established: '1951',
        notableProjects: [
          'Thika Superhighway',
          'Kenya Petroleum Refineries',
          'Various Commercial Buildings'
        ],
        marketShare: '15%'
      },
      {
        name: 'China Road and Bridge Corporation (Kenya)',
        strength: 'Very High',
        specialization: 'Infrastructure development, highways, railways',
        established: '1984 (in Kenya)',
        notableProjects: [
          'Standard Gauge Railway',
          'Nairobi Expressway',
          'Mombasa-Mariakani Highway'
        ],
        marketShare: '18%'
      },
      {
        name: 'Seyani Brothers & Co. (K) Ltd',
        strength: 'High',
        specialization: 'Commercial and residential buildings',
        established: '1979',
        notableProjects: [
          'The Hub Karen',
          'Garden City Mall',
          'Kenya Re Towers'
        ],
        marketShare: '8%'
      },
      {
        name: 'Laxmanbhai Construction Ltd',
        strength: 'High',
        specialization: 'Commercial, industrial, residential construction',
        established: '1953',
        notableProjects: [
          'The Oval',
          'Two Rivers Mall',
          'DHL Express Headquarters'
        ],
        marketShare: '7%'
      },
      {
        name: 'Esteel Construction Ltd',
        strength: 'Medium',
        specialization: 'Steel structures, commercial buildings',
        established: '1995',
        notableProjects: [
          'Britam Tower (Structural steel)',
          'Jomo Kenyatta International Airport Terminal 1A',
          'Garden City Mall'
        ],
        marketShare: '5%'
      }
    ];
  }
}

module.exports = MarketUtils;