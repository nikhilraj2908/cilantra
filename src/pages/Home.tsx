import { Link, useLocation } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useInView,
  useScroll,
  useTransform,
  useMotionValueEvent,
  type MotionValue,
} from "framer-motion";
import {
  ArrowRight,
  Building2,
  Banknote,
  ShoppingBag,
  Factory,
  HeartPulse,
  Cpu,
  BookOpen,
  Gamepad2,
  Video,
  Globe,
  Palette,
  Headphones,
  CheckCircle2,
  Users2,
  Sparkles,
  Award,
  ShieldCheck,
  Clock,
  Lightbulb,
  Compass,
  Fingerprint,
  TrendingUp,
  Box,
  Layers,
  GraduationCap,
  Glasses,
  Mic2,
  Volume2,
  Zap,
  Landmark,
  Plane,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import heroCollabTech from "@/assets/hero-collab-tech.png";
import heroCollabTeam from "@/assets/hero-collab-team.png";
import heroFuturisticElearning from "@/assets/hero-futuristic-elearning.png";
import aboutTeam from "@/assets/about-team.jpg";
import servicesElearningBg from "@/assets/services-elearning-bg.jpg";
import servicesTechBg from "@/assets/services-tech-bg.jpg";
import servicesVrBg from "@/assets/services-vr-bg.jpg";
import posterTechnology from "@/assets/poster-technology.jpg";

const heroSlides = [
  { src: heroCollabTeam, alt: "Collaborative Teamwork in a Modern Office", word: "become." },
  { src: heroCollabTech, alt: "Collaborative Corporate Tech Training", word: "achieve." },
  { src: heroFuturisticElearning, alt: "Futuristic E-Learning Interface in Modern Office", word: "create." },
  { src: heroCollabTech, alt: "Collaborative Corporate Tech Training", word: "transform." },
];

/* ── Brand data ─────────────────────────────────────────────────────────── */
const industries = [
  { icon: Banknote, label: "BFSI" },
  { icon: ShoppingBag, label: "Retail & FMCG" },
  { icon: Factory, label: "Manufacturing" },
  { icon: HeartPulse, label: "Healthcare & Pharma" },
  { icon: Cpu, label: "Technology" },
  { icon: Building2, label: "Enterprise & Education" },
];

const differentiators = [
  {
    title: "Innovation",
    body: "We conceptualize, design, and architect compelling learning and digital experiences for the web and mobile world.",
    icon: Lightbulb,
  },
  {
    title: "In-House Team",
    body: "Combined creativity of content developers, instructional designers, UI designers, software engineers, and strategic thinkers.",
    icon: Users2,
  },
  {
    title: "Excellence",
    body: "Excellence is not a coincidence. We deliver outstanding outcomes through smart ideas and meticulous execution.",
    icon: Award,
  },
  {
    title: "No Subcontract Policy",
    body: "We adhere to a strict self-imposed no-subcontract policy with continuous in-house training and quarterly quality checks.",
    icon: ShieldCheck,
  },
  {
    title: "24/7 Support & 99% Uptime",
    body: "24/7 support, 365 days a year with 99% uptime and robust mechanisms to collect customer feedback for continuous improvement.",
    icon: Clock,
  },
  {
    title: "Tech-Enabled & Integrated",
    body: "An integrated, collaborative approach catering to every business need — from custom e-learning to full-stack digital platforms.",
    icon: Sparkles,
  },
];

const services = [
  { icon: BookOpen, title: "Custom e-Learning Solutions", href: "/services#custom-elearning" },
  { icon: Gamepad2, title: "Game-Based e-Learning", href: "/services#gamification" },
  { icon: Video, title: "Video, Animation & 3D", href: "/services#video-animation" },
  { icon: Globe, title: "Websites, Apps & Moodle LMS", href: "/services#web-lms" },
  { icon: Palette, title: "Branding, UI/UX & Microlearning", href: "/services#branding-design" },
  { icon: Headphones, title: "AR / VR & Audio Production", href: "/services#ar-vr-audio" },
];

const stats = [
  { value: "1000+", label: "Learning Complete" },
  { value: "250+", label: "Completed Projects" },
  { value: "35+", label: "Happy Clients" },
  { value: "4", label: "Continents Served" },
];

/* ── Page ───────────────────────────────────────────────────────────────── */
export default function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <SiteLayout>
      <HeroSection />
      <StatsSection />
      <WhatDrivesUsSection />
      <ServicesSection />
      <IndustriesSection />
      <CTASection />
    </SiteLayout>
  );
}

