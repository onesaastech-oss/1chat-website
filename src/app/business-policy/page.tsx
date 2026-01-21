import React from 'react';
import Navbar from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';

export default function BusinessPolicy() {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-green-100 flex flex-col">
            <Navbar />

            <main className="flex-grow">
                {/* Header */}
                <div className="bg-slate-50 py-12 border-b border-slate-100">
                    <div className="mx-auto max-w-4xl px-6 text-center">
                        <h1 className="text-4xl font-black text-slate-900 sm:text-5xl mb-4">
                            Business Policy Document
                        </h1>
                        <p className="text-slate-500 font-medium">Effective Date: 01-07-2025</p>
                    </div>
                </div>

                {/* Content */}
                <div className="mx-auto max-w-4xl px-6 py-12 space-y-12">
                    {/* 1. Company Overview */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-sm font-black">1</span>
                            Company Overview
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                            OneSaaS Technologies Private Limited is a technology company focused on developing web-based CRM and office management software. Our flagship product, OneSaaS Office Management System (w1chatting), is designed for Chartered Accountants, Cost Accountants, Company Secretaries, Advocates, and professional service providers to manage their staff, clients, tasks, and finances seamlessly through a centralized platform.
                        </p>
                    </section>

                    {/* 2. Product and Services */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-sm font-black">2</span>
                            Product and Services
                        </h2>
                        <ul className="list-disc list-outside ml-12 space-y-2 text-slate-600">
                            <li>Subscription-based access to our w1chatting web application.</li>
                            <li>Custom software development for professionals.</li>
                            <li>Technical support and software updates.</li>
                            <li>Optional integration services (e.g., payment gateways, APIs, document signing tools).</li>
                        </ul>
                    </section>

                    {/* 3. Pricing & Payment */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-sm font-black">3</span>
                            Pricing & Payment
                        </h2>
                        <ul className="list-disc list-outside ml-12 space-y-2 text-slate-600">
                            <li>Services are offered on a subscription basis (monthly/quarterly/annually).</li>
                            <li>Payments are accepted online through integrated payment gateways.</li>
                            <li>Invoices and payment receipts are automatically generated via the platform.</li>
                            <li>Pricing plans are available on our website and are subject to change with prior notice.</li>
                        </ul>
                    </section>

                    {/* 4. Refund and Cancellation Policy */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-sm font-black">4</span>
                            Refund and Cancellation Policy
                        </h2>
                        <ul className="list-disc list-outside ml-12 space-y-2 text-slate-600">
                            <li>Subscriptions may be cancelled anytime before the renewal date.</li>
                            <li>Refunds will be processed only if cancellation is made within 7 days of the initial payment for first-time subscriptions.</li>
                            <li>No refunds will be provided for renewals or on services already consumed.</li>
                            <li>Any technical dispute must be raised within 48 hours of service disruption for refund eligibility.</li>
                        </ul>
                    </section>

                    {/* 5. Privacy Policy */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-sm font-black">5</span>
                            Privacy Policy
                        </h2>
                        <ul className="list-disc list-outside ml-12 space-y-2 text-slate-600">
                            <li>We collect user data such as name, contact details, billing info, and business profile for account creation and platform usage.</li>
                            <li>Customer data remains confidential and is not shared with any third-party except as required to provide services (e.g., payment processors, legal compliance).</li>
                            <li>All data is stored securely in encrypted form and processed in accordance with the IT Act and applicable data protection laws in India.</li>
                        </ul>
                    </section>

                    {/* 6. Terms of Use */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-sm font-black">6</span>
                            Terms of Use
                        </h2>
                        <ul className="list-disc list-outside ml-12 space-y-2 text-slate-600">
                            <li>The w1chatting platform is licensed to subscribers for professional use only.</li>
                            <li>Unauthorized reselling, reverse engineering, or hacking attempts will result in account termination and legal action.</li>
                            <li>Users are responsible for the activities under their account and must maintain the confidentiality of their login credentials.</li>
                        </ul>
                    </section>

                    {/* 7. Compliance */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-sm font-black">7</span>
                            Compliance
                        </h2>
                        <ul className="list-disc list-outside ml-12 space-y-2 text-slate-600">
                            <li>Our software and services comply with applicable Indian IT laws, tax laws, and data privacy norms.</li>
                            <li>Customer support and complaint redressal are available through email and helpline within business hours.</li>
                        </ul>
                    </section>

                    {/* 8. Contact Details */}
                    <section className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-sm font-black">8</span>
                            Contact Details
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6 text-slate-600">
                            <div>
                                <p className="font-bold text-slate-900 mb-1">Company Name</p>
                                <p>OneSaaS Technologies Private Limited</p>
                            </div>
                            <div>
                                <p className="font-bold text-slate-900 mb-1">CIN</p>
                                <p>U46512AS2024PTC026214</p>
                            </div>
                            <div className="md:col-span-2">
                                <p className="font-bold text-slate-900 mb-1">Registered Office</p>
                                <p>H. No. 356, Vill. Nagajan Niz, Kharupetiaghat, Darrang, Assam 784115</p>
                            </div>
                            <div>
                                <p className="font-bold text-slate-900 mb-1">Email</p>
                                <p>onesaastech@gmail.com / contact@onesaas.in</p>
                            </div>
                            <div>
                                <p className="font-bold text-slate-900 mb-1">Phone</p>
                                <p>+91-7002695990</p>
                            </div>
                            <div>
                                <p className="font-bold text-slate-900 mb-1">Website</p>
                                <p>www.onesaas.in</p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
