import { 
  ProblemItem, 
  SolutionItem, 
  OfferingItem, 
  StatItem, 
  GTMStep, 
  RoadmapMilestone, 
  TeamMember 
} from './types';

export const companyOverview = {
  name: "RNSSY Private Limited",
  tagline: "Building Sustainable Infrastructure for the Future",
  established: 2026,
  headquarters: "Davanagere, Karnataka, India",
  fullAddress: "Survey No 385/9, CMC Limit, Avaragere, Davanagere, 577002, Karnataka (IN)",
  phone: "+91 9449552110",
  email: "nyrcontactor@gmail.com",
  credentials: ["CPWD Compliant", "KPWD Approved", "Railway Tender Specialists", "ISO Quality Standards"]
};

export const problemStatements: ProblemItem[] = [
  {
    id: "prob1",
    title: "Lack of Reliable Contractors",
    description: "Many civil infrastructure projects face catastrophic delays and severe cost overruns due to unreliable contractors who fail to meet strict deadlines or deliver lasting quality."
  },
  {
    id: "prob2",
    title: "Limited Bidding Expertise",
    description: "Securing crucial public contracts is highly restrictive due to a widespread shortage of experienced contractors who understand the complex regulatory compliances of CPWD, KPWD, and railway tenders."
  },
  {
    id: "prob3",
    title: "Substandard Construction Quality",
    description: "A staggering percentage of public works suffers from cutting corners and poor structural design, resulting in high maintenance overheads and immediate public safety hazards."
  },
  {
    id: "prob4",
    title: "Project Management Inefficiencies",
    description: "Outdated monitoring methodologies, poor site communication, and uncoordinated supply logistics trigger resources mismanagement and slow mobilization."
  },
  {
    id: "prob5",
    title: "Infrastructure Sustainability Gaps",
    description: "Standard industrial builders regularly ignore environmental standards and eco-responsible materials, creating carbon-intensive infrastructure with severe ecological impacts."
  }
];

export const solutionStatements: SolutionItem[] = [
  {
    id: "sol1",
    title: "Rigorous Tender & Compliance Expertise",
    description: "We bring seasoned compliance knowledge in handling complex CPWD, KPWD, and railway project criteria, unlocking high-grade public bidding and seamless government handovers."
  },
  {
    id: "sol2",
    title: "Uncompromising Structural Standards",
    description: "Our engineered build quality exceeds structural regulations. We utilize premium materials, strict testing cycles, and rigorous QA to guarantee long life cycles and minimal maintenance."
  },
  {
    id: "sol3",
    title: "Smarter Resource Orchestration",
    description: "By integrating modern digital tracking and lean logistics, we speed up regional mobilization, minimize material waste, and consistently deliver works on or ahead of schedule."
  },
  {
    id: "sol4",
    title: "Green & Recycled Civil Engineering",
    description: "Sustainability is our blueprint. We champion resource conservation by deploying eco-concrete, energy-efficient operations, and low-impact site layouts to future-proof municipal works."
  }
];

export const marketStats: StatItem[] = [
  {
    id: "stat1",
    value: "USD 206 B",
    label: "Indian Infrastructure Market",
    subtext: "Value in 2026, launching our baseline bidding cycle."
  },
  {
    id: "stat2",
    value: "USD 303 B",
    label: "Projected Market Expansion",
    subtext: "Expected valuation by 2031, representing immense demand."
  },
  {
    id: "stat3",
    value: "~8% CAGR",
    label: "Accelerated Annual Growth",
    subtext: "Sustained development pace driven by public & private investments."
  },
  {
    id: "stat4",
    value: "₹25.31 T",
    label: "Construction Sector Volume",
    subtext: "Indian market scale in 2026, creating robust bidding space."
  }
];

