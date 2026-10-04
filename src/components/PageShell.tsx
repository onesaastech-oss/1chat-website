import React from "react";
import Navbar from "./ui/Navbar";
import { Footer } from "./ui/Footer";
import { PageEnter } from "./motion/Reveal";

type PageShellProps = {
  children: React.ReactNode;
  className?: string;
};

export function PageShell({ children, className = "bg-white" }: PageShellProps) {
  return (
    <div className={`min-h-screen w-full font-sans text-slate-900 selection:bg-green-100 flex flex-col ${className}`}>
      <Navbar />
      <main className="flex-grow">
        <PageEnter>{children}</PageEnter>
      </main>
      <Footer />
    </div>
  );
}
