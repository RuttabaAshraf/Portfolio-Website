export interface ProjectCaseStudy {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  categorySlug: 'branding' | 'packaging' | 'ui' | 'campaign';
  label: 'SAMPLE PROJECT';
  shortDescription: string;
  heroImage: string;
  deliverables: string[];
  toolsUsed: string[];
  accentColor: string;
  challengeQuestion: string;
  concept: string;
  challenge: string;
  research: string;
  creativeDirection: string;
  typography: {
    primary: string;
    secondary: string;
    rationale: string;
  };
  colorPalette: { name: string; hex: string; role: string }[];
  designDevelopment: string;
  finalDeliverables: { title: string; desc: string }[];
  takeaway: string;
  specDetails?: { [key: string]: string };
}

export const PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'noir-and-bean',
    number: '01',
    title: 'NOIR & BEAN',
    subtitle: 'PREMIUM COFFEE BRAND IDENTITY',
    category: 'Brand Identity · Packaging · Art Direction',
    categorySlug: 'branding',
    label: 'SAMPLE PROJECT',
    shortDescription: 'A sophisticated specialty coffee identity targeting urban professionals with bespoke copper foil packaging, artisanal typography, and a minimalist dark aesthetic.',
    heroImage: '/src/assets/images/noir_bean_coffee_mockup_1790108602761.jpg',
    deliverables: [
      'Primary Wordmark & Monogram',
      'Matte Black & Copper Coffee Bags',
      'Artisan Ceramic Cup Graphics',
      'Brand Style Guide & Grid Rules',
      'Store Exterior Signage Mockup',
      'Editorial Social Media Templates'
    ],
    toolsUsed: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma'],
    accentColor: '#C88D54',
    challengeQuestion: 'How can a new coffee brand establish a memorable premium identity in a crowded market?',
    concept: 'NOIR & BEAN was conceived as an artisanal roastery catering to discerning coffee connoisseurs and design-conscious urban professionals. The brand needed to radiate quiet luxury rather than mass-market cafeteria noise.',
    challenge: 'Specialty coffee shelves are filled with either hyper-colorful illustrative labels or sterile utilitarian packages. The challenge was developing a restrained, tactile identity that conveys single-origin craftsmanship while maintaining high shelf contrast.',
    research: 'Analyzed packaging trends across Nordic roasters and luxury Japanese tea houses. Identified an opportunity for architectural typography, deep textural matte finishes, and warm metallic accents that evoke the caramelization of roasted beans.',
    creativeDirection: 'Architectural minimalism meets tactile luxury. High-contrast negative space, understated letter spacing, and a geometric seal that pairs the bean silhouette with an abstract coffee bean cross-section.',
    typography: {
      primary: 'Syne Display / Didot Accent',
      secondary: 'Plus Jakarta Sans (Medium & Regular)',
      rationale: 'The contrast between high-fashion sharp serif details and modern architectural grotesque conveys both heritage roastery authority and contemporary taste.'
    },
    colorPalette: [
      { name: 'Obsidian Ink', hex: '#0B0B0D', role: 'Primary Matte Canvas' },
      { name: 'Burnished Copper', hex: '#C88D54', role: 'Foil Stamping & Embellishment' },
      { name: 'Warm Crema', hex: '#EAE5DB', role: 'Secondary Label Stock' },
      { name: 'Charcoal Roast', hex: '#232326', role: 'Card & Container Substrates' }
    ],
    designDevelopment: 'Explored over 24 initial wordmark directions before landing on an architectural ligature between the N and B. Created custom grid systems for 250g and 1kg bags, specifying blind deboss zones and hot-foil stamping die lines.',
    finalDeliverables: [
      { title: 'Brand Mark System', desc: 'Primary wordmark, stacked lockup, sub-mark seal, and wax-seal emblem.' },
      { title: 'Packaging System', desc: 'Single-origin 250g pouch, Reserve roast 1kg tin, and takeaway embossed cups.' },
      { title: 'Collateral & Retail', desc: 'Embossed business cards, roast profile cards, and brass retail door blade sign.' },
      { title: 'Digital Social Kit', desc: 'Instagram launch carousel, stories, and editorial moodboard assets.' }
    ],
    takeaway: 'Designing a premium brand taught me the discipline of restraint: when typography, materials, and whitespace are balanced, you do not need decorative fluff to establish prestige.'
  },
  {
    id: 'elan-studio',
    number: '02',
    title: 'ÉLAN STUDIO',
    subtitle: 'FASHION & LIFESTYLE SOCIAL MEDIA CAMPAIGN',
    category: 'Social Media Design · Campaign Design · Art Direction',
    categorySlug: 'campaign',
    label: 'SAMPLE PROJECT',
    shortDescription: 'A 10-part coordinated digital campaign and editorial visual system for a contemporary capsule wardrobe launch, emphasizing grid rhythm and magazine layout.',
    heroImage: '/src/assets/images/elan_fashion_campaign_mockup_1790108621302.jpg',
    deliverables: [
      'Instagram 9-Grid Coordinated Feed',
      '6-Slide Editorial Storytelling Carousel',
      'Animated Story Promotion Templates',
      'Collection Launch Digital Billboards',
      'Sale & Announcement Graphics System',
      'Campaign Typography & Layout Guidelines'
    ],
    toolsUsed: ['Adobe Photoshop', 'Adobe InDesign', 'Figma', 'Canva'],
    accentColor: '#D4A373',
    challengeQuestion: 'How can a contemporary fashion brand maintain an editorial magazine feel across rapid social media feeds?',
    concept: 'ÉLAN STUDIO represents a timeless, quiet-luxury apparel label launching its Autumn/Winter capsule. The campaign needed to elevate the social feed from standard e-commerce spam into a collectible digital lookbook.',
    challenge: 'Social feeds often become fragmented when sales announcements, product drops, and quotes compete for attention. The goal was to build a rigorous 12-column social grid system that remains harmonious across single posts, carousels, and stories.',
    research: 'Studied European fashion houses, architectural journals, and print lookbooks from Acne Studios, The Row, and Kinfolk. Found that generous borders, asymmetrical image placement, and quiet serif pull quotes create high dwell time on mobile screens.',
    creativeDirection: 'Linen tones, muted natural textures, intentional asymmetry, and editorial negative space. The visual flow treats the mobile screen like an open spread in an indie art magazine.',
    typography: {
      primary: 'Cormorant Garamond Italic',
      secondary: 'Plus Jakarta Sans (Light & Medium)',
      rationale: 'Pairing an expressive, poetic italic serif with an understated geometric sans evokes effortless Parisian editorial elegance.'
    },
    colorPalette: [
      { name: 'Oatmeal Linen', hex: '#EDE8E1', role: 'Warm Canvas Surface' },
      { name: 'Terracotta Clay', hex: '#C28468', role: 'Campaign Headline Accent' },
      { name: 'Deep Espresso', hex: '#1C1917', role: 'Body Typography & Hairlines' },
      { name: 'Bone White', hex: '#F9F8F6', role: 'Image Border & Card Spacing' }
    ],
    designDevelopment: 'Crafted 10 individual post layouts that connect visually when viewed on a 3x3 profile grid. Built reusable modular templates for product spotlights, designer notes, material close-ups, and release countdowns.',
    finalDeliverables: [
      { title: 'The Launch Carousel', desc: 'Swipeable 6-frame story covering fabric sourcing, tailoring, and lookbook previews.' },
      { title: 'Product Spotlights', desc: 'Split-frame layouts showing full silhouette juxtaposed with textile macro details.' },
      { title: 'Stories & Reels Kit', desc: 'Minimalist 9:16 layout frames with typographic date tickers and audio cues.' },
      { title: 'Sale Announcement', desc: 'Non-aggressive promotional posters relying on typographic scale rather than neon badges.' }
    ],
    takeaway: 'This project honed my understanding of pacing and sequential storytelling across mobile viewports, proving that social design requires the same composition rigor as print publishing.'
  },
  {
    id: 'luma-skin',
    number: '03',
    title: 'LUMA SKIN',
    subtitle: 'PREMIUM SKINCARE PACKAGING',
    category: 'Packaging · Branding · Product Visualization',
    categorySlug: 'packaging',
    label: 'SAMPLE PROJECT',
    shortDescription: 'Clean, botanical cosmetic identity featuring frosted glass dropper bottles, recyclable paperboard packaging, and high-legibility typographic hierarchies.',
    heroImage: '/src/assets/images/luma_skincare_mockup_1790108636735.jpg',
    deliverables: [
      '30ml Frosted Glass Dropper Label',
      '50ml Ceramic Cream Jar Silk-Screen',
      'Embossed Outer Box Packaging System',
      'Batch & Ingredient Typographic Grid',
      'Launch E-Commerce Hero Banners',
      'Product Visualization Mockups'
    ],
    toolsUsed: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma'],
    accentColor: '#9FB8AD',
    challengeQuestion: 'How can clean skincare packaging convey clinical efficacy and organic purity simultaneously?',
    concept: 'LUMA SKIN is a minimalist dermatologist-backed botanical skincare line. The packaging needed to project clean scientific clarity without feeling sterile or medical, celebrating raw ingredient integrity.',
    challenge: 'Regulatory skincare packaging requires dense ingredient listings, batch codes, and volume markers on small surface areas. Designing these without cluttering the bottle face required obsessive typographic hierarchy.',
    research: 'Researched pharmaceutical apothecary bottles and Japanese minimalist skincare packaging. Discovered that frosted glass with direct silk-screened monochrome typography creates an organic tactile connection while preserving ingredient photostability.',
    creativeDirection: 'Translucent frosted glass, soft eucalyptus green accents, crisp hairline grids, and ample negative space. The packaging serves as a calming architectural presence on a bathroom vanity.',
    typography: {
      primary: 'Plus Jakarta Sans (SemiBold & Medium)',
      secondary: 'JetBrains Mono (Tabular numerals & ingredients)',
      rationale: 'Using a clean sans for the brand name paired with an engineered monospace font for active percentages (e.g., 2.5% RETINOL) signals clinical transparency.'
    },
    colorPalette: [
      { name: 'Frosted Mist', hex: '#F0F3F1', role: 'Glass Body & Background' },
      { name: 'Sage Eucalyptus', hex: '#7A9A8B', role: 'Active Component Identifier' },
      { name: 'Deep Slate', hex: '#1E2522', role: 'Primary Typography' },
      { name: 'Raw Paperboard', hex: '#E2DBD2', role: 'Secondary Box Substrate' }
    ],
    designDevelopment: 'Developed full die-line artwork for three SKUs (Renew Serum, Barrier Cream, Gentle Cleanser). Calculated 360-degree cylindrical label wraps with precise clearance margins for dispensing pumps and droppers.',
    finalDeliverables: [
      { title: 'Dropper Bottle Label', desc: 'Front-and-back silkscreen wrap for 30ml frosted glass with milliliter calibration.' },
      { title: 'Cream Jar System', desc: 'Double-walled matte ceramic jar with debossed logo on top cap lid.' },
      { title: 'Rigid Box Packaging', desc: 'FSC-certified unbleached cotton paperboard with blind debossed brand seal.' },
      { title: 'Digital E-Commerce Assets', desc: 'Multi-angle studio render mockups and product detail page display cards.' }
    ],
    takeaway: 'Mastered production-ready packaging constraints: bleed specifications, minimum font sizes for regulatory compliance, and how print materials interact with light.'
  },
  {
    id: 'nexa',
    number: '04',
    title: 'NEXA',
    subtitle: 'TECHNOLOGY PRODUCT LANDING PAGE',
    category: 'UI Visual Design · Digital Design · Technology',
    categorySlug: 'ui',
    label: 'SAMPLE PROJECT',
    shortDescription: 'High-conversion visual design for an intelligent cloud telemetry platform, featuring dark-mode dashboard interfaces, feature cards, and strict visual rhythm.',
    heroImage: '/src/assets/images/nexa_tech_landing_mockup_1790108648949.jpg',
    deliverables: [
      'High-Impact 1440px Landing Page Hero',
      'Interactive Product Feature Cards',
      'Telemetry Analytics Dashboard UI View',
      'Mobile Responsive Breakpoints',
      'Transparent Pricing Matrix Grid',
      'Component Design Tokens & UI Library'
    ],
    toolsUsed: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator'],
    accentColor: '#3B82F6',
    challengeQuestion: 'How can an intricate technical telemetry product be communicated with visual clarity and immediate value comprehension?',
    concept: 'NEXA is a conceptual cloud monitoring platform for engineering teams. The visual objective was to design a marketing landing page that presents complex infrastructure metrics through intuitive, elegant graphic design.',
    challenge: 'Enterprise tech landing pages frequently succumb to feature clutter, low-contrast text, or generic 3D illustrations. The goal was to showcase real UI graphics that demonstrate the product interface as the hero artwork itself.',
    research: 'Analyzed top developer-tool experiences (Vercel, Linear, Stripe). Identified that crisp typography, dark slate backgrounds, tabular numeral alignment, and subtle hairline borders convey deep reliability and technical polish.',
    creativeDirection: 'Deep obsidian surfaces, crisp 1px borders with subtle gradients, vivid blue focal highlights, and balanced typographic contrast. The UI mockup on screen acts as the visual centerpiece.',
    typography: {
      primary: 'Syne Display & Plus Jakarta Sans',
      secondary: 'JetBrains Mono (Metrics & Syntax)',
      rationale: 'Syne provides an unmistakable modern edge in hero statements, while Plus Jakarta Sans delivers pristine readability at 14px dashboard scale.'
    },
    colorPalette: [
      { name: 'Deep Abyss', hex: '#0B0F19', role: 'Main Page Canvas' },
      { name: 'Slate Surface', hex: '#151D2F', role: 'Card & Container Background' },
      { name: 'Electric Azure', hex: '#3B82F6', role: 'Primary CTA & Visual Accent' },
      { name: 'Muted Cyan', hex: '#38BDF8', role: 'Secondary Metric Highlight' }
    ],
    designDevelopment: 'Constructed an 8px grid foundation in Figma with full autolayout tokens. Designed bespoke metric cards, line charts, node connection graphs, and latency trackers to make the conceptual product feel tangibly alive.',
    finalDeliverables: [
      { title: 'Hero Section', desc: 'Split desktop view featuring high-contrast headline and perspective laptop dashboard mockup.' },
      { title: 'Feature Spotlight Grid', desc: 'Bento-style layout highlighting automated alerts, SQL query logs, and team permissions.' },
      { title: 'Interactive Dashboard Preview', desc: 'Full-width dashboard interface mockup demonstrating data hierarchy and status colors.' },
      { title: 'Pricing & Trust Section', desc: 'Transparent 3-tier card matrix with highlighted Pro recommendation tier.' }
    ],
    takeaway: 'Designing for digital products requires combining graphic design aesthetics with strict UI hierarchy—every visual element must serve both brand perception and user orientation.'
  },
  {
    id: 'frame-festival',
    number: '05',
    title: 'FRAME',
    subtitle: 'CREATIVE ARTS FESTIVAL CAMPAIGN',
    category: 'Poster Design · Campaign Design · Typography · Art Direction',
    categorySlug: 'campaign',
    label: 'SAMPLE PROJECT',
    shortDescription: 'An experimental, Swiss-inspired typographic identity and poster series celebrating multidisciplinary visual arts with radical scale contrast and architectural framing.',
    heroImage: '/src/assets/images/frame_arts_festival_poster_1790108661121.jpg',
    deliverables: [
      '3-Part Screenprint Exhibition Poster Series',
      'Oversized Urban Billboard Mockup',
      'VIP Event Pass & Foil Ticket System',
      'Dynamic Social Story & Poster Animations',
      'Gallery Wayfinding & Directional Signage',
      'Exhibition Program Editorial Booklet'
    ],
    toolsUsed: ['Adobe Illustrator', 'Adobe InDesign', 'Adobe Photoshop'],
    accentColor: '#FF3B30',
    challengeQuestion: 'How can typography alone evoke the raw energy of contemporary visual art without relying on traditional illustration?',
    concept: 'FRAME is a fictional biennial creative arts festival uniting independent typographers, motion artists, and sculptors. The visual identity treats the poster surface as an architectural gallery space where typography behaves as sculpture.',
    challenge: 'Designing an arts festival identity requires bold creative confidence without becoming illegible. The poster needed to stand out on crowded city streets from 50 feet away while providing precise schedule details up close.',
    research: 'Explored Swiss International Style masters (Josef Müller-Brockmann, Armin Hofmann) and modern Dutch experimental typography. Built an asymmetric 6x12 column grid where text blocks collide and intersect with geometric wireframes.',
    creativeDirection: 'Raw concrete grays, stark cadmium vermilion accents, brutalist black typography, and bold geometric cropping frames. Every composition explores scale tension between massive glyphs and fine hairline annotations.',
    typography: {
      primary: 'Syne ExtraBold & Expanded',
      secondary: 'JetBrains Mono & Grotesk Bold',
      rationale: 'The bold, geometric structure of Syne creates commanding sculptural presence, while monospaced metadata delivers functional clarity.'
    },
    colorPalette: [
      { name: 'Cadmium Vermilion', hex: '#FF3B30', role: 'High-Impact Focal Red' },
      { name: 'Raw Gallery White', hex: '#F4F4F0', role: 'Paper Substrate' },
      { name: 'Carbon Black', hex: '#111214', role: 'Primary Typography & Frame Lines' },
      { name: 'Architectural Gray', hex: '#8E8E93', role: 'Secondary Grid Guidelines' }
    ],
    designDevelopment: 'Developed three distinct variations: "Form", "Space", and "Motion". Each poster uses a different typographic scale strategy while sharing common registration marks, timestamps, and border coordinates for visual unity.',
    finalDeliverables: [
      { title: 'The Triad Poster Set', desc: 'Three 70x100cm silk-screen exhibition posters exploring form, space, and motion.' },
      { title: 'Outdoor Campaign', desc: 'Bus shelter wraps and concrete flyposting mockups demonstrating real-world legibility.' },
      { title: 'Event Access Kit', desc: 'Lanyard credential pass with metallic foil stamp, perforation stub, and security grid.' },
      { title: 'Wayfinding System', desc: 'Modular gallery floor arrows, room number stencils, and lecture timetable boards.' }
    ],
    takeaway: 'This project pushed my typographic boundaries, demonstrating how strict grid math and daring visual hierarchy can transform raw letters into emotional visual art.'
  },
  {
    id: 'synq',
    number: '06',
    title: 'SYNQ',
    subtitle: 'TECHNOLOGY STARTUP BRANDING + UI DESIGN',
    category: 'Technology Branding · UI Design · Visual Identity',
    categorySlug: 'ui',
    label: 'SAMPLE PROJECT',
    shortDescription: 'The flagship project connecting Computer Science + Graphic Design: complete brand identity, design system, and 7 polished UI screens for a modern productivity ecosystem.',
    heroImage: '/src/assets/images/synq_app_ui_mockup_1790108675121.jpg',
    deliverables: [
      'Complete Brand Symbol & Dynamic Logo Mark',
      'Comprehensive Design Tokens & Color System',
      '7 Polished Web & Mobile Application Screens',
      'Product Launch Keynote Presentation',
      'Social Announcement & App Store Graphics',
      'Cross-Platform UI Component Guidelines'
    ],
    toolsUsed: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop'],
    accentColor: '#10B981',
    challengeQuestion: 'How can a technology product communicate complex multi-user functionality through a simple, cohesive visual system?',
    concept: 'SYNQ is a conceptual unified workspace uniting tasks, asynchronous communication, and sprint analytics for student teams, freelancers, and agile studios. It is the defining intersection of my Computer Science degree and visual design capability.',
    challenge: 'Productivity software often feels either overly rigid and bureaucratic or unprofessionally whimsical. The goal was to build a brand identity and UI system that feels razor-sharp, effortless to navigate, and visually inspiring to work in daily.',
    research: 'Surveyed common UX pain points in tools like Jira, Notion, and Asana. Found that users crave visual breathing room, instantaneous status recognition, and typography that reduces cognitive strain over long work sessions.',
    creativeDirection: 'The brand name SYNQ inspires the core symbol: interlocking geometric shapes that merge to signify synchronized teamwork. The visual system pairs clean off-black workspaces with vibrant emerald accents denoting progress and momentum.',
    typography: {
      primary: 'Syne (Brand Mark & Marketing Display)',
      secondary: 'Plus Jakarta Sans (UI Interface & Body)',
      rationale: 'Syne establishes a memorable, distinctive brand presence in marketing, while Plus Jakarta Sans delivers optical legibility in dense tables and kanban boards.'
    },
    colorPalette: [
      { name: 'Emerald Pulse', hex: '#10B981', role: 'Active State & Primary Brand Accent' },
      { name: 'Ink Workspace', hex: '#0E1117', role: 'Dark Surface Canvas' },
      { name: 'Graphite Border', hex: '#242938', role: '1px Structural Dividers' },
      { name: 'Electric Violet', hex: '#8B5CF6', role: 'Secondary Collaboration Tag' }
    ],
    designDevelopment: 'Structured the complete UI design across 7 distinct screens: 1) Executive Dashboard, 2) Active Projects Grid, 3) Kanban Task Board, 4) Sprint Velocity Analytics, 5) Real-time Team Collaboration Chat, 6) Notification Center, and 7) Mobile Companion App.',
    finalDeliverables: [
      { title: 'Brand Identity Suite', desc: 'Vector logo variations, scalable SVG favicon, and brand guidelines for light/dark modes.' },
      { title: 'The 7 UI Screens', desc: 'Pixel-perfect mockups of all core views with stateful hover badges and filter controls.' },
      { title: 'Marketing Launch Deck', desc: '16:9 presentation slides explaining the product value proposition with clean mockups.' },
      { title: 'App Store Presence', desc: 'Coordinated promotional preview screenshots for iOS and macOS App Stores.' }
    ],
    takeaway: 'SYNQ proves that my Computer Science background is my greatest creative asset: because I understand software architecture, component modularity, and data structures, my UI designs are intuitive, feasible, and built with purpose.'
  }
];

