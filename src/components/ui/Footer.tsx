import React from 'react';
import Link from 'next/link';
import {
    Globe as GlobeIcon,
    MessageSquare,
    MapPin,
    Phone,
    Mail,
} from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-900 pt-24 pb-12 text-slate-400">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 text-white mb-6">
                            <img src="/logo-white.png" width={120} alt="" />
                        </div>
                        <p className="max-w-md text-base leading-relaxed">
                            Whatsapp for marketing and automation with latest AI technology. Powered by official WhatsApp Cloud API for modern tax firm automation.
                        </p>
                        <div className="mt-8 flex gap-4">
                            <div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                                <GlobeIcon className="h-5 w-5 text-white" />
                            </div>
                            <div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                                <MessageSquare className="h-5 w-5 text-white" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Contact Details</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li className="flex items-start gap-3"><MapPin className="h-5 w-5 text-green-500 shrink-0" /> Kharupetia, Assam, India</li>
                            <li className="flex items-center gap-3"><Phone className="h-5 w-5 text-green-500 shrink-0" /> +91 70026 95990</li>
                            <li className="flex items-center gap-3"><Mail className="h-5 w-5 text-green-500 shrink-0" /> contact@onesaas.in</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Product</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li className="hover:text-green-400 transition-colors cursor-pointer">Live Analysis</li>
                            <li className="hover:text-green-400 transition-colors cursor-pointer">Campaign Management</li>
                            <li className="hover:text-green-400 transition-colors cursor-pointer">Flow Maker</li>
                            <li className="hover:text-green-400 transition-colors cursor-pointer">API Docs</li>
                            <li className="hover:text-green-400 transition-colors">
                                <Link href="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <p className="text-sm">© 2026 1Chatting platform. All Rights Reserved.</p>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-600 mt-1 font-bold">OneSaas Technologies Private Limited</p>
                    </div>
                    <div className="flex items-center gap-6 text-xs font-bold uppercase tracking-widest">
                        <Link href="/business-policy" className="hover:text-white cursor-pointer transition-colors">Business Policy</Link>
                        <Link href="/privacy-policy" className="hover:text-white cursor-pointer transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-white cursor-pointer transition-colors">Terms</Link>
                        <Link href="/contact" className="hover:text-white cursor-pointer transition-colors">Contact</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
