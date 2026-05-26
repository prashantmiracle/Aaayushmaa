import { AcademicProgram, ConsultingService, IndustrySolution, ResourceItem } from './types';

export const ACADEMIC_PROGRAMS: AcademicProgram[] = [
  {
    id: 'fashion-tech-mastery',
    title: 'Fashion Technology & Core Operations',
    category: 'Engineering & Production',
    duration: '12 Weeks (Saturdays & Sundays)',
    difficulty: 'Intermediate to Advanced',
    description: 'Transform traditional apparel craft with cutting-edge production systems, shopfloor automation, 2D/3D CAD mechanics, and computer-aided layout patterns.',
    objectives: [
      'Master the mechanics of high-volume pattern drafting and grading logic.',
      'Deconstruct apparel machinery, seam science, and layout markers to reduce visual waste.',
      'Adopt digitized PLM (Product Lifecycle Management) structures used by global brands.',
      'Understand technical specifications (Techpacks) inside and out.'
    ],
    syllabus: [
      'Anatomy of a Techpack: BOM, Size Charts, Tolerances & Point of Measurement (POM)',
      'Garment Construction & Mass Seam Classification (ASTM D6193 standards)',
      'Digital Pattern Alterations, 3D Mock-fitting and virtual drape optimization',
      'Time Study & Work Measurement: Standard Allowed Minutes (SAM) formulation',
      'Production Layout Planning: Modular assembly vs. progressive bundle systems',
      'Line Balancing & Eliminating Shopfloor bottlenecks through visual controls'
    ],
    audience: [
      'Pattern Makers aiming to digitize their skill sets',
      'Fashion Designers desirous of robust manufacturing control',
      'Production Supervisors & Factory Floor Managers',
      'Aspirant Fashion Technologists seeking high-paid roles'
    ],
    status: 'Waitlist Active',
    commencing: 'July 15, 2026'
  },
  {
    id: 'merchandising-operations',
    title: 'Advanced Merchandising & Sourcing Analytics',
    category: 'Business & Management',
    duration: '10 Weeks',
    difficulty: 'All Levels',
    description: 'Master the high-stakes calculations behind retail planning, material procurement, lead-time control, costings, and international quality guidelines.',
    objectives: [
      'Perform rigorous cost-sheets integrating shipping, fabric wastage, and trims margins.',
      'Build dynamic production and material tracking blueprints (T&A calendars).',
      'Negotiate with global manufacturers relying on data-driven inventory metrics.',
      'Learn standard fabric testing methods and international standard protocols.'
    ],
    syllabus: [
      'Costing Architecture: FOB, CIF, LDP, Fabric Yield, and Marker efficiency calculators',
      'Time & Action (T&A) Calendar engineering: Path Analysis & Critical Path Control',
      'Fabric Chemistry, fiber identification and Quality Acceptance Limits (AQL 2.5/4.0)',
      'Supply Chain Sourcing strategies and bulk material forecasting formulas',
      'Export Documentation, Custom Clearances, and international shipping protocols',
      'Client Merchandising psychology & resolving factory-brand discrepancies'
    ],
    audience: [
      'Junior Merchandisers ready for promotional leaps',
      'Export house coordinators and procurement officers',
      'Independent clothing label owners managing suppliers',
      'Business students transitioning to premium luxury supply chains'
    ],
    status: 'Now Open',
    commencing: 'August 01, 2026'
  },
  {
    id: 'fashion-ai-innovations',
    title: 'Modern Generative AI in Fashion Business',
    category: 'Technology & Innovation',
    duration: '8 Weeks',
    difficulty: 'Advanced',
    description: 'Implement real Generative AI tools and predictive machine learning models to synthesize moodboards, automate photo shoots, reduce pre-production sample costs, and estimate sales.',
    objectives: [
      'Design high-fidelity custom garment styles from simple text instructions.',
      'Create smart catalogs and generate virtual on-model lookbooks without studio rentals.',
      'Deploy predictive algorithms for retail buying and trend analytics.',
      'Train proprietary AI style datasets safely avoiding patent breaches.'
    ],
    syllabus: [
      'Prompt Design for Fashion: Specifying fabric textures, necklines, and stitch accents',
      'ControlNet & IP-Adapter workflows for structured physical design control',
      'Automating High-End Lookbooks with virtual model overlays',
      'Predictive inventory buying models: Forecasting raw material needs using historical sales data',
      'Automating item tags and descriptive product copy using LLM pipelines',
      'Ethical copyright guardrails and generative design ownership compliance'
    ],
    audience: [
      'Creative Directors seeking rapid prototyping speeds',
      'D2C Founders trying to minimize photo photoshoot budgets',
      'Marketing heads of e-commerce fashion stores',
      'Tech-forward designers eager to spearhead early AI transformations'
    ],
    status: 'Waitlist Active',
    commencing: 'September 10, 2026'
  },
  {
    id: 'apparel-erp-supply-chain',
    title: 'Apparel ERP Systems, Production Planning & CRM',
    category: 'Enterprise Integration',
    duration: '12 Weeks',
    difficulty: 'Advanced',
    description: 'Install and direct computerized ERP networks for factory throughput control, material resource planning (MRP), and retail customer relationship suites.',
    objectives: [
      'Model exact material requirements, minimizing raw fabric storage costs.',
      'Learn enterprise software architectures built for modern apparel centers.',
      'Implement real-time barcode or RFID item tracking maps.',
      'Integrate multi-channel brand stores with back-end manufacturing capacity.'
    ],
    syllabus: [
      'Apparel ERP Architectures: Work orders, cutting bills, and material issuance flows',
      'Material Requirement Planning (MRP) math and automatic reorder alert logics',
      'RFID and Barcode data ingestion points to monitor real-time hourly line targets',
      'Integrating POS (Point of Sale) systems with warehousing and design departments',
      'Developing client retaining funnels and enterprise tier order systems',
      'System transitions and overcoming employee change resistance during digital revamps'
    ],
    audience: [
      'Industrial Engineers, SCM Advisors and Operations Managers',
      'Owners of multi-tier manufacturing units',
      'IT Consultants entering the apparel domain',
      'Garment merchandisers moving into operations consulting'
    ],
    status: 'Waitlist Active',
    commencing: 'October 05, 2026'
  }
];

