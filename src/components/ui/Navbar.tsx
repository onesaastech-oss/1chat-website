import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { LOGIN_URL, REGISTER_URL } from "../../config/platform";
import { BrandLogo } from "../BrandLogo";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Features", to: "/features" },
  { label: "Global Reach", to: "/global-reach" },
  { label: "Pricing", to: "/pricing" },
];

const Navbar: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md"
        initial={{ y: -18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="page-container flex items-center justify-between py-3">
          <BrandLogo />

          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * index, duration: 0.35 }}
              >
                <Link
                  to={link.to}
                  className={`relative transition-colors hover:text-green-600 ${
                    pathname === link.to ? "text-green-600" : ""
                  }`}
                >
                  {link.label}
                  {pathname === link.to && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-green-600"
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a href={LOGIN_URL} className="hidden sm:inline-flex text-sm font-medium text-slate-600 hover:text-green-600">
              Login
            </a>
            <motion.a href={REGISTER_URL} className="btn-primary" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
              Get Started
            </motion.a>
          </div>
        </div>
      </motion.nav>
      <div className="h-[61px]" aria-hidden="true" />
    </>
  );
};

export default Navbar;
