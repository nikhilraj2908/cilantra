import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  Layers,
  TrendingUp,
  ShieldCheck,
  Play,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";

import aboutHero from "@/assets/about-hero.jpg";
import aboutWho from "@/assets/about-who.jpg";
import aboutDrives from "@/assets/about-drives.jpg";
import aboutHow from "@/assets/about-how.jpg";
import aboutWhy from "@/assets/about-why.jpg";
import aboutPromise from "@/assets/about-promise.jpg";

const beliefs = [
  {
    icon: Compass,
    tag: "Learning Strategy",
    title: "Start with purpose.",
    body: "We align learning with business goals so every solution has a clear direction.",
  },
  {
    icon: Layers,
    tag: "Custom Solutions",
    title: "Build for real needs.",
    body: "We create tailored experiences designed around your people, context and challenges.",
  },
  {
    icon: TrendingUp,
    tag: "Impact & ROI",
    title: "Make every effort count.",
    body: "We focus on measurable value, stronger capabilities and meaningful outcomes.",
  },
  {
    icon: ShieldCheck,
    tag: "Delivery",
    title: "Deliver with confidence.",
    body: "We combine structure, agility and accountability to deliver quality at every stage.",
  },
];

const keyPoints = [
  "Strategic thinking",
  "Custom approach",
  "Reliable delivery",
  "Business-focused execution",
  "Long-term partnership mindset",
];

