import React from 'react';
import Navbar from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';

export default function TermsAndConditions() {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-green-100 flex flex-col">
            <Navbar />

            <main className="flex-grow">
                {/* Header */}
                <div className="bg-gradient-to-b from-slate-50 to-white py-16 border-b border-slate-100">
                    <div className="mx-auto max-w-4xl px-6 text-center">
                        <h1 className="text-5xl font-black text-slate-900 sm:text-6xl mb-6">
                            Terms & <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Conditions</span>
                        </h1>
                        <p className="text-slate-500 font-medium">Last Updated: January 21, 2026</p>
                    </div>
                </div>

                {/* Content */}
                <div className="mx-auto max-w-4xl px-6 py-12 space-y-12">
                    {/* 1. Acceptance of Terms */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-sm font-black">1</span>
                            Acceptance of Terms
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                            Welcome to <strong className="text-slate-900">1chat</strong>, a WhatsApp Business API platform operated by Onesaas Technologies Private Limited. By accessing, registering for, or using our services, you agree to be bound by these Terms and Conditions (&quot;Terms&quot;). If you do not agree to these Terms, you must not use our platform. These Terms constitute a legally binding agreement between you and Onesaas Technologies Private Limited.
                        </p>
                    </section>

                    {/* 2. Service Description */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-sm font-black">2</span>
                            Service Description
                        </h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            1chat provides a subscription-based web platform that enables businesses to:
                        </p>
                        <ul className="list-disc list-outside ml-12 space-y-2 text-slate-600">
                            <li>Access and utilize the WhatsApp Business Cloud API</li>
                            <li>Manage customer communications through WhatsApp</li>
                            <li>Automate messaging workflows and campaigns</li>
                            <li>Create and deploy AI-powered chatbots</li>
                            <li>Manage templates, contacts, and analytics</li>
                            <li>Integrate WhatsApp functionality with existing business systems via API</li>
                        </ul>
                        <p className="text-slate-600 leading-relaxed mt-4">
                            Our services are subject to availability and may be modified, suspended, or discontinued at any time with reasonable notice.
                        </p>
                    </section>

                    {/* 3. Account Registration and Security */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-sm font-black">3</span>
                            Account Registration and Security
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">3.1 Account Creation</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    You must provide accurate, complete, and current information during registration. You are responsible for maintaining and promptly updating your account information to keep it accurate and complete. Providing false or misleading information may result in account termination.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">3.2 Account Security</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    You are solely responsible for maintaining the confidentiality of your account credentials (username, password, API keys) and for all activities conducted under your account. You must immediately notify us of any unauthorized access or security breach. We are not liable for any loss or damage arising from your failure to protect your account credentials.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">3.3 Account Eligibility</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    You must be at least 18 years old and legally capable of entering into binding contracts to use our services. By creating an account, you represent and warrant that you meet these eligibility requirements.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 4. Subscription and Payment */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-sm font-black">4</span>
                            Subscription and Payment Terms
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">4.1 Subscription Plans</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Our services are offered on a subscription basis (monthly or yearly plans). Subscription fees are clearly displayed on our website and are subject to change with 30 days&apos; prior notice to existing subscribers. Current pricing includes platform access fees; WhatsApp Cloud API messaging charges from Meta are billed separately based on usage.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">4.2 Payment Processing</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Payments are processed through secure third-party payment gateways. By providing payment information, you authorize us to charge the applicable fees to your payment method. All fees are non-refundable except as expressly stated in our Refund Policy or required by law.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">4.3 Automatic Renewal</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Subscriptions automatically renew at the end of each billing period unless cancelled before the renewal date. You will be charged the then-current subscription fee. You may cancel your subscription at any time through your account settings.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">4.4 Taxes</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    All fees are exclusive of applicable taxes, duties, and governmental charges. You are responsible for paying all such charges in addition to the subscription fees.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 5. Acceptable Use Policy */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-sm font-black">5</span>
                            Acceptable Use Policy
                        </h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            You agree to use our services in compliance with all applicable laws, regulations, and Meta&apos;s WhatsApp Business Policies. You must NOT:
                        </p>
                        <ul className="list-disc list-outside ml-12 space-y-2 text-slate-600">
                            <li>Send spam, unsolicited messages, or engage in mass messaging to users who have not opted in</li>
                            <li>Transmit illegal, harmful, threatening, abusive, harassing, defamatory, or otherwise objectionable content</li>
                            <li>Violate any intellectual property rights, privacy rights, or other rights of third parties</li>
                            <li>Attempt to reverse engineer, decompile, hack, or otherwise access unauthorized areas of the platform</li>
                            <li>Use the platform for any illegal purpose or to violate any laws, including data protection and anti-spam regulations</li>
                            <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity</li>
                            <li>Interfere with or disrupt the platform or servers connected to the platform</li>
                            <li>Resell, sublicense, or redistribute access to the platform without express written permission</li>
                        </ul>
                        <p className="text-slate-600 leading-relaxed mt-4">
                            Violation of this Acceptable Use Policy may result in immediate suspension or termination of your account, without refund, and potential legal action.
                        </p>
                    </section>

                    {/* 6. Intellectual Property Rights */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-sm font-black">6</span>
                            Intellectual Property Rights
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">6.1 Our Intellectual Property</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    The 1chat platform, including its software, features, functionality, design, graphics, logos, and content, is owned by Onesaas Technologies Private Limited and is protected by copyright, trademark, patent, and other intellectual property laws. You are granted a limited, non-exclusive, non-transferable license to access and use the platform solely for your business purposes in accordance with these Terms.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">6.2 Your Content</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    You retain all rights to the content you submit, upload, or transmit through the platform. By using our services, you grant us a limited license to store, process, and transmit your content solely for the purpose of providing our services to you.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 7. Data Protection and Privacy */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-sm font-black">7</span>
                            Data Protection and Privacy
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                            Your use of our services is also governed by our Privacy Policy, which is incorporated into these Terms by reference. You acknowledge that you have read and understood our Privacy Policy. You are responsible for ensuring that your use of the platform, including your collection and processing of end-user data, complies with all applicable data protection laws and regulations, including obtaining necessary consents from your end-users.
                        </p>
                    </section>

                    {/* 8. Limitation of Liability */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-sm font-black">8</span>
                            Limitation of Liability
                        </h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            To the maximum extent permitted by applicable law:
                        </p>
                        <ul className="list-disc list-outside ml-12 space-y-2 text-slate-600">
                            <li>The platform is provided &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; without warranties of any kind, either express or implied</li>
                            <li>We do not guarantee uninterrupted, error-free, or secure operation of the platform</li>
                            <li>We are not liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the platform</li>
                            <li>Our total liability to you for any claims arising from your use of the platform shall not exceed the amount you paid us in the 12 months preceding the claim</li>
                            <li>We are not responsible for failures or delays caused by third-party services, including Meta/WhatsApp, payment processors, or internet service providers</li>
                        </ul>
                    </section>

                    {/* 9. Indemnification */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-sm font-black">9</span>
                            Indemnification
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                            You agree to indemnify, defend, and hold harmless Onesaas Technologies Private Limited, its officers, directors, employees, agents, and affiliates from any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys&apos; fees) arising out of or related to: (a) your use of the platform; (b) your violation of these Terms; (c) your violation of any rights of third parties; (d) your content; or (e) your violation of any applicable laws or regulations.
                        </p>
                    </section>

                    {/* 10. Termination */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-sm font-black">10</span>
                            Termination
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                            You may terminate your account at any time by cancelling your subscription through your account settings. We reserve the right to suspend or terminate your account immediately, without prior notice, if you violate these Terms, engage in fraudulent activity, or for any other reason at our sole discretion. Upon termination, your right to access and use the platform will immediately cease. Termination does not relieve you of any payment obligations incurred prior to termination.
                        </p>
                    </section>

                    {/* 11. Dispute Resolution and Governing Law */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-sm font-black">11</span>
                            Dispute Resolution and Governing Law
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">11.1 Governing Law</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    These Terms shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">11.2 Jurisdiction</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Any disputes arising out of or relating to these Terms or your use of the platform shall be subject to the exclusive jurisdiction of the courts located in Guwahati, Assam, India.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">11.3 Dispute Resolution</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Before initiating any formal legal proceedings, you agree to first attempt to resolve any disputes informally by contacting our support team. If the dispute cannot be resolved within 30 days, either party may pursue formal legal remedies.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 12. Changes to Terms */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-sm font-black">12</span>
                            Changes to These Terms
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                            We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on our website and updating the &quot;Last Updated&quot; date. Your continued use of the platform after such modifications constitutes your acceptance of the revised Terms. If you do not agree to the modified Terms, you must stop using the platform and cancel your subscription.
                        </p>
                    </section>

                    {/* 13. Miscellaneous */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-sm font-black">13</span>
                            Miscellaneous Provisions
                        </h2>
                        <ul className="list-disc list-outside ml-12 space-y-2 text-slate-600">
                            <li><strong className="text-slate-900">Entire Agreement:</strong> These Terms, together with our Privacy Policy, constitute the entire agreement between you and Onesaas Technologies Private Limited regarding the use of the platform.</li>
                            <li><strong className="text-slate-900">Severability:</strong> If any provision of these Terms is found to be invalid or unenforceable, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.</li>
                            <li><strong className="text-slate-900">Waiver:</strong> No waiver of any provision of these Terms shall be deemed a continuing waiver or waiver of any other provision.</li>
                            <li><strong className="text-slate-900">Assignment:</strong> You may not assign or transfer these Terms or your account without our prior written consent. We may assign these Terms without restriction.</li>
                        </ul>
                    </section>

                    {/* 14. Contact Information */}
                    <section className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-sm font-black">14</span>
                            Contact Information
                        </h2>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            If you have any questions or concerns about these Terms and Conditions, please contact us at:
                        </p>
                        <div className="space-y-3 text-slate-700">
                            <p><strong className="text-slate-900">Company:</strong> Onesaas Technologies Private Limited</p>
                            <p><strong className="text-slate-900">CIN:</strong> U46512AS2024PTC026214</p>
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