export const offerings: OfferingItem[] = [
  {
    id: "off1",
    title: "Civil Construction",
    shortDescription: "End-to-end commercial, industrial, and high-density residential builds.",
    detailedDescription: "We deliver full-scale civil building solutions with strict engineering standards. From complex high-rise foundations to industrial grade warehouses, we leverage advanced concrete technology, lean execution systems, and durable architecture to build safe, structural spaces for future generations.",
    deliverables: ["High-durability structural framing", "Industrial warehousing & fabrication hubs", "Sustainable multi-family residential complexes", "Seismic-resistant foundations & grading"],
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "off2",
    title: "Bridge Construction & Maintenance",
    shortDescription: "Heavy-duty urban flyovers, river bridges, and strategic railway crossings.",
    detailedDescription: "Designing, casting, and erecting robust bridges that connect urban and rural hubs. Our structural division handles everything from deep pier caissons to pre-stressed concrete girders, ensuring maximum load ratings, zero-tolerance quality audits, and environmental sensitivity across sensitive water bodies.",
    deliverables: ["Pre-stressed girder bridges", "Urban flyovers & elevated structural passes", "Comprehensive bridge lifecycle restoration & maintenance", "Load-testing and structural integrity reporting"],
    imageUrl: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "off3",
    title: "Roadworks & Highway Engineering",
    shortDescription: "High-grade arterial roads, national highway sectors, and community lanes.",
    detailedDescription: "Durable road building designed for heavy commerce and safety compliance. We use optimized aggregate layers, warm-mix asphalt, and precision grading to create ultra-smooth highway corridors that prevent hydroplaning, withstand harsh monsoonal cycles, and optimize rural-urban logistics.",
    deliverables: ["State and national highway asphalt surfacing", "Concrete (PQC) expressways and arterial corridors", "Stormwater integration & heavy drainage grading", "High-visibility road safety markers & signage"],
    imageUrl: "https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "off4",
    title: "Water Management Systems",
    shortDescription: "Potable drinking water lines, high-volume irrigation canals, and filtration.",
    detailedDescription: "Securing municipal water networks with clean engineering. We install high-durability HDPE pipelines, bulk supply canals, municipal pumping stations, and primary treatment filters to ensure continuous, contamination-free water access for local agrarian and domestic communities.",
    deliverables: ["Rural potable drinking water grid networks", "Heavy irrigation and lock-gate canal engineering", "Wastewater channeling & biological treatment facilities", "High-capacity smart water metering and valving"],
    imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "off5",
    title: "Government Tender Projects",
    shortDescription: "Fully compliant, certified civil execution for CPWD, KPWD, and Railways.",
    detailedDescription: "Executing high-stakes government infrastructure blueprints with precision and financial transparency. We leverage our deep regulatory bidding insight and expert resource mobilization to complete critical public works, fully compliant with audit guidelines and state deadlines.",
    deliverables: ["CPWD & KPWD municipal building construction", "Railway platform, grading, and track civil works", "Rigorous public safety audits & green compliance reporting", "Optimized bill-of-quantities (BOQ) bidding structures"],
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
  }
];

export const gtmSteps: GTMStep[] = [
  {
    step: 1,
    title: "Target Public Bidding",
    description: "Establish early bidding pipelines in CPWD, KPWD, and Southern Railway departments, targeting specialized civil development contracts."
  },
  {
    step: 2,
    title: "Build Subcontracting Alliances",
    description: "Foster strong execution partnerships with large regional raw-material suppliers and heavy-machinery pools to drive down asset overhead."
  },
  {
    step: 3,
    title: "Assert Local Presence",
    description: "Leverage our geographic Davanagere Hub in central Karnataka to quickly deploy labor and machinery, reducing transport delays."
  },
  {
    step: 4,
    title: "Optimize Pricing & BOQ",
    description: "Utilize highly efficient engineering processes to bid competitively on government Bill-of-Quantities (BOQ) without sacrificing material grades."
  },
  {
    step: 5,
    title: "Champion Eco-Compliance",
    description: "Lead the bidding process by prioritizing low-carbon concrete and water recycling designs, scoring higher on government green mandates."
  }
];

