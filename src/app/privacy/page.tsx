import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Privacy Policy | Third & Manageable",
    description: "Privacy Policy for Third & Manageable — learn how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
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
                            Privacy Policy
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
                                Third & Manageable (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the Third & Manageable website
                                (thirdandmanageable.com) and mobile application. This Privacy Policy explains how we collect,
                                use, disclose, and safeguard your information when you visit our website or use our app.
                                Please read this policy carefully.
                            </p>
                        </section>

                        {/* Information We Collect */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                                Information We Collect
                            </h2>
                            <div className="space-y-4">
                                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                                    <h3 className="text-lg font-semibold mb-3 text-white">Personal Information</h3>
                                    <p className="text-white/50 leading-relaxed">
                                        We collect account information you provide, including your name, email address,
                                        athlete profile details (sport, athlete status, school/organization), and any content
                                        you submit in check-ins, messages, support requests, and community interactions.
                                    </p>
                                </div>
                                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                                    <h3 className="text-lg font-semibold mb-3 text-white">Technical Data</h3>
                                    <p className="text-white/50 leading-relaxed">
                                        We collect technical data needed to run the app and website, such as device push tokens,
                                        service logs, IP addresses, browser type, operating system, referring URLs, pages visited,
                                        and access times. This data helps us maintain, improve, and secure our services.
                                    </p>
                                </div>
                                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                                    <h3 className="text-lg font-semibold mb-3 text-white">Cookies & Analytics</h3>
                                    <p className="text-white/50 leading-relaxed">
                                        Our website may use cookies and similar tracking technologies to enhance your browsing
                                        experience, analyze site traffic, and understand where our visitors are coming from.
                                        You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* How We Use Information */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                                How We Use Information
                            </h2>
                            <ul className="space-y-3">
                                {[
                                    "Authenticate your account and manage your sessions",
                                    "Personalize your app and website experience",
                                    "Deliver support features including The Clipboard, community rooms, and check-in tools",
                                    "Maintain community safety through moderation and reporting tools",
                                    "Communicate with you about updates, features, and support",
                                    "Improve product quality and reliability using aggregated, de-identified usage data",
                                    "Comply with legal obligations and enforce our Terms and Conditions",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-white/50">
                                        <span className="flex-shrink-0 w-1.5 h-1.5 bg-white/40 rounded-full mt-2.5" />
                                        <span className="leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Community and Safety */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                                Community and Safety
                            </h2>
                            <div className="p-6 bg-white/5 rounded-xl border border-white/10 space-y-4">
                                <p className="text-white/50 leading-relaxed">
                                    If you use community features, your display name, sport, athlete status, and messages
                                    may be visible to other approved users in relevant rooms.
                                </p>
                                <p className="text-white/50 leading-relaxed">
                                    Reported content and moderation events may be stored to investigate abuse, enforce guidelines,
                                    and protect users. We take community safety seriously and may take action on accounts that
                                    violate our community standards.
                                </p>
                                <p className="text-white/50 leading-relaxed">
                                    We do not sell your personal information to third parties. Community data is used solely to
                                    maintain a safe, respectful environment for all users.
                                </p>
                            </div>
                        </section>

                        {/* Third-Party Services */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                                Third-Party Services
                            </h2>
                            <p className="text-white/50 leading-relaxed mb-4">
                                We may use third-party services for authentication, analytics, hosting, and push notifications.
                                These services may have access to certain information as needed to perform their functions,
                                but they are obligated not to disclose or use it for any other purpose. Third-party services include:
                            </p>
                            <ul className="space-y-2">
                                {[
                                    "Firebase (Authentication, Cloud Firestore, Cloud Functions, Cloud Messaging)",
                                    "Analytics services to understand usage patterns",
                                    "Hosting and content delivery services",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-white/50">
                                        <span className="flex-shrink-0 w-1.5 h-1.5 bg-white/40 rounded-full mt-2.5" />
                                        <span className="leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Data Retention and Deletion */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                                Data Retention and Deletion
                            </h2>
                            <div className="p-6 bg-white/5 rounded-xl border border-white/10 space-y-4">
                                <p className="text-white/50 leading-relaxed">
                                    We retain your information for as long as your account is active or as needed to provide
                                    you services, comply with legal obligations, resolve disputes, and enforce our agreements.
                                </p>
                                <p className="text-white/50 leading-relaxed">
                                    You can request deletion directly in the app from Profile &gt; Delete Account.
                                    When deletion is requested, we remove user-owned data from our application databases and
                                    end active sessions. Some information may be retained in backup systems for a limited time
                                    or as required by law.
                                </p>
                                <p className="text-white/50 leading-relaxed">
                                    For website users, you may request data deletion by contacting us at the email below.
                                </p>
                            </div>
                        </section>

                        {/* Children's Privacy */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                                Children&apos;s Privacy
                            </h2>
                            <p className="text-white/50 leading-relaxed">
                                Our services are not directed to individuals under the age of 13. We do not knowingly collect
                                personal information from children under 13. If we learn we have collected personal information
                                from a child under 13, we will take steps to delete that information as quickly as possible.
                                If you believe a child under 13 has provided us with personal information, please contact us.
                            </p>
                        </section>

                        {/* Security */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                                Security
                            </h2>
                            <p className="text-white/50 leading-relaxed">
                                We use administrative, technical, and physical security measures to protect your personal information.
                                While we strive to use commercially acceptable means to protect your information, no method of
                                transmission over the Internet or method of electronic storage is 100% secure. We cannot guarantee
                                absolute security.
                            </p>
                        </section>

                        {/* Changes */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                                Changes to This Policy
                            </h2>
                            <p className="text-white/50 leading-relaxed">
                                We may update this Privacy Policy from time to time. We will notify you of any changes by posting
                                the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. You are advised to review
                                this Privacy Policy periodically for any changes.
                            </p>
                        </section>

                        {/* Contact */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                                Contact Us
                            </h2>
                            <div className="p-6 bg-[#040485] rounded-xl border border-white/10">
                                <p className="text-white/70 leading-relaxed">
                                    For privacy requests, questions, or support, contact us at:
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
