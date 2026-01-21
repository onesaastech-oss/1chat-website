"use client";
import React, { useState, useEffect } from 'react';
import {
  CheckCircle2,
  MessageSquare,
  Zap,
  Bot,
  QrCode,
  Layers,
  BarChart3,
  Users,
  LayoutDashboard,
  FileText,
  Cpu,
  PieChart,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Globe as GlobeIcon,
  Sparkles
} from "lucide-react";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { Globe } from "@/components/ui/globe";
import Navbar from '@/components/ui/Navbar';
import { TeamSection } from '@/components/TeamSection';
import { Footer } from '@/components/ui/Footer';

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  const features = [
    { title: "Embedded Signup", desc: "Integrated system that makes customer onboarding effortless.", icon: LayoutDashboard },
    { title: "Integrated WhatsApp Chat", desc: "Seamlessly connect with customers through a unified chat interface.", icon: MessageSquare },
    { title: "QR Code", desc: "Quickly generate QR codes for your WhatsApp number with ease.", icon: QrCode },
    { title: "Chat-Bot", desc: "Engage customers 24/7 with intelligent automated responses.", icon: Bot },
    { title: "Manage Templates", desc: "Create and manage Meta templates directly inside our portal.", icon: FileText },
    { title: "Flow Maker", desc: "Build bot conversions easily with our advanced Flow Maker.", icon: Layers },
    { title: "API Integration", desc: "Enable smooth data sharing between your existing services.", icon: Cpu },
    { title: "Live Analysis", desc: "Get real-time status updates on your campaigns and messages.", icon: BarChart3 },
    { title: "Assign Agents", desc: "Route chats to team members with the granular Agents feature.", icon: Users },
    { title: "Campaigns", desc: "Effortlessly manage bulk marketing and broadcast schedules.", icon: Zap },
    { title: "AI Chatbot", desc: "Leverage advanced AI to automate complex customer interactions.", icon: Sparkles },
    { title: "Chat Report", desc: "Generate comprehensive analytics on all communications.", icon: PieChart },
  ];

  const pricingPlans = [
    {
      name: "Monthly",
      price: "500",
      period: "/month",
      features: ["All Features Included", "Unlimited Contacts", "Unlimited Campaigns", "24/7 Support"]
    },
    {
      name: "Yearly",
      price: "6000",
      period: "/year",
      popular: true,
      features: ["All Features Included", "Save ₹12,000/year", "Unlimited Campaigns", "Priority Support"]
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-green-100 scroll-smooth overflow-x-hidden">
      {/* --- Navigation --- */}
      <Navbar />

      {/* --- Hero Section with 3D Globe --- */}
      <section className="relative overflow-hidden px-6 pt-24 pb-4 lg:pt-32 lg:pb-10">

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-white"
          style={{
            backgroundImage: `
                 linear-gradient(to right, rgb(34 197 94 / 0.05) 1px, transparent 1px),
                 linear-gradient(to bottom, rgb(34 197 94 / 0.05) 1px, transparent 1px)
               `,
            backgroundSize: '60px 60px',
          }}>
        </div>

        {/* 3D Globe Background - Positioned on the right */}
        <div className="absolute right-0 top-0 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] opacity-40 z-20 translate-x-40 lg:translate-x-0">
          {isMounted && <Globe />}
        </div>

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-bold text-green-700 mb-8 shadow-sm animate-fade-in">
                <ShieldCheck className="h-4 w-4" /> Official WhatsApp Cloud API Partner
              </div>

              <h1 className="text-5xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl animate-fade-in leading-tight" style={{ animationDelay: '0.1s' }}>
                Revolutionize How You{" "}
                <PointerHighlight>
                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    Connect with Customers
                  </span>
                </PointerHighlight>
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-600 max-w-xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                1Chat is a trusted Meta-verified platform designed for secure, reliable, and compliant WhatsApp marketing automation.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <button className="group flex items-center gap-2 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-5 text-lg font-bold text-white shadow-xl shadow-green-200 hover:shadow-2xl hover:shadow-green-300 transition-all hover:scale-105">
                  Start Free Trial <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="flex items-center gap-2 rounded-2xl border-2 border-slate-200 bg-white px-8 py-5 text-lg font-bold text-slate-900 hover:border-green-600 hover:text-green-600 transition-all">
                  Watch Demo
                </button>
              </div>

              {/* Stats */}
              <div className="mt-16 grid grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="text-center lg:text-left">
                  <p className="text-4xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">10K+</p>
                  <p className="text-sm font-semibold text-slate-500 mt-1">Active Users</p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-4xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">98%</p>
                  <p className="text-sm font-semibold text-slate-500 mt-1">Satisfaction</p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-4xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">24/7</p>
                  <p className="text-sm font-semibold text-slate-500 mt-1">Support</p>
                </div>
              </div>
            </div>

            {/* Right Side - Empty space where globe shows through */}
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </section>

      {/* --- 3D Feature Grid --- */}
      <section id="features" className="py-24 relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white"></div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="mb-20 text-center">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold bg-green-100 text-green-700 border border-green-200">
                <Sparkles className="w-4 h-4 mr-2" />
                Powerful Features
              </span>
            </div>
            <h2 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Everything You Need to <br />
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Automate WhatsApp</span>
            </h2>
            <p className="mt-6 text-lg text-slate-600 font-medium max-w-3xl mx-auto">
              Comprehensive tools and features designed to streamline your customer communication and boost engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 hover:border-green-200 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white mb-5 shadow-lg shadow-green-500/30 group-hover:shadow-green-500/50 group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="h-7 w-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-black text-slate-900 mb-3 leading-tight group-hover:text-green-700 transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed font-medium mb-4">
                    {feature.desc}
                  </p>

                  {/* Decorative gradient bar */}
                  <div className="w-full h-1.5 rounded-full bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-teal-500/20 group-hover:from-green-500/60 group-hover:via-emerald-500/60 group-hover:to-teal-500/60 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <p className="text-slate-600 font-semibold mb-6">Ready to get started?</p>
            <button className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-green-200 hover:shadow-2xl hover:shadow-green-300 transition-all hover:scale-105">
              Explore All Features <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* --- Global Reach Section --- */}
      <section id="global" className="py-24 bg-white relative overflow-hidden">
        {/* Decorative grid pattern */}
        <div className="absolute inset-0 bg-white"
          style={{
            backgroundImage: `
                 linear-gradient(to right, rgb(34 197 94 / 0.05) 1px, transparent 1px),
                 linear-gradient(to bottom, rgb(34 197 94 / 0.05) 1px, transparent 1px)
               `,
            backgroundSize: '40px 40px',
          }}>
        </div>

        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold bg-green-100 text-green-700 border border-green-200">
                <GlobeIcon className="w-4 h-4 mr-2" />
                Global Presence
              </span>
            </div>
            <h2 className="text-4xl font-black text-slate-900 sm:text-5xl lg:text-6xl">
              Trusted{" "}
              <PointerHighlight>
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Worldwide
                </span>
              </PointerHighlight>
            </h2>
            <p className="mt-6 text-slate-600 font-medium max-w-2xl mx-auto text-lg">
              Connecting businesses with customers across the globe through WhatsApp&apos;s official Cloud API.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-green-100/50 hover:border-green-200 hover:shadow-2xl hover:shadow-green-200 transition-all">
              <p className="text-4xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">50+</p>
              <p className="text-sm text-slate-500 mt-2 font-semibold">Countries</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-green-100/50 hover:border-green-200 hover:shadow-2xl hover:shadow-green-200 transition-all">
              <p className="text-4xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">1M+</p>
              <p className="text-sm text-slate-500 mt-2 font-semibold">Messages/Day</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-green-100/50 hover:border-green-200 hover:shadow-2xl hover:shadow-green-200 transition-all">
              <p className="text-4xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">99.9%</p>
              <p className="text-sm text-slate-500 mt-2 font-semibold">Uptime</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-green-100/50 hover:border-green-200 hover:shadow-2xl hover:shadow-green-200 transition-all">
              <p className="text-4xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">24/7</p>
              <p className="text-sm text-slate-500 mt-2 font-semibold">Support</p>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-12 pt-12 border-t border-slate-100">
            <div className="flex items-center gap-3 text-slate-600">
              <ShieldCheck className="w-8 h-8 text-green-600" />
              <span className="font-bold">Meta Verified</span>
            </div>
            <div className="flex items-center gap-3 text-slate-600">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
              <span className="font-bold">Enterprise Ready</span>
            </div>
            <div className="flex items-center gap-3 text-slate-600">
              <Zap className="w-8 h-8 text-green-600" />
              <span className="font-bold">Lightning Fast</span>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 sm:text-5xl">User Plans</h2>
            <p className="mt-4 text-slate-600">Choose the plan that works best for your business needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-3xl border ${plan.popular ? 'border-green-500 ring-4 ring-green-50' : 'border-slate-200'} p-8 bg-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1`}
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                    Best Value
                  </span>
                )}
                <p className="text-sm font-black text-slate-400 uppercase tracking-widest">{plan.name}</p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-5xl font-black tracking-tight text-slate-900">₹{plan.price}</span>
                  <span className="text-slate-500 text-sm font-bold">{plan.period}</span>
                </div>
                <p className="mt-2 text-[10px] font-bold text-slate-400">+ WhatsApp Cloud Messaging Charges</p>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-600">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" /> {feat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm font-medium text-slate-500 bg-slate-100 inline-block px-4 py-2 rounded-lg border border-slate-200">
              <span className="font-bold text-slate-700">Note:</span> Add-on services are available as paid extras.
            </p>
          </div>
        </div>
      </section>

      {/* --- Meet Our Team --- */}
      {/* --- Meet Our Team --- */}
      <TeamSection />

      {/* --- Footer --- */}
      <Footer />
    </div>
  );
}