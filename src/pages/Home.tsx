import React, { useState, useEffect } from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Globe } from "../components/ui/globe";
import Navbar from "../components/ui/Navbar";
import { Footer } from "../components/ui/Footer";
import { Reveal, Stagger, StaggerItem } from "../components/motion/Reveal";
import { REGISTER_URL } from "../config/platform";
import { campaignWorkflow, heroStats, homeHighlights } from "../data/marketing";

const exploreLinks = [
  { title: "Features", desc: "Inbox, campaigns, templates, automation & API", to: "/features" },
  { title: "Global Reach", desc: "WhatsApp Cloud API at scale worldwide", to: "/global-reach" },
  { title: "Pricing", desc: "Per-project plans plus wallet-based messaging", to: "/pricing" },
];

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="min-h-screen w-full bg-white text-slate-900">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white">
        <div className="page-container grid items-center gap-10 py-12 lg:grid-cols-2 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eyebrow">
              <ShieldCheck className="h-3.5 w-3.5" />
              WhatsApp Cloud API platform
            </span>

            <h1 className="heading-1 mt-5">
              WhatsApp business messaging,{" "}
              <span className="text-green-600">built for teams</span>
            </h1>

            <p className="body-text mt-4 max-w-xl">
              OneChatting helps businesses manage live chats, approved templates, broadcast campaigns,
              and customer support on the official WhatsApp Business Platform — with agents, analytics,
              and API access in one place.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <motion.a href={REGISTER_URL} className="btn-primary" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
                Create account
                <ArrowRight className="h-4 w-4" />
              </motion.a>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link to="/features" className="btn-secondary">
                  View features
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="relative flex min-h-[280px] items-center justify-center lg:min-h-[360px]"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {isMounted && (
              <div className="h-[260px] w-[260px] sm:h-[320px] sm:w-[320px] lg:h-[360px] lg:w-[360px]">
                <Globe />
              </div>
            )}
          </motion.div>
        </div>

        <div className="border-t border-slate-100 bg-white">
          <Stagger className="page-container grid grid-cols-3 gap-4 py-6">
            {heroStats.map((stat) => (
              <StaggerItem key={stat.label} className="text-center">
                <p className="text-2xl font-semibold text-slate-900">{stat.value}</p>
                <p className="mt-0.5 text-xs text-slate-500 sm:text-sm">{stat.label}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* About */}
      <section className="section-pad border-b border-slate-100">
        <div className="page-container grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <h2 className="heading-2">What is OneChatting?</h2>
            <p className="body-text mt-4">
              OneChatting is a SaaS portal for WhatsApp Business API customers. Connect your WhatsApp
              Business account, organise contacts, submit templates for Meta approval, and run marketing
              or utility campaigns — while your support team handles live conversations from the same workspace.
            </p>
            <p className="body-text mt-4">
              Each project represents a WhatsApp number or brand. Owners can invite agents, set permissions,
              recharge a prepaid wallet for messaging, and integrate external systems through developer API tokens.
            </p>
          </Reveal>
          <Stagger className="grid gap-3 sm:grid-cols-2">
            {homeHighlights.slice(0, 4).map((item) => (
              <StaggerItem key={item.title} className="card">
                <item.icon className="h-5 w-5 text-green-600" />
                <h3 className="heading-3 mt-3">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* How it works */}
      <section className="section-pad bg-slate-50">
        <div className="page-container">
          <Reveal className="mb-10 max-w-2xl">
            <h2 className="heading-2">How it works</h2>
            <p className="body-text mt-3">
              Go from signup to sending your first campaign in three straightforward steps.
            </p>
          </Reveal>
          <Stagger className="grid gap-5 md:grid-cols-3">
            {campaignWorkflow.map((step) => (
              <StaggerItem key={step.step} className="card">
                <span className="text-sm font-medium text-green-600">{step.step}</span>
                <h3 className="heading-3 mt-2">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.desc}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Explore links */}
      <section className="section-pad">
        <div className="page-container">
          <Reveal className="mb-8 text-center">
            <h2 className="heading-2">Explore the platform</h2>
            <p className="body-text mt-2">Learn more about what OneChatting offers.</p>
          </Reveal>
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {exploreLinks.map((item) => (
              <StaggerItem key={item.to}>
                <Link to={item.to} className="card group block h-full">
                  <h3 className="heading-3 group-hover:text-green-600">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-green-600">
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-100 bg-green-600 py-12 text-white">
        <Reveal className="page-container flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h2 className="text-xl font-semibold sm:text-2xl">Ready to connect on WhatsApp?</h2>
            <p className="mt-1 text-sm text-green-100 sm:text-base">
              Create your account and set up your first project in minutes.
            </p>
          </div>
          <motion.a
            href={REGISTER_URL}
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-green-700 hover:bg-green-50"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
          >
            Create account <ArrowRight className="h-4 w-4" />
          </motion.a>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
