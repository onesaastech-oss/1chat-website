import React from "react";
import { PageShell } from "../components/PageShell";
import { PageHero } from "../components/PageHero";
import { TeamSection } from "../components/TeamSection";

export default function Team() {
  return (
    <PageShell>
      <PageHero
        title="Our team"
        subtitle="OneChatting is built by OneSaaS Technologies — focused on practical WhatsApp tools for businesses that need reliable communication at scale."
      />

      <section className="border-b border-slate-100 py-10">
        <div className="page-container">
          <p className="body-text">
            We combine product engineering with hands-on customer support to help teams adopt the WhatsApp
            Business API without complexity. From live chat and campaign management to developer integrations,
            our goal is to give every business a clear, dependable way to talk to customers on WhatsApp.
          </p>
          <p className="body-text mt-4">
            Based in Assam, India, we serve customers across the country and internationally — with a
            commitment to secure infrastructure, transparent billing, and continuous platform improvements
            driven by real user feedback.
          </p>
        </div>
      </section>

      <TeamSection embedded />
    </PageShell>
  );
}