export const CONSULTING_SERVICES: ConsultingService[] = [
  {
    id: 'operational-turnarounds',
    title: 'Operational Transformation & Turnarounds',
    scope: 'Factories, Production Centers, & Design Studios',
    description: 'We audit active apparel shopfloors to pinpoint hidden waste, balance sluggish production lines, boost labor productivity, and dramatically slash standard lead-times.',
    benefits: [
      '18% to 32% average boost in human labor and machinery utilization metrics.',
      'Substantial waste cuts through strict pattern layout optimization and marker adjustments.',
      'Establishment of clean, standard visual operational frameworks.',
      'Clear digital dashboards to track real-time hourly output metrics.'
    ],
    deliverables: [
      'Hourly Capacity & Balance charts outlining primary blockages',
      'Standard Operating Procedure (SOP) playbooks for cutting, sewing, and finishing',
      'Visual performance boards and digital layout schematics',
      'Custom post-transformation review report and 3 months support'
    ],
    iconName: 'TrendingUp'
  },
  {
    id: 'erp-digital-architects',
    title: 'Enterprise ERP Strategy & PLM Implementations',
    scope: 'Medium Apparel Factories & Growing Brand Hubs',
    description: 'Frustrated by disconnected spreadsheets? We consult, design, and direct full transitions to unified ERP and digital PLM systems—minimizing transaction costs.',
    benefits: [
      'A singular source of truth linking Raw Fibers, Work-In-Progress, and final orders.',
      'Immediate double-entry and manual tracing errors reduction.',
      'Frictionless design-to-manufacture feedback loops utilizing live PLM files.',
      'Auto-generated billing cycles based on actual shopfloor progress milestones.'
    ],
    deliverables: [
      'System Capability mapping & vendor selection scorecard',
      'Custom database schema templates for materials, billings, and patterns',
      'Phased data-migration blueprint (to avoid factory halts)',
      'Training schedule and user adoption tracking matrix'
    ],
    iconName: 'Server'
  },
  {
    id: 'fashion-ai-integration',
    title: 'Strategic Fashion AI Integration Audits',
    scope: 'Premium Labels & E-commerce Hubs',
    description: 'Integrate custom Generative AI models safely into your creative catalog and design processes to drop product ideation and lookbook costs to zero.',
    benefits: [
      'Rapid prototype rendering speeds (from 3 weeks down to 3 minutes).',
      'Near-zero photography layout costs for online catalog and seasonal lookbooks.',
      'Ultra-targeted e-commerce imagery customized dynamically to target audiences.',
      'Safe usage workflows avoiding copyright issues or trade-secret leaks.'
    ],
    deliverables: [
      'Custom-trained workflow guidelines (using Midjourney, Stable Diffusion, Lora)',
      'Catalog synthesis and virtual-model replacement prompt manuals',
      'AI-integrated software architecture mockups',
      'Operational blueprint to trim physical sample manufacturing cycles by 60%'
    ],
    iconName: 'Sparkles'
  },
  {
    id: 'inventory-planning-analytics',
    title: 'Inventory Precision, Margins & Supply Analytics',
    scope: 'D2C Brands & Apparel Retailers',
    description: 'Optimizing cashflow through dynamic stock tracking, raw-yarn price hedging strategy, deadstock prevention, and predictive markdown optimization.',
    benefits: [
      'Up to 24% reduction in warehousing capital storage requirements.',
      'Fewer sell-outs of high-demand articles via automated replenishment logic.',
      'Minimized deep markdowns through proactive price adjustments.',
      'Clear logistics maps minimizing trans-shipment delays.'
    ],
    deliverables: [
      'Custom-tailored Open-To-Buy (OTB) spreadsheet calculators',
      'Weekly stock turns and cover ratio reporting structures',
      'Safety stock threshold logic blueprints tailored to individual fabric leads',
      'Supplier scorecard models grading reliability, quality, and delays'
    ],
    iconName: 'Layers'
  }
];

