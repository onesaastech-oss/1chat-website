import React from "react";

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
      <div className="page-container text-center">
        <h1 className={`heading-1 mb-3 ${dark ? "!text-white" : ""}`}>{title}</h1>
        <p className={`body-text mx-auto max-w-2xl ${dark ? "!text-slate-300" : ""}`}>{subtitle}</p>
      </div>
    </div>
  );
}
