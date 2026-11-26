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
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "custom-elearning",
    icon: BookOpen,
    title: "Custom e-Learning Solutions",
    eyebrow: "e-Learning Design",
    headline: "Scenario-Based & Role-Relevant Training",
    short: "Tailored corporate training, Levels 1–3 interactive modules, and Flash to HTML5 conversion.",
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
      { icon: BookOpen, title: "Custom Modules", desc: "Bespoke interactive courses aligned to your KPIs." },
      { icon: Layers, title: "Flash to HTML5", desc: "Modernize legacy courses for mobile and modern browsers." },
      { icon: FileText, title: "SME Content", desc: "Structured storyboards crafted with subject experts." },
      { icon: Sparkles, title: "Narrative Design", desc: "Learner-centered storytelling for higher retention." },
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
    short: "Gamified learning modules and microlearning nuggets for critical concepts.",
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
      { icon: Gamepad2, title: "Learning Games", desc: "Reward mechanics and challenges that drive completion." },
      { icon: Sparkles, title: "Microlearning", desc: "Focused 3–5 minute modules for busy teams." },
      { icon: Layers, title: "Simulations", desc: "Safe practice environments for real decisions." },
      { icon: BookOpen, title: "Knowledge Checks", desc: "Interactive reinforcement that sticks." },
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
    short: "Incorporate visual mediums such as 3D graphics, animations, and simulations.",
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
      { icon: Video, title: "Motion & Explainers", desc: "Dynamic visual explanations for fast comprehension." },
      { icon: Box, title: "3D Design", desc: "Detailed 3D models and technical simulations." },
      { icon: Sparkles, title: "Whiteboard Videos", desc: "Clear narrative-driven visual storytelling." },
      { icon: Layers, title: "Visual Assets", desc: "Custom illustrations and rich media libraries." },
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
    short: "Full-stack web and mobile apps plus complete Moodle LMS setup and management.",
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
      { icon: Globe, title: "Websites & Portals", desc: "Modern, responsive web platforms built to scale." },
      { icon: Smartphone, title: "Mobile Apps", desc: "Cross-platform mobile apps for learning and business." },
      { icon: GraduationCap, title: "Moodle LMS", desc: "End-to-end Moodle setup, theming, and plugins." },
      { icon: Cpu, title: "99% Uptime Ops", desc: "24/7 monitoring, maintenance, and support." },
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
    short: "Cohesive corporate branding, intuitive UI/UX design, and learning graphics.",
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
      { icon: Palette, title: "Brand Identity", desc: "Logos, color systems, and visual guidelines." },
      { icon: Layers, title: "UI/UX Design", desc: "User-centered interfaces for web and mobile." },
      { icon: FileText, title: "Infographics", desc: "Visual summaries that simplify complex data." },
      { icon: Sparkles, title: "Course Templates", desc: "Consistent, branded e-Learning frameworks." },
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
    short: "Immersive AR/VR training environments plus voice recording and sound mixing.",
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
      { icon: Glasses, title: "VR & AR Solutions", desc: "Immersive hands-on environments for safe practice." },
      { icon: Volume2, title: "Voice Recording", desc: "Crisp, clear narration for e-Learning and video." },
      { icon: Headphones, title: "Sound Mixing", desc: "Professional editing, mastering, and SFX." },
      { icon: Box, title: "Interactive 3D", desc: "Spatial learning experiences on web and headsets." },
    ],
    ctaTitle: "Exploring AR/VR training or studio audio production?",
    ctaBody: "Talk to our multimedia specialists about your next immersive project.",
  },
];

export default function ServicesPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="section section-waves relative overflow-hidden">
        <div className="container-px mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="eyebrow">What We Do</span>
            <h1 className="display-h1 mt-3">
              e-Learning &amp;{" "}
              <span className="text-primary">Technology Solutions</span>
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl">
              An integrated suite of in-house e-Learning design and technology
              services — delivered with zero subcontracting and quarterly
              quality checks.
            </p>
          </div>

          {/* Quick nav */}
          <div className="mt-8 flex flex-wrap gap-2">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="px-3 py-1.5 rounded-full text-xs font-medium border border-border bg-card hover:border-primary/40 hover:text-primary transition-colors"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service sections */}
      {services.map((s, idx) => (
        <section
          key={s.id}
          id={s.id}
          className={`section ${idx % 2 === 1 ? "section-dots" : "section-grid"}`}
        >
          <div className="container-px mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={idx % 2 === 1 ? "lg:order-2" : ""}
              >
                <span className="eyebrow">{s.eyebrow}</span>
                <h2 className="display-h2 mt-3">{s.headline}</h2>
                {s.paragraphs.map((p, i) => (
                  <p key={i} className="mt-4 text-muted-foreground leading-relaxed">
                    {p}
                  </p>
                ))}
                <ul className="mt-6 space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button size="lg" className="mt-8" asChild>
                  <Link to="/contact">
                    Talk to Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`grid sm:grid-cols-2 gap-4 ${idx % 2 === 1 ? "lg:order-1" : ""}`}
              >
                {s.buildItems.map((bi) => (
                  <div key={bi.title} className="card-elegant p-5">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <bi.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="mt-3 font-semibold text-sm">{bi.title}</h4>
                    <p className="mt-1 text-xs text-muted-foreground">{bi.desc}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="mt-10 relative overflow-hidden rounded-2xl bg-primary text-primary-foreground p-6 md:p-8 shadow-elegant">
              <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-gold/20 blur-3xl pointer-events-none" />
              <div className="relative flex flex-col md:flex-row md:items-center gap-6">
                <div className="h-14 w-14 rounded-2xl bg-primary-foreground/10 flex items-center justify-center shrink-0">
                  <s.icon className="h-7 w-7" />
                </div>
                <div className="flex-1">
                  <h4 className="font-display text-xl">{s.ctaTitle}</h4>
                  <p className="mt-1 text-primary-foreground/80 text-sm max-w-xl">
                    {s.ctaBody}
                  </p>
                </div>
                <Button variant="gold" asChild className="shrink-0">
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