export const INDUSTRY_SOLUTIONS: IndustrySolution[] = [
  {
    id: 'sol-boutiques',
    title: 'Fashion Boutiques & Independent Labels',
    segment: 'Boutique',
    challenge: 'High cost of sampling, production errors with third-party tailors, and stock mismanagement of premium expensive textiles.',
    solution: 'Deploy digital techpacks, set clear quality tolerance standards (POM), and establish ultra-tight purchase-order logs instead of verbal agreements.',
    impact: '70% reduction in sample alterations and 100% visibility on order lead times.',
    checkpoints: [
      'Digital Techpack formulation protocols',
      'Mastering micro-batch procurement systems',
      'Standardized Quality Checklists'
    ]
  },
  {
    id: 'sol-factories',
    title: 'Apparel Manufacturing Plants & Industrial Units',
    segment: 'Factory',
    challenge: 'Slow line setup times, standard time (SAM) errors, factory line imbalance, high rework rates, and frequent raw material shortages.',
    solution: 'Establish Lean Sewing Operations, implement standard Time Studies, implement hourly visual tracking cards, and build material buffer logic.',
    impact: 'Average 22% raise in overall shopfloor efficiency with a drastic fall in repair charges.',
    checkpoints: [
      'Standardized layout planning mechanics',
      'Standard time studies with real calculations',
      'Line status display units setup'
    ]
  },
  {
    id: 'sol-exporters',
    title: 'High-Volume Export Houses',
    segment: 'Export House',
    challenge: 'Severe penalties for delayed shipments, rejection of lots due to AQL quality lapses, and chaotic client communication streams.',
    solution: 'Deploy digital Time & Action (T&A) trackers mapping actual versus planned daily progress with automatic bottleneck alert routing.',
    impact: 'On-time shipment compliance lifted above 98% with transparent client reporting.',
    checkpoints: [
      'Critical path monitoring calendars',
      'Live materials inspection procedures',
      'Multi-tier buyer approval control maps'
    ]
  },
  {
    id: 'sol-d2c',
    title: 'Rapid-Growth D2C Apparel Brands',
    segment: 'D2C Brand',
    challenge: 'Very high digital studio photoshoot costs, deadstock, and slow supplier response times when sudden trends spike.',
    solution: 'Integrate virtual on-model product generators, apply dynamic stock counts, and partner with flexible small-batch supply clusters.',
    impact: 'Studio catalog creation cost drops by 90% while fabric waste sits under 3%.',
    checkpoints: [
      'Generative virtual models replacement setup',
      'Rapid-response agile supply network mapping',
      'Raw material pooling procedures'
    ]
  }
];

