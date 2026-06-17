import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <img src="/logo-full.png" width={110} alt="" />
          {/* <span className="text-2xl font-black tracking-tight text-slate-900">1Chat</span> */}
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">

          <a href="/#features" className="hover:text-green-600 transition-colors">Features</a>

          <a href="/#global" className="hover:text-green-600 transition-colors">Global Reach</a>

          <a href="/#pricing" className="hover:text-green-600 transition-colors">Pricing</a>

          <a href="/#team" className="hover:text-green-600 transition-colors">Team</a>

        </div>

        <a href="https://w1chat.com/" target="_blank" rel="noreferrer">
          <button className="rounded-full bg-slate-900 px-6 py-2.5 text-sm font-bold text-white hover:bg-slate-800 transition-all shadow-lg cursor-pointer">
            Get Started
          </button>
        </a>

      </div>

    </nav>
  );
};

export default Navbar;