import React from 'react';
import Navbar from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-green-100 flex flex-col">
            <Navbar />

            <main className="flex-grow">
                {/* Header */}
                <div className="bg-gradient-to-b from-slate-50 to-white py-16 border-b border-slate-100">
                    <div className="mx-auto max-w-4xl px-6 text-center">
                        <h1 className="text-5xl font-black text-slate-900 sm:text-6xl mb-6">
                            Privacy <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Policy</span>
                        </h1>
                        <p className="text-slate-500 font-medium">Last Updated: January 21, 2026</p>
                    </div>
                </div>

                {/* Content */}
                <div className="mx-auto max-w-4xl px-6 py-12 space-y-12">
                    {/* 1. Introduction */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-sm font-black">1</span>
                            Introduction
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                            At <strong className="text-slate-900">1chat</strong> (a product of Onesaas Technologies Private Limited), we are deeply committed to protecting the privacy and security of our users. This Privacy Policy explains how we collect, use, store, and safeguard personal information when you use our WhatsApp Business API platform and related services. By accessing or using 1chat, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
                        </p>
                    </section>

                    {/* 2. Data Collection */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-sm font-black">2</span>
                            Information We Collect
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">2.1 User Account Data</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    During registration and platform usage, we collect personal information including but not limited to: full name, email address, phone number, business name, billing address, and payment information. This data is essential for account creation, authentication, and service delivery.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">2.2 Technical and Usage Data</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    We automatically collect technical information to improve platform functionality, security, and user experience. This includes IP addresses, device types, browser information, operating system details, timestamps, and interaction patterns within the platform.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">2.3 End-User Communication Data</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    As a platform facilitating WhatsApp Business communications, we may process messages, media files, and contact information transmitted through our service. <strong className="text-slate-900">You are solely responsible</strong> for obtaining proper consent from your end-users before collecting or processing their personal information through WhatsApp messages sent via 1chat.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 3. Data Usage */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-sm font-black">3</span>
                            How We Use Your Information
                        </h2>
                        <ul className="list-disc list-outside ml-12 space-y-3 text-slate-600">
                            <li><strong className="text-slate-900">Service Provision:</strong> To create and manage your account, provide access to our WhatsApp Business API platform, process transactions, and deliver customer support.</li>
                            <li><strong className="text-slate-900">Platform Improvement:</strong> To analyze usage patterns, identify technical issues, enhance features, and optimize overall platform performance and reliability.</li>
                            <li><strong className="text-slate-900">Communication:</strong> To send important notifications regarding service updates, security alerts, policy changes, billing information, and support-related communications.</li>
                            <li><strong className="text-slate-900">Legal Compliance:</strong> To comply with applicable laws, regulations, legal processes, and Meta&apos;s WhatsApp Business API policies and terms of service.</li>
                            <li><strong className="text-slate-900">Security and Fraud Prevention:</strong> To detect, prevent, and respond to security incidents, fraudulent activities, and other harmful or illegal activities.</li>
                        </ul>
                    </section>

                    {/* 4. Data Sharing */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-sm font-black">4</span>
                            Information Sharing and Disclosure
                        </h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            <strong className="text-slate-900">We do not sell, rent, or trade your personal information.</strong> However, we may share information with third parties under the following circumstances:
                        </p>
                        <ul className="list-disc list-outside ml-12 space-y-3 text-slate-600">
                            <li><strong className="text-slate-900">Service Providers:</strong> We engage trusted third-party service providers (e.g., payment processors, cloud hosting providers, analytics services) who support our platform operations. These providers are contractually bound to maintain strict confidentiality and use data only for specified purposes.</li>
                            <li><strong className="text-slate-900">Meta/WhatsApp:</strong> As we utilize Meta&apos;s WhatsApp Business API, certain data is shared with Meta in accordance with their platform requirements and privacy policies.</li>
                            <li><strong className="text-slate-900">Legal Obligations:</strong> We may disclose information when required by law, court order, legal process, or government request, or when necessary to protect our legal rights, prevent fraud, or ensure platform security.</li>
                            <li><strong className="text-slate-900">Business Transfers:</strong> In the event of a merger, acquisition, reorganization, or sale of assets, user data may be transferred as part of the transaction, subject to the same privacy protections.</li>
                        </ul>
                    </section>

                    {/* 5. Data Security */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-sm font-black">5</span>
                            Data Security Measures
                        </h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. Our security practices include:
                        </p>
                        <ul className="list-disc list-outside ml-12 space-y-3 text-slate-600">
                            <li>Encryption of data in transit (SSL/TLS) and at rest</li>
                            <li>Secure authentication mechanisms and password protection</li>
                            <li>Regular security audits and vulnerability assessments</li>
                            <li>Access controls limiting employee access to personal data on a need-to-know basis</li>
                            <li>Continuous monitoring for security threats and suspicious activities</li>
                        </ul>
                        <p className="text-slate-600 leading-relaxed mt-4">
                            <strong className="text-slate-900">User Responsibility:</strong> You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Please notify us immediately of any unauthorized access or security breach.
                        </p>
                    </section>

                    {/* 6. Data Retention */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-sm font-black">6</span>
                            Data Retention
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                            We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with our legal obligations, resolve disputes, enforce our agreements, and maintain business records. When data is no longer required, we securely delete or anonymize it in accordance with our data retention policies and applicable laws.
                        </p>
                    </section>

                    {/* 7. User Rights */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-sm font-black">7</span>
                            Your Rights and Choices
                        </h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            Subject to applicable law, you have the following rights regarding your personal information:
                        </p>
                        <ul className="list-disc list-outside ml-12 space-y-3 text-slate-600">
                            <li><strong className="text-slate-900">Access:</strong> Request access to the personal data we hold about you</li>
                            <li><strong className="text-slate-900">Correction:</strong> Request correction of inaccurate or incomplete information</li>
                            <li><strong className="text-slate-900">Deletion:</strong> Request deletion of your personal data, subject to legal retention requirements</li>
                            <li><strong className="text-slate-900">Data Portability:</strong> Request a copy of your data in a structured, machine-readable format</li>
                            <li><strong className="text-slate-900">Objection:</strong> Object to certain processing activities</li>
                            <li><strong className="text-slate-900">Withdraw Consent:</strong> Withdraw previously given consent for data processing</li>
                        </ul>
                        <p className="text-slate-600 leading-relaxed mt-4">
                            To exercise these rights, please contact our support team at the contact information provided below. We will respond to your request within a reasonable timeframe as required by applicable law.
                        </p>
                    </section>

                    {/* 8. Changes to Policy */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-sm font-black">8</span>
                            Changes to This Privacy Policy
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                            We may update this Privacy Policy periodically to reflect changes in our practices, technologies, legal requirements, or business operations. We will notify users of material changes by posting the updated policy on our website and updating the &quot;Last Updated&quot; date. Your continued use of the platform after such modifications constitutes your acceptance of the revised Privacy Policy. We encourage you to review this policy regularly.
                        </p>
                    </section>

                    {/* 9. Contact Information */}
                    <section className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-sm font-black">9</span>
                            Contact Us
                        </h2>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
                        </p>
                        <div className="space-y-3 text-slate-700">
                            <p><strong className="text-slate-900">Company:</strong> Onesaas Technologies Private Limited</p>
                            <p><strong className="text-slate-900">Email:</strong> <a href="mailto:contact@onesaas.in" className="text-green-600 hover:text-green-700 font-medium">contact@onesaas.in</a></p>
                            <p><strong className="text-slate-900">Phone:</strong> <a href="tel:+917002695990" className="text-green-600 hover:text-green-700 font-medium">+91-7002695990</a></p>
                            <p><strong className="text-slate-900">Address:</strong> House No. 356, Nagajan, Kharupetia, Darrang, Assam - 784115, India</p>
                            <p><strong className="text-slate-900">Website:</strong> <a href="https://www.onesaas.in" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 font-medium">www.onesaas.in</a></p>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