export const SKILLS_DATA = {
  graphicDesign: [
    'Brand Identity & Systems',
    'Logo Design & Marks',
    'Typography & Hierarchy',
    'Editorial & Layout Design',
    'Poster & Print Design',
    'Packaging & Label Design',
    'Social Media Design Kits',
    'Marketing & Launch Creatives',
    'Presentation & Pitch Decks'
  ],
  digitalDesign: [
    'UI Visual Design',
    'Landing Page Design',
    'App Interface Concepts',
    'Digital Campaign Assets',
    'Design Systems & Tokens',
    'Component Architecture',
    'Responsive Web Layouts',
    'Visual Prototyping'
  ],
  tools: [
    { name: 'Adobe Photoshop', level: 'Advanced', experience: 'Photo manipulation, campaign assets, mockup finishing' },
    { name: 'Adobe Illustrator', level: 'Advanced', experience: 'Vector branding, packaging die lines, custom typography marks' },
    { name: 'Figma', level: 'Advanced', experience: 'UI screen design, design tokens, layout auto-layout grids' },
    { name: 'Adobe InDesign', level: 'Intermediate', experience: 'Multi-page editorial layouts, print publications, booklets' },
    { name: 'Canva', level: 'Intermediate', experience: 'Rapid social templates, client handoff assets' }
  ]
};

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'UNDERSTAND',
    summary: 'Deconstruct the objective, audience, and core problem before opening any design tool.',
    details: 'I start every project with deep inquiry: What message must be communicated? Who is the audience? What emotions and actions should the design evoke?'
  },
  {
    step: '02',
    title: 'RESEARCH',
    summary: 'Analyze visual landscapes, historical references, and competitor positioning.',
    details: 'I study industry benchmarks, typography specimens, color psychology, and cultural references to find the unique visual whitespace for the project.'
  },
  {
    step: '03',
    title: 'CONCEPT',
    summary: 'Develop multiple divergent visual directions and moodboards.',
    details: 'Sketching, rapid typographic pairings, and grid exploration. I test multiple creative avenues to discover the most compelling and defensible visual metaphor.'
  },
  {
    step: '04',
    title: 'DESIGN',
    summary: 'Craft, test, refine, and iterate with obsessive attention to craft.',
    details: 'Translating concepts into high-fidelity vectors, layouts, and mockups. Tuning optical spacing, contrast ratios, and structural hierarchy.'
  },
  {
    step: '05',
    title: 'DELIVER',
    summary: 'Package clean, production-ready assets with specifications.',
    details: 'Exporting print-ready die lines, color-managed files, digital vectors, and comprehensive brand guidelines for flawless real-world implementation.'
  }
];

