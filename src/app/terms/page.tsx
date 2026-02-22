import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Terms & Conditions | Third & Manageable",
    description: "Terms and Conditions for Third & Manageable — review the rules and guidelines for using our platform.",
};

export default function TermsPage() {
    return (
        <>
            <Navbar />
            <main className="pt-32 pb-24 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="mb-16 text-center">
                        <span className="text-sm font-medium tracking-widest uppercase text-white/40 mb-4 block">
                            Legal
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                            Terms & Conditions
                        </h1>
                        <p className="text-white/40">
                            Last updated: February 21, 2026
                        </p>
                    </div>

                    {/* Content */}
                    <div className="prose-style space-y-12">
                        {/* Intro */}
                        <section>
                            <p className="text-white/60 text-lg leading-relaxed">
                                Welcome to Third & Manageable. These Terms and Conditions (&quot;Terms&quot;) govern your use of the
                                Third & Manageable website (thirdandmanageable.com) and mobile application (&quot;Services&quot;).
                                By accessing or using our Services, you agree to be bound by these Terms.
                                Please read them carefully before using our platform.
                            </p>
                        </section>

                        {/* Acceptance of Terms */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                                Acceptance of Terms
                            </h2>
                            <div className="p-6 bg-white/5 rounded-xl border border-white/10 space-y-4">
                                <p className="text-white/50 leading-relaxed">
                                    By creating an account, accessing the website, or using the app, you agree to these
                                    Terms and our Privacy Policy. If you do not agree to all of these Terms, do not access
                                    or use the Services.
                                </p>
                                <p className="text-white/50 leading-relaxed">
                                    We reserve the right to modify these Terms at any time. We will provide notice of changes
                                    by updating the &quot;Last updated&quot; date. Your continued use of the Services after changes
                                    become effective constitutes acceptance of the revised Terms.
                                </p>
                            </div>
                        </section>

                        {/* Account and Eligibility */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                                Account and Eligibility
                            </h2>
                            <ul className="space-y-3">
                                {[
                                    "You must be at least 13 years old to create an account or use the Services",
                                    "You are responsible for all activity performed under your account and for maintaining account security",
                                    "You must provide accurate profile information and keep it up to date",
                                    "You may not share your account credentials with others or create multiple accounts",
                                    "You must promptly notify us of any unauthorized access to your account",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-white/50">
                                        <span className="flex-shrink-0 w-1.5 h-1.5 bg-white/40 rounded-full mt-2.5" />
                                        <span className="leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Community Rules */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                                Community Rules
                            </h2>
                            <p className="text-white/50 leading-relaxed mb-6">
                                Third & Manageable is built on a foundation of respect, support, and athlete culture.
                                To maintain a safe and welcoming environment for all users, the following rules apply:
                            </p>
                            <div className="space-y-4">
                                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                                    <h3 className="text-lg font-semibold mb-3 text-white">Prohibited Content</h3>
                                    <ul className="space-y-2">
                                        {[
                                            "Content that is abusive, threatening, discriminatory, or harassing",
                                            "Sexually explicit or graphically violent material",
                                            "Spam, phishing, or fraudulent content",
                                            "Impersonation of other users, athletes, or organizations",
                                            "Content that promotes self-harm or dangerous activities",
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-white/50">
                                                <span className="flex-shrink-0 w-1.5 h-1.5 bg-red-400 rounded-full mt-2.5" />
                                                <span className="leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                                    <h3 className="text-lg font-semibold mb-3 text-white">Content Moderation</h3>
                                    <p className="text-white/50 leading-relaxed">
                                        Users can report content and block other users. We may review, remove, or restrict content
                                        that violates these rules. We reserve the right to suspend or terminate accounts that
                                        engage in prohibited behavior. Moderation decisions are made to protect our community and
                                        may be applied at our discretion.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Intellectual Property */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                                Intellectual Property
                            </h2>
                            <div className="p-6 bg-white/5 rounded-xl border border-white/10 space-y-4">
                                <p className="text-white/50 leading-relaxed">
                                    The Services and their original content (excluding content provided by users), features,
                                    and functionality are and will remain the exclusive property of Third & Manageable.
                                    The Services are protected by copyright, trademark, and other intellectual property laws.
                                </p>
                                <p className="text-white/50 leading-relaxed">
                                    The Third & Manageable name, logo, and all related graphics, icons, and service names are
                                    trademarks of Third & Manageable. You may not use these marks without prior written permission.
                                </p>
                                <p className="text-white/50 leading-relaxed">
                                    By submitting content through the Services, you grant us a non-exclusive, worldwide,
                                    royalty-free license to use, display, and distribute your content in connection with providing
                                    and improving the Services.
                                </p>
                            </div>
                        </section>

                        {/* Disclaimers */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                                Disclaimers
                            </h2>
                            <div className="p-6 bg-white/5 rounded-xl border border-white/10 space-y-4">
                                <p className="text-white/50 leading-relaxed">
                                    The Services are provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of
                                    any kind, either express or implied, including but not limited to warranties of merchantability,
                                    fitness for a particular purpose, or non-infringement.
                                </p>
                                <p className="text-white/50 leading-relaxed">
                                    Third & Manageable does not provide medical, psychological, or professional counseling services.
                                    The content and tools available through the Services are intended for informational and
                                    supportive purposes only and should not be considered a substitute for professional advice,
                                    diagnosis, or treatment.
                                </p>
                            </div>
                        </section>

                        {/* No Emergency Service */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                                No Emergency Service
                            </h2>
                            <div className="p-6 bg-[#040485] rounded-xl border border-white/20">
                                <p className="text-white/70 leading-relaxed font-medium">
                                    ⚠️ This app and website do not provide emergency response services.
                                    In an emergency, call <strong className="text-white">911</strong>.
                                    For crisis support in the United States, call or text <strong className="text-white">988</strong>{" "}
                                    (Suicide & Crisis Lifeline).
                                </p>
                            </div>
                        </section>

                        {/* Limitation of Liability */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                                Limitation of Liability
                            </h2>
                            <p className="text-white/50 leading-relaxed">
                                In no event shall Third & Manageable, its directors, employees, partners, agents, suppliers,
                                or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages,
                                including without limitation loss of profits, data, use, goodwill, or other intangible losses,
                                resulting from your use of or inability to use the Services.
                            </p>
                        </section>

                        {/* Termination and Deletion */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                                Termination and Deletion
                            </h2>
                            <ul className="space-y-3">
                                {[
                                    "You may stop using the app and website at any time",
                                    "You can delete your account from within the app via Profile > Delete Account",
                                    "For website-only accounts, you may request deletion by contacting support",
                                    "We may suspend or terminate accounts that violate these Terms or create safety risks",
                                    "Upon termination, your right to use the Services will immediately cease",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-white/50">
                                        <span className="flex-shrink-0 w-1.5 h-1.5 bg-white/40 rounded-full mt-2.5" />
                                        <span className="leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Governing Law */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                                Governing Law
                            </h2>
                            <p className="text-white/50 leading-relaxed">
                                These Terms shall be governed by and construed in accordance with applicable law,
                                without regard to its conflict of law provisions. Our failure to enforce any right or
                                provision of these Terms will not be considered a waiver of those rights.
                            </p>
                        </section>

                        {/* Changes */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                                Changes to These Terms
                            </h2>
                            <p className="text-white/50 leading-relaxed">
                                We reserve the right to modify or replace these Terms at any time. If a revision is material,
                                we will provide at least 30 days&apos; notice prior to any new terms taking effect. What constitutes
                                a material change will be determined at our sole discretion.
                            </p>
                        </section>

                        {/* Contact */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                                Contact Us
                            </h2>
                            <div className="p-6 bg-[#040485] rounded-xl border border-white/10">
                                <p className="text-white/70 leading-relaxed">
                                    For legal or support questions, contact us at:
                                </p>
                                <a
                                    href="mailto:support@thirdandmanageable.com"
                                    className="text-white font-semibold text-lg hover:underline mt-2 inline-block"
                                >
                                    support@thirdandmanageable.com
                                </a>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
