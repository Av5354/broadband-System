import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Wifi } from "lucide-react";
import { Button } from "../components/ui/button";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  // { to: "/services", label: "Services" },
  { to: "/plans", label: "Plans" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-[#0E0E0E]  backdrop-blur-[var(--glass-blur)] ">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 ">
        <Link
          to="/"
          className="flex items-center gap-2 font-bold text-xl text-white"
        >
          <Wifi className="h-6 w-6 text-[#00F2FF]" />
          <span className="text-[#00F2FF] ">EKASIT</span>
          <span className="text-white">TECH</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === l.to
                  ? "text-[#00F2FF]"
                  : "text-white/80 hover:text-[#00F2FF]"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Button
            asChild
            size="sm"
            className="ml-4 rounded-full hover:bg-[#ffffffc2]  bg-[#ffffffc2] border-0 text-black font-semibold px-6"
          >
            <Link to="/contact">Subscribe Now</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[hsl(220,40%,13%)] px-4 pb-4">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                pathname === l.to
                  ? "text-primary"
                  : "text-white/70 hover:text-primary"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Button
            asChild
            size="sm"
            className="mt-2 w-full rounded-full gradient-primary border-0 text-white font-semibold"
          >
            <Link to="/contact" onClick={() => setOpen(false)}>
              Subscribe Now
            </Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
