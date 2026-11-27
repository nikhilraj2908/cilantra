import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/#industries", label: "Industry We Serve", hasDropdown: true },
  { to: "/success-stories", label: "Our Work" },
] as const;

const INDUSTRY_OPTIONS = [
  {
    num: "01",
    tagline: "Where knowledge builds trust.",
    label: "Banking & Finance",
    to: "/#industries",
  },
  {
    num: "02",
    tagline: "Where learning can change lives.",
    label: "Pharma & Healthcare",
    to: "/#industries",
  },
  {
    num: "03",
    tagline: "Where technology drives scale.",
    label: "Telecom & IT",
    to: "/#industries",
  },
  {
    num: "04",
    tagline: "From the ground to the skies.",
    label: "Airlines & Aviation",
    to: "/#industries",
  },
  {
    num: "05",
    tagline: "Where every interaction counts.",
    label: "Retail & Consumer",
    to: "/#industries",
  },
  {
    num: "06",
    tagline: "Where every decision matters.",
    label: "Oil & Gas",
    to: "/#industries",
  },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [industryMenuOpen, setIndustryMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky py-2.5 top-0 z-50 backdrop-blur-md transition-all border-b ${
        scrolled
          ? "bg-background/90 border-[#FF5E0D]/20 shadow-[0_6px_24px_-2px_rgba(255,94,13,0.24)]"
          : "bg-background/75 border-[#FF5E0D]/15 shadow-[0_4px_20px_-2px_rgba(255,94,13,0.16)]"
      }`}
    >
      <div className="container-px mx-auto max-w-7xl flex items-center justify-between relative">
        <Logo />

        {/* Desktop nav centered */}
        <nav className="hidden lg:flex items-center gap-2">
          {NAV.map((item) =>
            "hasDropdown" in item && item.hasDropdown ? (
              <div
                key={item.to}
                className="relative"
                onMouseEnter={() => setIndustryMenuOpen(true)}
                onMouseLeave={() => setIndustryMenuOpen(false)}
              >
                <Link
                  to={item.to}
                  onClick={() => setIndustryMenuOpen(false)}
                  className={`inline-flex items-center gap-1 px-3 py-3 text-sm font-medium transition-colors rounded-md ${
                    industryMenuOpen
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      industryMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </Link>

                {/* Hover Mega Dropdown */}
                {industryMenuOpen && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-6 z-50 w-[680px]">
                    <div className="rounded-2xl bg-[#141018] text-white border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.45)] p-7">
                      <div className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/50 pb-3 border-b border-white/10">
                        Solutions for Key Sectors
                      </div>

                      <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2">
                        {INDUSTRY_OPTIONS.map((sector) => (
                          <Link
                            key={sector.num}
                            to={sector.to}
                            onClick={() => setIndustryMenuOpen(false)}
                            className="group flex items-center justify-between gap-3 rounded-xl px-3 py-3 -mx-1 border-b border-white/[0.06] hover:bg-white/[0.06] transition-colors"
                          >
                            <div className="flex items-start gap-3 min-w-0">
                              <span className="text-xs font-semibold tabular-nums text-[#FF5E0D] mt-0.5 shrink-0">
                                {sector.num}
                              </span>
                              <div className="min-w-0">
                                <div className="text-sm font-semibold text-white group-hover:text-[#F89E2C] transition-colors leading-snug">
                                  {sector.tagline}
                                </div>
                                <div className="text-xs text-white/60 mt-0.5">
                                  {sector.label}
                                </div>
                              </div>
                            </div>
                            <ArrowUpRight className="h-4 w-4 text-white/35 group-hover:text-[#F89E2C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <NavLink key={item.to} to={item.to} exact={item.to === "/"}>
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <Button asChild className="rounded-full px-6">
            <Link to="/contact">Talk to Us</Link>
          </Button>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 rounded-md hover:bg-muted"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container-px mx-auto py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-base font-medium text-foreground/85 hover:bg-muted rounded-md"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2">
              <Link to="/contact" onClick={() => setOpen(false)}>
                Talk to Us
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

function NavLink({
  to,
  exact,
  children,
}: {
  to: string;
  exact?: boolean;
  children: React.ReactNode;
}) {
  const active = exact
    ? window.location.pathname === to
    : window.location.pathname.startsWith(to) && to !== "/";

  return (
    <Link
      to={to}
      className={`px-3 py-3 text-sm font-medium transition-colors rounded-md ${
        active
          ? "text-primary"
          : "text-foreground/80 hover:text-primary"
      }`}
    >
      {children}
    </Link>
  );
}
