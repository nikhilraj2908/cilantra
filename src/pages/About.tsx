import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Users2, Lightbulb, Award, ShieldCheck } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";

const keyFactors = [
  {
    icon: Lightbulb,
    title: "Innovation",
    body: "We conceptualize, design, and architect compelling learning experiences for the web and mobile world.",
  },
  {
    icon: Users2,
    title: "Team",
    body: "Combined creativity of content developers, instructional designers, UI designers, software engineers, and strategic thinkers.",
  },
  {
    icon: Award,
    title: "Excellence",
    body: "Excellence is not a coincidence. We deliver excellent outcomes through smart ideas and meticulous execution.",
  },
  {
    icon: ShieldCheck,
    title: "No Subcontract Policy",
    body: "Strict self-imposed no-subcontract policy with continuous in-house training, 99% uptime, 24/7 support, and quarterly quality checks.",
  },
];

export default function AboutPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="section hero-bg relative overflow-hidden">
        <div className="container-px mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="eyebrow">About Cilantra</span>
            <h1 className="display-h2 mt-3">
              Tech-enabled, integrated, collaborative solutions
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Cilantra helps organizations looking to train their employees,
              partners, and customers switch to web and mobile-based training
              and digital platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow">Our Journey</span>
            <h2 className="display-h2 mt-3">
              More than a vendor — a long-term strategic partner
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Built by a vibrant team of 50+ specialists serving 35+ clients
                across 4 continents, Cilantra brings process rigor, flexibility,
                and trust to every engagement.
              </p>
              <p>
                Our solutions are divided into two focused categories —{" "}
                <strong className="text-foreground">e-Learning design solutions</strong>{" "}
                and <strong className="text-foreground">Technology solutions</strong>{" "}
                — catering to every aspect of your digital learning and software
                journey.
              </p>
              <p>
                While our core strength is our people, we invest heavily in
                infrastructure, in-house training, quarterly quality checks, and
                robust customer feedback loops so we are improving all the time.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              ["1000+", "Learning Complete"],
              ["250+", "Completed Projects"],
              ["35+", "Happy Clients"],
              ["4", "Continents Served"],
            ].map(([val, lab]) => (
              <div key={lab} className="card-elegant p-6 text-center">
                <div className="text-3xl font-display font-bold text-primary">
                  {val}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{lab}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Key Factors */}
      <section className="section sand-bg">
        <div className="container-px mx-auto max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <span className="eyebrow">Why Choose Cilantra</span>
            <h2 className="display-h2 mt-3">Our key factors</h2>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFactors.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="card-elegant p-6"
              >
                <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <v.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 font-display font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              "24 / 7 Support · 365 Days a Year",
              "99% Uptime Reliability",
              "Quality Check Every Quarter",
            ].map((badge) => (
              <div
                key={badge}
                className="card-elegant px-5 py-4 flex items-center justify-center gap-2 text-sm font-medium"
              >
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-px mx-auto max-w-4xl text-center">
          <span className="eyebrow">Work with Us</span>
          <h2 className="display-h2 mt-3">
            Ready to take your work digitally?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Let's discuss your e-Learning or technology project and build a
            long-term partnership that delivers measurable results.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/contact">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">View Solutions</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
