import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BookOpen,
  Gamepad2,
  Video,
  Globe,
  Palette,
  Headphones,
  ArrowRight,
  Layers,
  Sparkles,
  FileText,
  Cpu,
  Smartphone,
  GraduationCap,
  Volume2,
  Glasses,
  Box,
  CheckCircle2,
  Code2,
  Users,
  Clapperboard,
  MonitorPlay,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";

import aboutHero from "@/assets/about-hero.jpg";

interface BuildItem {
  icon: typeof BookOpen;
  title: string;
  desc: string;
}

interface ServiceTopic {
  id: string;
  icon: typeof BookOpen;
  title: string;
  eyebrow: string;
  headline: string;
  paragraphs: string[];
  items: string[];
  buildItems: BuildItem[];
  ctaTitle: string;
  ctaBody: string;
}

const services: ServiceTopic[] = [
  {
    id: "custom-elearning",
    icon: GraduationCap,
    title: "Custom e-Learning Solutions",
    eyebrow: "e-Learning Design",
    headline: "Scenario-Based & Role-Relevant Training",
    paragraphs: [
      "We help organizations looking to train their employees, partners, and customers switch seamlessly to web and mobile-based training.",
      "Our instructional designers and Subject Matter Experts (SMEs) build role-based, scenario-driven curricula with emotional engagement that puts the learner at the center.",
    ],
    items: [
      "Custom e-Learning Solutions (Levels 1–3)",
      "Flash to HTML5 Conversion",
      "Scenario-Based & Role-Based Learning",
      "Subject Matter Expert (SME) Authoring",
      "SCORM / xAPI Compliant Delivery",
    ],
    buildItems: [
      {
        icon: MonitorPlay,
        title: "Custom Modules",
        desc: "Bespoke interactive courses aligned to your KPIs.",
      },
      {
        icon: Code2,
        title: "Flash to HTML5",
        desc: "Modernize legacy courses for mobile and modern browsers.",
      },
      {
        icon: Users,
        title: "SME Content",
        desc: "Structured storyboards crafted with subject experts.",
      },
      {
        icon: Layers,
        title: "Narrative Design",
        desc: "Learner-centered storytelling for higher retention.",
      },
    ],
    ctaTitle: "Need custom e-Learning built for your workforce?",
    ctaBody: "Let's turn your training materials into engaging web and mobile courses.",
  },
  {
    id: "gamification",
    icon: Gamepad2,
    title: "Game-Based e-Learning & Microlearning",
    eyebrow: "Interactive Reinforcement",
    headline: "Boost Retention Through Play & Bite-Sized Learning",
    paragraphs: [
      "Passive slide decks don't change behaviour. We add interactivity tools such as gamification for reinforcement and design microlearning bursts to deliver critical concepts right when learners need them.",
      "Our game-based solutions turn complex compliance, sales, and operational training into memorable challenges.",
    ],
    items: [
      "Game-Based e-Learning Modules",
      "Gamification & Leaderboards",
      "Microlearning Nuggets",
      "Interactive Assessments & Quizzes",
      "Branching Decision Simulations",
    ],
    buildItems: [
      {
        icon: Gamepad2,
        title: "Learning Games",
        desc: "Reward mechanics and challenges that drive completion.",
      },
      {
        icon: Sparkles,
        title: "Microlearning",
        desc: "Focused 3–5 minute modules for busy teams.",
      },
      {
        icon: Layers,
        title: "Simulations",
        desc: "Safe practice environments for real decisions.",
      },
      {
        icon: BookOpen,
        title: "Knowledge Checks",
        desc: "Interactive reinforcement that sticks.",
      },
    ],
    ctaTitle: "Want higher engagement and completion rates?",
    ctaBody: "Bring gamification and microlearning into your training ecosystem.",
  },
  {
    id: "video-animation",
    icon: Video,
    title: "Video, Animation & 3D Design",
    eyebrow: "Visual Storytelling",
    headline: "2D/3D Animations, Simulations & Explainer Videos",
    paragraphs: [
      "Complex concepts become effortless to understand when visualized clearly. Our creative studio produces 2D/3D animations, whiteboard explainers, and detailed 3D product simulations.",
      "Every visual asset is crafted in-house to maintain consistent brand quality and instructional clarity.",
    ],
    items: [
      "2D & 3D Animation Services",
      "3D Design & Product Simulations",
      "Whiteboard & Motion Graphics",
      "Explainer & Training Videos",
      "Interactive Video Modules",
    ],
    buildItems: [
      {
        icon: Clapperboard,
        title: "Motion & Explainers",
        desc: "Dynamic visual explanations for fast comprehension.",
      },
      {
        icon: Box,
        title: "3D Design",
        desc: "Detailed 3D models and technical simulations.",
      },
      {
        icon: Sparkles,
        title: "Whiteboard Videos",
        desc: "Clear narrative-driven visual storytelling.",
      },
      {
        icon: Layers,
        title: "Visual Assets",
        desc: "Custom illustrations and rich media libraries.",
      },
    ],
    ctaTitle: "Looking for high-impact training videos or 3D visuals?",
    ctaBody: "Our in-house animators and 3D artists bring your concepts to life.",
  },
  {
    id: "web-lms",
    icon: Globe,
    title: "Websites, Apps & Moodle LMS",
    eyebrow: "Technology Solutions",
    headline: "Scalable Digital Platforms & Learning Management",
    paragraphs: [
      "Beyond content, Cilantra delivers full-stack Technology Solutions — from custom websites and mobile applications to enterprise Moodle LMS implementations.",
      "Backed by 99% uptime and 24/7 support 365 days a year, our engineering team ensures your digital platforms stay fast, secure, and reliable.",
    ],
    items: [
      "Custom Websites & Web Applications",
      "Mobile App Development (iOS & Android)",
      "Moodle LMS Setup & Customization",
      "LMS Administration & 24/7 Support",
      "API Integrations & Portals",
    ],
    buildItems: [
      {
        icon: Globe,
        title: "Websites & Portals",
        desc: "Modern, responsive web platforms built to scale.",
      },
      {
        icon: Smartphone,
        title: "Mobile Apps",
        desc: "Cross-platform mobile apps for learning and business.",
      },
      {
        icon: GraduationCap,
        title: "Moodle LMS",
        desc: "End-to-end Moodle setup, theming, and plugins.",
      },
      {
        icon: Cpu,
        title: "99% Uptime Ops",
        desc: "24/7 monitoring, maintenance, and support.",
      },
    ],
    ctaTitle: "Need a reliable web app, mobile app, or Moodle LMS?",
    ctaBody: "Partner with an in-house engineering team committed to 99% uptime.",
  },
  {
    id: "branding-design",
    icon: Palette,
    title: "Branding & UI/UX Designing",
    eyebrow: "Creative Identity",
    headline: "Strategic UI/UX, Infographics & Visual Identity",
    paragraphs: [
      "Great technology and learning experiences start with intuitive design. Our UI/UX designers craft clean, accessible interfaces and compelling brand identities that elevate your digital presence.",
      "From infographics and course templates to complete brand systems, we design with clarity and purpose.",
    ],
    items: [
      "Corporate Branding & Visual Identity",
      "Web & Mobile UI/UX Design",
      "Infographics & Visual Job Aids",
      "Design Systems & Wireframing",
      "Presentation & Collateral Design",
    ],
    buildItems: [
      {
        icon: Palette,
        title: "Brand Identity",
        desc: "Logos, color systems, and visual guidelines.",
      },
      {
        icon: Layers,
        title: "UI/UX Design",
        desc: "User-centered interfaces for web and mobile.",
      },
      {
        icon: FileText,
        title: "Infographics",
        desc: "Visual summaries that simplify complex data.",
      },
      {
        icon: Sparkles,
        title: "Course Templates",
        desc: "Consistent, branded e-Learning frameworks.",
      },
    ],
    ctaTitle: "Ready to refresh your brand or product UI/UX?",
    ctaBody: "Let's create a visual identity that stands out across every screen.",
  },
  {
    id: "ar-vr-audio",
    icon: Headphones,
    title: "AR / VR & Audio Production",
    eyebrow: "Immersive & Multimedia",
    headline: "Augmented Reality, Virtual Reality & Studio Audio",
    paragraphs: [
      "Bridge physical and digital environments with Augmented Reality and Virtual Reality training simulations ideal for safety, technical, and hands-on skill building.",
      "Our multimedia team also provides complete audio production — voiceover recording, sound making, sound mixing, and editing — to give every course broadcast-grade polish.",
    ],
    items: [
      "Virtual Reality (VR) Training Simulations",
      "Augmented Reality (AR) Experiences",
      "Voice Recording & Multilingual VO",
      "Sound Mixing & Audio Editing",
      "Custom Sound Design",
    ],
    buildItems: [
      {
        icon: Glasses,
        title: "VR & AR Solutions",
        desc: "Immersive hands-on environments for safe practice.",
      },
      {
        icon: Volume2,
        title: "Voice Recording",
        desc: "Crisp, clear narration for e-Learning and video.",
      },
      {
        icon: Headphones,
        title: "Sound Mixing",
        desc: "Professional editing, mastering, and SFX.",
      },
      {
        icon: Box,
        title: "Interactive 3D",
        desc: "Spatial learning experiences on web and headsets.",
      },
    ],
    ctaTitle: "Exploring AR/VR training or studio audio production?",
    ctaBody: "Talk to our multimedia specialists about your next immersive project.",
  },
];

