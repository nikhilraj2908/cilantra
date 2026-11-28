import {
  ShieldCheck,
  AlertTriangle,
  Cpu,
  Users,
  TrendingUp,
  Briefcase,
  BookOpen,
  Gamepad2,
  Zap,
  MonitorPlay,
  HeartPulse,
  Microscope,
  Stethoscope,
  FileCheck2,
  Plane,
  Compass,
  ShoppingBag,
  Sparkles,
  Factory,
  Gauge,
  Wrench,
  Lock,
  type LucideIcon,
} from "lucide-react";

import aboutHero from "@/assets/about-hero.jpg";
import aboutHow from "@/assets/about-how.jpg";
import aboutDrives from "@/assets/about-drives.jpg";
import aboutWhy from "@/assets/about-why.jpg";
import svcElearning from "@/assets/services-elearning-bg.jpg";
import svcVr from "@/assets/services-vr-bg.jpg";

export interface IndustrySolution {
  icon: LucideIcon;
  title: string;
  desc: string;
  tags: string[];
}

export interface IndustryFormat {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface IndustryData {
  slug: string;
  num: string;
  name: string;
  tagline: string;
  eyebrow: string;
  heroTitle: string;
  heroHighlight: string;
  heroSubtitle: string;
  heroImage: string;
  overviewTitle: string;
  overviewHighlight: string;
  overviewParagraphs: string[];
  overviewMetrics: { value: string; label: string }[];
  challengesHeading: string;
  challengesSubheading: string;
  challenges: { title: string; desc: string }[];
  solutionsHeading: string;
  solutionsSubheading: string;
  solutions: IndustrySolution[];
  formatsHeading: string;
  formats: IndustryFormat[];
  ctaTitle: string;
  ctaBody: string;
}

export const INDUSTRIES: IndustryData[] = [
  {
    slug: "banking-and-finance",
    num: "01",
    name: "Banking & Finance",
    tagline: "Where knowledge builds trust.",
    eyebrow: "Industry Solutions · Banking & Finance",
    heroTitle: "e-Learning Solutions for",
    heroHighlight: "Banking & Finance",
    heroSubtitle:
      "Equip your workforce with compliant, agile, and customer-centric learning experiences built for modern financial institutions — from AML/KYC readiness to FinTech adoption.",
    heroImage: aboutHero,
    overviewTitle: "Stay compliant, agile, and",
    overviewHighlight: "customer-ready.",
    overviewParagraphs: [
      "Banking and financial services operate in a landscape of continuous regulatory change, heightened cybersecurity risk, and rapid digital transformation. Generic slide decks cannot keep frontline tellers, relationship managers, and compliance teams ahead.",
      "Cilantra designs custom, scenario-driven e-Learning and digital training ecosystems that shorten onboarding cycles, simplify complex regulations, and empower teams to deliver confident financial guidance.",
    ],
    overviewMetrics: [
      { value: "100%", label: "SCORM / xAPI audit-ready compliance tracking" },
      { value: "40%", label: "Faster time-to-productivity for frontline hires" },
      { value: "0%", label: "Subcontracting — 100% in-house domain & design team" },
    ],
    challengesHeading: "Key Training Challenges in Banking & Finance",
    challengesSubheading:
      "Addressing the high-stakes realities of regulated, fast-moving financial institutions.",
    challenges: [
      {
        title: "Frequent Regulatory Updates",
        desc: "Rapidly evolving AML, KYC, GDPR, and Basel mandates require fast curriculum updates and verifiable learner completion.",
      },
      {
        title: "High Frontline Turnover",
        desc: "Branch staff and relationship teams need structured, role-specific onboarding that builds confidence without pulling mentors off the floor.",
      },
      {
        title: "Complex Financial Products",
        desc: "Advisors must master nuanced wealth, credit, insurance, and treasury offerings to recommend the right solutions accurately.",
      },
      {
        title: "Digital & FinTech Disruption",
        desc: "Core banking upgrades, AI tools, and cyber-fraud threats demand continuous upskilling across distributed branch networks.",
      },
    ],
    solutionsHeading: "Tailored Learning Solutions for Financial Teams",
    solutionsSubheading:
      "Purpose-built modules that translate policy, product, and systems training into measurable workplace performance.",
    solutions: [
      {
        icon: ShieldCheck,
        title: "Regulatory & Compliance Training",
        desc: "Interactive scenario-based courses covering AML, KYC, anti-bribery, data privacy, and Basel frameworks with audit-ready assessments.",
        tags: ["AML / KYC", "Data Privacy", "Audit Ready"],
      },
      {
        icon: AlertTriangle,
        title: "Risk Management & Fraud Prevention",
        desc: "Decision-making simulations that train teams to spot operational, credit, and cybersecurity threats before they escalate.",
        tags: ["Cyber Hygiene", "Operational Risk", "Case Studies"],
      },
      {
        icon: Cpu,
        title: "Core Banking & FinTech Proficiency",
        desc: "Guided software simulations and walkthroughs that accelerate adoption of new banking platforms, CRMs, and digital workflows.",
        tags: ["System Sims", "Digital Banking", "Zero Downtime"],
      },
      {
        icon: Users,
        title: "Frontline Onboarding & Teller Readiness",
        desc: "Role-based learning journeys that bring new tellers and branch associates up to speed quickly with consistent service standards.",
        tags: ["Role-Based", "Branch Ops", "Fast Ramp-Up"],
      },
      {
        icon: Briefcase,
        title: "Product Knowledge & Wealth Advisory",
        desc: "Bite-sized product deep dives and client-conversation scenarios for retail banking, lending, and wealth management teams.",
        tags: ["Product Mastery", "Advisory Skills", "Microlearning"],
      },
      {
        icon: TrendingUp,
        title: "Customer Experience & Sales Enablement",
        desc: "Realistic branching role-plays that sharpen consultative selling, objection handling, and trust-building with clients.",
        tags: ["Branching Scenarios", "Client Trust", "Consultative"],
      },
    ],
    formatsHeading: "How We Deliver for Banking & Finance",
    formats: [
      {
        icon: BookOpen,
        title: "Custom Scenario eLearning",
        desc: "Real-world branch and compliance dilemmas built for high retention.",
      },
      {
        icon: Gamepad2,
        title: "Gamified Compliance",
        desc: "Leaderboards, timed challenges, and badges that boost mandatory completion.",
      },
      {
        icon: Zap,
        title: "Just-in-Time Microlearning",
        desc: "3–5 minute mobile nuggets for quick product and policy refreshers.",
      },
      {
        icon: MonitorPlay,
        title: "Software Simulations",
        desc: "Risk-free practice inside simulated core banking and CRM interfaces.",
      },
    ],
    ctaTitle: "Ready to modernize learning across your banking network?",
    ctaBody:
      "Partner with Cilantra to build compliant, engaging training programs tailored to your financial teams.",
  },
  {
    slug: "pharma-and-healthcare",
    num: "02",
    name: "Pharma & Healthcare",
    tagline: "Where learning can change lives.",
    eyebrow: "Industry Solutions · Pharma & Healthcare",
    heroTitle: "e-Learning Solutions for",
    heroHighlight: "Pharma & Healthcare",
    heroSubtitle:
      "Deliver GxP-compliant, scientifically accurate, and engaging training programs for clinical, manufacturing, field sales, and hospital care teams.",
    heroImage: aboutWhy,
    overviewTitle: "Precision learning built for",
    overviewHighlight: "patient safety.",
    overviewParagraphs: [
      "In pharmaceuticals, medical devices, and healthcare delivery, accuracy and compliance directly impact patient outcomes. Traditional classroom sessions struggle to scale across global clinical teams and field representatives.",
      "Cilantra crafts validated, interactive digital learning experiences that simplify complex clinical protocols, reinforce SOPs, and keep medical and commercial teams aligned.",
    ],
    overviewMetrics: [
      { value: "100%", label: "Validated LMS & audit-trail ready modules" },
      { value: "3x", label: "Higher knowledge retention with visual 3D MOA" },
      { value: "24/7", label: "Mobile access for field & hospital teams" },
    ],
    challengesHeading: "Key Training Challenges in Pharma & Healthcare",
    challengesSubheading:
      "Supporting highly regulated environments where precision and speed are non-negotiable.",
    challenges: [
      {
        title: "Strict Regulatory Compliance",
        desc: "GxP, GMP, HIPAA, and pharmacovigilance standards demand verifiable training records and error-free execution.",
      },
      {
        title: "Complex Scientific Content",
        desc: "Mechanism-of-action (MOA) and clinical trial data require clear visual storytelling for diverse learner roles.",
      },
      {
        title: "Distributed Field Forces",
        desc: "Medical reps and clinical specialists need bite-sized, mobile-first updates between hospital and clinic visits.",
      },
      {
        title: "Patient-Centric Care Standards",
        desc: "Clinical staff require practical scenario practice to maintain empathy, hygiene, and emergency readiness.",
      },
    ],
    solutionsHeading: "Tailored Learning Solutions for Healthcare Teams",
    solutionsSubheading:
      "Designed with subject matter rigor and clear instructional design.",
    solutions: [
      {
        icon: FileCheck2,
        title: "GxP, GMP & Clinical Compliance",
        desc: "Structured, audit-ready courses covering SOP adherence, quality assurance, and adverse event reporting.",
        tags: ["GxP / GMP", "Pharmacovigilance", "Audit Ready"],
      },
      {
        icon: Microscope,
        title: "3D Mechanism of Action (MOA)",
        desc: "High-clarity 2D/3D animations visualizing disease pathways, drug interactions, and device mechanics.",
        tags: ["3D Animation", "Visual Science", "Product Launch"],
      },
      {
        icon: Stethoscope,
        title: "Clinical & Care Protocol Training",
        desc: "Interactive patient-care scenarios reinforcing safety checklists, triage accuracy, and bedside communication.",
        tags: ["Patient Safety", "Clinical Ops", "Scenarios"],
      },
      {
        icon: Users,
        title: "Medical Rep Onboarding & Enablement",
        desc: "Mobile microlearning nuggets equipping field reps with compliant messaging and scientific confidence.",
        tags: ["Field Force", "Mobile First", "Microlearning"],
      },
      {
        icon: HeartPulse,
        title: "Medical Device Simulations",
        desc: "Step-by-step interactive walkthroughs and virtual labs for safe equipment setup and troubleshooting.",
        tags: ["Device Training", "Interactive 3D", "Zero Risk"],
      },
      {
        icon: ShieldCheck,
        title: "HIPAA & Patient Data Privacy",
        desc: "Practical case studies teaching clinical and admin staff how to safeguard sensitive health information.",
        tags: ["Data Security", "HIPAA", "Role-Based"],
      },
    ],
    formatsHeading: "How We Deliver for Pharma & Healthcare",
    formats: [
      {
        icon: MonitorPlay,
        title: "3D & Video Explainers",
        desc: "Visual clarity for complex biology, pharmacology, and device workflows.",
      },
      {
        icon: Zap,
        title: "Field Microlearning",
        desc: "Fast, offline-capable bursts tailored for busy medical representatives.",
      },
      {
        icon: BookOpen,
        title: "Validated eLearning",
        desc: "SCORM/xAPI packages engineered for regulated LMS tracking.",
      },
      {
        icon: Gamepad2,
        title: "Diagnostic Scenarios",
        desc: "Branching clinical decision trees for safe skill reinforcement.",
      },
    ],
    ctaTitle: "Looking to elevate clinical or pharma training outcomes?",
    ctaBody:
      "Connect with Cilantra to design compliant, visually compelling healthcare learning programs.",
  },
  {
    slug: "telecom-and-it",
    num: "03",
    name: "Telecom & IT",
    tagline: "Where technology drives scale.",
    eyebrow: "Industry Solutions · Telecom & IT",
    heroTitle: "e-Learning Solutions for",
    heroHighlight: "Telecom & IT",
    heroSubtitle:
      "Accelerate technical onboarding, cloud & AI upskilling, and product rollouts across fast-moving engineering, support, and enterprise sales teams.",
    heroImage: svcElearning,
    overviewTitle: "Keep pace with",
    overviewHighlight: "rapid innovation.",
    overviewParagraphs: [
      "Technology and telecom enterprises ship new platforms, 5G services, and software releases every quarter. Static documentation leaves support, engineering, and partner ecosystems behind.",
      "Cilantra builds modular technical training, interactive software simulations, and scalable Moodle LMS portals that keep global tech teams sharp and certified.",
    ],
    overviewMetrics: [
      { value: "99%", label: "Uptime-backed LMS & portal engineering" },
      { value: "50%", label: "Quicker product rollout enablement" },
      { value: "Global", label: "Multilingual & multi-region scalability" },
    ],
    challengesHeading: "Key Training Challenges in Telecom & IT",
    challengesSubheading:
      "Bridging fast product cycles with distributed technical and customer-facing teams.",
    challenges: [
      {
        title: "Short Product & Tech Lifecycles",
        desc: "Frequent releases require modular courses that can be updated in days rather than months.",
      },
      {
        title: "Complex Software & Network Systems",
        desc: "Engineers and support staff need hands-on system practice without risking live production environments.",
      },
      {
        title: "Global Partner & Channel Networks",
        desc: "Resellers, field technicians, and support desks need consistent certification across geographies.",
      },
      {
        title: "Cybersecurity & Cloud Governance",
        desc: "Continuous awareness and secure-coding habits are essential across hybrid engineering teams.",
      },
    ],
    solutionsHeading: "Tailored Learning Solutions for Tech & Telecom",
    solutionsSubheading:
      "Practical digital enablement engineered for technical accuracy and speed.",
    solutions: [
      {
        icon: Cpu,
        title: "Software & System Simulations",
        desc: "Interactive Watch-Try-Do walkthroughs for enterprise SaaS, OSS/BSS tools, and network dashboards.",
        tags: ["Watch-Try-Do", "SaaS Tools", "Hands-On"],
      },
      {
        icon: Lock,
        title: "Cybersecurity & InfoSec Readiness",
        desc: "Gamified threat-detection scenarios covering phishing, cloud security, and incident response.",
        tags: ["InfoSec", "Cloud Governance", "Gamified"],
      },
      {
        icon: Zap,
        title: "Rapid Product Launch Enablement",
        desc: "Agile microlearning kits that equip sales engineers and support teams ahead of every release.",
        tags: ["GTM Readiness", "Microlearning", "Fast Turnaround"],
      },
      {
        icon: Users,
        title: "Technical Onboarding Academies",
        desc: "Structured role paths for developers, QA, DevOps, and customer success cohorts.",
        tags: ["Role Paths", "Certification", "Onboarding"],
      },
      {
        icon: BookOpen,
        title: "Channel & Partner Certification",
        desc: "Custom Moodle LMS portals with automated assessments, badges, and partner analytics.",
        tags: ["Moodle LMS", "Partner Portal", "Certifications"],
      },
      {
        icon: TrendingUp,
        title: "Customer Support & CX Simulations",
        desc: "Branching troubleshooting scenarios that improve first-contact resolution and CSAT.",
        tags: ["FCR Boost", "Troubleshooting", "Branching"],
      },
    ],
    formatsHeading: "How We Deliver for Telecom & IT",
    formats: [
      {
        icon: MonitorPlay,
        title: "Interactive System Sims",
        desc: "Guided practice inside realistic UI replicas.",
      },
      {
        icon: Zap,
        title: "Release Micro-Nuggets",
        desc: "Concise feature updates learners can finish in minutes.",
      },
      {
        icon: Gamepad2,
        title: "Tech Challenges & Badges",
        desc: "Competitive quizzes that reinforce architectural mastery.",
      },
      {
        icon: Cpu,
        title: "Custom LMS Ecosystems",
        desc: "Scalable Moodle platforms with SSO and API integrations.",
      },
    ],
    ctaTitle: "Ready to scale technical enablement across your organisation?",
    ctaBody:
      "Talk to Cilantra about building fast, modular e-Learning and LMS platforms for your tech workforce.",
  },
  {
    slug: "airlines-and-aviation",
    num: "04",
    name: "Airlines & Aviation",
    tagline: "From the ground to the skies.",
    eyebrow: "Industry Solutions · Airlines & Aviation",
    heroTitle: "e-Learning Solutions for",
    heroHighlight: "Airlines & Aviation",
    heroSubtitle:
      "Train ground staff, cabin crew, and technical operations teams with immersive safety, SOP, and service-excellence modules built for zero-error environments.",
    heroImage: svcVr,
    overviewTitle: "Safety, precision, and",
    overviewHighlight: "service excellence.",
    overviewParagraphs: [
      "Aviation demands unwavering compliance, split-second decision-making, and world-class passenger hospitality across hubs, hangars, and in-flight operations.",
      "Cilantra delivers interactive scenario training, 3D/VR equipment walkthroughs, and mobile refreshers that keep ground and cabin teams mission-ready.",
    ],
    overviewMetrics: [
      { value: "360°", label: "Immersive 3D & VR safety walkthrough readiness" },
      { value: "100%", label: "Standardized SOP alignment across hubs" },
      { value: "Mobile", label: "Offline-ready crew training anywhere" },
    ],
    challengesHeading: "Key Training Challenges in Airlines & Aviation",
    challengesSubheading:
      "Delivering zero-compromise safety and hospitality across shift-based global crews.",
    challenges: [
      {
        title: "Zero-Error Safety Protocols",
        desc: "Ramp operations, hazardous materials, and emergency drills require exact procedural mastery.",
      },
      {
        title: "Shift-Based & Mobile Crew",
        desc: "Cabin crew and ground personnel need flexible, bite-sized learning accessible between rosters.",
      },
      {
        title: "Consistent Passenger Experience",
        desc: "Frontline airport and in-flight teams must embody service excellence under high-pressure situations.",
      },
      {
        title: "Complex Equipment & Maintenance",
        desc: "Technical crews benefit from visual 3D and VR practice before stepping onto active tarmac zones.",
      },
    ],
    solutionsHeading: "Tailored Learning Solutions for Aviation Teams",
    solutionsSubheading:
      "Blending procedural accuracy with engaging, modern simulation design.",
    solutions: [
      {
        icon: Plane,
        title: "Ramp, Ground & Cabin Safety",
        desc: "Scenario-driven safety training covering emergency procedures, security checks, and tarmac awareness.",
        tags: ["Safety SOPs", "Emergency Drills", "Zero Error"],
      },
      {
        icon: Compass,
        title: "3D & VR Equipment Simulations",
        desc: "Immersive virtual walkthroughs for cabin equipment, cargo handling, and inspection routines.",
        tags: ["VR / 3D", "Hands-On", "Tarmac Ready"],
      },
      {
        icon: Users,
        title: "Passenger Hospitality & CX",
        desc: "Realistic role-play scenarios for check-in, disruption handling, and premium passenger care.",
        tags: ["Service Excellence", "De-escalation", "Role-Play"],
      },
      {
        icon: ShieldCheck,
        title: "Aviation Regulatory & DG Training",
        desc: "Auditable modules covering Dangerous Goods (DG), security compliance, and crew recertification.",
        tags: ["Recertification", "Compliance", "SCORM / xAPI"],
      },
      {
        icon: Zap,
        title: "Pre-Flight Micro-Refreshers",
        desc: "Quick mobile checklists and 3-minute boosters tailored for busy flight and ground schedules.",
        tags: ["Mobile Ready", "Microlearning", "Roster Friendly"],
      },
      {
        icon: Cpu,
        title: "Reservation & Ops System Training",
        desc: "Guided software simulations for PSS, departure control, and crew scheduling platforms.",
        tags: ["System Sims", "Ground Ops", "Fast Ramp-Up"],
      },
    ],
    formatsHeading: "How We Deliver for Airlines & Aviation",
    formats: [
      {
        icon: Compass,
        title: "Immersive VR & 3D",
        desc: "Safe virtual environments for complex cabin and ground drills.",
      },
      {
        icon: BookOpen,
        title: "Branching Crew Scenarios",
        desc: "Realistic passenger and emergency decision practice.",
      },
      {
        icon: Zap,
        title: "Roster-Friendly Microlearning",
        desc: "Short modules built for mobile tablets and phones.",
      },
      {
        icon: MonitorPlay,
        title: "2D/3D SOP Explainers",
        desc: "Clear visual guides for technical and safety workflows.",
      },
    ],
    ctaTitle: "Elevate safety and service readiness across your aviation teams.",
    ctaBody:
      "Partner with Cilantra to craft immersive, reliable training for ground, technical, and cabin crews.",
  },
  {
    slug: "retail-and-consumer",
    num: "05",
    name: "Retail & Consumer",
    tagline: "Where every interaction counts.",
    eyebrow: "Industry Solutions · Retail & Consumer",
    heroTitle: "e-Learning Solutions for",
    heroHighlight: "Retail & Consumer",
    heroSubtitle:
      "Empower store associates, merchandisers, and seasonal staff with fast, mobile-first product, POS, and customer-experience training.",
    heroImage: aboutHow,
    overviewTitle: "Turn every store visit into",
    overviewHighlight: "brand loyalty.",
    overviewParagraphs: [
      "Retail and consumer brands rely on frontline store teams to deliver memorable service, master seasonal collections, and execute merchandising standards across hundreds of locations.",
      "Cilantra designs vibrant, gamified microlearning and mobile onboarding experiences that fit naturally into store shifts and drive measurable sales lift.",
    ],
    overviewMetrics: [
      { value: "3-5m", label: "Shift-ready microlearning modules" },
      { value: "2x", label: "Faster seasonal & POS onboarding" },
      { value: "High", label: "Completion rates via gamified leaderboards" },
    ],
    challengesHeading: "Key Training Challenges in Retail & Consumer",
    challengesSubheading:
      "Keeping fast-moving, dispersed store teams knowledgeable and motivated.",
    challenges: [
      {
        title: "Seasonal & High Staff Turnover",
        desc: "New store associates need rapid, intuitive onboarding on brand values, POS, and floor etiquette.",
      },
      {
        title: "Constant Product Launches",
        desc: "Teams must quickly absorb new SKU features, pricing, and cross-selling recommendations.",
      },
      {
        title: "Limited Off-Floor Time",
        desc: "Store staff cannot sit through hour-long courses — training must work in 3–5 minute mobile bursts.",
      },
      {
        title: "Consistent Brand Standards",
        desc: "Visual merchandising, hygiene, and service quality must stay uniform across every store.",
      },
    ],
    solutionsHeading: "Tailored Learning Solutions for Retail Teams",
    solutionsSubheading:
      "Energetic, mobile-first training that translates directly to better store performance.",
    solutions: [
      {
        icon: ShoppingBag,
        title: "Seasonal Product & Collection Mastery",
        desc: "Visual, swipeable microlearning cards highlighting key product benefits and styling tips.",
        tags: ["SKU Mastery", "Visual Cards", "Mobile First"],
      },
      {
        icon: Gamepad2,
        title: "Gamified Sales & Upselling Challenges",
        desc: "Points, streaks, and store leaderboards that motivate associates to practice consultative selling.",
        tags: ["Leaderboards", "Gamification", "Sales Lift"],
      },
      {
        icon: Users,
        title: "Rapid Store Associate Onboarding",
        desc: "Day-one mobile journeys covering brand story, floor readiness, and customer greeting.",
        tags: ["Fast Onboarding", "Brand Culture", "Day-One Ready"],
      },
      {
        icon: Cpu,
        title: "POS & Inventory System Sims",
        desc: "Interactive touchscreen walkthroughs for checkout, returns, and omnichannel order fulfillment.",
        tags: ["POS Training", "Omnichannel", "System Sims"],
      },
      {
        icon: Sparkles,
        title: "Visual Merchandising Standards",
        desc: "Before-and-after photo challenges and short video guides for flawless store displays.",
        tags: ["Merchandising", "Video Guides", "Store Ops"],
      },
      {
        icon: ShieldCheck,
        title: "Store Safety & Loss Prevention",
        desc: "Practical scenario modules covering shrinkage prevention, workplace safety, and compliance.",
        tags: ["Loss Prevention", "Store Safety", "Scenarios"],
      },
    ],
    formatsHeading: "How We Deliver for Retail & Consumer",
    formats: [
      {
        icon: Zap,
        title: "Shift-Friendly Microlearning",
        desc: "Quick mobile modules designed for pre-shift huddles.",
      },
      {
        icon: Gamepad2,
        title: "Gamified Quizzes & Streaks",
        desc: "Friendly store-vs-store engagement that sticks.",
      },
      {
        icon: MonitorPlay,
        title: "Short Explainer Videos",
        desc: "Crisp product demos and customer-handling clips.",
      },
      {
        icon: Cpu,
        title: "Interactive POS Sims",
        desc: "Hands-on practice for checkout and inventory tools.",
      },
    ],
    ctaTitle: "Want confident, high-performing teams in every store?",
    ctaBody:
      "Let Cilantra build mobile-first retail training that drives engagement and customer satisfaction.",
  },
  {
    slug: "oil-and-gas",
    num: "06",
    name: "Oil & Gas",
    tagline: "Where every decision matters.",
    eyebrow: "Industry Solutions · Oil & Gas",
    heroTitle: "e-Learning Solutions for",
    heroHighlight: "Oil & Gas",
    heroSubtitle:
      "Deliver HSE-compliant, immersive 3D/VR, and technical operations training engineered for high-risk upstream, midstream, and downstream environments.",
    heroImage: aboutDrives,
    overviewTitle: "High-reliability training for",
    overviewHighlight: "high-stakes operations.",
    overviewParagraphs: [
      "Across rigs, refineries, pipelines, and plants, procedural discipline and hazard awareness protect lives, assets, and the environment. Classroom theory alone cannot replicate field complexity.",
      "Cilantra creates realistic HSE scenarios, 3D equipment simulations, and VR safety walkthroughs that prepare engineers and technicians safely before they step on site.",
    ],
    overviewMetrics: [
      { value: "HSE", label: "Audit-ready safety & compliance tracking" },
      { value: "3D/VR", label: "Zero-risk simulation of hazardous environments" },
      { value: "Global", label: "Multilingual delivery for remote site crews" },
    ],
    challengesHeading: "Key Training Challenges in Oil & Gas",
    challengesSubheading:
      "Preparing technical crews for complex machinery and strict HSE mandates.",
    challenges: [
      {
        title: "High-Risk Field Environments",
        desc: "Workers need realistic practice in hazard identification and emergency response without physical exposure.",
      },
      {
        title: "Complex Plant & Rig Equipment",
        desc: "Valves, turbines, and control systems require clear 3D visualization for accurate maintenance.",
      },
      {
        title: "Remote & Multilingual Crews",
        desc: "Offshore and field personnel require offline-capable, localized training in multiple languages.",
      },
      {
        title: "Strict HSE & Regulatory Audits",
        desc: "Permit-to-work, lockout/tagout, and environmental rules demand verifiable completion records.",
      },
    ],
    solutionsHeading: "Tailored Learning Solutions for Energy & Field Teams",
    solutionsSubheading:
      "Combining engineering clarity with immersive 3D, VR, and scenario-based safety training.",
    solutions: [
      {
        icon: ShieldCheck,
        title: "HSE & Permit-to-Work Compliance",
        desc: "Interactive safety modules covering LOTO, confined spaces, H2S awareness, and emergency response.",
        tags: ["HSE", "LOTO", "Audit Ready"],
      },
      {
        icon: Compass,
        title: "3D & VR Hazard Simulations",
        desc: "Virtual plant and rig walkthroughs where crews practice inspections and incident response safely.",
        tags: ["VR Training", "3D Models", "Zero Risk"],
      },
      {
        icon: Wrench,
        title: "Equipment Operation & Maintenance",
        desc: "Step-by-step animated procedures for assembly, calibration, and preventive maintenance.",
        tags: ["Technical Ops", "3D Animation", "SOPs"],
      },
      {
        icon: Gauge,
        title: "Process & Control Room Training",
        desc: "Scenario-based simulations helping operators diagnose anomalies and optimize plant safety.",
        tags: ["Process Control", "Simulations", "Decision Making"],
      },
      {
        icon: Factory,
        title: "Contractor & Site Induction",
        desc: "Standardized digital inductions ensuring every visitor and contractor meets site safety rules.",
        tags: ["Site Induction", "Contractors", "Pre-Arrival"],
      },
      {
        icon: Zap,
        title: "Toolbox Talk Micro-Modules",
        desc: "3-minute multilingual safety refreshers built for daily shift briefings and remote tablets.",
        tags: ["Multilingual", "Microlearning", "Offline Ready"],
      },
    ],
    formatsHeading: "How We Deliver for Oil & Gas",
    formats: [
      {
        icon: Compass,
        title: "Immersive VR & 3D",
        desc: "Interactive equipment and hazard simulations for safe field readiness.",
      },
      {
        icon: MonitorPlay,
        title: "Technical 3D Animations",
        desc: "Cutaway views showing internal machinery and process flows.",
      },
      {
        icon: BookOpen,
        title: "Scenario HSE Modules",
        desc: "Branching emergency and safety decision training.",
      },
      {
        icon: Zap,
        title: "Multilingual Microlearning",
        desc: "Concise safety boosters localized for global site crews.",
      },
    ],
    ctaTitle: "Ready to strengthen HSE and technical readiness across your sites?",
    ctaBody:
      "Connect with Cilantra to build immersive, auditable training for your energy workforce.",
  },
];

export function getIndustryBySlug(slug?: string): IndustryData | undefined {
  return INDUSTRIES.find((ind) => ind.slug === slug);
}