/* ── Hero ───────────────────────────────────────────────────────────────── */
function HeroSection() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSlide((s) => (s + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-[#FDFBF8]">
      {/* Permanently mounted crossfade layers (zero unmount flash or opacity dip) */}
      <div className="absolute inset-0">
        <img
          src={heroCollabTeam}
          alt="Collaborative Teamwork in a Modern Office"
          className="h-full w-full object-cover object-center"
        />
        <motion.img
          src={heroCollabTech}
          alt="Collaborative Corporate Tech Training"
          initial={false}
          animate={{ opacity: heroSlides[slide].src === heroCollabTech ? 1 : 0 }}
          transition={{ duration: 1.05, ease: "easeInOut" }}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <motion.img
          src={heroFuturisticElearning}
          alt="Futuristic E-Learning Interface in Modern Office"
          initial={false}
          animate={{ opacity: heroSlides[slide].src === heroFuturisticElearning ? 1 : 0 }}
          transition={{ duration: 1.05, ease: "easeInOut" }}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>

      {/* Center-feathered readability gradient (no solid white patch on far left) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(253,251,248,0.68) 0%, rgba(253,251,248,0.86) 28%, rgba(253,251,248,0.82) 45%, rgba(253,251,248,0.34) 62%, rgba(253,251,248,0) 76%)",
        }}
      />
      {/* Mobile subtle readability veil */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[#FDFBF8]/55 lg:hidden"
      />

      {/* Subtle warm orange bottom-right wave accent */}
      <svg
        aria-hidden="true"
        viewBox="0 0 600 140"
        preserveAspectRatio="none"
        className="pointer-events-none absolute bottom-0 right-0 w-[340px] md:w-[520px] h-[72px] md:h-[108px] z-[5]"
      >
        <path
          d="M0,140 C160,130 270,88 410,55 C500,34 555,14 600,0 L600,140 Z"
          fill="#FF5E0D"
          fillOpacity="0.9"
        />
        <path
          d="M80,140 C220,122 330,96 470,68 C535,54 575,40 600,28 L600,140 Z"
          fill="#F89E2C"
          fillOpacity="0.45"
        />
      </svg>

      <div className="container-px mx-auto max-w-7xl relative z-10">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2.5 text-sm sm:text-[0.92rem] font-semibold uppercase tracking-[0.16em] text-[#D97706]">
            <span className="block h-[1.5px] w-8 bg-[#F89E2C]" />
            BEYOND LEARNING. BEYOND TECHNOLOGY.
          </span>
          <h1 className="font-display text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.08] mt-4 text-[#1E1B18] font-bold tracking-tight">
            Imagine what your people
            <br />
            <span className="whitespace-nowrap">
              could{" "}
              <span className="inline-block text-[#FF5E0D]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={heroSlides[slide].word}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35 }}
                    className="inline-block"
                  >
                    {heroSlides[slide].word}
                  </motion.span>
                </AnimatePresence>
              </span>
            </span>
          </h1>
          <p className="mt-5 text-base md:text-[17px] text-[#574F49] leading-relaxed max-w-lg">
            We believe the greatest possibilities lie within people. Through
            transformative learning experiences, innovative technologies and
            connected digital platforms, Cilantra empowers organisations to
            unlock human potential and create lasting business impact.
          </p>
          <div className="mt-7">
            <Link
              to="/services"
              className="group inline-flex items-center gap-3 text-base font-semibold tracking-tight text-[#FF5E0D] hover:text-[#EB061A] transition-colors"
            >
              <span>Explore the Possibilities</span>
              <motion.span
                aria-hidden="true"
                animate={{ x: [0, 6, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="inline-flex items-center text-[#FF5E0D]"
              >
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </motion.span>
            </Link>
          </div>

          {/* Slide switcher dots */}
          <div className="mt-7 flex items-center gap-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Show slide ${i + 1}`}
                onClick={() => setSlide(i)}
                className={`h-1.5 rounded-full transition-all ${
                  slide === i
                    ? "w-7 bg-[#FF5E0D]"
                    : "w-1.5 bg-black/20 hover:bg-black/45"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Stats ──────────────────────────────────────────────────────────────── */
function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let rafId = 0;
    const duration = 1600;
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function StatsSection() {
  return (
    <section className="section section-dark">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-gold tabular-nums">
                <AnimatedCounter value={s.value} />
              </div>
              <div className="mt-1.5 text-sm text-white/80">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── What Drives Us / About Us ─────────────────────────────────────────── */
const beliefs = [
  {
    num: "01",
    tag: "Learning strategy",
    icon: Compass,
    title: "Every ambition deserves a direction.",
    body: "Learning designed around your business goals, not predefined templates.",
  },
  {
    num: "02",
    tag: "Custom eLearning",
    icon: Fingerprint,
    title: "Every learner deserves a meaningful experience.",
    body: "Purpose-built learning that connects, engages and empowers.",
  },
  {
    num: "03",
    tag: "Digital innovation",
    icon: Lightbulb,
    title: "Every challenge holds a possibility.",
    body: "Technology that simplifies complexity and opens new opportunities.",
  },
  {
    num: "04",
    tag: "Business impact",
    icon: TrendingUp,
    title: "Every experience should make a difference.",
    body: "Solutions focused on stronger capabilities, better performance and sustainable growth.",
  },
];

function WhatDrivesUsSection() {
  return (
    <section className="section section-dots relative">
      <div className="container-px mx-auto max-w-6xl">
        {/* Top split: Copy on left, Team image on right */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6"
          >
            <span className="eyebrow">WHAT DRIVES US</span>
            <h2 className="display-h2 mt-3 text-[#00203D]">
              What we create matters.
              <span className="block text-[#FF5E0D] mt-1">
                What you become matters more.
              </span>
            </h2>
            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              From personalised learning experiences to scalable digital
              platforms, our purpose goes beyond delivering solutions. We help
              organisations turn knowledge into capability, challenges into
              opportunities and ambitions into meaningful progress.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6"
          >
            <div className="rounded-3xl overflow-hidden border border-[#FF5E0D]/15 shadow-elegant aspect-[16/10] bg-card">
              <img
                src={aboutTeam}
                alt="Cilantra team collaborating"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Four beliefs. One purpose. — tight 4-column card grid */}
        <div id="four-beliefs" className="mt-12">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
            <h3 className="font-display font-semibold text-2xl text-[#00203D]">
              Four beliefs. <span className="text-[#FF5E0D]">One purpose.</span>
            </h3>
            <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Our Core Philosophy
            </span>
          </div>

          <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {beliefs.map((b, i) => (
              <motion.div
                key={b.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="card-elegant p-6 flex flex-col bg-card/95"
              >
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-xl bg-[#FF5E0D]/10 flex items-center justify-center text-[#FF5E0D]">
                    <b.icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold text-[#F89E2C] tracking-wider">
                    {b.num}
                  </span>
                </div>
                <div className="mt-4 text-[0.72rem] font-semibold uppercase tracking-wider text-muted-foreground">
                  {b.tag}
                </div>
                <h4 className="mt-1.5 font-display font-semibold text-base text-[#00203D] leading-snug">
                  {b.title}
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {b.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Purpose & impact banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 relative overflow-hidden rounded-2xl bg-[#1E1B18] text-white px-6 py-8 md:px-12 md:py-9 text-center shadow-elegant border border-white/10"
        >
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#FF5E0D]/20 blur-3xl pointer-events-none" />
          <div className="absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-[#F89E2C]/15 blur-3xl pointer-events-none" />
          <h3 className="relative font-display font-semibold text-xl md:text-2xl text-white">
            Driven by purpose. Defined by impact.
          </h3>
          <p className="relative mt-2.5 text-sm md:text-base text-white/85 max-w-2xl mx-auto leading-relaxed">
            Everything we do is guided by one purpose — helping people and
            businesses become more than they are today.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Services Showcase Carousel ─────────────────────────────────────────── */
const serviceSlides = [
  {
    badge: "CUSTOM ELEARNING",
    highlight: "Custom eLearning Solutions",
    rest: "People Actually Want to Complete",
    description:
      "Learning content built from the ground up for your workforce, business scenarios, and global audiences — from microlearning to interactive simulations at scale.",
    bullets: [
      "Custom eLearning Built For Measurable Capability",
      "Video & Motion That Simplifies Complexity",
      "Microlearning Designed For Lasting Retention",
      "Immersive Learning That Changes Behavior",
      "Role-Based & Scenario-Driven Curricula",
    ],
    ctaLabel: "Explore Custom eLearning",
    ctaHref: "/services#custom-elearning",
    bg: servicesElearningBg,
    cards: [
      { icon: Video, title: "Video", sub: "Live & animated" },
      { icon: Gamepad2, title: "Gamification", sub: "Engaging mechanics" },
      { icon: BookOpen, title: "eLearning", sub: "SCORM/xAPI ready" },
      { icon: Zap, title: "Microlearning", sub: "Bite-sized modules" },
    ],
  },
  {
    badge: "GAME-BASED & 3D",
    highlight: "Game-Based Learning & 3D",
    rest: "Built for Higher Engagement",
    description:
      "Transform passive training into memorable interactive challenges with gamification, branching scenarios, 3D product simulations, and Flash to HTML5 modernization.",
    bullets: [
      "Interactive Learning Games & Leaderboards",
      "2D/3D Animations & Technical Simulations",
      "Flash to HTML5 Legacy Course Conversion",
      "Whiteboard Explainers & Visual Storytelling",
      "SME-Authored Assessments & Feedback",
    ],
    ctaLabel: "Explore Game-Based & 3D",
    ctaHref: "/services#gamification",
    bg: posterTechnology,
    cards: [
      { icon: Gamepad2, title: "Game-Based", sub: "Challenges & badges" },
      { icon: Box, title: "3D Design", sub: "Product simulations" },
      { icon: Layers, title: "Flash to HTML5", sub: "Modern migration" },
      { icon: Sparkles, title: "Animation", sub: "2D/3D explainers" },
    ],
  },
  {
    badge: "TECHNOLOGY & LMS",
    highlight: "Websites, Apps & Moodle LMS",
    rest: "Engineered to Scale",
    description:
      "Full-stack web and mobile platforms paired with customized Moodle LMS deployments — backed by 99% uptime, quarterly quality checks, and 24/7 support.",
    bullets: [
      "Custom Websites & Enterprise Web Portals",
      "Cross-Platform Mobile Apps (iOS & Android)",
      "Moodle LMS Setup, Theming & Plugins",
      "Branding, UI/UX & Design Systems",
      "24/7 Support & 99% Uptime Reliability",
    ],
    ctaLabel: "Explore Tech & LMS",
    ctaHref: "/services#web-lms",
    bg: servicesTechBg,
    cards: [
      { icon: Globe, title: "Web & Apps", sub: "Full-stack platforms" },
      { icon: GraduationCap, title: "Moodle LMS", sub: "Custom & managed" },
      { icon: Palette, title: "UI/UX Design", sub: "Intuitive interfaces" },
      { icon: Cpu, title: "99% Uptime", sub: "24/7 global ops" },
    ],
  },
  {
    badge: "AR / VR & AUDIO",
    highlight: "Immersive AR / VR & Studio Audio",
    rest: "for Hands-On Mastery",
    description:
      "Bridge physical and digital environments with Augmented and Virtual Reality training simulations, elevated by studio-grade voiceovers and sound mixing.",
    bullets: [
      "Virtual Reality (VR) Safety & Skill Labs",
      "Augmented Reality (AR) Guided Workflows",
      "Multilingual Voiceover Recording",
      "Broadcast-Grade Sound Mixing & SFX",
      "Interactive Spatial 3D Learning",
    ],
    ctaLabel: "Explore AR / VR & Audio",
    ctaHref: "/services#ar-vr-audio",
    bg: servicesVrBg,
    cards: [
      { icon: Glasses, title: "Virtual Reality", sub: "Safe practice labs" },
      { icon: Box, title: "Augmented Reality", sub: "Spatial overlays" },
      { icon: Mic2, title: "Voice Recording", sub: "Multilingual VO" },
      { icon: Volume2, title: "Sound Mixing", sub: "Studio mastering" },
    ],
  },
];

type ServiceSlide = (typeof serviceSlides)[number];

function ServiceSlideLayer({
  slide,
  index,
  total,
  scrollYProgress,
}: {
  slide: ServiceSlide;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const start = index === 0 ? 0 : (index - 1) / (total - 1);
  const end = index === 0 ? 0 : index / (total - 1);
  const x = useTransform(
    scrollYProgress,
    [start, end],
    index === 0 ? ["0%", "0%"] : ["100%", "0%"],
  );

  return (
    <motion.div
      style={{ x: index === 0 ? "0%" : x, zIndex: 10 + index }}
      className={`absolute inset-0 flex items-center bg-[#141018] overflow-hidden ${
        index > 0 ? "shadow-[-24px_0_60px_rgba(0,0,0,0.7)]" : ""
      }`}
    >
      {/* Full-bleed dark background image */}
      <img
        src={slide.bg}
        alt={slide.badge}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Dark editorial scrim */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#120d16]/95 via-[#120d16]/80 to-[#120d16]/55"
      />

      <div className="container-px mx-auto max-w-6xl relative z-10 py-12">
        {/* Full-width badge + heading across the top */}
        <div>
          <span className="inline-block rounded-full bg-[#FF5E0D] px-3.5 py-1 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-white">
            {slide.badge}
          </span>

          <h2 className="display-h2 font-bold mt-4 text-white leading-tight max-w-5xl">
            <span className="block text-[#F89E2C]">{slide.highlight}</span>
            <span className="block mt-1 text-lg sm:text-xl md:text-2xl font-medium text-white/85">
              {slide.rest}
            </span>
          </h2>
        </div>

        <div className="mt-6 grid lg:grid-cols-12 gap-10 items-start">
          {/* Left column */}
          <div className="lg:col-span-7">
            <p className="text-base text-white/80 leading-relaxed max-w-xl">
              {slide.description}
            </p>

            <ul className="mt-6 space-y-2.5">
              {slide.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-2.5 text-sm text-white/90"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#F89E2C] shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full bg-transparent border-[#F89E2C]/60 text-white hover:bg-[#FF5E0D] hover:border-[#FF5E0D] hover:text-white px-7"
                asChild
              >
                <Link to={slide.ctaHref}>
                  {slide.ctaLabel} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right column: 2x2 frosted glassmorphism cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {slide.cards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-5 hover:bg-white/15 hover:border-[#FF5E0D]/50 transition-all"
                >
                  <div className="h-10 w-10 rounded-xl bg-[#FF5E0D]/15 border border-[#FF5E0D]/30 flex items-center justify-center text-[#F89E2C] mb-3.5">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="font-display font-semibold text-lg text-white">
                    {card.title}
                  </div>
                  <div className="mt-1 text-sm text-white/75">{card.sub}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const idx = Math.min(
      serviceSlides.length - 1,
      Math.max(0, Math.round(latest * (serviceSlides.length - 1))),
    );
    setActive(idx);
  });

  const scrollToSlide = (idx: number) => {
    const el = containerRef.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const maxScroll = el.offsetHeight - window.innerHeight;
    const targetY = top + (idx / (serviceSlides.length - 1)) * maxScroll;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      className="relative bg-[#141018] text-white"
      style={{ height: `${serviceSlides.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {serviceSlides.map((slide, index) => (
          <ServiceSlideLayer
            key={slide.badge}
            slide={slide}
            index={index}
            total={serviceSlides.length}
            scrollYProgress={scrollYProgress}
          />
        ))}

        {/* Bottom indicator dots */}
        <div className="absolute bottom-7 inset-x-0 z-50 flex items-center justify-center gap-2.5">
          {serviceSlides.map((s, i) => (
            <button
              key={s.badge}
              type="button"
              aria-label={`Scroll to ${s.badge}`}
              onClick={() => scrollToSlide(i)}
              className={`h-2.5 rounded-full transition-all ${
                active === i
                  ? "w-7 bg-[#FF5E0D]"
                  : "w-2.5 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Industries ─────────────────────────────────────────────────────────── */
function IndustriesSection() {
  return (
    <section
      id="industries"
      className="section relative overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#FFF9F4] to-[#FDF5EC]"
    >
      {/* Top-left subtle flowing orange wave */}
      <svg
        aria-hidden="true"
        viewBox="0 0 360 180"
        preserveAspectRatio="none"
        className="pointer-events-none absolute top-0 left-0 w-56 md:w-80 h-28 md:h-40 opacity-60"
      >
        <path
          d="M0,120 C90,95 160,40 240,0 L0,0 Z"
          fill="#FF5E0D"
          fillOpacity="0.14"
        />
        <path
          d="M0,145 C100,110 180,55 290,0"
          fill="none"
          stroke="#FF5E0D"
          strokeOpacity="0.28"
          strokeWidth="2"
        />
      </svg>

      {/* Top-right subtle global network wireframe sphere */}
      <svg
        aria-hidden="true"
        viewBox="0 0 260 260"
        className="pointer-events-none absolute -top-6 right-4 md:right-12 w-56 h-56 md:w-72 md:h-72 text-[#D97706] opacity-[0.13]"
      >
        <circle cx="130" cy="130" r="105" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <ellipse cx="130" cy="130" rx="52" ry="105" fill="none" stroke="currentColor" strokeWidth="1" />
        <ellipse cx="130" cy="130" rx="105" ry="42" fill="none" stroke="currentColor" strokeWidth="1" />
        <ellipse cx="130" cy="130" rx="105" ry="78" fill="none" stroke="currentColor" strokeWidth="0.8" />
        <line x1="25" y1="130" x2="235" y2="130" stroke="currentColor" strokeWidth="0.9" />
        <line x1="130" y1="25" x2="130" y2="235" stroke="currentColor" strokeWidth="0.9" />
        <circle cx="88" cy="96" r="3" fill="#FF5E0D" />
        <circle cx="164" cy="108" r="3.5" fill="#FF5E0D" />
        <circle cx="145" cy="162" r="2.8" fill="#FF5E0D" />
      </svg>

      {/* Subtle bottom-left faint skyline silhouette */}
      <svg
        aria-hidden="true"
        viewBox="0 0 600 90"
        preserveAspectRatio="none"
        className="pointer-events-none absolute bottom-0 left-0 w-72 md:w-[500px] h-16 md:h-24 text-[#1E1B18] opacity-[0.045]"
      >
        <path
          d="M0,90 L0,55 L18,55 L18,32 L36,32 L36,52 L54,52 L54,20 L74,20 L74,58 L95,58 L95,38 L120,38 L120,62 L145,62 L145,26 L168,26 L168,54 L195,54 L195,42 L222,42 L222,68 L250,68 L250,46 L278,46 L278,72 L320,72 L320,58 L360,58 L360,76 L420,76 L420,90 Z"
          fill="currentColor"
        />
      </svg>

      {/* Bottom-right warm orange wave sweep */}
      <svg
        aria-hidden="true"
        viewBox="0 0 500 120"
        preserveAspectRatio="none"
        className="pointer-events-none absolute bottom-0 right-0 w-72 md:w-[440px] h-16 md:h-28"
      >
        <path
          d="M0,120 C140,108 260,74 380,38 C435,22 472,8 500,0 L500,120 Z"
          fill="#FF5E0D"
          fillOpacity="0.82"
        />
        <path
          d="M90,120 C210,104 320,78 440,46 L500,30 L500,120 Z"
          fill="#F89E2C"
          fillOpacity="0.4"
        />
      </svg>

      <div className="container-px mx-auto max-w-7xl relative">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#FF5E0D]">
            <span className="h-[1px] w-7 bg-[#FF5E0D]/50" />
            Industry Solutions
            <span className="h-[1px] w-7 bg-[#FF5E0D]/50" />
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold tracking-tight text-[#1E1B18]">
            Sectors we serve <span className="text-[#FF5E0D]">globally</span>
          </h2>
          <p className="mt-3 text-sm md:text-base text-[#574F49]">
            Serving 35+ clients across 4 continents with domain-tailored
            e-Learning and technology solutions.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="group relative rounded-2xl bg-white border border-black/[0.06] px-4 pt-6 pb-7 text-center shadow-[0_16px_38px_-10px_rgba(30,27,24,0.2)] hover:-translate-y-1 hover:shadow-[0_24px_48px_-12px_rgba(255,94,13,0.28)] transition-all flex flex-col items-center justify-center min-h-[168px]"
            >
              <div className="mx-auto h-16 w-16 rounded-full bg-[#FFF4EE] flex items-center justify-center shrink-0">
                <ind.icon className="h-8 w-8 text-[#FF5E0D]" strokeWidth={1.65} />
              </div>
              <p className="mt-4 text-sm sm:text-[15px] font-semibold text-[#1E1B18] leading-snug">
                {ind.label}
              </p>
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3.5px] w-10 rounded-t-full bg-[#FF5E0D] group-hover:w-14 transition-all"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CTA ────────────────────────────────────────────────────────────────── */
function CTASection() {
  return (
    <section className="section section-grid">
      <div className="container-px mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl bg-[#18121E] text-white p-8 md:p-12 shadow-elegant border border-white/10">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#FF5E0D]/25 blur-3xl pointer-events-none" />
          <div className="absolute -left-16 -bottom-20 h-64 w-64 rounded-full bg-[#EB061A]/20 blur-3xl pointer-events-none" />
          <div className="relative grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#F89E2C]">
                Let's build together
              </span>
              <div className="mt-2 h-0.5 w-10 bg-[#F89E2C]" />
              <h3 className="display-h2 mt-5 text-white">
                Ready to take your work digitally?
                <br />
                Let's build the right solution.
              </h3>
              <p className="mt-4 text-white/80 max-w-xl leading-relaxed">
                From custom e-Learning, gamification, and Moodle LMS to web &amp;
                mobile apps, 3D animation, and AR/VR — we deliver integrated
                solutions built for your business growth.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 md:items-end">
              <Button
                size="lg"
                className="min-w-[220px] bg-[#FF5E0D] text-white hover:bg-[#EB061A] shadow-[0_10px_30px_rgba(255,94,13,0.35)]"
                asChild
              >
                <Link to="/contact">
                  Discuss Your Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="min-w-[220px] bg-transparent border-white/35 text-white hover:bg-white/10 hover:text-white"
                asChild
              >
                <Link to="/services">Explore Solutions</Link>
              </Button>
            </div>
          </div>
          <div className="relative mt-10 pt-6 border-t border-white/15 flex items-center justify-center gap-3">
            <div className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center">
              <Users2 className="h-4 w-4 text-[#F89E2C]" />
            </div>
            <p className="text-sm text-white/80">
              BEYOND LEARNING. BEYOND TECHNOLOGY.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
