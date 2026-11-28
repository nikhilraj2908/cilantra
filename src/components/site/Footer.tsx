import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-2 border-t border-border bg-[#18121E]">
      <div className="container-px mx-auto max-w-7xl py-16 grid gap-12 md:grid-cols-4">
        {/* Brand block */}
        <div className="md:col-span-2">
          <Logo variant="footer" />
          <p className="mt-5 max-w-md text-sm text-white/75 leading-relaxed">
            Cilantra — delivering custom e-Learning design solutions and
            full-stack technology solutions for clients across 4 continents.
          </p>
          <div className="mt-6 space-y-2 text-sm text-white/75">
            <a
              href="mailto:amitgupta.rc@gmail.com"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" /> amitgupta.rc@gmail.com
            </a>
            <a
              href="tel:+919109585255"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" /> +91-9109585255 · +91-8108771792
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> India · Serving 4 Continents
            </div>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h4 className="text-sm font-semibold tracking-wide uppercase text-white">
            Explore
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["/about", "About Us"],
              ["/services", "Services"],
              ["/insights", "Industry We Serve"],
              ["/success-stories", "Our Work"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-white/75 hover:text-primary transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-sm font-semibold tracking-wide uppercase text-white">
            Solutions
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {[
              ["#custom-elearning", "Custom e-Learning"],
              ["#gamification", "Game-Based e-Learning"],
              ["#video-animation", "Video & 3D Animation"],
              ["#web-lms", "Websites, Apps & Moodle LMS"],
              ["#branding-design", "Branding & UI/UX"],
              ["#ar-vr-audio", "AR / VR & Audio"],
            ].map(([href, label]) => (
              <li key={href}>
                <a
                  href={`/services${href}`}
                  className="hover:text-primary transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px mx-auto max-w-7xl py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/75">
          <p>© {new Date().getFullYear()} Cilantra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