export const growthRoadmap: RoadmapMilestone[] = [
  {
    phase: "Phase 1: Regional Hegemony",
    timeframe: "Short-Term (Years 1 - 3)",
    title: "Consolidating Karnataka Civil Markets",
    points: [
      {
        category: "Regional Market Expansion",
        description: "Expand physical presence in central & northern Karnataka districts by locking in mid-scale KPWD and railway contracts."
      },
      {
        category: "Operational Efficiency",
        description: "Standardize digital site logs, automated resource tracking, and strict procurement pipelines to drive lean operations."
      },
      {
        category: "Strategic Partnerships",
        description: "Secure long-term supply pacts with cement & aggregates consortiums to shield project costs from market volatility."
      }
    ]
  },
  {
    phase: "Phase 2: National Scaling",
    timeframe: "Long-Term (Years 3 - 5)",
    title: "Nationwide Bidding & Sustainable Innovation",
    points: [
      {
        category: "Nationwide Footprint",
        description: "Mobilize specialized bridge and highway engineering teams into bordering states (Maharashtra, Andhra Pradesh, Tamil Nadu)."
      },
      {
        category: "Sustainable Innovation Integration",
        description: "Integrate carbon-absorbing building mixtures, prefabricated steel assemblies, and solar-active materials into standard blueprints."
      },
      {
        category: "Global Infrastructure Footprint",
        description: "Form consortiums to bid on major developmental projects across South Asia and global public corridors."
      }
    ]
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: "team1",
    name: "Shruthi M",
    role: "Director of Business & Operations",
    qualifications: "MBA in Business Management",
    experience: "5+ Years Executive Leadership",
    bio: "Shruthi is an agile corporate architect with five years of excellence directing strategic business plans and commercial bids. With a highly decorated academic background in SSLC and PUC, followed by an MBA, she manages RNSSY's corporate compliance, contract strategy, and financial planning, ensuring sound risk management and commercial growth.",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "team2",
    name: "Nagaraj T",
    role: "Director of Civil Engineering & Execution",
    qualifications: "SSLC (Technical Civil Execution Track)",
    experience: "10+ Years Ground Infrastructure Execution",
    bio: "Nagaraj is a formidable infrastructure practitioner with more than a decade of active, ground-level civil project execution. Specializing in high-stakes earthworks, heavy foundation engineering, and site-level project management, his deep local logistics knowledge and technical skill ensures that RNSSY projects are delivered on time, with strict adherence to structural safety.",
    avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop"
  }
];

export const coreValues = [
  {
    title: "Quality",
    description: "Unyielding structural integrity. We construct landmarks that endure the test of time, weather, and heavy use.",
    iconName: "Shield"
  },
  {
    title: "Integrity",
    description: "Transparent billing and compliance. Absolute clarity in tender execution, material sourcing, and public audits.",
    iconName: "Briefcase"
  },
  {
    title: "Sustainability",
    description: "Eco-tech clean mindset. Actively implementing green concrete, water preservation, and low-waste logistics.",
    iconName: "Leaf"
  },
  {
    title: "Efficiency",
    description: "Zero delay philosophy. Employing modern gantt-scheduling and rapid mobilization to protect project budgets.",
    iconName: "Zap"
  },
  {
    title: "Innovation",
    description: "Advanced engineering. Incorporating state-of-the-art structural modeling and sustainable materials on-site.",
    iconName: "Cpu"
  },
  {
    title: "Customer Commitment",
    description: "Community first. Designing public utilities that uplift local quality of life, connecting schools, farms, and cities.",
    iconName: "Users"
  }
];

export const marketPositioningTable = {
  features: [
    { name: "Local Mobilization Speed", competitors: "Slow (Requires national permits/hubs)", rnssy: "Ultra-Fast (Centralized Karnataka Hub)" },
    { name: "Eco-Friendly Raw Materials", competitors: "Low Adoption (Classic high-carbon concrete)", rnssy: "High Adoption (Eco-concrete & green designs)" },
    { name: "Overhead & Mobilization Cost", competitors: "Extremely High (Corporate office buffers)", rnssy: "Optimized & Lean (Direct local procurement)" },
    { name: "CPWD / KPWD Tender Agile Bidding", competitors: "Cumbersome for regional/mid-scale jobs", rnssy: "Highly Agile & Dedicated Teams" },
    { name: "Bridge & Water Grid Specialization", competitors: "Standard EPC templated works", rnssy: "Locally tuned, geologically aligned engineering" }
  ]
};
