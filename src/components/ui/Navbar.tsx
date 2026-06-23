import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LOGIN_URL, REGISTER_URL } from "../../config/platform";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Features", to: "/features" },
  { label: "Global Reach", to: "/global-reach" },
  { label: "Pricing", to: "/pricing" },
  { label: "Team", to: "/team" },
];

const Navbar: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
        <div className="page-container flex items-center justify-between py-3">
          <Link to="/" className="flex items-center">
            <img src="/logo-full.png" width={100} alt="OneChatting" />
          </Link>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`transition-colors hover:text-green-600 ${
                  pathname === link.to ? "text-green-600" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a href={LOGIN_URL} className="hidden sm:inline-flex text-sm font-medium text-slate-600 hover:text-green-600">
              Login
            </a>
            <a href={REGISTER_URL} className="btn-primary">
              Get Started
            </a>
          </div>
        </div>
      </nav>
      <div className="h-[61px]" aria-hidden="true" />
    </>
  );
};

export default Navbar;
