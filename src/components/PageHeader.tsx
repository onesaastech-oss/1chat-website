import React from "react";

type PageHeaderProps = {
  title: string;
  highlight?: string;
  description: string;
  dark?: boolean;
};

export default function PageHeader({ title, highlight, description, dark = false }: PageHeaderProps) {
  return (
    <div
      className={
        dark
          ? "bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 py-16 text-white border-b border-white/10"
          : "bg-gradient-to-b from-slate-50 to-white py-16 border-b border-slate-100"
      }
    >
      <div className="page-container text-center">
        <h1 className={`text-4xl font-black sm:text-5xl lg:text-6xl mb-6 ${dark ? "text-white" : "text-slate-900"}`}>
          {title}{" "}
          {highlight ? (
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              {highlight}
            </span>
          ) : null}
        </h1>
        <p
          className={`text-lg font-medium max-w-2xl mx-auto leading-relaxed ${
            dark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
