import React from "react";
import { motion } from "framer-motion";

type PageHeroProps = {
  title: React.ReactNode;
  subtitle: string;
  dark?: boolean;
};

export function PageHero({ title, subtitle, dark = false }: PageHeroProps) {
  return (
    <div
      className={
        dark
          ? "border-b border-white/10 bg-gradient-to-br from-slate-900 to-emerald-950 py-12 text-white"
          : "border-b border-slate-100 bg-slate-50 py-12"
      }
    >
      <motion.div
        className="page-container text-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className={`heading-1 mb-3 ${dark ? "!text-white" : ""}`}>{title}</h1>
        <motion.p
          className={`body-text mx-auto max-w-2xl ${dark ? "!text-slate-300" : ""}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          {subtitle}
        </motion.p>
      </motion.div>
    </div>
  );
}
