import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/ui/Navbar';
import { Footer } from '../components/ui/Footer';
import { Reveal, Stagger, StaggerItem } from '../components/motion/Reveal';
import { MapPin, Phone, Mail, Globe as GlobeIcon } from 'lucide-react';
import { REGISTER_URL } from '../config/platform';
import { useWebsiteContent } from '../context/WebsiteContent';

export default function ContactUs() {
    const { contact } = useWebsiteContent();
    const address = contact?.address || 'House No. 356, Nagajan, Kharupetia, Darrang, Assam, PIN - 784115, India';
    const phone = contact?.phone || '+91-7002695990';
    const email = contact?.email || 'contact@onesaas.in';
    const website = contact?.website || 'https://www.onesaas.in';
    const websiteLabel = contact?.website_label || 'www.onesaas.in';
    const phoneHref = `tel:${phone.replace(/[^\d+]/g, '')}`;

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-green-100 flex flex-col">
            <Navbar />

            <main className="flex-grow">
                {/* Header */}
                <div className="bg-gradient-to-b from-slate-50 to-white py-16 border-b border-slate-100">
                    <motion.div
                        className="page-container text-center"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <h1 className="text-5xl font-black text-slate-900 sm:text-6xl mb-6">
                            Contact <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Us</span>
                        </h1>
                        <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
                            We&apos;re here to help and answer any question you might have. We look forward to hearing from you!
                        </p>
                    </motion.div>
                </div>

                {/* Content */}
                <div className="page-container section-pad">
                    {/* Contact Information Grid */}
                    <Stagger className="grid md:grid-cols-2 gap-8 mb-16">
                        {/* Address */}
                        <StaggerItem className="group bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:border-green-200 hover:shadow-xl transition-all">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/30">
                                    <MapPin className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">Our Address</h3>
                                    <p className="text-slate-600 leading-relaxed whitespace-pre-line">{address}</p>
                                </div>
                            </div>
                        </StaggerItem>

                        {/* Phone */}
                        <StaggerItem className="group bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:border-green-200 hover:shadow-xl transition-all">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/30">
                                    <Phone className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">Phone Number</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        <a href={phoneHref} className="hover:text-green-600 transition-colors font-medium">
                                            {phone}
                                        </a>
                                    </p>
                                    <p className="text-sm text-slate-500 mt-2">{contact?.phone_note || 'Mon-Fri, 9AM-6PM IST'}</p>
                                </div>
                            </div>
                        </StaggerItem>

                        {/* Email */}
                        <StaggerItem className="group bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:border-green-200 hover:shadow-xl transition-all">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/30">
                                    <Mail className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">Email Address</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        <a href={`mailto:${email}`} className="hover:text-green-600 transition-colors font-medium">
                                            {email}
                                        </a>
                                    </p>
                                    <p className="text-sm text-slate-500 mt-2">{contact?.email_note || "We'll respond within 24 hours"}</p>
                                </div>
                            </div>
                        </StaggerItem>

                        {/* Website */}
                        <StaggerItem className="group bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:border-green-200 hover:shadow-xl transition-all">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/30">
                                    <GlobeIcon className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">Website</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        <a href={website} target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors font-medium">
                                            {websiteLabel}
                                        </a>
                                    </p>
                                    <p className="text-sm text-slate-500 mt-2">{contact?.website_note || 'Visit our main website'}</p>
                                </div>
                            </div>
                        </StaggerItem>
                    </Stagger>

                    {/* Company Information */}
                    <Reveal className="bg-gradient-to-br from-slate-50 to-green-50/30 p-10 rounded-3xl border border-slate-200 shadow-xl">
                        <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">
                            Company Information
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6 text-slate-700">
                            <div className="bg-white p-6 rounded-xl border border-slate-100">
                                <p className="font-bold text-slate-900 mb-2 text-sm uppercase tracking-wider">Company Name</p>
                                <p className="text-base">{contact?.company_name || 'Onesaas Technologies Private Limited'}</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-slate-100">
                                <p className="font-bold text-slate-900 mb-2 text-sm uppercase tracking-wider">CIN</p>
                                <p className="text-base font-mono">{contact?.cin || 'U46512AS2024PTC026214'}</p>
                            </div>
                            <div className="md:col-span-2 bg-white p-6 rounded-xl border border-slate-100">
                                <p className="font-bold text-slate-900 mb-2 text-sm uppercase tracking-wider">Registered Office</p>
                                <p className="text-base">{address}</p>
                            </div>
                        </div>
                    </Reveal>

                    {/* CTA Section */}
                    <Reveal className="mt-16 text-center bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 shadow-2xl shadow-green-200">
                        <h3 className="text-3xl font-black text-white mb-4">{contact?.cta_title || 'Ready to Get Started?'}</h3>
                        <p className="text-green-50 text-lg mb-8 max-w-2xl mx-auto">
                            {contact?.cta_text || 'Experience the power of OneChatting and transform your WhatsApp business communication today.'}
                        </p>
                        <motion.a
                          href={REGISTER_URL}
                          className="inline-block bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg shadow-xl"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                        >
                            {contact?.cta_button || 'Start Free Trial'}
                        </motion.a>
                    </Reveal>
                </div>
            </main>

            <Footer />
        </div>
    );
}
