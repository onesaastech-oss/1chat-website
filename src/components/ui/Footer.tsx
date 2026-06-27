import {
    Globe as GlobeIcon,
    Mail,
    MapPin,
    MessageSquare,
    Phone,
} from "lucide-react";
import { Link } from 'react-router-dom';
import { API_DOCS_URL } from '../../config/platform';

export function Footer() {
    return (
        <footer className="bg-slate-900 pt-14 pb-8 text-slate-400">
            <div className="page-container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 text-white mb-4">
                            <img src="/logo-white.png" width={110} alt="OneChatting" />
                        </div>
                        <p className="max-w-md text-sm leading-relaxed text-slate-400">
                            OneChatting is a WhatsApp Business API platform for live chat, campaigns, templates,
                            team collaboration, and developer integrations — powered by the official WhatsApp Cloud API.
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
                        <h4 className="text-white text-sm font-medium mb-4">Contact</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-3"><MapPin className="h-5 w-5 text-green-500 shrink-0" /> Kharupetia, Assam, India</li>
                            <li className="flex items-center gap-3"><Phone className="h-5 w-5 text-green-500 shrink-0" /> +91 70026 95990</li>
                            <li className="flex items-center gap-3"><Mail className="h-5 w-5 text-green-500 shrink-0" /> contact@onesaas.in</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white text-sm font-medium mb-4">Product</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="hover:text-green-400 transition-colors">
                                <a href={API_DOCS_URL} target="_blank" rel="noopener noreferrer">API Docs</a>
                            </li>
                            <li className="hover:text-green-400 transition-colors">
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-center md:text-left">
                        <p className="text-sm text-slate-400">© 2026 OneChatting. All rights reserved.</p>
                        <p className="text-xs text-slate-500 mt-1">OneSaaS Technologies Private Limited</p>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500">
                        <Link to="/business-policy" className="hover:text-white cursor-pointer transition-colors">Business Policy</Link>
                        <Link to="/privacy-policy" className="hover:text-white cursor-pointer transition-colors">Privacy</Link>
                        <Link to="/terms" className="hover:text-white cursor-pointer transition-colors">Terms</Link>
                        <Link to="/refund-policy" className="hover:text-white cursor-pointer transition-colors">Refund Policy</Link>
                        <Link to="/contact" className="hover:text-white cursor-pointer transition-colors">Contact</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
