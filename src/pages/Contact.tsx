import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
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
      {/* Hero */}
      <section className="hero-bg section relative overflow-hidden">
        <div className="container-px mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="eyebrow">Contact</span>
            <h1 className="display-h2 mt-3">Let's start a conversation</h1>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Tell us about your learning challenge and we'll help you design a
              solution that actually works.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-12 gap-10">
          {/* Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="card-elegant p-10 text-center">
                <CheckCircle2 className="mx-auto h-14 w-14 text-primary" />
                <h2 className="mt-4 font-display text-2xl">Message received!</h2>
                <p className="mt-2 text-muted-foreground">
                  We'll be in touch within 1–2 business days.
                </p>
                <Button
                  className="mt-6"
                  variant="outline"
                  onClick={() => setSubmitted(false)}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="card-elegant p-6 md:p-8 space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="org">Organisation</Label>
                    <Input
                      id="org"
                      value={form.organisation}
                      onChange={(e) =>
                        setForm({ ...form, organisation: e.target.value })
                      }
                      className="mt-2"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="service">Service interest</Label>
                    <Select
                      value={form.service_interest}
                      onValueChange={(v) =>
                        setForm({ ...form, service_interest: v })
                      }
                    >
                      <SelectTrigger id="service" className="mt-2">
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
                    <Label htmlFor="message">Tell us about your learning need *</Label>
                    <Textarea
                      id="message"
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      required
                      rows={6}
                      className="mt-2"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Button type="submit" size="lg" disabled={mut.isPending}>
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

          {/* Info */}
          <aside className="lg:col-span-5 space-y-6">
            <div className="card-elegant p-7">
              <h3 className="font-display text-xl">Reach us directly</h3>
              <div className="mt-5 space-y-4 text-sm">
                <a
                  href="mailto:sales@cilantra.in"
                  className="flex items-start gap-3 hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>
                    <div className="font-semibold text-foreground">Email</div>
                    <div className="text-muted-foreground">sales@cilantra.in</div>
                  </span>
                </a>
                <a
                  href="tel:+917592471667"
                  className="flex items-start gap-3 hover:text-primary transition-colors"
                >
                  <Phone className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>
                    <div className="font-semibold text-foreground">Phone</div>
                    <div className="text-muted-foreground">
                      +91-7592-471667 · +91-8108771792
                    </div>
                  </span>
                </a>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>
                    <div className="font-semibold text-foreground">Location</div>
                    <div className="text-muted-foreground">Pan-India delivery</div>
                  </span>
                </div>
              </div>
            </div>

            <div className="card-elegant p-6">
              <h3 className="font-display text-lg mb-3">What to expect</h3>
              <ul className="space-y-3 text-sm">
                {[
                  "Reply within 1–2 business days",
                  "No sales pressure — just a conversation",
                  "We'll ask the right questions to understand your need",
                  "Free initial consultation",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}