export const WHY_WORK_WITH_ME = [
  {
    number: '01',
    title: 'CREATIVE THINKING',
    description: 'I explore multiple visual directions before selecting the strongest concept. Every curve, font choice, and layout decision has purpose and intention.'
  },
  {
    number: '02',
    title: 'ATTENTION TO DETAIL',
    description: 'Typography, micro-spacing, optical alignment, visual hierarchy, and cross-channel consistency matter deeply in every deliverable I produce.'
  },
  {
    number: '03',
    title: 'DESIGN + TECHNOLOGY',
    description: 'My Computer Science degree provides a structured mental model for how digital products work, allowing me to bridge aesthetics and technical feasibility.'
  },
  {
    number: '04',
    title: 'ADAPTABILITY',
    description: 'I thrive across brand identity, social campaigns, packaging systems, and digital UI design, maintaining high standards across diverse media formats.'
  },
  {
    number: '05',
    title: 'GROWTH MINDSET',
    description: 'As a fresh graduate, I am eager to learn, welcome constructive creative critique, and constantly push my craft to the next level.'
  }
];

export const TARGET_ROLES = [
  'Graphic Designer',
  'Junior Graphic Designer',
  'Visual Designer',
  'Digital Designer',
  'UI/Visual Designer',
  'Junior Product Designer',
  'Creative Designer',
  'Brand Designer'
];