export default function AboutPage() {
  return (
    <SiteLayout>
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#FAF8F5] to-[#F3ECE3] py-20 md:py-28 border-b border-[#E8E0D6]">
        {/* Subtle diagonal neutral plane on right */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[#F5EFE8]/70 -skew-x-12 translate-x-24"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 right-10 h-[360px] w-[360px] rounded-full bg-[#FF5E0D]/8 blur-3xl"
        />

        <div className="container-px mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6"
            >
              <span className="inline-flex items-center gap-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#FF5E0D]">
                <span className="block h-[2px] w-7 bg-[#FF5E0D]" />
                ABOUT CILANTRA
              </span>

              <h1 className="font-display font-bold text-[clamp(2.35rem,4.4vw,3.75rem)] leading-[1.06] tracking-tight mt-4 text-[#1E1B18]">
                Human potential.
                <br />
                Digital progress.
                <br />
                <span className="text-[#FF5E0D]">Meaningful impact.</span>
              </h1>

              <p className="mt-5 text-base md:text-lg text-[#5C554E] leading-relaxed max-w-lg">
                Cilantra brings learning, technology and creative thinking
                together to help organisations build capabilities, improve
                performance and grow with confidence.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-5">
                <Button
                  size="lg"
                  className="rounded-full bg-[#FF5E0D] text-white hover:bg-[#E04F06] px-7 shadow-[0_12px_28px_rgba(255,94,13,0.3)]"
                  asChild
                >
                  <a href="#who-we-are">
                    Discover Our Story <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>

                <a
                  href="#how-we-work"
                  className="group inline-flex items-center gap-3 text-sm font-semibold text-[#1E1B18] hover:text-[#FF5E0D] transition-colors"
                >
                  <span className="h-11 w-11 rounded-full border border-[#D8CEC2] bg-white shadow-sm flex items-center justify-center group-hover:border-[#FF5E0D] transition-colors">
                    <Play className="h-3.5 w-3.5 fill-current ml-0.5" />
                  </span>
                  <span>See How We Work</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="lg:col-span-6"
            >
              <div className="relative">
                {/* Charcoal geometric accent behind top-right */}
                <div
                  aria-hidden
                  className="hidden sm:block absolute -top-4 -right-4 h-28 w-28 rounded-2xl bg-[#1E1B18]"
                />
                {/* Crisp white-framed photo */}
                <div className="relative z-10 rounded-3xl overflow-hidden border-[5px] border-white shadow-[0_24px_60px_-20px_rgba(30,27,24,0.25)] aspect-[4/3] bg-[#F5EFE8]">
                  <img
                    src={aboutHero}
                    alt="Senior Cilantra professionals in strategic discussion"
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* Orange geometric outline accent overlapping bottom-right */}
                <div
                  aria-hidden
                  className="hidden sm:block absolute -bottom-3 -right-3 z-20 h-14 w-16 rounded-tl-2xl rounded-br-2xl border-2 border-[#FF5E0D] pointer-events-none"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Who We Are */}
      <section
        id="who-we-are"
        className="section section-grid relative overflow-hidden"
      >
        {/* Subtle warm sand diagonal plane on left */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-[#F6F1EA]/70 -skew-x-12 -translate-x-24"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 left-10 h-[320px] w-[320px] rounded-full bg-[#FF5E0D]/8 blur-3xl"
        />
        <div className="container-px mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6 lg:order-2"
            >
              <span className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#FF5E0D]">
                <span className="block h-px w-7 bg-[#FF5E0D]" />
                WHO WE ARE
              </span>

              <h2 className="display-h2 mt-3 text-[#1E1B18]">
                We help organisations{" "}
                <span className="text-[#FF5E0D]">
                  learn, evolve and move forward.
                </span>
              </h2>

              <div className="mt-5 space-y-4 text-base text-[#5C554E] leading-relaxed">
                <p>
                  We are a learning and technology partner focused on creating
                  solutions that are practical, purposeful and aligned to
                  business growth.
                </p>
                <p>
                  From custom eLearning to digital platforms and workforce
                  capability solutions, we design experiences that help people
                  perform better and businesses achieve more.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-6 lg:order-1"
            >
              <div className="relative">
                <div
                  aria-hidden
                  className="hidden sm:block absolute -top-3.5 -left-3.5 h-24 w-24 rounded-2xl bg-[#1E1B18]"
                />
                <div className="relative z-10 rounded-3xl overflow-hidden border-[5px] border-white shadow-[0_24px_60px_-20px_rgba(30,27,24,0.22)] aspect-[4/3] bg-[#FAF8F5]">
                  <img
                    src={aboutWho}
                    alt="Professionals collaborating around a boardroom table"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div
                  aria-hidden
                  className="hidden sm:block absolute -bottom-3 -right-3 z-20 h-12 w-14 rounded-tl-2xl rounded-br-2xl border-2 border-[#FF5E0D] pointer-events-none"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. What Drives Us */}
      <section className="section bg-[#F6F1EA] border-y border-[#E8E0D6]">
        <div className="container-px mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7"
            >
              <span className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#FF5E0D]">
                <span className="block h-px w-7 bg-[#FF5E0D]" />
                WHAT DRIVES US
              </span>

              <h2 className="display-h2 mt-3 text-[#1E1B18]">
                Our work is guided by{" "}
                <span className="text-[#FF5E0D]">one clear purpose.</span>
              </h2>

              <p className="mt-4 text-base md:text-lg text-[#5C554E] leading-relaxed max-w-2xl">
                To create learning and digital solutions that make a real
                difference — for people, for performance and for business growth.
              </p>

              {/* Four belief cards */}
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {beliefs.map((b, i) => (
                  <motion.div
                    key={b.tag}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="rounded-2xl bg-white border border-[#E6DDD2] p-5 shadow-[0_8px_24px_-12px_rgba(30,27,24,0.08)] hover:border-[#FF5E0D]/40 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-xl bg-[#FF5E0D]/10 flex items-center justify-center text-[#FF5E0D] shrink-0">
                        <b.icon className="h-4 w-4" />
                      </div>
                      <span className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#FF5E0D]">
                        {b.tag}
                      </span>
                    </div>
                    <h3 className="mt-3 font-display font-semibold text-base text-[#1E1B18]">
                      {b.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-[#5C554E] leading-relaxed">
                      {b.body}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* One clean supporting image beside the content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className="relative">
                {/* Subtle charcoal geometric accent behind top-right */}
                <div
                  aria-hidden
                  className="hidden sm:block absolute -top-3.5 -right-3.5 h-24 w-24 rounded-2xl bg-[#1E1B18]"
                />
                {/* Crisp white-framed photo */}
                <div className="relative z-10 rounded-3xl overflow-hidden border-[5px] border-white shadow-[0_24px_60px_-20px_rgba(30,27,24,0.22)] aspect-[4/5] bg-white">
                  <img
                    src={aboutDrives}
                    alt="Professional presenting strategy to colleagues in glass meeting room"
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* Subtle orange geometric outline accent */}
                <div
                  aria-hidden
                  className="hidden sm:block absolute -bottom-3 -left-3 z-20 h-12 w-14 rounded-tl-2xl rounded-br-2xl border-2 border-[#FF5E0D] pointer-events-none"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. How We Work */}
      <section
        id="how-we-work"
        className="section section-grid relative overflow-hidden"
      >
        {/* Subtle warm sand diagonal plane on right */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[#F6F1EA]/70 -skew-x-12 translate-x-24"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 right-10 h-[320px] w-[320px] rounded-full bg-[#FF5E0D]/8 blur-3xl"
        />
        <div className="container-px mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6"
            >
              <span className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#FF5E0D]">
                <span className="block h-px w-7 bg-[#FF5E0D]" />
                HOW WE WORK
              </span>

              <h2 className="display-h2 mt-3 text-[#1E1B18]">
                Thoughtfully.
                <br />
                Collaboratively.
                <br />
                <span className="text-[#FF5E0D]">Reliably.</span>
              </h2>

              <div className="mt-5 space-y-4 text-base text-[#5C554E] leading-relaxed">
                <p>
                  We combine creativity, learning expertise and technology
                  thinking to deliver solutions that are not only well designed,
                  but also practical, scalable and aligned to business outcomes.
                </p>
                <p>
                  We believe strong partnerships are built through shared
                  thinking, transparent delivery and a commitment to continuous
                  improvement.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-6"
            >
              <div className="rounded-3xl overflow-hidden border-[5px] border-white shadow-[0_24px_60px_-20px_rgba(30,27,24,0.22)] aspect-[4/3] bg-[#FAF8F5]">
                <img
                  src={aboutHow}
                  alt="Small team discussion in modern office workspace"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Why Clients Choose Us */}
      <section className="section bg-[#F6F1EA] border-y border-[#E8E0D6]">
        <div className="container-px mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6 lg:order-2"
            >
              <span className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#FF5E0D]">
                <span className="block h-px w-7 bg-[#FF5E0D]" />
                WHY CLIENTS CHOOSE CILANTRA
              </span>

              <h2 className="display-h2 mt-3 text-[#1E1B18]">
                Because they need{" "}
                <span className="text-[#FF5E0D]">more than a vendor.</span>
              </h2>

              <p className="mt-4 text-base text-[#5C554E] leading-relaxed">
                They need a partner who understands business priorities, values
                quality, delivers reliably and stays focused on outcomes.
              </p>

              <ul className="mt-6 space-y-3">
                {keyPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 text-base font-medium text-[#1E1B18]"
                  >
                    <span className="h-6 w-6 rounded-full bg-[#FF5E0D]/12 flex items-center justify-center text-[#FF5E0D] shrink-0">
                      <CheckCircle2 className="h-4 w-4" />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-6 lg:order-1"
            >
              <div className="rounded-3xl overflow-hidden border border-[#E6DDD2] shadow-[0_20px_50px_-22px_rgba(30,27,24,0.18)] aspect-[4/3] bg-white">
                <img
                  src={aboutWhy}
                  alt="Two professionals in strategic business discussion"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Closing Section */}
      <section className="section bg-[#1E1B18] text-white relative overflow-hidden">
        {/* Subtle diagonal warm plane on right */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[#27221E]/75 -skew-x-12 translate-x-24"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#FF5E0D]/15 blur-3xl"
        />
        <div className="container-px mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7"
            >
              <span className="inline-flex items-center gap-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#FF5E0D]">
                <span className="block h-[2px] w-7 bg-[#FF5E0D]" />
                THE CILANTRA PROMISE
              </span>

              <h2 className="font-display font-bold text-[clamp(2.05rem,3.6vw,3rem)] leading-[1.08] tracking-tight mt-4 text-white">
                We design with purpose.
                <br />
                We deliver with intent.
                <br />
                <span className="text-[#FF5E0D]">We grow with our clients.</span>
              </h2>

              <p className="mt-5 text-base md:text-lg text-white/80 leading-relaxed max-w-xl">
                Everything we create is driven by one goal — helping people and
                businesses move forward with confidence.
              </p>

              <div className="mt-8">
                <Button
                  size="lg"
                  className="rounded-full bg-[#FF5E0D] text-white hover:bg-[#E04F06] px-7 shadow-[0_12px_28px_rgba(255,94,13,0.35)]"
                  asChild
                >
                  <Link to="/contact">
                    Let&apos;s Build Something Meaningful{" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className="relative max-w-md mx-auto lg:ml-auto">
                {/* Subtle orange geometric accent behind top-right */}
                <div
                  aria-hidden
                  className="hidden sm:block absolute -top-4 -right-4 h-28 w-28 rounded-2xl bg-[#FF5E0D]/85"
                />
                {/* Crisp white-framed photo */}
                <div className="relative z-10 rounded-3xl overflow-hidden border-[5px] border-white/95 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.65)] aspect-[4/3] bg-[#2A2521]">
                  <img
                    src={aboutPromise}
                    alt="Three Cilantra professionals standing together in modern office corridor"
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* Warm amber geometric outline accent overlapping bottom-right */}
                <div
                  aria-hidden
                  className="hidden sm:block absolute -bottom-3 -right-3 z-20 h-14 w-16 rounded-tl-2xl rounded-br-2xl border-2 border-[#F89E2C] pointer-events-none"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
