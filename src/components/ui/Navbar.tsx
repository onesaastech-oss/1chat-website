import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <img src="/logo-full.png" width={110} alt="" />
          {/* <span className="text-2xl font-black tracking-tight text-slate-900">1Chat</span> */}
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">

          <Link href="/#features" className="hover:text-green-600 transition-colors">Features</Link>

          <Link href="/#global" className="hover:text-green-600 transition-colors">Global Reach</Link>

          <Link href="/#pricing" className="hover:text-green-600 transition-colors">Pricing</Link>

          <Link href="/#team" className="hover:text-green-600 transition-colors">Team</Link>

        </div>

        <Link href="https://w1chat.com/" target="_blank">
          <button className="rounded-full bg-slate-900 px-6 py-2.5 text-sm font-bold text-white hover:bg-slate-800 transition-all shadow-lg cursor-pointer">
            Get Started
          </button>
        </Link>

      </div>

    </nav>
  );
};

export default Navbar;