export interface Certificate {
  title: string;
  issuer: string;
  category: string;
  description: string;
  skills: string[];
}

export const CERTIFICATIONS: Certificate[] = [
  {
    title: 'Google UX Design Professional Certificate',
    issuer: 'Coursera',
    category: 'UX/UI & Product Design',
    description: 'Comprehensive professional training in the end-to-end UX design lifecycle: user research, empathy mapping, personas, wireframing, high-fidelity interactive prototyping in Figma, and usability testing.',
    skills: ['User Research', 'Wireframing', 'Figma Prototyping', 'Usability Testing', 'Design Systems']
  },
  {
    title: 'Graphic Design Fundamentals',
    issuer: 'Great Learning Academy',
    category: 'Visual Design & Theory',
    description: 'Foundational graphic design training exploring visual hierarchy, balance, typography principles, color harmony, and strategic design communication.',
    skills: ['Visual Hierarchy', 'Typography Theory', 'Composition', 'Color Harmony', 'Brand Communication']
  },
  {
    title: 'Introduction to Adobe Photoshop',
    issuer: 'Great Learning Academy',
    category: 'Digital Creative Tools',
    description: 'Hands-on training in digital image editing, non-destructive layer masking, visual compositing, typography styling, and asset production for web and print.',
    skills: ['Image Manipulation', 'Layer Masking', 'Visual Compositing', 'Asset Production', 'Photoshop Tools']
  }
];