export const RESOURCE_ITEMS: ResourceItem[] = [
  {
    id: 'techpack-blueprint',
    title: 'Comprehensive Techpack Framework & BOM Template',
    type: 'Template',
    description: 'A fully editable premium techpack template in Excel and PDF including detailed Bill of Material (BOM) fields, stitching guidelines, and size charts.',
    fileSize: '4.8 MB',
    downloadCount: 1420
  },
  {
    id: 'costing-calculator',
    title: 'Apparel Costsheet & Marker Yield Formula Suite',
    type: 'Template',
    description: 'An advanced spreadsheet detailing global FOB fabric yields, consumption formulas, trim costing, and shipping estimators.',
    fileSize: '2.4 MB',
    downloadCount: 980
  },
  {
    id: 'fashion-ai-prompts',
    title: 'Generative AI Style Synthesis Prompts Handbook',
    type: 'Cheat Sheet',
    description: 'Specially created text prompts to render extreme garment details (drapes, zippers, high-end seams, silk, raw-denim) in Stable Diffusion and Midjourney.',
    fileSize: '1.2 MB',
    downloadCount: 2210
  },
  {
    id: 'industry-terms-dictionary',
    title: '150 Essential Global Apparel Industry Terms',
    type: 'Industry Guide',
    description: 'A specialized quick guide indexing key industry technical terms (SAM, SPI, POM, AQL, CMT, Greige) crucial for job interviews.',
    fileSize: '950 KB',
    downloadCount: 1650
  }
];

export const FAQS = [
  {
    q: 'What is a "Fashion Technologist"?',
    a: 'A Fashion Technologist acts as the bridge between creative design and manufacturing science. Unlike pure fashion designers, technologists focus on fabric chemistry, seam strength, technical techpacks, assembly line balancing, CAD grade rules, and embedding newer tools like Generative AI and ERP workflows into traditional sewing domains.'
  },
  {
    q: 'Who runs AAYUSHMAA®?',
    a: 'AAYUSHMAA® was founded by Prashant Kumar, a seasoned Fashion Technologist, Management Consultant, and Operations Practitioner. Over his career, he has directed manufacturing plants, overseen complex ERP conversions, balanced under-performing production floors, and mentored hundreds of students into top-tier merchandise, sourcing, and technology roles.'
  },
  {
    q: 'Will there be any coding required in the Fashion AI programs?',
    a: 'Absolutely none. The curriculum is completely designed for non-programmers. We focus on masterfully leveraging visual interfaces, prompting mechanics, ControlNet layers, batch assets rendering, and using AI models to create lookbooks and catalog items.'
  },
  {
    q: 'Do you offer offline consulting or is it strictly online?',
    a: 'Prashant Kumar provides online system diagnostics globally and customized on-site shopfloor structural transformations for factories, export houses, and large D2C facilities in select apparel hubs.'
  },
  {
    q: 'Are certificates provided upon completing the Academy courses?',
    a: 'Yes. Every regular student of our scheduled cohorts receives an official AAYUSHMAA® Academy Certification of Industry Readiness, signed by Prashant Kumar, validating your technical knowledge.'
  }
];
