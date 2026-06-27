import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/ui/Navbar';
import { Footer } from '../components/ui/Footer';

export default function RefundPolicy() {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-green-100 flex flex-col">
            <Navbar />

            <main className="flex-grow">
                <div className="bg-gradient-to-b from-slate-50 to-white py-16 border-b border-slate-100">
                    <div className="page-container text-center">
                        <h1 className="text-5xl font-black text-slate-900 sm:text-6xl mb-6">
                            Refund <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Policy</span>
                        </h1>
                        <p className="text-slate-500 font-medium">Last Updated: June 23, 2026</p>
                    </div>
                </div>

                <div className="page-container section-pad space-y-12">
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-sm font-black">1</span>
                            Introduction
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                            This Refund Policy applies to all payments made for <strong className="text-slate-900">OneChatting</strong>, a WhatsApp Business API platform operated by <strong className="text-slate-900">Onesaas Technologies Private Limited</strong> (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By subscribing to or purchasing any of our services, you acknowledge that you have read, understood, and agree to the terms outlined in this policy. This document should be read together with our <Link to="/terms" className="text-green-600 hover:text-green-700 font-medium">Terms &amp; Conditions</Link> and <Link to="/business-policy" className="text-green-600 hover:text-green-700 font-medium">Business Policy</Link>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-sm font-black">2</span>
                            General Policy — No Refunds
                        </h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            <strong className="text-slate-900">We do not offer refunds</strong> on subscription fees, add-on services, wallet top-ups, message credits, or any other charges associated with the OneChatting platform under normal circumstances. All sales are considered final once payment is successfully processed.
                        </p>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            This includes, but is not limited to:
                        </p>
                        <ul className="list-disc list-outside ml-12 space-y-3 text-slate-600">
                            <li>Change of mind after purchase or subscription activation</li>
                            <li>Partial use or non-use of the platform during an active billing period</li>
                            <li>Subscription renewals (monthly, quarterly, or annual)</li>
                            <li>Downgrades, plan changes, or unused features within your current plan</li>
                            <li>Third-party charges such as Meta WhatsApp Cloud API messaging fees</li>
                            <li>Account suspension or termination due to violation of our Terms &amp; Conditions or Acceptable Use Policy</li>
                        </ul>
                        <p className="text-slate-600 leading-relaxed mt-4">
                            Cancelling your subscription stops future billing but does not entitle you to a refund for the current or any previous billing period.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-sm font-black">3</span>
                            Exception — Unauthorized or Erroneous Transactions
                        </h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            In rare cases where our system debits your account for an <strong className="text-slate-900">unauthorized transaction</strong>, a <strong className="text-slate-900">duplicate charge</strong>, or a <strong className="text-slate-900">clear billing error</strong> attributable to OneChatting or our payment systems, we may initiate a refund after verification.
                        </p>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            Examples that may qualify for review include:
                        </p>
                        <ul className="list-disc list-outside ml-12 space-y-3 text-slate-600">
                            <li>A charge made without your authorization or consent</li>
                            <li>The same payment debited more than once for a single transaction</li>
                            <li>A charge for a plan or service you did not purchase or activate</li>
                            <li>A technical system error on our side that resulted in an incorrect debit amount</li>
                        </ul>
                        <p className="text-slate-600 leading-relaxed mt-4">
                            Refund approval under this section is at our sole discretion and subject to investigation. We reserve the right to request supporting documentation before processing any refund.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-sm font-black">4</span>
                            What Does Not Qualify for a Refund
                        </h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            The following situations are <strong className="text-slate-900">not eligible</strong> for a refund, even if a support ticket is raised:
                        </p>
                        <ul className="list-disc list-outside ml-12 space-y-3 text-slate-600">
                            <li>Dissatisfaction with platform features, performance, or user interface</li>
                            <li>Failure to use the service during an active subscription period</li>
                            <li>Issues caused by third-party services, including Meta/WhatsApp API outages or policy changes</li>
                            <li>Incorrect configuration, misuse, or lack of technical knowledge on the user&apos;s part</li>
                            <li>Promotional or discounted purchases, unless a billing error is proven</li>
                            <li>Charges disputed directly with your bank or payment provider without first contacting our support team</li>
                            <li>Requests raised after the applicable reporting window (see Section 5)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-sm font-black">5</span>
                            How to Raise a Refund Request
                        </h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            If you believe an unauthorized or erroneous transaction has occurred, you must raise a support ticket as soon as possible. Refund requests will only be considered when submitted through our official support channels.
                        </p>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">5.1 Raise a Ticket</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Contact our support team via the <Link to="/contact" className="text-green-600 hover:text-green-700 font-medium">Contact Us</Link> page or email us at <a href="mailto:contact@onesaas.in" className="text-green-600 hover:text-green-700 font-medium">contact@onesaas.in</a> with the subject line <strong className="text-slate-900">&quot;Refund Request — Unauthorized Transaction&quot;</strong>. Include your registered email address, account ID, transaction date, transaction ID or payment reference number, charged amount, and a clear description of the issue.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">5.2 Supporting Documents</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    To help us investigate promptly, please attach a copy of your payment receipt, bank or card statement showing the debit, and any other relevant proof. Incomplete requests may delay or prevent refund processing.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">5.3 Reporting Window</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Unauthorized or erroneous transaction claims should be reported within <strong className="text-slate-900">7 calendar days</strong> from the date of the transaction. Claims submitted after this period may not be eligible for review.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-sm font-black">6</span>
                            Refund Review and Processing Timeline
                        </h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            Once a valid ticket is raised, our billing and support team will review your request and verify the transaction details against our payment records.
                        </p>
                        <ul className="list-disc list-outside ml-12 space-y-3 text-slate-600">
                            <li><strong className="text-slate-900">Acknowledgement:</strong> We aim to acknowledge your ticket within 1–2 working days.</li>
                            <li><strong className="text-slate-900">Investigation:</strong> Review typically takes 3–5 working days, depending on the complexity of the case and response time from payment partners.</li>
                            <li><strong className="text-slate-900">Refund initiation:</strong> If your claim is approved, the refund will be initiated within <strong className="text-slate-900">7 working days</strong> from the date the ticket was raised, subject to successful verification.</li>
                            <li><strong className="text-slate-900">Bank processing:</strong> After initiation, it may take an additional 5–10 working days for the amount to reflect in your original payment method, depending on your bank or payment provider.</li>
                        </ul>
                        <p className="text-slate-600 leading-relaxed mt-4">
                            We will notify you by email once a refund has been approved, rejected, or processed. If additional information is required, we will contact you through the email associated with your account.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-sm font-black">7</span>
                            Refund Method
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                            Approved refunds will be credited to the <strong className="text-slate-900">original payment method</strong> used for the transaction. We do not provide refunds via cash, cheque, or alternative payment accounts unless required by applicable law. If the original payment method is no longer valid or available, you must inform us within 7 days of our approval notice so we can arrange an alternative method at our discretion.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-sm font-black">8</span>
                            Subscription Cancellation
                        </h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            You may cancel your OneChatting subscription at any time through your account settings. Cancellation takes effect at the end of your current billing cycle, and you will retain access to paid features until that date.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            <strong className="text-slate-900">Cancellation does not constitute a refund request.</strong> No pro-rata or partial refunds will be issued for unused time remaining in your subscription period.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-sm font-black">9</span>
                            Chargebacks and Payment Disputes
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                            We encourage you to contact our support team before initiating a chargeback or payment dispute with your bank or card issuer. Filing a chargeback for a valid, authorized transaction may result in immediate suspension of your account while the dispute is investigated. If a chargeback is found to be fraudulent or unjustified, we reserve the right to recover associated fees and pursue further action as permitted by law.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-sm font-black">10</span>
                            Legal Rights
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                            Nothing in this Refund Policy limits any rights you may have under applicable consumer protection laws in India or other jurisdictions where such laws apply. Where local law mandates a refund in specific circumstances, we will comply with those legal requirements.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-sm font-black">11</span>
                            Changes to This Policy
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                            We may update this Refund Policy from time to time to reflect changes in our billing practices, legal requirements, or business operations. Material changes will be posted on this page with an updated &quot;Last Updated&quot; date. Your continued use of OneChatting after such changes constitutes acceptance of the revised policy.
                        </p>
                    </section>

                    <section className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-sm font-black">12</span>
                            Contact Us
                        </h2>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            For refund-related enquiries or to raise a support ticket regarding an unauthorized transaction, please contact us at:
                        </p>
                        <div className="space-y-3 text-slate-700">
                            <p><strong className="text-slate-900">Company:</strong> Onesaas Technologies Private Limited</p>
                            <p><strong className="text-slate-900">Product:</strong> OneChatting</p>
                            <p><strong className="text-slate-900">Email:</strong> <a href="mailto:contact@onesaas.in" className="text-green-600 hover:text-green-700 font-medium">contact@onesaas.in</a></p>
                            <p><strong className="text-slate-900">Phone:</strong> <a href="tel:+917002695990" className="text-green-600 hover:text-green-700 font-medium">+91-7002695990</a></p>
                            <p><strong className="text-slate-900">Address:</strong> House No. 356, Nagajan, Kharupetia, Darrang, Assam - 784115, India</p>
                            <p><strong className="text-slate-900">Support:</strong> <Link to="/contact" className="text-green-600 hover:text-green-700 font-medium">Contact Us</Link></p>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
