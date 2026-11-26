import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/success-stories", label: "Success Stories" },
  { to: "/insights", label: "Insights & Resources" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
      <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <NavLink key={item.to} to={item.to} exact={item.to === "/"}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild>
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

