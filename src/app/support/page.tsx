import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Support | Third & Manageable",
    description: "Get help with your Third & Manageable account, app access, safety concerns, and general questions.",
};

const supportChannels = [
    {
        title: "General Support",
        description: "Questions about the app, website, or your account.",
        actionLabel: "support@thirdandmanageable.com",
        actionHref: "mailto:support@thirdandmanageable.com?subject=General%20Support%20Request",
    },
    {
        title: "Account Help",
        description: "Login issues, password reset problems, or account access requests.",
        actionLabel: "Email Account Help",
        actionHref: "mailto:support@thirdandmanageable.com?subject=Account%20Help",
    },
    {
        title: "Safety and Reporting",
        description: "Report harmful behavior, abusive content, or community concerns.",
        actionLabel: "Report a Safety Issue",
        actionHref: "mailto:support@thirdandmanageable.com?subject=Safety%20Report",
    },
];

const faqItems = [
    {
        question: "How do I delete my account?",
        answer:
            "In the app, open Profile > Delete Account. If you cannot access the app, email support and we can help complete the request.",
    },
    {
        question: "I cannot log in. What should I do?",
        answer:
            "Try resetting your password first. If that does not work, contact support and include the email tied to your account and any error message you see.",
    },
    {
        question: "How do I report a bug?",
        answer:
            "Send a short description, what device you are using, and the steps that caused the issue. Screenshots help us diagnose faster.",
    },
    {
        question: "Is this an emergency support line?",
        answer:
            "No. Third & Manageable does not provide emergency services. In an emergency, call 911. For crisis support in the United States, call or text 988.",
    },
];

export default function SupportPage() {
    return (
        <>
            <Navbar />
            <main className="pt-32 pb-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-14 text-center">
                        <span className="text-sm font-medium tracking-widest uppercase text-white/40 mb-4 block">
                            Help Center
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                            Support
                        </h1>
                        <p className="text-white/55 text-lg max-w-2xl mx-auto">
                            Need help with the app or your account? We are here to help.
                        </p>
                    </div>

                    <section className="mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                            Contact Options
                        </h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            {supportChannels.map((channel) => (
                                <article
                                    key={channel.title}
                                    className="p-6 bg-white/5 rounded-xl border border-white/10"
                                >
                                    <h3 className="text-lg font-semibold text-white mb-2">{channel.title}</h3>
                                    <p className="text-white/50 leading-relaxed mb-4">{channel.description}</p>
                                    <a
                                        href={channel.actionHref}
                                        className="inline-flex items-center justify-center px-4 py-2.5 bg-white text-[#040485] font-semibold rounded-lg hover:bg-gray-100 transition-colors text-sm"
                                    >
                                        {channel.actionLabel}
                                    </a>
                                </article>
                            ))}
                        </div>
                    </section>

                    <section className="mb-12">
                        <div className="p-6 md:p-8 bg-[#040485] rounded-xl border border-white/20">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                                Before You Contact Support
                            </h2>
                            <ul className="space-y-3">
                                {[
                                    "Use the same email connected to your account when possible",
                                    "Include your device type and app version for technical issues",
                                    "Add screenshots and exact error text to speed up troubleshooting",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-white/70">
                                        <span className="flex-shrink-0 w-1.5 h-1.5 bg-white/60 rounded-full mt-2.5" />
                                        <span className="leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                            Frequently Asked Questions
                        </h2>
                        <div className="space-y-4">
                            {faqItems.map((item) => (
                                <article
                                    key={item.question}
                                    className="p-6 bg-white/5 rounded-xl border border-white/10"
                                >
                                    <h3 className="text-lg font-semibold text-white mb-2">{item.question}</h3>
                                    <p className="text-white/50 leading-relaxed">{item.answer}</p>
                                </article>
                            ))}
                        </div>
                    </section>

                    <section className="p-6 bg-white/5 rounded-xl border border-white/10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                            Related Links
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            <Link
                                href="/privacy"
                                className="inline-flex items-center justify-center px-5 py-2.5 border border-white/30 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="/terms"
                                className="inline-flex items-center justify-center px-5 py-2.5 border border-white/30 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                            >
                                Terms and Conditions
                            </Link>
                            <Link
                                href="/reviews"
                                className="inline-flex items-center justify-center px-5 py-2.5 border border-white/30 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                            >
                                App Reviews
                            </Link>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}
