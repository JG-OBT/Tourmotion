import { Service, BlogPost } from './types';

export const SERVICES: Service[] = [
  {
    id: 'diagnostic',
    title: 'Diagnostic Appointments',
    price: '£50',
    description: 'If you suspect a fault anywhere within your motorhome, call us and we’ll arrange to come ASAP and see what work is required.',
    fullDescription: [
      'This call-out service covers the first 30 minutes of a diagnostic appointment (for issues like fridge faults or damaged road light cables) and then charges an hourly rate thereafter.',
      'Encourage customers to schedule a repair.'
    ]
  },
  {
    id: 'caravan-service',
    title: 'Full Caravan Service',
    price: '£250/£280',
    description: 'Our full service for single/double axle caravans ensures their safety and road-worthiness. Includes consumables (greases/sprays). Hub nuts not included.',
    fullDescription: [
      'Comprehensive inspection covers gas, water and electrical systems; interior/exterior components; chassis and running gear; fire safety equipment; WC functionality; and a damp report.',
      'Consumables are included; Alko One Shot or BPW hub nuts are extra.'
    ]
  },
  {
    id: 'habitation-check',
    title: 'Habitation Check',
    price: '£170',
    description: 'Ensure your motorhome, caravan or campervan is ready for your next big getaway with our meticulous examination of all major systems.',
    fullDescription: [
      'Ensure the motorhome operates at its optimum level and includes examination of gas, water and electrical systems, interior and exterior features, fire safety, WC functionality and a comprehensive damp report.'
    ]
  },
  {
    id: 'wifi-installation',
    title: 'WiFi Installation',
    price: 'from £450',
    description: 'Secure and reliable internet connectivity for motorhomes, caravans or campervans.',
    fullDescription: [
      'Prices start at £450 and a pre-installation survey is required.'
    ]
  },
  {
    id: 'appliance-repair',
    title: 'Appliance Repair',
    price: '£90 + parts',
    description: 'Repairs appliances failing on gas or mains power and addresses electrical complications in leisure vehicles.'
  },
  {
    id: 'gas-bottles',
    title: 'Refillable Gas Bottles',
    price: '£550',
    description: 'Installation of refillable gas systems for caravans or motorhomes on site at a competitive rate.'
  },
  {
    id: 'alde-fluid',
    title: 'ALDE Fluid Change',
    price: '£340',
    description: 'Supplies and replaces the five-year fluid in Alde heating systems to ensure optimal performance.'
  },
  {
    id: 'damp-reports',
    title: 'Damp Reports',
    price: '£90',
    description: 'Comprehensive damp inspection that checks for water ingress and provides a detailed report.'
  },
  {
    id: 'entertainment-repairs',
    title: 'Entertainment Repairs',
    price: '£50',
    description: 'Ensures audio/visual equipment like TVs and sound systems work properly.'
  },
  {
    id: 'hvac-repairs',
    title: 'HVAC Repairs',
    price: '£50',
    description: 'Addresses issues with heating, ventilation and air conditioning systems (Truma, Alde and Dometic).'
  },
  {
    id: 'off-grid',
    title: 'Off-Grid Upgrades',
    price: 'POA',
    description: 'Offers upgrades to power systems such as inverters, battery-to-battery chargers, solar panels and charge controllers.'
  },
  {
    id: 'damp-repairs',
    title: 'Damp Repairs',
    price: '£150',
    description: 'Provides repairs for damp issues, including resealing awning rails, replacing window seals, and roof lights.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'chilling-tale',
    title: 'A Chilling Tale',
    category: 'Repairs',
    author: 'James Davies',
    date: '2024-03-15',
    excerpt: 'How a simple habitation inspection led to a surprising discovery about a motorhome fridge.',
    summary: 'A habitation inspection on a relatively new motorhome discovered a faulty 12-volt element in the fridge.',
    image: '/images/blog-fridge-repair.jpg',
    content: [
      {
        heading: 'Initial Diagnosis',
        text: 'Leisure vehicle fridges operate differently from household units and need all modes (12V, 240V and gas) to be checked. We started by checking the 240V and gas modes before narrowing the fault down to the 12V side.'
      },
      {
        heading: 'Delving Deeper',
        text: 'We walked through checking the 20-amp fuse, verifying alternator charging voltage and dismantling the control box. We found burn marks on the PCB and no power output from the 12V heater pins, leading to a diagnosis of a faulty control board.'
      },
      {
        heading: 'The Fix',
        text: 'Describe fitting a new PCB board, monitoring voltages and amperage and then realising the customers had been trying to bring the fridge down to temperature on 12V instead of 240V or gas.'
      },
      {
        heading: 'Moral of the Story',
        text: '12V is only for maintaining temperature, not cooling from ambient. It’s important to understand appliance functions and maintain proper usage. Thorough inspection and good communication are key.'
      }
    ]
  },
  {
    id: 'winterising-alde',
    title: 'Winterising Your Alde Heating System',
    category: 'Maintenance',
    author: 'James Davies',
    date: '2024-11-20',
    excerpt: 'Don’t let the frost bite! Learn how to properly winterise your Alde system.',
    summary: 'Even though Alde heating systems are impressive, pipes can still freeze without proper care.',
    image: '/images/blog-winterising.jpg',
    content: [
      {
        heading: 'The Lived-In Myth',
        isList: true,
        text: 'Debunking common myths that lead to freeze damage:',
        list: [
          'Uneven heat distribution can leave some pipes cold',
          'Caravans lose heat quickly',
          'Power cuts or gas regulator freezes can still cause frost damage'
        ]
      },
      {
        heading: 'Essential Winterisation Steps',
        isList: true,
        text: 'Follow these steps to protect your vehicle:',
        list: [
          'Drain the fresh water system',
          'Check antifreeze levels',
          'Inspect pipes and connections for leaks',
          'Test the system before cold weather',
          'Consider professional servicing'
        ]
      },
      {
        heading: 'Consequences of Skipping Winterisation',
        text: 'Frost-damaged Alde boilers are classed as “Immediately Dangerous” under Gas Safety regulations and repairs can be costly and not covered by insurance.'
      }
    ]
  },
  {
    id: 'motorhome-blackout',
    title: 'Watt’s the Matter? Shocking Tales of a Motorhome Blackout!',
    category: 'Repairs',
    author: 'James Davies',
    date: '2024-07-10',
    excerpt: 'A mysterious blackout on a summer day leads to a technical investigation.',
    summary: 'Most electrics had stopped working, with only two 12V lights functioning.',
    image: '/images/blog-electrical-fault.jpg',
    content: [
      {
        heading: 'The Investigation',
        text: 'Detailed checking the 240V shoreline, the 12V battery and the master switch feed, all of which were working. It was like solving a mystery.'
      },
      {
        heading: 'The Breakthrough',
        text: 'The culprit was a faulty changeover relay in the BCA consumer unit’s internal PCB.'
      },
      {
        heading: 'The Solution',
        text: 'Replacing the board, testing the system and confirming all electrics worked again.'
      },
      {
        heading: 'Moral of the Story',
        text: 'Don’t despair when electrics go haywire; sometimes it’s just a rebellious BCA unit. Consult a professional!'
      }
    ]
  },
  {
    id: 'perfect-ride',
    title: 'Find Your Perfect Ride',
    category: 'Advice',
    author: 'James Davies',
    date: '2024-05-05',
    excerpt: 'Tips for choosing the leisure vehicle that matches your lifestyle.',
    summary: 'Swap mundane commutes for adventures by choosing the perfect leisure vehicle.',
    image: '/images/blog-choosing-rv.jpg',
    content: [
      {
        heading: 'Define Your Adventure',
        text: 'Solo, with family, or wild camping? Knowing your travel style is key.'
      },
      {
        heading: 'Size Matters',
        text: 'Consider the number of travellers, gear and ease of parking.'
      },
      {
        heading: 'Do Your Homework',
        text: 'Research manufacturers, read reviews and visiting dealerships. Ask questions!'
      },
      {
        heading: 'Take It for a Spin',
        text: 'Test drive and pay attention to handling and comfort. And don’t forget the tea bags!'
      }
    ]
  }
];

export const CERTIFICATIONS = [
  { 
    name: 'Propex', 
    url: 'https://propexheatsource.co.uk/',
    logo: '/images/logo-propex.png' // Easy to swap with a file in public/images/
  },
  { 
    name: 'Dometic', 
    url: 'https://www.dometic.com/',
    logo: '/images/logo-dometic.png'
  },
  { 
    name: 'Thetford', 
    url: 'https://www.thetford-europe.com/',
    logo: '/images/logo-thetford.png'
  },
  { 
    name: 'Truma', 
    url: 'https://www.truma.com/',
    logo: '/images/logo-truma.png'
  },
  { 
    name: 'Alde', 
    url: 'https://www.alde.co.uk/',
    logo: '/images/logo-alde.png'
  },
  { 
    name: 'Whale', 
    url: 'https://www.whalepumps.com/',
    logo: '/images/logo-whale.png'
  }
];
