import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { INDUSTRIES, getIndustryBySlug } from "@/data/industries";

export default function IndustryDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return <Navigate to="/industries/banking-and-finance" replace />;
  }

  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#FAF8F5] section-grid border-b border-black/[0.06]">
        <div
          className="hidden lg:block absolute inset-y-0 right-0 w-[46%] bg-[#F6F1EA]/80 -skew-x-12 translate-x-16 pointer-events-none"
          aria-hidden="true"
        />

        <div className="container-px mx-auto max-w-7xl relative py-16 md:py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <motion.div
              key={`${industry.slug}-hero-text`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="lg:col-span-6"
            >
              <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#FF5E0D]">
                <span className="h-[1.5px] w-6 bg-[#FF5E0D]" />
                {industry.eyebrow}
              </span>

              <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-[3.2rem] font-bold tracking-tight leading-[1.08] text-[#1E1B18]">
                {industry.heroTitle}
                <span className="block text-[#FF5E0D]">
                  {industry.heroHighlight}
                </span>
              </h1>

              <p className="mt-5 text-base md:text-[17px] text-[#574F49] leading-relaxed max-w-xl">
                {industry.heroSubtitle}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Button
                  size="lg"
                  className="rounded-full bg-[#FF5E0D] hover:bg-[#EB061A] text-white px-6 shadow-[0_10px_24px_-8px_rgba(255,94,13,0.45)]"
                  asChild
                >
                  <Link to="/contact">
                    Talk to Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full bg-white text-[#1E1B18] border-black/15 hover:border-[#FF5E0D]/50 hover:text-[#FF5E0D] px-6"
                  asChild
                >
                  <Link to="/services">Explore All Services</Link>
                </Button>
              </div>

              {/* Industry quick-switcher */}
              <div className="mt-8 pt-6 border-t border-black/[0.06]">
                <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6B625B] mb-2.5">
                  Switch Sector
                </div>
                <div className="flex flex-wrap gap-2">
                  {INDUSTRIES.map((item) => {
                    const active = item.slug === industry.slug;
                    return (
                      <Link
                        key={item.slug}
                        to={`/industries/${item.slug}`}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all border ${
                          active
                            ? "bg-[#1E1B18] text-white border-[#1E1B18] shadow-sm"
                            : "bg-white text-[#574F49] border-black/[0.08] hover:border-[#FF5E0D]/45 hover:text-[#FF5E0D]"
                        }`}
                      >
                        {item.num} · {item.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Right Framed Photo */}
            <motion.div
              key={`${industry.slug}-hero-img`}
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="lg:col-span-6"
            >
              <div className="rounded-3xl overflow-hidden border-[5px] border-white shadow-[0_24px_60px_-20px_rgba(30,27,24,0.22)] aspect-[4/3] bg-[#FAF8F5]">
                <img
                  src={industry.heroImage}
                  alt={industry.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview & Impact Metrics */}
      <section className="section bg-white border-b border-black/[0.05]">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#FF5E0D]">
                <span className="h-[1.5px] w-5 bg-[#FF5E0D]" />
                {industry.tagline}
              </span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold tracking-tight text-[#1E1B18] leading-[1.12]">
                {industry.overviewTitle}{" "}
                <span className="text-[#FF5E0D]">
                  {industry.overviewHighlight}
                </span>
              </h2>
              <div className="mt-5 space-y-4 text-sm md:text-base text-[#574F49] leading-relaxed">
                {industry.overviewParagraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 grid gap-4">
              {industry.overviewMetrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl bg-[#1E1B18] text-white p-5 md:p-6 flex items-center gap-5 shadow-[0_14px_34px_-18px_rgba(30,27,24,0.45)] border border-white/10"
                >
                  <div className="font-display text-2xl md:text-3xl font-bold text-[#FF5E0D] shrink-0 min-w-[78px]">
                    {m.value}
                  </div>
                  <p className="text-sm text-white/85 leading-snug">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Challenges */}
      <section className="section bg-[#FAF8F5] section-dots border-b border-black/[0.05]">
        <div className="container-px mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#FF5E0D]">
              <span className="h-[1.5px] w-5 bg-[#FF5E0D]" />
              Industry Realities
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold tracking-tight text-[#1E1B18]">
              {industry.challengesHeading}
            </h2>
            <p className="mt-3 text-sm md:text-base text-[#574F49]">
              {industry.challengesSubheading}
            </p>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {industry.challenges.map((ch, idx) => (
              <div
                key={ch.title}
                className="rounded-2xl bg-white border border-black/[0.07] p-6 shadow-[0_10px_28px_-16px_rgba(30,27,24,0.14)] flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-semibold tracking-wider text-[#FF5E0D]">
                    0{idx + 1}
                  </span>
                  <h3 className="mt-3 font-display font-bold text-base text-[#1E1B18] leading-snug">
                    {ch.title}
                  </h3>
                  <p className="mt-2 text-xs md:text-[13px] text-[#574F49] leading-relaxed">
                    {ch.desc}
                  </p>
                </div>
                <div className="mt-5 h-[2px] w-8 rounded-full bg-[#FF5E0D]/35" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tailored Learning & Technology Solutions */}
      <section className="section bg-white section-grid border-b border-black/[0.05]">
        <div className="container-px mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#FF5E0D]">
              <span className="h-[1.5px] w-5 bg-[#FF5E0D]" />
              Our Capabilities
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold tracking-tight text-[#1E1B18]">
              {industry.solutionsHeading}
            </h2>
            <p className="mt-3 text-sm md:text-base text-[#574F49]">
              {industry.solutionsSubheading}
            </p>
          </div>

          <div className="mt-9 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.solutions.map((sol) => (
              <div
                key={sol.title}
                className="group rounded-2xl bg-white border border-black/[0.07] p-6 shadow-[0_12px_30px_-16px_rgba(30,27,24,0.14)] hover:border-[#FF5E0D]/35 hover:shadow-[0_18px_38px_-16px_rgba(255,94,13,0.18)] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="h-11 w-11 rounded-xl bg-[#FFF4EE] border border-[#FF5E0D]/15 flex items-center justify-center text-[#FF5E0D]">
                    <sol.icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-4 font-display font-bold text-lg text-[#1E1B18] leading-snug">
                    {sol.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#574F49] leading-relaxed">
                    {sol.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-black/[0.06] flex flex-wrap gap-1.5">
                  {sol.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#FAF8F5] text-[#574F49] border border-black/[0.06]"
                    >
                      <CheckCircle2 className="h-3 w-3 text-[#FF5E0D]" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Formats + Closing CTA */}
      <section className="section bg-[#FAF8F5]">
        <div className="container-px mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#FF5E0D]">
              <span className="h-[1px] w-6 bg-[#FF5E0D]/50" />
              Delivery Formats
              <span className="h-[1px] w-6 bg-[#FF5E0D]/50" />
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold tracking-tight text-[#1E1B18]">
              {industry.formatsHeading}
            </h2>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industry.formats.map((fmt) => (
              <div
                key={fmt.title}
                className="rounded-2xl bg-white border border-black/[0.07] p-5 shadow-[0_10px_28px_-16px_rgba(30,27,24,0.12)]"
              >
                <div className="h-10 w-10 rounded-xl bg-[#FFF4EE] border border-[#FF5E0D]/15 flex items-center justify-center text-[#FF5E0D]">
                  <fmt.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display font-bold text-[15px] text-[#1E1B18]">
                  {fmt.title}
                </h3>
                <p className="mt-1.5 text-xs text-[#6B625B] leading-relaxed">
                  {fmt.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Executive Dark CTA Banner */}
          <div className="mt-12 relative overflow-hidden rounded-3xl bg-[#1E1B18] text-white p-8 md:p-12 shadow-[0_24px_60px_-20px_rgba(30,27,24,0.45)] border border-white/10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#FF5E0D]/25 blur-3xl"
            />
            <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#F89E2C]">
                  <span className="h-px w-6 bg-[#F89E2C]" />
                  {industry.name}
                </span>
                <h3 className="mt-3 font-display text-2xl md:text-3xl font-bold text-white leading-tight">
                  {industry.ctaTitle}
                </h3>
                <p className="mt-2 text-sm md:text-base text-white/75">
                  {industry.ctaBody}
                </p>
              </div>
              <Button
                size="lg"
                className="shrink-0 rounded-full bg-[#FF5E0D] hover:bg-[#EB061A] text-white px-7 shadow-[0_10px_28px_-8px_rgba(255,94,13,0.6)]"
                asChild
              >
                <Link to="/contact">
                  Start a Conversation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
