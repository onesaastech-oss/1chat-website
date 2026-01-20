import React from 'react';
import Navbar from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { MapPin, Phone, Mail, Globe as GlobeIcon } from 'lucide-react';

export default function ContactUs() {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-green-100 flex flex-col">
            <Navbar />

            <main className="flex-grow">
                {/* Header */}
                <div className="bg-gradient-to-b from-slate-50 to-white py-16 border-b border-slate-100">
                    <div className="mx-auto max-w-4xl px-6 text-center">
                        <h1 className="text-5xl font-black text-slate-900 sm:text-6xl mb-6">
                            Contact <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Us</span>
                        </h1>
                        <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
                            We&apos;re here to help and answer any question you might have. We look forward to hearing from you!
                        </p>
                    </div>
                </div>

                {/* Content */}
                <div className="mx-auto max-w-5xl px-6 py-16">
                    {/* Contact Information Grid */}
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {/* Address */}
                        <div className="group bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:border-green-200 hover:shadow-xl transition-all">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/30">
                                    <MapPin className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">Our Address</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        House No. 356, Nagajan<br />
                                        Kharupetia, Darrang<br />
                                        Assam, PIN - 784115<br />
                                        India
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="group bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:border-green-200 hover:shadow-xl transition-all">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/30">
                                    <Phone className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">Phone Number</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        <a href="tel:+917002695990" className="hover:text-green-600 transition-colors font-medium">
                                            +91-7002695990
                                        </a>
                                    </p>
                                    <p className="text-sm text-slate-500 mt-2">Mon-Fri, 9AM-6PM IST</p>
                                </div>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="group bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:border-green-200 hover:shadow-xl transition-all">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/30">
                                    <Mail className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">Email Address</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        <a href="mailto:contact@onesaas.in" className="hover:text-green-600 transition-colors font-medium">
                                            contact@onesaas.in
                                        </a>
                                    </p>
                                    <p className="text-sm text-slate-500 mt-2">We&apos;ll respond within 24 hours</p>
                                </div>
                            </div>
                        </div>

                        {/* Website */}
                        <div className="group bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:border-green-200 hover:shadow-xl transition-all">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/30">
                                    <GlobeIcon className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">Website</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        <a href="https://www.onesaas.in" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors font-medium">
                                            www.onesaas.in
                                        </a>
                                    </p>
                                    <p className="text-sm text-slate-500 mt-2">Visit our main website</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Company Information */}
                    <div className="bg-gradient-to-br from-slate-50 to-green-50/30 p-10 rounded-3xl border border-slate-200 shadow-xl">
                        <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">
                            Company Information
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6 text-slate-700">
                            <div className="bg-white p-6 rounded-xl border border-slate-100">
                                <p className="font-bold text-slate-900 mb-2 text-sm uppercase tracking-wider">Company Name</p>
                                <p className="text-base">Onesaas Technologies Private Limited</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-slate-100">
                                <p className="font-bold text-slate-900 mb-2 text-sm uppercase tracking-wider">CIN</p>
                                <p className="text-base font-mono">U46512AS2024PTC026214</p>
                            </div>
                            <div className="md:col-span-2 bg-white p-6 rounded-xl border border-slate-100">
                                <p className="font-bold text-slate-900 mb-2 text-sm uppercase tracking-wider">Registered Office</p>
                                <p className="text-base">House No. 356, Nagajan, Kharupetia, Darrang, Assam - 784115, India</p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="mt-16 text-center bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 shadow-2xl shadow-green-200">
                        <h3 className="text-3xl font-black text-white mb-4">Ready to Get Started?</h3>
                        <p className="text-green-50 text-lg mb-8 max-w-2xl mx-auto">
                            Experience the power of 1chat and transform your WhatsApp business communication today.
                        </p>
                        <button className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                            Start Free Trial
                        </button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
