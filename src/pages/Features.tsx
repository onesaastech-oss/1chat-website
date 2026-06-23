import React from "react";
import { ArrowRight } from "lucide-react";
import { PageShell } from "../components/PageShell";
import { PageHero } from "../components/PageHero";
import { campaignWorkflow, featureModules } from "../data/marketing";
import { API_DOCS_URL, REGISTER_URL } from "../config/platform";

export default function Features() {
  return (
    <PageShell>
      <PageHero
        title="Platform features"
        subtitle="Everything in the OneChatting portal — from live inbox and campaigns to team permissions, billing, and developer API access."
      />

      <section className="section-pad">
        <div className="page-container space-y-14">
          {featureModules.map((module) => (
            <div key={module.title}>
              <div className="mb-6 max-w-3xl">
                <h2 className="heading-2">{module.title}</h2>
                <p className="body-text mt-2">{module.summary}</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {module.items.map((feature) => (
                  <article key={feature.title} className="card">
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-green-50 text-green-600">
                      <feature.icon className="h-4 w-4" />
                    </div>
                    <h3 className="heading-3">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{feature.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad border-t border-slate-100 bg-slate-50">
        <div className="page-container">
          <h2 className="heading-2 mb-6">Typical workflow</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {campaignWorkflow.map((step) => (
              <div key={step.step} className="card">
                <span className="text-sm font-medium text-green-600">{step.step}</span>
                <h3 className="heading-3 mt-2">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 py-10">
        <div className="page-container flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Build on the API</h2>
            <p className="mt-1 text-sm text-slate-600">
              Enable developer access per project and read the full API reference.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={API_DOCS_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              API documentation
            </a>
            <a href={REGISTER_URL} className="btn-primary">
              Get started <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
