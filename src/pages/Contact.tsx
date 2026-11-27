import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  User,
  Building2,
  Layers,
  MessageSquare,
  Target,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { contactApi, type ContactForm } from "@/lib/api";
import aboutHow from "@/assets/about-how.jpg";

const SERVICES = [
  "Custom e-Learning Solutions",
  "Game-Based e-Learning & Microlearning",
  "Video, Animation & 3D Design",
  "Websites, Apps & Moodle LMS",
  "Branding & UI/UX Designing",
  "AR / VR & Audio Production",
  "Flash to HTML5 Conversion",
  "Other",
];

const emptyForm: ContactForm = {
  name: "",
  email: "",
  phone: "",
  organisation: "",
  service_interest: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  const mut = useMutation({
    mutationFn: (data: ContactForm) => contactApi.submit(data),
    onSuccess: () => {
      setSubmitted(true);
      setForm(emptyForm);
    },
    onError: (e: Error) => toast.error(e.message || "Something went wrong"),
  });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    mut.mutate(form);
  }

  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-[#FAF8F5] section-grid py-14 md:py-20">
        {/* Top-right diagonal office photo with crisp orange ribbon edge */}
        <div
          className="hidden lg:block absolute top-0 right-0 w-[56%] h-[340px] pointer-events-none"
          style={{ clipPath: "polygon(28% 0, 100% 0, 100% 100%, 0% 100%)" }}
          aria-hidden="true"
        >
          <img
            src={aboutHow}
            alt="Cilantra studio workspace"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1E1B18]/10 via-[#F89E2C]/[0.08] to-[#F3E3CE]/75" />
          {/* Diagonal orange accent stripe along the left cut */}
          <div
            className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#FF5E0D] to-[#F89E2C] opacity-85"
            style={{ clipPath: "polygon(0 100%, 72% 0, 100% 0, 28% 100%)" }}
          />
        </div>

        {/* Bottom-left subtle warm orange ribbon */}
        <svg
          aria-hidden="true"
          viewBox="0 0 320 120"
          preserveAspectRatio="none"
          className="pointer-events-none absolute bottom-0 left-0 w-56 md:w-80 h-16 md:h-24"
        >
          <path
            d="M0,25 L260,120 L0,120 Z"
            fill="#FF5E0D"
            fillOpacity="0.82"
          />
          <path
            d="M0,55 L190,120 L0,120 Z"
            fill="#F89E2C"
            fillOpacity="0.45"
          />
        </svg>

        <div className="container-px mx-auto max-w-7xl relative z-10">
          {/* Header */}
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#FF5E0D]">
              <span className="h-[1.5px] w-6 bg-[#FF5E0D]" />
              Contact
            </span>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#1E1B18] leading-[1.08]">
              Let&apos;s Start a{" "}
              <span className="text-[#FF5E0D]">Conversation</span>
            </h1>
            <p className="mt-4 text-base text-[#574F49] leading-relaxed max-w-lg">
              Tell us about your learning challenge and we&apos;ll help you design
              a solution that actually works.
            </p>
          </div>

          {/* Form + Info Grid */}
          <div className="mt-10 grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Form Card */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="rounded-2xl bg-white border border-black/[0.06] shadow-[0_24px_60px_-20px_rgba(30,27,24,0.16)] p-10 text-center">
                  <CheckCircle2 className="mx-auto h-14 w-14 text-[#FF5E0D]" />
                  <h2 className="mt-4 font-display text-2xl font-bold text-[#1E1B18]">
                    Message received!
                  </h2>
                  <p className="mt-2 text-[#574F49]">
                    We&apos;ll be in touch within 1–2 business days.
                  </p>
                  <Button
                    className="mt-6 rounded-full"
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={onSubmit}
                  className="rounded-2xl bg-white border border-black/[0.06] shadow-[0_24px_60px_-20px_rgba(30,27,24,0.16)] p-7 md:p-9 space-y-5"
                >
                  <div className="h-1 w-8 rounded-full bg-[#FF5E0D]" />

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <Label
                        htmlFor="name"
                        className="inline-flex items-center gap-2 text-xs font-semibold text-[#1E1B18]"
                      >
                        <User className="h-3.5 w-3.5 text-[#FF5E0D]" />
                        <span>
                          Full Name <span className="text-[#FF5E0D]">*</span>
                        </span>
                      </Label>
                      <Input
                        id="name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        required
                        className="mt-2 rounded-xl border-black/10 bg-[#FAF8F5]/50 focus:bg-white"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="email"
                        className="inline-flex items-center gap-2 text-xs font-semibold text-[#1E1B18]"
                      >
                        <Mail className="h-3.5 w-3.5 text-[#FF5E0D]" />
                        <span>
                          Email <span className="text-[#FF5E0D]">*</span>
                        </span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        required
                        className="mt-2 rounded-xl border-black/10 bg-[#FAF8F5]/50 focus:bg-white"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="phone"
                        className="inline-flex items-center gap-2 text-xs font-semibold text-[#1E1B18]"
                      >
                        <Phone className="h-3.5 w-3.5 text-[#FF5E0D]" />
                        <span>Phone</span>
                      </Label>
                      <Input
                        id="phone"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="mt-2 rounded-xl border-black/10 bg-[#FAF8F5]/50 focus:bg-white"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="org"
                        className="inline-flex items-center gap-2 text-xs font-semibold text-[#1E1B18]"
                      >
                        <Building2 className="h-3.5 w-3.5 text-[#FF5E0D]" />
                        <span>Organisation</span>
                      </Label>
                      <Input
                        id="org"
                        value={form.organisation}
                        onChange={(e) =>
                          setForm({ ...form, organisation: e.target.value })
                        }
                        className="mt-2 rounded-xl border-black/10 bg-[#FAF8F5]/50 focus:bg-white"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label
                        htmlFor="service"
                        className="inline-flex items-center gap-2 text-xs font-semibold text-[#1E1B18]"
                      >
                        <Layers className="h-3.5 w-3.5 text-[#FF5E0D]" />
                        <span>Service Interest</span>
                      </Label>
                      <Select
                        value={form.service_interest}
                        onValueChange={(v) =>
                          setForm({ ...form, service_interest: v })
                        }
                      >
                        <SelectTrigger
                          id="service"
                          className="mt-2 rounded-xl border-black/10 bg-[#FAF8F5]/50 focus:bg-white"
                        >
                          <SelectValue placeholder="Select a solution" />
                        </SelectTrigger>
                        <SelectContent>
                          {SERVICES.map((s) => (
                            <SelectItem key={s} value={s}>
                              {s}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="md:col-span-2">
                      <Label
                        htmlFor="message"
                        className="inline-flex items-center gap-2 text-xs font-semibold text-[#1E1B18]"
                      >
                        <MessageSquare className="h-3.5 w-3.5 text-[#FF5E0D]" />
                        <span>
                          Tell us about your learning need{" "}
                          <span className="text-[#FF5E0D]">*</span>
                        </span>
                      </Label>
                      <Textarea
                        id="message"
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        required
                        rows={5}
                        className="mt-2 rounded-xl border-black/10 bg-[#FAF8F5]/50 focus:bg-white"
                      />
                    </div>
                    <div className="md:col-span-2 pt-1">
                      <Button
                        type="submit"
                        size="lg"
                        disabled={mut.isPending}
                        className="rounded-xl bg-[#FF5E0D] hover:bg-[#EB061A] text-white px-7 shadow-[0_10px_24px_-8px_rgba(255,94,13,0.5)]"
                      >
                        {mut.isPending ? (
                          "Sending…"
                        ) : (
                          <>
                            Send Message <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </form>
              )}
            </div>

            {/* Right Info Cards */}
            <aside className="lg:col-span-5 space-y-6">
              {/* Dark Navy/Charcoal Reach Us Directly Card */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0F243E] via-[#13294B] to-[#1E1B18] text-white p-7 md:p-8 shadow-[0_22px_50px_-18px_rgba(15,36,62,0.45)] border border-white/10">
                {/* Subtle glowing orange globe graphic on right */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-12 -bottom-12 h-56 w-56 rounded-full bg-[#FF5E0D]/25 blur-3xl"
                />
                <svg
                  aria-hidden="true"
                  viewBox="0 0 220 220"
                  className="pointer-events-none absolute -right-10 -bottom-8 w-52 h-52 text-[#F89E2C] opacity-25"
                >
                  <circle cx="110" cy="110" r="90" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />
                  <ellipse cx="110" cy="110" rx="46" ry="90" fill="none" stroke="currentColor" strokeWidth="1" />
                  <ellipse cx="110" cy="110" rx="90" ry="38" fill="none" stroke="currentColor" strokeWidth="1" />
                  <circle cx="72" cy="88" r="3.5" fill="#FF5E0D" />
                  <circle cx="132" cy="102" r="4" fill="#FF5E0D" />
                  <circle cx="96" cy="144" r="3" fill="#FF5E0D" />
                </svg>

                <div className="relative">
                  <div className="h-1 w-8 rounded-full bg-[#FF5E0D] mb-4" />
                  <h3 className="font-display text-xl font-bold text-white">
                    Reach us directly
                  </h3>
                  <div className="mt-6 space-y-5 text-sm">
                    <a
                      href="mailto:sales@cilantra.in"
                      className="flex items-center gap-3.5 group"
                    >
                      <div className="h-10 w-10 rounded-xl bg-[#FF5E0D]/20 border border-[#FF5E0D]/30 flex items-center justify-center shrink-0 text-[#F89E2C] group-hover:bg-[#FF5E0D]/30 transition-colors">
                        <Mail className="h-4 w-4" />
                      </div>
                      <span>
                        <div className="font-semibold text-white">Email</div>
                        <div className="text-white/75 group-hover:text-[#F89E2C] transition-colors">
                          sales@cilantra.in
                        </div>
                      </span>
                    </a>

                    <a
                      href="tel:+917592471667"
                      className="flex items-center gap-3.5 group"
                    >
                      <div className="h-10 w-10 rounded-xl bg-[#FF5E0D]/20 border border-[#FF5E0D]/30 flex items-center justify-center shrink-0 text-[#F89E2C] group-hover:bg-[#FF5E0D]/30 transition-colors">
                        <Phone className="h-4 w-4" />
                      </div>
                      <span>
                        <div className="font-semibold text-white">Phone</div>
                        <div className="text-white/75 group-hover:text-[#F89E2C] transition-colors">
                          +91-7592-471667 | +91-8108771792
                        </div>
                      </span>
                    </a>

                    <div className="flex items-center gap-3.5">
                      <div className="h-10 w-10 rounded-xl bg-[#FF5E0D]/20 border border-[#FF5E0D]/30 flex items-center justify-center shrink-0 text-[#F89E2C]">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <span>
                        <div className="font-semibold text-white">Location</div>
                        <div className="text-white/75">Pan-India delivery</div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* White What to expect Card */}
              <div className="relative overflow-hidden rounded-2xl bg-white border border-black/[0.06] shadow-[0_18px_45px_-20px_rgba(30,27,24,0.16)] p-7">
                <Target
                  aria-hidden="true"
                  className="pointer-events-none absolute right-5 top-5 h-20 w-20 text-[#FF5E0D]/[0.12]"
                  strokeWidth={1.35}
                />
                <div className="relative">
                  <div className="h-1 w-8 rounded-full bg-[#FF5E0D] mb-4" />
                  <h3 className="font-display text-lg font-bold text-[#1E1B18] mb-4">
                    What to expect
                  </h3>
                  <ul className="space-y-3 text-sm">
                    {[
                      "Reply within 1–2 business days",
                      "No sales pressure — just a conversation",
                      "We'll ask the right questions to understand your need",
                      "Free initial consultation",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-[#574F49]"
                      >
                        <CheckCircle2 className="h-4 w-4 text-[#FF5E0D] mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
