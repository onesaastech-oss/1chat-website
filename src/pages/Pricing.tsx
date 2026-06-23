import React from "react";
import { CheckCircle2, Wallet } from "lucide-react";
import { PageShell } from "../components/PageShell";
import { PageHero } from "../components/PageHero";
import { pricingNotes, pricingPlans } from "../data/marketing";
import { REGISTER_URL } from "../config/platform";

export default function Pricing() {
  return (
    <PageShell className="bg-slate-50">
      <PageHero
        title="Pricing"
        subtitle="Simple per-project subscription plans plus a prepaid wallet for WhatsApp messaging usage."
      />

      <section className="section-pad">
        <div className="page-container">
          <div className="mb-8 grid gap-4 lg:grid-cols-2">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`card relative flex flex-col ${
                  plan.popular ? "border-green-400 ring-1 ring-green-400/30" : ""
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-2.5 left-5 rounded-full bg-green-600 px-3 py-0.5 text-xs font-medium text-white">
                    Best value
                  </span>
                )}
                <p className="text-sm font-medium text-slate-500">{plan.name} plan</p>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-semibold text-slate-900">₹{plan.price}</span>
                  <span className="text-sm text-slate-500">{plan.period}</span>
                </div>
                <p className="mt-2 text-xs text-slate-500">+ WhatsApp Cloud API message charges (Meta rates)</p>

                <ul className="mt-6 flex-1 space-y-2.5">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <a
                  href={REGISTER_URL}
                  className={`mt-6 text-center ${plan.popular ? "btn-primary w-full" : "btn-secondary w-full"}`}
                >
                  Choose {plan.name.toLowerCase()}
                </a>
              </div>
            ))}
          </div>

          <div className="card flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-600">
              <Wallet className="h-5 w-5" />
            </div>
            <div>
              <h3 className="heading-3">Wallet-based messaging</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                In addition to your project subscription, a prepaid wallet balance covers WhatsApp Cloud API
                messaging costs. Recharge anytime from the portal via secure online payment. Use your wallet
                for campaigns, outbound messages, and usage-based features. Full transaction history and
                downloadable receipts are available in the app.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="heading-3 mb-4">Good to know</h3>
            <ul className="space-y-2">
              {pricingNotes.map((note) => (
                <li key={note} className="flex items-start gap-2 text-sm text-slate-600">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
