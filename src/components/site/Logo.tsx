import { Link } from "react-router-dom";
import logo from "@/assets/cilantra-logo.png";
import footerLogo from "@/assets/cilantra-logo-white.png";

export function Logo({
  className = "",
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "footer";
}) {
  const logoSrc = variant === "footer" ? footerLogo : logo;

  return (
    <Link to="/" className={`inline-flex items-center ${className}`}>
      <img
        src={logoSrc}
        alt="Cilantra"
        className="h-10 w-auto md:h-12 object-contain"
      />
    </Link>
  );
}
