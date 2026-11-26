import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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
  ChevronLeft,
  ChevronRight,
  Users2,
  Sparkles,
  Award,
  ShieldCheck,
  Clock,
  Lightbulb,
} from "lucide-react";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import heroWorkspace from "@/assets/hero-workspace.png";
import posterElearning from "@/assets/poster-elearning.jpg";
import posterTechnology from "@/assets/poster-technology.jpg";
import posterCollaboration from "@/assets/poster-collaboration.jpg";

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

const elearningPrinciples = [
  "Use scenario-based learning for real-world application",
  "Keep training curriculum role-based and relevant",
  "Incorporate visual mediums such as 3D graphics and simulations",
  "Emotional engagement: put the learner at the center of the narrative",
  "Add interactivity tools such as gamification for reinforcement",
  "Use microlearning to deliver critical concepts effectively",
];

/* ── Page ───────────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <SiteLayout>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <DifferentiatorsSection />
      <PrinciplesSection />
      <IndustriesSection />
      <TestimonialsSection />
      <CTASection />
    </SiteLayout>
  );
}

/* ── Hero ───────────────────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section
      className="relative overflow-hidden py-24 md:py-32 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroWorkspace})` }}
    >
      {/* Left-to-right readability overlay so text stays crisp while artwork shines on the right */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/20"
      />

      <div className="container-px mx-auto max-w-7xl relative z-10">
        <div className="max-w-3xl">
          <span className="eyebrow">Think Big. We Do Solutions.</span>
          <h1 className="display-h1 mt-4 text-foreground">
            e-Learning &amp; Technology{" "}
            <span className="text-primary">Solutions.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Get what's finest for your business's growth and take your work
            digitally with Cilantra. We help organizations looking to train
            their employees, partners, and customers switch to web and
            mobile-based learning and digital platforms.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <Link to="/contact">
                Start a Conversation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">Explore Solutions</Link>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground">
            {[
              "50+ In-house specialists",
              "35+ Clients across 4 continents",
              "No-subcontract quality guarantee",
            ].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Stats ──────────────────────────────────────────────────────────────── */
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
              <div className="text-4xl md:text-5xl font-display font-bold text-gold">
                {s.value}
              </div>
              <div className="mt-1.5 text-sm text-white/80">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Services grid ──────────────────────────────────────────────────────── */
function ServicesSection() {
  return (
    <section className="section section-grid">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <span className="eyebrow">Explore Our Solutions</span>
            <h2 className="display-h2 mt-3">
              e-Learning &amp; Technology Solutions
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our solutions are divided into two core pillars — e-Learning design
              solutions and Technology solutions — engineered to elevate your
              business digitally.
            </p>
          </div>
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden border border-border shadow-soft aspect-[16/10] bg-card">
              <img
                src={posterElearning}
                alt="Custom e-Learning Solutions"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-border shadow-soft aspect-[16/10] bg-card">
              <img
                src={posterTechnology}
                alt="Technology & Digital Platforms"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.a
              key={s.title}
              href={s.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="card-elegant p-6 group flex items-start gap-4"
            >
              <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <s.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-display font-semibold text-foreground">
                  {s.title}
                </div>
                <div className="mt-1 inline-flex items-center text-xs text-primary font-medium">
                  Learn more <ArrowRight className="ml-1 h-3 w-3" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" asChild>
            <Link to="/services">
              View All Solutions <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ── Differentiators ────────────────────────────────────────────────────── */
function DifferentiatorsSection() {
  return (
    <section className="section section-dots">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <span className="eyebrow">Why Choose Us</span>
          <h2 className="display-h2 mt-3">
            An integrated, tech-enabled partner
          </h2>
          <p className="mt-3 text-muted-foreground">
            For most of our customers, we're more than just a vendor — we're
            their long-term strategic partner.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="card-elegant p-6"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <d.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-display font-semibold text-lg">
                {d.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {d.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── e-Learning Principles ──────────────────────────────────────────────── */
function PrinciplesSection() {
  return (
    <section className="section section-grid">
      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5">
          <span className="eyebrow">Our Approach to e-Learning</span>
          <h2 className="display-h2 mt-3">
            Compelling experiences for web &amp; mobile
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Whether it's Flash to HTML5 conversion, Moodle LMS customization,
            or immersive AR/VR modules, our instructional designers and
            software engineers craft learning that engages and sticks.
          </p>
          <div className="mt-6 rounded-2xl overflow-hidden border border-border shadow-soft aspect-[16/10]">
            <img
              src={posterCollaboration}
              alt="Collaborative Digital Learning Strategy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
          {elearningPrinciples.map((item) => (
            <div key={item} className="card-elegant p-5 flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <p className="text-sm text-foreground leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Industries ─────────────────────────────────────────────────────────── */
function IndustriesSection() {
  return (
    <section className="section section-waves">
      <div className="container-px mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Industry Solutions</span>
          <h2 className="display-h2 mt-3">Sectors we serve globally</h2>
          <p className="mt-4 text-muted-foreground">
            Serving 35+ clients across 4 continents with domain-tailored
            e-Learning and technology solutions.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="card-elegant p-5 text-center"
            >
              <div className="mx-auto h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <ind.icon className="h-5 w-5 text-primary" />
              </div>
              <p className="mt-3 text-xs font-semibold">{ind.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Testimonials ───────────────────────────────────────────────────────── */
const testimonials = [
  {
    quote:
      "Their adherence to processes, flexibility, and dedicated in-house team made them a true long-term strategic partner for our global training rollout.",
    name: "VP Learning & Development",
    role: "Global Enterprise Client",
  },
  {
    quote:
      "Converting our legacy modules to interactive HTML5 and game-based e-learning boosted learner engagement and completion rates dramatically.",
    name: "Head of Digital Learning",
    role: "BFSI Organisation",
  },
  {
    quote:
      "From Moodle LMS setup to custom 3D animations and voiceover production, they delivered an integrated end-to-end solution on schedule.",
    name: "Director of Operations",
    role: "Technology & EdTech Partner",
  },
];

function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((v) => (v - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((v) => (v + 1) % testimonials.length);

  return (
    <section className="section section-dots">
      <div className="container-px mx-auto max-w-4xl">
        <div className="text-center">
          <span className="eyebrow">Client Trust</span>
          <h2 className="display-h2 mt-3">What our partners say</h2>
        </div>
        <div className="relative mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35 }}
              className="card-elegant p-8 md:p-12 text-center"
            >
              <Sparkles className="mx-auto h-8 w-8 text-gold mb-4" />
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                "{testimonials[active].quote}"
              </p>
              <div className="mt-6">
                <div className="font-semibold font-display">
                  {testimonials[active].name}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {testimonials[active].role}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="h-9 w-9 rounded-full border border-border bg-background flex items-center justify-center hover:bg-muted transition"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="text-xs text-muted-foreground">
              <span className="font-semibold text-primary">
                {String(active + 1).padStart(2, "0")}
              </span>{" "}
              / {String(testimonials.length).padStart(2, "0")}
            </span>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="h-9 w-9 rounded-full border border-border bg-background flex items-center justify-center hover:bg-muted transition"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
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
        <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-8 md:p-12 shadow-elegant">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-gold/30 blur-3xl pointer-events-none" />
          <div className="relative grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                Let's build together
              </span>
              <div className="mt-2 h-0.5 w-10 bg-gold" />
              <h3 className="display-h2 mt-5">
                Ready to take your work digitally?
                <br />
                Let's build the right solution.
              </h3>
              <p className="mt-4 text-primary-foreground/80 max-w-xl leading-relaxed">
                From custom e-Learning, gamification, and Moodle LMS to web &amp;
                mobile apps, 3D animation, and AR/VR — we deliver integrated
                solutions built for your business growth.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 md:items-end">
              <Button
                size="lg"
                variant="gold"
                className="min-w-[220px]"
                asChild
              >
                <Link to="/contact">
                  Discuss Your Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="min-w-[220px] border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link to="/services">Explore Solutions</Link>
              </Button>
            </div>
          </div>
          <div className="relative mt-10 pt-6 border-t border-primary-foreground/15 flex items-center justify-center gap-3">
            <div className="h-9 w-9 rounded-full bg-primary-foreground/10 flex items-center justify-center">
              <Users2 className="h-4 w-4" />
            </div>
            <p className="text-sm text-primary-foreground/80">
              Think Big. We Do Solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