export default function ServicesPage() {
  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#FAF8F5] section-grid border-b border-black/[0.06]">
        {/* Subtle diagonal warm sand plane */}
        <div
          className="hidden lg:block absolute inset-y-0 right-0 w-[46%] bg-[#F6F1EA]/80 -skew-x-12 translate-x-16 pointer-events-none"
          aria-hidden="true"
        />

        <div className="container-px mx-auto max-w-7xl relative py-16 md:py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="lg:col-span-6"
            >
              <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#FF5E0D]">
                <span className="h-[1.5px] w-6 bg-[#FF5E0D]" />
                What We Do
              </span>

              <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight leading-[1.08] text-[#1E1B18]">
                e-Learning &amp;
                <span className="block text-[#FF5E0D]">Technology Solutions</span>
              </h1>

              <p className="mt-5 text-base md:text-[17px] text-[#574F49] leading-relaxed max-w-xl">
                An integrated suite of in-house e-Learning design and technology
                services — delivered with zero subcontracting and quarterly
                quality checks.
              </p>

              {/* Quick-jump pill badges */}
              <div className="mt-8 flex flex-wrap gap-2.5">
                {services.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-medium bg-white border border-black/[0.08] text-[#1E1B18] shadow-[0_6px_16px_-10px_rgba(30,27,24,0.14)] hover:border-[#FF5E0D]/45 hover:text-[#FF5E0D] transition-all"
                  >
                    <s.icon className="h-3.5 w-3.5 text-[#FF5E0D] shrink-0" />
                    <span>{s.title}</span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Crisp Editorial Photo Frame */}
            <motion.div
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="lg:col-span-6"
            >
              <div className="rounded-3xl overflow-hidden border-[5px] border-white shadow-[0_24px_60px_-20px_rgba(30,27,24,0.22)] aspect-[4/3] bg-[#FAF8F5]">
                <img
                  src={aboutHero}
                  alt="Cilantra e-Learning and Technology leadership team"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Unified Service Sections (identical structured UI for every topic) */}
      {services.map((s, idx) => (
        <section
          key={s.id}
          id={s.id}
          className={`section relative overflow-hidden border-b border-black/[0.05] ${
            idx % 2 === 0 ? "bg-white section-grid" : "bg-[#FAF8F5] section-dots"
          }`}
        >
          <div className="container-px mx-auto max-w-7xl relative">
            {/* Full-Width Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#FF5E0D]">
                <span className="h-[1.5px] w-5 bg-[#FF5E0D]" />
                {s.eyebrow}
              </span>

              <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold tracking-tight leading-[1.15] text-[#1E1B18]">
                {s.headline}
              </h2>
            </motion.div>

            {/* Narrative & Deliverables Row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="mt-6 grid lg:grid-cols-12 gap-8 lg:gap-10 items-start"
            >
              <div className="lg:col-span-7">
                <div className="space-y-3.5 text-sm md:text-[15px] text-[#574F49] leading-relaxed">
                  {s.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                <Button
                  size="lg"
                  className="mt-6 rounded-full bg-[#FF5E0D] hover:bg-[#EB061A] text-white px-6 shadow-[0_10px_24px_-8px_rgba(255,94,13,0.45)]"
                  asChild
                >
                  <Link to="/contact">
                    Talk to Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="lg:col-span-5 rounded-2xl bg-white/90 border border-black/[0.07] p-5 shadow-[0_8px_24px_-16px_rgba(30,27,24,0.12)]">
                <ul className="space-y-2.5">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm font-medium text-[#1E1B18]"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#FF5E0D] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* 4 Architectural Capability Boxes (Full Width Below) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {s.buildItems.map((bi, biIdx) => (
                <div
                  key={bi.title}
                  className="group rounded-2xl bg-white border border-black/[0.07] p-5 shadow-[0_10px_28px_-16px_rgba(30,27,24,0.14)] hover:border-[#FF5E0D]/35 hover:shadow-[0_18px_36px_-16px_rgba(255,94,13,0.18)] transition-all flex flex-col justify-between min-h-[164px]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="h-10 w-10 rounded-xl bg-[#FFF4EE] border border-[#FF5E0D]/15 flex items-center justify-center shrink-0">
                      <bi.icon className="h-5 w-5 text-[#FF5E0D]" strokeWidth={1.85} />
                    </div>
                    <span className="text-[11px] font-semibold tracking-wider text-[#1E1B18]/25">
                      0{biIdx + 1}
                    </span>
                  </div>

                  <div className="mt-5">
                    <h3 className="font-display font-bold text-[15px] text-[#1E1B18] leading-snug">
                      {bi.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-[#6B625B] leading-relaxed">
                      {bi.desc}
                    </p>
                    <div className="mt-4 h-[2px] w-8 rounded-full bg-[#FF5E0D]/30 group-hover:w-12 group-hover:bg-[#FF5E0D] transition-all" />
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Bottom Full-Width Executive Dark CTA Banner */}
            <div className="mt-10 relative overflow-hidden rounded-2xl bg-[#1E1B18] text-white p-6 md:px-8 md:py-7 shadow-[0_20px_48px_-20px_rgba(30,27,24,0.45)] border border-white/10">
              <div
                className="absolute -right-12 -top-12 h-52 w-52 rounded-full bg-[#FF5E0D]/20 blur-3xl pointer-events-none"
                aria-hidden="true"
              />
              <div className="relative flex flex-col md:flex-row md:items-center gap-5 md:gap-6">
                <div className="h-12 w-12 md:h-14 md:w-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                  <s.icon className="h-6 w-6 md:h-7 md:w-7 text-[#F89E2C]" />
                </div>
                <div className="flex-1">
                  <h4 className="font-display text-lg md:text-xl font-bold text-white">
                    {s.ctaTitle}
                  </h4>
                  <p className="mt-1 text-white/75 text-sm max-w-2xl">
                    {s.ctaBody}
                  </p>
                </div>
                <Button
                  asChild
                  className="shrink-0 rounded-full bg-[#FF5E0D] text-white hover:bg-[#EB061A] px-6 shadow-[0_10px_24px_-8px_rgba(255,94,13,0.55)]"
                >
                  <Link to="/contact">
                    Talk to Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      ))}
    </SiteLayout>
  );
}
