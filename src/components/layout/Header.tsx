import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ui/theme-toggle";
import gaiaMark from "@/assets/gaia-mark-1.png";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/why-gaia", label: "Why GAIA" },
  { to: "/learning-hub", label: "Learning Hub" },
  { to: "/projects", label: "Projects & Demos" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact/Booking" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2" aria-label="GAIA home">
          <img
            src={gaiaMark}
            alt="GAIA abstract mark - green nodes and leaf motif"
            loading="eager"
            width={28}
            height={28}
            className="rounded-sm"
          />
          <span className="text-base font-semibold tracking-tight">GAIA</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm transition-colors hover:text-primary ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <Button asChild size="sm" variant="outline">
              <a href="https://cal.com/" target="_blank" rel="noopener noreferrer" aria-label="Book a discovery call">
                Book a Call
              </a>
            </Button>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
