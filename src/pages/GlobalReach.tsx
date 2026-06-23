import React from "react";
import { Globe as GlobeIcon } from "lucide-react";
import { PageShell } from "../components/PageShell";
import { PageHero } from "../components/PageHero";
import { globalSections, globalStats, trustBadges } from "../data/marketing";
import { REGISTER_URL } from "../config/platform";

export default function GlobalReach() {
  return (
    <PageShell className="bg-white">
      <PageHero
        dark
        title="Global reach"
        subtitle="Reach customers wherever they use WhatsApp — with reliable delivery, Meta-compliant messaging, and infrastructure built for scale."
      />

      <section className="section-pad bg-gradient-to-br from-emerald-700 to-green-700 text-white">
        <div className="page-container">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-medium">
                <GlobeIcon className="h-3.5 w-3.5" />
                Worldwide infrastructure
              </span>
              <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">Trusted by businesses globally</h2>
              <p className="mt-3 text-base leading-relaxed text-emerald-50">
                OneChatting connects your team to WhatsApp&apos;s official Cloud API so you can support
                customers and run campaigns across regions with consistent uptime and delivery tracking.
              </p>

              <div className="mt-8 space-y-4">
                {trustBadges.map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="rounded-lg border border-white/20 bg-white/10 p-4">
                    <div className="flex items-center gap-2">
                      <Icon className="h-5 w-5 text-emerald-100" />
                      <span className="font-medium">{label}</span>
                    </div>
                    <p className="mt-2 text-sm text-emerald-50/90">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {globalStats.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-white/20 bg-white/10 p-5 text-center">
                  <p className="text-2xl font-semibold sm:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-sm text-emerald-100">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="page-container space-y-8">
          {globalSections.map((section) => (
            <div key={section.title} className="card">
              <h3 className="heading-3">{section.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{section.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-100 bg-slate-50 py-10">
        <div className="page-container text-center">
          <p className="body-text max-w-xl mx-auto">
            Start with one project and expand to multiple WhatsApp Business numbers as your business grows.
          </p>
          <a href={REGISTER_URL} className="btn-primary mt-5">
            Create your account
          </a>
        </div>
      </section>
    </PageShell>
  );
}
