import React from "react";
import { Link } from "react-router-dom";

type BrandLogoProps = {
  variant?: "light" | "dark";
  to?: string;
};

export function BrandLogo({ variant = "light", to = "/" }: BrandLogoProps) {
  const nameClass = variant === "dark" ? "text-white" : "text-slate-900";

  return (
    <Link to={to} className="inline-flex items-center gap-2.5" aria-label="OneChatting home">
      <img
        src="/logo.png"
        alt=""
        width={40}
        height={40}
        className="h-10 w-10 rounded-xl object-cover shadow-sm ring-1 ring-black/10"
      />
      <span className={`text-lg font-semibold tracking-tight ${nameClass}`}>OneChatting</span>
    </Link>
  );
}
