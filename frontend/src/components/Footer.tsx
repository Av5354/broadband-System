import { Wifi, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className=" bg-[#0E0E0E]">
    {/* CTA strip */}
    <div className="bg-[rgba(0,242,255,0.08)] py-8 border-t border-b border-[rgba(0,242,255,0.3)] shadow-[inset_2px_2px_6px_rgba(255,255,255,0.15),inset_-3px_-3px_8px_rgba(0,0,0,0.4),0_10px_30px_rgba(0,0,0,0.3)]  backdrop-blur-[16px]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-bold text-white">
            Get connected with us and stay connected!
          </h3>
          <p className="text-white/70 text-sm mt-1">
            Experience lightning-fast internet with EKASIT TECH.
          </p>
        </div>
        <div className="flex items-center gap-6 text-white">
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5" />
            <span className="font-semibold">+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            <span className="font-semibold">+91 12345 67890</span>
          </div>
        </div>
      </div>
    </div>

    {/* Main footer */}
    <div className="container mx-auto px-4 py-12 ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 font-bold text-xl mb-4 text-white">
            <Wifi className="h-6 w-6 text-[#00F2FF]" />
            <span className="text-[#00F2FF]">EKASIT</span> TECH
          </div>
          <p className="text-sm text-white/50 leading-relaxed">
            Reliable Internet Services — Fast, affordable broadband for
            everyone. Connecting homes and businesses since 2020.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-white text-sm uppercase tracking-wider">
            Product
          </h4>
          <div className="flex flex-col gap-2 text-sm text-white/50">
            <Link to="/" className="hover:text-[#00F2FF] transition-colors">
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-[#00F2FF] transition-colors"
            >
              About
            </Link>
            <Link
              to="/services"
              className="hover:text-[#00F2FF] transition-colors"
            >
              Services
            </Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-white text-sm uppercase tracking-wider">
            Support
          </h4>
          <div className="flex flex-col gap-2 text-sm text-white/50">
            <Link
              to="/plans"
              className="hover:text-[#00F2FF] transition-colors"
            >
              Plans
            </Link>
            <Link
              to="/contact"
              className="hover:text-[#00F2FF] transition-colors"
            >
              Contact
            </Link>
            <span className="cursor-pointer hover:text-[#00F2FF] transition-colors">
              FAQ
            </span>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-white text-sm uppercase tracking-wider">
            Contact
          </h4>
          <div className="flex flex-col gap-3 text-sm text-white/50">
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4  text-[#00F2FF] bg-[#22d3ee1a]" /> +91
              98765 43210
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4  text-[#00F2FF] bg-[#22d3ee1a]" />{" "}
              info@ekasittech.com
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4  text-[#00F2FF] bg-[#22d3ee1a]" />{" "}
              India
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-white/30">
        © {new Date().getFullYear()} EKASIT TECH. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
