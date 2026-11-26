import { Link } from "react-router-dom";

/**
 * Cilantra Logo component.
 * Renders the Cilantra wordmark with the three rising bar-and-dot brand mark.
 * Uses CSS variables (--primary, --gold, --ink) so color changes in src/index.css
 * automatically update the logo mark as well.
 */
export function Logo({
  className = "",
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "footer";
}) {
  const textColor = variant === "footer" ? "#FFFFFF" : "hsl(var(--ink))";
  const darkBarColor = variant === "footer" ? "#FFFFFF" : "hsl(var(--ink))";

  return (
    <Link to="/" className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 42 36"
        className="h-8 w-auto shrink-0"
        aria-hidden="true"
      >
        {/* Short bar + blue dot */}
        <circle cx="7" cy="21" r="3.5" fill="hsl(var(--primary))" />
        <rect x="3.5" y="26.5" width="7" height="5.5" rx="2" fill={darkBarColor} />
        {/* Medium bar + blue dot */}
        <circle cx="19.5" cy="14" r="3.8" fill="hsl(var(--primary))" />
        <rect x="15.7" y="20" width="7.6" height="12" rx="2" fill={darkBarColor} />
        {/* Tall gold bar + gold dot */}
        <circle cx="33" cy="6.5" r="4.2" fill="hsl(var(--gold))" />
        <rect x="28.5" y="13" width="9" height="19" rx="2.5" fill="hsl(var(--gold))" />
      </svg>
      <span
        className="font-display font-bold text-2xl tracking-tight leading-none"
        style={{ color: textColor }}
      >
        cilantra
      </span>
    </Link>
  );
}
